import { App } from 'vue';
import globalComponents from '../components';

export default (app: App) => {
  app.use(globalComponents);
};
