import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './style';
const TrackingCard = () => {
  return (
    <View style={styles.cardMainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          <Image
            source={require('../../assets/icons/fast-shipping.png')}
            style={styles.deliveryLogo}
          />
          <Text style={styles.deliveryText}>Out for Delivery</Text>
        </View>
        <View>
          <Text style={styles.orderID}>#123456</Text>
        </View>
      </View>
      <View style={styles.progressContainer}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={[styles.line, styles.activeLine]} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={[styles.line, styles.activeLine]} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.line} />
        <View style={styles.dot} />
        <View />
      </View>
      <View style={styles.progressLabels}>
        <Text style={styles.label}>Placed</Text>
        <Text style={styles.label}>Preparing</Text>
        <Text style={styles.label}>On the way</Text>
        <Text style={styles.label}>Delivered</Text>
      </View>
      <Text style={styles.etaText}>Arriving in 20–30 mins</Text>
      <Text style={styles.subText}>
        Your tiffin is on the way to your location
      </Text>
      <TouchableOpacity activeOpacity={0.6} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Track Live →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrackingCard;
