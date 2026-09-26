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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

/* =========================================
   IMAGES
========================================= */

import logo from '../assets/logo.png';

// import customerIcon from '../assets/icons/customer.png';
// import businessIcon from '../assets/icons/business.png';
// import personIcon from '../assets/icons/person.png';
// import phoneIcon from '../assets/icons/phone.png';
// import emailIcon from '../assets/icons/email.png';
// import locationIcon from '../assets/icons/location.png';
// import chevronDownIcon from '../assets/icons/chevron-down.png';
// import lockIcon from '../assets/icons/lock.png';
// import eyeIcon from '../assets/icons/eye.png';
// import eyeOffIcon from '../assets/icons/eye-off.png';
// import checkIcon from '../assets/icons/check.png';
// import arrowRightIcon from '../assets/icons/arrow-right.png';
// import shieldCheckIcon from '../assets/icons/shield-check.png';
// import communityIcon from '../assets/icons/community.png';

const Register = ({ navigation }) => {
  const [accountType, setAccountType] = useState('customer');

  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [cityArea, setCityArea] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  /* =========================================
     REGISTER
  ========================================= */

  const handleRegister = () => {
    console.log({
      accountType,
      fullName,
      mobile,
      email,
      cityArea,
      password,
      acceptedTerms,
    });

    // API call here

    // Example:
    // navigation.navigate('OTPVerification', {
    //   mobile,
    // });
  };

  /* =========================================
     LOGIN
  ========================================= */

  const goToLogin = () => {
    if (navigation) {
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#071A2C"
      />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* =========================================
              TOP STATUS
          ========================================= */}

          <View style={styles.topRow}>
            <View style={styles.networkBadge}>
              <View style={styles.networkDot} />

              <Text style={styles.networkText}>
                HYPERLOCAL NETWORK
              </Text>
            </View>

            <View style={styles.setupRow}>
              {/* <Image
                source={shieldCheckIcon}
                resizeMode="contain"
                style={styles.setupIcon}
              /> */}

              <Text style={styles.setupText}>
                Instant Setup
              </Text>
            </View>
          </View>

          {/* =========================================
              HEADING
          ========================================= */}

          <View style={styles.headerSection}>
            <Text style={styles.title}>
              Create Account
            </Text>

            <Text style={styles.subtitle}>
              Join LocalHub to discover, compare, and connect with
              nearby stores.
            </Text>
          </View>

          {/* =========================================
              ACCOUNT TYPE LABEL
          ========================================= */}

          <Text style={styles.sectionLabel}>
            Select Account Type
          </Text>

          {/* =========================================
              CUSTOMER
          ========================================= */}

          <TouchableOpacity
            style={[
              styles.accountCard,
              accountType === 'customer' &&
                styles.accountCardActive,
            ]}
            activeOpacity={0.85}
            onPress={() => setAccountType('customer')}
          >
            <View
              style={[
                styles.accountIconBox,
                accountType === 'customer' &&
                  styles.accountIconBoxActive,
              ]}
            >
              {/* <Image
                source={customerIcon}
                resizeMode="contain"
                style={styles.accountIcon}
              /> */}
            </View>

            <View style={styles.accountContent}>
              <Text style={styles.accountTitle}>
                Customer
              </Text>

              <Text style={styles.accountDescription}>
                Find, book services & shop neighborhood
                deals
              </Text>
            </View>

            <View
              style={[
                styles.radioOuter,
                accountType === 'customer' &&
                  styles.radioOuterActive,
              ]}
            >
              {accountType === 'customer' && (
                <View style={styles.radioInner} />
              )}
            </View>
          </TouchableOpacity>

          {/* =========================================
              BUSINESS OWNER
          ========================================= */}

          <TouchableOpacity
            style={[
              styles.accountCard,
              accountType === 'business' &&
                styles.accountCardActive,
            ]}
            activeOpacity={0.85}
            onPress={() => setAccountType('business')}
          >
            <View
              style={[
                styles.accountIconBox,
                accountType === 'business' &&
                  styles.accountIconBoxActive,
              ]}
            >
              {/* <Image
                source={businessIcon}
                resizeMode="contain"
                style={styles.accountIcon}
              /> */}
            </View>

            <View style={styles.accountContent}>
              <Text style={styles.accountTitle}>
                Business Owner
              </Text>

              <Text style={styles.accountDescription}>
                List my store, showcase catalog & get direct
                leads
              </Text>
            </View>

            <View
              style={[
                styles.radioOuter,
                accountType === 'business' &&
                  styles.radioOuterActive,
              ]}
            >
              {accountType === 'business' && (
                <View style={styles.radioInner} />
              )}
            </View>
          </TouchableOpacity>

          {/* =========================================
              FULL NAME
          ========================================= */}

          <Text style={styles.inputLabel}>
            Full Name
          </Text>

          <View style={styles.inputContainer}>
            {/* <Image
              source={personIcon}
              resizeMode="contain"
              style={styles.inputLeftIcon}
            /> */}

            <TextInput
              value={fullName}
              onChangeText={setFullName}
              placeholder="e.g. Arjun Patel"
              placeholderTextColor="#6E8297"
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          {/* =========================================
              MOBILE NUMBER
          ========================================= */}

          <Text style={styles.inputLabel}>
            Mobile Number
          </Text>

          <View style={styles.inputContainer}>
            <View style={styles.countryCodeSection}>
              <Text style={styles.flag}>
                🇮🇳
              </Text>

              <Text style={styles.countryCode}>
                +91
              </Text>

              {/* <Image
                source={chevronDownIcon}
                resizeMode="contain"
                style={styles.smallChevron}
              /> */}
            </View>

            <View style={styles.inputDivider} />

            <TextInput
              value={mobile}
              onChangeText={setMobile}
              placeholder="98765 43210"
              placeholderTextColor="#6E8297"
              style={styles.input}
              keyboardType="phone-pad"
              maxLength={10}
            />

            {mobile.length >= 10 && (
              <View style={styles.validIconContainer}>
                {/* <Image
                  source={checkIcon}
                  resizeMode="contain"
                  style={styles.validIcon}
                /> */}
              </View>
            )}
          </View>

          {/* =========================================
              EMAIL
          ========================================= */}

          <Text style={styles.inputLabel}>
            Email Address
          </Text>

          <View style={styles.inputContainer}>
            {/* <Image
              source={emailIcon}
              resizeMode="contain"
              style={styles.inputLeftIcon}
            /> */}

            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="arjun.patel@example.com"
              placeholderTextColor="#6E8297"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* =========================================
              LOCATION
          ========================================= */}

          <Text style={styles.inputLabel}>
            City / Area
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.inputContainer}
            onPress={() => {
              console.log('Open location picker');
            }}
          >
            {/* <Image
              source={locationIcon}
              resizeMode="contain"
              style={styles.locationInputIcon}
            /> */}

            <TextInput
              value={cityArea}
              onChangeText={setCityArea}
              placeholder="Ahmedabad, SG Highway"
              placeholderTextColor="#D9E5EF"
              style={styles.input}
              editable={true}
            />

            {/* <Image
              source={chevronDownIcon}
              resizeMode="contain"
              style={styles.chevronIcon}
            /> */}
          </TouchableOpacity>

          {/* =========================================
              PASSWORD
          ========================================= */}

          <View style={styles.passwordLabelRow}>
            <Text style={styles.inputLabelNoMargin}>
              Create Password
            </Text>

            <Text style={styles.minimumText}>
              Minimum 8 chars
            </Text>
          </View>

          <View style={styles.inputContainer}>
            {/* <Image
              source={lockIcon}
              resizeMode="contain"
              style={styles.inputLeftIcon}
            /> */}

            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••••••"
              placeholderTextColor="#6E8297"
              style={styles.input}
              secureTextEntry={!showPassword}
            />

            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() =>
                setShowPassword(prev => !prev)
              }
              activeOpacity={0.7}
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
              PASSWORD REQUIREMENTS
          ========================================= */}

          <View style={styles.requirementRow}>
            <View style={styles.requirementItem}>
              <View style={styles.requirementDot} />

              <Text style={styles.requirementText}>
                8+ Chars
              </Text>
            </View>

            <View style={styles.requirementDivider} />

            <View style={styles.requirementItem}>
              <View style={styles.requirementDot} />

              <Text style={styles.requirementText}>
                1 Number
              </Text>
            </View>

            <View style={styles.requirementDivider} />

            <View style={styles.requirementItem}>
              <View style={styles.requirementDot} />

              <Text style={styles.requirementText}>
                1 Symbol
              </Text>
            </View>
          </View>

          {/* =========================================
              TERMS
          ========================================= */}

          <TouchableOpacity
            style={styles.termsRow}
            activeOpacity={0.8}
            onPress={() =>
              setAcceptedTerms(prev => !prev)
            }
          >
            <View
              style={[
                styles.checkbox,
                acceptedTerms &&
                  styles.checkboxActive,
              ]}
            >
              {/* {acceptedTerms && (
                <Image
                  source={checkIcon}
                  resizeMode="contain"
                  style={styles.checkboxCheck}
                />
              )} */}
            </View>

            <Text style={styles.termsText}>
              I agree to the{' '}
              <Text style={styles.termsLink}>
                LocalHub Terms of Service & Privacy Policy
              </Text>
            </Text>
          </TouchableOpacity>

          {/* =========================================
              REGISTER BUTTON
          ========================================= */}

          <TouchableOpacity
            activeOpacity={0.88}
            style={[
              styles.continueButton,
              !acceptedTerms &&
                styles.continueButtonDisabled,
            ]}
            onPress={handleRegister}
          >
            <Text style={styles.continueButtonText}>
              Continue & Verify Mobile
            </Text>

            {/* <Image
              source={arrowRightIcon}
              resizeMode="contain"
              style={styles.continueArrow}
            /> */}
          </TouchableOpacity>

          {/* =========================================
              COMMUNITY ACTIVITY
          ========================================= */}

          <View style={styles.communityCard}>
            <View style={styles.avatarWrapper}>
              {/* <Image
                source={communityIcon}
                resizeMode="cover"
                style={styles.communityImage}
              /> */}
            </View>

            <View style={styles.communityTextContainer}>
              <Text style={styles.communityTitle}>
                Join 1,400+ SG Highway locals
              </Text>

              <Text style={styles.communitySubtitle}>
                Discover stores, services & deals nearby
              </Text>
            </View>
          </View>

          {/* =========================================
              LOGIN LINK
          ========================================= */}

          <View style={styles.loginRow}>
            <Text style={styles.loginText}>
              Already have an account?
            </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={goToLogin}
            >
              <Text style={styles.loginLink}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

/* =========================================
   STYLES
========================================= */

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#071A2C',
  },

  keyboardView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#071A2C',
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 30,
  },

  /* =========================================
     TOP
  ========================================= */

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  networkBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16,185,129,0.08)',
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 20,
  },

  networkDot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 4,
  },

  networkText: {
    color: '#32D7A1',
    fontSize: 7,
    fontWeight: '800',
    letterSpacing: 0.3,
  },

  setupRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  setupIcon: {
    width: 10,
    height: 10,
    tintColor: '#F59E0B',
    marginRight: 4,
  },

  setupText: {
    fontSize: 7,
    fontWeight: '700',
    color: '#F2F6FA',
  },

  /* =========================================
     HEADER
  ========================================= */

  headerSection: {
    marginBottom: 15,
  },

  title: {
    color: '#F5F8FC',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.6,
    marginBottom: 3,
  },

  subtitle: {
    color: '#AEBED0',
    fontSize: 9,
    lineHeight: 13,
    maxWidth: '90%',
  },

  sectionLabel: {
    color: '#DDE8F2',
    fontSize: 8,
    fontWeight: '700',
    marginBottom: 6,
  },

  /* =========================================
     ACCOUNT CARDS
  ========================================= */

  accountCard: {
    minHeight: 56,
    backgroundColor: '#102238',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
    paddingVertical: 7,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: 'transparent',
  },

  accountCardActive: {
    backgroundColor: '#142B43',
    borderColor: '#284A6A',
  },

  accountIconBox: {
    width: 29,
    height: 29,
    borderRadius: 7,
    backgroundColor: '#1C344B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  accountIconBoxActive: {
    backgroundColor: '#244A80',
  },

  accountIcon: {
    width: 15,
    height: 15,
    tintColor: '#AFC8FF',
  },

  accountContent: {
    flex: 1,
  },

  accountTitle: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },

  accountDescription: {
    color: '#9CB0C4',
    fontSize: 7,
    lineHeight: 10,
    marginTop: 2,
  },

  radioOuter: {
    width: 13,
    height: 13,
    borderRadius: 13,
    backgroundColor: '#294157',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
  },

  radioOuterActive: {
    backgroundColor: '#AFC9FF',
  },

  radioInner: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#3B82F6',
  },

  /* =========================================
     FORM
  ========================================= */

  inputLabel: {
    color: '#DDE7F1',
    fontSize: 8,
    fontWeight: '700',
    marginTop: 6,
    marginBottom: 5,
  },

  inputLabelNoMargin: {
    color: '#DDE7F1',
    fontSize: 8,
    fontWeight: '700',
  },

  inputContainer: {
    height: 40,
    backgroundColor: '#102238',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
    borderWidth: 1,
    borderColor: '#132B42',
  },

  inputLeftIcon: {
    width: 13,
    height: 13,
    tintColor: '#8CA5BB',
    marginRight: 8,
  },

  locationInputIcon: {
    width: 13,
    height: 13,
    tintColor: '#62A0FF',
    marginRight: 8,
  },

  input: {
    flex: 1,
    color: '#F2F6FA',
    fontSize: 9,
    paddingVertical: 0,
  },

  countryCodeSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  flag: {
    fontSize: 10,
    marginRight: 3,
  },

  countryCode: {
    fontSize: 8,
    color: '#E1E9F2',
    fontWeight: '600',
  },

  smallChevron: {
    width: 7,
    height: 7,
    tintColor: '#8298AD',
    marginLeft: 3,
  },

  inputDivider: {
    width: 1,
    height: 18,
    backgroundColor: '#294056',
    marginHorizontal: 7,
  },

  validIconContainer: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
  },

  validIcon: {
    width: 8,
    height: 8,
    tintColor: '#071A2C',
  },

  chevronIcon: {
    width: 10,
    height: 10,
    tintColor: '#A0B2C5',
  },

  /* =========================================
     PASSWORD
  ========================================= */

  passwordLabelRow: {
    marginTop: 7,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  minimumText: {
    color: '#71869B',
    fontSize: 7,
  },

  eyeButton: {
    width: 25,
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  eyeIcon: {
    width: 15,
    height: 15,
    tintColor: '#8FA5BA',
  },

  /* =========================================
     REQUIREMENTS
  ========================================= */

  requirementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 8,
  },

  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  requirementDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#657B91',
    marginRight: 3,
  },

  requirementText: {
    color: '#72869B',
    fontSize: 6,
  },

  requirementDivider: {
    width: 1,
    height: 8,
    backgroundColor: '#293F54',
    marginHorizontal: 7,
  },

  /* =========================================
     TERMS
  ========================================= */

  termsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },

  checkbox: {
    width: 13,
    height: 13,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#8598AC',
    marginRight: 6,
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  checkboxActive: {
    backgroundColor: '#AFC7FF',
    borderColor: '#AFC7FF',
  },

  checkboxCheck: {
    width: 9,
    height: 9,
    tintColor: '#071A2C',
  },

  termsText: {
    flex: 1,
    color: '#C4D0DC',
    fontSize: 7,
    lineHeight: 11,
  },

  termsLink: {
    color: '#6DA6FF',
    fontWeight: '700',
  },

  /* =========================================
     CONTINUE
  ========================================= */

  continueButton: {
    height: 43,
    borderRadius: 7,
    backgroundColor: '#AFC8FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  continueButtonDisabled: {
    opacity: 0.85,
  },

  continueButtonText: {
    color: '#071A2C',
    fontSize: 9,
    fontWeight: '700',
    marginRight: 7,
  },

  continueArrow: {
    width: 13,
    height: 13,
    tintColor: '#071A2C',
  },

  /* =========================================
     COMMUNITY
  ========================================= */

  communityCard: {
    minHeight: 46,
    borderRadius: 8,
    backgroundColor: '#0A1D30',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 12,
  },

  avatarWrapper: {
    width: 65,
    height: 28,
    justifyContent: 'center',
  },

  communityImage: {
    width: 61,
    height: 26,
    borderRadius: 15,
  },

  communityTextContainer: {
    flex: 1,
  },

  communityTitle: {
    color: '#39D6A1',
    fontSize: 7,
    fontWeight: '700',
  },

  communitySubtitle: {
    color: '#99ABBD',
    fontSize: 6,
    marginTop: 2,
  },

  /* =========================================
     LOGIN
  ========================================= */

  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },

  loginText: {
    color: '#C6D2DE',
    fontSize: 8,
    marginRight: 4,
  },

  loginLink: {
    color: '#79AAFF',
    fontSize: 8,
    fontWeight: '700',
  },
});