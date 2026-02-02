import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { OngoingList } from '../../../utils/OrderCardList';
import { styles } from './style';
import AddOnsList from '../../../utils/addOnsList';
import OrdersButtons from '../../../components/OrdersButtons/OrdersButtons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
const OngoingScreen = () => {
  const tabBarHeight = useBottomTabBarHeight();

  const [counts, setCounts] = useState({});

  const Increment = useCallback((cardId, addonId) => {
    setCounts(prev => {
      const current = prev?.[cardId]?.[addonId] || 1;

      if (current >= 5) return prev;

      return {
        ...prev,
        [cardId]: {
          ...prev[cardId],
          [addonId]: current + 1,
        },
      };
    });
  }, []);

  const Decrement = useCallback((cardId, addonId) => {
    setCounts(prev => {
      const current = prev?.[cardId]?.[addonId] || 1;
      if (current <= 1) return prev;

      return {
        ...prev,
        [cardId]: {
          ...prev[cardId],
          [addonId]: current - 1,
        },
      };
    });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.cardContainer} key={item.id}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.foodNameAndOrderID}>
          <Text style={styles.foodName}>{item.firstFoodName}</Text>
          <Text style={styles.orderID}>{'#12345'}</Text>
        </View>
        {AddOnsList.map(addons => (
          <View key={addons.id} style={styles.addOnsContainer}>
            <Text>{addons.foodName}</Text>
            <View style={styles.qtyContainer}>
              <TouchableOpacity onPress={() => Decrement(item.id, addons.id)}>
                <Image
                  source={require('../../../assets/icons/delete.png')}
                  style={styles.icons}
                />
              </TouchableOpacity>
              <Text style={styles.countText}>
                {counts?.[item.id]?.[addons.id] || 1}
              </Text>
              <TouchableOpacity onPress={() => Increment(item.id, addons.id)}>
                <Image
                  source={require('../../../assets/icons/add.png')}
                  style={styles.icons}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <View style={styles.priceAndQtyContainer}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.tiffineQtyText}>{'01 Items'}</Text>
        </View>
        <View>
          <OrdersButtons title1={'Track Order'} title2={'Cancel'} />
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={OngoingList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          paddingBottom: tabBarHeight + 20,
        }}
      />
    </View>
  );
};

export default OngoingScreen;
