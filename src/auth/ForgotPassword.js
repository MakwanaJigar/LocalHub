import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SHADOW } from '../theme';

/* =========================================
   IMAGE ICONS
========================================= */

// import backIcon from '../assets/icons/back.png';
// import lockResetIcon from '../assets/icons/lock-reset.png';
// import shieldCheckIcon from '../assets/icons/shield-check.png';
// import messageIcon from '../assets/icons/message.png';
// import emailIcon from '../assets/icons/email.png';
// import checkIcon from '../assets/icons/check.png';
// import arrowRightIcon from '../assets/icons/arrow-right.png';
// import supportIcon from '../assets/icons/support.png';

const ForgotPassword = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState('sms');

  const handleBack = () => {
    if (navigation?.goBack) {
      navigation.goBack();
    }
  };

  const handleRecovery = () => {
    console.log('Recovery Method:', selectedMethod);

    if (selectedMethod === 'sms') {
      console.log('Send recovery code via SMS / WhatsApp');

      navigation.navigate('OTP', {
        flow: 'reset',
      });
    }

    if (selectedMethod === 'email') {
      console.log('Send password reset link via Email');

      navigation.navigate('ResetPassword');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#071A2C"
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* =========================================
            TOP ROW
        ========================================= */}

        <View style={styles.topRow}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.8}
            onPress={handleBack}
          >
            {/* <Image
              source={backIcon}
              style={styles.backIcon}
              resizeMode="contain"
            /> */}
          </TouchableOpacity>

          <View style={styles.encryptionBadge}>
            <View style={styles.encryptionDot} />

            <Text style={styles.encryptionText}>
              ENCRYPTION ACTIVE
            </Text>
          </View>

          <View style={styles.topSpacer} />
        </View>

        {/* =========================================
            LOCK ICON
        ========================================= */}

        <View style={styles.heroIconSection}>
          <View style={styles.heroIconOuter}>
            <View style={styles.heroIconInner}>
              {/* <Image
                source={lockResetIcon}
                style={styles.heroIcon}
                resizeMode="contain"
              /> */}
            </View>

            <View style={styles.heroBadge}>
              {/* <Image
                source={shieldCheckIcon}
                style={styles.heroBadgeIcon}
                resizeMode="contain"
              /> */}
            </View>
          </View>
        </View>

        {/* =========================================
            HEADING
        ========================================= */}

        <View style={styles.headerSection}>
          <Text style={styles.title}>
            Forgot Password?
          </Text>

          <Text style={styles.subtitle}>
            Select which contact details we should use to{'\n'}
            reset your password and recover your account.
          </Text>
        </View>

        {/* =========================================
            SMS / WHATSAPP OPTION
        ========================================= */}

        <TouchableOpacity
          style={[
            styles.methodCard,
            selectedMethod === 'sms' &&
              styles.methodCardActive,
          ]}
          activeOpacity={0.88}
          onPress={() => setSelectedMethod('sms')}
        >
          <View style={styles.methodIconBox}>
            {/* <Image
              source={messageIcon}
              style={styles.methodIcon}
              resizeMode="contain"
            /> */}
          </View>

          <View style={styles.methodContent}>
            <View style={styles.methodTitleRow}>
              <Text style={styles.methodSmallTitle}>
                VIA SMS / WHATSAPP
              </Text>

              <View style={styles.instantBadge}>
                <Text style={styles.instantText}>
                  Instant
                </Text>
              </View>
            </View>

            <Text style={styles.methodValue}>
              +91 98••••••10
            </Text>

            <Text style={styles.methodDescription}>
              Sends an instant 6-digit verification{'\n'}
              code.
            </Text>
          </View>

          <View
            style={[
              styles.radioOuter,
              selectedMethod === 'sms' &&
                styles.radioOuterActive,
            ]}
          >
            {/* {selectedMethod === 'sms' && (
              <Image
                source={checkIcon}
                style={styles.radioCheckIcon}
                resizeMode="contain"
              />
            )} */}
          </View>
        </TouchableOpacity>

        {/* =========================================
            EMAIL OPTION
        ========================================= */}

        <TouchableOpacity
          style={[
            styles.methodCard,
            selectedMethod === 'email' &&
              styles.methodCardActive,
          ]}
          activeOpacity={0.88}
          onPress={() => setSelectedMethod('email')}
        >
          <View style={styles.methodIconBox}>
            {/* <Image
              source={emailIcon}
              style={styles.methodIcon}
              resizeMode="contain"
            /> */}
          </View>

          <View style={styles.methodContent}>
            <Text style={styles.methodSmallTitle}>
              VIA EMAIL
            </Text>

            <Text style={styles.methodValue}>
              a••••••l@gmail.com
            </Text>

            <Text style={styles.methodDescription}>
              Direct secure password-reset link
            </Text>
          </View>

          <View
            style={[
              styles.radioOuter,
              selectedMethod === 'email' &&
                styles.radioOuterActive,
            ]}
          >
            {/* {selectedMethod === 'email' && (
              <Image
                source={checkIcon}
                style={styles.radioCheckIcon}
                resizeMode="contain"
              />
            )} */}
          </View>
        </TouchableOpacity>

        {/* =========================================
            RECOVERY BUTTON
        ========================================= */}

        <TouchableOpacity
          style={styles.recoveryButton}
          activeOpacity={0.88}
          onPress={handleRecovery}
        >
          <Text style={styles.recoveryButtonText}>
            Send Recovery Code
          </Text>

          {/* <Image
            source={arrowRightIcon}
            style={styles.recoveryArrow}
            resizeMode="contain"
          /> */}
        </TouchableOpacity>

        {/* =========================================
            SUPPORT
        ========================================= */}

        <TouchableOpacity
          style={styles.supportRow}
          activeOpacity={0.8}
          onPress={() => {
            console.log('Open support');
          }}
        >
          {/* <Image
            source={supportIcon}
            style={styles.supportIcon}
            resizeMode="contain"
          /> */}

          <Text style={styles.supportText}>
            Need assistance?
          </Text>

          <Text style={styles.supportLink}>
            Contact 24/7 LocalHub Support
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

/* =========================================
   STYLES
========================================= */

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#071A2C',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 18,
    paddingTop: 13,
    paddingBottom: 33,
    backgroundColor: '#071A2C',
  },

  /* =========================================
     TOP
  ========================================= */

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 26,
  },

  backButton: {
    width: 39,
    height: 39,
    borderRadius: 20,
    backgroundColor: '#10273B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backIcon: {
    width: 18,
    height: 18,
    tintColor: '#D6E4F2',
  },

  encryptionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#102536',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },

  encryptionDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#10B981',
    marginRight: 7,
  },

  encryptionText: {
    color: '#6DA8FF',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.35,
  },

  topSpacer: {
    width: 39,
  },

  /* =========================================
     HERO ICON
  ========================================= */

  heroIconSection: {
    alignItems: 'center',
    marginBottom: 13,
  },

  heroIconOuter: {
    width: 78,
    height: 78,
    borderRadius: 17,
    backgroundColor: '#10273B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroIconInner: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: '#071A2C',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroIcon: {
    width: 30,
    height: 30,
    tintColor: '#6FA8FF',
  },

  heroBadge: {
    position: 'absolute',
    right: -4,
    bottom: -4,
    width: 23,
    height: 23,
    borderRadius: 23,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#071A2C',
  },

  heroBadgeIcon: {
    width: 12,
    height: 12,
    tintColor: '#071A2C',
  },

  /* =========================================
     HEADER
  ========================================= */

  headerSection: {
    alignItems: 'center',
    marginBottom: 26,
  },

  title: {
    color: '#F4F7FA',
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.4,
    marginBottom: 8,
  },

  subtitle: {
    color: '#C9D6E3',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
  },

  /* =========================================
     METHOD CARD
  ========================================= */

  methodCard: {
    minHeight: 96,
    borderRadius: 16,
    backgroundColor: '#102238',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 13,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'transparent',
    ...SHADOW.soft,
  },

  methodCardActive: {
    backgroundColor: '#183048',
    borderColor: '#274967',
  },

  methodIconBox: {
    width: 46,
    height: 46,
    borderRadius: 9,
    backgroundColor: '#071A2C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  methodIcon: {
    width: 23,
    height: 23,
    tintColor: '#B7CAE0',
  },

  methodContent: {
    flex: 1,
  },

  methodTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  methodSmallTitle: {
    color: '#AFC0D2',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.25,
  },

  instantBadge: {
    marginLeft: 8,
    backgroundColor: 'rgba(16,185,129,0.12)',
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },

  instantText: {
    color: '#35DFA8',
    fontSize: 12,
    fontWeight: '800',
  },

  methodValue: {
    color: '#F3F7FB',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },

  methodDescription: {
    color: '#9CB0C4',
    fontSize: 13,
    lineHeight: 17,
  },

  /* =========================================
     RADIO
  ========================================= */

  radioOuter: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: '#1A3146',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 9,
  },

  radioOuterActive: {
    backgroundColor: '#B3CBFF',
  },

  radioCheckIcon: {
    width: 13,
    height: 13,
    tintColor: '#071A2C',
  },

  /* =========================================
     RECOVERY BUTTON
  ========================================= */

  recoveryButton: {
    height: 54,
    borderRadius: 14,
    backgroundColor: '#AFC8FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 20,
    ...SHADOW.glow,
  },

  recoveryButtonText: {
    color: '#071A2C',
    fontSize: 15,
    fontWeight: '700',
    marginRight: 10,
  },

  recoveryArrow: {
    width: 17,
    height: 17,
    tintColor: '#071A2C',
  },

  /* =========================================
     SUPPORT
  ========================================= */

  supportRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 39,
    borderRadius: 10,
    backgroundColor: '#071827',
    paddingHorizontal: 10,
  },

  supportIcon: {
    width: 13,
    height: 13,
    marginRight: 5,
    tintColor: '#F59E0B',
  },

  supportText: {
    color: '#9FB2C5',
    fontSize: 13,
    marginRight: 4,
  },

  supportLink: {
    color: '#95B8FF',
    fontSize: 13,
    fontWeight: '700',
  },
});