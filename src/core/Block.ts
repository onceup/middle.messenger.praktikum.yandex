import { v4 as makeUUID } from 'uuid';
import Handlebars from 'handlebars';
import FormValidation from '../services/FormValidation';

import EventBus from './EventBus';

type PropsAndChilds = {
  [index: string]: string | object | Block;
};

export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_RENDER: 'flow:render',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
  };

  private _element: HTMLElement;

  protected _meta: { props: PropsAndChilds }

  private eventBus: () => EventBus;

  props: PropsAndChilds;

  children: object;

  id: string;

  constructor(propsAndChildren = {}) {
    const eventBus = new EventBus();

    const { props, children } = this.getPropsAndChildren(propsAndChildren);
    this.children = children;

    this.props = props;
    this._meta = { props };
    this.id = makeUUID();

    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  getPropsAndChildren(propsAndChildren: PropsAndChilds) {
    const props: PropsAndChilds = {};
    const children: PropsAndChilds = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (
        Array.isArray(value) &&
        value.every((i) => i instanceof Block)
      ) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, children };
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  private _makePropsProxy(props: PropsAndChilds) {
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];

        return typeof value === 'function' ? value.bind(target) : value;
      },

      set(target: PropsAndChilds, prop, value) {
        target[prop] = value;

        this.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },

      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this.componentDidMount();

    Object.values(this.children).forEach((child: Block) => {
      child.dispatchComponentDidMount();
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  componentDidMount(): void {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(odlProps: PropsAndChilds, newProps: PropsAndChilds) {
    const response = this.componentDidUpdate(odlProps, newProps);
    if (!response) return;

    this._render();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(_oldProps: PropsAndChilds, _newProps: PropsAndChilds) {
    return true;
  }

  setProps = (nextProps: PropsAndChilds) => {
    if (!nextProps) return;

    Object.assign(this.props, nextProps);
  };

  private _render() {
    const block = this.render();

    const newElement = block.firstElementChild as HTMLElement;

    if (this._element) {
      this._element.replaceWith(newElement);
    }

    this._element = newElement;
    this.addEvents();
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  addEvents() {
    const { events } = this.props;

    if (!events) return;

    Object.keys(events).forEach((event) =>
      this._element?.addEventListener(event, events[event])
    );
  }

  compile(template: string, props?: PropsAndChilds): DocumentFragment {
    if (!props) props = this.props;

    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]: [string, Block]) => {
      propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
    });

    const fragment = this._createDocumentElement(
      'template'
    ) as HTMLTemplateElement;
    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    Object.values(this.children).forEach((child: Block) => {
      const stub = fragment.content.querySelector(
        `[data-id="${child.id}"]`
      ) as HTMLElement;

      stub && stub.replaceWith(child.getContent());
    });

    return fragment.content;
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  get element() {
    return this._element;
  }

  getContent(): HTMLElement {
    return <HTMLElement>this.element;
  }

  addFormEvents() {
    this._element
      .querySelectorAll('input')
      .forEach((input: HTMLInputElement) => {
        input.addEventListener('focus', (e) => {
          const target = e.target as HTMLInputElement;
          const validationBlock = this._element.querySelector(
            `#${target.id}-validation`
          );
          FormValidation.focus(
            target.value,
            target.id,
            validationBlock as HTMLElement
          );
        });

        input.addEventListener('blur', (e) => {
          const target = e.target as HTMLInputElement;
          const validationBlock = this._element.querySelector(
            `#${target.id}-validation`
          );
          FormValidation.blur(
            target.value,
            target.id,
            validationBlock as HTMLElement
          );
        });
      });
  }

  addSubmitFormValidation() {
    const form = this._element.querySelector('form') as HTMLFormElement;
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let errors = 0;
      const dataForm: {
        [index: string]: string;
      } = {};

      this._element
        .querySelectorAll('input')
        .forEach((input: HTMLInputElement) => {
          const validationBlock = this._element.querySelector(
            `#${input.id}-validation`
          );
          FormValidation.focus(
            input.value,
            input.id,
            validationBlock as HTMLElement
          );
          if (validationBlock?.innerHTML) errors++;
          else dataForm[input.id] = input.value;
        });

      if (!errors) {
        Object.entries(dataForm).forEach(([key, value]) => {
          console.log(key + ':', value);
        });
        console.log('submitted');
      } else console.log('validation errors!');
    });
  }
}
