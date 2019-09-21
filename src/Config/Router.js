import { createStackNavigator, createAppContainer } from 'react-navigation';
import { MainPage } from '../Screens';

const App = createStackNavigator({
  MainPage,
});

const MainNavigator = createAppContainer(App);

export default MainNavigator;
