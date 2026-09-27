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
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 26,
  },

  /* =====================================================
     HEADER
  ===================================================== */

  header: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: 33,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    width: 17,
    height: 17,
    tintColor: '#C4D1DE',
  },

  headerShield: {
    width: 22,
    height: 22,
    borderRadius: 7,
    backgroundColor: '#2F6FD6',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2,
    marginRight: 7,
  },

  headerShieldIcon: {
    width: 12,
    height: 12,
    tintColor: '#FFFFFF',
  },

  headerTitle: {
    color: '#DCE5EE',
    fontSize: 15,
    fontWeight: '800',
  },

  profileButton: {
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: '#AFC7FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileIcon: {
    width: 16,
    height: 16,
    tintColor: '#071A2C',
  },

  /* =====================================================
     HERO
  ===================================================== */

  heroContainer: {
    height: 153,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },

  heroImage: {
    width: '100%',
    height: '100%',
  },

  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(3,15,26,0.25)',
  },

  liveBadge: {
    position: 'absolute',
    top: 9,
    left: 9,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16,185,129,0.18)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },

  liveDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#10B981',
    marginRight: 4,
  },

  liveText: {
    color: '#36DBA6',
    fontSize: 11,
    fontWeight: '800',
  },

  bookmarkButton: {
    position: 'absolute',
    top: 9,
    right: 9,
    width: 33,
    height: 33,
    borderRadius: 9,
    backgroundColor: 'rgba(4,19,31,0.72)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bookmarkIcon: {
    width: 16,
    height: 16,
    tintColor: '#C5D5E4',
  },

  heroBrand: {
    position: 'absolute',
    right: 38,
    bottom: 17,
    color: '#82A7C7',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  /* =====================================================
     BUSINESS INFO
  ===================================================== */

  businessSection: {
    paddingTop: 9,
    paddingHorizontal: 2,
  },

  partnerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  partnerIcon: {
    width: 13,
    height: 13,
    tintColor: '#10B981',
    marginRight: 4,
  },

  partnerText: {
    color: '#10B981',
    fontSize: 12,
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
    fontSize: 22,
    fontWeight: '800',
    marginRight: 9,
  },

  businessTypeIcon: {
    width: 40,
    height: 40,
    borderRadius: 9,
    backgroundColor: '#163652',
    justifyContent: 'center',
    alignItems: 'center',
  },

  businessTypeImage: {
    width: 21,
    height: 21,
    tintColor: '#AFC8FF',
  },

  ratingStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  starIcon: {
    width: 13,
    height: 13,
    marginRight: 2,
  },

  ratingValue: {
    color: '#F5B94B',
    fontSize: 12,
    fontWeight: '800',
  },

  ratingReviews: {
    color: '#8296A9',
    fontSize: 11,
    marginLeft: 2,
  },

  statusDivider: {
    width: 1,
    height: 12,
    backgroundColor: '#31485D',
    marginHorizontal: 8,
  },

  openRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  openIcon: {
    width: 10,
    height: 10,
    tintColor: '#10B981',
    marginRight: 4,
  },

  openText: {
    color: '#10B981',
    fontSize: 12,
    fontWeight: '700',
  },

  closeTime: {
    color: '#8498AB',
    fontSize: 11,
    marginLeft: 4,
  },

  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },

  addressIcon: {
    width: 12,
    height: 12,
    tintColor: '#6DA7FF',
    marginRight: 4,
  },

  addressText: {
    color: '#C4D1DD',
    fontSize: 12,
  },

  /* =====================================================
     ACTION BUTTONS
  ===================================================== */

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13,
    marginBottom: 9,
  },

  actionItem: {
    width: '24%',
    backgroundColor: '#102438',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },

  actionIconBox: {
    width: 36,
    height: 36,
    borderRadius: 9,
    backgroundColor: '#18344E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },

  actionIcon: {
    width: 17,
    height: 17,
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
    fontSize: 11,
    fontWeight: '600',
  },

  /* =====================================================
     BENEFITS
  ===================================================== */

  benefitRow: {
    gap: 14,
    paddingBottom: 10,
  },

  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  benefitIcon: {
    width: 12,
    height: 12,
    tintColor: '#59A2FF',
    marginRight: 4,
  },

  benefitText: {
    color: '#D0DAE4',
    fontSize: 11,
    fontWeight: '600',
  },

  /* =====================================================
     TABS
  ===================================================== */

  tabContainer: {
    height: 38,
    flexDirection: 'row',
    backgroundColor: '#071A2C',
    borderRadius: 10,
    marginBottom: 9,
  },

  tabButton: {
    flex: 1,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabButtonActive: {
    backgroundColor: '#AFC8FF',
  },

  tabText: {
    color: '#9AADC0',
    fontSize: 11,
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
    height: 46,
    backgroundColor: '#102438',
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  searchIcon: {
    width: 14,
    height: 14,
    tintColor: '#8FA4B8',
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 13,
    paddingVertical: 0,
  },

  searchCloseIcon: {
    width: 13,
    height: 13,
    tintColor: '#92A7BA',
  },

  /* =====================================================
     SYNC
  ===================================================== */

  syncRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 8,
  },

  syncLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  syncIcon: {
    width: 10,
    height: 10,
    tintColor: '#10B981',
    marginRight: 4,
  },

  syncText: {
    color: '#89A0B4',
    fontSize: 11,
  },

  syncPercent: {
    color: '#10B981',
    fontSize: 11,
    fontWeight: '700',
  },

  /* =====================================================
     STOCK
  ===================================================== */

  stockBar: {
    backgroundColor: '#0A2831',
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  stockLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  stockDot: {
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: '#10B981',
    marginRight: 5,
  },

  stockText: {
    color: '#10B981',
    fontSize: 12,
    fontWeight: '700',
  },

  stockSubtext: {
    color: '#78A599',
    fontSize: 10,
    marginLeft: 2,
  },

  stockRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  stockSyncIcon: {
    width: 10,
    height: 10,
    tintColor: '#10B981',
    marginRight: 4,
  },

  stockUpdated: {
    color: '#7E9B95',
    fontSize: 10,
  },

  /* =====================================================
     PRODUCT CARD
  ===================================================== */

  productCard: {
    backgroundColor: '#102438',
    borderRadius: 14,
    padding: 9,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  productMainRow: {
    flexDirection: 'row',
  },

  productImageArea: {
    width: 103,
    height: 118,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },

  productImage: {
    width: '100%',
    height: '100%',
  },

  productSizeBadge: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    backgroundColor: '#4B6F87',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
  },

  productSizeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },

  productInfo: {
    flex: 1,
    paddingLeft: 9,
  },

  productSmallTitle: {
    color: '#B7C6D4',
    fontSize: 11,
  },

  productName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    marginTop: 4,
  },

  productDescription: {
    color: '#8DA1B4',
    fontSize: 11,
    lineHeight: 14,
    marginTop: 4,
  },

  productPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },

  productPrice: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },

  productOldPrice: {
    color: '#74899D',
    fontSize: 11,
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },

  discountText: {
    color: '#10B981',
    fontSize: 11,
    fontWeight: '800',
    marginLeft: 7,
  },

  productActionRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },

  holdButton: {
    flex: 1,
    height: 49,
    borderRadius: 9,
    backgroundColor: '#18344E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  productButtonIcon: {
    width: 14,
    height: 14,
    tintColor: '#9EBEFF',
    marginRight: 5,
  },

  holdButtonText: {
    color: '#E0E8EF',
    fontSize: 13,
    fontWeight: '700',
  },

  deliveryButton: {
    width: 114,
    height: 49,
    borderRadius: 9,
    backgroundColor: '#AFC8FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  deliveryButtonIcon: {
    width: 16,
    height: 16,
    tintColor: '#071A2C',
    marginRight: 7,
  },

  deliveryButtonText: {
    color: '#071A2C',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '800',
  },

  productGuarantee: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  guaranteeIcon: {
    width: 10,
    height: 10,
    tintColor: '#10B981',
    marginRight: 4,
  },

  guaranteeText: {
    color: '#AFC0CE',
    fontSize: 10,
  },

  /* =====================================================
     RELATED
  ===================================================== */

  relatedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  relatedTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  relatedIcon: {
    width: 14,
    height: 14,
    tintColor: '#78A9FF',
    marginRight: 5,
  },

  relatedTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },

  viewAllText: {
    color: '#7BA9FF',
    fontSize: 11,
    fontWeight: '700',
  },

  relatedGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  relatedCard: {
    width: '48.5%',
    backgroundColor: '#102438',
    borderRadius: 14,
    padding: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  relatedImageWrapper: {
    height: 94,
    borderRadius: 7,
    overflow: 'hidden',
    position: 'relative',
  },

  relatedImage: {
    width: '100%',
    height: '100%',
  },

  liveStockBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(16,185,129,0.9)',
    borderRadius: 7,
    paddingHorizontal: 5,
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },

  liveStockDot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    marginRight: 2,
  },

  liveStockText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },

  relatedCategory: {
    color: '#7D94A9',
    fontSize: 11,
    marginTop: 5,
  },

  relatedName: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 2,
  },

  relatedPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  relatedPrice: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },

  relatedStock: {
    color: '#10B981',
    fontSize: 11,
    fontWeight: '700',
  },

  addOrderButton: {
    height: 44,
    borderRadius: 14,
    backgroundColor: '#163149',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
    ...SHADOW.glow,
  },

  addOrderIcon: {
    width: 10,
    height: 10,
    tintColor: '#8EB2FF',
    marginRight: 4,
  },

  addOrderText: {
    color: '#D6E0E8',
    fontSize: 11,
    fontWeight: '600',
  },

  /* =====================================================
     HELP CARD
  ===================================================== */

  helpCard: {
    backgroundColor: '#102438',
    borderRadius: 14,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    ...SHADOW.soft,
  },

  helpLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  helpIconBox: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: 'rgba(16,185,129,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  helpIcon: {
    width: 18,
    height: 18,
    tintColor: '#10B981',
  },

  helpTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  helpSubtitle: {
    color: '#8FA3B5',
    fontSize: 11,
    marginTop: 1,
  },

  helpStatus: {
    color: '#10B981',
    fontSize: 11,
  },

  askDeskButton: {
    width: 52,
    height: 39,
    borderRadius: 8,
    backgroundColor: '#18344E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  askDeskText: {
    color: '#DCE5EE',
    fontSize: 11,
    lineHeight: 14,
    textAlign: 'center',
    fontWeight: '700',
  },

  bottomSpace: {
    height: 26,
  },
});