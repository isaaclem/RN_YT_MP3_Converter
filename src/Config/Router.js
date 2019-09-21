import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { MainPage, LibraryPage } from '../Screens';

const HomeStack = createStackNavigator({
  MainPage
});

const LibraryStack = createStackNavigator({
  LibraryPage
})

const App = createBottomTabNavigator({
  HomeStack,
  LibraryStack
});

const MainNavigator = createAppContainer(App);

export default MainNavigator;
