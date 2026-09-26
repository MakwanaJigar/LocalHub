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
} from 'react-native';

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

      // Example:
      // navigation.navigate('VerifyOTP', {
      //   type: 'sms',
      // });
    }

    if (selectedMethod === 'email') {
      console.log('Send password reset link via Email');

      // Example:
      // navigation.navigate('CheckEmail');
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
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 25,
    backgroundColor: '#071A2C',
  },

  /* =========================================
     TOP
  ========================================= */

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  backButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#10273B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backIcon: {
    width: 14,
    height: 14,
    tintColor: '#D6E4F2',
  },

  encryptionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#102536',
    borderRadius: 15,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },

  encryptionDot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 5,
  },

  encryptionText: {
    color: '#6DA8FF',
    fontSize: 7,
    fontWeight: '800',
    letterSpacing: 0.35,
  },

  topSpacer: {
    width: 30,
  },

  /* =========================================
     HERO ICON
  ========================================= */

  heroIconSection: {
    alignItems: 'center',
    marginBottom: 10,
  },

  heroIconOuter: {
    width: 60,
    height: 60,
    borderRadius: 13,
    backgroundColor: '#10273B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroIconInner: {
    width: 43,
    height: 43,
    borderRadius: 11,
    backgroundColor: '#071A2C',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroIcon: {
    width: 23,
    height: 23,
    tintColor: '#6FA8FF',
  },

  heroBadge: {
    position: 'absolute',
    right: -3,
    bottom: -3,
    width: 18,
    height: 18,
    borderRadius: 18,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#071A2C',
  },

  heroBadgeIcon: {
    width: 9,
    height: 9,
    tintColor: '#071A2C',
  },

  /* =========================================
     HEADER
  ========================================= */

  headerSection: {
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    color: '#F4F7FA',
    fontSize: 21,
    fontWeight: '800',
    letterSpacing: -0.4,
    marginBottom: 6,
  },

  subtitle: {
    color: '#C9D6E3',
    fontSize: 9,
    lineHeight: 13,
    textAlign: 'center',
  },

  /* =========================================
     METHOD CARD
  ========================================= */

  methodCard: {
    minHeight: 74,
    borderRadius: 9,
    backgroundColor: '#102238',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 11,
    paddingVertical: 10,
    marginBottom: 9,
    borderWidth: 1,
    borderColor: 'transparent',
  },

  methodCardActive: {
    backgroundColor: '#183048',
    borderColor: '#274967',
  },

  methodIconBox: {
    width: 35,
    height: 35,
    borderRadius: 7,
    backgroundColor: '#071A2C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  methodIcon: {
    width: 18,
    height: 18,
    tintColor: '#B7CAE0',
  },

  methodContent: {
    flex: 1,
  },

  methodTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },

  methodSmallTitle: {
    color: '#AFC0D2',
    fontSize: 7,
    fontWeight: '800',
    letterSpacing: 0.25,
  },

  instantBadge: {
    marginLeft: 6,
    backgroundColor: 'rgba(16,185,129,0.12)',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },

  instantText: {
    color: '#35DFA8',
    fontSize: 6,
    fontWeight: '800',
  },

  methodValue: {
    color: '#F3F7FB',
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 3,
  },

  methodDescription: {
    color: '#9CB0C4',
    fontSize: 7,
    lineHeight: 10,
  },

  /* =========================================
     RADIO
  ========================================= */

  radioOuter: {
    width: 19,
    height: 19,
    borderRadius: 19,
    backgroundColor: '#1A3146',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
  },

  radioOuterActive: {
    backgroundColor: '#B3CBFF',
  },

  radioCheckIcon: {
    width: 10,
    height: 10,
    tintColor: '#071A2C',
  },

  /* =========================================
     RECOVERY BUTTON
  ========================================= */

  recoveryButton: {
    height: 44,
    borderRadius: 8,
    backgroundColor: '#AFC8FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 15,
  },

  recoveryButtonText: {
    color: '#071A2C',
    fontSize: 9,
    fontWeight: '700',
    marginRight: 8,
  },

  recoveryArrow: {
    width: 13,
    height: 13,
    tintColor: '#071A2C',
  },

  /* =========================================
     SUPPORT
  ========================================= */

  supportRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 30,
    borderRadius: 8,
    backgroundColor: '#071827',
    paddingHorizontal: 8,
  },

  supportIcon: {
    width: 10,
    height: 10,
    marginRight: 4,
    tintColor: '#F59E0B',
  },

  supportText: {
    color: '#9FB2C5',
    fontSize: 7,
    marginRight: 3,
  },

  supportLink: {
    color: '#95B8FF',
    fontSize: 7,
    fontWeight: '700',
  },
});