import {
  loginRegexp,
  nameRegexp,
  phoneRegexp,
  emailRegexp,
  passwordRegexp,
  messageRegexp,
} from "./constants";

export const focusLogin = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "enter login";
};

export const focusFirstName = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "enter name";
};

export const focusSecondName = (
  value: string,
  validationBlock: HTMLElement
) => {
  if (!value) validationBlock.innerText = "enter second name";
};

export const focusPhone = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "enter phone";
};

export const focusEmail = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "enter email";
};

export const focusMessage = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "enter message";
};

export const focusPassword = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "enter password";
};

export const blurLogin = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "enter login";
  else if (!value.match(loginRegexp))
    validationBlock.innerText = "invalid login";
  else validationBlock.innerText = "";
};

export const blurFirstName = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "enter name";
  else if (!value.match(nameRegexp))
    validationBlock.innerText = "invalid chars in name";
  else validationBlock.innerText = "";
};

export const blurSecondName = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "enter second name";
  else if (!value.match(nameRegexp))
    validationBlock.innerText = "invalid chars in second name";
  else validationBlock.innerText = "";
};

export const blurPhone = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "enter phone";
  else if (!value.match(phoneRegexp))
    validationBlock.innerText = "enter valid phone number";
  else validationBlock.innerText = "";
};

export const blurEmail = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "enter email";
  else if (!value.match(emailRegexp))
    validationBlock.innerText = "enter valid email";
  else validationBlock.innerText = "";
};

export const blurMessage = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "enter message";
  else if (!value.match(messageRegexp))
    validationBlock.innerText = "empty message";
  else validationBlock.innerText = "";
};

export const blurPassword = (value: string, validationBlock: HTMLElement) => {
  if (!value) validationBlock.innerText = "enter password";
  else if (!value.match(passwordRegexp))
    validationBlock.innerText = "invalid password";
  else validationBlock.innerText = "";
};
