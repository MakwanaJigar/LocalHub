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
   TEMPORARY ONLINE PNG ICONS

   Later replace these URLs with your local PNG assets.
========================================================= */

const ICONS = {
  back:
    'https://img.icons8.com/ios-filled/100/ffffff/left.png',

  share:
    'https://img.icons8.com/ios-filled/100/ffffff/share.png',

  bookmark:
    'https://img.icons8.com/ios-filled/100/ffffff/bookmark-ribbon.png',

  shield:
    'https://img.icons8.com/ios-filled/100/ffffff/shield.png',

  verified:
    'https://img.icons8.com/ios-filled/100/ffffff/verified-badge.png',

  star:
    'https://img.icons8.com/fluency/96/star.png',

  location:
    'https://img.icons8.com/ios-filled/100/ffffff/marker.png',

  clock:
    'https://img.icons8.com/ios-filled/100/ffffff/clock.png',

  store:
    'https://img.icons8.com/ios-filled/100/ffffff/shop.png',

  phone:
    'https://img.icons8.com/ios-filled/100/ffffff/phone.png',

  chat:
    'https://img.icons8.com/ios-filled/100/ffffff/chat-message.png',

  arrowRight:
    'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  package:
    'https://img.icons8.com/ios-filled/100/ffffff/package.png',

  coverage:
    'https://img.icons8.com/ios-filled/100/ffffff/paint-roller.png',

  shieldProtection:
    'https://img.icons8.com/ios-filled/100/ffffff/security-checked.png',

  calendar:
    'https://img.icons8.com/ios-filled/100/ffffff/calendar.png',

  waterproof:
    'https://img.icons8.com/ios-filled/100/ffffff/water.png',

  check:
    'https://img.icons8.com/ios-filled/100/ffffff/checkmark.png',

  delivery:
    'https://img.icons8.com/ios-filled/100/ffffff/delivery.png',

  lock:
    'https://img.icons8.com/ios-filled/100/ffffff/lock.png',

  cart:
    'https://img.icons8.com/ios-filled/100/ffffff/shopping-cart.png',

  plus:
    'https://img.icons8.com/ios-filled/100/ffffff/plus-math.png',

  minus:
    'https://img.icons8.com/ios-filled/100/ffffff/minus.png',

  navigation:
    'https://img.icons8.com/ios-filled/100/ffffff/navigation.png',

  call:
    'https://img.icons8.com/ios-filled/100/ffffff/phone.png',

  map:
    'https://img.icons8.com/ios-filled/100/ffffff/map.png',

  info:
    'https://img.icons8.com/ios-filled/100/ffffff/info.png',

  question:
    'https://img.icons8.com/ios-filled/100/ffffff/help.png',

  heart:
    'https://img.icons8.com/ios-filled/100/ffffff/like.png',
};

/* =========================================================
   TEMPORARY ONLINE PRODUCT / MAP IMAGES
========================================================= */

const IMAGES = {
  product:
    'https://picsum.photos/seed/localhub-paint-bucket/900/650',

  store:
    'https://picsum.photos/seed/localhub-hardware-store/500/300',

  map:
    'https://picsum.photos/seed/localhub-map-location/900/400',
};

/* =========================================================
   PRODUCT DETAIL SCREEN
========================================================= */

const ProductDetail = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const [saved, setSaved] = useState(false);

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => {
      if (prev <= 1) {
        return 1;
      }

      return prev - 1;
    });
  };

  const handleBack = () => {
    if (navigation?.goBack) {
      navigation.goBack();
    }
  };

  const handleCall = () => {
    console.log('Call merchant');
  };

  const handleChat = () => {
    console.log('Open merchant chat');
  };

  const handleAddToCart = () => {
    console.log('Add to cart', {
      quantity,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#071A2C"
      />

      <View style={styles.mainContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* =================================================
              HEADER
          ================================================= */}

          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <TouchableOpacity
                style={styles.headerIconButton}
                onPress={handleBack}
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri: ICONS.back }}
                  style={styles.headerIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <View style={styles.headerShield}>
                <Image
                  source={{ uri: ICONS.shield }}
                  style={styles.headerShieldIcon}
                  resizeMode="contain"
                />
              </View>

              <View>
                <Text style={styles.headerTitle}>
                  Product Detail
                </Text>

                <Text style={styles.headerSubtitle}>
                  Paints • Exterior
                </Text>
              </View>
            </View>

            <View style={styles.headerRight}>
              <TouchableOpacity
                style={styles.headerIconButton}
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri: ICONS.share }}
                  style={styles.headerIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.headerIconButton}
                activeOpacity={0.8}
                onPress={() => setSaved(prev => !prev)}
              >
                <Image
                  source={{ uri: ICONS.bookmark }}
                  style={[
                    styles.headerIcon,
                    saved && styles.savedIcon,
                  ]}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* =================================================
              MERCHANT BAR
          ================================================= */}

          <View style={styles.merchantMiniBar}>
            <View style={styles.merchantMiniLeft}>
              <View style={styles.miniVerifiedCircle}>
                <Image
                  source={{ uri: ICONS.verified }}
                  style={styles.miniVerifiedIcon}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.merchantMiniText}>
                Bodakdev, Ahmedabad
              </Text>
            </View>

            <Text style={styles.merchantMiniDistance}>
              350m
            </Text>
          </View>

          {/* =================================================
              PRODUCT HERO IMAGE
          ================================================= */}

          <View style={styles.heroCard}>
            <Image
              source={{ uri: IMAGES.product }}
              style={styles.heroImage}
              resizeMode="cover"
            />

            <View style={styles.heroOverlay} />

            <View style={styles.liveInventoryBadge}>
              <View style={styles.liveDot} />

              <Text style={styles.liveInventoryText}>
                LIVE STORE STOCK
              </Text>
            </View>

            <View style={styles.productSizeBadge}>
              <Text style={styles.productSizeBadgeText}>
                20 L
              </Text>
            </View>

            <Text style={styles.heroBrand}>
              LOCALHUB
            </Text>
          </View>

          {/* =================================================
              PRODUCT STATUS
          ================================================= */}

          <View style={styles.productStatusRow}>
            <View style={styles.stockStatus}>
              <View style={styles.stockDot} />

              <Text style={styles.stockStatusText}>
                In Stock
              </Text>
            </View>

            <View style={styles.productCodeBadge}>
              <Text style={styles.productCodeText}>
                APEX-ULT-20L
              </Text>
            </View>
          </View>

          {/* =================================================
              PRODUCT TITLE
          ================================================= */}

          <View style={styles.productTitleSection}>
            <Text style={styles.brandLabel}>
              Asian Paints
            </Text>

            <Text style={styles.productTitle}>
              Asian Paints Apex Ultima Exterior 20L
            </Text>

            <Text style={styles.productDescription}>
              High-performance exterior emulsion with superior
              weather protection & long-lasting colours.
            </Text>
          </View>

          {/* =================================================
              PRICE
          ================================================= */}

          <View style={styles.priceCard}>
            <View>
              <Text style={styles.currentPrice}>
                ₹4,850
              </Text>

              <View style={styles.oldPriceRow}>
                <Text style={styles.oldPrice}>
                  ₹5,200
                </Text>

                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>
                    7% OFF
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.priceRight}>
              <Text style={styles.taxText}>
                Inclusive of taxes
              </Text>

              <Text style={styles.savingText}>
                Save ₹350 today
              </Text>
            </View>
          </View>

          {/* =================================================
              GUARANTEE
          ================================================= */}

          <View style={styles.guaranteeRow}>
            <Image
              source={{ uri: ICONS.shieldProtection }}
              style={styles.guaranteeIcon}
              resizeMode="contain"
            />

            <View style={styles.guaranteeContent}>
              <Text style={styles.guaranteeTitle}>
                Best local price guaranteed
              </Text>

              <Text style={styles.guaranteeSubtitle}>
                Verified store inventory
              </Text>
            </View>

            <Image
              source={{ uri: ICONS.arrowRight }}
              style={styles.guaranteeArrow}
              resizeMode="contain"
            />
          </View>

          {/* =================================================
              MERCHANT CARD
          ================================================= */}

          <View style={styles.storeCard}>
            <View style={styles.storeHeader}>
              <View style={styles.storeTitleLeft}>
                <View style={styles.storeIconBox}>
                  <Image
                    source={{ uri: ICONS.store }}
                    style={styles.storeIcon}
                    resizeMode="contain"
                  />
                </View>

                <View>
                  <Text style={styles.storeTitle}>
                    Patel Hardware & Supplies
                  </Text>

                  <View style={styles.verifiedStoreRow}>
                    <Image
                      source={{ uri: ICONS.verified }}
                      style={styles.verifiedStoreIcon}
                      resizeMode="contain"
                    />

                    <Text style={styles.verifiedStoreText}>
                      Verified Merchant
                    </Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity
                style={styles.storeArrowButton}
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri: ICONS.arrowRight }}
                  style={styles.storeArrow}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.storeStats}>
              <View style={styles.storeStatItem}>
                <Image
                  source={{ uri: ICONS.star }}
                  style={styles.storeStatIconNoTint}
                  resizeMode="contain"
                />

                <Text style={styles.storeStatValue}>
                  4.8
                </Text>

                <Text style={styles.storeStatLabel}>
                  Rating
                </Text>
              </View>

              <View style={styles.storeStatDivider} />

              <View style={styles.storeStatItem}>
                <Image
                  source={{ uri: ICONS.location }}
                  style={styles.storeStatIcon}
                  resizeMode="contain"
                />

                <Text style={styles.storeStatValue}>
                  350m
                </Text>

                <Text style={styles.storeStatLabel}>
                  Nearby
                </Text>
              </View>

              <View style={styles.storeStatDivider} />

              <View style={styles.storeStatItem}>
                <Image
                  source={{ uri: ICONS.clock }}
                  style={styles.storeStatIcon}
                  resizeMode="contain"
                />

                <Text style={styles.storeStatValue}>
                  Open
                </Text>

                <Text style={styles.storeStatLabel}>
                  Until 9 PM
                </Text>
              </View>
            </View>
          </View>

          {/* =================================================
              PRODUCT SPECIFICATION
          ================================================= */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Product Specification
            </Text>

            <Text style={styles.sectionAction}>
              View Details
            </Text>
          </View>

          <View style={styles.specGrid}>
            <View style={styles.specCard}>
              <Image
                source={{ uri: ICONS.coverage }}
                style={styles.specIcon}
                resizeMode="contain"
              />

              <Text style={styles.specLabel}>
                VOLUME / COVERAGE
              </Text>

              <Text style={styles.specValue}>
                20 Litres
              </Text>
            </View>

            <View style={styles.specCard}>
              <Image
                source={{ uri: ICONS.shieldProtection }}
                style={styles.specIcon}
                resizeMode="contain"
              />

              <Text style={styles.specLabel}>
                FINISH TYPE
              </Text>

              <Text style={styles.specValue}>
                High Sheen
              </Text>
            </View>

            <View style={styles.specCard}>
              <Image
                source={{ uri: ICONS.calendar }}
                style={styles.specIcon}
                resizeMode="contain"
              />

              <Text style={styles.specLabel}>
                PROTECTION GUARANTEE
              </Text>

              <Text style={styles.specValue}>
                7 Yrs Anti-Fungal
              </Text>
            </View>

            <View style={styles.specCard}>
              <Image
                source={{ uri: ICONS.package }}
                style={styles.specIcon}
                resizeMode="contain"
              />

              <Text style={styles.specLabel}>
                EST. COVERAGE
              </Text>

              <Text style={styles.specValue}>
                55–60 sq.ft/L
              </Text>
            </View>
          </View>

          {/* =================================================
              NEARBY AVAILABILITY
          ================================================= */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Nearby Availability
            </Text>

            <Text style={styles.sectionAction}>
              3 Stores Found
            </Text>
          </View>

          <View style={styles.availabilityCard}>
            <View style={styles.availabilityRow}>
              <View style={styles.availabilityLeft}>
                <View style={styles.availabilityCheck}>
                  <Image
                    source={{ uri: ICONS.check }}
                    style={styles.availabilityCheckIcon}
                    resizeMode="contain"
                  />
                </View>

                <View>
                  <Text style={styles.availabilityStore}>
                    Patel Hardware (Selected)
                  </Text>

                  <Text style={styles.availabilityLocation}>
                    350m away • Same-day delivery
                  </Text>
                </View>
              </View>

              <View style={styles.availabilityRight}>
                <Text style={styles.availabilityPrice}>
                  ₹4,850
                </Text>

                <Text style={styles.availabilityStatus}>
                  Lowest
                </Text>
              </View>
            </View>

            <View style={styles.availabilityDivider} />

            <View style={styles.availabilityRow}>
              <View style={styles.availabilityLeft}>
                <View style={styles.storeSmallDot} />

                <View>
                  <Text style={styles.availabilityStore}>
                    Shreeji Paints & Sanitary
                  </Text>

                  <Text style={styles.availabilityLocation}>
                    1.2 km away • Open now
                  </Text>
                </View>
              </View>

              <View style={styles.availabilityRight}>
                <Text style={styles.availabilityPrice}>
                  ₹4,900
                </Text>

                <Text style={styles.normalAvailability}>
                  Available
                </Text>
              </View>
            </View>

            <View style={styles.availabilityDivider} />

            <View style={styles.availabilityRow}>
              <View style={styles.availabilityLeft}>
                <View style={styles.storeSmallDot} />

                <View>
                  <Text style={styles.availabilityStore}>
                    National Hardware Depot
                  </Text>

                  <Text style={styles.availabilityLocation}>
                    2.3 km away • Limited stock
                  </Text>
                </View>
              </View>

              <View style={styles.availabilityRight}>
                <Text style={styles.availabilityPrice}>
                  ₹4,800
                </Text>

                <Text style={styles.limitedStockText}>
                  Low stock
                </Text>
              </View>
            </View>
          </View>

          {/* =================================================
              NEED MATCHING TINTING
          ================================================= */}

          <View style={styles.tintingCard}>
            <View style={styles.tintingIconBox}>
              <Image
                source={{ uri: ICONS.question }}
                style={styles.tintingIcon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.tintingContent}>
              <Text style={styles.tintingTitle}>
                Need Matching Tinting?
              </Text>

              <Text style={styles.tintingText}>
                Patel Hardware has an active in-store tinting
                service.
              </Text>
            </View>

            <TouchableOpacity
              style={styles.askButton}
              activeOpacity={0.8}
            >
              <Text style={styles.askButtonText}>
                Ask
              </Text>
            </TouchableOpacity>
          </View>

          {/* =================================================
              STORE LOCATION
          ================================================= */}

          <Text style={styles.locationSectionTitle}>
            Store Location Map
          </Text>

          <View style={styles.mapCard}>
            <Image
              source={{ uri: IMAGES.map }}
              style={styles.mapImage}
              resizeMode="cover"
            />

            <View style={styles.mapOverlay} />

            <View style={styles.mapLocationBadge}>
              <Image
                source={{ uri: ICONS.location }}
                style={styles.mapBadgeIcon}
                resizeMode="contain"
              />

              <Text style={styles.mapBadgeText}>
                350m • Patel Hardware, Bodakdev
              </Text>
            </View>
          </View>

          {/* =================================================
              MAP ACTIONS
          ================================================= */}

          <View style={styles.mapActionRow}>
            <TouchableOpacity
              style={styles.navigateButton}
              activeOpacity={0.85}
            >
              <Image
                source={{ uri: ICONS.navigation }}
                style={styles.navigateButtonIcon}
                resizeMode="contain"
              />

              <View>
                <Text style={styles.navigateButtonText}>
                  Navigate
                </Text>

                <Text style={styles.navigateButtonSubtext}>
                  5 min drive
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.deliveryInfoButton}
              activeOpacity={0.85}
            >
              <Image
                source={{ uri: ICONS.delivery }}
                style={styles.deliveryInfoIcon}
                resizeMode="contain"
              />

              <View>
                <Text style={styles.deliveryInfoTitle}>
                  Instant Delivery
                </Text>

                <Text style={styles.deliveryInfoSubtext}>
                  Available today
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* =================================================
              QUANTITY + CART
          ================================================= */}

          <View style={styles.cartCard}>
            <View style={styles.quantitySelector}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={decreaseQuantity}
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri: ICONS.minus }}
                  style={styles.quantityIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <Text style={styles.quantityValue}>
                {quantity}
              </Text>

              <TouchableOpacity
                style={styles.quantityButton}
                onPress={increaseQuantity}
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri: ICONS.plus }}
                  style={styles.quantityIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.addCartButton}
              activeOpacity={0.88}
              onPress={handleAddToCart}
            >
              <Image
                source={{ uri: ICONS.cart }}
                style={styles.cartIcon}
                resizeMode="contain"
              />

              <Text style={styles.addCartText}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomSpacing} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

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
    paddingTop: 5,
    paddingBottom: 25,
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
  },

  headerRight: {
    flexDirection: 'row',
    gap: 5,
  },

  headerIconButton: {
    width: 26,
    height: 26,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerIcon: {
    width: 13,
    height: 13,
    tintColor: '#B8C9D8',
  },

  savedIcon: {
    tintColor: '#3B82F6',
  },

  headerShield: {
    width: 17,
    height: 17,
    borderRadius: 5,
    backgroundColor: '#316DD0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },

  headerShieldIcon: {
    width: 9,
    height: 9,
    tintColor: '#FFFFFF',
  },

  headerTitle: {
    color: '#E8EEF4',
    fontSize: 8,
    fontWeight: '800',
  },

  headerSubtitle: {
    color: '#72889B',
    fontSize: 5,
  },

  /* =====================================================
     MINI MERCHANT BAR
  ===================================================== */

  merchantMiniBar: {
    height: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  merchantMiniLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  miniVerifiedCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'rgba(16,185,129,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  },

  miniVerifiedIcon: {
    width: 7,
    height: 7,
    tintColor: '#10B981',
  },

  merchantMiniText: {
    color: '#AEC0CF',
    fontSize: 5,
  },

  merchantMiniDistance: {
    color: '#10B981',
    fontSize: 5,
    fontWeight: '700',
  },

  /* =====================================================
     HERO
  ===================================================== */

  heroCard: {
    height: 142,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#102438',
  },

  heroImage: {
    width: '100%',
    height: '100%',
  },

  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(2,13,22,0.17)',
  },

  liveInventoryBadge: {
    position: 'absolute',
    top: 7,
    left: 7,
    backgroundColor: 'rgba(16,185,129,0.18)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 9,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },

  liveDot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 3,
  },

  liveInventoryText: {
    color: '#3EE1AA',
    fontSize: 5,
    fontWeight: '800',
  },

  productSizeBadge: {
    position: 'absolute',
    bottom: 7,
    left: 7,
    backgroundColor: 'rgba(7,26,44,0.8)',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5,
  },

  productSizeBadgeText: {
    color: '#FFFFFF',
    fontSize: 5,
    fontWeight: '700',
  },

  heroBrand: {
    position: 'absolute',
    bottom: 7,
    right: 7,
    color: '#A8B9C8',
    fontSize: 5,
    fontWeight: '800',
  },

  /* =====================================================
     STATUS
  ===================================================== */

  productStatusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 7,
  },

  stockStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  stockDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#10B981',
    marginRight: 4,
  },

  stockStatusText: {
    color: '#10B981',
    fontSize: 6,
    fontWeight: '700',
  },

  productCodeBadge: {
    backgroundColor: '#102A3D',
    borderRadius: 6,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },

  productCodeText: {
    color: '#8299AC',
    fontSize: 4,
  },

  /* =====================================================
     TITLE
  ===================================================== */

  productTitleSection: {
    marginTop: 5,
  },

  brandLabel: {
    color: '#6EA6FF',
    fontSize: 6,
    fontWeight: '700',
  },

  productTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    lineHeight: 16,
    marginTop: 2,
  },

  productDescription: {
    color: '#A2B3C2',
    fontSize: 6,
    lineHeight: 9,
    marginTop: 4,
  },

  /* =====================================================
     PRICE
  ===================================================== */

  priceCard: {
    marginTop: 8,
    backgroundColor: '#102438',
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  currentPrice: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },

  oldPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },

  oldPrice: {
    color: '#71879B',
    fontSize: 6,
    textDecorationLine: 'line-through',
  },

  discountBadge: {
    backgroundColor: 'rgba(245,158,11,0.15)',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 5,
  },

  discountText: {
    color: '#F59E0B',
    fontSize: 5,
    fontWeight: '800',
  },

  priceRight: {
    alignItems: 'flex-end',
  },

  taxText: {
    color: '#8297AA',
    fontSize: 5,
  },

  savingText: {
    color: '#10B981',
    fontSize: 5,
    fontWeight: '700',
    marginTop: 2,
  },

  /* =====================================================
     GUARANTEE
  ===================================================== */

  guaranteeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#09242F',
    borderRadius: 7,
    padding: 7,
    marginTop: 7,
  },

  guaranteeIcon: {
    width: 14,
    height: 14,
    tintColor: '#10B981',
    marginRight: 6,
  },

  guaranteeContent: {
    flex: 1,
  },

  guaranteeTitle: {
    color: '#DCE7EF',
    fontSize: 6,
    fontWeight: '700',
  },

  guaranteeSubtitle: {
    color: '#779389',
    fontSize: 5,
    marginTop: 1,
  },

  guaranteeArrow: {
    width: 8,
    height: 8,
    tintColor: '#8097AA',
  },

  /* =====================================================
     STORE CARD
  ===================================================== */

  storeCard: {
    backgroundColor: '#102438',
    borderRadius: 8,
    padding: 8,
    marginTop: 7,
  },

  storeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  storeTitleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  storeIconBox: {
    width: 27,
    height: 27,
    borderRadius: 6,
    backgroundColor: '#18364F',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },

  storeIcon: {
    width: 13,
    height: 13,
    tintColor: '#6EA7FF',
  },

  storeTitle: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '800',
  },

  verifiedStoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },

  verifiedStoreIcon: {
    width: 7,
    height: 7,
    tintColor: '#10B981',
    marginRight: 2,
  },

  verifiedStoreText: {
    color: '#10B981',
    fontSize: 5,
  },

  storeArrowButton: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  storeArrow: {
    width: 8,
    height: 8,
    tintColor: '#8DA2B5',
  },

  storeStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
    paddingTop: 7,
    borderTopWidth: 1,
    borderTopColor: '#1C354A',
  },

  storeStatItem: {
    flex: 1,
    alignItems: 'center',
  },

  storeStatDivider: {
    width: 1,
    height: 25,
    backgroundColor: '#1E364B',
  },

  storeStatIcon: {
    width: 9,
    height: 9,
    tintColor: '#6EA7FF',
  },

  storeStatIconNoTint: {
    width: 9,
    height: 9,
  },

  storeStatValue: {
    color: '#E5EDF5',
    fontSize: 6,
    fontWeight: '700',
    marginTop: 2,
  },

  storeStatLabel: {
    color: '#71889B',
    fontSize: 4,
    marginTop: 1,
  },

  /* =====================================================
     SECTIONS
  ===================================================== */

  sectionHeader: {
    marginTop: 10,
    marginBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '800',
  },

  sectionAction: {
    color: '#6EA7FF',
    fontSize: 5,
    fontWeight: '600',
  },

  /* =====================================================
     SPECIFICATIONS
  ===================================================== */

  specGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  specCard: {
    width: '48.5%',
    minHeight: 58,
    backgroundColor: '#102438',
    borderRadius: 7,
    padding: 7,
    marginBottom: 6,
  },

  specIcon: {
    width: 12,
    height: 12,
    tintColor: '#6EA7FF',
    marginBottom: 5,
  },

  specLabel: {
    color: '#71879A',
    fontSize: 4,
    fontWeight: '700',
  },

  specValue: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '800',
    marginTop: 3,
  },

  /* =====================================================
     AVAILABILITY
  ===================================================== */

  availabilityCard: {
    backgroundColor: '#102438',
    borderRadius: 8,
    padding: 7,
  },

  availabilityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  availabilityLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  availabilityCheck: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(16,185,129,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },

  availabilityCheckIcon: {
    width: 10,
    height: 10,
    tintColor: '#10B981',
  },

  storeSmallDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: '#6F879B',
    marginHorizontal: 7,
  },

  availabilityStore: {
    color: '#E7EEF5',
    fontSize: 6,
    fontWeight: '700',
  },

  availabilityLocation: {
    color: '#74899C',
    fontSize: 4,
    marginTop: 2,
  },

  availabilityRight: {
    alignItems: 'flex-end',
  },

  availabilityPrice: {
    color: '#FFFFFF',
    fontSize: 7,
    fontWeight: '800',
  },

  availabilityStatus: {
    color: '#10B981',
    fontSize: 4,
    marginTop: 2,
  },

  normalAvailability: {
    color: '#6EA7FF',
    fontSize: 4,
    marginTop: 2,
  },

  limitedStockText: {
    color: '#F59E0B',
    fontSize: 4,
    marginTop: 2,
  },

  availabilityDivider: {
    height: 1,
    backgroundColor: '#1A3448',
    marginVertical: 7,
  },

  /* =====================================================
     TINTING
  ===================================================== */

  tintingCard: {
    backgroundColor: '#102438',
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  tintingIconBox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(59,130,246,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  tintingIcon: {
    width: 13,
    height: 13,
    tintColor: '#6EA7FF',
  },

  tintingContent: {
    flex: 1,
  },

  tintingTitle: {
    color: '#FFFFFF',
    fontSize: 7,
    fontWeight: '700',
  },

  tintingText: {
    color: '#8196A9',
    fontSize: 5,
    lineHeight: 7,
    marginTop: 2,
  },

  askButton: {
    backgroundColor: '#19364E',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  askButtonText: {
    color: '#CFE0EE',
    fontSize: 5,
    fontWeight: '700',
  },

  /* =====================================================
     MAP
  ===================================================== */

  locationSectionTitle: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '800',
    marginTop: 10,
    marginBottom: 6,
  },

  mapCard: {
    height: 115,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },

  mapImage: {
    width: '100%',
    height: '100%',
  },

  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(4,18,30,0.10)',
  },

  mapLocationBadge: {
    position: 'absolute',
    left: 22,
    bottom: 11,
    backgroundColor: 'rgba(7,26,44,0.9)',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 4,
  },

  mapBadgeIcon: {
    width: 8,
    height: 8,
    tintColor: '#10B981',
    marginRight: 4,
  },

  mapBadgeText: {
    color: '#DDE8F1',
    fontSize: 4,
  },

  /* =====================================================
     MAP BUTTONS
  ===================================================== */

  mapActionRow: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 6,
  },

  navigateButton: {
    flex: 1,
    height: 40,
    borderRadius: 7,
    backgroundColor: '#18354E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navigateButtonIcon: {
    width: 13,
    height: 13,
    tintColor: '#6EA7FF',
    marginRight: 5,
  },

  navigateButtonText: {
    color: '#FFFFFF',
    fontSize: 6,
    fontWeight: '700',
  },

  navigateButtonSubtext: {
    color: '#768C9F',
    fontSize: 4,
  },

  deliveryInfoButton: {
    flex: 1,
    height: 40,
    borderRadius: 7,
    backgroundColor: '#AFC8FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  deliveryInfoIcon: {
    width: 14,
    height: 14,
    tintColor: '#071A2C',
    marginRight: 5,
  },

  deliveryInfoTitle: {
    color: '#071A2C',
    fontSize: 6,
    fontWeight: '800',
  },

  deliveryInfoSubtext: {
    color: '#38516B',
    fontSize: 4,
  },

  /* =====================================================
     CART
  ===================================================== */

  cartCard: {
    flexDirection: 'row',
    gap: 7,
    marginTop: 8,
  },

  quantitySelector: {
    width: 85,
    height: 42,
    borderRadius: 7,
    backgroundColor: '#102438',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  quantityButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  quantityIcon: {
    width: 10,
    height: 10,
    tintColor: '#9CB0C3',
  },

  quantityValue: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '800',
  },

  addCartButton: {
    flex: 1,
    height: 42,
    backgroundColor: '#3B82F6',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cartIcon: {
    width: 13,
    height: 13,
    tintColor: '#FFFFFF',
    marginRight: 6,
  },

  addCartText: {
    color: '#FFFFFF',
    fontSize: 7,
    fontWeight: '800',
  },

  bottomSpacing: {
    height: 20,
  },
});