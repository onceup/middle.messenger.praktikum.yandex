import {
  focusLogin,
  focusFirstName,
  focusSecondName,
  focusPhone,
  focusEmail,
  focusPassword,
  focusMessage,
  blurLogin,
  blurFirstName,
  blurSecondName,
  blurPhone,
  blurEmail,
  blurPassword,
  blurMessage
} from "./formValidation";

export default class FormValidation {
  static focus(value: string, type: string, validationBlock: HTMLElement) {
    switch (type) {
      case "login":
        focusLogin(value, validationBlock);
        break;
      case "first_name":
        focusFirstName(value, validationBlock);
        break;
      case "second_name":
        focusSecondName(value, validationBlock);
        break;
      case "display_name":
        focusFirstName(value, validationBlock);
        break;
      case "phone":
        focusPhone(value, validationBlock);
        break;
      case "email":
        focusEmail(value, validationBlock);
        break;
      case "message":
        focusMessage(value, validationBlock);
        break;
      case "password":
      case "old_password":
      case "new_password":
        focusPassword(value, validationBlock);
        break;
    }
  }

  static blur(value: string, type: string, validationBlock: HTMLElement) {
    switch (type) {
      case "login":
        blurLogin(value, validationBlock);
        break;
      case "first_name":
        blurFirstName(value, validationBlock);
        break;
      case "second_name":
        blurSecondName(value, validationBlock);
        break;
      case "display_name":
        blurFirstName(value, validationBlock);
        break;
      case "phone":
        blurPhone(value, validationBlock);
        break;
      case "email":
        blurEmail(value, validationBlock);
        break;
      case "message":
          blurMessage(value, validationBlock);
          break;
      case "password":
      case "old_password":
      case "new_password":
        blurPassword(value, validationBlock);
        break;
    }
  }
}
