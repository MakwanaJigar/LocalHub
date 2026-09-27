import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SHADOW } from '../theme';

/* =========================================================
   TEMPORARY ONLINE PNG ICONS

   Replace these later with your own local PNG files.
========================================================= */

const ICONS = {
  back:
    'https://img.icons8.com/ios-filled/100/ffffff/left.png',

  profile:
    'https://img.icons8.com/ios-filled/100/ffffff/user.png',

  edit:
    'https://img.icons8.com/ios-filled/100/ffffff/edit.png',

  verified:
    'https://img.icons8.com/ios-filled/100/ffffff/verified-badge.png',

  star:
    'https://img.icons8.com/fluency/96/star.png',

  request:
    'https://img.icons8.com/ios-filled/100/ffffff/document.png',

  store:
    'https://img.icons8.com/ios-filled/100/ffffff/shop.png',

  deal:
    'https://img.icons8.com/ios-filled/100/ffffff/discount--v1.png',

  business:
    'https://img.icons8.com/ios-filled/100/ffffff/city-buildings.png',

  quotes:
    'https://img.icons8.com/ios-filled/100/ffffff/receipt.png',

  orders:
    'https://img.icons8.com/ios-filled/100/ffffff/shopping-bag.png',

  saved:
    'https://img.icons8.com/ios-filled/100/ffffff/like.png',

  reviews:
    'https://img.icons8.com/ios-filled/100/ffffff/star.png',

  location:
    'https://img.icons8.com/ios-filled/100/ffffff/marker.png',

  wallet:
    'https://img.icons8.com/ios-filled/100/ffffff/wallet.png',

  notification:
    'https://img.icons8.com/ios-filled/100/ffffff/appointment-reminders.png',

  appearance:
    'https://img.icons8.com/ios-filled/100/ffffff/moon-symbol.png',

  help:
    'https://img.icons8.com/ios-filled/100/ffffff/help.png',

  logout:
    'https://img.icons8.com/ios-filled/100/ffffff/logout-rounded.png',

  arrowRight:
    'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  home:
    'https://img.icons8.com/ios-filled/100/ffffff/home.png',

  explore:
    'https://img.icons8.com/ios-filled/100/ffffff/compass.png',

  plus:
    'https://img.icons8.com/ios-filled/100/ffffff/plus-math.png',

  chat:
    'https://img.icons8.com/ios-filled/100/ffffff/chat-message.png',

  shield:
    'https://img.icons8.com/ios-filled/100/ffffff/shield.png',

  pro:
    'https://img.icons8.com/ios-filled/100/ffffff/crown.png',

  moon:
    'https://img.icons8.com/ios-filled/100/ffffff/crescent-moon.png',
};

/* =========================================================
   TEMPORARY ONLINE IMAGES
========================================================= */

const IMAGES = {
  avatar:
    'https://i.pravatar.cc/300?img=12',
};

/* =========================================================
   MAIN USER PROFILE SCREEN
========================================================= */

// Profile menu items -> registered screens
const PROFILE_ROUTES = {
  QuoteRequests: 'CompareQuote',
  Orders: 'ProductDetail',
  Saved: 'ServiceDetail',
  Reviews: 'ServiceDetail',
  DeliverySettings: 'UserSetting',
  Wallet: 'Subscription',
  NotificationSettings: 'Notification',
  Support: 'UserSetting',
};

const UserProfile = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(true);

  const handleEditProfile = () => {
    console.log('Edit Profile');

    navigation.navigate('UserSetting');
  };

  const handleLogout = () => {
    console.log('Logout');

    // Clear the history so Back can't return into the app.
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const handleNavigation = screen => {
    console.log('Navigate to:', screen);

    navigation.navigate(PROFILE_ROUTES[screen] ?? screen);
  };

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top', 'left', 'right']}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="#071A2C"
      />

      <View style={styles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* =================================================
              HEADER
          ================================================= */}

          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <View style={styles.brandIconBox}>
                <Image
                  source={{ uri: ICONS.shield }}
                  style={styles.brandIcon}
                  resizeMode="contain"
                />
              </View>

              <Text
                style={styles.headerBrandText}
                numberOfLines={1}
              >
                Brand logo.. Primary color...
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('UserSetting')}
              style={styles.headerProfileButton}
              activeOpacity={0.8}
            >
              <Image
                source={{ uri: ICONS.profile }}
                style={styles.headerProfileIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/* =================================================
              PROFILE CARD
          ================================================= */}

          <View style={styles.profileCard}>
            <View style={styles.profileTopRow}>
              <View style={styles.avatarWrapper}>
                <Image
                  source={{ uri: IMAGES.avatar }}
                  style={styles.avatar}
                  resizeMode="cover"
                />

                <View style={styles.avatarBadge}>
                  <Text style={styles.avatarBadgeText}>
                    RH
                  </Text>
                </View>
              </View>

              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>
                  Rahul Sharma
                </Text>

                <Text
                  style={styles.profileContact}
                  numberOfLines={1}
                >
                  +91 98765 43210 • Bodakdev, Ahmedabad
                </Text>

                <View style={styles.profileBadgeRow}>
                  <View style={styles.verifiedBadge}>
                    <Image
                      source={{ uri: ICONS.verified }}
                      style={styles.verifiedBadgeIcon}
                      resizeMode="contain"
                    />

                    <Text style={styles.verifiedBadgeText}>
                      Phone Verified
                    </Text>
                  </View>

                  <View style={styles.ratingBadge}>
                    <Image
                      source={{ uri: ICONS.star }}
                      style={styles.ratingStar}
                      resizeMode="contain"
                    />

                    <Text style={styles.ratingBadgeText}>
                      4.8
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={styles.editProfileButton}
              activeOpacity={0.85}
              onPress={handleEditProfile}
            >
              <Image
                source={{ uri: ICONS.edit }}
                style={styles.editProfileIcon}
                resizeMode="contain"
              />

              <Text style={styles.editProfileText}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>

          {/* =================================================
              PROFILE STATS
          ================================================= */}

          <View style={styles.statsRow}>
            <TouchableOpacity
              style={styles.statCard}
              activeOpacity={0.85}
            >
              <View style={styles.statIconBox}>
                <Image
                  source={{ uri: ICONS.request }}
                  style={styles.statIcon}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.statValue}>
                3
              </Text>

              <Text style={styles.statLabel}>
                Active Requests
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.statCard}
              activeOpacity={0.85}
            >
              <View style={styles.statIconBoxGreen}>
                <Image
                  source={{ uri: ICONS.saved }}
                  style={styles.statIconGreen}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.statValue}>
                12
              </Text>

              <Text style={styles.statLabel}>
                Saved Items
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.statCard}
              activeOpacity={0.85}
            >
              <View style={styles.statIconBoxOrange}>
                <Image
                  source={{ uri: ICONS.deal }}
                  style={styles.statIconOrange}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.statValue}>
                5
              </Text>

              <Text style={styles.statLabel}>
                Quotes
              </Text>
            </TouchableOpacity>
          </View>

          {/* =================================================
              BUSINESS MODE
          ================================================= */}

          <TouchableOpacity
            style={styles.businessModeCard}
            activeOpacity={0.85}
          >
            <View style={styles.businessModeLeft}>
              <View style={styles.businessModeIconBox}>
                <Image
                  source={{ uri: ICONS.business }}
                  style={styles.businessModeIcon}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.businessModeContent}>
                <View style={styles.businessModeTitleRow}>
                  <Text style={styles.businessModeTitle}>
                    Switch to Business Mode
                  </Text>

                  <View style={styles.proBadge}>
                    <Text style={styles.proBadgeText}>
                      PRO
                    </Text>
                  </View>
                </View>

                <Text style={styles.businessModeSubtitle}>
                  Manage your store & verified business
                </Text>
              </View>
            </View>

            <Image
              source={{ uri: ICONS.arrowRight }}
              style={styles.businessModeArrow}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* =================================================
              ACTIVITY & TRANSACTIONS
          ================================================= */}

          <Text style={styles.sectionLabel}>
            ACTIVITY & TRANSACTIONS
          </Text>

          <View style={styles.menuCard}>
            <ProfileMenuItem
              icon={ICONS.quotes}
              title="My Quote Requests"
              badge="3 Active"
              onPress={() =>
                handleNavigation('QuoteRequests')
              }
            />

            <ProfileMenuDivider />

            <ProfileMenuItem
              icon={ICONS.orders}
              title="Orders & Stock Holds"
              badge="1 Pending"
              badgeType="orange"
              onPress={() =>
                handleNavigation('Orders')
              }
            />

            <ProfileMenuDivider />

            <ProfileMenuItem
              icon={ICONS.saved}
              title="Saved Businesses & Deals"
              onPress={() =>
                handleNavigation('Saved')
              }
            />

            <ProfileMenuDivider />

            <ProfileMenuItem
              icon={ICONS.reviews}
              title="My Reviews & Ratings"
              onPress={() =>
                handleNavigation('Reviews')
              }
            />
          </View>

          {/* =================================================
              PREFERENCES
          ================================================= */}

          <Text style={styles.sectionLabel}>
            PREFERENCES & SETTINGS
          </Text>

          <View style={styles.menuCard}>
            <ProfileMenuItem
              icon={ICONS.location}
              title="Neighborhood & Delivery"
              subtitle="Bodakdev, SG Highway"
              onPress={() =>
                handleNavigation('DeliverySettings')
              }
            />

            <ProfileMenuDivider />

            <ProfileMenuItem
              icon={ICONS.wallet}
              title="Payment & Escrow Wallet"
              subtitle="LocalHub Pay ₹4,500.00"
              subtitleGreen
              onPress={() =>
                handleNavigation('Wallet')
              }
            />

            <ProfileMenuDivider />

            <ProfileMenuItem
              icon={ICONS.notification}
              title="Notifications & Alerts"
              onPress={() =>
                handleNavigation('NotificationSettings')
              }
            />

            <ProfileMenuDivider />

            {/* =============================================
                APPEARANCE
            ============================================= */}

            <View style={styles.menuRow}>
              <View style={styles.menuLeft}>
                <View style={styles.menuIconBoxOrange}>
                  <Image
                    source={{ uri: ICONS.appearance }}
                    style={styles.menuIconOrange}
                    resizeMode="contain"
                  />
                </View>

                <View>
                  <Text style={styles.menuTitle}>
                    App Appearance
                  </Text>

                  <Text style={styles.menuSubtitle}>
                    Dark Mode • Active
                  </Text>
                </View>
              </View>

              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{
                  false: '#263A4D',
                  true: '#456FAF',
                }}
                thumbColor={
                  darkMode
                    ? '#AFC8FF'
                    : '#94A3B8'
                }
                ios_backgroundColor="#263A4D"
                style={styles.darkModeSwitch}
              />
            </View>

            <ProfileMenuDivider />

            <ProfileMenuItem
              icon={ICONS.help}
              title="Help & Local Support"
              onPress={() =>
                handleNavigation('Support')
              }
            />
          </View>

          {/* =================================================
              LOG OUT
          ================================================= */}

          <TouchableOpacity
            style={styles.logoutButton}
            activeOpacity={0.85}
            onPress={handleLogout}
          >
            <Image
              source={{ uri: ICONS.logout }}
              style={styles.logoutIcon}
              resizeMode="contain"
            />

            <Text style={styles.logoutText}>
              Log Out of LocalHub
            </Text>
          </TouchableOpacity>

          {/* =================================================
              FOOTER
          ================================================= */}

          <View style={styles.footer}>
            <Text style={styles.footerTitle}>
              LocalHub v4.0 • Ahmedabad Node
            </Text>

            <Text style={styles.footerSubtitle}>
              Hyperlocal Network • Licensed • Listing Verified
            </Text>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

/* =========================================================
   PROFILE MENU COMPONENT
========================================================= */

const ProfileMenuItem = ({
  icon,
  title,
  subtitle,
  badge,
  badgeType,
  subtitleGreen,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.menuRow}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.menuLeft}>
        <View style={styles.menuIconBox}>
          <Image
            source={{ uri: icon }}
            style={styles.menuIcon}
            resizeMode="contain"
          />
        </View>

        <View style={styles.menuTextArea}>
          <Text style={styles.menuTitle}>
            {title}
          </Text>

          {subtitle ? (
            <Text
              style={[
                styles.menuSubtitle,
                subtitleGreen &&
                  styles.menuSubtitleGreen,
              ]}
            >
              {subtitle}
            </Text>
          ) : null}
        </View>
      </View>

      <View style={styles.menuRight}>
        {badge ? (
          <View
            style={[
              styles.menuBadge,
              badgeType === 'orange' &&
                styles.menuBadgeOrange,
            ]}
          >
            <Text
              style={[
                styles.menuBadgeText,
                badgeType === 'orange' &&
                  styles.menuBadgeTextOrange,
              ]}
            >
              {badge}
            </Text>
          </View>
        ) : null}

        <Image
          source={{ uri: ICONS.arrowRight }}
          style={styles.menuArrow}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

/* =========================================================
   DIVIDER
========================================================= */

const ProfileMenuDivider = () => {
  return <View style={styles.menuDivider} />;
};

export default UserProfile;

/* =========================================================
   STYLES
========================================================= */

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#071A2C',
  },

  mainContainer: {
    flex: 1,
    backgroundColor: '#071A2C',
  },

  scrollContent: {
    paddingHorizontal: 10,
    paddingTop: 8,
  },

  /* =====================================================
     HEADER
  ===================================================== */

  header: {
    minHeight: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  brandIconBox: {
    width: 23,
    height: 23,
    borderRadius: 7,
    backgroundColor: '#3477D8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  brandIcon: {
    width: 12,
    height: 12,
    tintColor: '#FFFFFF',
  },

  headerBrandText: {
    flex: 1,
    color: '#BCC9D5',
    fontSize: 12,
    fontWeight: '700',
  },

  headerProfileButton: {
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: '#AFC7FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerProfileIcon: {
    width: 16,
    height: 16,
    tintColor: '#071A2C',
  },

  /* =====================================================
     PROFILE CARD
  ===================================================== */

  profileCard: {
    backgroundColor: '#102438',
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  profileTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatarWrapper: {
    width: 75,
    height: 75,
    marginRight: 12,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#31546D',
  },

  avatarBadge: {
    position: 'absolute',
    right: 0,
    bottom: 1,
    width: 23,
    height: 23,
    borderRadius: 12,
    backgroundColor: '#AFC7FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#102438',
  },

  avatarBadgeText: {
    color: '#071A2C',
    fontSize: 11,
    fontWeight: '900',
  },

  profileInfo: {
    flex: 1,
  },

  profileName: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
  },

  profileContact: {
    color: '#8EA2B5',
    fontSize: 11,
    marginTop: 2,
  },

  profileBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },

  verifiedBadge: {
    backgroundColor: 'rgba(16,185,129,0.14)',
    borderRadius: 8,
    paddingHorizontal: 7,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  verifiedBadgeIcon: {
    width: 10,
    height: 10,
    tintColor: '#10B981',
    marginRight: 4,
  },

  verifiedBadgeText: {
    color: '#10B981',
    fontSize: 10,
    fontWeight: '700',
  },

  ratingBadge: {
    marginLeft: 7,
    backgroundColor: 'rgba(245,158,11,0.15)',
    borderRadius: 8,
    paddingHorizontal: 7,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingStar: {
    width: 10,
    height: 10,
    marginRight: 2,
  },

  ratingBadgeText: {
    color: '#F59E0B',
    fontSize: 10,
    fontWeight: '800',
  },

  editProfileButton: {
    height: 36,
    borderRadius: 8,
    backgroundColor: '#18354D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  editProfileIcon: {
    width: 12,
    height: 12,
    tintColor: '#8EB6FF',
    marginRight: 5,
  },

  editProfileText: {
    color: '#D8E4ED',
    fontSize: 12,
    fontWeight: '700',
  },

  /* =====================================================
     STATS
  ===================================================== */

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9,
  },

  statCard: {
    width: '31.8%',
    minHeight: 85,
    borderRadius: 14,
    backgroundColor: '#102438',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  statIconBox: {
    width: 33,
    height: 33,
    borderRadius: 9,
    backgroundColor: '#183650',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },

  statIconBoxGreen: {
    width: 33,
    height: 33,
    borderRadius: 9,
    backgroundColor: 'rgba(16,185,129,0.13)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },

  statIconBoxOrange: {
    width: 33,
    height: 33,
    borderRadius: 9,
    backgroundColor: 'rgba(245,158,11,0.13)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },

  statIcon: {
    width: 16,
    height: 16,
    tintColor: '#70A7FF',
  },

  statIconGreen: {
    width: 16,
    height: 16,
    tintColor: '#10B981',
  },

  statIconOrange: {
    width: 16,
    height: 16,
    tintColor: '#F59E0B',
  },

  statValue: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },

  statLabel: {
    color: '#8599AC',
    fontSize: 10,
    marginTop: 1,
    textAlign: 'center',
  },

  /* =====================================================
     BUSINESS MODE
  ===================================================== */

  businessModeCard: {
    minHeight: 62,
    backgroundColor: '#102438',
    borderRadius: 14,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 13,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  businessModeLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  businessModeIconBox: {
    width: 38,
    height: 38,
    borderRadius: 9,
    backgroundColor: '#183650',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  businessModeIcon: {
    width: 18,
    height: 18,
    tintColor: '#75A9FF',
  },

  businessModeContent: {
    flex: 1,
  },

  businessModeTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  businessModeTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  proBadge: {
    backgroundColor: 'rgba(245,158,11,0.13)',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginLeft: 5,
  },

  proBadgeText: {
    color: '#F59E0B',
    fontSize: 10,
    fontWeight: '900',
  },

  businessModeSubtitle: {
    color: '#778DA0',
    fontSize: 11,
    marginTop: 2,
  },

  businessModeArrow: {
    width: 12,
    height: 12,
    tintColor: '#8297AA',
  },

  /* =====================================================
     SECTIONS
  ===================================================== */

  sectionLabel: {
    color: '#89A0B5',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.35,
    marginBottom: 7,
    marginTop: 2,
  },

  menuCard: {
    backgroundColor: '#102438',
    borderRadius: 14,
    marginBottom: 13,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  menuRow: {
    minHeight: 61,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  menuIconBox: {
    width: 35,
    height: 35,
    borderRadius: 9,
    backgroundColor: '#17334D',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  menuIconBoxOrange: {
    width: 35,
    height: 35,
    borderRadius: 9,
    backgroundColor: 'rgba(245,158,11,0.11)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  menuIcon: {
    width: 16,
    height: 16,
    tintColor: '#75A9FF',
  },

  menuIconOrange: {
    width: 16,
    height: 16,
    tintColor: '#F59E0B',
  },

  menuTextArea: {
    flex: 1,
  },

  menuTitle: {
    color: '#E8EFF5',
    fontSize: 13,
    fontWeight: '700',
  },

  menuSubtitle: {
    color: '#71879A',
    fontSize: 11,
    marginTop: 2,
  },

  menuSubtitleGreen: {
    color: '#10B981',
  },

  menuRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuBadge: {
    borderRadius: 7,
    backgroundColor: '#203B55',
    paddingHorizontal: 7,
    paddingVertical: 4,
    marginRight: 8,
  },

  menuBadgeOrange: {
    backgroundColor: 'rgba(245,158,11,0.13)',
  },

  menuBadgeText: {
    color: '#8FB6FF',
    fontSize: 10,
    fontWeight: '700',
  },

  menuBadgeTextOrange: {
    color: '#F59E0B',
  },

  menuArrow: {
    width: 10,
    height: 10,
    tintColor: '#7890A4',
  },

  menuDivider: {
    height: 1,
    backgroundColor: '#172F43',
    marginLeft: 55,
  },

  darkModeSwitch: {
    transform: [
      { scaleX: 0.75 },
      { scaleY: 0.75 },
    ],
  },

  /* =====================================================
     LOGOUT
  ===================================================== */

  logoutButton: {
    height: 49,
    borderRadius: 9,
    backgroundColor: '#2B0F1A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },

  logoutIcon: {
    width: 16,
    height: 16,
    tintColor: '#F06072',
    marginRight: 7,
  },

  logoutText: {
    color: '#F27787',
    fontSize: 13,
    fontWeight: '800',
  },

  /* =====================================================
     FOOTER
  ===================================================== */

  footer: {
    alignItems: 'center',
    marginBottom: 8,
  },

  footerTitle: {
    color: '#7890A4',
    fontSize: 11,
    fontWeight: '700',
  },

  footerSubtitle: {
    color: '#526A7E',
    fontSize: 10,
    marginTop: 2,
  },

  bottomSpace: {
    height: 26,
  },

  /* =====================================================
     BOTTOM NAV
  ===================================================== */

  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 75,
    backgroundColor: '#081A2B',
    borderTopWidth: 1,
    borderTopColor: '#132B42',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  navItem: {
    width: 62,
    alignItems: 'center',
  },

  navIcon: {
    width: 18,
    height: 18,
    tintColor: '#71879A',
    marginBottom: 4,
  },

  navIconActive: {
    tintColor: '#3B82F6',
  },

  navText: {
    color: '#6F8497',
    fontSize: 11,
  },

  navTextActive: {
    color: '#4F91FF',
  },

  centerNavButton: {
    width: 55,
    height: 55,
    borderRadius: 27,
    backgroundColor: '#AFC8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -23,
  },

  centerNavIcon: {
    width: 22,
    height: 22,
    tintColor: '#071A2C',
  },
});