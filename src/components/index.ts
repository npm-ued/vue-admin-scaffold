import { App } from 'vue';
import CustomCard from './custom-card';
import CustomForm from './custom-form';
import CustomList from './custom-list';
const components = [CustomCard, CustomForm, CustomList];
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
export default { install };
