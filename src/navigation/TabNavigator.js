import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Home from '../screens/Home';
import CompareQuote from '../screens/CompareQuote';
import AskLocal from '../screens/AskLocal';
import Notification from '../screens/Notification';
import UserProfile from '../screens/UserProfile';

/* =====================================================
   TAB ICONS
===================================================== */

const ICONS = {
  home: 'https://img.icons8.com/ios-filled/100/ffffff/home.png',
  quotes:
    'https://img.icons8.com/ios-filled/100/ffffff/purchase-order.png',
  plus: 'https://img.icons8.com/ios-filled/100/ffffff/plus-math.png',
  alerts:
    'https://img.icons8.com/ios-filled/100/ffffff/appointment-reminders--v1.png',
  profile: 'https://img.icons8.com/ios-filled/100/ffffff/user.png',
};

/* =====================================================
   TABS
   `center: true` renders the raised round button.
===================================================== */

const TABS = [
  { name: 'Home', label: 'Home', icon: ICONS.home, component: Home },
  {
    name: 'CompareQuote',
    label: 'Quotes',
    icon: ICONS.quotes,
    component: CompareQuote,
  },
  {
    name: 'AskLocal',
    label: 'Ask',
    icon: ICONS.plus,
    component: AskLocal,
    center: true,
  },
  {
    name: 'Notification',
    label: 'Alerts',
    icon: ICONS.alerts,
    component: Notification,
  },
  {
    name: 'UserProfile',
    label: 'Profile',
    icon: ICONS.profile,
    component: UserProfile,
  },
];

const Tab = createBottomTabNavigator();

/* =====================================================
   CUSTOM TAB BAR
===================================================== */

const BottomTabBar = ({ state, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.tabBar,
        {
          height: 70 + insets.bottom,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const tab = TABS.find(t => t.name === route.name);
        const focused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        if (tab.center) {
          return (
            <TouchableOpacity
              key={route.key}
              style={styles.mainNavButton}
              activeOpacity={0.85}
              onPress={onPress}
            >
              <Image
                source={{ uri: tab.icon }}
                style={styles.mainNavIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.navItem}
            activeOpacity={0.8}
            onPress={onPress}
          >
            <View
              style={[
                styles.navIconWrap,
                focused && styles.navIconWrapActive,
              ]}
            >
              <Image
                source={{ uri: tab.icon }}
                style={[
                  styles.navIcon,
                  focused && styles.navIconActive,
                ]}
                resizeMode="contain"
              />
            </View>

            <Text
              style={[
                styles.navText,
                focused && styles.navTextActive,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const renderTabBar = props => <BottomTabBar {...props} />;

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={renderTabBar}
    >
      {TABS.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;

/* =====================================================
   STYLES
===================================================== */

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#081A2B',
    borderTopWidth: 1,
    borderTopColor: '#132B42',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 8,

    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 16,
  },

  navItem: {
    width: 66,
    alignItems: 'center',
    justifyContent: 'center',
  },

  navIconWrap: {
    width: 48,
    height: 30,
    borderRadius: 15,
    // Always set a background so Android keeps the radius when it toggles
    backgroundColor: 'rgba(59,130,246,0)',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
  },

  navIconWrapActive: {
    backgroundColor: 'rgba(59,130,246,0.16)',
  },

  navIcon: {
    width: 22,
    height: 22,
    tintColor: '#70869B',
  },

  navIconActive: {
    tintColor: '#5B9DFF',
  },

  navText: {
    color: '#72879A',
    fontSize: 11,
    fontWeight: '600',
  },

  navTextActive: {
    color: '#5B9DFF',
    fontWeight: '800',
  },

  mainNavButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
    borderWidth: 4,
    borderColor: '#071A2C',

    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 10,
  },

  mainNavIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
});
