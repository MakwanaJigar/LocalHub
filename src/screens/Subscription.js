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

/* =========================================================
   TEMPORARY ONLINE PNG ICONS

   Later replace these URLs with your own local PNG files.
========================================================= */

const ICONS = {
  back:
    'https://img.icons8.com/ios-filled/100/ffffff/left.png',

  shield:
    'https://img.icons8.com/ios-filled/100/ffffff/shield.png',

  crown:
    'https://img.icons8.com/fluency/96/crown.png',

  merchant:
    'https://img.icons8.com/ios-filled/100/ffffff/shop.png',

  check:
    'https://img.icons8.com/ios-filled/100/ffffff/checkmark.png',

  star:
    'https://img.icons8.com/fluency/96/star.png',

  location:
    'https://img.icons8.com/ios-filled/100/ffffff/marker.png',

  products:
    'https://img.icons8.com/ios-filled/100/ffffff/product.png',

  analytics:
    'https://img.icons8.com/ios-filled/100/ffffff/combo-chart.png',

  leads:
    'https://img.icons8.com/ios-filled/100/ffffff/conference-call.png',

  whatsapp:
    'https://img.icons8.com/ios-filled/100/ffffff/whatsapp.png',

  delivery:
    'https://img.icons8.com/ios-filled/100/ffffff/delivery.png',

  verified:
    'https://img.icons8.com/ios-filled/100/ffffff/verified-badge.png',

  boost:
    'https://img.icons8.com/ios-filled/100/ffffff/rocket.png',

  ads:
    'https://img.icons8.com/ios-filled/100/ffffff/commercial.png',

  support:
    'https://img.icons8.com/ios-filled/100/ffffff/headset.png',

  billing:
    'https://img.icons8.com/ios-filled/100/ffffff/receipt.png',

  lock:
    'https://img.icons8.com/ios-filled/100/ffffff/lock.png',

  arrowRight:
    'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  sparkle:
    'https://img.icons8.com/fluency/96/sparkling.png',

  percentage:
    'https://img.icons8.com/ios-filled/100/ffffff/percentage.png',

  info:
    'https://img.icons8.com/ios-filled/100/ffffff/info.png',

  calendar:
    'https://img.icons8.com/ios-filled/100/ffffff/calendar.png',

  home:
    'https://img.icons8.com/ios-filled/100/ffffff/home.png',

  chat:
    'https://img.icons8.com/ios-filled/100/ffffff/chat-message.png',

  profile:
    'https://img.icons8.com/ios-filled/100/ffffff/user.png',
};

/* =========================================================
   TEMPORARY IMAGES
========================================================= */

const IMAGES = {
  banner:
    'https://picsum.photos/seed/localhub-subscription-banner/900/350',

  merchant:
    'https://picsum.photos/seed/localhub-merchant-subscription/300/300',
};

/* =========================================================
   MAIN SCREEN
========================================================= */

const Subscription = ({ navigation }) => {
  const [billingCycle, setBillingCycle] = useState('Monthly');

  const handleBack = () => {
    if (navigation?.goBack) {
      navigation.goBack();
    }
  };

  const handleChoosePlan = plan => {
    console.log('Choose Plan:', plan);
  };

  const handleUpgrade = () => {
    console.log('Upgrade to Pro');
  };

  const handlePremium = () => {
    console.log('Start Premium Trial');
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

              <View style={styles.headerShieldBox}>
                <Image
                  source={{ uri: ICONS.shield }}
                  style={styles.headerShieldIcon}
                  resizeMode="contain"
                />
              </View>

              <View>
                <Text style={styles.headerTitle}>
                  LocalHub
                </Text>

                <Text style={styles.headerSubtitle}>
                  Merchant Plans
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.headerHelp}
              activeOpacity={0.8}
            >
              <Image
                source={{ uri: ICONS.support }}
                style={styles.headerHelpIcon}
                resizeMode="contain"
              />

              <Text style={styles.headerHelpText}>
                Support
              </Text>
            </TouchableOpacity>
          </View>

          {/* =================================================
              HERO / INTRO
          ================================================= */}

          <View style={styles.heroCard}>
            <View style={styles.heroBadge}>
              <Image
                source={{ uri: ICONS.crown }}
                style={styles.heroBadgeIcon}
                resizeMode="contain"
              />

              <Text style={styles.heroBadgeText}>
                MERCHANT GROWTH PLANS
              </Text>
            </View>

            <Text style={styles.heroTitle}>
              Supercharge Your Local Store
            </Text>

            <Text style={styles.heroSubtitle}>
              Choose the plan built for your business and unlock
              more visibility, growth tools and customer reach.
            </Text>

            <View style={styles.heroMerchantRow}>
              <Image
                source={{ uri: IMAGES.merchant }}
                style={styles.heroMerchantImage}
                resizeMode="cover"
              />

              <View style={styles.heroMerchantText}>
                <Text style={styles.heroMerchantTitle}>
                  Local Business Growth
                </Text>

                <Text style={styles.heroMerchantSubtitle}>
                  More leads • More visibility • More trust
                </Text>
              </View>
            </View>
          </View>

          {/* =================================================
              BILLING TOGGLE
          ================================================= */}

          <View style={styles.billingToggle}>
            <TouchableOpacity
              style={[
                styles.billingButton,
                billingCycle === 'Monthly' &&
                  styles.billingButtonActive,
              ]}
              onPress={() => setBillingCycle('Monthly')}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.billingText,
                  billingCycle === 'Monthly' &&
                    styles.billingTextActive,
                ]}
              >
                Monthly
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.billingButton,
                billingCycle === 'Yearly' &&
                  styles.billingButtonActive,
              ]}
              onPress={() => setBillingCycle('Yearly')}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.billingText,
                  billingCycle === 'Yearly' &&
                    styles.billingTextActive,
                ]}
              >
                Yearly
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.saveText}>
            Save 20% on annual plans
          </Text>

          {/* =================================================
              BASIC PLAN
          ================================================= */}

          <View style={styles.planCard}>
            <View style={styles.planTopRow}>
              <View>
                <Text style={styles.planSmallLabel}>
                  BASIC STORE
                </Text>

                <Text style={styles.planTitle}>
                  Starter / Free
                </Text>

                <Text style={styles.planPrice}>
                  ₹0
                </Text>
              </View>

              <View style={styles.activeBadge}>
                <Text style={styles.activeBadgeText}>
                  Active
                </Text>
              </View>
            </View>

            <Text style={styles.planDescription}>
              Ideal for existing neighborhood stores that want
              simple LocalHub visibility.
            </Text>

            <Feature
              icon={ICONS.products}
              text="10 Product Listings"
            />

            <Feature
              icon={ICONS.location}
              text="Standard Local Ranking"
            />

            <Feature
              icon={ICONS.leads}
              text="Pay-per-use quote leads"
            />

            <TouchableOpacity
              style={styles.currentPlanButton}
              activeOpacity={0.85}
            >
              <Text style={styles.currentPlanText}>
                Current Plan
              </Text>
            </TouchableOpacity>
          </View>

          {/* =================================================
              LOCALHUB PRO
          ================================================= */}

          <View style={[styles.planCard, styles.proCard]}>
            <View style={styles.planTagRow}>
              <View style={styles.recommendedTag}>
                <Text style={styles.recommendedTagText}>
                  MOST POPULAR
                </Text>
              </View>

              <View style={styles.proBadge}>
                <Text style={styles.proBadgeText}>
                  RECOMMENDED
                </Text>
              </View>
            </View>

            <View style={styles.planTopRow}>
              <View>
                <Text style={styles.planTitle}>
                  LocalHub Pro
                </Text>

                <View style={styles.priceLine}>
                  <Text style={styles.planPrice}>
                    ₹299
                  </Text>

                  <Text style={styles.priceSuffix}>
                    /month
                  </Text>
                </View>
              </View>
            </View>

            <Text style={styles.planDescription}>
              Built for stores that want faster growth, stronger
              visibility and more verified customer opportunities.
            </Text>

            <Feature
              icon={ICONS.products}
              text="Unlimited Live Product Stock Sync"
            />

            <Feature
              icon={ICONS.analytics}
              text="30-Day Store Analytics"
            />

            <Feature
              icon={ICONS.leads}
              text="More Priority Quote Leads"
            />

            <Feature
              icon={ICONS.whatsapp}
              text="WhatsApp Business Messaging"
            />

            <Feature
              icon={ICONS.verified}
              text="Verified Pro Merchant Badge"
            />

            <Feature
              icon={ICONS.delivery}
              text="Priority Delivery Marketplace"
            />

            <TouchableOpacity
              style={styles.upgradeButton}
              activeOpacity={0.88}
              onPress={handleUpgrade}
            >
              <Text style={styles.upgradeButtonText}>
                Upgrade to Pro
              </Text>

              <Image
                source={{ uri: ICONS.arrowRight }}
                style={styles.upgradeArrow}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <View style={styles.securePlanRow}>
              <Image
                source={{ uri: ICONS.lock }}
                style={styles.securePlanIcon}
                resizeMode="contain"
              />

              <Text style={styles.securePlanText}>
                Secure billing • Cancel anytime
              </Text>
            </View>
          </View>

          {/* =================================================
              PREMIUM
          ================================================= */}

          <View style={[styles.planCard, styles.premiumCard]}>
            <View style={styles.planTagRow}>
              <View style={styles.premiumTag}>
                <Text style={styles.premiumTagText}>
                  MAX VISIBILITY
                </Text>
              </View>

              <View style={styles.vipBadge}>
                <Text style={styles.vipBadgeText}>
                  VIP
                </Text>
              </View>
            </View>

            <Text style={styles.planTitle}>
              Enterprise / Market Leader
            </Text>

            <View style={styles.priceLine}>
              <Text style={styles.planPrice}>
                ₹799
              </Text>

              <Text style={styles.priceSuffix}>
                /month
              </Text>
            </View>

            <Text style={styles.planDescription}>
              Maximum local-market visibility and premium growth
              tools for established local businesses.
            </Text>

            <Feature
              icon={ICONS.ads}
              text="Dedicated Local Ads Manager"
            />

            <Feature
              icon={ICONS.boost}
              text="Priority Placement Above Competitors"
            />

            <Feature
              icon={ICONS.leads}
              text="Unlimited Advanced Matching"
            />

            <Feature
              icon={ICONS.analytics}
              text="Top-Tier Category Market Placement"
            />

            <Feature
              icon={ICONS.support}
              text="Custom Promotions & Pro-Level Support"
            />

            <TouchableOpacity
              style={styles.premiumButton}
              activeOpacity={0.88}
              onPress={handlePremium}
            >
              <Image
                source={{ uri: ICONS.sparkle }}
                style={styles.premiumButtonIcon}
                resizeMode="contain"
              />

              <Text style={styles.premiumButtonText}>
                Start Free Trial
              </Text>
            </TouchableOpacity>
          </View>

          {/* =================================================
              GUARANTEE
          ================================================= */}

          <View style={styles.guaranteeCard}>
            <View style={styles.guaranteeIconBox}>
              <Image
                source={{ uri: ICONS.shield }}
                style={styles.guaranteeIcon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.guaranteeContent}>
              <Text style={styles.guaranteeTitle}>
                LocalHub Merchant Assurance
              </Text>

              <Text style={styles.guaranteeText}>
                Cancel or upgrade your subscription anytime.
              </Text>
            </View>
          </View>

          {/* =================================================
              PLAN BENEFITS
          ================================================= */}

          <View style={styles.benefitCard}>
            <Text style={styles.benefitTitle}>
              Why Upgrade?
            </Text>

            <View style={styles.benefitRow}>
              <Benefit
                icon={ICONS.percentage}
                title="More Leads"
                text="Higher local visibility"
              />

              <Benefit
                icon={ICONS.verified}
                title="More Trust"
                text="Verified merchant status"
              />

              <Benefit
                icon={ICONS.analytics}
                title="Better Insights"
                text="Growth analytics"
              />
            </View>
          </View>

          {/* =================================================
              FOOTER INFO
          ================================================= */}

          <View style={styles.footerInfoCard}>
            <Image
              source={{ uri: ICONS.billing }}
              style={styles.footerInfoIcon}
              resizeMode="contain"
            />

            <View style={styles.footerInfoContent}>
              <Text style={styles.footerInfoTitle}>
                Secure Billing
              </Text>

              <Text style={styles.footerInfoText}>
                Payments are protected and subscription changes
                can be made anytime.
              </Text>
            </View>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

/* =========================================================
   REUSABLE FEATURE COMPONENT
========================================================= */

const Feature = ({ icon, text }) => {
  return (
    <View style={styles.featureRow}>
      <View style={styles.featureIconBox}>
        <Image
          source={{ uri: icon }}
          style={styles.featureIcon}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.featureText}>
        {text}
      </Text>
    </View>
  );
};

/* =========================================================
   REUSABLE BENEFIT COMPONENT
========================================================= */

const Benefit = ({ icon, title, text }) => {
  return (
    <View style={styles.benefitItem}>
      <View style={styles.benefitIconBox}>
        <Image
          source={{ uri: icon }}
          style={styles.benefitIcon}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.benefitItemTitle}>
        {title}
      </Text>

      <Text style={styles.benefitItemText}>
        {text}
      </Text>
    </View>
  );
};

export default Subscription;

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
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 33,
  },

  /* =====================================================
     HEADER
  ===================================================== */

  header: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 9,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: 33,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backIcon: {
    width: 17,
    height: 17,
    tintColor: '#C7D3DF',
  },

  headerShieldBox: {
    width: 23,
    height: 23,
    borderRadius: 7,
    backgroundColor: '#2F6ED5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  headerShieldIcon: {
    width: 12,
    height: 12,
    tintColor: '#FFFFFF',
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },

  headerSubtitle: {
    color: '#788EA2',
    fontSize: 11,
  },

  headerHelp: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerHelpIcon: {
    width: 12,
    height: 12,
    tintColor: '#7EA9FF',
    marginRight: 4,
  },

  headerHelpText: {
    color: '#8DB1FF',
    fontSize: 11,
    fontWeight: '700',
  },

  /* =====================================================
     HERO
  ===================================================== */

  heroCard: {
    backgroundColor: '#102438',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  heroBadge: {
    alignSelf: 'center',
    backgroundColor: 'rgba(245,158,11,0.14)',
    borderRadius: 10,
    paddingHorizontal: 9,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },

  heroBadgeIcon: {
    width: 12,
    height: 12,
    marginRight: 4,
  },

  heroBadgeText: {
    color: '#F59E0B',
    fontSize: 11,
    fontWeight: '900',
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },

  heroSubtitle: {
    color: '#9FB2C3',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
    marginTop: 5,
  },

  heroMerchantRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#0B1F31',
    borderRadius: 9,
    padding: 8,
  },

  heroMerchantImage: {
    width: 49,
    height: 49,
    borderRadius: 9,
    marginRight: 9,
  },

  heroMerchantText: {
    flex: 1,
  },

  heroMerchantTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },

  heroMerchantSubtitle: {
    color: '#7F94A7',
    fontSize: 11,
    marginTop: 2,
  },

  /* =====================================================
     BILLING TOGGLE
  ===================================================== */

  billingToggle: {
    flexDirection: 'row',
    backgroundColor: '#102438',
    borderRadius: 20,
    padding: 4,
    marginBottom: 5,
  },

  billingButton: {
    flex: 1,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },

  billingButtonActive: {
    backgroundColor: '#3B82F6',
  },

  billingText: {
    color: '#879DB0',
    fontSize: 12,
    fontWeight: '700',
  },

  billingTextActive: {
    color: '#FFFFFF',
  },

  saveText: {
    color: '#10B981',
    fontSize: 11,
    textAlign: 'center',
    marginBottom: 10,
  },

  /* =====================================================
     PLAN CARD
  ===================================================== */

  planCard: {
    backgroundColor: '#102438',
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  proCard: {
    borderWidth: 1,
    borderColor: '#245F9E',
  },

  premiumCard: {
    borderWidth: 1,
    borderColor: '#4D4324',
  },

  planTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  planTagRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  planSmallLabel: {
    color: '#72889B',
    fontSize: 11,
    fontWeight: '700',
  },

  planTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '900',
    marginTop: 2,
  },

  planPrice: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '900',
    marginTop: 5,
  },

  priceLine: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  priceSuffix: {
    color: '#8298AB',
    fontSize: 12,
    marginLeft: 2,
    marginBottom: 4,
  },

  activeBadge: {
    backgroundColor: '#243649',
    borderRadius: 9,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  activeBadgeText: {
    color: '#BCC9D4',
    fontSize: 11,
    fontWeight: '700',
  },

  recommendedTag: {
    backgroundColor: 'rgba(245,158,11,0.15)',
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  recommendedTagText: {
    color: '#F59E0B',
    fontSize: 11,
    fontWeight: '900',
  },

  proBadge: {
    backgroundColor: 'rgba(16,185,129,0.14)',
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  proBadgeText: {
    color: '#10B981',
    fontSize: 11,
    fontWeight: '900',
  },

  premiumTag: {
    backgroundColor: 'rgba(245,158,11,0.15)',
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  premiumTagText: {
    color: '#F59E0B',
    fontSize: 11,
    fontWeight: '900',
  },

  vipBadge: {
    backgroundColor: '#1B3044',
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  vipBadgeText: {
    color: '#9FBFFF',
    fontSize: 11,
    fontWeight: '900',
  },

  planDescription: {
    color: '#9FB1C1',
    fontSize: 12,
    lineHeight: 16,
    marginVertical: 9,
  },

  /* =====================================================
     FEATURE
  ===================================================== */

  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  featureIconBox: {
    width: 23,
    height: 23,
    borderRadius: 7,
    backgroundColor: '#163049',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  featureIcon: {
    width: 13,
    height: 13,
    tintColor: '#10B981',
  },

  featureText: {
    color: '#D6E0E8',
    fontSize: 12,
    flex: 1,
  },

  /* =====================================================
     BUTTONS
  ===================================================== */

  currentPlanButton: {
    height: 40,
    borderRadius: 8,
    backgroundColor: '#24394D',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },

  currentPlanText: {
    color: '#8EA2B5',
    fontSize: 12,
    fontWeight: '700',
  },

  upgradeButton: {
    height: 47,
    borderRadius: 14,
    backgroundColor: '#3B82F6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
    ...SHADOW.glow,
  },

  upgradeButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },

  upgradeArrow: {
    width: 13,
    height: 13,
    tintColor: '#FFFFFF',
    marginLeft: 7,
  },

  securePlanRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  securePlanIcon: {
    width: 10,
    height: 10,
    tintColor: '#10B981',
    marginRight: 4,
  },

  securePlanText: {
    color: '#7F95A7',
    fontSize: 11,
  },

  premiumButton: {
    height: 46,
    borderRadius: 9,
    backgroundColor: '#26394B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
  },

  premiumButtonIcon: {
    width: 14,
    height: 14,
    marginRight: 5,
  },

  premiumButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },

  /* =====================================================
     GUARANTEE
  ===================================================== */

  guaranteeCard: {
    backgroundColor: '#102438',
    borderRadius: 14,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  guaranteeIconBox: {
    width: 39,
    height: 39,
    borderRadius: 20,
    backgroundColor: 'rgba(16,185,129,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  guaranteeIcon: {
    width: 20,
    height: 20,
    tintColor: '#10B981',
  },

  guaranteeContent: {
    flex: 1,
  },

  guaranteeTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  guaranteeText: {
    color: '#8298AA',
    fontSize: 11,
    marginTop: 2,
  },

  /* =====================================================
     BENEFITS
  ===================================================== */

  benefitCard: {
    backgroundColor: '#102438',
    borderRadius: 14,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  benefitTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 9,
  },

  benefitRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  benefitItem: {
    width: '31%',
    alignItems: 'center',
  },

  benefitIconBox: {
    width: 36,
    height: 36,
    borderRadius: 9,
    backgroundColor: '#163049',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },

  benefitIcon: {
    width: 18,
    height: 18,
    tintColor: '#6EA7FF',
  },

  benefitItemTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },

  benefitItemText: {
    color: '#748A9D',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 2,
  },

  /* =====================================================
     FOOTER INFO
  ===================================================== */

  footerInfoCard: {
    backgroundColor: '#0C2032',
    borderRadius: 14,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  footerInfoIcon: {
    width: 20,
    height: 20,
    tintColor: '#F59E0B',
    marginRight: 8,
  },

  footerInfoContent: {
    flex: 1,
  },

  footerInfoTitle: {
    color: '#E5EDF5',
    fontSize: 12,
    fontWeight: '700',
  },

  footerInfoText: {
    color: '#7C91A4',
    fontSize: 11,
    lineHeight: 14,
    marginTop: 2,
  },

  bottomSpace: {
    height: 26,
  },
});