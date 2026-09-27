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
   TEMPORARY ONLINE ICONS
========================================================= */

const ICONS = {
  back:
    'https://img.icons8.com/ios-filled/100/ffffff/left.png',

  share:
    'https://img.icons8.com/ios-filled/100/ffffff/share.png',

  profile:
    'https://img.icons8.com/ios-filled/100/ffffff/user.png',

  shield:
    'https://img.icons8.com/ios-filled/100/ffffff/shield.png',

  quotes:
    'https://img.icons8.com/ios-filled/100/ffffff/document.png',

  fire:
    'https://img.icons8.com/fluency/96/fire-element.png',

  stock:
    'https://img.icons8.com/ios-filled/100/ffffff/warehouse.png',

  lead:
    'https://img.icons8.com/ios-filled/100/ffffff/conference-call.png',

  settings:
    'https://img.icons8.com/ios-filled/100/ffffff/settings.png',

  clock:
    'https://img.icons8.com/ios-filled/100/ffffff/clock.png',

  arrowRight:
    'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  more:
    'https://img.icons8.com/ios-filled/100/ffffff/more.png',

  compare:
    'https://img.icons8.com/ios-filled/100/ffffff/compare.png',

  flash:
    'https://img.icons8.com/ios-filled/100/ffffff/lightning-bolt.png',

  direction:
    'https://img.icons8.com/ios-filled/100/ffffff/navigation.png',

  send:
    'https://img.icons8.com/ios-filled/100/ffffff/sent.png',

  pin:
    'https://img.icons8.com/ios-filled/100/ffffff/marker.png',

  rupee:
    'https://img.icons8.com/ios-filled/100/ffffff/rupee.png',

  check:
    'https://img.icons8.com/ios-filled/100/ffffff/checkmark.png',

  lock:
    'https://img.icons8.com/ios-filled/100/ffffff/lock.png',

  notification:
    'https://img.icons8.com/ios-filled/100/ffffff/appointment-reminders.png',
};

/* =========================================================
   TEMPORARY ONLINE IMAGES
========================================================= */

const IMAGES = {
  merchant:
    'https://picsum.photos/seed/localhub-paints-store/200/200',
};

/* =========================================================
   MAIN SCREEN
========================================================= */

const Notification = ({ navigation }) => {
  const [activeFilter, setActiveFilter] = useState('All (5)');
  const [allRead, setAllRead] = useState(false);

  const filters = [
    'All (5)',
    'Quotes & Leads',
    'Orders & Stock',
  ];

  const handleBack = () => {
    if (navigation?.goBack) {
      navigation.goBack();
    }
  };

  const markAllRead = () => {
    setAllRead(true);
  };

  const handleCompare = () => {
    console.log('Compare Quotes');

    navigation.navigate('CompareQuote');
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
                style={styles.iconButton}
                onPress={handleBack}
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri: ICONS.back }}
                  style={styles.topIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <View style={styles.brandIconBox}>
                <Image
                  source={{ uri: ICONS.shield }}
                  style={styles.brandIcon}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.headerTitle}>
                Brand logo.. Primary color: N...
              </Text>
            </View>

            <View style={styles.headerRight}>
              <TouchableOpacity
                style={styles.iconButton}
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri: ICONS.share }}
                  style={styles.topIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.profileButton}
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri: ICONS.profile }}
                  style={styles.profileIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* =================================================
              ACTIVITY HEADER
          ================================================= */}

          <View style={styles.activityHeader}>
            <View style={styles.activityTitleRow}>
              <View style={styles.activityDot} />

              <Text style={styles.activityTitle}>
                LIVE ACTIVITY FEED
              </Text>
            </View>

            <TouchableOpacity
              style={styles.markReadButton}
              activeOpacity={0.75}
              onPress={markAllRead}
            >
              <Image
                source={{ uri: ICONS.check }}
                style={styles.markReadIcon}
                resizeMode="contain"
              />

              <Text style={styles.markReadText}>
                {allRead ? 'All read' : 'Mark all as read'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* =================================================
              FILTER TABS
          ================================================= */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterRow}
          >
            {filters.map(filter => {
              const active = activeFilter === filter;

              return (
                <TouchableOpacity
                  key={filter}
                  style={[
                    styles.filterButton,
                    active && styles.filterButtonActive,
                  ]}
                  activeOpacity={0.8}
                  onPress={() => setActiveFilter(filter)}
                >
                  <Text
                    style={[
                      styles.filterText,
                      active && styles.filterTextActive,
                    ]}
                  >
                    {filter}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* =================================================
              QUOTES CARD
          ================================================= */}

          <View style={styles.notificationCard}>
            <View style={styles.cardHeaderRow}>
              <View style={styles.cardIconBoxBlue}>
                <Image
                  source={{ uri: ICONS.quotes }}
                  style={styles.cardIcon}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.cardContent}>
                <View style={styles.cardTopLine}>
                  <Text style={styles.cardTitle}>
                    3 New Quotes Received
                  </Text>

                  <View style={styles.timeRow}>
                    <Text style={styles.timeText}>
                      5m ago
                    </Text>

                    <View style={styles.unreadDot} />
                  </View>
                </View>

                <Text style={styles.cardDescription}>
                  ABC Interiors and 2 others submitted
                  detailed quotations for your 3BHK...
                </Text>

                <Text style={styles.cardMeta}>
                  Modular Work
                  <Text style={styles.cardMetaDivider}>
                    {'  '}•{'  '}
                  </Text>
                  Verified Vendors
                </Text>
              </View>
            </View>

            <View style={styles.cardActionRow}>
              <TouchableOpacity
                style={styles.primaryButton}
                activeOpacity={0.85}
                onPress={handleCompare}
              >
                <Text style={styles.primaryButtonText}>
                  Compare Quotes
                </Text>

                <Image
                  source={{ uri: ICONS.arrowRight }}
                  style={styles.primaryButtonIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.moreButton}
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri: ICONS.more }}
                  style={styles.moreIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* =================================================
              PRICE DROP CARD
          ================================================= */}

          <View style={styles.notificationCard}>
            <View style={styles.cardHeaderRow}>
              <View style={styles.cardIconBoxOrange}>
                <Image
                  source={{ uri: ICONS.fire }}
                  style={styles.cardIconNoTint}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.cardContent}>
                <View style={styles.cardTopLine}>
                  <View style={styles.priceAlertTitleRow}>
                    <Text style={styles.cardTitle}>
                      Price Drop Alert!
                    </Text>

                    <View style={styles.discountTag}>
                      <Text style={styles.discountTagText}>
                        7% OFF
                      </Text>
                    </View>
                  </View>

                  <Text style={styles.timeText}>
                    1h ago
                  </Text>
                </View>

                <Text style={styles.cardDescription}>
                  Asian Paints Apex 20L is now
                  <Text style={styles.highlightPrice}>
                    {' '}₹4,850
                  </Text>
                  {' '}at Patel Hardware near you.
                </Text>

                <View style={styles.merchantMiniCard}>
                  <Image
                    source={{ uri: IMAGES.merchant }}
                    style={styles.merchantImage}
                    resizeMode="cover"
                  />

                  <View style={styles.merchantContent}>
                    <Text style={styles.merchantName}>
                      Patel Hardware & Paints
                    </Text>

                    <Text style={styles.merchantMeta}>
                      0.8 km away • Closes 9:00 PM
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.cardActionRow}>
              <TouchableOpacity
                style={styles.darkActionButton}
                activeOpacity={0.85}
              >
                <Image
                  source={{ uri: ICONS.flash }}
                  style={styles.darkActionIcon}
                  resizeMode="contain"
                />

                <Text style={styles.darkActionText}>
                  View Deal
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.secondaryTextButton}
                activeOpacity={0.8}
              >
                <Text style={styles.secondaryText}>
                  Save for later
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* =================================================
              STOCK RESERVED CARD
          ================================================= */}

          <View style={styles.notificationCard}>
            <View style={styles.cardHeaderRow}>
              <View style={styles.cardIconBoxGreen}>
                <Image
                  source={{ uri: ICONS.stock }}
                  style={styles.cardIcon}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.cardContent}>
                <View style={styles.cardTopLine}>
                  <Text style={styles.cardTitle}>
                    Instant Stock Reserved
                  </Text>

                  <Text style={styles.timeText}>
                    3h ago
                  </Text>
                </View>

                <Text style={styles.cardDescription}>
                  Your 2-hour hold on Dr. Fixit Super Latex
                  (5L) is confirmed at Patel Hardware.
                </Text>

                <View style={styles.successStrip}>
                  <Image
                    source={{ uri: ICONS.clock }}
                    style={styles.successStripIcon}
                    resizeMode="contain"
                  />

                  <Text style={styles.successStripText}>
                    Hold active for next 42 mins
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.cardActionRow}>
              <TouchableOpacity
                style={styles.darkActionButton}
                activeOpacity={0.85}
              >
                <Image
                  source={{ uri: ICONS.direction }}
                  style={styles.greenActionIcon}
                  resizeMode="contain"
                />

                <Text style={styles.darkActionText}>
                  Directions
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.secondaryTextButton}
                activeOpacity={0.8}
              >
                <Text style={styles.secondaryText}>
                  Order Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* =================================================
              NEW LEAD CARD
          ================================================= */}

          <View style={styles.notificationCard}>
            <View style={styles.cardHeaderRow}>
              <View style={styles.cardIconBoxPurple}>
                <Image
                  source={{ uri: ICONS.lead }}
                  style={styles.cardIcon}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.cardContent}>
                <View style={styles.cardTopLine}>
                  <View style={styles.leadTitleRow}>
                    <Text style={styles.cardTitle}>
                      New Lead Nearby
                    </Text>

                    <View style={styles.proBadge}>
                      <Text style={styles.proBadgeText}>
                        PRO
                      </Text>
                    </View>
                  </View>

                  <Text style={styles.timeText}>
                    Yesterday
                  </Text>
                </View>

                <Text style={styles.cardDescription}>
                  A customer near SG Highway is searching
                  for modular kitchen carpentry.
                </Text>

                <View style={styles.leadMetaRow}>
                  <View style={styles.leadMetaItem}>
                    <Image
                      source={{ uri: ICONS.pin }}
                      style={styles.leadMetaIcon}
                      resizeMode="contain"
                    />

                    <Text style={styles.leadMetaText}>
                      1.4 km
                    </Text>
                  </View>

                  <View style={styles.leadMetaItem}>
                    <Image
                      source={{ uri: ICONS.rupee }}
                      style={styles.leadMetaIcon}
                      resizeMode="contain"
                    />

                    <Text style={styles.leadMetaText}>
                      SG Highway
                    </Text>
                  </View>
                </View>

                <View style={styles.budgetTag}>
                  <Text style={styles.budgetTagText}>
                    Est. ₹2,80,000 - ₹4L
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.cardActionRow}>
              <TouchableOpacity
                style={styles.sendProposalButton}
                activeOpacity={0.85}
              >
                <Image
                  source={{ uri: ICONS.send }}
                  style={styles.sendProposalIcon}
                  resizeMode="contain"
                />

                <Text style={styles.sendProposalText}>
                  Send Proposal
                </Text>
              </TouchableOpacity>

              <View style={styles.contractorCount}>
                <Text style={styles.contractorNumber}>
                  3
                </Text>

                <Text style={styles.contractorText}>
                  contractors{'\n'}viewing
                </Text>
              </View>
            </View>
          </View>

          {/* =================================================
              SETTINGS CARD
          ================================================= */}

          <TouchableOpacity
            style={styles.settingsCard}
            activeOpacity={0.85}
          >
            <View style={styles.settingsLeft}>
              <View style={styles.settingsIconBox}>
                <Image
                  source={{ uri: ICONS.settings }}
                  style={styles.settingsIcon}
                  resizeMode="contain"
                />
              </View>

              <View>
                <Text style={styles.settingsTitle}>
                  Custom Alert Settings
                </Text>

                <Text style={styles.settingsSubtitle}>
                  Manage notifications, preferences & filters
                </Text>
              </View>
            </View>

            <Image
              source={{ uri: ICONS.arrowRight }}
              style={styles.settingsArrow}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* =================================================
              FOOTER SECURITY
          ================================================= */}

          <View style={styles.footerSecurity}>
            <Image
              source={{ uri: ICONS.lock }}
              style={styles.footerLockIcon}
              resizeMode="contain"
            />

            <Text style={styles.footerSecurityText}>
              ENCRYPTED HYPERLOCAL BROADCAST
            </Text>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

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
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 26,
  },

  /* =====================================================
     HEADER
  ===================================================== */

  header: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  iconButton: {
    width: 33,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },

  topIcon: {
    width: 16,
    height: 16,
    tintColor: '#B7C8D8',
  },

  brandIconBox: {
    width: 23,
    height: 23,
    borderRadius: 7,
    backgroundColor: '#3677DB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  brandIcon: {
    width: 12,
    height: 12,
    tintColor: '#FFFFFF',
  },

  headerTitle: {
    color: '#CFDAE5',
    fontSize: 13,
    fontWeight: '700',
    flex: 1,
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
     ACTIVITY HEADER
  ===================================================== */

  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 9,
  },

  activityTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  activityDot: {
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: '#10B981',
    marginRight: 5,
  },

  activityTitle: {
    color: '#B8C8D5',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.3,
  },

  markReadButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  markReadIcon: {
    width: 10,
    height: 10,
    tintColor: '#6EA7FF',
    marginRight: 4,
  },

  markReadText: {
    color: '#7EA9FF',
    fontSize: 11,
    fontWeight: '700',
  },

  /* =====================================================
     FILTERS
  ===================================================== */

  filterRow: {
    gap: 7,
    paddingBottom: 10,
  },

  filterButton: {
    height: 31,
    borderRadius: 16,
    backgroundColor: '#102438',
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterButtonActive: {
    backgroundColor: '#3B82F6',
  },

  filterText: {
    color: '#93A7BA',
    fontSize: 12,
    fontWeight: '700',
  },

  filterTextActive: {
    color: '#FFFFFF',
  },

  /* =====================================================
     NOTIFICATION CARD
  ===================================================== */

  notificationCard: {
    backgroundColor: '#102438',
    borderRadius: 14,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  cardHeaderRow: {
    flexDirection: 'row',
  },

  cardContent: {
    flex: 1,
    marginLeft: 9,
  },

  cardIconBoxBlue: {
    width: 39,
    height: 39,
    borderRadius: 9,
    backgroundColor: '#18385A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardIconBoxOrange: {
    width: 39,
    height: 39,
    borderRadius: 9,
    backgroundColor: '#4A3410',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardIconBoxGreen: {
    width: 39,
    height: 39,
    borderRadius: 9,
    backgroundColor: '#0F4038',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardIconBoxPurple: {
    width: 39,
    height: 39,
    borderRadius: 9,
    backgroundColor: '#243961',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardIcon: {
    width: 18,
    height: 18,
    tintColor: '#8BB6FF',
  },

  cardIconNoTint: {
    width: 20,
    height: 20,
  },

  cardTopLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    flexShrink: 1,
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 7,
  },

  timeText: {
    color: '#72889B',
    fontSize: 11,
  },

  unreadDot: {
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: '#8CB6FF',
    marginLeft: 5,
  },

  cardDescription: {
    color: '#C1CEDA',
    fontSize: 12,
    lineHeight: 16,
    marginTop: 5,
  },

  cardMeta: {
    color: '#7790A5',
    fontSize: 11,
    marginTop: 5,
  },

  cardMetaDivider: {
    color: '#526B80',
  },

  /* =====================================================
     CARD ACTIONS
  ===================================================== */

  cardActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 48,
  },

  primaryButton: {
    height: 44,
    flex: 1,
    backgroundColor: '#AFC8FF',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOW.glow,
  },

  primaryButtonText: {
    color: '#071A2C',
    fontSize: 12,
    fontWeight: '800',
  },

  primaryButtonIcon: {
    width: 10,
    height: 10,
    tintColor: '#071A2C',
    marginLeft: 5,
  },

  moreButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#091C2E',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  moreIcon: {
    width: 16,
    height: 16,
    tintColor: '#7B90A4',
  },

  darkActionButton: {
    minWidth: 111,
    height: 35,
    borderRadius: 7,
    backgroundColor: '#17334B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  darkActionIcon: {
    width: 12,
    height: 12,
    tintColor: '#F59E0B',
    marginRight: 5,
  },

  greenActionIcon: {
    width: 12,
    height: 12,
    tintColor: '#10B981',
    marginRight: 5,
  },

  darkActionText: {
    color: '#E3EBF2',
    fontSize: 12,
    fontWeight: '700',
  },

  secondaryTextButton: {
    height: 35,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  secondaryText: {
    color: '#B1C0CD',
    fontSize: 11,
    fontWeight: '600',
  },

  /* =====================================================
     PRICE DROP
  ===================================================== */

  priceAlertTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  discountTag: {
    backgroundColor: 'rgba(245,158,11,0.16)',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginLeft: 7,
  },

  discountTagText: {
    color: '#F59E0B',
    fontSize: 10,
    fontWeight: '900',
  },

  highlightPrice: {
    color: '#FFFFFF',
    fontWeight: '900',
  },

  merchantMiniCard: {
    marginTop: 8,
    backgroundColor: '#091C2E',
    borderRadius: 12,
    padding: 7,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },

  merchantImage: {
    width: 40,
    height: 40,
    borderRadius: 7,
    marginRight: 8,
  },

  merchantContent: {
    flex: 1,
  },

  merchantName: {
    color: '#DCE5EE',
    fontSize: 12,
    fontWeight: '700',
  },

  merchantMeta: {
    color: '#73899C',
    fontSize: 11,
    marginTop: 2,
  },

  /* =====================================================
     STOCK RESERVED
  ===================================================== */

  successStrip: {
    marginTop: 8,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(16,185,129,0.12)',
    borderRadius: 7,
    paddingHorizontal: 7,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  successStripIcon: {
    width: 10,
    height: 10,
    tintColor: '#10B981',
    marginRight: 4,
  },

  successStripText: {
    color: '#10B981',
    fontSize: 11,
    fontWeight: '700',
  },

  /* =====================================================
     LEAD
  ===================================================== */

  leadTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  proBadge: {
    backgroundColor: '#273D67',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    marginLeft: 5,
  },

  proBadgeText: {
    color: '#AFC8FF',
    fontSize: 10,
    fontWeight: '900',
  },

  leadMetaRow: {
    flexDirection: 'row',
    gap: 13,
    marginTop: 7,
  },

  leadMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  leadMetaIcon: {
    width: 10,
    height: 10,
    tintColor: '#7FA8FF',
    marginRight: 4,
  },

  leadMetaText: {
    color: '#8599AC',
    fontSize: 11,
  },

  budgetTag: {
    alignSelf: 'flex-start',
    marginTop: 7,
    backgroundColor: 'rgba(245,158,11,0.13)',
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 4,
  },

  budgetTagText: {
    color: '#F59E0B',
    fontSize: 11,
    fontWeight: '800',
  },

  sendProposalButton: {
    height: 44,
    minWidth: 117,
    borderRadius: 14,
    backgroundColor: '#3B82F6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOW.glow,
  },

  sendProposalIcon: {
    width: 12,
    height: 12,
    tintColor: '#071A2C',
    marginRight: 5,
  },

  sendProposalText: {
    color: '#071A2C',
    fontSize: 12,
    fontWeight: '800',
  },

  contractorCount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },

  contractorNumber: {
    color: '#BBD0E1',
    fontSize: 14,
    fontWeight: '800',
    marginRight: 4,
  },

  contractorText: {
    color: '#71879A',
    fontSize: 10,
    lineHeight: 13,
  },

  /* =====================================================
     SETTINGS
  ===================================================== */

  settingsCard: {
    height: 64,
    borderRadius: 14,
    backgroundColor: '#102438',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  settingsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  settingsIconBox: {
    width: 35,
    height: 35,
    borderRadius: 8,
    backgroundColor: '#172F45',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  settingsIcon: {
    width: 17,
    height: 17,
    tintColor: '#A9C0D5',
  },

  settingsTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  settingsSubtitle: {
    color: '#788EA1',
    fontSize: 11,
    marginTop: 2,
  },

  settingsArrow: {
    width: 10,
    height: 10,
    tintColor: '#8196A9',
  },

  /* =====================================================
     FOOTER
  ===================================================== */

  footerSecurity: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },

  footerLockIcon: {
    width: 13,
    height: 13,
    tintColor: '#8DA2B5',
    marginBottom: 5,
  },

  footerSecurityText: {
    color: '#5F7689',
    fontSize: 10,
    letterSpacing: 0.4,
    fontWeight: '700',
  },

  bottomSpace: {
    height: 26,
  },
});