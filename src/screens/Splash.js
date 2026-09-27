import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Easing,
  StatusBar,
  Dimensions,
} from 'react-native';
import Logo from '../assets/logo.png';

const { width, height } = Dimensions.get('window');

const Splash = ({ navigation }) => {
  const logoScale = useRef(new Animated.Value(0.65)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoGlow = useRef(new Animated.Value(0)).current;

  const badgeOpacity = useRef(new Animated.Value(0)).current;
  const badgeTranslate = useRef(new Animated.Value(-14)).current;

  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleTranslate = useRef(new Animated.Value(15)).current;

  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const subtitleTranslate = useRef(new Animated.Value(15)).current;

  const descriptionOpacity = useRef(new Animated.Value(0)).current;

  const bottomOpacity = useRef(new Animated.Value(0)).current;
  const progressWidth = useRef(new Animated.Value(0)).current;

  const pulseScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(badgeOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(badgeTranslate, {
          toValue: 0,
          duration: 500,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 550,
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          friction: 6,
          tension: 75,
          useNativeDriver: true,
        }),
        Animated.timing(logoGlow, {
          toValue: 1,
          duration: 700,
          useNativeDriver: false,
        }),
      ]),

      Animated.parallel([
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(titleTranslate, {
          toValue: 0,
          duration: 450,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(subtitleOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(subtitleTranslate, {
          toValue: 0,
          duration: 450,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),

      Animated.timing(descriptionOpacity, {
        toValue: 1,
        duration: 450,
        useNativeDriver: true,
      }),

      Animated.timing(bottomOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),

      Animated.timing(progressWidth, {
        toValue: 1,
        duration: 1800,
        easing: Easing.inOut(Easing.cubic),
        useNativeDriver: false,
      }),
    ]).start();

    // subtle infinite pulse on logo
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseScale, {
          toValue: 1.045,
          duration: 1200,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseScale, {
          toValue: 1,
          duration: 1200,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );

    const pulseTimer = setTimeout(() => {
      pulseAnimation.start();
    }, 1300);

    const navTimer = setTimeout(() => {
      if (navigation) {
        navigation.replace('Login');
      }
    }, 4200);

    return () => {
      clearTimeout(pulseTimer);
      clearTimeout(navTimer);
      pulseAnimation.stop();
    };
  }, []);

  const progressStyle = {
    width: progressWidth.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%'],
    }),
  };

  const glowOpacity = logoGlow.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.34],
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#071A2C"
      />

      {/* subtle background glow */}
      <View style={styles.backgroundGlowTop} />
      <View style={styles.backgroundGlowBottom} />

      {/* top badge */}
      <Animated.View
        style={[
          styles.statusBadge,
          {
            opacity: badgeOpacity,
            transform: [{ translateY: badgeTranslate }],
          },
        ]}
      >
        <View style={styles.statusDot} />

        <Text style={styles.statusText}>
          ACTIVE GRID · 12,480 LOCAL STORES
        </Text>
      </Animated.View>

      {/* center content */}
      <View style={styles.centerContent}>
        <Animated.View
          style={[
            styles.logoOuter,
            {
              opacity: logoOpacity,
              transform: [
                { scale: logoScale },
                { scale: pulseScale },
              ],
            },
          ]}
        >
          <Animated.View
            style={[
              styles.logoGlow,
              {
                opacity: glowOpacity,
              },
            ]}
          />

          <View style={styles.logoBox}>
            <Image
              source={Logo}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </Animated.View>

        <Animated.Text
          style={[
            styles.title,
            {
              opacity: titleOpacity,
              transform: [{ translateY: titleTranslate }],
            },
          ]}
        >
          LocalHub
        </Animated.Text>

        <Animated.Text
          style={[
            styles.subtitle,
            {
              opacity: subtitleOpacity,
              transform: [{ translateY: subtitleTranslate }],
            },
          ]}
        >
          Every business around you.{'\n'}One LocalHub.
        </Animated.Text>

        <Animated.Text
          style={[
            styles.description,
            {
              opacity: descriptionOpacity,
            },
          ]}
        >
          Hyperlocal Commerce • Real-Time Stock • Verified{'\n'}
          Merchants
        </Animated.Text>
      </View>

      {/* bottom section */}
      <Animated.View
        style={[
          styles.bottomSection,
          {
            opacity: bottomOpacity,
          },
        ]}
      >
        <View style={styles.readyRow}>
          <Text style={styles.syncIcon}>⟳</Text>
          <Text style={styles.readyText}>
            Grid Ready. Welcome!
          </Text>
        </View>

        <View style={styles.progressBackground}>
          <Animated.View
            style={[
              styles.progressFill,
              progressStyle,
            ]}
          />
        </View>

        <View style={styles.bottomMeta}>
          <Text style={styles.latencyText}>
            LATENCY: 14MS
          </Text>

          <Text style={styles.secureText}>
            TLS 1.3 SECURED
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071A2C',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  backgroundGlowTop: {
    position: 'absolute',
    width: width * 0.95,
    height: width * 0.95,
    borderRadius: width,
    backgroundColor: '#3B82F6',
    opacity: 0.055,
    top: height * 0.12,
  },

  backgroundGlowBottom: {
    position: 'absolute',
    width: width,
    height: width,
    borderRadius: width,
    backgroundColor: '#10B981',
    opacity: 0.025,
    bottom: -width * 0.5,
  },

  statusBadge: {
    position: 'absolute',
    top: height * 0.065,
    minHeight: 35,
    paddingHorizontal: 21,
    borderRadius: 21,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(16,185,129,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(16,185,129,0.08)',
    shadowColor: '#10B981',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 5,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 13,
    backgroundColor: '#10B981',
    marginRight: 9,
    shadowColor: '#10B981',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 4,
  },

  statusText: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.4,
    color: '#4FE1B0',
  },

  centerContent: {
    width: '100%',
    alignItems: 'center',
    marginTop: -20,
  },

  logoOuter: {
    width: 130,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 27,
  },

  logoGlow: {
    position: 'absolute',
    width: 137,
    height: 137,
    borderRadius: 36,
    backgroundColor: '#3B82F6',
    transform: [{ scale: 1.22 }],
  },

  logoBox: {
    width: 109,
    height: 109,
    borderRadius: 25,
    backgroundColor: '#0B2239',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#3B82F6',
    shadowOpacity: 0.3,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 10,
  },

  logo: {
    width: 78,
    height: 78,
  },

  title: {
    color: '#F4F8FC',
    fontSize: 36,
    fontWeight: '800',
    letterSpacing: -0.8,
    marginBottom: 12,
  },

  subtitle: {
    color: '#D8E5F3',
    textAlign: 'center',
    fontSize: 23,
    lineHeight: 30,
    fontWeight: '700',
    paddingHorizontal: 46,
  },

  description: {
    marginTop: 16,
    color: '#94A3B8',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '500',
    paddingHorizontal: 39,
  },

  bottomSection: {
    position: 'absolute',
    bottom: height * 0.06,
    width: '86%',
    alignItems: 'center',
  },

  readyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },

  syncIcon: {
    color: '#94A3B8',
    fontSize: 22,
    marginRight: 8,
  },

  readyText: {
    color: '#AEBFD1',
    fontSize: 16,
    fontWeight: '700',
  },

  progressBackground: {
    width: '100%',
    height: 7,
    borderRadius: 13,
    overflow: 'hidden',
    backgroundColor: 'rgba(148,163,184,0.15)',
  },

  progressFill: {
    height: '100%',
    borderRadius: 13,
    backgroundColor: '#10B981',
  },

  bottomMeta: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  latencyText: {
    color: '#6F8296',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.25,
  },

  secureText: {
    color: '#10B981',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.25,
  },
});