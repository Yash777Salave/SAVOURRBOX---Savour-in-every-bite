import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Orders from '../screens/Orders/index';
const MyTabs = createMaterialTopTabNavigator();
const TopTabNavigation = () => {
  return (
    <MyTabs.Navigator>
      <MyTabs.Screen name="Orders" component={Orders} />
    </MyTabs.Navigator>
  );
};

export default TopTabNavigation;

const styles = StyleSheet.create({});
