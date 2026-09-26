import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
//   SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';

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
  ];

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

          {trendingDeals.map(deal => (
            <View
              key={deal.id}
              style={styles.dealCard}
            >
              <Image
                source={{
                  uri: deal.image,
                }}
                style={styles.dealImage}
                resizeMode="cover"
              />

              <View style={styles.dealContent}>
                <View style={styles.dealTag}>
                  <Text style={styles.dealTagText}>
                    {deal.tag}
                  </Text>
                </View>

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
                  >
                    <Text style={styles.shopButtonText}>
                      Shop
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}

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

            <TouchableOpacity>
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

          {/* Extra space for fixed bottom bar */}

          <View style={styles.bottomSpace} />
        </ScrollView>

        {/* =================================================
            BOTTOM NAVIGATION
        ================================================= */}

        <View style={styles.bottomNavigation}>
          {/* HOME */}

          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.8}
          >
            <Image
              source={{
                uri: ICONS.home,
              }}
              style={[
                styles.navIcon,
                styles.navIconActive,
              ]}
              resizeMode="contain"
            />

            <Text
              style={[
                styles.navText,
                styles.navTextActive,
              ]}
            >
              Home
            </Text>
          </TouchableOpacity>

          {/* ORDERS */}

          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.8}
          >
            <Image
              source={{
                uri: ICONS.orders,
              }}
              style={styles.navIcon}
              resizeMode="contain"
            />

            <Text style={styles.navText}>
              Orders
            </Text>
          </TouchableOpacity>

          {/* CENTER BUTTON */}

          <TouchableOpacity
            style={styles.mainNavButton}
            activeOpacity={0.85}
          >
            <Image
              source={{
                uri: ICONS.plus,
              }}
              style={styles.mainNavIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* CHAT */}

          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.8}
          >
            <Image
              source={{
                uri: ICONS.chat,
              }}
              style={styles.navIcon}
              resizeMode="contain"
            />

            <Text style={styles.navText}>
              Chat
            </Text>
          </TouchableOpacity>

          {/* PROFILE */}

          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.8}
          >
            <Image
              source={{
                uri: ICONS.profile,
              }}
              style={styles.navIcon}
              resizeMode="contain"
            />

            <Text style={styles.navText}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 10,
    paddingTop: 8,
  },

  /* =====================================================
     HEADER
  ===================================================== */

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoBox: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#10263A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },

  logo: {
    width: 24,
    height: 24,
  },

  brandText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
  },

  smallLocationIcon: {
    width: 8,
    height: 8,
    tintColor: '#10B981',
    marginRight: 2,
  },

  locationText: {
    color: '#9FB0C0',
    fontSize: 6,
  },

  locationArrow: {
    color: '#8CA0B4',
    fontSize: 7,
    marginLeft: 2,
  },

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  headerIconButton: {
    width: 26,
    height: 26,
    borderRadius: 7,
    backgroundColor: '#10263A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerIcon: {
    width: 13,
    height: 13,
    tintColor: '#B8C9DA',
  },

  notificationDot: {
    position: 'absolute',
    right: 5,
    top: 5,
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#10B981',
  },

  profileAvatar: {
    width: 27,
    height: 27,
    borderRadius: 14,
    backgroundColor: '#AFC8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileTopIcon: {
    width: 14,
    height: 14,
    tintColor: '#071A2C',
  },

  /* =====================================================
     DELIVERY LOCATION
  ===================================================== */

  deliveryLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  deliveryLocationIcon: {
    width: 9,
    height: 9,
    tintColor: '#10B981',
    marginRight: 3,
  },

  deliveryLabel: {
    color: '#788DA2',
    fontSize: 6,
  },

  deliveryValue: {
    color: '#C8D4E0',
    fontSize: 6,
    fontWeight: '700',
    marginLeft: 3,
  },

  /* =====================================================
     SEARCH
  ===================================================== */

  searchContainer: {
    height: 38,
    borderRadius: 8,
    backgroundColor: '#102438',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 10,
  },

  searchIcon: {
    width: 13,
    height: 13,
    tintColor: '#8EA2B6',
    marginRight: 7,
  },

  searchInput: {
    flex: 1,
    height: '100%',
    color: '#FFFFFF',
    fontSize: 8,
    paddingVertical: 0,
  },

  scanButton: {
    width: 34,
    height: 34,
    borderRadius: 7,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },

  scanIcon: {
    width: 15,
    height: 15,
    tintColor: '#FFFFFF',
  },

  /* =====================================================
     QUICK ACTIONS
  ===================================================== */

  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0B1D30',
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 5,
    marginBottom: 9,
  },

  quickAction: {
    width: '24%',
    alignItems: 'center',
  },

  quickIconBox: {
    width: 28,
    height: 28,
    borderRadius: 7,
    backgroundColor: '#132D49',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },

  quickGreenBox: {
    backgroundColor: 'rgba(16,185,129,0.14)',
  },

  quickOrangeBox: {
    backgroundColor: 'rgba(245,158,11,0.12)',
  },

  quickIcon: {
    width: 14,
    height: 14,
    tintColor: '#6DA7FF',
  },

  quickTitle: {
    color: '#E8EFF6',
    fontSize: 7,
    fontWeight: '700',
  },

  quickSubtitle: {
    color: '#73899E',
    fontSize: 5,
    marginTop: 1,
  },

  /* =====================================================
     CATEGORIES
  ===================================================== */

  categoryScroll: {
    gap: 7,
    paddingBottom: 10,
  },

  categoryItem: {
    minWidth: 53,
    height: 24,
    borderRadius: 13,
    backgroundColor: '#102438',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 7,
  },

  categoryItemActive: {
    backgroundColor: '#203C58',
  },

  categoryIcon: {
    width: 10,
    height: 10,
    tintColor: '#8298AD',
    marginRight: 4,
  },

  categoryIconActive: {
    tintColor: '#10B981',
  },

  categoryText: {
    color: '#8CA0B4',
    fontSize: 6,
    fontWeight: '600',
  },

  categoryTextActive: {
    color: '#E4EDF6',
  },

  /* =====================================================
     SECTION HEADERS
  ===================================================== */

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7,
    marginTop: 2,
  },

  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  sectionIcon: {
    width: 12,
    height: 12,
    tintColor: '#10B981',
    marginRight: 5,
  },

  fireIcon: {
    width: 13,
    height: 13,
    marginRight: 5,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
  },

  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  seeAllText: {
    color: '#6EA5FF',
    fontSize: 6,
    fontWeight: '700',
  },

  seeAllIcon: {
    width: 8,
    height: 8,
    tintColor: '#6EA5FF',
    marginLeft: 2,
  },

  /* =====================================================
     STORE CARDS
  ===================================================== */

  storeCard: {
    backgroundColor: '#102238',
    borderRadius: 8,
    padding: 7,
    flexDirection: 'row',
    marginBottom: 7,
  },

  storeImage: {
    width: 75,
    height: 62,
    borderRadius: 6,
    backgroundColor: '#183149',
  },

  storeContent: {
    flex: 1,
    paddingLeft: 8,
  },

  storeTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  storeName: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '800',
    flex: 1,
  },

  heartIcon: {
    width: 11,
    height: 11,
    tintColor: '#10B981',
  },

  storeCategory: {
    color: '#8FA2B5',
    fontSize: 6,
    marginTop: 2,
  },

  storeMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  starIcon: {
    width: 9,
    height: 9,
    tintColor: '#F59E0B',
    marginRight: 2,
  },

  ratingText: {
    color: '#E6EEF5',
    fontSize: 6,
    fontWeight: '700',
  },

  metaDot: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#53697E',
    marginHorizontal: 5,
  },

  distanceText: {
    color: '#8CA0B4',
    fontSize: 6,
  },

  storeBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  offerBadge: {
    backgroundColor: 'rgba(16,185,129,0.12)',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },

  offerText: {
    color: '#10B981',
    fontSize: 5,
    fontWeight: '700',
  },

  viewStoreButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 4,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },

  viewStoreText: {
    color: '#FFFFFF',
    fontSize: 5,
    fontWeight: '700',
  },

  /* =====================================================
     TRENDING DEALS
  ===================================================== */

  limitedBadge: {
    backgroundColor: 'rgba(245,158,11,0.12)',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 7,
  },

  limitedText: {
    color: '#F59E0B',
    fontSize: 5,
    fontWeight: '700',
  },

  dealCard: {
    backgroundColor: '#102238',
    borderRadius: 8,
    padding: 7,
    flexDirection: 'row',
    marginBottom: 7,
  },

  dealImage: {
    width: 69,
    height: 64,
    borderRadius: 6,
    backgroundColor: '#183149',
  },

  dealContent: {
    flex: 1,
    paddingLeft: 8,
  },

  dealTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#F59E0B',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    marginBottom: 3,
  },

  dealTagText: {
    color: '#071A2C',
    fontSize: 5,
    fontWeight: '900',
  },

  dealTitle: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '700',
  },

  dealShop: {
    color: '#8398AC',
    fontSize: 6,
    marginTop: 2,
  },

  dealBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 5,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  currentPrice: {
    color: '#10B981',
    fontSize: 9,
    fontWeight: '800',
  },

  oldPrice: {
    color: '#6F8295',
    fontSize: 6,
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },

  shopButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },

  shopButtonText: {
    color: '#FFFFFF',
    fontSize: 5,
    fontWeight: '700',
  },

  /* =====================================================
     SERVICES
  ===================================================== */

  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 9,
  },

  serviceCard: {
    width: '48.5%',
    backgroundColor: '#102238',
    borderRadius: 7,
    padding: 9,
    marginBottom: 7,
  },

  serviceIconBox: {
    width: 25,
    height: 25,
    borderRadius: 6,
    backgroundColor: '#162F46',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },

  serviceIcon: {
    width: 13,
    height: 13,
    tintColor: '#6EA7FF',
  },

  serviceTitle: {
    color: '#FFFFFF',
    fontSize: 7,
    fontWeight: '700',
  },

  serviceSubtitle: {
    color: '#8095A9',
    fontSize: 5,
    marginTop: 2,
  },

  /* =====================================================
     PROTECTION
  ===================================================== */

  protectionCard: {
    backgroundColor: '#102438',
    borderRadius: 8,
    padding: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },

  protectionIconBox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(16,185,129,0.13)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  protectionIcon: {
    width: 14,
    height: 14,
    tintColor: '#10B981',
  },

  protectionContent: {
    flex: 1,
  },

  protectionTitle: {
    color: '#DDE7F0',
    fontSize: 7,
    fontWeight: '700',
  },

  protectionText: {
    color: '#8297AA',
    fontSize: 5,
    marginTop: 2,
  },

  bottomSpace: {
    height: 80,
  },

  /* =====================================================
     BOTTOM NAVIGATION
  ===================================================== */

  bottomNavigation: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    backgroundColor: '#081A2B',
    borderTopWidth: 1,
    borderTopColor: '#132B42',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
  },

  navItem: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  navIcon: {
    width: 16,
    height: 16,
    tintColor: '#70869B',
    marginBottom: 3,
  },

  navIconActive: {
    tintColor: '#3B82F6',
  },

  navText: {
    color: '#72879A',
    fontSize: 5,
    fontWeight: '600',
  },

  navTextActive: {
    color: '#5B9DFF',
  },

  mainNavButton: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -19,

    shadowColor: '#3B82F6',

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.4,
    shadowRadius: 8,

    elevation: 8,
  },

  mainNavIcon: {
    width: 18,
    height: 18,
    tintColor: '#FFFFFF',
  },
});