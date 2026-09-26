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
  TextInput,
} from 'react-native';

/* =========================================================
   DUMMY ONLINE ICONS

   Replace these URLs later with your own PNG assets.
========================================================= */

const ICONS = {
  back:
    'https://img.icons8.com/ios-filled/100/ffffff/left.png',

  shield:
    'https://img.icons8.com/ios-filled/100/ffffff/shield.png',

  profile:
    'https://img.icons8.com/ios-filled/100/ffffff/user.png',

  bookmark:
    'https://img.icons8.com/ios-filled/100/ffffff/bookmark-ribbon.png',

  verified:
    'https://img.icons8.com/ios-filled/100/ffffff/verified-badge.png',

  store:
    'https://img.icons8.com/ios-filled/100/ffffff/shop.png',

  star:
    'https://img.icons8.com/fluency/96/star.png',

  open:
    'https://img.icons8.com/ios-filled/100/ffffff/clock.png',

  location:
    'https://img.icons8.com/ios-filled/100/ffffff/marker.png',

  call:
    'https://img.icons8.com/ios-filled/100/ffffff/phone.png',

  chat:
    'https://img.icons8.com/ios-filled/100/ffffff/chat-message.png',

  whatsapp:
    'https://img.icons8.com/ios-filled/100/ffffff/whatsapp.png',

  navigate:
    'https://img.icons8.com/ios-filled/100/ffffff/navigation.png',

  card:
    'https://img.icons8.com/ios-filled/100/ffffff/bank-card-back-side.png',

  delivery:
    'https://img.icons8.com/ios-filled/100/ffffff/delivery.png',

  gst:
    'https://img.icons8.com/ios-filled/100/ffffff/receipt.png',

  search:
    'https://img.icons8.com/ios-filled/100/ffffff/search--v1.png',

  close:
    'https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png',

  sync:
    'https://img.icons8.com/ios-filled/100/ffffff/synchronize.png',

  stock:
    'https://img.icons8.com/ios-filled/100/ffffff/warehouse.png',

  hold:
    'https://img.icons8.com/ios-filled/100/ffffff/clock--v1.png',

  truck:
    'https://img.icons8.com/ios-filled/100/ffffff/in-transit.png',

  lock:
    'https://img.icons8.com/ios-filled/100/ffffff/lock.png',

  related:
    'https://img.icons8.com/ios-filled/100/ffffff/box.png',

  cart:
    'https://img.icons8.com/ios-filled/100/ffffff/shopping-cart.png',

  headset:
    'https://img.icons8.com/ios-filled/100/ffffff/headset.png',

  arrowRight:
    'https://img.icons8.com/ios-filled/100/ffffff/right.png',

  product:
    'https://img.icons8.com/ios-filled/100/ffffff/product.png',
};

/* =========================================================
   DUMMY ONLINE IMAGES
========================================================= */

const IMAGES = {
  merchant:
    'https://picsum.photos/seed/localhub-hardware-shop/900/500',

  mainProduct:
    'https://picsum.photos/seed/localhub-paint-main/350/350',

  related1:
    'https://picsum.photos/seed/localhub-interior-product/350/260',

  related2:
    'https://picsum.photos/seed/localhub-waterproofing/350/260',
};

/* =========================================================
   MAIN SCREEN
========================================================= */

const ServiceDetail = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Products (Live Stock)');
  const [search, setSearch] = useState('Asian Paints Apex 20L');

  const tabs = ['Overview', 'Products (Live Stock)', 'Services'];

  const relatedItems = [
    {
      id: 1,
      image: IMAGES.related1,
      category: 'Interior Luxury',
      name: 'Berger Silk Glamour',
      price: '₹2,450',
      stock: '5 left',
    },
    {
      id: 2,
      image: IMAGES.related2,
      category: 'Waterproofing',
      name: 'Dr. Fixit Super Latex',
      price: '₹1,150',
      stock: '12 left',
    },
  ];

  const handleBack = () => {
    if (navigation?.goBack) {
      navigation.goBack();
    }
  };

  const handleCall = () => {
    console.log('Call Store');
  };

  const handleChat = () => {
    console.log('Open In-App Chat');
  };

  const handleWhatsapp = () => {
    console.log('Open WhatsApp');
  };

  const handleNavigate = () => {
    console.log('Navigate to store');
  };

  const handleHold = () => {
    console.log('Hold product for 2 hours');
  };

  const handleDelivery = () => {
    console.log('Request Delivery');
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

              <View style={styles.headerShield}>
                <Image
                  source={{ uri: ICONS.shield }}
                  style={styles.headerShieldIcon}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.headerTitle}>
                Service Detail
              </Text>
            </View>

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

          {/* =================================================
              MERCHANT HERO IMAGE
          ================================================= */}

          <View style={styles.heroContainer}>
            <Image
              source={{ uri: IMAGES.merchant }}
              style={styles.heroImage}
              resizeMode="cover"
            />

            <View style={styles.heroOverlay} />

            <View style={styles.liveBadge}>
              <View style={styles.liveDot} />

              <Text style={styles.liveText}>
                LIVE INVENTORY SYNC
              </Text>
            </View>

            <TouchableOpacity
              style={styles.bookmarkButton}
              activeOpacity={0.8}
            >
              <Image
                source={{ uri: ICONS.bookmark }}
                style={styles.bookmarkIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <Text style={styles.heroBrand}>
              LOCALHUB
            </Text>
          </View>

          {/* =================================================
              BUSINESS INFO
          ================================================= */}

          <View style={styles.businessSection}>
            <View style={styles.partnerRow}>
              <Image
                source={{ uri: ICONS.verified }}
                style={styles.partnerIcon}
                resizeMode="contain"
              />

              <Text style={styles.partnerText}>
                Verified Merchant Partner
              </Text>
            </View>

            <View style={styles.businessTitleRow}>
              <Text
                style={styles.businessTitle}
                numberOfLines={1}
              >
                Patel Hardware & Building Supplies
              </Text>

              <View style={styles.businessTypeIcon}>
                <Image
                  source={{ uri: ICONS.store }}
                  style={styles.businessTypeImage}
                  resizeMode="contain"
                />
              </View>
            </View>

            <View style={styles.ratingStatusRow}>
              <View style={styles.ratingRow}>
                <Image
                  source={{ uri: ICONS.star }}
                  style={styles.starIcon}
                  resizeMode="contain"
                />

                <Text style={styles.ratingValue}>
                  4.8
                </Text>

                <Text style={styles.ratingReviews}>
                  (280+)
                </Text>
              </View>

              <View style={styles.statusDivider} />

              <View style={styles.openRow}>
                <Image
                  source={{ uri: ICONS.open }}
                  style={styles.openIcon}
                  resizeMode="contain"
                />

                <Text style={styles.openText}>
                  Open Now
                </Text>

                <Text style={styles.closeTime}>
                  • Closes 9:00 PM
                </Text>
              </View>
            </View>

            <View style={styles.addressRow}>
              <Image
                source={{ uri: ICONS.location }}
                style={styles.addressIcon}
                resizeMode="contain"
              />

              <Text style={styles.addressText}>
                350m • Bodakdev, SG Highway
              </Text>
            </View>
          </View>

          {/* =================================================
              ACTION BUTTONS
          ================================================= */}

          <View style={styles.actionRow}>
            <TouchableOpacity
              style={styles.actionItem}
              activeOpacity={0.8}
              onPress={handleCall}
            >
              <View style={styles.actionIconBox}>
                <Image
                  source={{ uri: ICONS.call }}
                  style={styles.actionIcon}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.actionText}>
                Call Store
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionItem}
              activeOpacity={0.8}
              onPress={handleChat}
            >
              <View style={styles.actionIconBox}>
                <Image
                  source={{ uri: ICONS.chat }}
                  style={styles.actionIcon}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.actionText}>
                In-App Chat
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionItem}
              activeOpacity={0.8}
              onPress={handleWhatsapp}
            >
              <View style={styles.actionIconBox}>
                <Image
                  source={{ uri: ICONS.whatsapp }}
                  style={[
                    styles.actionIcon,
                    styles.whatsappIcon,
                  ]}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.actionText}>
                WhatsApp
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionItem}
              activeOpacity={0.8}
              onPress={handleNavigate}
            >
              <View style={styles.actionIconBox}>
                <Image
                  source={{ uri: ICONS.navigate }}
                  style={[
                    styles.actionIcon,
                    styles.navigateIcon,
                  ]}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.actionText}>
                Navigate (5m)
              </Text>
            </TouchableOpacity>
          </View>

          {/* =================================================
              PAYMENT / DELIVERY STRIP
          ================================================= */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.benefitRow}
          >
            <View style={styles.benefitItem}>
              <Image
                source={{ uri: ICONS.card }}
                style={styles.benefitIcon}
                resizeMode="contain"
              />

              <Text style={styles.benefitText}>
                UPI / Cards Accepted
              </Text>
            </View>

            <View style={styles.benefitItem}>
              <Image
                source={{ uri: ICONS.delivery }}
                style={styles.benefitIcon}
                resizeMode="contain"
              />

              <Text style={styles.benefitText}>
                Same-Day SG Delivery
              </Text>
            </View>

            <View style={styles.benefitItem}>
              <Image
                source={{ uri: ICONS.gst }}
                style={styles.benefitIcon}
                resizeMode="contain"
              />

              <Text style={styles.benefitText}>
                GST Invoice
              </Text>
            </View>
          </ScrollView>

          {/* =================================================
              TABS
          ================================================= */}

          <View style={styles.tabContainer}>
            {tabs.map(tab => {
              const active = activeTab === tab;

              return (
                <TouchableOpacity
                  key={tab}
                  style={[
                    styles.tabButton,
                    active && styles.tabButtonActive,
                  ]}
                  onPress={() => setActiveTab(tab)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.tabText,
                      active && styles.tabTextActive,
                    ]}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* =================================================
              SEARCH PRODUCT
          ================================================= */}

          <View style={styles.searchContainer}>
            <Image
              source={{ uri: ICONS.search }}
              style={styles.searchIcon}
              resizeMode="contain"
            />

            <TextInput
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
              placeholder="Search product"
              placeholderTextColor="#758A9F"
            />

            <TouchableOpacity>
              <Image
                source={{ uri: ICONS.close }}
                style={styles.searchCloseIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/* =================================================
              POS SYNC STATUS
          ================================================= */}

          <View style={styles.syncRow}>
            <View style={styles.syncLeft}>
              <Image
                source={{ uri: ICONS.sync }}
                style={styles.syncIcon}
                resizeMode="contain"
              />

              <Text style={styles.syncText}>
                Connecting to store POS terminal
              </Text>
            </View>

            <Text style={styles.syncPercent}>
              100% Match Found
            </Text>
          </View>

          {/* =================================================
              STOCK BAR
          ================================================= */}

          <View style={styles.stockBar}>
            <View style={styles.stockLeft}>
              <View style={styles.stockDot} />

              <Text style={styles.stockText}>
                1 in Stock
              </Text>

              <Text style={styles.stockSubtext}>
                (5 units remaining)
              </Text>
            </View>

            <View style={styles.stockRight}>
              <Image
                source={{ uri: ICONS.sync }}
                style={styles.stockSyncIcon}
                resizeMode="contain"
              />

              <Text style={styles.stockUpdated}>
                Updated 12 mins ago
              </Text>
            </View>
          </View>

          {/* =================================================
              MAIN PRODUCT CARD
          ================================================= */}

          <View style={styles.productCard}>
            <View style={styles.productMainRow}>
              <View style={styles.productImageArea}>
                <Image
                  source={{ uri: IMAGES.mainProduct }}
                  style={styles.productImage}
                  resizeMode="cover"
                />

                <View style={styles.productSizeBadge}>
                  <Text style={styles.productSizeText}>
                    20 LITRE
                  </Text>
                </View>
              </View>

              <View style={styles.productInfo}>
                <Text style={styles.productSmallTitle}>
                  Exterior Wall Shield • Asian & Shield 5
                </Text>

                <Text
                  style={styles.productName}
                  numberOfLines={2}
                >
                  Asian Paints Apex Ultima
                </Text>

                <Text
                  style={styles.productDescription}
                  numberOfLines={2}
                >
                  High-durability anti-fungal silicone...
                </Text>

                <View style={styles.productPriceRow}>
                  <Text style={styles.productPrice}>
                    ₹4,850
                  </Text>

                  <Text style={styles.productOldPrice}>
                    ₹5,200
                  </Text>

                  <Text style={styles.discountText}>
                    7% OFF
                  </Text>
                </View>
              </View>
            </View>

            {/* ACTION BUTTONS */}

            <View style={styles.productActionRow}>
              <TouchableOpacity
                style={styles.holdButton}
                activeOpacity={0.85}
                onPress={handleHold}
              >
                <Image
                  source={{ uri: ICONS.hold }}
                  style={styles.productButtonIcon}
                  resizeMode="contain"
                />

                <Text style={styles.holdButtonText}>
                  Hold for 2 hrs
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deliveryButton}
                activeOpacity={0.85}
                onPress={handleDelivery}
              >
                <Image
                  source={{ uri: ICONS.truck }}
                  style={styles.deliveryButtonIcon}
                  resizeMode="contain"
                />

                <Text style={styles.deliveryButtonText}>
                  Request{'\n'}Delivery
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.productGuarantee}>
              <Image
                source={{ uri: ICONS.lock }}
                style={styles.guaranteeIcon}
                resizeMode="contain"
              />

              <Text style={styles.guaranteeText}>
                Zero hold fees • Verified physical stock reserved instantly
              </Text>
            </View>
          </View>

          {/* =================================================
              RELATED ITEMS
          ================================================= */}

          <View style={styles.relatedHeader}>
            <View style={styles.relatedTitleRow}>
              <Image
                source={{ uri: ICONS.related }}
                style={styles.relatedIcon}
                resizeMode="contain"
              />

              <Text style={styles.relatedTitle}>
                Related In-Stock Items
              </Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.viewAllText}>
                View All (4) ›
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.relatedGrid}>
            {relatedItems.map(item => (
              <View
                key={item.id}
                style={styles.relatedCard}
              >
                <View style={styles.relatedImageWrapper}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.relatedImage}
                    resizeMode="cover"
                  />

                  <View style={styles.liveStockBadge}>
                    <View style={styles.liveStockDot} />

                    <Text style={styles.liveStockText}>
                      Live Stock
                    </Text>
                  </View>
                </View>

                <Text style={styles.relatedCategory}>
                  {item.category}
                </Text>

                <Text
                  style={styles.relatedName}
                  numberOfLines={1}
                >
                  {item.name}
                </Text>

                <View style={styles.relatedPriceRow}>
                  <Text style={styles.relatedPrice}>
                    {item.price}
                  </Text>

                  <Text style={styles.relatedStock}>
                    {item.stock}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.addOrderButton}
                  activeOpacity={0.8}
                >
                  <Image
                    source={{ uri: ICONS.cart }}
                    style={styles.addOrderIcon}
                    resizeMode="contain"
                  />

                  <Text style={styles.addOrderText}>
                    Add to Order
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* =================================================
              HELP CARD
          ================================================= */}

          <View style={styles.helpCard}>
            <View style={styles.helpLeft}>
              <View style={styles.helpIconBox}>
                <Image
                  source={{ uri: ICONS.headset }}
                  style={styles.helpIcon}
                  resizeMode="contain"
                />
              </View>

              <View>
                <Text style={styles.helpTitle}>
                  Need custom shade tinting?
                </Text>

                <Text style={styles.helpSubtitle}>
                  In-store color mixing desk is active
                </Text>

                <Text style={styles.helpStatus}>
                  now
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.askDeskButton}
              activeOpacity={0.85}
            >
              <Text style={styles.askDeskText}>
                Ask{'\n'}Desk
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ServiceDetail;

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
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    width: 13,
    height: 13,
    tintColor: '#C4D1DE',
  },

  headerShield: {
    width: 17,
    height: 17,
    borderRadius: 5,
    backgroundColor: '#2F6FD6',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2,
    marginRight: 5,
  },

  headerShieldIcon: {
    width: 9,
    height: 9,
    tintColor: '#FFFFFF',
  },

  headerTitle: {
    color: '#DCE5EE',
    fontSize: 9,
    fontWeight: '800',
  },

  profileButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#AFC7FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileIcon: {
    width: 12,
    height: 12,
    tintColor: '#071A2C',
  },

  /* =====================================================
     HERO
  ===================================================== */

  heroContainer: {
    height: 118,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },

  heroImage: {
    width: '100%',
    height: '100%',
  },

  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(3,15,26,0.25)',
  },

  liveBadge: {
    position: 'absolute',
    top: 7,
    left: 7,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16,185,129,0.18)',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 8,
  },

  liveDot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 3,
  },

  liveText: {
    color: '#36DBA6',
    fontSize: 5,
    fontWeight: '800',
  },

  bookmarkButton: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 25,
    height: 25,
    borderRadius: 7,
    backgroundColor: 'rgba(4,19,31,0.72)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bookmarkIcon: {
    width: 12,
    height: 12,
    tintColor: '#C5D5E4',
  },

  heroBrand: {
    position: 'absolute',
    right: 29,
    bottom: 13,
    color: '#82A7C7',
    fontSize: 5,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  /* =====================================================
     BUSINESS INFO
  ===================================================== */

  businessSection: {
    paddingTop: 7,
    paddingHorizontal: 2,
  },

  partnerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },

  partnerIcon: {
    width: 10,
    height: 10,
    tintColor: '#10B981',
    marginRight: 3,
  },

  partnerText: {
    color: '#10B981',
    fontSize: 6,
    fontWeight: '700',
  },

  businessTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  businessTitle: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    marginRight: 7,
  },

  businessTypeIcon: {
    width: 31,
    height: 31,
    borderRadius: 7,
    backgroundColor: '#163652',
    justifyContent: 'center',
    alignItems: 'center',
  },

  businessTypeImage: {
    width: 16,
    height: 16,
    tintColor: '#AFC8FF',
  },

  ratingStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  starIcon: {
    width: 10,
    height: 10,
    marginRight: 2,
  },

  ratingValue: {
    color: '#F5B94B',
    fontSize: 6,
    fontWeight: '800',
  },

  ratingReviews: {
    color: '#8296A9',
    fontSize: 5,
    marginLeft: 2,
  },

  statusDivider: {
    width: 1,
    height: 9,
    backgroundColor: '#31485D',
    marginHorizontal: 6,
  },

  openRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  openIcon: {
    width: 8,
    height: 8,
    tintColor: '#10B981',
    marginRight: 3,
  },

  openText: {
    color: '#10B981',
    fontSize: 6,
    fontWeight: '700',
  },

  closeTime: {
    color: '#8498AB',
    fontSize: 5,
    marginLeft: 3,
  },

  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  addressIcon: {
    width: 9,
    height: 9,
    tintColor: '#6DA7FF',
    marginRight: 3,
  },

  addressText: {
    color: '#C4D1DD',
    fontSize: 6,
  },

  /* =====================================================
     ACTION BUTTONS
  ===================================================== */

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 7,
  },

  actionItem: {
    width: '24%',
    backgroundColor: '#102438',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },

  actionIconBox: {
    width: 28,
    height: 28,
    borderRadius: 7,
    backgroundColor: '#18344E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },

  actionIcon: {
    width: 13,
    height: 13,
    tintColor: '#81ADFF',
  },

  whatsappIcon: {
    tintColor: '#10B981',
  },

  navigateIcon: {
    tintColor: '#F59E0B',
  },

  actionText: {
    color: '#E2EAF2',
    fontSize: 5,
    fontWeight: '600',
  },

  /* =====================================================
     BENEFITS
  ===================================================== */

  benefitRow: {
    gap: 11,
    paddingBottom: 8,
  },

  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  benefitIcon: {
    width: 9,
    height: 9,
    tintColor: '#59A2FF',
    marginRight: 3,
  },

  benefitText: {
    color: '#D0DAE4',
    fontSize: 5,
    fontWeight: '600',
  },

  /* =====================================================
     TABS
  ===================================================== */

  tabContainer: {
    height: 29,
    flexDirection: 'row',
    backgroundColor: '#071A2C',
    borderRadius: 8,
    marginBottom: 7,
  },

  tabButton: {
    flex: 1,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabButtonActive: {
    backgroundColor: '#AFC8FF',
  },

  tabText: {
    color: '#9AADC0',
    fontSize: 5,
    fontWeight: '600',
  },

  tabTextActive: {
    color: '#071A2C',
    fontWeight: '800',
  },

  /* =====================================================
     SEARCH
  ===================================================== */

  searchContainer: {
    height: 35,
    backgroundColor: '#102438',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
  },

  searchIcon: {
    width: 11,
    height: 11,
    tintColor: '#8FA4B8',
    marginRight: 6,
  },

  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 7,
    paddingVertical: 0,
  },

  searchCloseIcon: {
    width: 10,
    height: 10,
    tintColor: '#92A7BA',
  },

  /* =====================================================
     SYNC
  ===================================================== */

  syncRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
    marginBottom: 6,
  },

  syncLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  syncIcon: {
    width: 8,
    height: 8,
    tintColor: '#10B981',
    marginRight: 3,
  },

  syncText: {
    color: '#89A0B4',
    fontSize: 5,
  },

  syncPercent: {
    color: '#10B981',
    fontSize: 5,
    fontWeight: '700',
  },

  /* =====================================================
     STOCK
  ===================================================== */

  stockBar: {
    backgroundColor: '#0A2831',
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  stockLeft: {
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

  stockText: {
    color: '#10B981',
    fontSize: 6,
    fontWeight: '700',
  },

  stockSubtext: {
    color: '#78A599',
    fontSize: 4,
    marginLeft: 2,
  },

  stockRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  stockSyncIcon: {
    width: 8,
    height: 8,
    tintColor: '#10B981',
    marginRight: 3,
  },

  stockUpdated: {
    color: '#7E9B95',
    fontSize: 4,
  },

  /* =====================================================
     PRODUCT CARD
  ===================================================== */

  productCard: {
    backgroundColor: '#102438',
    borderRadius: 8,
    padding: 7,
    marginBottom: 9,
  },

  productMainRow: {
    flexDirection: 'row',
  },

  productImageArea: {
    width: 79,
    height: 91,
    borderRadius: 6,
    overflow: 'hidden',
    position: 'relative',
  },

  productImage: {
    width: '100%',
    height: '100%',
  },

  productSizeBadge: {
    position: 'absolute',
    bottom: 4,
    left: 4,
    backgroundColor: '#4B6F87',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 3,
  },

  productSizeText: {
    color: '#FFFFFF',
    fontSize: 4,
    fontWeight: '700',
  },

  productInfo: {
    flex: 1,
    paddingLeft: 7,
  },

  productSmallTitle: {
    color: '#B7C6D4',
    fontSize: 5,
  },

  productName: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
    marginTop: 3,
  },

  productDescription: {
    color: '#8DA1B4',
    fontSize: 5,
    lineHeight: 7,
    marginTop: 3,
  },

  productPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  productPrice: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
  },

  productOldPrice: {
    color: '#74899D',
    fontSize: 5,
    textDecorationLine: 'line-through',
    marginLeft: 4,
  },

  discountText: {
    color: '#10B981',
    fontSize: 5,
    fontWeight: '800',
    marginLeft: 5,
  },

  productActionRow: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 8,
  },

  holdButton: {
    flex: 1,
    height: 38,
    borderRadius: 7,
    backgroundColor: '#18344E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  productButtonIcon: {
    width: 11,
    height: 11,
    tintColor: '#9EBEFF',
    marginRight: 4,
  },

  holdButtonText: {
    color: '#E0E8EF',
    fontSize: 7,
    fontWeight: '700',
  },

  deliveryButton: {
    width: 88,
    height: 38,
    borderRadius: 7,
    backgroundColor: '#AFC8FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  deliveryButtonIcon: {
    width: 12,
    height: 12,
    tintColor: '#071A2C',
    marginRight: 5,
  },

  deliveryButtonText: {
    color: '#071A2C',
    fontSize: 6,
    lineHeight: 8,
    fontWeight: '800',
  },

  productGuarantee: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  guaranteeIcon: {
    width: 8,
    height: 8,
    tintColor: '#10B981',
    marginRight: 3,
  },

  guaranteeText: {
    color: '#AFC0CE',
    fontSize: 4,
  },

  /* =====================================================
     RELATED
  ===================================================== */

  relatedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },

  relatedTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  relatedIcon: {
    width: 11,
    height: 11,
    tintColor: '#78A9FF',
    marginRight: 4,
  },

  relatedTitle: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '800',
  },

  viewAllText: {
    color: '#7BA9FF',
    fontSize: 5,
    fontWeight: '700',
  },

  relatedGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9,
  },

  relatedCard: {
    width: '48.5%',
    backgroundColor: '#102438',
    borderRadius: 7,
    padding: 6,
  },

  relatedImageWrapper: {
    height: 72,
    borderRadius: 5,
    overflow: 'hidden',
    position: 'relative',
  },

  relatedImage: {
    width: '100%',
    height: '100%',
  },

  liveStockBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: 'rgba(16,185,129,0.9)',
    borderRadius: 5,
    paddingHorizontal: 4,
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },

  liveStockDot: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    marginRight: 2,
  },

  liveStockText: {
    color: '#FFFFFF',
    fontSize: 4,
    fontWeight: '700',
  },

  relatedCategory: {
    color: '#7D94A9',
    fontSize: 5,
    marginTop: 4,
  },

  relatedName: {
    color: '#FFFFFF',
    fontSize: 7,
    fontWeight: '700',
    marginTop: 2,
  },

  relatedPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },

  relatedPrice: {
    color: '#FFFFFF',
    fontSize: 7,
    fontWeight: '800',
  },

  relatedStock: {
    color: '#10B981',
    fontSize: 5,
    fontWeight: '700',
  },

  addOrderButton: {
    height: 24,
    borderRadius: 5,
    backgroundColor: '#163149',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },

  addOrderIcon: {
    width: 8,
    height: 8,
    tintColor: '#8EB2FF',
    marginRight: 3,
  },

  addOrderText: {
    color: '#D6E0E8',
    fontSize: 5,
    fontWeight: '600',
  },

  /* =====================================================
     HELP CARD
  ===================================================== */

  helpCard: {
    backgroundColor: '#102438',
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  helpLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  helpIconBox: {
    width: 29,
    height: 29,
    borderRadius: 15,
    backgroundColor: 'rgba(16,185,129,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  helpIcon: {
    width: 14,
    height: 14,
    tintColor: '#10B981',
  },

  helpTitle: {
    color: '#FFFFFF',
    fontSize: 7,
    fontWeight: '700',
  },

  helpSubtitle: {
    color: '#8FA3B5',
    fontSize: 5,
    marginTop: 1,
  },

  helpStatus: {
    color: '#10B981',
    fontSize: 5,
  },

  askDeskButton: {
    width: 40,
    height: 30,
    borderRadius: 6,
    backgroundColor: '#18344E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  askDeskText: {
    color: '#DCE5EE',
    fontSize: 5,
    lineHeight: 7,
    textAlign: 'center',
    fontWeight: '700',
  },

  bottomSpace: {
    height: 20,
  },
});