import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile';
import Orders from '../screens/Orders';
import { CONSTANTS } from '../utils/constants';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  const CustomTabBarButton = ({ children, onPress }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          top: -16,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        activeOpacity={0.9}
      >
        <View
          style={{
            height: 60,
            width: 60,
            backgroundColor: CONSTANTS.THEME.SECONDARY_COLOR,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 4,
            // backgroundColor: 'white',
          }}
        >
          {children}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 6,
          // left: 20,
          // right: 20,
          // elevation: 0,
          // backgroundColor: CONSTANTS.THEME.SECONDARY_COLOR,
          // backgroundColor: CONSTANTS.THEME.PRIMARY_COLOR,
          // backgroundColor: CONSTANTS.colors.BLACK_COLOR,
          backgroundColor: '#ffff',
          borderRadius: 50,
          height: 50,
          // margin: 10,
          marginHorizontal: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                // justifyContent: 'center',
                top: 12,
              }}
            >
              <Image
                // source={require('../assets/icons/home2.png')}
                source={require('../assets/icons/blackHome.png')}
                style={{ height: 25, width: 25 }}
              />
              <Text
                style={{
                  // color: CONSTANTS.colors.APP_BG_COLOR,
                  color: CONSTANTS.colors.BLACK_COLOR,
                  fontSize: 16,
                  bottom: 4,
                }}
              >
                {focused && '•'}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/icons/delivery-bike.png')}
                style={{
                  height: 35,
                  width: 35,
                }}
              />
            </View>
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                // justifyConstent: 'center',
                top: 12,
              }}
            >
              <Image
                // source={require('../assets/icons/userIcon.png')}
                source={require('../assets/icons/Blackuser.png')}
                style={{ height: 25, width: 25 }}
              />
              <Text
                style={{ color: CONSTANTS.colors.BLACK_COLOR, fontSize: 16 }}
              >
                {focused && '•'}
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
