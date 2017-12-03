import VueRouter from 'vue-router';
import WelcomePage from './components/shared/welcome';

const routes = [{
  path: '/', component: WelcomePage,
}];

export default new VueRouter({ routes });
