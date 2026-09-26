import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';

/* =========================
   IMAGES
========================= */

import logo from '../assets/logo.png';

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

    // Example:
    // navigation.replace('Home');
  };

  const handleOtpLogin = () => {
    console.log('OTP Login');
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password');

    // Example:
    // navigation.navigate('ForgotPassword');
  };

  const handleSignup = () => {
    console.log('Sign Up');

    // Example:
    // navigation.navigate('Register');
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
    paddingHorizontal: 16,
    paddingTop: 54,
    paddingBottom: 24,
    backgroundColor: '#071A2C',
  },

  /* =========================
     LOGO
  ========================= */

  logoSection: {
    alignSelf: 'center',
    width: 52,
    height: 52,
    marginTop: 4,
    marginBottom: 7,
  },

  logoBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#142A3D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 30,
    height: 30,
  },

  onlineBadge: {
    position: 'absolute',
    right: -1,
    bottom: 0,
    width: 15,
    height: 15,
    borderRadius: 20,
    backgroundColor: '#25DA9A',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#071A2C',
  },

  flashIcon: {
    width: 8,
    height: 8,
    tintColor: '#071A2C',
  },

  /* =========================
     HEADER
  ========================= */

  headerSection: {
    alignItems: 'center',
    marginBottom: 20,
  },

  platformRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  platformText: {
    color: '#57A3FF',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

  smallDot: {
    width: 3,
    height: 3,
    borderRadius: 5,
    backgroundColor: '#10B981',
    marginHorizontal: 5,
  },

  verifiedText: {
    color: '#37D8A1',
    fontSize: 8,
    fontWeight: '700',
  },

  title: {
    color: '#F2F6FA',
    fontSize: 23,
    fontWeight: '800',
    letterSpacing: -0.5,
  },

  subtitle: {
    color: '#D7E1EC',
    fontSize: 11,
    lineHeight: 15,
    textAlign: 'center',
    marginTop: 4,
  },

  /* =========================
     ROLE SELECTOR
  ========================= */

  roleContainer: {
    backgroundColor: '#031425',
    borderRadius: 22,
    padding: 3,
    flexDirection: 'row',
    marginBottom: 17,
  },

  roleButton: {
    flex: 1,
    minHeight: 32,
    borderRadius: 18,
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  roleButtonActive: {
    backgroundColor: '#334B61',
  },

  roleIcon: {
    width: 13,
    height: 13,
  },

  roleText: {
    color: '#9CAEC1',
    fontSize: 10,
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
    marginBottom: 6,
  },

  label: {
    color: '#E1EBF5',
    fontSize: 10,
    fontWeight: '700',
  },

  instantAuth: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  authDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#10B981',
    marginRight: 4,
  },

  instantAuthText: {
    color: '#3EE3A8',
    fontSize: 9,
    fontWeight: '600',
  },

  /* =========================
     EMAIL / PHONE INPUT
  ========================= */

  inputContainer: {
    height: 48,
    borderRadius: 9,
    backgroundColor: '#102238',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 11,
    borderWidth: 1,
    borderColor: '#142D45',
    marginBottom: 13,
  },

  countrySection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  flag: {
    fontSize: 12,
    marginRight: 3,
  },

  countryCode: {
    color: '#E2EAF2',
    fontSize: 11,
    fontWeight: '600',
    marginRight: 4,
  },

  chevronIcon: {
    width: 9,
    height: 9,
    tintColor: '#8FA2B8',
  },

  verticalDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#243A4F',
    marginHorizontal: 9,
  },

  input: {
    flex: 1,
    color: '#F4F7FA',
    fontSize: 11,
    paddingVertical: 0,
  },

  inputRightIcon: {
    width: 17,
    height: 17,
    tintColor: '#8AA0B7',
    marginLeft: 7,
  },

  /* =========================
     PASSWORD
  ========================= */

  passwordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  forgotText: {
    color: '#76A7FF',
    fontSize: 9,
    fontWeight: '700',
  },

  passwordInputContainer: {
    height: 46,
    borderRadius: 9,
    backgroundColor: '#102238',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#142D45',
    marginBottom: 12,
  },

  passwordLeftIcon: {
    width: 16,
    height: 16,
    tintColor: '#7F93A8',
  },

  passwordInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 11,
    marginLeft: 10,
    paddingVertical: 0,
  },

  eyeButton: {
    width: 30,
    height: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  eyeIcon: {
    width: 18,
    height: 18,
    tintColor: '#9DB0C3',
  },

  /* =========================
     OPTIONS
  ========================= */

  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#7991AA',
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkboxActive: {
    backgroundColor: '#AFC6FF',
    borderColor: '#AFC6FF',
  },

  checkIcon: {
    width: 11,
    height: 11,
    tintColor: '#071A2C',
  },

  rememberText: {
    color: '#DAE5EF',
    fontSize: 9,
  },

  aesRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  aesCircle: {
    width: 8,
    height: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#95ABC1',
    marginRight: 5,
  },

  aesText: {
    color: '#7F93A7',
    fontSize: 8,
  },

  /* =========================
     SIGN IN
  ========================= */

  signInButton: {
    height: 48,
    borderRadius: 10,
    backgroundColor: '#3B82F6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,

    shadowColor: '#3B82F6',

    shadowOffset: {
      width: 0,
      height: 5,
    },

    shadowOpacity: 0.25,
    shadowRadius: 12,

    elevation: 7,
  },

  signInText: {
    color: '#061829',
    fontSize: 12,
    fontWeight: '700',
    marginRight: 10,
  },

  signInArrow: {
    width: 16,
    height: 16,
    tintColor: '#071A2C',
  },

  /* =========================
     OTP
  ========================= */

  otpButton: {
    height: 38,
    borderRadius: 9,
    backgroundColor: '#0D2033',
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },

  otpIcon: {
    width: 15,
    height: 15,
    tintColor: '#6EA6FF',
  },

  otpText: {
    color: '#E0EAF4',
    fontSize: 9,
    fontWeight: '600',
  },

  /* =========================
     DIVIDER
  ========================= */

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  divider: {
    height: 1,
    flex: 1,
    backgroundColor: '#1A3045',
  },

  dividerText: {
    color: '#7890A6',
    fontSize: 7,
    fontWeight: '700',
    marginHorizontal: 9,
  },

  /* =========================
     SOCIAL BUTTONS
  ========================= */

  socialRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 17,
  },

  socialButton: {
    flex: 1,
    height: 42,
    borderRadius: 9,
    backgroundColor: '#102238',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  socialIcon: {
    width: 17,
    height: 17,
  },

  socialText: {
    color: '#F1F5F9',
    fontSize: 10,
    fontWeight: '700',
  },

  /* =========================
     MARKETPLACE ACTIVITY
  ========================= */

  activityCard: {
    minHeight: 48,
    borderRadius: 10,
    backgroundColor: '#031727',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 16,
  },

  activityIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(16,185,129,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  locationIcon: {
    width: 16,
    height: 16,
    tintColor: '#10B981',
  },

  activityContent: {
    flex: 1,
  },

  activityLabel: {
    color: '#BAC8D7',
    fontSize: 8,
    fontWeight: '600',
  },

  activityValue: {
    color: '#EFF5FA',
    fontSize: 9,
    fontWeight: '700',
    marginTop: 2,
  },

  liveBadge: {
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: 'rgba(16,185,129,0.12)',
  },

  liveText: {
    color: '#25DFA5',
    fontSize: 7,
    fontWeight: '800',
  },

  /* =========================
     SIGN UP
  ========================= */

  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    marginBottom: 8,
  },

  signupText: {
    color: '#D5E0EB',
    fontSize: 9,
  },

  signupLink: {
    color: '#8DB5FF',
    fontSize: 9,
    fontWeight: '700',
  },
});