import { FlatList, Image, Text, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import { HistoryList } from '../../../utils/OrderCardList';
const HistoryScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.image} />
        <Text>{item.firstFoodName}</Text>
        <Text>{item.price}</Text>
        <Text>{item.status}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={HistoryList}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
      {/* <Text>HistoryScreen</Text> */}
    </View>
  );
};

export default HistoryScreen;
