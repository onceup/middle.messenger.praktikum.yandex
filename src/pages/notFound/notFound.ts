import Link from '../../components/Link/Link';
import Block from '../../core/Block';

import tmpl from './tmpl';
import './style.scss';

const notFoundProps = {
	errorMessage: '404 Error',
	Link: new Link({
		url: '/',
		linkText: 'Back to the main page'
	}),
}

class NotFound extends Block {
  render() {
    return this.compile(tmpl);
  }
}

export default () => new NotFound(notFoundProps)
