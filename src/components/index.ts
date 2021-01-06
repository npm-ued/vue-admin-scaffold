import { App } from 'vue';
import CustomCard from './custom-card';
import CustomForm from './custom-form';
import CustomList from './custom-list';
import CustomTable from './custom-table';
const components = [CustomCard, CustomForm, CustomList, CustomTable];
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
export default { install };
