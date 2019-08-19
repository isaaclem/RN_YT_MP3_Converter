import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({ name: 'abc' })
  .useReactNative()
  .use(reactotronRedux())
  .connect();

Reactotron.clear();

export default reactotron;
