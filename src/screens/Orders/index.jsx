import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ongoing from './OngoingScreen/index';
import History from './HistoryScreen/index';
const MyTabs = createMaterialTopTabNavigator();
import styles from './style';
import { CONSTANTS } from '../../utils/constants';
const Orders = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headingContainer}>
        <Text style={styles.myOrdersText}>My Orders</Text>
      </View>

      {/* <MyTabs.Navigator>
        <MyTabs.Screen name="Ongoing" component={Ongoing} />
        <MyTabs.Screen name="History" component={History} />
      </MyTabs.Navigator> */}
      <MyTabs.Navigator
        screenOptions={({ route }) => ({
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: focused ? 16 : 14,
                fontWeight: focused ? '700' : '500',
                color: focused
                  ? CONSTANTS.THEME.SECONDARY_COLOR
                  : CONSTANTS.colors.GRAY_COLOR,
                letterSpacing: 0.3,
              }}
            >
              {route.name}
            </Text>
          ),
          tabBarIndicatorStyle: {
            backgroundColor: CONSTANTS.THEME.SECONDARY_COLOR,
            height: 2,
            borderRadius: 1,
            // width: 30,
            // marginLeft: 40,
          },
          tabBarStyle: {
            backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
            elevation: 0,
          },
        })}
      >
        <MyTabs.Screen name="Ongoing" component={Ongoing} />
        <MyTabs.Screen name="History" component={History} />
      </MyTabs.Navigator>
    </View>
  );
};

export default Orders;
