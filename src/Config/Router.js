import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ScreenA } from '../Screens';

const App = createStackNavigator({
  ScreenA
});

const MainNavigator = createAppContainer(App);

export default MainNavigator;
