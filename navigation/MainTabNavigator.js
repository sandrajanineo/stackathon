import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import UploadForm from '../screens/UploadForm';
import SettingsScreen from '../screens/SettingsScreen';
import ProductsView from '../screens/ProductsView';
import Tops from '../components/Tops';
import Bottoms from '../components/Bottoms';
import FullBody from '../components/FullBody';
import OutfitGenerator from '../components/OutfitGenerator';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  OutfitGenerator: OutfitGenerator,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ProductsViewStack = createStackNavigator({
  ProductsView: ProductsView,
  Tops: Tops,
  Bottoms: Bottoms,
  FullBody: FullBody,
});

ProductsViewStack.navigationOptions = {
  tabBarLabel: 'Your Closet',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const UploadFormStack = createStackNavigator({
  UploadForm: UploadForm,
});

UploadFormStack.navigationOptions = {
  tabBarLabel: 'Add to Collection!',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ProductsViewStack,
  UploadFormStack,
  SettingsStack,
});
