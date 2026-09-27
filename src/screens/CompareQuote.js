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
   ONLINE DUMMY ICONS

   Later you can replace these with local PNG files.

   Example:

   import backIcon from '../assets/icons/back.png';

   Then:

   source={{ uri: ICONS.back }}

   becomes:

   source={backIcon}
========================================================= */

const ICONS = {
  back:
    'https://img.icons8.com/ios-filled/100/ffffff/left.png',

  shield:
    'https://img.icons8.com/ios-filled/100/ffffff/shield.png',

  profile:
    'https://img.icons8.com/ios-filled/100/ffffff/user.png',

  bell:
    'https://img.icons8.com/ios-filled/100/ffffff/appointment-reminders.png',

  star:
    'https://img.icons8.com/fluency/96/star.png',

  sort:
    'https://img.icons8.com/ios-filled/100/ffffff/sorting-arrows.png',

  fastest:
    'https://img.icons8.com/ios-filled/100/ffffff/clock.png',

  topRated:
    'https://img.icons8.com/ios-filled/100/ffffff/prize.png',

  material:
    'https://img.icons8.com/ios-filled/100/ffffff/box.png',

  labour:
    'https://img.icons8.com/ios-filled/100/ffffff/worker-male.png',

  calendar:
    'https://img.icons8.com/ios-filled/100/ffffff/calendar.png',

  warranty:
    'https://img.icons8.com/ios-filled/100/ffffff/verified-badge.png',

  arrowRight:
    'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  message:
    'https://img.icons8.com/ios-filled/100/ffffff/chat-message.png',

  phone:
    'https://img.icons8.com/ios-filled/100/ffffff/phone.png',

  check:
    'https://img.icons8.com/ios-filled/100/ffffff/checkmark.png',

  building:
    'https://img.icons8.com/ios-filled/100/ffffff/city-buildings.png',

  price:
    'https://img.icons8.com/ios-filled/100/ffffff/price-tag.png',

  scope:
    'https://img.icons8.com/ios-filled/100/ffffff/document.png',

  info:
    'https://img.icons8.com/ios-filled/100/ffffff/info.png',

  interior:
    'https://img.icons8.com/ios-filled/100/ffffff/interior.png',

  tools:
    'https://img.icons8.com/ios-filled/100/ffffff/maintenance.png',

  home:
    'https://img.icons8.com/ios-filled/100/ffffff/home.png',
};

/* =========================================================
   QUOTE DATA

   Replace this later with API data.
========================================================= */

const initialQuotes = [
  {
    id: 1,

    companyName: 'ABC Interior Atelier',

    price: '₹8,50,000',

    priceLabel: 'All-Inclusive',

    rating: '4.7',

    reviews: '42 reviews',

    materialPrice: '₹3.8L',

    labourPrice: '₹2.7L',

    warranty: '5 Year workmanship',

    timeline: '21 Days guarantee',

    type: 'abc',

    contactType: 'chat',
  },

  {
    id: 2,

    companyName: 'XYZ Design Studio',

    price: '₹9,20,000',

    priceLabel: 'Premium Pricing',

    rating: '4.8',

    reviews: '38 reviews',

    materialPrice: '₹4.4L',

    labourPrice: '₹2.8L',

    warranty: 'Milestone-based escrow release',

    timeline: '35 Days',

    type: 'xyz',

    contactType: 'phone',
  },

  {
    id: 3,

    companyName: 'HomeCraft Living',

    price: '₹8,90,000',

    priceLabel: 'Fast-track',

    rating: '4.6',

    reviews: '64 reviews',

    materialPrice: '₹4.0L',

    labourPrice: '₹2.9L',

    warranty: 'Free 3D/VR Tour',

    timeline: '25 Days Delivery',

    type: 'home',

    contactType: 'chat',
  },
];

const CompareQuote = ({ navigation }) => {
  const [quotes] = useState(initialQuotes);

  const [activeFilter, setActiveFilter] =
    useState('Smart by Price');

  const filters = [
    {
      id: 1,
      name: 'Smart by Price',
      icon: ICONS.sort,
    },

    {
      id: 2,
      name: 'Fastest Delivery',
      icon: ICONS.fastest,
    },

    {
      id: 3,
      name: 'Top Rated',
      icon: ICONS.topRated,
    },
  ];

  /* =====================================================
     BACK
  ===================================================== */

  const handleBack = () => {
    if (navigation?.goBack) {
      navigation.goBack();
    }
  };

  /* =====================================================
     VIEW QUOTE
  ===================================================== */

  const handleViewQuote = quote => {
    console.log('View Quote:', quote);

    navigation.navigate('ServiceDetail', {
      quoteId: quote.id,
    });
  };

  /* =====================================================
     CONTACT
  ===================================================== */

  const handleContact = quote => {
    console.log('Contact:', quote.companyName);

    // Add message / phone logic here.
  };

  /* =====================================================
     QUOTE ICON
  ===================================================== */

  const getCompanyIcon = type => {
    switch (type) {
      case 'xyz':
        return ICONS.tools;

      case 'home':
        return ICONS.home;

      default:
        return ICONS.interior;
    }
  };

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top', 'left', 'right']}
    >
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
                  source={{
                    uri: ICONS.back,
                  }}
                  style={styles.backIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <View style={styles.headerTitleRow}>
                <View style={styles.headerShieldBox}>
                  <Image
                    source={{
                      uri: ICONS.shield,
                    }}
                    style={styles.headerShield}
                    resizeMode="contain"
                  />
                </View>

                <Text style={styles.headerTitle}>
                  NewRequest
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.profileButton}
              activeOpacity={0.8}
            >
              <Image
                source={{
                  uri: ICONS.profile,
                }}
                style={styles.profileIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/* =================================================
              RECEIVED BADGE
          ================================================= */}

          <View style={styles.receivedRow}>
            <View style={styles.receivedBadge}>
              <View style={styles.receivedDot} />

              <Text style={styles.receivedText}>
                3 QUOTATIONS RECEIVED
              </Text>
            </View>
          </View>

          {/* =================================================
              PAGE HEADING
          ================================================= */}

          <View style={styles.titleRow}>
            <Text style={styles.pageTitle}>
              Compare Quotes
            </Text>

            <View style={styles.badakdevBadge}>
              <Text style={styles.badakdevText}>
                Bodakdev
              </Text>
            </View>
          </View>

          <View style={styles.projectRow}>
            <Image
              source={{
                uri: ICONS.building,
              }}
              style={styles.projectIcon}
              resizeMode="contain"
            />

            <Text style={styles.projectText}>
              3BHK Turnkey Interior Design • Ahmedabad
            </Text>
          </View>

          {/* =================================================
              FILTERS
          ================================================= */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterScroll}
          >
            {filters.map(filter => {
              const active =
                activeFilter === filter.name;

              return (
                <TouchableOpacity
                  key={filter.id}
                  style={[
                    styles.filterButton,
                    active &&
                      styles.filterButtonActive,
                  ]}
                  activeOpacity={0.8}
                  onPress={() =>
                    setActiveFilter(filter.name)
                  }
                >
                  <Image
                    source={{
                      uri: filter.icon,
                    }}
                    style={[
                      styles.filterIcon,
                      active &&
                        styles.filterIconActive,
                    ]}
                    resizeMode="contain"
                  />

                  <Text
                    style={[
                      styles.filterText,
                      active &&
                        styles.filterTextActive,
                    ]}
                  >
                    {filter.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* =================================================
              QUOTE CARDS
          ================================================= */}

          {quotes.map(quote => (
            <View
              key={quote.id}
              style={styles.quoteCard}
            >
              {/* =============================================
                  COMPANY HEADER
              ============================================= */}

              <View style={styles.quoteHeader}>
                <View style={styles.companyLeft}>
                  <View
                    style={[
                      styles.companyIconBox,
                      quote.type === 'xyz' &&
                        styles.companyIconGreen,

                      quote.type === 'home' &&
                        styles.companyIconOrange,
                    ]}
                  >
                    <Image
                      source={{
                        uri: getCompanyIcon(
                          quote.type,
                        ),
                      }}
                      style={styles.companyIcon}
                      resizeMode="contain"
                    />
                  </View>

                  <View style={styles.companyInfo}>
                    <Text style={styles.companyName}>
                      {quote.companyName}
                    </Text>

                    <View style={styles.ratingRow}>
                      <Image
                        source={{
                          uri: ICONS.star,
                        }}
                        style={styles.ratingIcon}
                        resizeMode="contain"
                      />

                      <Text style={styles.ratingText}>
                        {quote.rating}
                      </Text>

                      <Text style={styles.reviewText}>
                        ({quote.reviews})
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.priceArea}>
                  <Text style={styles.priceText}>
                    {quote.price}
                  </Text>

                  <Text
                    style={[
                      styles.priceLabel,
                      quote.type === 'xyz' &&
                        styles.premiumLabel,

                      quote.type === 'home' &&
                        styles.fastLabel,
                    ]}
                  >
                    {quote.priceLabel}
                  </Text>
                </View>
              </View>

              {/* =============================================
                  MATERIAL / LABOUR
              ============================================= */}

              <View style={styles.costRow}>
                <View style={styles.costItem}>
                  <View style={styles.blueDot} />

                  <Text style={styles.costLabel}>
                    Materials:
                  </Text>

                  <Text style={styles.costValue}>
                    {quote.materialPrice}
                  </Text>
                </View>

                <View style={styles.costItem}>
                  <View style={styles.greenDot} />

                  <Text style={styles.costLabel}>
                    Labour:
                  </Text>

                  <Text style={styles.costValue}>
                    {quote.labourPrice}
                  </Text>
                </View>
              </View>

              {/* =============================================
                  COST BAR
              ============================================= */}

              <View style={styles.progressBar}>
                <View style={styles.materialProgress} />

                <View style={styles.labourProgress} />
              </View>

              {/* =============================================
                  INFORMATION
              ============================================= */}

              <View style={styles.infoRow}>
                <View style={styles.infoItem}>
                  <Image
                    source={{
                      uri:
                        quote.id === 2
                          ? ICONS.material
                          : ICONS.calendar,
                    }}
                    style={styles.infoIcon}
                    resizeMode="contain"
                  />

                  <Text
                    style={styles.infoText}
                    numberOfLines={1}
                  >
                    {quote.id === 2
                      ? 'German hardware • Hitch/Hefty standard'
                      : quote.timeline}
                  </Text>
                </View>

                <View style={styles.infoItemRight}>
                  <Image
                    source={{
                      uri: ICONS.warranty,
                    }}
                    style={styles.infoIcon}
                    resizeMode="contain"
                  />

                  <Text
                    style={styles.infoText}
                    numberOfLines={1}
                  >
                    {quote.warranty}
                  </Text>
                </View>
              </View>

              {/* =============================================
                  BUTTON
              ============================================= */}

              <View style={styles.cardBottom}>
                <TouchableOpacity
                  style={styles.viewQuoteButton}
                  activeOpacity={0.85}
                  onPress={() =>
                    handleViewQuote(quote)
                  }
                >
                  <Text style={styles.viewQuoteText}>
                    View Detailed Quote
                  </Text>

                  <Image
                    source={{
                      uri: ICONS.arrowRight,
                    }}
                    style={styles.viewArrowIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.contactButton}
                  activeOpacity={0.8}
                  onPress={() =>
                    handleContact(quote)
                  }
                >
                  <Image
                    source={{
                      uri:
                        quote.contactType ===
                        'phone'
                          ? ICONS.phone
                          : ICONS.message,
                    }}
                    style={styles.contactIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {/* =================================================
              SIDE BY SIDE BREAKDOWN
          ================================================= */}

          <View style={styles.breakdownCard}>
            <View style={styles.breakdownHeader}>
              <View style={styles.breakdownTitleRow}>
                <Image
                  source={{
                    uri: ICONS.scope,
                  }}
                  style={styles.breakdownTitleIcon}
                  resizeMode="contain"
                />

                <Text style={styles.breakdownTitle}>
                  Side-by-Side Breakdown
                </Text>
              </View>

              <Text style={styles.turnkeyScope}>
                Turnkey Scope
              </Text>
            </View>

            {/* COLUMN HEADER */}

            <View style={styles.tableHeader}>
              <Text
                style={[
                  styles.tableHeading,
                  styles.specColumn,
                ]}
              >
                SPEC
              </Text>

              <Text style={styles.tableHeading}>
                ABC Atelier
              </Text>

              <Text style={styles.tableHeading}>
                XYZ Studio
              </Text>

              <Text style={styles.tableHeading}>
                HomeCraft
              </Text>
            </View>

            {/* PLY */}

            <View style={styles.tableRow}>
              <Text
                style={[
                  styles.tableLabel,
                  styles.specColumn,
                ]}
              >
                Ply Grade
              </Text>

              <Text style={styles.tableValue}>
                BWP/IS 710
              </Text>

              <Text style={styles.tableValue}>
                Club HDHMR
              </Text>

              <Text style={styles.tableValue}>
                BWP Birch
              </Text>
            </View>

            {/* PAYMENT */}

            <View style={styles.tableRow}>
              <Text
                style={[
                  styles.tableLabel,
                  styles.specColumn,
                ]}
              >
                Payment
              </Text>

              <Text style={styles.tableValue}>
                40-40-20
              </Text>

              <Text style={styles.tableValue}>
                Escrow 5%
              </Text>

              <Text style={styles.tableValue}>
                30-40-30
              </Text>
            </View>

            {/* SITE VISIT */}

            <View style={styles.tableRow}>
              <Text
                style={[
                  styles.tableLabel,
                  styles.specColumn,
                ]}
              >
                Site Visits
              </Text>

              <Text style={styles.tableValue}>
                Weekly(4)
              </Text>

              <Text style={styles.tableValue}>
                Bi-weekly
              </Text>

              <Text style={styles.greenTableValue}>
                Daily CCTV
              </Text>
            </View>

            {/* SITE AUDIT */}

            <View style={styles.tableRow}>
              <Text
                style={[
                  styles.tableLabel,
                  styles.specColumn,
                ]}
              >
                Site Audit
              </Text>

              <Text style={styles.greenTableValue}>
                Included
              </Text>

              <Text style={styles.greenTableValue}>
                Included
              </Text>

              <Text style={styles.greenTableValue}>
                Included
              </Text>
            </View>

            {/* FOOTER */}

            <View style={styles.breakdownFooter}>
              <Image
                source={{
                  uri: ICONS.info,
                }}
                style={styles.breakdownInfoIcon}
                resizeMode="contain"
              />

              <Text style={styles.breakdownFooterText}>
                All quotations covered by LocalHub ₹2,00,000
                Project Guarantee
              </Text>
            </View>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CompareQuote;

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
    paddingHorizontal: 13,
    paddingTop: 10,
    paddingBottom: 26,
  },

  /* =====================================================
     HEADER
  ===================================================== */

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: 35,
    height: 35,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  backIcon: {
    width: 18,
    height: 18,
    tintColor: '#CBD9E7',
  },

  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerShieldBox: {
    width: 22,
    height: 22,
    borderRadius: 7,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  headerShield: {
    width: 12,
    height: 12,
    tintColor: '#FFFFFF',
  },

  headerTitle: {
    color: '#EAF0F7',
    fontSize: 16,
    fontWeight: '800',
  },

  profileButton: {
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: '#AFC7FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileIcon: {
    width: 16,
    height: 16,
    tintColor: '#071A2C',
  },

  /* =====================================================
     RECEIVED
  ===================================================== */

  receivedRow: {
    marginBottom: 9,
  },

  receivedBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(16,185,129,0.12)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 13,
  },

  receivedDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#10B981',
    marginRight: 5,
  },

  receivedText: {
    color: '#38D8A3',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.3,
  },

  /* =====================================================
     PAGE TITLE
  ===================================================== */

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  pageTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '800',
    letterSpacing: -0.5,
  },

  badakdevBadge: {
    backgroundColor: '#1A3150',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },

  badakdevText: {
    color: '#9DBEFF',
    fontSize: 12,
    fontWeight: '700',
  },

  projectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 13,
  },

  projectIcon: {
    width: 12,
    height: 12,
    tintColor: '#839AAF',
    marginRight: 5,
  },

  projectText: {
    color: '#B5C4D2',
    fontSize: 13,
  },

  /* =====================================================
     FILTERS
  ===================================================== */

  filterScroll: {
    gap: 8,
    marginBottom: 16,
  },

  filterButton: {
    height: 31,
    borderRadius: 16,
    backgroundColor: '#102438',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  filterButtonActive: {
    backgroundColor: '#1A3550',
  },

  filterIcon: {
    width: 12,
    height: 12,
    tintColor: '#8097AA',
    marginRight: 5,
  },

  filterIconActive: {
    tintColor: '#6FA5FF',
  },

  filterText: {
    color: '#91A4B7',
    fontSize: 12,
    fontWeight: '600',
  },

  filterTextActive: {
    color: '#DAE7F4',
  },

  /* =====================================================
     QUOTE CARD
  ===================================================== */

  quoteCard: {
    backgroundColor: '#102438',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  quoteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },

  companyLeft: {
    flexDirection: 'row',
    flex: 1,
  },

  companyIconBox: {
    width: 40,
    height: 40,
    borderRadius: 9,
    backgroundColor: '#1D3F67',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  companyIconGreen: {
    backgroundColor: 'rgba(16,185,129,0.15)',
  },

  companyIconOrange: {
    backgroundColor: 'rgba(245,158,11,0.14)',
  },

  companyIcon: {
    width: 20,
    height: 20,
    tintColor: '#AFC7FF',
  },

  companyInfo: {
    flex: 1,
  },

  companyName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  ratingIcon: {
    width: 12,
    height: 12,
    marginRight: 2,
  },

  ratingText: {
    color: '#F6B94B',
    fontSize: 12,
    fontWeight: '700',
  },

  reviewText: {
    color: '#73899D',
    fontSize: 11,
    marginLeft: 2,
  },

  priceArea: {
    alignItems: 'flex-end',
  },

  priceText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },

  priceLabel: {
    color: '#10B981',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 2,
  },

  premiumLabel: {
    color: '#F59E0B',
  },

  fastLabel: {
    color: '#10B981',
  },

  /* =====================================================
     COST
  ===================================================== */

  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },

  costItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  blueDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#3B82F6',
    marginRight: 4,
  },

  greenDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#10B981',
    marginRight: 4,
  },

  costLabel: {
    color: '#8399AC',
    fontSize: 11,
  },

  costValue: {
    color: '#DBE6F0',
    fontSize: 11,
    fontWeight: '700',
    marginLeft: 2,
  },

  progressBar: {
    height: 4,
    flexDirection: 'row',
    borderRadius: 7,
    overflow: 'hidden',
    backgroundColor: '#1D344A',
    marginBottom: 12,
  },

  materialProgress: {
    width: '58%',
    height: '100%',
    backgroundColor: '#3B82F6',
  },

  labourProgress: {
    width: '32%',
    height: '100%',
    backgroundColor: '#10B981',
  },

  /* =====================================================
     INFO
  ===================================================== */

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  infoItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoItemRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  infoIcon: {
    width: 12,
    height: 12,
    tintColor: '#67A4FF',
    marginRight: 4,
  },

  infoText: {
    color: '#BDC9D5',
    fontSize: 11,
    maxWidth: '88%',
  },

  /* =====================================================
     CARD BUTTONS
  ===================================================== */

  cardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  viewQuoteButton: {
    flex: 1,
    height: 44,
    backgroundColor: '#AFC8FF',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOW.glow,
  },

  viewQuoteText: {
    color: '#071A2C',
    fontSize: 13,
    fontWeight: '700',
  },

  viewArrowIcon: {
    width: 12,
    height: 12,
    tintColor: '#071A2C',
    marginLeft: 7,
  },

  contactButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#122E42',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  contactIcon: {
    width: 16,
    height: 16,
    tintColor: '#10B981',
  },

  /* =====================================================
     BREAKDOWN
  ===================================================== */

  breakdownCard: {
    backgroundColor: '#102438',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  breakdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  breakdownTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  breakdownTitleIcon: {
    width: 13,
    height: 13,
    tintColor: '#6EA6FF',
    marginRight: 5,
  },

  breakdownTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  turnkeyScope: {
    color: '#A4B7C9',
    fontSize: 11,
  },

  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 7,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#1F374B',
  },

  tableHeading: {
    flex: 1,
    color: '#8398AC',
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
  },

  specColumn: {
    textAlign: 'left',
  },

  tableRow: {
    flexDirection: 'row',
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderColor: '#162E42',
  },

  tableLabel: {
    flex: 1,
    color: '#BCC9D5',
    fontSize: 11,
  },

  tableValue: {
    flex: 1,
    color: '#CFDAE4',
    fontSize: 11,
    textAlign: 'center',
  },

  greenTableValue: {
    flex: 1,
    color: '#10B981',
    fontSize: 11,
    textAlign: 'center',
  },

  breakdownFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 9,
  },

  breakdownInfoIcon: {
    width: 13,
    height: 13,
    tintColor: '#10B981',
    marginRight: 7,
  },

  breakdownFooterText: {
    flex: 1,
    color: '#A8B8C6',
    fontSize: 11,
    lineHeight: 14,
  },

  bottomSpace: {
    height: 20,
  },
});