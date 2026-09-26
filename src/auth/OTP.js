import React, { useEffect, useRef, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

/* =========================================
   IMAGE ICONS
========================================= */

// import backIcon from '../assets/icons/back.png';
// import shieldIcon from '../assets/icons/shield.png';
// import messageIcon from '../assets/icons/message.png';
// import editIcon from '../assets/icons/edit.png';
// import arrowRightIcon from '../assets/icons/arrow-right.png';
// import secureIcon from '../assets/icons/secure.png';
// import whatsappIcon from '../assets/icons/whatsapp.png';
// import fireIcon from '../assets/icons/fire.png';

const Otp = ({ navigation }) => {
  const [otp, setOtp] = useState(['5', '8', '2', '', '', '']);
  const [seconds, setSeconds] = useState(30);

  const inputRefs = useRef([]);

  /* =========================================
     COUNTDOWN
  ========================================= */

  useEffect(() => {
    if (seconds <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  /* =========================================
     OTP INPUT CHANGE
  ========================================= */

  const handleOtpChange = (value, index) => {
    const numericValue = value.replace(/[^0-9]/g, '');

    const newOtp = [...otp];

    newOtp[index] = numericValue.slice(-1);

    setOtp(newOtp);

    if (
      numericValue &&
      index < inputRefs.current.length - 1
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  /* =========================================
     BACKSPACE
  ========================================= */

  const handleKeyPress = (event, index) => {
    if (
      event.nativeEvent.key === 'Backspace' &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  /* =========================================
     VERIFY OTP
  ========================================= */

  const handleVerify = () => {
    const otpCode = otp.join('');

    if (otpCode.length !== 6) {
      console.log('Please enter complete OTP');
      return;
    }

    console.log('OTP:', otpCode);

    // Add API call here.

    // Example:
    // navigation.replace('Home');
  };

  /* =========================================
     RESEND OTP
  ========================================= */

  const handleResend = () => {
    if (seconds > 0) {
      return;
    }

    console.log('Resend OTP');

    setOtp(['', '', '', '', '', '']);

    setSeconds(30);

    inputRefs.current[0]?.focus();

    // Call resend API here.
  };

  /* =========================================
     BACK
  ========================================= */

  const handleBack = () => {
    if (navigation?.goBack) {
      navigation.goBack();
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
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* =========================================
              TOP BAR
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

            <View style={styles.secureNodeBadge}>
              <View style={styles.secureNodeDot} />

              <Text style={styles.secureNodeText}>
                SECURE NODE
              </Text>
            </View>
          </View>

          {/* =========================================
              VERIFY CARD
          ========================================= */}

          <View style={styles.verifyCard}>
            <View style={styles.heroIconWrapper}>
              <View style={styles.heroIconCircle}>
                {/* <Image
                  source={shieldIcon}
                  style={styles.heroShieldIcon}
                  resizeMode="contain"
                /> */}
              </View>

              <View style={styles.heroMessageBadge}>
                {/* <Image
                  source={messageIcon}
                  style={styles.heroMessageIcon}
                  resizeMode="contain"
                /> */}
              </View>
            </View>

            <Text style={styles.title}>
              Verify Phone Number
            </Text>

            <Text style={styles.description}>
              We sent a 6-digit verification code to +91
            </Text>

            <Text style={styles.phoneNumber}>
              98765 43210
            </Text>

            <TouchableOpacity
              style={styles.editRow}
              activeOpacity={0.7}
              onPress={() => {
                console.log('Edit number');

                // navigation.goBack();
              }}
            >
              <Text style={styles.editText}>
                Edit number
              </Text>

              {/* <Image
                source={editIcon}
                resizeMode="contain"
                style={styles.editIcon}
              /> */}
            </TouchableOpacity>
          </View>

          {/* =========================================
              OTP INPUTS
          ========================================= */}

          <View style={styles.otpContainer}>
            {otp.map((value, index) => {
              const isActive =
                value === '' &&
                index ===
                  otp.findIndex(item => item === '');

              return (
                <TextInput
                  key={index}
                  ref={ref => {
                    inputRefs.current[index] = ref;
                  }}
                  value={value}
                  onChangeText={text =>
                    handleOtpChange(text, index)
                  }
                  onKeyPress={event =>
                    handleKeyPress(event, index)
                  }
                  style={[
                    styles.otpInput,
                    isActive && styles.otpInputActive,
                    value && styles.otpInputFilled,
                  ]}
                  keyboardType="number-pad"
                  maxLength={1}
                  textAlign="center"
                  selectionColor="#10B981"
                />
              );
            })}
          </View>

          {/* =========================================
              RESEND
          ========================================= */}

          <View style={styles.resendRow}>
            <View style={styles.countdownRow}>
              {/* <Image
                source={fireIcon}
                resizeMode="contain"
                style={styles.fireIcon}
              /> */}

              <Text style={styles.resendInfoText}>
                Resend code in
              </Text>

              <Text style={styles.timerText}>
                00:{String(seconds).padStart(2, '0')}
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              disabled={seconds > 0}
              onPress={handleResend}
            >
              <Text
                style={[
                  styles.resendLink,
                  seconds > 0 &&
                    styles.resendLinkDisabled,
                ]}
              >
                Resend OTP
              </Text>
            </TouchableOpacity>
          </View>

          {/* =========================================
              VERIFY BUTTON
          ========================================= */}

          <TouchableOpacity
            activeOpacity={0.88}
            style={styles.verifyButton}
            onPress={handleVerify}
          >
            <Text style={styles.verifyButtonText}>
              Verify & Proceed
            </Text>

            {/* <Image
              source={arrowRightIcon}
              resizeMode="contain"
              style={styles.verifyArrow}
            /> */}
          </TouchableOpacity>

          {/* =========================================
              SECURITY
          ========================================= */}

          <View style={styles.securityCard}>
            {/* <Image
              source={secureIcon}
              resizeMode="contain"
              style={styles.securityIcon}
            /> */}

            <Text style={styles.securityText}>
              Secured by LocalHub 256 AI Shield
            </Text>
          </View>

          {/* =========================================
              WHATSAPP
          ========================================= */}

          <View style={styles.whatsappSection}>
            <Text style={styles.whatsappLabel}>
              Didn't receive code?
            </Text>

            <TouchableOpacity
              style={styles.whatsappButton}
              activeOpacity={0.85}
              onPress={() => {
                console.log('Try via WhatsApp');
              }}
            >
              {/* <Image
                source={whatsappIcon}
                resizeMode="contain"
                style={styles.whatsappIcon}
              /> */}

              <Text style={styles.whatsappButtonText}>
                Try via WhatsApp
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Otp;

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
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 22,
    backgroundColor: '#071A2C',
  },

  /* =========================================
     TOP BAR
  ========================================= */

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 17,
  },

  backButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#11283C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backIcon: {
    width: 14,
    height: 14,
    tintColor: '#E2EBF4',
  },

  secureNodeBadge: {
    minHeight: 18,
    paddingHorizontal: 9,
    borderRadius: 12,
    backgroundColor: '#142C3E',
    flexDirection: 'row',
    alignItems: 'center',
  },

  secureNodeDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#10B981',
    marginRight: 4,
  },

  secureNodeText: {
    color: '#3FDFAB',
    fontSize: 7,
    fontWeight: '800',
    letterSpacing: 0.3,
  },

  /* =========================================
     VERIFY CARD
  ========================================= */

  verifyCard: {
    minHeight: 145,
    backgroundColor: '#12283B',
    borderRadius: 9,
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingTop: 17,
    paddingBottom: 13,
    marginBottom: 15,
  },

  heroIconWrapper: {
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  heroIconCircle: {
    width: 49,
    height: 49,
    borderRadius: 30,
    backgroundColor: '#405B6E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heroShieldIcon: {
    width: 23,
    height: 23,
    tintColor: '#B3CAFF',
  },

  heroMessageBadge: {
    position: 'absolute',
    bottom: -1,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#AFC6FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#12283B',
  },

  heroMessageIcon: {
    width: 10,
    height: 10,
    tintColor: '#36518B',
  },

  title: {
    color: '#EAF0F7',
    fontSize: 17,
    fontWeight: '800',
    marginTop: 5,
  },

  description: {
    color: '#B8C7D6',
    fontSize: 8,
    marginTop: 5,
  },

  phoneNumber: {
    color: '#EAF2FA',
    fontSize: 9,
    fontWeight: '700',
    marginTop: 2,
  },

  editRow: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },

  editText: {
    color: '#A3BFFF',
    fontSize: 7,
    textDecorationLine: 'underline',
  },

  editIcon: {
    width: 8,
    height: 8,
    tintColor: '#A3BFFF',
    marginLeft: 3,
  },

  /* =========================================
     OTP
  ========================================= */

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  otpInput: {
    width: 33,
    height: 37,
    borderRadius: 6,
    backgroundColor: '#12273A',
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    paddingVertical: 0,
    borderWidth: 1,
    borderColor: '#182F43',
  },

  otpInputFilled: {
    backgroundColor: '#162D43',
  },

  otpInputActive: {
    backgroundColor: '#20495A',
    borderColor: '#10B981',
    color: '#FFFFFF',
  },

  /* =========================================
     RESEND
  ========================================= */

  resendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  countdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  fireIcon: {
    width: 11,
    height: 11,
    marginRight: 4,
  },

  resendInfoText: {
    color: '#BDC9D5',
    fontSize: 7,
  },

  timerText: {
    color: '#F0F5FA',
    fontSize: 7,
    fontWeight: '800',
    marginLeft: 2,
  },

  resendLink: {
    color: '#75A7FF',
    fontSize: 7,
    fontWeight: '700',
  },

  resendLinkDisabled: {
    opacity: 0.8,
  },

  /* =========================================
     VERIFY BUTTON
  ========================================= */

  verifyButton: {
    height: 43,
    borderRadius: 7,
    backgroundColor: '#AFC7FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  verifyButtonText: {
    color: '#071A2C',
    fontSize: 9,
    fontWeight: '700',
    marginRight: 7,
  },

  verifyArrow: {
    width: 13,
    height: 13,
    tintColor: '#071A2C',
  },

  /* =========================================
     SECURITY
  ========================================= */

  securityCard: {
    height: 26,
    borderRadius: 6,
    backgroundColor: '#091D2D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  securityIcon: {
    width: 10,
    height: 10,
    tintColor: '#10B981',
    marginRight: 5,
  },

  securityText: {
    color: '#D5DFE9',
    fontSize: 6,
    fontWeight: '600',
  },

  /* =========================================
     WHATSAPP
  ========================================= */

  whatsappSection: {
    alignItems: 'center',
  },

  whatsappLabel: {
    color: '#B6C4D2',
    fontSize: 8,
    marginBottom: 7,
  },

  whatsappButton: {
    width: '88%',
    minHeight: 30,
    borderRadius: 7,
    backgroundColor: '#172C3E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  whatsappIcon: {
    width: 12,
    height: 12,
    marginRight: 5,
  },

  whatsappButtonText: {
    color: '#DCE6EF',
    fontSize: 8,
    fontWeight: '700',
  },
});