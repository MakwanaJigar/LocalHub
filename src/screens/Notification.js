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

    // Example:
    // navigation.navigate('CompareQuote');
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
    paddingHorizontal: 8,
    paddingTop: 6,
    paddingBottom: 20,
  },

  /* =====================================================
     HEADER
  ===================================================== */

  header: {
    minHeight: 34,
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
    gap: 4,
  },

  iconButton: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  topIcon: {
    width: 12,
    height: 12,
    tintColor: '#B7C8D8',
  },

  brandIconBox: {
    width: 18,
    height: 18,
    borderRadius: 5,
    backgroundColor: '#3677DB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },

  brandIcon: {
    width: 9,
    height: 9,
    tintColor: '#FFFFFF',
  },

  headerTitle: {
    color: '#CFDAE5',
    fontSize: 7,
    fontWeight: '700',
    flex: 1,
  },

  profileButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#AFC7FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileIcon: {
    width: 12,
    height: 12,
    tintColor: '#071A2C',
  },

  /* =====================================================
     ACTIVITY HEADER
  ===================================================== */

  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 7,
  },

  activityTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  activityDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#10B981',
    marginRight: 4,
  },

  activityTitle: {
    color: '#B8C8D5',
    fontSize: 6,
    fontWeight: '800',
    letterSpacing: 0.3,
  },

  markReadButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  markReadIcon: {
    width: 8,
    height: 8,
    tintColor: '#6EA7FF',
    marginRight: 3,
  },

  markReadText: {
    color: '#7EA9FF',
    fontSize: 5,
    fontWeight: '700',
  },

  /* =====================================================
     FILTERS
  ===================================================== */

  filterRow: {
    gap: 5,
    paddingBottom: 8,
  },

  filterButton: {
    height: 24,
    borderRadius: 12,
    backgroundColor: '#102438',
    paddingHorizontal: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterButtonActive: {
    backgroundColor: '#3B82F6',
  },

  filterText: {
    color: '#93A7BA',
    fontSize: 6,
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
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },

  cardHeaderRow: {
    flexDirection: 'row',
  },

  cardContent: {
    flex: 1,
    marginLeft: 7,
  },

  cardIconBoxBlue: {
    width: 30,
    height: 30,
    borderRadius: 7,
    backgroundColor: '#18385A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardIconBoxOrange: {
    width: 30,
    height: 30,
    borderRadius: 7,
    backgroundColor: '#4A3410',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardIconBoxGreen: {
    width: 30,
    height: 30,
    borderRadius: 7,
    backgroundColor: '#0F4038',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardIconBoxPurple: {
    width: 30,
    height: 30,
    borderRadius: 7,
    backgroundColor: '#243961',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardIcon: {
    width: 14,
    height: 14,
    tintColor: '#8BB6FF',
  },

  cardIconNoTint: {
    width: 15,
    height: 15,
  },

  cardTopLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
    flexShrink: 1,
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },

  timeText: {
    color: '#72889B',
    fontSize: 5,
  },

  unreadDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#8CB6FF',
    marginLeft: 4,
  },

  cardDescription: {
    color: '#C1CEDA',
    fontSize: 6,
    lineHeight: 9,
    marginTop: 4,
  },

  cardMeta: {
    color: '#7790A5',
    fontSize: 5,
    marginTop: 4,
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
    marginTop: 8,
    marginLeft: 37,
  },

  primaryButton: {
    height: 31,
    flex: 1,
    backgroundColor: '#AFC8FF',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  primaryButtonText: {
    color: '#071A2C',
    fontSize: 6,
    fontWeight: '800',
  },

  primaryButtonIcon: {
    width: 8,
    height: 8,
    tintColor: '#071A2C',
    marginLeft: 4,
  },

  moreButton: {
    width: 31,
    height: 31,
    borderRadius: 6,
    backgroundColor: '#091C2E',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },

  moreIcon: {
    width: 12,
    height: 12,
    tintColor: '#7B90A4',
  },

  darkActionButton: {
    minWidth: 85,
    height: 27,
    borderRadius: 5,
    backgroundColor: '#17334B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },

  darkActionIcon: {
    width: 9,
    height: 9,
    tintColor: '#F59E0B',
    marginRight: 4,
  },

  greenActionIcon: {
    width: 9,
    height: 9,
    tintColor: '#10B981',
    marginRight: 4,
  },

  darkActionText: {
    color: '#E3EBF2',
    fontSize: 6,
    fontWeight: '700',
  },

  secondaryTextButton: {
    height: 27,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },

  secondaryText: {
    color: '#B1C0CD',
    fontSize: 5,
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
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginLeft: 5,
  },

  discountTagText: {
    color: '#F59E0B',
    fontSize: 4,
    fontWeight: '900',
  },

  highlightPrice: {
    color: '#FFFFFF',
    fontWeight: '900',
  },

  merchantMiniCard: {
    marginTop: 6,
    backgroundColor: '#091C2E',
    borderRadius: 6,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  merchantImage: {
    width: 31,
    height: 31,
    borderRadius: 5,
    marginRight: 6,
  },

  merchantContent: {
    flex: 1,
  },

  merchantName: {
    color: '#DCE5EE',
    fontSize: 6,
    fontWeight: '700',
  },

  merchantMeta: {
    color: '#73899C',
    fontSize: 5,
    marginTop: 2,
  },

  /* =====================================================
     STOCK RESERVED
  ===================================================== */

  successStrip: {
    marginTop: 6,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(16,185,129,0.12)',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },

  successStripIcon: {
    width: 8,
    height: 8,
    tintColor: '#10B981',
    marginRight: 3,
  },

  successStripText: {
    color: '#10B981',
    fontSize: 5,
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
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 4,
  },

  proBadgeText: {
    color: '#AFC8FF',
    fontSize: 4,
    fontWeight: '900',
  },

  leadMetaRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 5,
  },

  leadMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  leadMetaIcon: {
    width: 8,
    height: 8,
    tintColor: '#7FA8FF',
    marginRight: 3,
  },

  leadMetaText: {
    color: '#8599AC',
    fontSize: 5,
  },

  budgetTag: {
    alignSelf: 'flex-start',
    marginTop: 5,
    backgroundColor: 'rgba(245,158,11,0.13)',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },

  budgetTagText: {
    color: '#F59E0B',
    fontSize: 5,
    fontWeight: '800',
  },

  sendProposalButton: {
    height: 29,
    minWidth: 90,
    borderRadius: 5,
    backgroundColor: '#3B82F6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sendProposalIcon: {
    width: 9,
    height: 9,
    tintColor: '#071A2C',
    marginRight: 4,
  },

  sendProposalText: {
    color: '#071A2C',
    fontSize: 6,
    fontWeight: '800',
  },

  contractorCount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },

  contractorNumber: {
    color: '#BBD0E1',
    fontSize: 8,
    fontWeight: '800',
    marginRight: 3,
  },

  contractorText: {
    color: '#71879A',
    fontSize: 4,
    lineHeight: 6,
  },

  /* =====================================================
     SETTINGS
  ===================================================== */

  settingsCard: {
    height: 49,
    borderRadius: 8,
    backgroundColor: '#102438',
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
  },

  settingsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  settingsIconBox: {
    width: 27,
    height: 27,
    borderRadius: 6,
    backgroundColor: '#172F45',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },

  settingsIcon: {
    width: 13,
    height: 13,
    tintColor: '#A9C0D5',
  },

  settingsTitle: {
    color: '#FFFFFF',
    fontSize: 7,
    fontWeight: '700',
  },

  settingsSubtitle: {
    color: '#788EA1',
    fontSize: 5,
    marginTop: 2,
  },

  settingsArrow: {
    width: 8,
    height: 8,
    tintColor: '#8196A9',
  },

  /* =====================================================
     FOOTER
  ===================================================== */

  footerSecurity: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },

  footerLockIcon: {
    width: 10,
    height: 10,
    tintColor: '#8DA2B5',
    marginBottom: 4,
  },

  footerSecurityText: {
    color: '#5F7689',
    fontSize: 4,
    letterSpacing: 0.4,
    fontWeight: '700',
  },

  bottomSpace: {
    height: 20,
  },
});