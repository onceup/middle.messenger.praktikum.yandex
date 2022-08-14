import Block from '../../core/Block';
import FormInput from '../../components/Forms/Input/FormInput';

import tmpl from './tmpl';
import './style.scss';

const userSettingsProps = {
  formInputFirstName: new FormInput({
    paramId: 'first_name',
    placeholder: 'first name'
  }),
  formInputSecondName: new FormInput({
    paramId: 'second_name',
    placeholder: 'second name'
  }),
  formInputDisplayName: new FormInput({
    paramId: 'display_name',
    placeholder: 'display name'
  }),
  formInputLogin: new FormInput({
    paramId: 'login',
    placeholder: 'login'
  }),
  formInputEmail: new FormInput({
    paramId: 'email',
    placeholder: 'email'
  }),
  formInputPhone: new FormInput({
    paramId: 'phone',
    placeholder: 'phone'
  }),
  formInputOldPassword: new FormInput({
    paramId: 'old_password',
    placeholder: 'old password'
  }),
  formInputNewPassword: new FormInput({
    paramId: 'new_password',
    placeholder: 'new password'
  }),
}

class UserSettings extends Block {
  render() {
    return this.compile(tmpl);
  }
}

export default () => new UserSettings(userSettingsProps)
