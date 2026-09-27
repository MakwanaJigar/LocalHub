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

   Later you can replace these URLs with your local PNG files.
========================================================= */

const ICONS = {
  back:
    'https://img.icons8.com/ios-filled/100/ffffff/left.png',

  shield:
    'https://img.icons8.com/ios-filled/100/ffffff/shield.png',

  profile:
    'https://img.icons8.com/ios-filled/100/ffffff/user.png',

  edit:
    'https://img.icons8.com/ios-filled/100/ffffff/edit.png',

  lock:
    'https://img.icons8.com/ios-filled/100/ffffff/lock.png',

  biometric:
    'https://img.icons8.com/ios-filled/100/ffffff/fingerprint.png',

  security:
    'https://img.icons8.com/ios-filled/100/ffffff/security-checked.png',

  home:
    'https://img.icons8.com/ios-filled/100/ffffff/home.png',

  location:
    'https://img.icons8.com/ios-filled/100/ffffff/marker.png',

  search:
    'https://img.icons8.com/ios-filled/100/ffffff/search--v1.png',

  tracking:
    'https://img.icons8.com/ios-filled/100/ffffff/navigation.png',

  notification:
    'https://img.icons8.com/ios-filled/100/ffffff/appointment-reminders.png',

  whatsapp:
    'https://img.icons8.com/ios-filled/100/ffffff/whatsapp.png',

  promotion:
    'https://img.icons8.com/ios-filled/100/ffffff/discount--v1.png',

  privacy:
    'https://img.icons8.com/ios-filled/100/ffffff/hide.png',

  cache:
    'https://img.icons8.com/ios-filled/100/ffffff/refresh.png',

  download:
    'https://img.icons8.com/ios-filled/100/ffffff/download.png',

  delete:
    'https://img.icons8.com/ios-filled/100/ffffff/delete-forever.png',

  support:
    'https://img.icons8.com/ios-filled/100/ffffff/headset.png',

  arrowRight:
    'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  check:
    'https://img.icons8.com/ios-filled/100/ffffff/checkmark.png',

  city:
    'https://img.icons8.com/ios-filled/100/ffffff/city-buildings.png',

  radar:
    'https://img.icons8.com/ios-filled/100/ffffff/radar.png',

  phone:
    'https://img.icons8.com/ios-filled/100/ffffff/phone.png',

  tag:
    'https://img.icons8.com/ios-filled/100/ffffff/price-tag.png',

  data:
    'https://img.icons8.com/ios-filled/100/ffffff/database.png',
};

/* =========================================================
   TEMPORARY PROFILE IMAGE
========================================================= */

const IMAGES = {
  avatar:
    'https://i.pravatar.cc/300?img=12',
};

/* =========================================================
   MAIN SCREEN
========================================================= */

const UserSetting = ({ navigation }) => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(true);
  const [backgroundTracking, setBackgroundTracking] =
    useState(true);

  const [pushNotifications, setPushNotifications] =
    useState(true);

  const [whatsappAlerts, setWhatsappAlerts] =
    useState(true);

  const [promotionalAlerts, setPromotionalAlerts] =
    useState(false);

  const [incognitoBrowsing, setIncognitoBrowsing] =
    useState(false);

  /* =====================================================
     BACK
  ===================================================== */

  const handleBack = () => {
    if (navigation?.goBack) {
      navigation.goBack();
    }
  };

  /* =====================================================
     NORMAL NAVIGATION
  ===================================================== */

  const goTo = screen => {
    console.log('Navigate to:', screen);

    // Only the password flow has a screen so far
    if (screen === 'ChangePassword') {
      navigation.navigate('ResetPassword');
    }
  };

  /* =====================================================
     DELETE ACCOUNT
  ===================================================== */

  const handleDeleteAccount = () => {
    console.log('Delete Account');

    // Add confirmation modal / API here.
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
              <TouchableOpacity
                style={styles.backButton}
                onPress={handleBack}
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri: ICONS.back }}
                  style={styles.backIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <View style={styles.brandShield}>
                <Image
                  source={{ uri: ICONS.shield }}
                  style={styles.brandShieldIcon}
                  resizeMode="contain"
                />
              </View>

              <Text
                style={styles.headerText}
                numberOfLines={1}
              >
                Brandlogo... Primary color...
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
              PROFILE MINI CARD
          ================================================= */}

          <View style={styles.profileCard}>
            <Image
              source={{ uri: IMAGES.avatar }}
              style={styles.avatar}
              resizeMode="cover"
            />

            <View style={styles.profileContent}>
              <View style={styles.profileNameRow}>
                <Text style={styles.profileName}>
                  Aarav Patel
                </Text>

                <View style={styles.securedBadge}>
                  <Text style={styles.securedBadgeText}>
                    SECURED
                  </Text>
                </View>
              </View>

              <Text
                style={styles.profileContact}
                numberOfLines={1}
              >
                aarav.patel@localhub.in • Bodakdev
              </Text>
            </View>

            <TouchableOpacity
              style={styles.profileEditButton}
              activeOpacity={0.8}
            >
              <Image
                source={{ uri: ICONS.edit }}
                style={styles.profileEditIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/* =================================================
              ACCOUNT SECURITY
          ================================================= */}

          <SectionTitle
            title="ACCOUNT SECURITY"
            color="#7EB1FF"
          />

          <View style={styles.settingsCard}>
            <SettingRow
              icon={ICONS.lock}
              title="Change Password"
              subtitle="Last updated 42 days ago"
              onPress={() => goTo('ChangePassword')}
            />

            <Divider />

            <ToggleSettingRow
              icon={ICONS.security}
              title="Two-Factor Authentication"
              subtitle="Secure OTP via SMS & WhatsApp"
              value={twoFactorEnabled}
              onValueChange={setTwoFactorEnabled}
            />

            <Divider />

            <ToggleSettingRow
              icon={ICONS.biometric}
              title="Biometric Login"
              subtitle="Face ID / Fingerprint Lock"
              value={biometricEnabled}
              onValueChange={setBiometricEnabled}
            />
          </View>

          {/* =================================================
              NEIGHBORHOOD & LOCATION
          ================================================= */}

          <SectionTitle
            title="NEIGHBORHOOD & LOCATION"
            color="#F59E0B"
          />

          <View style={styles.settingsCard}>
            <SettingRow
              icon={ICONS.city}
              title="Primary City"
              subtitle="Service area & currency"
              rightText="Ahmedabad"
              onPress={() => goTo('PrimaryCity')}
            />

            <Divider />

            <SettingRow
              icon={ICONS.home}
              title="Default Neighborhood"
              subtitle="SG Highway / Satellite target"
              rightBadge="Bodakdev & SG"
              onPress={() => goTo('Neighborhood')}
            />

            <Divider />

            <SettingRow
              icon={ICONS.radar}
              title="Search Radius"
              subtitle="Deals & merchants range"
              rightBadge="5 km"
              onPress={() => goTo('SearchRadius')}
            />

            {/* RADIUS GRAPH */}

            <View style={styles.radiusSection}>
              <View style={styles.radiusTrack}>
                <View style={styles.radiusFill} />

                <View style={styles.radiusThumb} />
              </View>

              <View style={styles.radiusLabels}>
                <Text style={styles.radiusLabel}>
                  1 km
                </Text>

                <Text style={styles.radiusLabel}>
                  10 km
                </Text>

                <Text style={styles.radiusLabel}>
                  25 km (Max)
                </Text>
              </View>
            </View>

            <Divider />

            <ToggleSettingRow
              icon={ICONS.tracking}
              title="Background Tracking"
              subtitle="Triggers flash store deals when walk-in"
              badge="LIVE NEAR"
              value={backgroundTracking}
              onValueChange={setBackgroundTracking}
              iconColor="#F59E0B"
            />
          </View>

          {/* =================================================
              NOTIFICATIONS
          ================================================= */}

          <SectionTitle
            title="NOTIFICATIONS & COMMUNICATIONS"
            color="#10B981"
          />

          <View style={styles.settingsCard}>
            <ToggleSettingRow
              icon={ICONS.notification}
              title="Push Notifications"
              subtitle="Orders, quotes, dispatch & alerts"
              value={pushNotifications}
              onValueChange={setPushNotifications}
            />

            <Divider />

            <ToggleSettingRow
              icon={ICONS.whatsapp}
              title="WhatsApp Quote Alerts"
              subtitle="Instant contractor estimates & bids"
              value={whatsappAlerts}
              onValueChange={setWhatsappAlerts}
              iconColor="#10B981"
            />

            <Divider />

            <ToggleSettingRow
              icon={ICONS.promotion}
              title="Promotional & Flash Offers"
              subtitle="Weekly community coupons and deals"
              value={promotionalAlerts}
              onValueChange={setPromotionalAlerts}
            />
          </View>

          {/* =================================================
              PRIVACY & DATA
          ================================================= */}

          <SectionTitle
            title="PRIVACY & DATA"
            color="#AFC8FF"
          />

          <View style={styles.settingsCard}>
            <ToggleSettingRow
              icon={ICONS.privacy}
              title="Incognito Business Browsing"
              subtitle="Hide view timestamps from merchants"
              value={incognitoBrowsing}
              onValueChange={setIncognitoBrowsing}
            />

            <Divider />

            <SettingRow
              icon={ICONS.cache}
              title="Clear Search History & Cache"
              subtitle="Frees 46.2 MB device storage"
              onPress={() => {
                console.log('Clear Search History');
              }}
            />

            <Divider />

            <SettingRow
              icon={ICONS.download}
              title="Download My Data"
              subtitle="Portable JSON export of reviews & quotes"
              onPress={() => {
                console.log('Download Data');
              }}
            />

            <Divider />

            <TouchableOpacity
              style={styles.deleteRow}
              activeOpacity={0.82}
              onPress={handleDeleteAccount}
            >
              <View style={styles.deleteLeft}>
                <View style={styles.deleteIconBox}>
                  <Image
                    source={{ uri: ICONS.delete }}
                    style={styles.deleteIcon}
                    resizeMode="contain"
                  />
                </View>

                <View>
                  <Text style={styles.deleteTitle}>
                    Delete Account
                  </Text>

                  <Text style={styles.deleteSubtitle}>
                    Permanent removal of profile & saved perks
                  </Text>
                </View>
              </View>

              <Image
                source={{ uri: ICONS.arrowRight }}
                style={styles.deleteArrow}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/* =================================================
              SUPPORT
          ================================================= */}

          <View style={styles.supportCard}>
            <View style={styles.supportIconBox}>
              <Image
                source={{ uri: ICONS.support }}
                style={styles.supportIcon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.supportContent}>
              <Text style={styles.supportTitle}>
                Supporting 450+ Independent Bodakdev Shops
              </Text>

              <Text style={styles.supportDescription}>
                Your privacy and preferences are protected by
                LocalHub’s neighborhood-first matching logic.
              </Text>
            </View>
          </View>

          {/* =================================================
              FOOTER LINKS
          ================================================= */}

          <View style={styles.footerLinks}>
            <TouchableOpacity>
              <Text style={styles.footerLink}>
                Privacy Policy
              </Text>
            </TouchableOpacity>

            <View style={styles.footerDot} />

            <TouchableOpacity>
              <Text style={styles.footerLink}>
                Terms of Service
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footerText}>
            Made with pride for local commerce
          </Text>

          <Text style={styles.footerVersion}>
            LocalHub OS v4.8 • Build 2026
          </Text>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

/* =========================================================
   SECTION TITLE
========================================================= */

const SectionTitle = ({
  title,
  color,
}) => {
  return (
    <View style={styles.sectionTitleRow}>
      <View
        style={[
          styles.sectionTitleBar,
          {
            backgroundColor: color,
          },
        ]}
      />

      <Text
        style={[
          styles.sectionTitle,
          {
            color,
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

/* =========================================================
   STANDARD SETTING ROW
========================================================= */

const SettingRow = ({
  icon,
  title,
  subtitle,
  rightText,
  rightBadge,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.settingRow}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.settingLeft}>
        <View style={styles.settingIconBox}>
          <Image
            source={{ uri: icon }}
            style={styles.settingIcon}
            resizeMode="contain"
          />
        </View>

        <View style={styles.settingTextContent}>
          <Text style={styles.settingTitle}>
            {title}
          </Text>

          {subtitle ? (
            <Text style={styles.settingSubtitle}>
              {subtitle}
            </Text>
          ) : null}
        </View>
      </View>

      <View style={styles.settingRight}>
        {rightText ? (
          <Text style={styles.rightText}>
            {rightText}
          </Text>
        ) : null}

        {rightBadge ? (
          <View style={styles.rightBadge}>
            <Text style={styles.rightBadgeText}>
              {rightBadge}
            </Text>
          </View>
        ) : null}

        <Image
          source={{ uri: ICONS.arrowRight }}
          style={styles.settingArrow}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

/* =========================================================
   TOGGLE ROW
========================================================= */

const ToggleSettingRow = ({
  icon,
  title,
  subtitle,
  value,
  onValueChange,
  badge,
  iconColor,
}) => {
  return (
    <View style={styles.settingRow}>
      <View style={styles.settingLeft}>
        <View style={styles.settingIconBox}>
          <Image
            source={{ uri: icon }}
            style={[
              styles.settingIcon,
              iconColor
                ? {
                    tintColor: iconColor,
                  }
                : null,
            ]}
            resizeMode="contain"
          />
        </View>

        <View style={styles.settingTextContent}>
          <Text style={styles.settingTitle}>
            {title}
          </Text>

          {subtitle ? (
            <Text style={styles.settingSubtitle}>
              {subtitle}
            </Text>
          ) : null}
        </View>
      </View>

      <View style={styles.toggleRight}>
        {badge ? (
          <View style={styles.liveBadge}>
            <Text style={styles.liveBadgeText}>
              {badge}
            </Text>
          </View>
        ) : null}

        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{
            false: '#334659',
            true: '#1B65B7',
          }}
          thumbColor={
            value
              ? '#5DA0FF'
              : '#8D9BA8'
          }
          ios_backgroundColor="#334659"
          style={styles.toggleSwitch}
        />
      </View>
    </View>
  );
};

/* =========================================================
   DIVIDER
========================================================= */

const Divider = () => {
  return <View style={styles.divider} />;
};

export default UserSetting;

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
    paddingBottom: 33,
  },

  /* =====================================================
     HEADER
  ===================================================== */

  header: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 7,
  },

  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: 31,
    height: 31,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backIcon: {
    width: 16,
    height: 16,
    tintColor: '#C5D2DE',
  },

  brandShield: {
    width: 22,
    height: 22,
    borderRadius: 7,
    backgroundColor: '#3978D8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  brandShieldIcon: {
    width: 12,
    height: 12,
    tintColor: '#FFFFFF',
  },

  headerText: {
    flex: 1,
    color: '#B5C4D1',
    fontSize: 12,
    fontWeight: '700',
  },

  headerProfileButton: {
    width: 30,
    height: 30,
    borderRadius: 16,
    backgroundColor: '#AFC8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerProfileIcon: {
    width: 14,
    height: 14,
    tintColor: '#071A2C',
  },

  /* =====================================================
     PROFILE
  ===================================================== */

  profileCard: {
    minHeight: 61,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#102438',
    borderRadius: 14,
    paddingHorizontal: 9,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 9,
  },

  profileContent: {
    flex: 1,
  },

  profileNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },

  securedBadge: {
    backgroundColor: 'rgba(16,185,129,0.14)',
    borderRadius: 7,
    paddingHorizontal: 7,
    paddingVertical: 2,
    marginLeft: 7,
  },

  securedBadgeText: {
    color: '#10B981',
    fontSize: 10,
    fontWeight: '900',
  },

  profileContact: {
    color: '#8398AB',
    fontSize: 11,
    marginTop: 2,
  },

  profileEditButton: {
    width: 33,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileEditIcon: {
    width: 13,
    height: 13,
    tintColor: '#85AAFF',
  },

  /* =====================================================
     SECTION TITLE
  ===================================================== */

  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 7,
  },

  sectionTitleBar: {
    width: 4,
    height: 12,
    borderRadius: 2,
    marginRight: 5,
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.25,
  },

  /* =====================================================
     SETTINGS CARD
  ===================================================== */

  settingsCard: {
    backgroundColor: '#102438',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  settingRow: {
    minHeight: 64,
    paddingHorizontal: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  settingIconBox: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#17334B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  settingIcon: {
    width: 16,
    height: 16,
    tintColor: '#77A9FF',
  },

  settingTextContent: {
    flex: 1,
  },

  settingTitle: {
    color: '#E9EFF5',
    fontSize: 13,
    fontWeight: '700',
  },

  settingSubtitle: {
    color: '#748A9D',
    fontSize: 11,
    marginTop: 2,
  },

  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },

  settingArrow: {
    width: 10,
    height: 10,
    tintColor: '#748A9E',
    marginLeft: 7,
  },

  rightText: {
    color: '#8FB5FF',
    fontSize: 11,
    fontWeight: '700',
  },

  rightBadge: {
    backgroundColor: 'rgba(16,185,129,0.12)',
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 7,
  },

  rightBadgeText: {
    color: '#10B981',
    fontSize: 10,
    fontWeight: '700',
  },

  divider: {
    height: 1,
    backgroundColor: '#193044',
    marginLeft: 52,
  },

  /* =====================================================
     TOGGLE
  ===================================================== */

  toggleRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  toggleSwitch: {
    transform: [
      {
        scaleX: 0.75,
      },
      {
        scaleY: 0.75,
      },
    ],
  },

  liveBadge: {
    backgroundColor: 'rgba(245,158,11,0.12)',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 2,
  },

  liveBadgeText: {
    color: '#F59E0B',
    fontSize: 10,
    fontWeight: '800',
  },

  /* =====================================================
     SEARCH RADIUS
  ===================================================== */

  radiusSection: {
    paddingHorizontal: 14,
    paddingTop: 4,
    paddingBottom: 13,
  },

  radiusTrack: {
    height: 4,
    backgroundColor: '#2B4054',
    borderRadius: 4,
    position: 'relative',
  },

  radiusFill: {
    width: '42%',
    height: '100%',
    borderRadius: 4,
    backgroundColor: '#3B82F6',
  },

  radiusThumb: {
    position: 'absolute',
    left: '40%',
    top: -5,
    width: 14,
    height: 14,
    borderRadius: 8,
    backgroundColor: '#AFC8FF',
    borderWidth: 2,
    borderColor: '#3B82F6',
  },

  radiusLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  radiusLabel: {
    color: '#8297AA',
    fontSize: 10,
  },

  /* =====================================================
     DELETE
  ===================================================== */

  deleteRow: {
    minHeight: 64,
    paddingHorizontal: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  deleteLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  deleteIconBox: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: 'rgba(220,38,38,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  deleteIcon: {
    width: 16,
    height: 16,
    tintColor: '#EF4444',
  },

  deleteTitle: {
    color: '#F06464',
    fontSize: 13,
    fontWeight: '700',
  },

  deleteSubtitle: {
    color: '#8B646A',
    fontSize: 11,
    marginTop: 2,
  },

  deleteArrow: {
    width: 10,
    height: 10,
    tintColor: '#B25760',
  },

  /* =====================================================
     SUPPORT
  ===================================================== */

  supportCard: {
    backgroundColor: '#102438',
    borderRadius: 14,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  supportIconBox: {
    width: 38,
    height: 38,
    borderRadius: 9,
    backgroundColor: '#19364E',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  supportIcon: {
    width: 18,
    height: 18,
    tintColor: '#8EAEFF',
  },

  supportContent: {
    flex: 1,
  },

  supportTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  supportDescription: {
    color: '#758A9D',
    fontSize: 11,
    lineHeight: 14,
    marginTop: 2,
  },

  /* =====================================================
     FOOTER
  ===================================================== */

  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
  },

  footerLink: {
    color: '#8196A9',
    fontSize: 11,
  },

  footerDot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#50677A',
    marginHorizontal: 8,
  },

  footerText: {
    textAlign: 'center',
    color: '#5D7487',
    fontSize: 10,
    marginTop: 7,
  },

  footerVersion: {
    textAlign: 'center',
    color: '#455E71',
    fontSize: 10,
    marginTop: 2,
  },

  bottomSpace: {
    height: 26,
  },
});