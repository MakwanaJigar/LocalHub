import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../screens/Splash';
import Login from '../auth/Login';
import Register from '../auth/Register';
import ForgotPassword from '../auth/ForgotPassword';
import OTP from '../auth/OTP';
import ResetPassword from '../auth/ResetPassword';
import TabNavigator from './TabNavigator';
import ProductDetail from '../screens/ProductDetail';
import ServiceDetail from '../screens/ServiceDetail';
import Subscription from '../screens/Subscription';
import UserSetting from '../screens/UserSetting';

const Stack = createNativeStackNavigator();

/* =====================================================
   ROOT STACK
   Splash -> Auth screens -> MainTabs (bottom tabs)
   Detail screens are pushed on top of the tabs.
===================================================== */

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#071A2C' },
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />

      {/* AUTH */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />

      {/* APP */}
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="UserSetting" component={UserSetting} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
