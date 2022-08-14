import Block from '../../core/Block';

import FormInput from '../../components/Forms/Input/FormInput';

import tmpl from './tmpl';
import './style.scss';

const signInProps = {
  formInputLogin: new FormInput({
    paramId: 'login',
    placeholder: 'login'
  }),
  formInputPassword: new FormInput({
    paramId: 'password',
    placeholder: 'password'
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
}

class SignIn extends Block {
  render() {
    return this.compile(tmpl);
  }
  addEvents() {
    this.addFormEvents();
    this.addSubmitFormValidation();
  }
}

export default () => new SignIn(signInProps)
