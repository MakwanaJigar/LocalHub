import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  Switch,
} from 'react-native';

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

const UserProfile = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(true);

  const handleEditProfile = () => {
    console.log('Edit Profile');
  };

  const handleLogout = () => {
    console.log('Logout');

    // Example:
    // navigation.replace('Login');
  };

  const handleNavigation = screen => {
    console.log('Navigate to:', screen);

    // Example:
    // navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
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

        {/* =================================================
            BOTTOM NAVIGATION
        ================================================= */}

        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: ICONS.home }}
              style={styles.navIcon}
              resizeMode="contain"
            />

            <Text style={styles.navText}>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: ICONS.explore }}
              style={styles.navIcon}
              resizeMode="contain"
            />

            <Text style={styles.navText}>
              Explore
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.centerNavButton}
            activeOpacity={0.85}
          >
            <Image
              source={{ uri: ICONS.plus }}
              style={styles.centerNavIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: ICONS.chat }}
              style={styles.navIcon}
              resizeMode="contain"
            />

            <Text style={styles.navText}>
              Chat
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: ICONS.profile }}
              style={[
                styles.navIcon,
                styles.navIconActive,
              ]}
              resizeMode="contain"
            />

            <Text
              style={[
                styles.navText,
                styles.navTextActive,
              ]}
            >
              Profile
            </Text>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 8,
    paddingTop: 6,
  },

  /* =====================================================
     HEADER
  ===================================================== */

  header: {
    minHeight: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  brandIconBox: {
    width: 18,
    height: 18,
    borderRadius: 5,
    backgroundColor: '#3477D8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },

  brandIcon: {
    width: 9,
    height: 9,
    tintColor: '#FFFFFF',
  },

  headerBrandText: {
    flex: 1,
    color: '#BCC9D5',
    fontSize: 6,
    fontWeight: '700',
  },

  headerProfileButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#AFC7FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerProfileIcon: {
    width: 12,
    height: 12,
    tintColor: '#071A2C',
  },

  /* =====================================================
     PROFILE CARD
  ===================================================== */

  profileCard: {
    backgroundColor: '#102438',
    borderRadius: 9,
    padding: 9,
    marginBottom: 8,
  },

  profileTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatarWrapper: {
    width: 58,
    height: 58,
    marginRight: 9,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 2,
    borderColor: '#31546D',
  },

  avatarBadge: {
    position: 'absolute',
    right: 0,
    bottom: 1,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#AFC7FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#102438',
  },

  avatarBadgeText: {
    color: '#071A2C',
    fontSize: 5,
    fontWeight: '900',
  },

  profileInfo: {
    flex: 1,
  },

  profileName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },

  profileContact: {
    color: '#8EA2B5',
    fontSize: 5,
    marginTop: 2,
  },

  profileBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  verifiedBadge: {
    backgroundColor: 'rgba(16,185,129,0.14)',
    borderRadius: 6,
    paddingHorizontal: 5,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },

  verifiedBadgeIcon: {
    width: 8,
    height: 8,
    tintColor: '#10B981',
    marginRight: 3,
  },

  verifiedBadgeText: {
    color: '#10B981',
    fontSize: 4,
    fontWeight: '700',
  },

  ratingBadge: {
    marginLeft: 5,
    backgroundColor: 'rgba(245,158,11,0.15)',
    borderRadius: 6,
    paddingHorizontal: 5,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingStar: {
    width: 8,
    height: 8,
    marginRight: 2,
  },

  ratingBadgeText: {
    color: '#F59E0B',
    fontSize: 4,
    fontWeight: '800',
  },

  editProfileButton: {
    height: 28,
    borderRadius: 6,
    backgroundColor: '#18354D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  editProfileIcon: {
    width: 9,
    height: 9,
    tintColor: '#8EB6FF',
    marginRight: 4,
  },

  editProfileText: {
    color: '#D8E4ED',
    fontSize: 6,
    fontWeight: '700',
  },

  /* =====================================================
     STATS
  ===================================================== */

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },

  statCard: {
    width: '31.8%',
    minHeight: 65,
    borderRadius: 8,
    backgroundColor: '#102438',
    alignItems: 'center',
    justifyContent: 'center',
  },

  statIconBox: {
    width: 25,
    height: 25,
    borderRadius: 7,
    backgroundColor: '#183650',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
  },

  statIconBoxGreen: {
    width: 25,
    height: 25,
    borderRadius: 7,
    backgroundColor: 'rgba(16,185,129,0.13)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
  },

  statIconBoxOrange: {
    width: 25,
    height: 25,
    borderRadius: 7,
    backgroundColor: 'rgba(245,158,11,0.13)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
  },

  statIcon: {
    width: 12,
    height: 12,
    tintColor: '#70A7FF',
  },

  statIconGreen: {
    width: 12,
    height: 12,
    tintColor: '#10B981',
  },

  statIconOrange: {
    width: 12,
    height: 12,
    tintColor: '#F59E0B',
  },

  statValue: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
  },

  statLabel: {
    color: '#8599AC',
    fontSize: 4,
    marginTop: 1,
    textAlign: 'center',
  },

  /* =====================================================
     BUSINESS MODE
  ===================================================== */

  businessModeCard: {
    minHeight: 48,
    backgroundColor: '#102438',
    borderRadius: 8,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  businessModeLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  businessModeIconBox: {
    width: 29,
    height: 29,
    borderRadius: 7,
    backgroundColor: '#183650',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  businessModeIcon: {
    width: 14,
    height: 14,
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
    fontSize: 7,
    fontWeight: '700',
  },

  proBadge: {
    backgroundColor: 'rgba(245,158,11,0.13)',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginLeft: 4,
  },

  proBadgeText: {
    color: '#F59E0B',
    fontSize: 4,
    fontWeight: '900',
  },

  businessModeSubtitle: {
    color: '#778DA0',
    fontSize: 5,
    marginTop: 2,
  },

  businessModeArrow: {
    width: 9,
    height: 9,
    tintColor: '#8297AA',
  },

  /* =====================================================
     SECTIONS
  ===================================================== */

  sectionLabel: {
    color: '#89A0B5',
    fontSize: 5,
    fontWeight: '800',
    letterSpacing: 0.35,
    marginBottom: 5,
    marginTop: 2,
  },

  menuCard: {
    backgroundColor: '#102438',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },

  menuRow: {
    minHeight: 47,
    paddingHorizontal: 8,
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
    width: 27,
    height: 27,
    borderRadius: 7,
    backgroundColor: '#17334D',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  menuIconBoxOrange: {
    width: 27,
    height: 27,
    borderRadius: 7,
    backgroundColor: 'rgba(245,158,11,0.11)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  menuIcon: {
    width: 12,
    height: 12,
    tintColor: '#75A9FF',
  },

  menuIconOrange: {
    width: 12,
    height: 12,
    tintColor: '#F59E0B',
  },

  menuTextArea: {
    flex: 1,
  },

  menuTitle: {
    color: '#E8EFF5',
    fontSize: 7,
    fontWeight: '700',
  },

  menuSubtitle: {
    color: '#71879A',
    fontSize: 5,
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
    borderRadius: 5,
    backgroundColor: '#203B55',
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginRight: 6,
  },

  menuBadgeOrange: {
    backgroundColor: 'rgba(245,158,11,0.13)',
  },

  menuBadgeText: {
    color: '#8FB6FF',
    fontSize: 4,
    fontWeight: '700',
  },

  menuBadgeTextOrange: {
    color: '#F59E0B',
  },

  menuArrow: {
    width: 8,
    height: 8,
    tintColor: '#7890A4',
  },

  menuDivider: {
    height: 1,
    backgroundColor: '#172F43',
    marginLeft: 42,
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
    height: 38,
    borderRadius: 7,
    backgroundColor: '#2B0F1A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 11,
  },

  logoutIcon: {
    width: 12,
    height: 12,
    tintColor: '#F06072',
    marginRight: 5,
  },

  logoutText: {
    color: '#F27787',
    fontSize: 7,
    fontWeight: '800',
  },

  /* =====================================================
     FOOTER
  ===================================================== */

  footer: {
    alignItems: 'center',
    marginBottom: 6,
  },

  footerTitle: {
    color: '#7890A4',
    fontSize: 5,
    fontWeight: '700',
  },

  footerSubtitle: {
    color: '#526A7E',
    fontSize: 4,
    marginTop: 2,
  },

  bottomSpace: {
    height: 70,
  },

  /* =====================================================
     BOTTOM NAV
  ===================================================== */

  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 58,
    backgroundColor: '#081A2B',
    borderTopWidth: 1,
    borderTopColor: '#132B42',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  navItem: {
    width: 48,
    alignItems: 'center',
  },

  navIcon: {
    width: 14,
    height: 14,
    tintColor: '#71879A',
    marginBottom: 3,
  },

  navIconActive: {
    tintColor: '#3B82F6',
  },

  navText: {
    color: '#6F8497',
    fontSize: 5,
  },

  navTextActive: {
    color: '#4F91FF',
  },

  centerNavButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#AFC8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -18,
  },

  centerNavIcon: {
    width: 17,
    height: 17,
    tintColor: '#071A2C',
  },
});