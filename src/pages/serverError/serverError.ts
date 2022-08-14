import Link from '../../components/Link';
import Block from '../../core/Block';

import tmpl from './tmpl';
import './style.scss';

const serverErrorProps = {
	errorMessage: '500 Error',
	Link: new Link({
		url: '/',
		linkText: 'Back to the main page'
	}),
}

export class ServerError extends Block {
  render() {
    return this.compile(tmpl);
  }
}

export default () => new ServerError(serverErrorProps)
