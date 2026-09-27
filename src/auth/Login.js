import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/* =========================
   IMAGES
========================= */

import logo from '../assets/logo.png';

import { SHADOW } from '../theme';

// import flashIcon from '../assets/icons/flash.png';
// import customerIcon from '../assets/icons/customer.png';
// import businessIcon from '../assets/icons/business.png';
// import chevronDownIcon from '../assets/icons/chevron-down.png';
// import atIcon from '../assets/icons/at.png';
// import lockIcon from '../assets/icons/lock.png';
// import eyeIcon from '../assets/icons/eye.png';
// import eyeOffIcon from '../assets/icons/eye-off.png';
// import checkIcon from '../assets/icons/check.png';
// import arrowRightIcon from '../assets/icons/arrow-right.png';
// import messageIcon from '../assets/icons/message.png';
// import googleIcon from '../assets/icons/google.png';
// import appleIcon from '../assets/icons/apple.png';
// import locationIcon from '../assets/icons/location.png';

const Login = ({ navigation }) => {
  const [role, setRole] = useState('customer');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = () => {
    console.log('Login pressed');

    console.log({
      role,
      identifier,
      password,
      rememberMe,
    });

    navigation.replace('MainTabs');
  };

  const handleOtpLogin = () => {
    console.log('OTP Login');

    navigation.navigate('OTP', { mobile: identifier });
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password');

    navigation.navigate('ForgotPassword');
  };

  const handleSignup = () => {
    console.log('Sign Up');

    navigation.navigate('Register');
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
        keyboardShouldPersistTaps="handled"
      >
        {/* =========================================
            LOGO
        ========================================= */}

        <View style={styles.logoSection}>
          <View style={styles.logoBox}>
            <Image
              source={logo}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.onlineBadge}>
            {/* <Image
              source={flashIcon}
              style={styles.flashIcon}
              resizeMode="contain"
            /> */}
          </View>
        </View>

        {/* =========================================
            HEADER
        ========================================= */}

        <View style={styles.headerSection}>
          <View style={styles.platformRow}>
            <Text style={styles.platformText}>
              HYPERLOCAL PLATFORM
            </Text>

            <View style={styles.smallDot} />

            <Text style={styles.verifiedText}>
              Verified Hub
            </Text>
          </View>

          <Text style={styles.title}>
            Welcome Back
          </Text>

          <Text style={styles.subtitle}>
            Sign in to access your local orders, quotes &{'\n'}
            verified merchants
          </Text>
        </View>

        {/* =========================================
            ROLE SELECTOR
        ========================================= */}

        <View style={styles.roleContainer}>
          <TouchableOpacity
            activeOpacity={0.85}
            style={[
              styles.roleButton,
              role === 'customer' && styles.roleButtonActive,
            ]}
            onPress={() => setRole('customer')}
          >
            {/* <Image
              source={customerIcon}
              resizeMode="contain"
              style={[
                styles.roleIcon,
                {
                  tintColor:
                    role === 'customer'
                      ? '#E6EEFF'
                      : '#98A9BC',
                },
              ]}
            /> */}

            <Text
              style={[
                styles.roleText,
                role === 'customer' &&
                  styles.roleTextActive,
              ]}
            >
              Customer
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            style={[
              styles.roleButton,
              role === 'business' &&
                styles.roleButtonActive,
            ]}
            onPress={() => setRole('business')}
          >
            {/* <Image
              source={businessIcon}
              resizeMode="contain"
              style={[
                styles.roleIcon,
                {
                  tintColor:
                    role === 'business'
                      ? '#E6EEFF'
                      : '#98A9BC',
                },
              ]}
            /> */}

            <Text
              style={[
                styles.roleText,
                role === 'business' &&
                  styles.roleTextActive,
              ]}
            >
              Business Owner
            </Text>
          </TouchableOpacity>
        </View>

        {/* =========================================
            PHONE / EMAIL
        ========================================= */}

        <View style={styles.labelRow}>
          <Text style={styles.label}>
            Phone Number or Email
          </Text>

          <View style={styles.instantAuth}>
            <View style={styles.authDot} />

            <Text style={styles.instantAuthText}>
              Instant Auth
            </Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.countrySection}
            activeOpacity={0.8}
          >
            <Text style={styles.flag}>🇮🇳</Text>

            <Text style={styles.countryCode}>
              +91
            </Text>
{/* 
            <Image
              source={chevronDownIcon}
              resizeMode="contain"
              style={styles.chevronIcon}
            /> */}
          </TouchableOpacity>

          <View style={styles.verticalDivider} />

          <TextInput
            value={identifier}
            onChangeText={setIdentifier}
            placeholder="98765 43210 or name@domain.com"
            placeholderTextColor="#6E8197"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
          />

          {/* <Image
            source={atIcon}
            resizeMode="contain"
            style={styles.inputRightIcon}
          /> */}
        </View>

        {/* =========================================
            PASSWORD HEADER
        ========================================= */}

        <View style={styles.passwordHeader}>
          <Text style={styles.label}>
            Password
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleForgotPassword}
          >
            <Text style={styles.forgotText}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        {/* =========================================
            PASSWORD INPUT
        ========================================= */}

        <View style={styles.passwordInputContainer}>
          {/* <Image
            source={lockIcon}
            resizeMode="contain"
            style={styles.passwordLeftIcon}
          /> */}

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter secure password"
            placeholderTextColor="#667B91"
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
            autoCapitalize="none"
          />

          <TouchableOpacity
            onPress={() =>
              setShowPassword(prev => !prev)
            }
            activeOpacity={0.7}
            style={styles.eyeButton}
          >
            {/* <Image
              source={
                showPassword
                  ? eyeIcon
                  : eyeOffIcon
              }
              resizeMode="contain"
              style={styles.eyeIcon}
            /> */}
          </TouchableOpacity>
        </View>

        {/* =========================================
            REMEMBER ME + AES
        ========================================= */}

        <View style={styles.optionsRow}>
          <TouchableOpacity
            style={styles.rememberRow}
            onPress={() =>
              setRememberMe(prev => !prev)
            }
            activeOpacity={0.8}
          >
            <View
              style={[
                styles.checkbox,
                rememberMe &&
                  styles.checkboxActive,
              ]}
            >
              {/* {rememberMe && (
                <Image
                  source={checkIcon}
                  resizeMode="contain"
                  style={styles.checkIcon}
                />
              )} */}
            </View>

            <Text style={styles.rememberText}>
              Remember me for 30 days
            </Text>
          </TouchableOpacity>

          <View style={styles.aesRow}>
            <View style={styles.aesCircle} />

            <Text style={styles.aesText}>
              256-bit AES
            </Text>
          </View>
        </View>

        {/* =========================================
            SIGN IN
        ========================================= */}

        <TouchableOpacity
          style={styles.signInButton}
          activeOpacity={0.88}
          onPress={handleLogin}
        >
          <Text style={styles.signInText}>
            Sign In
          </Text>

          {/* <Image
            source={arrowRightIcon}
            resizeMode="contain"
            style={styles.signInArrow}
          /> */}
        </TouchableOpacity>

        {/* =========================================
            OTP LOGIN
        ========================================= */}

        <TouchableOpacity
          style={styles.otpButton}
          activeOpacity={0.85}
          onPress={handleOtpLogin}
        >
          {/* <Image
            source={messageIcon}
            resizeMode="contain"
            style={styles.otpIcon}
          /> */}

          <Text style={styles.otpText}>
            Login with One-Time OTP
          </Text>
        </TouchableOpacity>

        {/* =========================================
            DIVIDER
        ========================================= */}

        <View style={styles.dividerRow}>
          <View style={styles.divider} />

          <Text style={styles.dividerText}>
            OR CONTINUE WITH
          </Text>

          <View style={styles.divider} />
        </View>

        {/* =========================================
            SOCIAL LOGIN
        ========================================= */}

        <View style={styles.socialRow}>
          <TouchableOpacity
            style={styles.socialButton}
            activeOpacity={0.85}
            onPress={() =>
              console.log('Google Login')
            }
          >
            {/* <Image
              source={googleIcon}
              resizeMode="contain"
              style={styles.socialIcon}
            /> */}

            <Text style={styles.socialText}>
              Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            activeOpacity={0.85}
            onPress={() =>
              console.log('Apple Login')
            }
          >
            {/* <Image
              source={appleIcon}
              resizeMode="contain"
              style={styles.socialIcon}
            /> */}

            <Text style={styles.socialText}>
              Apple
            </Text>
          </TouchableOpacity>
        </View>

        {/* =========================================
            NEARBY MARKETPLACE ACTIVITY
        ========================================= */}

        <View style={styles.activityCard}>
          <View style={styles.activityIconContainer}>
            {/* <Image
              source={locationIcon}
              resizeMode="contain"
              style={styles.locationIcon}
            /> */}
          </View>

          <View style={styles.activityContent}>
            <Text style={styles.activityLabel}>
              Nearby Marketplace Activity
            </Text>

            <Text style={styles.activityValue}>
              142 shops online in your sector
            </Text>
          </View>

          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>
              Live
            </Text>
          </View>
        </View>

        {/* =========================================
            SIGN UP
        ========================================= */}

        <View style={styles.signupRow}>
          <Text style={styles.signupText}>
            Don't have an account?
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleSignup}
          >
            <Text style={styles.signupLink}>
              Sign Up ↗
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

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
    paddingHorizontal: 21,
    paddingTop: 70,
    paddingBottom: 31,
    backgroundColor: '#071A2C',
  },

  /* =========================
     LOGO
  ========================= */

  logoSection: {
    alignSelf: 'center',
    width: 68,
    height: 68,
    marginTop: 5,
    marginBottom: 9,
  },

  logoBox: {
    width: 62,
    height: 62,
    borderRadius: 16,
    backgroundColor: '#142A3D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 39,
    height: 39,
  },

  onlineBadge: {
    position: 'absolute',
    right: -1,
    bottom: 0,
    width: 20,
    height: 20,
    borderRadius: 26,
    backgroundColor: '#25DA9A',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#071A2C',
  },

  flashIcon: {
    width: 10,
    height: 10,
    tintColor: '#071A2C',
  },

  /* =========================
     HEADER
  ========================= */

  headerSection: {
    alignItems: 'center',
    marginBottom: 26,
  },

  platformRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },

  platformText: {
    color: '#57A3FF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

  smallDot: {
    width: 4,
    height: 4,
    borderRadius: 7,
    backgroundColor: '#10B981',
    marginHorizontal: 7,
  },

  verifiedText: {
    color: '#37D8A1',
    fontSize: 14,
    fontWeight: '700',
  },

  title: {
    color: '#F2F6FA',
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.5,
  },

  subtitle: {
    color: '#D7E1EC',
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 5,
  },

  /* =========================
     ROLE SELECTOR
  ========================= */

  roleContainer: {
    backgroundColor: '#031425',
    borderRadius: 29,
    padding: 4,
    flexDirection: 'row',
    marginBottom: 22,
  },

  roleButton: {
    flex: 1,
    minHeight: 42,
    borderRadius: 23,
    flexDirection: 'row',
    gap: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },

  roleButtonActive: {
    backgroundColor: '#334B61',
  },

  roleIcon: {
    width: 17,
    height: 17,
  },

  roleText: {
    color: '#9CAEC1',
    fontSize: 16,
    fontWeight: '600',
  },

  roleTextActive: {
    color: '#FFFFFF',
  },

  /* =========================
     LABEL
  ========================= */

  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  label: {
    color: '#E1EBF5',
    fontSize: 16,
    fontWeight: '700',
  },

  instantAuth: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  authDot: {
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: '#10B981',
    marginRight: 5,
  },

  instantAuthText: {
    color: '#3EE3A8',
    fontSize: 15,
    fontWeight: '600',
  },

  /* =========================
     EMAIL / PHONE INPUT
  ========================= */

  inputContainer: {
    height: 54,
    borderRadius: 14,
    backgroundColor: '#102238',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#142D45',
    marginBottom: 17,
  },

  countrySection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  flag: {
    fontSize: 18,
    marginRight: 4,
  },

  countryCode: {
    color: '#E2EAF2',
    fontSize: 17,
    fontWeight: '600',
    marginRight: 5,
  },

  chevronIcon: {
    width: 12,
    height: 12,
    tintColor: '#8FA2B8',
  },

  verticalDivider: {
    width: 1,
    height: 31,
    backgroundColor: '#243A4F',
    marginHorizontal: 12,
  },

  input: {
    flex: 1,
    color: '#F4F7FA',
    fontSize: 17,
    paddingVertical: 0,
  },

  inputRightIcon: {
    width: 22,
    height: 22,
    tintColor: '#8AA0B7',
    marginLeft: 9,
  },

  /* =========================
     PASSWORD
  ========================= */

  passwordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  forgotText: {
    color: '#76A7FF',
    fontSize: 15,
    fontWeight: '700',
  },

  passwordInputContainer: {
    height: 54,
    borderRadius: 14,
    backgroundColor: '#102238',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#142D45',
    marginBottom: 16,
  },

  passwordLeftIcon: {
    width: 21,
    height: 21,
    tintColor: '#7F93A8',
  },

  passwordInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 17,
    marginLeft: 13,
    paddingVertical: 0,
  },

  eyeButton: {
    width: 39,
    height: 39,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  eyeIcon: {
    width: 23,
    height: 23,
    tintColor: '#9DB0C3',
  },

  /* =========================
     OPTIONS
  ========================= */

  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 21,
  },

  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 21,
    height: 21,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#7991AA',
    marginRight: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkboxActive: {
    backgroundColor: '#AFC6FF',
    borderColor: '#AFC6FF',
  },

  checkIcon: {
    width: 14,
    height: 14,
    tintColor: '#071A2C',
  },

  rememberText: {
    color: '#DAE5EF',
    fontSize: 15,
  },

  aesRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  aesCircle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#95ABC1',
    marginRight: 7,
  },

  aesText: {
    color: '#7F93A7',
    fontSize: 14,
  },

  /* =========================
     SIGN IN
  ========================= */

  signInButton: {
    height: 54,
    borderRadius: 14,
    backgroundColor: '#3B82F6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,

    shadowColor: '#3B82F6',

    shadowOffset: {
      width: 0,
      height: 7,
    },

    shadowOpacity: 0.25,
    shadowRadius: 12,

    elevation: 7,
    ...SHADOW.glow,
  },

  signInText: {
    color: '#061829',
    fontSize: 18,
    fontWeight: '700',
    marginRight: 13,
  },

  signInArrow: {
    width: 21,
    height: 21,
    tintColor: '#071A2C',
  },

  /* =========================
     OTP
  ========================= */

  otpButton: {
    height: 49,
    borderRadius: 12,
    backgroundColor: '#0D2033',
    flexDirection: 'row',
    gap: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },

  otpIcon: {
    width: 20,
    height: 20,
    tintColor: '#6EA6FF',
  },

  otpText: {
    color: '#E0EAF4',
    fontSize: 15,
    fontWeight: '600',
  },

  /* =========================
     DIVIDER
  ========================= */

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  divider: {
    height: 1,
    flex: 1,
    backgroundColor: '#1A3045',
  },

  dividerText: {
    color: '#7890A6',
    fontSize: 13,
    fontWeight: '700',
    marginHorizontal: 12,
  },

  /* =========================
     SOCIAL BUTTONS
  ========================= */

  socialRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 22,
  },

  socialButton: {
    flex: 1,
    height: 55,
    borderRadius: 12,
    backgroundColor: '#102238',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  socialIcon: {
    width: 22,
    height: 22,
  },

  socialText: {
    color: '#F1F5F9',
    fontSize: 16,
    fontWeight: '700',
  },

  /* =========================
     MARKETPLACE ACTIVITY
  ========================= */

  activityCard: {
    minHeight: 62,
    borderRadius: 16,
    backgroundColor: '#031727',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    marginBottom: 21,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  activityIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(16,185,129,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  locationIcon: {
    width: 21,
    height: 21,
    tintColor: '#10B981',
  },

  activityContent: {
    flex: 1,
  },

  activityLabel: {
    color: '#BAC8D7',
    fontSize: 14,
    fontWeight: '600',
  },

  activityValue: {
    color: '#EFF5FA',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 2,
  },

  liveBadge: {
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 13,
    backgroundColor: 'rgba(16,185,129,0.12)',
  },

  liveText: {
    color: '#25DFA5',
    fontSize: 13,
    fontWeight: '800',
  },

  /* =========================
     SIGN UP
  ========================= */

  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    marginBottom: 10,
  },

  signupText: {
    color: '#D5E0EB',
    fontSize: 15,
  },

  signupLink: {
    color: '#8DB5FF',
    fontSize: 15,
    fontWeight: '700',
  },
});