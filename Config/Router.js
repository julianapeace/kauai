import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Feed from '../Components/Feed';
import Me from '../Components/Me';
import UserDetail from '../Components/UserDetail';

export const FeedStack = createStackNavigator({
  Feed:{
    screen: Feed,
    navigationOptions: {
      title: 'FeedFeed',
    }
  },
  UserDetail:{
    screen: UserDetail,
    navigationOptions: {
      title: 'UserDetailDetail',
    }
  }
})

export const Tabs = createBottomTabNavigator({
  Feed: {
    // screen: Feed,
    screen: FeedStack,
    navigationOptions:{
      tabBarLabel: 'Feed',
    },
  },
  Me: {
    screen: Me,
  },
})
