import Block from '../../../core/Block';

import tmpl from './tmpl';
import './style.scss';

export default class FormInput extends Block {
  render() {
    return this.compile(tmpl);
  }
}
