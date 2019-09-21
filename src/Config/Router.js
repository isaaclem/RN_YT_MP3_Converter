import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { MainPage, LibraryPage, SearchModal } from '../Screens';

const HomeStack = createStackNavigator({
  MainPage
}, {
  headerMode: 'none'
});

const LibraryStack = createStackNavigator({
  LibraryPage
});

const App = createBottomTabNavigator({
  HomeStack,
  LibraryStack
});

const App2 = createStackNavigator({
  App,
  SearchModal
}, {
  mode: 'modal',
  headerMode: 'none'
});

const MainNavigator = createAppContainer(App2);

export default MainNavigator;
