import { FlatList, Image, Text, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import { HistoryList } from '../../../utils/OrderCardList';
import OrdersButtons from '../../../components/OrdersButtons/OrdersButtons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { CONSTANTS } from '../../../utils/constants';
const HistoryScreen = () => {
  const tabBarHeight = useBottomTabBarHeight();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.heading}>{item.firstFoodName}</Text>
        <View style={styles.priceDateTimeContainer}>
          <Text style={styles.price}>{item.price}</Text>
          <View style={styles.dateTimeContainer}>
            <Text style={styles.dateTime}>{item.date + ', '}</Text>
            <Text style={styles.dateTime}>{item.time}</Text>
          </View>
        </View>
        <Text
          style={
            item.status === 'Completed' ? styles.completed : styles.inCompleted
          }
        >
          {item.status}
        </Text>

        <View>
          <OrdersButtons title1={'Re-Order'} title2={'Cancel'} />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={HistoryList}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: tabBarHeight + 20,
        }}
      />
      {/* <Text>HistoryScreen</Text> */}
    </View>
  );
};

export default HistoryScreen;
