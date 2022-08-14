import Block from '../../core/block';

import tmpl from './tmpl';
import './style.scss';

export default class Message extends Block {
  render() {
    return this.compile(tmpl);
  }
}
