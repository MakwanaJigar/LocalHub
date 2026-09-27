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
import logoImage from '../assets/logo.png';

/* =====================================================
   DUMMY ONLINE ICONS

   You can replace these URLs later with local PNG files.

   Example later:

   import searchIcon from '../assets/icons/search.png';

   and change:

   source={{ uri: ICONS.search }}

   to:

   source={searchIcon}
===================================================== */

const ICONS = {
  logo:
    'https://img.icons8.com/fluency/96/marker-l.png',

  search:
    'https://img.icons8.com/ios-filled/100/ffffff/search--v1.png',

  location:
    'https://img.icons8.com/ios-filled/100/ffffff/marker.png',

  notification:
    'https://img.icons8.com/ios-filled/100/ffffff/appointment-reminders--v1.png',

  scan:
    'https://img.icons8.com/ios-filled/100/ffffff/qr-code.png',

  stores:
    'https://img.icons8.com/ios-filled/100/ffffff/shop.png',

  deals:
    'https://img.icons8.com/ios-filled/100/ffffff/discount--v1.png',

  delivery:
    'https://img.icons8.com/ios-filled/100/ffffff/delivery--v1.png',

  grocery:
    'https://img.icons8.com/ios-filled/100/ffffff/shopping-basket-2.png',

  food:
    'https://img.icons8.com/ios-filled/100/ffffff/restaurant.png',

  services:
    'https://img.icons8.com/ios-filled/100/ffffff/maintenance.png',

  pharmacy:
    'https://img.icons8.com/ios-filled/100/ffffff/pill.png',

  fashion:
    'https://img.icons8.com/ios-filled/100/ffffff/clothes.png',

  nearby:
    'https://img.icons8.com/ios-filled/100/ffffff/near-me.png',

  fire:
    'https://img.icons8.com/fluency/96/fire-element.png',

  star:
    'https://img.icons8.com/ios-filled/100/ffffff/star--v1.png',

  clock:
    'https://img.icons8.com/ios-filled/100/ffffff/clock--v1.png',

  heart:
    'https://img.icons8.com/ios-filled/100/ffffff/like--v1.png',

  arrowRight:
    'https://img.icons8.com/ios-filled/100/ffffff/right--v1.png',

  home:
    'https://img.icons8.com/ios-filled/100/ffffff/home.png',

  orders:
    'https://img.icons8.com/ios-filled/100/ffffff/purchase-order.png',

  plus:
    'https://img.icons8.com/ios-filled/100/ffffff/plus-math.png',

  chat:
    'https://img.icons8.com/ios-filled/100/ffffff/chat-message--v1.png',

  profile:
    'https://img.icons8.com/ios-filled/100/ffffff/user.png',

  shield:
    'https://img.icons8.com/ios-filled/100/ffffff/shield.png',
};

/* =====================================================
   DUMMY STORE / PRODUCT IMAGES

   Replace these URLs with your API images later.
===================================================== */

const IMAGES = {
  store1:
    'https://picsum.photos/seed/localhub-store-1/400/300',

  store2:
    'https://picsum.photos/seed/localhub-store-2/400/300',

  deal1:
    'https://picsum.photos/seed/localhub-deal-1/400/300',

  deal2:
    'https://picsum.photos/seed/localhub-deal-2/400/300',

  deal3:
    'https://picsum.photos/seed/localhub-deal-3/400/300',

  banner:
    'https://picsum.photos/seed/localhub-banner/800/400',
};

const Home = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] =
    useState('Nearby');

  /* =====================================================
     CATEGORY DATA
  ===================================================== */

  const categories = [
    {
      id: 1,
      title: 'Nearby',
      icon: ICONS.nearby,
    },
    {
      id: 2,
      title: 'Food',
      icon: ICONS.food,
    },
    {
      id: 3,
      title: 'Grocery',
      icon: ICONS.grocery,
    },
    {
      id: 4,
      title: 'Services',
      icon: ICONS.services,
    },
    {
      id: 5,
      title: 'Pharmacy',
      icon: ICONS.pharmacy,
    },
    {
      id: 6,
      title: 'Fashion',
      icon: ICONS.fashion,
    },
  ];

  /* =====================================================
     NEARBY STORES
  ===================================================== */

  const nearbyStores = [
    {
      id: 1,
      image: IMAGES.store1,
      name: 'Patel Namkeen & Farsan',
      category: 'Snacks • Farsan • Fresh Items',
      rating: '4.8',
      distance: '0.8 km',
      offer: '20% OFF',
    },

    {
      id: 2,
      image: IMAGES.store2,
      name: 'Anand Restaurant',
      category: 'North Indian • Gujarati',
      rating: '4.6',
      distance: '1.2 km',
      offer: 'Free Delivery',
    },
  ];

  /* =====================================================
     TRENDING DEALS
  ===================================================== */

  const trendingDeals = [
    {
      id: 1,
      image: IMAGES.deal1,
      tag: 'TRENDING',
      name: 'Fresh Veg Combo Pack',
      shop: 'Local Fresh Mart',
      price: '₹499',
      oldPrice: '₹649',
    },

    {
      id: 2,
      image: IMAGES.deal2,
      tag: 'POPULAR',
      name: 'Weekend Family Bakery Box',
      shop: 'Classic Bakers',
      price: '₹299',
      oldPrice: '₹399',
    },

    {
      id: 3,
      image: IMAGES.deal3,
      tag: 'NEW',
      name: 'Homemade Gujarati Thali',
      shop: 'Swad Kitchen',
      price: '₹179',
      oldPrice: '₹229',
    },
  ];

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
              <View style={styles.logoBox}>
                <Image
                  source={logoImage}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>

              <View>
                <Text style={styles.brandText}>
                  LocalHub
                </Text>

                <TouchableOpacity
                  style={styles.locationRow}
                  activeOpacity={0.7}
                >
                  <Image
                    source={{
                      uri: ICONS.location,
                    }}
                    style={styles.smallLocationIcon}
                    resizeMode="contain"
                  />

                  <Text style={styles.locationText}>
                    Ahmedabad
                  </Text>

                  <Text style={styles.locationArrow}>
                    ▾
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.headerActions}>
              <TouchableOpacity
                style={styles.headerIconButton}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Notification')}
              >
                <Image
                  source={{
                    uri: ICONS.notification,
                  }}
                  style={styles.headerIcon}
                  resizeMode="contain"
                />

                <View style={styles.notificationDot} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.profileAvatar}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('UserProfile')}
              >
                <Image
                  source={{
                    uri: ICONS.profile,
                  }}
                  style={styles.profileTopIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* =================================================
              DELIVERY LOCATION
          ================================================= */}

          <View style={styles.deliveryLocationRow}>
            <Image
              source={{
                uri: ICONS.location,
              }}
              style={styles.deliveryLocationIcon}
              resizeMode="contain"
            />

            <Text style={styles.deliveryLabel}>
              Delivering to
            </Text>

            <Text style={styles.deliveryValue}>
              SG Highway, Ahmedabad
            </Text>
          </View>

          {/* =================================================
              SEARCH
          ================================================= */}

          <View style={styles.searchContainer}>
            <Image
              source={{
                uri: ICONS.search,
              }}
              style={styles.searchIcon}
              resizeMode="contain"
            />

            <TextInput
              value={search}
              onChangeText={setSearch}
              style={styles.searchInput}
              placeholder="What are you looking for?"
              placeholderTextColor="#71869B"
            />

            <TouchableOpacity
              style={styles.scanButton}
              activeOpacity={0.8}
            >
              <Image
                source={{
                  uri: ICONS.scan,
                }}
                style={styles.scanIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/* =================================================
              PROMO BANNER
          ================================================= */}

          <TouchableOpacity
            style={styles.banner}
            activeOpacity={0.9}
          >
            <Image
              source={{
                uri: IMAGES.banner,
              }}
              style={styles.bannerImage}
              resizeMode="cover"
            />

            <View style={styles.bannerOverlay} />

            <View style={styles.bannerContent}>
              <View style={styles.bannerTag}>
                <Text style={styles.bannerTagText}>
                  WEEKEND SPECIAL
                </Text>
              </View>

              <Text style={styles.bannerTitle}>
                Up to 40% off{'\n'}at local stores
              </Text>

              <View style={styles.bannerButton}>
                <Text style={styles.bannerButtonText}>
                  Explore Deals
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* =================================================
              QUICK ACTIONS
          ================================================= */}

          <View style={styles.quickActions}>
            <TouchableOpacity
              style={styles.quickAction}
              activeOpacity={0.8}
            >
              <View style={styles.quickIconBox}>
                <Image
                  source={{
                    uri: ICONS.stores,
                  }}
                  style={styles.quickIcon}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.quickTitle}>
                Nearby
              </Text>

              <Text style={styles.quickSubtitle}>
                Stores
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.quickAction}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.quickIconBox,
                  styles.quickGreenBox,
                ]}
              >
                <Image
                  source={{
                    uri: ICONS.deals,
                  }}
                  style={styles.quickIcon}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.quickTitle}>
                Local
              </Text>

              <Text style={styles.quickSubtitle}>
                Deals
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.quickAction}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.quickIconBox,
                  styles.quickOrangeBox,
                ]}
              >
                <Image
                  source={{
                    uri: ICONS.grocery,
                  }}
                  style={styles.quickIcon}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.quickTitle}>
                Daily
              </Text>

              <Text style={styles.quickSubtitle}>
                Needs
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.quickAction}
              activeOpacity={0.8}
            >
              <View style={styles.quickIconBox}>
                <Image
                  source={{
                    uri: ICONS.delivery,
                  }}
                  style={styles.quickIcon}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.quickTitle}>
                Fast
              </Text>

              <Text style={styles.quickSubtitle}>
                Delivery
              </Text>
            </TouchableOpacity>
          </View>

          {/* =================================================
              CATEGORY FILTERS
          ================================================= */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryScroll}
          >
            {categories.map(item => {
              const active =
                activeCategory === item.title;

              return (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.8}
                  style={[
                    styles.categoryItem,
                    active &&
                      styles.categoryItemActive,
                  ]}
                  onPress={() =>
                    setActiveCategory(item.title)
                  }
                >
                  <Image
                    source={{
                      uri: item.icon,
                    }}
                    style={[
                      styles.categoryIcon,
                      active &&
                        styles.categoryIconActive,
                    ]}
                    resizeMode="contain"
                  />

                  <Text
                    style={[
                      styles.categoryText,
                      active &&
                        styles.categoryTextActive,
                    ]}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* =================================================
              NEAR YOU
          ================================================= */}

          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <Image
                source={{
                  uri: ICONS.nearby,
                }}
                style={styles.sectionIcon}
                resizeMode="contain"
              />

              <Text style={styles.sectionTitle}>
                Near You
              </Text>
            </View>

            <TouchableOpacity
              style={styles.seeAllButton}
              activeOpacity={0.7}
            >
              <Text style={styles.seeAllText}>
                View All
              </Text>

              <Image
                source={{
                  uri: ICONS.arrowRight,
                }}
                style={styles.seeAllIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/* =================================================
              NEARBY STORE CARDS
          ================================================= */}

          {nearbyStores.map(store => (
            <View
              key={store.id}
              style={styles.storeCard}
            >
              <Image
                source={{
                  uri: store.image,
                }}
                style={styles.storeImage}
                resizeMode="cover"
              />

              <View style={styles.storeContent}>
                <View style={styles.storeTopRow}>
                  <Text
                    style={styles.storeName}
                    numberOfLines={1}
                  >
                    {store.name}
                  </Text>

                  <TouchableOpacity
                    activeOpacity={0.7}
                  >
                    <Image
                      source={{
                        uri: ICONS.heart,
                      }}
                      style={styles.heartIcon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>

                <Text
                  style={styles.storeCategory}
                  numberOfLines={1}
                >
                  {store.category}
                </Text>

                <View style={styles.storeMeta}>
                  <View style={styles.ratingRow}>
                    <Image
                      source={{
                        uri: ICONS.star,
                      }}
                      style={styles.starIcon}
                      resizeMode="contain"
                    />

                    <Text style={styles.ratingText}>
                      {store.rating}
                    </Text>
                  </View>

                  <View style={styles.metaDot} />

                  <Text style={styles.distanceText}>
                    {store.distance}
                  </Text>
                </View>

                <View style={styles.storeBottom}>
                  <View style={styles.offerBadge}>
                    <Text style={styles.offerText}>
                      {store.offer}
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={styles.viewStoreButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('ServiceDetail')}
                  >
                    <Text style={styles.viewStoreText}>
                      View Store
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}

          {/* =================================================
              TRENDING DEALS
          ================================================= */}

          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <Image
                source={{
                  uri: ICONS.fire,
                }}
                style={styles.fireIcon}
                resizeMode="contain"
              />

              <Text style={styles.sectionTitle}>
                Trending Deals
              </Text>
            </View>

            <View style={styles.limitedBadge}>
              <Text style={styles.limitedText}>
                Limited Time
              </Text>
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dealScroll}
          >
            {trendingDeals.map(deal => (
              <View
                key={deal.id}
                style={styles.dealCard}
              >
                <View>
                  <Image
                    source={{
                      uri: deal.image,
                    }}
                    style={styles.dealImage}
                    resizeMode="cover"
                  />

                  <View style={styles.dealTag}>
                    <Text style={styles.dealTagText}>
                      {deal.tag}
                    </Text>
                  </View>
                </View>

                <View style={styles.dealContent}>
                  <Text
                    style={styles.dealTitle}
                    numberOfLines={2}
                  >
                    {deal.name}
                  </Text>

                  <Text style={styles.dealShop}>
                    {deal.shop}
                  </Text>

                  <View style={styles.dealBottom}>
                    <View style={styles.priceRow}>
                      <Text style={styles.currentPrice}>
                        {deal.price}
                      </Text>

                      <Text style={styles.oldPrice}>
                        {deal.oldPrice}
                      </Text>
                    </View>

                    <TouchableOpacity
                      style={styles.shopButton}
                      activeOpacity={0.8}
                      onPress={() => navigation.navigate('ProductDetail')}
                    >
                      <Text style={styles.shopButtonText}>
                        Shop
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* =================================================
              POPULAR SERVICES
          ================================================= */}

          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <Image
                source={{
                  uri: ICONS.star,
                }}
                style={styles.sectionIcon}
                resizeMode="contain"
              />

              <Text style={styles.sectionTitle}>
                Popular Services
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('AskLocal')}
            >
              <Text style={styles.seeAllText}>
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.serviceGrid}>
            <TouchableOpacity
              style={styles.serviceCard}
              activeOpacity={0.85}
            >
              <View style={styles.serviceIconBox}>
                <Image
                  source={{
                    uri: ICONS.services,
                  }}
                  style={styles.serviceIcon}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.serviceTitle}>
                AC & Cleaning
              </Text>

              <Text style={styles.serviceSubtitle}>
                From ₹299
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.serviceCard}
              activeOpacity={0.85}
            >
              <View style={styles.serviceIconBox}>
                <Image
                  source={{
                    uri: ICONS.delivery,
                  }}
                  style={styles.serviceIcon}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.serviceTitle}>
                Home Services
              </Text>

              <Text style={styles.serviceSubtitle}>
                Nearby experts
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.serviceCard}
              activeOpacity={0.85}
            >
              <View style={styles.serviceIconBox}>
                <Image
                  source={{
                    uri: ICONS.grocery,
                  }}
                  style={styles.serviceIcon}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.serviceTitle}>
                Plumbing Repair
              </Text>

              <Text style={styles.serviceSubtitle}>
                Local professionals
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.serviceCard}
              activeOpacity={0.85}
            >
              <View style={styles.serviceIconBox}>
                <Image
                  source={{
                    uri: ICONS.stores,
                  }}
                  style={styles.serviceIcon}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.serviceTitle}>
                Deep Cleaning
              </Text>

              <Text style={styles.serviceSubtitle}>
                Book instantly
              </Text>
            </TouchableOpacity>
          </View>

          {/* =================================================
              BUYER PROTECTION
          ================================================= */}

          <View style={styles.protectionCard}>
            <View style={styles.protectionIconBox}>
              <Image
                source={{
                  uri: ICONS.shield,
                }}
                style={styles.protectionIcon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.protectionContent}>
              <Text style={styles.protectionTitle}>
                LocalHub Buyer Protection
              </Text>

              <Text style={styles.protectionText}>
                Payments and orders are protected.
              </Text>
            </View>
          </View>

          {/* Extra space above the tab bar */}

          <View style={styles.bottomSpace} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

/* =====================================================
   STYLES
===================================================== */

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
  },

  /* =====================================================
     HEADER
  ===================================================== */

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
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#10263A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 9,
  },

  logo: {
    width: 31,
    height: 31,
  },

  brandText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.3,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
  },

  smallLocationIcon: {
    width: 10,
    height: 10,
    tintColor: '#10B981',
    marginRight: 2,
  },

  locationText: {
    color: '#9FB0C0',
    fontSize: 12,
  },

  locationArrow: {
    color: '#8CA0B4',
    fontSize: 13,
    marginLeft: 2,
  },

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },

  headerIconButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#10263A',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },

  headerIcon: {
    width: 18,
    height: 18,
    tintColor: '#B8C9DA',
  },

  notificationDot: {
    position: 'absolute',
    right: 9,
    top: 9,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    borderWidth: 1.5,
    borderColor: '#10263A',
  },

  profileAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#AFC8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileTopIcon: {
    width: 20,
    height: 20,
    tintColor: '#071A2C',
  },

  /* =====================================================
     DELIVERY LOCATION
  ===================================================== */

  deliveryLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  deliveryLocationIcon: {
    width: 12,
    height: 12,
    tintColor: '#10B981',
    marginRight: 4,
  },

  deliveryLabel: {
    color: '#788DA2',
    fontSize: 12,
  },

  deliveryValue: {
    color: '#C8D4E0',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 4,
  },

  /* =====================================================
     SEARCH
  ===================================================== */

  searchContainer: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#102438',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },

  searchIcon: {
    width: 17,
    height: 17,
    tintColor: '#8EA2B6',
    marginRight: 9,
  },

  searchInput: {
    flex: 1,
    height: '100%',
    color: '#FFFFFF',
    fontSize: 15,
    paddingVertical: 0,
  },

  scanButton: {
    width: 44,
    height: 44,
    borderRadius: 11,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  },

  scanIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
  },

  /* =====================================================
     QUICK ACTIONS
  ===================================================== */

  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0B1D30',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 7,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },

  quickAction: {
    width: '24%',
    alignItems: 'center',
  },

  quickIconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#132D49',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  quickGreenBox: {
    backgroundColor: 'rgba(16,185,129,0.14)',
  },

  quickOrangeBox: {
    backgroundColor: 'rgba(245,158,11,0.12)',
  },

  quickIcon: {
    width: 22,
    height: 22,
    tintColor: '#6DA7FF',
  },

  quickTitle: {
    color: '#E8EFF6',
    fontSize: 13,
    fontWeight: '700',
  },

  quickSubtitle: {
    color: '#73899E',
    fontSize: 11,
    marginTop: 1,
  },

  /* =====================================================
     CATEGORIES
  ===================================================== */

  categoryScroll: {
    gap: 9,
    paddingBottom: 13,
  },

  categoryItem: {
    minWidth: 69,
    height: 36,
    borderRadius: 999,
    backgroundColor: '#102438',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },

  categoryItemActive: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },

  categoryIcon: {
    width: 14,
    height: 14,
    tintColor: '#8298AD',
    marginRight: 6,
  },

  categoryIconActive: {
    tintColor: '#FFFFFF',
  },

  categoryText: {
    color: '#8CA0B4',
    fontSize: 13,
    fontWeight: '600',
  },

  categoryTextActive: {
    color: '#FFFFFF',
  },

  /* =====================================================
     SECTION HEADERS
  ===================================================== */

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 10,
  },

  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  sectionIcon: {
    width: 18,
    height: 18,
    tintColor: '#10B981',
    marginRight: 8,
  },

  fireIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '800',
    letterSpacing: 0.2,
  },

  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(59,130,246,0.12)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },

  seeAllText: {
    color: '#6EA5FF',
    fontSize: 12,
    fontWeight: '700',
  },

  seeAllIcon: {
    width: 10,
    height: 10,
    tintColor: '#6EA5FF',
    marginLeft: 4,
  },

  /* =====================================================
     STORE CARDS
  ===================================================== */

  storeCard: {
    backgroundColor: '#102238',
    borderRadius: 16,
    padding: 10,
    flexDirection: 'row',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.card,
  },

  storeImage: {
    width: 104,
    height: 104,
    borderRadius: 12,
    backgroundColor: '#183149',
  },

  storeContent: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'space-between',
  },

  storeTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  storeName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    flex: 1,
    marginRight: 6,
  },

  heartIcon: {
    width: 18,
    height: 18,
    tintColor: '#10B981',
  },

  storeCategory: {
    color: '#8FA2B5',
    fontSize: 12,
    marginTop: 3,
  },

  storeMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245,158,11,0.14)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },

  starIcon: {
    width: 12,
    height: 12,
    tintColor: '#F59E0B',
    marginRight: 3,
  },

  ratingText: {
    color: '#F8C66A',
    fontSize: 12,
    fontWeight: '800',
  },

  metaDot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#53697E',
    marginHorizontal: 8,
  },

  distanceText: {
    color: '#8CA0B4',
    fontSize: 12,
    fontWeight: '600',
  },

  storeBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },

  offerBadge: {
    backgroundColor: 'rgba(16,185,129,0.14)',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  offerText: {
    color: '#10B981',
    fontSize: 11,
    fontWeight: '800',
  },

  viewStoreButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 7,
    ...SHADOW.glow,
    elevation: 4,
  },

  viewStoreText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  /* =====================================================
     TRENDING DEALS (horizontal carousel)
  ===================================================== */

  limitedBadge: {
    backgroundColor: 'rgba(245,158,11,0.14)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },

  limitedText: {
    color: '#F59E0B',
    fontSize: 11,
    fontWeight: '800',
  },

  dealScroll: {
    gap: 12,
    paddingBottom: 14,
    paddingRight: 4,
  },

  dealCard: {
    width: 220,
    backgroundColor: '#102238',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },

  dealImage: {
    width: '100%',
    height: 130,
    backgroundColor: '#183149',
  },

  dealContent: {
    padding: 12,
  },

  dealTag: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#F59E0B',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },

  dealTagText: {
    color: '#071A2C',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.6,
  },

  dealTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
  },

  dealShop: {
    color: '#8398AC',
    fontSize: 12,
    marginTop: 3,
  },

  dealBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  currentPrice: {
    color: '#10B981',
    fontSize: 18,
    fontWeight: '800',
  },

  oldPrice: {
    color: '#6F8295',
    fontSize: 12,
    textDecorationLine: 'line-through',
    marginLeft: 6,
  },

  shopButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 999,
  },

  shopButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  /* =====================================================
     PROMO BANNER
  ===================================================== */

  banner: {
    height: 150,
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 14,
    backgroundColor: '#132A42',
  },

  bannerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  bannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(7,26,44,0.62)',
  },

  bannerContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },

  bannerTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#10B981',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginBottom: 8,
  },

  bannerTagText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.8,
  },

  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
  },

  bannerButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#3B82F6',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
    marginTop: 10,
  },

  bannerButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  /* =====================================================
     SERVICES
  ===================================================== */

  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  serviceCard: {
    width: '48.5%',
    backgroundColor: '#102238',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },

  serviceIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(59,130,246,0.14)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  serviceIcon: {
    width: 22,
    height: 22,
    tintColor: '#6EA7FF',
  },

  serviceTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  serviceSubtitle: {
    color: '#8095A9',
    fontSize: 12,
    marginTop: 3,
  },

  /* =====================================================
     PROTECTION
  ===================================================== */

  protectionCard: {
    backgroundColor: 'rgba(16,185,129,0.08)',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(16,185,129,0.25)',
  },

  protectionIconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(16,185,129,0.13)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  protectionIcon: {
    width: 22,
    height: 22,
    tintColor: '#10B981',
  },

  protectionContent: {
    flex: 1,
  },

  protectionTitle: {
    color: '#DDE7F0',
    fontSize: 14,
    fontWeight: '700',
  },

  protectionText: {
    color: '#8297AA',
    fontSize: 12,
    marginTop: 3,
  },

  bottomSpace: {
    height: 30,
  },

  /* =====================================================
     BOTTOM NAVIGATION
  ===================================================== */

  bottomNavigation: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 78,
    backgroundColor: '#081A2B',
    borderTopWidth: 1,
    borderTopColor: '#132B42',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 7,
  },

  navItem: {
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
  },

  navIcon: {
    width: 21,
    height: 21,
    tintColor: '#70869B',
    marginBottom: 4,
  },

  navIconActive: {
    tintColor: '#3B82F6',
  },

  navText: {
    color: '#72879A',
    fontSize: 11,
    fontWeight: '600',
  },

  navTextActive: {
    color: '#5B9DFF',
  },

  mainNavButton: {
    width: 56,
    height: 56,
    borderRadius: 29,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -25,

    shadowColor: '#3B82F6',

    shadowOffset: {
      width: 0,
      height: 5,
    },

    shadowOpacity: 0.4,
    shadowRadius: 8,

    elevation: 8,
  },

  mainNavIcon: {
    width: 23,
    height: 23,
    tintColor: '#FFFFFF',
  },
});