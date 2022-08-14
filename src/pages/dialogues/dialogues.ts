import FormInput from '../../components/Forms/Input/FormInput';
import Block from '../../core/block';
import Message from '../../components/Message';

import tmpl from './tmpl';
import './style.scss';

const dialoguesProps = {
  formInputMessage: new FormInput({
    paramId: 'message',
    placeholder: 'message'
  }),
	dialogueText1: new Message({
		text: "don't worry, will fix it sometimes later"
	}),
	messageText1: new Message({
		text: "hi, wtf is with design?",
	}),
	messageText2: new Message({
		text: "don't worry, will fix it sometimes later",
	}),
  events: {
    focus: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    },
    blur: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    },
  },
};

class Dialogues extends Block {
  render() {
    return this.compile(tmpl);
  }
	addEvents() {
    this.addFormEvents();
    this.addSubmitFormValidation();
  }
}

export default () => new Dialogues(dialoguesProps)
