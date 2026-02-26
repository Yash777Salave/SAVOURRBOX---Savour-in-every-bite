import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Home from '../screens/Home/Home/index';
import AboutUsScreen from '../screens/Profile/InformationScreens/AboutUsScreen/AboutUsScreen';
import BottomTabNavigation from '../routes/BottomTabNavigation';
import PaymentDetailsScreen from '../screens/Profile/InformationScreens/PaymentDetails/PaymentDetailsScreen';
import HelpSupport from '../screens/Profile/InformationScreens/HelpSupport/HelpSupport';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PaymentDetailsScreen"
        component={PaymentDetailsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="HelpSupport"
        component={HelpSupport}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
