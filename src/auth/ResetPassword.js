import React, { useMemo, useState } from 'react';

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
   IMAGE ICONS
========================================= */

// import shieldIcon from '../assets/icons/shield.png';
// import checkIcon from '../assets/icons/check.png';
// import lockIcon from '../assets/icons/lock.png';
// import eyeIcon from '../assets/icons/eye.png';
// import eyeOffIcon from '../assets/icons/eye-off.png';
// import checklistIcon from '../assets/icons/checklist.png';
// import circleIcon from '../assets/icons/circle.png';
// import deviceIcon from '../assets/icons/device.png';
// import arrowRightIcon from '../assets/icons/arrow-right.png';

const ResetPassword = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  /* =========================================
     PASSWORD RULES
  ========================================= */

  const passwordRules = useMemo(() => {
    return {
      minLength: newPassword.length >= 8,
      hasNumber: /\d/.test(newPassword),
      hasSpecial: /[^A-Za-z0-9]/.test(newPassword),
    };
  }, [newPassword]);

  const matchedCount = Object.values(passwordRules).filter(Boolean).length;

  const passwordsMatch =
    newPassword.length > 0 &&
    confirmPassword.length > 0 &&
    newPassword === confirmPassword;

  const canSubmit =
    matchedCount === 3 &&
    passwordsMatch;

  /* =========================================
     RESET PASSWORD
  ========================================= */

  const handleResetPassword = () => {
    if (!canSubmit) {
      console.log('Password requirements not completed');
      return;
    }

    console.log({
      newPassword,
      confirmPassword,
    });

    // Add reset password API call here

    // Example:
    // navigation.replace('Login');
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
              SECURITY CARD
          ========================================= */}

          <View style={styles.securityHeaderCard}>
            <View style={styles.securityTopRow}>
              <View style={styles.securityLeftRow}>
                <View style={styles.securityIconBox}>
                  {/* <Image
                    source={shieldIcon}
                    style={styles.securityHeaderIcon}
                    resizeMode="contain"
                  /> */}
                </View>

                <View>
                  <Text style={styles.brandText}>
                    LOCALHUB
                  </Text>

                  <Text style={styles.securityTitle}>
                    SECURITY
                  </Text>

                  <Text style={styles.securitySubtitle}>
                    Account Safeguard
                  </Text>
                </View>
              </View>

              <View style={styles.encryptedBadge}>
                <View style={styles.encryptedDot} />

                <Text style={styles.encryptedText}>
                  Encrypted
                </Text>
              </View>
            </View>

            <Text style={styles.mainTitle}>
              Create New Password
            </Text>

            <Text style={styles.mainDescription}>
              Your new password must be different from
              previous passwords for security.
            </Text>
          </View>

          {/* =========================================
              NEW PASSWORD LABEL
          ========================================= */}

          <View style={styles.labelRow}>
            <Text style={styles.inputLabel}>
              New Password
            </Text>

            <Text style={styles.pendingText}>
              Pending input
            </Text>
          </View>

          {/* =========================================
              NEW PASSWORD INPUT
          ========================================= */}

          <View style={styles.inputContainer}>
            {/* <Image
              source={lockIcon}
              resizeMode="contain"
              style={styles.inputLeftIcon}
            /> */}

            <TextInput
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Enter resilient passphrase"
              placeholderTextColor="#647B91"
              secureTextEntry={!showNewPassword}
              style={styles.input}
              autoCapitalize="none"
            />

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setShowNewPassword(prev => !prev)}
              style={styles.eyeButton}
            >
              {/* <Image
                source={
                  showNewPassword
                    ? eyeIcon
                    : eyeOffIcon
                }
                resizeMode="contain"
                style={styles.eyeIcon}
              /> */}
            </TouchableOpacity>
          </View>

          {/* =========================================
              DIVIDER
          ========================================= */}

          <View style={styles.sectionDivider} />

          {/* =========================================
              CONFIRM PASSWORD
          ========================================= */}

          <Text style={styles.confirmLabel}>
            Confirm New Password
          </Text>

          <View style={styles.inputContainer}>
            {/* <Image
              source={shieldIcon}
              resizeMode="contain"
              style={styles.inputLeftIcon}
            /> */}

            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Re-type new password"
              placeholderTextColor="#647B91"
              secureTextEntry={!showConfirmPassword}
              style={styles.input}
              autoCapitalize="none"
            />

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                setShowConfirmPassword(prev => !prev)
              }
              style={styles.eyeButton}
            >
              {/* <Image
                source={
                  showConfirmPassword
                    ? eyeIcon
                    : eyeOffIcon
                }
                resizeMode="contain"
                style={styles.eyeIcon}
              /> */}
            </TouchableOpacity>
          </View>

          {/* =========================================
              REQUIREMENT CHECKLIST
          ========================================= */}

          <View style={styles.requirementCard}>
            <View style={styles.requirementHeader}>
              <View style={styles.requirementHeaderLeft}>
                {/* <Image
                  source={checklistIcon}
                  resizeMode="contain"
                  style={styles.requirementHeaderIcon}
                /> */}

                <Text style={styles.requirementTitle}>
                  Requirement Checklist
                </Text>
              </View>

              <Text style={styles.requirementCount}>
                {matchedCount} / 3 Met
              </Text>
            </View>

            {/* 8 chars */}
            <View style={styles.requirementItem}>
              <View
                style={[
                  styles.requirementCircle,
                  passwordRules.minLength &&
                    styles.requirementCircleDone,
                ]}
              >
                {/* {passwordRules.minLength ? (
                  <Image
                    source={checkIcon}
                    resizeMode="contain"
                    style={styles.requirementCheck}
                  />
                ) : (
                  <Image
                    source={circleIcon}
                    resizeMode="contain"
                    style={styles.requirementPendingIcon}
                  />
                )} */}
              </View>

              <Text
                style={[
                  styles.requirementText,
                  passwordRules.minLength &&
                    styles.requirementTextDone,
                ]}
              >
                At least 8 characters
              </Text>
            </View>

            {/* Number */}
            <View style={styles.requirementItem}>
              <View
                style={[
                  styles.requirementCircle,
                  passwordRules.hasNumber &&
                    styles.requirementCircleDone,
                ]}
              >
                {/* {passwordRules.hasNumber ? (
                  <Image
                    source={checkIcon}
                    resizeMode="contain"
                    style={styles.requirementCheck}
                  />
                ) : (
                  <Image
                    source={circleIcon}
                    resizeMode="contain"
                    style={styles.requirementPendingIcon}
                  />
                )} */}
              </View>

              <Text
                style={[
                  styles.requirementText,
                  passwordRules.hasNumber &&
                    styles.requirementTextDone,
                ]}
              >
                At least 1 number
              </Text>
            </View>

            {/* Special char */}
            <View style={styles.requirementItem}>
              <View
                style={[
                  styles.requirementCircle,
                  passwordRules.hasSpecial &&
                    styles.requirementCircleDone,
                ]}
              >
                {/* {passwordRules.hasSpecial ? (
                  <Image
                    source={checkIcon}
                    resizeMode="contain"
                    style={styles.requirementCheck}
                  />
                ) : (
                  <Image
                    source={circleIcon}
                    resizeMode="contain"
                    style={styles.requirementPendingIcon}
                  />
                )} */}
              </View>

              <Text
                style={[
                  styles.requirementText,
                  passwordRules.hasSpecial &&
                    styles.requirementTextDone,
                ]}
              >
                At least 1 special character
              </Text>
            </View>
          </View>

          {/* =========================================
              SIGNOUT PROTECTION
          ========================================= */}

          <View style={styles.protectionCard}>
            <View style={styles.protectionIconBox}>
              {/* <Image
                source={deviceIcon}
                resizeMode="contain"
                style={styles.protectionIcon}
              /> */}
            </View>

            <View style={styles.protectionContent}>
              <Text style={styles.protectionTitle}>
                Universal Sign-out Protection
              </Text>

              <Text style={styles.protectionDescription}>
                All active sessions on other devices will be logged
                out automatically.
              </Text>
            </View>
          </View>

          {/* =========================================
              RESET PASSWORD BUTTON
          ========================================= */}

          <TouchableOpacity
            style={[
              styles.resetButton,
              !canSubmit && styles.resetButtonDisabled,
            ]}
            activeOpacity={0.88}
            onPress={handleResetPassword}
          >
            {/* <Image
              source={lockIcon}
              resizeMode="contain"
              style={styles.resetLockIcon}
            /> */}

            <Text style={styles.resetButtonText}>
              Reset Password & Login
            </Text>

            {/* <Image
              source={arrowRightIcon}
              resizeMode="contain"
              style={styles.resetArrowIcon}
            /> */}
          </TouchableOpacity>

          {/* =========================================
              LOGIN DIRECTLY
          ========================================= */}

          <View style={styles.loginDirectRow}>
            <Text style={styles.loginDirectText}>
              Remembered old password?
            </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                if (navigation) {
                  navigation.navigate('Login');
                }
              }}
            >
              <Text style={styles.loginDirectLink}>
                Login Directly
              </Text>
            </TouchableOpacity>
          </View>

          {/* =========================================
              FOOTER
          ========================================= */}

          <Text style={styles.footerText}>
            LocalHub Trusted Security v4.8
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ResetPassword;

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
    paddingHorizontal: 9,
    paddingTop: 8,
    paddingBottom: 22,
  },

  /* =========================================
     SECURITY HEADER
  ========================================= */

  securityHeaderCard: {
    backgroundColor: '#11273A',
    borderRadius: 9,
    paddingHorizontal: 11,
    paddingTop: 10,
    paddingBottom: 12,
    marginBottom: 12,
  },

  securityTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 7,
  },

  securityLeftRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  securityIconBox: {
    width: 29,
    height: 29,
    borderRadius: 6,
    backgroundColor: '#29445A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  securityHeaderIcon: {
    width: 15,
    height: 15,
    tintColor: '#AFC8FF',
  },

  brandText: {
    color: '#69A9FF',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 0.4,
  },

  securityTitle: {
    color: '#AFC7FF',
    fontSize: 11,
    fontWeight: '800',
    lineHeight: 13,
  },

  securitySubtitle: {
    color: '#D8E3EC',
    fontSize: 8,
    marginTop: 1,
  },

  encryptedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16,185,129,0.12)',
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 10,
  },

  encryptedDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#10B981',
    marginRight: 4,
  },

  encryptedText: {
    color: '#31DBA5',
    fontSize: 7,
    fontWeight: '700',
  },

  mainTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: -0.4,
    marginBottom: 4,
  },

  mainDescription: {
    color: '#B8C7D6',
    fontSize: 8,
    lineHeight: 12,
  },

  /* =========================================
     LABELS
  ========================================= */

  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },

  inputLabel: {
    color: '#E1EAF3',
    fontSize: 8,
    fontWeight: '700',
  },

  pendingText: {
    color: '#CBD8E4',
    fontSize: 6,
    fontWeight: '600',
  },

  confirmLabel: {
    color: '#E1EAF3',
    fontSize: 8,
    fontWeight: '700',
    marginBottom: 5,
  },

  /* =========================================
     INPUTS
  ========================================= */

  inputContainer: {
    height: 41,
    backgroundColor: '#102238',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#142C43',
  },

  inputLeftIcon: {
    width: 13,
    height: 13,
    tintColor: '#8DA5BB',
    marginRight: 7,
  },

  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 9,
    paddingVertical: 0,
  },

  eyeButton: {
    width: 26,
    height: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  eyeIcon: {
    width: 14,
    height: 14,
    tintColor: '#A0B4C7',
  },

  sectionDivider: {
    height: 2,
    backgroundColor: '#1B3A52',
    marginVertical: 10,
    borderRadius: 2,
  },

  /* =========================================
     REQUIREMENT CARD
  ========================================= */

  requirementCard: {
    backgroundColor: '#0D2033',
    borderRadius: 8,
    paddingHorizontal: 11,
    paddingVertical: 10,
    marginTop: 11,
    marginBottom: 10,
  },

  requirementHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  requirementHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  requirementHeaderIcon: {
    width: 12,
    height: 12,
    tintColor: '#72A8FF',
    marginRight: 5,
  },

  requirementTitle: {
    color: '#E6EEF6',
    fontSize: 8,
    fontWeight: '700',
  },

  requirementCount: {
    color: '#C4D1DD',
    fontSize: 7,
    fontWeight: '700',
  },

  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },

  requirementCircle: {
    width: 13,
    height: 13,
    borderRadius: 13,
    backgroundColor: '#152D41',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  requirementCircleDone: {
    backgroundColor: '#10B981',
  },

  requirementCheck: {
    width: 8,
    height: 8,
    tintColor: '#071A2C',
  },

  requirementPendingIcon: {
    width: 7,
    height: 7,
    tintColor: '#8095AA',
  },

  requirementText: {
    color: '#CED9E4',
    fontSize: 7,
  },

  requirementTextDone: {
    color: '#EAF5F0',
  },

  /* =========================================
     PROTECTION CARD
  ========================================= */

  protectionCard: {
    backgroundColor: '#102238',
    borderRadius: 8,
    paddingHorizontal: 11,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 13,
  },

  protectionIconBox: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: '#47380D',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  protectionIcon: {
    width: 14,
    height: 14,
    tintColor: '#F59E0B',
  },

  protectionContent: {
    flex: 1,
  },

  protectionTitle: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '700',
    marginBottom: 3,
  },

  protectionDescription: {
    color: '#B9C7D4',
    fontSize: 7,
    lineHeight: 10,
  },

  /* =========================================
     RESET BUTTON
  ========================================= */

  resetButton: {
    height: 44,
    borderRadius: 7,
    backgroundColor: '#3B82F6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,

    shadowColor: '#3B82F6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },

  resetButtonDisabled: {
    opacity: 0.75,
  },

  resetLockIcon: {
    width: 11,
    height: 11,
    tintColor: '#FFFFFF',
    marginRight: 6,
  },

  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },

  resetArrowIcon: {
    width: 12,
    height: 12,
    tintColor: '#FFFFFF',
    marginLeft: 6,
  },

  /* =========================================
     DIRECT LOGIN
  ========================================= */

  loginDirectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
  },

  loginDirectText: {
    color: '#B8C7D5',
    fontSize: 7,
    marginRight: 3,
  },

  loginDirectLink: {
    color: '#89B3FF',
    fontSize: 7,
    fontWeight: '700',
  },

  footerText: {
    color: '#71879C',
    fontSize: 6,
    textAlign: 'center',
  },
});