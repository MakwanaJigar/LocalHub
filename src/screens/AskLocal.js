import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SHADOW } from '../theme';

/* =========================================================
   DUMMY ONLINE ICONS

   Later you can replace these URLs with local PNG files.
========================================================= */

const ICONS = {
  logo:
    'https://img.icons8.com/fluency/96/marker-l.png',

  profile:
    'https://img.icons8.com/ios-filled/100/ffffff/user.png',

  bell:
    'https://img.icons8.com/ios-filled/100/ffffff/appointment-reminders.png',

  ask:
    'https://img.icons8.com/ios-filled/100/ffffff/artificial-intelligence.png',

  shield:
    'https://img.icons8.com/ios-filled/100/ffffff/shield.png',

  reset:
    'https://img.icons8.com/ios-filled/100/ffffff/restart.png',

  camera:
    'https://img.icons8.com/ios-filled/100/ffffff/camera.png',

  image:
    'https://img.icons8.com/ios-filled/100/ffffff/image.png',

  package:
    'https://img.icons8.com/ios-filled/100/ffffff/package.png',

  custom:
    'https://img.icons8.com/ios-filled/100/ffffff/settings.png',

  scope:
    'https://img.icons8.com/ios-filled/100/ffffff/task.png',

  area:
    'https://img.icons8.com/ios-filled/100/ffffff/floor-plan.png',

  budget:
    'https://img.icons8.com/ios-filled/100/ffffff/rupee.png',

  location:
    'https://img.icons8.com/ios-filled/100/ffffff/marker.png',

  clock:
    'https://img.icons8.com/ios-filled/100/ffffff/clock.png',

  check:
    'https://img.icons8.com/ios-filled/100/ffffff/checkmark.png',

  verified:
    'https://img.icons8.com/ios-filled/100/ffffff/verified-badge.png',

  sparkle:
    'https://img.icons8.com/fluency/96/sparkling.png',

  filter:
    'https://img.icons8.com/ios-filled/100/ffffff/filter.png',

  sort:
    'https://img.icons8.com/ios-filled/100/ffffff/sorting-arrows.png',

  star:
    'https://img.icons8.com/fluency/96/star.png',

  home:
    'https://img.icons8.com/ios-filled/100/ffffff/home.png',

  explore:
    'https://img.icons8.com/ios-filled/100/ffffff/compass.png',

  plus:
    'https://img.icons8.com/ios-filled/100/ffffff/plus-math.png',

  chat:
    'https://img.icons8.com/ios-filled/100/ffffff/chat-message.png',

  compare:
    'https://img.icons8.com/ios-filled/100/ffffff/compare.png',

  send:
    'https://img.icons8.com/ios-filled/100/ffffff/sent.png',

  arrowRight:
    'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  money:
    'https://img.icons8.com/ios-filled/100/ffffff/money-bag.png',

  people:
    'https://img.icons8.com/ios-filled/100/ffffff/conference-call.png',

  speed:
    'https://img.icons8.com/ios-filled/100/ffffff/speed.png',

  material:
    'https://img.icons8.com/ios-filled/100/ffffff/box.png',
};

/* =========================================================
   DUMMY STORE IMAGES
========================================================= */

const IMAGES = {
  studio1:
    'https://picsum.photos/seed/localhub-interior-1/300/220',

  studio2:
    'https://picsum.photos/seed/localhub-interior-2/300/220',

  studio3:
    'https://picsum.photos/seed/localhub-interior-3/300/220',
};

/* =========================================================
   MAIN SCREEN
========================================================= */

const AskLocal = ({ navigation }) => {
  const [requirement, setRequirement] = useState(
    'I need a complete 3BHK interior designer for kitchen, Ahmedabad with turnkey execution.',
  );

  const [activeMode, setActiveMode] = useState('Turnkey');

  const studios = [
    {
      id: 1,
      name: 'VastKalaa Living Studio',
      image: IMAGES.studio1,
      rating: '4.9',
      reviews: '82 reviews',
      distance: '2.3 km',
      price: '₹8.5L',
      tag: 'Best Match',
      delivery: 'Fast 30 Days',
      location: 'SG Highway',
    },
    {
      id: 2,
      name: 'Apex Modular & Interior',
      image: IMAGES.studio2,
      rating: '4.8',
      reviews: '64 reviews',
      distance: '3.1 km',
      price: '₹9.2L',
      tag: 'Active Now',
      delivery: 'Popular',
      location: 'Bodakdev',
    },
    {
      id: 3,
      name: 'UrbanEdge Craftworks',
      image: IMAGES.studio3,
      rating: '4.7',
      reviews: '71 reviews',
      distance: '4.8 km',
      price: '₹8.7L',
      tag: 'Lowest Bid',
      delivery: 'Instant Call',
      location: 'Prahlad Nagar',
    },
  ];

  /* =====================================================
     ACTIONS
  ===================================================== */

  const handleReset = () => {
    setRequirement('');
  };

  const handleParse = () => {
    console.log('Parse requirement:', requirement);
  };

  const handleCompareQuotes = () => {
    console.log('Compare Received Quotes');

    navigation.navigate('CompareQuote');
  };

  const handleSendRequirement = () => {
    console.log('Send requirement to verified studios');

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
          keyboardShouldPersistTaps="handled"
        >
          {/* =================================================
              HEADER
          ================================================= */}

          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <View style={styles.logoBox}>
                <Image
                  source={{
                    uri: ICONS.logo,
                  }}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>

              <View>
                <Text style={styles.brandText}>
                  LOCALHUB
                </Text>

                <Text style={styles.exploreText}>
                  Explore
                </Text>
              </View>
            </View>

            <View style={styles.headerActions}>
              <TouchableOpacity
                style={styles.headerIconButton}
                activeOpacity={0.8}
              >
                <Image
                  source={{
                    uri: ICONS.bell,
                  }}
                  style={styles.headerIcon}
                  resizeMode="contain"
                />

                <View style={styles.notificationDot} />
              </TouchableOpacity>

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
          </View>

          {/* =================================================
              ASK LOCAL HERO
          ================================================= */}

          <View style={styles.heroCard}>
            <View style={styles.heroTopRow}>
              <View style={styles.heroLeft}>
                <View style={styles.askIconBox}>
                  <Image
                    source={{
                      uri: ICONS.ask,
                    }}
                    style={styles.askIcon}
                    resizeMode="contain"
                  />
                </View>

                <View>
                  <Text style={styles.heroTitle}>
                    Ask LocalHub
                  </Text>

                  <Text style={styles.aiText}>
                    AI
                  </Text>
                </View>
              </View>

              <View style={styles.smartBadge}>
                <Text style={styles.smartBadgeText}>
                  SMART
                </Text>

                <Text style={styles.smartBadgeText}>
                  MATCH
                </Text>
              </View>
            </View>

            <Text style={styles.heroSubtitle}>
              Tell us what you need — LocalHub will find a match
              with the best local businesses.
            </Text>
          </View>

          {/* =================================================
              REQUIREMENT BOX
          ================================================= */}

          <View style={styles.requirementCard}>
            <View style={styles.requirementHeader}>
              <View style={styles.requirementTitleRow}>
                <Image
                  source={{
                    uri: ICONS.ask,
                  }}
                  style={styles.requirementTitleIcon}
                  resizeMode="contain"
                />

                <Text style={styles.requirementTitle}>
                  Describe your requirement...
                </Text>
              </View>

              <TouchableOpacity
                style={styles.resetButton}
                activeOpacity={0.7}
                onPress={handleReset}
              >
                <Image
                  source={{
                    uri: ICONS.reset,
                  }}
                  style={styles.resetIcon}
                  resizeMode="contain"
                />

                <Text style={styles.resetText}>
                  Reset
                </Text>
              </TouchableOpacity>
            </View>

            <TextInput
              value={requirement}
              onChangeText={setRequirement}
              style={styles.requirementInput}
              multiline
              placeholder="Describe what you need..."
              placeholderTextColor="#71869B"
            />

            <View style={styles.requirementActions}>
              <View style={styles.attachmentActions}>
                <TouchableOpacity
                  style={styles.smallActionButton}
                  activeOpacity={0.8}
                >
                  <Image
                    source={{
                      uri: ICONS.camera,
                    }}
                    style={styles.smallActionIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.smallActionButton}
                  activeOpacity={0.8}
                >
                  <Image
                    source={{
                      uri: ICONS.image,
                    }}
                    style={styles.smallActionIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.parseButton}
                activeOpacity={0.85}
                onPress={handleParse}
              >
                <Text style={styles.parseButtonText}>
                  Parse & Match
                </Text>

                <Image
                  source={{
                    uri: ICONS.arrowRight,
                  }}
                  style={styles.parseArrow}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* =================================================
              TRY ASKING ABOUT
          ================================================= */}

          <View style={styles.suggestionHeader}>
            <Text style={styles.suggestionTitle}>
              TRY ASKING ABOUT
            </Text>

            <Text style={styles.useSuggestionText}>
              Use suggestions
            </Text>
          </View>

          <View style={styles.suggestionRow}>
            <TouchableOpacity
              style={[
                styles.suggestionButton,
                activeMode === 'Turnkey' &&
                  styles.suggestionButtonActive,
              ]}
              onPress={() =>
                setActiveMode('Turnkey')
              }
            >
              <Image
                source={{
                  uri: ICONS.package,
                }}
                style={styles.suggestionIcon}
                resizeMode="contain"
              />

              <Text style={styles.suggestionText}>
                Turnkey package
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.suggestionButton,
                activeMode === 'Custom' &&
                  styles.suggestionButtonActive,
              ]}
              onPress={() =>
                setActiveMode('Custom')
              }
            >
              <Image
                source={{
                  uri: ICONS.custom,
                }}
                style={styles.suggestionIcon}
                resizeMode="contain"
              />

              <Text style={styles.suggestionText}>
                Custom modern setup
              </Text>
            </TouchableOpacity>
          </View>

          {/* =================================================
              AI INTERPRETED SCOPE
          ================================================= */}

          <View style={styles.scopeCard}>
            <View style={styles.scopeHeader}>
              <View>
                <Text style={styles.scopeTitle}>
                  AI Interpreted
                </Text>

                <Text style={styles.scopeTitle}>
                  Scope
                </Text>
              </View>

              <View style={styles.scopeBadge}>
                <Text style={styles.scopeBadgeText}>
                  97% Match
                </Text>

                <Text style={styles.scopeBadgeSubtext}>
                  Confidence
                </Text>
              </View>
            </View>

            <View style={styles.scopeGrid}>
              <View style={styles.scopeItem}>
                <Image
                  source={{
                    uri: ICONS.scope,
                  }}
                  style={styles.scopeItemIcon}
                  resizeMode="contain"
                />

                <Text style={styles.scopeItemLabel}>
                  Category Detected
                </Text>

                <Text style={styles.scopeItemValue}>
                  Interior Design
                </Text>

                <Text style={styles.scopeItemGreen}>
                  3BHK Turnkey
                </Text>
              </View>

              <View style={styles.scopeItem}>
                <Image
                  source={{
                    uri: ICONS.budget,
                  }}
                  style={styles.scopeItemIcon}
                  resizeMode="contain"
                />

                <Text style={styles.scopeItemLabel}>
                  Target Budget
                </Text>

                <Text style={styles.scopeItemValue}>
                  ₹8L – ₹10L
                </Text>

                <Text style={styles.scopeItemSubvalue}>
                  Includes materials & labor
                </Text>
              </View>

              <View style={styles.scopeItem}>
                <Image
                  source={{
                    uri: ICONS.location,
                  }}
                  style={styles.scopeItemIcon}
                  resizeMode="contain"
                />

                <Text style={styles.scopeItemLabel}>
                  Target Locality
                </Text>

                <Text style={styles.scopeItemValue}>
                  Ahmedabad
                </Text>

                <Text style={styles.scopeItemSubvalue}>
                  SG Highway, Bodakdev
                </Text>
              </View>

              <View style={styles.scopeItem}>
                <Image
                  source={{
                    uri: ICONS.clock,
                  }}
                  style={styles.scopeItemIcon}
                  resizeMode="contain"
                />

                <Text style={styles.scopeItemLabel}>
                  Turnaround Speed
                </Text>

                <Text style={styles.scopeItemValue}>
                  Within 45 Days
                </Text>

                <Text style={styles.scopeItemSubvalue}>
                  Standard execution
                </Text>
              </View>
            </View>

            <View style={styles.scopeFooter}>
              <Image
                source={{
                  uri: ICONS.verified,
                }}
                style={styles.scopeFooterIcon}
                resizeMode="contain"
              />

              <Text style={styles.scopeFooterText}>
                3D floorplan analyzed • Material details •
                Modify specs
              </Text>
            </View>
          </View>

          {/* =================================================
              VERIFIED CONTRACTORS
          ================================================= */}

          <View style={styles.contractorHeading}>
            <View style={styles.contractorTitleRow}>
              <Image
                source={{
                  uri: ICONS.sparkle,
                }}
                style={styles.sparkleIcon}
                resizeMode="contain"
              />

              <View>
                <Text style={styles.contractorTitle}>
                  Found 8 verified contractors ready
                </Text>

                <Text style={styles.contractorTitle}>
                  to bid
                </Text>
              </View>
            </View>

            <Text style={styles.availableNow}>
              Available
            </Text>
          </View>

          {/* =================================================
              CONTRACTOR FILTERS
          ================================================= */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterRow}
          >
            <TouchableOpacity
              style={styles.filterButton}
            >
              <Image
                source={{
                  uri: ICONS.filter,
                }}
                style={styles.filterIcon}
                resizeMode="contain"
              />

              <Text style={styles.filterText}>
                Lowest Price
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.filterButton}
            >
              <Image
                source={{
                  uri: ICONS.star,
                }}
                style={styles.filterIcon}
                resizeMode="contain"
              />

              <Text style={styles.filterText}>
                Top Rated 4.8+
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.filterButton}
            >
              <Image
                source={{
                  uri: ICONS.speed,
                }}
                style={styles.filterIcon}
                resizeMode="contain"
              />

              <Text style={styles.filterText}>
                Quickest Time
              </Text>
            </TouchableOpacity>
          </ScrollView>

          {/* =================================================
              CONTRACTOR CARDS
          ================================================= */}

          {studios.map(studio => (
            <View
              style={styles.studioCard}
              key={studio.id}
            >
              <Image
                source={{
                  uri: studio.image,
                }}
                style={styles.studioImage}
                resizeMode="cover"
              />

              <View style={styles.studioContent}>
                <View style={styles.studioTopRow}>
                  <Text
                    style={styles.studioName}
                    numberOfLines={1}
                  >
                    {studio.name}
                  </Text>

                  <View style={styles.matchBadge}>
                    <Text style={styles.matchBadgeText}>
                      {studio.tag}
                    </Text>
                  </View>
                </View>

                <View style={styles.studioRatingRow}>
                  <Image
                    source={{
                      uri: ICONS.star,
                    }}
                    style={styles.ratingStar}
                    resizeMode="contain"
                  />

                  <Text style={styles.ratingText}>
                    {studio.rating}
                  </Text>

                  <Text style={styles.reviewText}>
                    ({studio.reviews})
                  </Text>
                </View>

                <View style={styles.studioMetaRow}>
                  <View style={styles.metaItem}>
                    <Image
                      source={{
                        uri: ICONS.location,
                      }}
                      style={styles.metaIcon}
                      resizeMode="contain"
                    />

                    <Text style={styles.metaText}>
                      {studio.distance}
                    </Text>
                  </View>

                  <View style={styles.metaDot} />

                  <Text style={styles.metaText}>
                    {studio.location}
                  </Text>
                </View>

                <View style={styles.studioBottom}>
                  <Text style={styles.priceText}>
                    {studio.price}
                  </Text>

                  <View style={styles.deliveryBadge}>
                    <Text style={styles.deliveryText}>
                      {studio.delivery}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}

          {/* =================================================
              PROJECT INFO
          ================================================= */}

          <View style={styles.projectInfoCard}>
            <View style={styles.projectInfoItem}>
              <Image
                source={{
                  uri: ICONS.money,
                }}
                style={styles.projectInfoIcon}
                resizeMode="contain"
              />

              <View>
                <Text style={styles.projectInfoLabel}>
                  Escrow Payment
                </Text>

                <Text style={styles.projectInfoValue}>
                  Locked
                </Text>
              </View>
            </View>

            <View style={styles.projectInfoItem}>
              <Image
                source={{
                  uri: ICONS.people,
                }}
                style={styles.projectInfoIcon}
                resizeMode="contain"
              />

              <View>
                <Text style={styles.projectInfoLabel}>
                  Zero
                </Text>

                <Text style={styles.projectInfoValue}>
                  Commission
                </Text>
              </View>
            </View>

            <View style={styles.projectInfoItem}>
              <Image
                source={{
                  uri: ICONS.shield,
                }}
                style={styles.projectInfoIcon}
                resizeMode="contain"
              />

              <View>
                <Text style={styles.projectInfoLabel}>
                  100% AI
                </Text>

                <Text style={styles.projectInfoValue}>
                  Match
                </Text>
              </View>
            </View>
          </View>

          {/* =================================================
              COMPARE QUOTES
          ================================================= */}

          <TouchableOpacity
            style={styles.compareButton}
            activeOpacity={0.85}
            onPress={handleCompareQuotes}
          >
            <Image
              source={{
                uri: ICONS.compare,
              }}
              style={styles.compareIcon}
              resizeMode="contain"
            />

            <Text style={styles.compareText}>
              Compare Received Quotes (3 Ready)
            </Text>
          </TouchableOpacity>

          {/* =================================================
              SEND REQUIREMENT
          ================================================= */}

          <TouchableOpacity
            style={styles.sendRequirementButton}
            activeOpacity={0.85}
            onPress={handleSendRequirement}
          >
            <Image
              source={{
                uri: ICONS.send,
              }}
              style={styles.sendRequirementIcon}
              resizeMode="contain"
            />

            <Text style={styles.sendRequirementText}>
              Send Requirement to 5 Verified Studios
            </Text>
          </TouchableOpacity>

          <View style={styles.bottomSpacer} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AskLocal;

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
  },

  /* =========================
     HEADER
  ========================= */

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 9,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoBox: {
    width: 31,
    height: 31,
    borderRadius: 8,
    backgroundColor: '#102438',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  logo: {
    width: 22,
    height: 22,
  },

  brandText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },

  exploreText: {
    color: '#8197AA',
    fontSize: 11,
  },

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  headerIconButton: {
    width: 31,
    height: 31,
    borderRadius: 8,
    backgroundColor: '#102438',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerIcon: {
    width: 16,
    height: 16,
    tintColor: '#D5E0EA',
  },

  notificationDot: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#10B981',
  },

  profileButton: {
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: '#AFC8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileIcon: {
    width: 16,
    height: 16,
    tintColor: '#071A2C',
  },

  /* =========================
     HERO
  ========================= */

  heroCard: {
    backgroundColor: '#0D4B53',
    borderRadius: 16,
    padding: 12,
    marginBottom: 9,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  heroTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  heroLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  askIconBox: {
    width: 38,
    height: 38,
    borderRadius: 9,
    backgroundColor: '#60D2DD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  askIcon: {
    width: 21,
    height: 21,
    tintColor: '#07313B',
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },

  aiText: {
    color: '#D7F6F6',
    fontSize: 13,
    fontWeight: '700',
  },

  smartBadge: {
    backgroundColor: '#10B981',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 5,
    alignItems: 'center',
  },

  smartBadgeText: {
    color: '#052B23',
    fontSize: 11,
    fontWeight: '900',
  },

  heroSubtitle: {
    color: '#C8E9EA',
    fontSize: 12,
    lineHeight: 16,
    marginTop: 9,
    paddingLeft: 46,
  },

  /* =========================
     REQUIREMENT
  ========================= */

  requirementCard: {
    backgroundColor: '#102438',
    borderRadius: 14,
    padding: 10,
    marginBottom: 9,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  requirementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  requirementTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  requirementTitleIcon: {
    width: 12,
    height: 12,
    tintColor: '#77ABFF',
    marginRight: 5,
  },

  requirementTitle: {
    color: '#A8BCD0',
    fontSize: 12,
  },

  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  resetIcon: {
    width: 10,
    height: 10,
    tintColor: '#8499AC',
    marginRight: 4,
  },

  resetText: {
    color: '#8499AC',
    fontSize: 11,
  },

  requirementInput: {
    minHeight: 68,
    color: '#FFFFFF',
    fontSize: 13,
    lineHeight: 17,
    textAlignVertical: 'top',
    paddingVertical: 9,
  },

  requirementActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  attachmentActions: {
    flexDirection: 'row',
    gap: 7,
  },

  smallActionButton: {
    width: 31,
    height: 29,
    borderRadius: 7,
    backgroundColor: '#152F45',
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallActionIcon: {
    width: 13,
    height: 13,
    tintColor: '#AAC0D3',
  },

  parseButton: {
    height: 33,
    backgroundColor: '#3B82F6',
    borderRadius: 7,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },

  parseButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  parseArrow: {
    width: 10,
    height: 10,
    tintColor: '#FFFFFF',
    marginLeft: 5,
  },

  /* =========================
     SUGGESTIONS
  ========================= */

  suggestionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },

  suggestionTitle: {
    color: '#8096AA',
    fontSize: 11,
    fontWeight: '700',
  },

  useSuggestionText: {
    color: '#10B981',
    fontSize: 11,
  },

  suggestionRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 9,
  },

  suggestionButton: {
    flex: 1,
    height: 35,
    backgroundColor: '#102438',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  suggestionButtonActive: {
    backgroundColor: '#18334B',
  },

  suggestionIcon: {
    width: 12,
    height: 12,
    tintColor: '#75A9FF',
    marginRight: 5,
  },

  suggestionText: {
    color: '#D6E0E9',
    fontSize: 11,
    fontWeight: '600',
  },

  /* =========================
     SCOPE
  ========================= */

  scopeCard: {
    backgroundColor: '#102438',
    borderRadius: 14,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  scopeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9,
  },

  scopeTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    lineHeight: 20,
  },

  scopeBadge: {
    backgroundColor: '#233A4C',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  scopeBadgeText: {
    color: '#AFC7FF',
    fontSize: 11,
    fontWeight: '700',
  },

  scopeBadgeSubtext: {
    color: '#7890A4',
    fontSize: 10,
  },

  scopeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  scopeItem: {
    width: '48.5%',
    backgroundColor: '#0B1E30',
    borderRadius: 8,
    padding: 9,
    marginBottom: 8,
  },

  scopeItemIcon: {
    width: 13,
    height: 13,
    tintColor: '#6EA7FF',
    marginBottom: 5,
  },

  scopeItemLabel: {
    color: '#778DA2',
    fontSize: 11,
  },

  scopeItemValue: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 2,
  },

  scopeItemGreen: {
    color: '#10B981',
    fontSize: 11,
    marginTop: 2,
  },

  scopeItemSubvalue: {
    color: '#8296A9',
    fontSize: 11,
    marginTop: 2,
  },

  scopeFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
  },

  scopeFooterIcon: {
    width: 12,
    height: 12,
    tintColor: '#10B981',
    marginRight: 5,
  },

  scopeFooterText: {
    color: '#93A7B9',
    fontSize: 11,
  },

  /* =========================
     CONTRACTORS
  ========================= */

  contractorHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  contractorTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  sparkleIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },

  contractorTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    lineHeight: 17,
  },

  availableNow: {
    color: '#10B981',
    fontSize: 11,
    fontWeight: '700',
  },

  filterRow: {
    gap: 7,
    paddingBottom: 9,
  },

  filterButton: {
    height: 29,
    borderRadius: 14,
    backgroundColor: '#102438',
    paddingHorizontal: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },

  filterIcon: {
    width: 10,
    height: 10,
    tintColor: '#8DA1B5',
    marginRight: 4,
  },

  filterText: {
    color: '#B7C5D2',
    fontSize: 11,
  },

  /* =========================
     STUDIO CARDS
  ========================= */

  studioCard: {
    backgroundColor: '#102438',
    borderRadius: 14,
    padding: 8,
    flexDirection: 'row',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  studioImage: {
    width: 85,
    height: 72,
    borderRadius: 7,
    backgroundColor: '#1A3247',
  },

  studioContent: {
    flex: 1,
    paddingLeft: 8,
  },

  studioTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  studioName: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    flex: 1,
  },

  matchBadge: {
    backgroundColor: 'rgba(16,185,129,0.13)',
    borderRadius: 7,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },

  matchBadgeText: {
    color: '#10B981',
    fontSize: 10,
    fontWeight: '700',
  },

  studioRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },

  ratingStar: {
    width: 10,
    height: 10,
    marginRight: 2,
  },

  ratingText: {
    color: '#F4B94A',
    fontSize: 11,
    fontWeight: '700',
  },

  reviewText: {
    color: '#768B9F',
    fontSize: 10,
    marginLeft: 2,
  },

  studioMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  metaIcon: {
    width: 9,
    height: 9,
    tintColor: '#10B981',
    marginRight: 2,
  },

  metaText: {
    color: '#869AAC',
    fontSize: 10,
  },

  metaDot: {
    width: 2,
    height: 2,
    borderRadius: 2,
    backgroundColor: '#60758A',
    marginHorizontal: 5,
  },

  studioBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  priceText: {
    color: '#10B981',
    fontSize: 13,
    fontWeight: '800',
  },

  deliveryBadge: {
    backgroundColor: '#1B3850',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },

  deliveryText: {
    color: '#8FB2DA',
    fontSize: 10,
    fontWeight: '600',
  },

  /* =========================
     PROJECT INFO
  ========================= */

  projectInfoCard: {
    backgroundColor: '#0B1E30',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 9,
    paddingHorizontal: 10,
    marginBottom: 9,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  projectInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  projectInfoIcon: {
    width: 13,
    height: 13,
    tintColor: '#10B981',
    marginRight: 4,
  },

  projectInfoLabel: {
    color: '#8499AC',
    fontSize: 10,
  },

  projectInfoValue: {
    color: '#DCE5ED',
    fontSize: 11,
    fontWeight: '700',
  },

  /* =========================
     CTA BUTTONS
  ========================= */

  compareButton: {
    height: 42,
    backgroundColor: '#4C8EF7',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  compareIcon: {
    width: 14,
    height: 14,
    tintColor: '#071A2C',
    marginRight: 7,
  },

  compareText: {
    color: '#071A2C',
    fontSize: 12,
    fontWeight: '700',
  },

  sendRequirementButton: {
    height: 44,
    backgroundColor: '#102C3C',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOW.glow,
  },

  sendRequirementIcon: {
    width: 13,
    height: 13,
    tintColor: '#10B981',
    marginRight: 7,
  },

  sendRequirementText: {
    color: '#CDE0EC',
    fontSize: 12,
    fontWeight: '700',
  },

  bottomSpacer: {
    height: 26,
  },

  /* =========================
     BOTTOM NAVIGATION
  ========================= */

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: '#081A2B',
    borderTopWidth: 1,
    borderTopColor: '#132B42',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  navItem: {
    width: 62,
    alignItems: 'center',
  },

  navIcon: {
    width: 18,
    height: 18,
    tintColor: '#6D8296',
    marginBottom: 4,
  },

  activeNavIcon: {
    tintColor: '#3B82F6',
  },

  navText: {
    color: '#71869A',
    fontSize: 11,
  },

  activeNavText: {
    color: '#4E91FF',
  },

  centerNavButton: {
    width: 55,
    height: 55,
    borderRadius: 27,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -26,
  },

  centerNavIcon: {
    width: 22,
    height: 22,
    tintColor: '#FFFFFF',
  },
});