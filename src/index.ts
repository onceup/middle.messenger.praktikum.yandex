import renderDOM from './core/renderDOM';
import notFound from './pages/notFound';
import Link from './components/Link/Link';
import serverError from './pages/serverError';
import signIn from './pages/signIn';
import signUp from './pages/signUp';
import userSettings from './pages/userSettings';
import dialogues from './pages/dialogues';

const { pathname } = window.location;

let content;
switch (pathname) {
  case '/':
    break;
  case '/signin':
    content = signIn();
    break;
  case '/signup':
    content = signUp();
    break;
  case '/userSettings':
    content = userSettings();
    break;
    case '/dialogues':
      content = dialogues();
      break;
  case '/500':
    content = notFound();
    break;
  case '/404':
    content = serverError();
    break;
  default:
    content = new Link({ url: '/', linkText: 'ololo' });
    break;
}

if (content) {
  renderDOM('root', content);
}
