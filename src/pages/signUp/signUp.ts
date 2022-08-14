import Block from '../../core/Block';

import FormInput from '../../components/Forms/Input/FormInput';

import tmpl from './tmpl';
import './style.scss';

const signUpProps = {
  formInputEmail: new FormInput({
    paramId: 'email',
    placeholder: 'email'
  }),
  formInputLogin: new FormInput({
    paramId: 'login',
    placeholder: 'login'
  }),
  formInputFirstName: new FormInput({
    paramId: 'first_name',
    placeholder: 'first name'
  }),
  formInputSecondName: new FormInput({
    paramId: 'second_name',
    placeholder: 'second name'
  }),
  formInputPassword: new FormInput({
    paramId: 'password',
    placeholder: 'password'
  }),
  formInputPhone: new FormInput({
    paramId: 'phone',
    placeholder: 'phone'
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

class SignUp extends Block {
  render() {
    return this.compile(tmpl);
  }
  addEvents() {
    this.addFormEvents();
    this.addSubmitFormValidation();
  }
}

export default () => new SignUp(signUpProps)
