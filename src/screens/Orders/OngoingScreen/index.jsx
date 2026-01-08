import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { OngoingList } from '../../../utils/OrderCardList';
import { styles } from './style';
import AddOnsList from '../../../utils/addOnsList';
const OngoingScreen = () => {
  const [count, setCount] = useState(1);
  const Increment = id => {
    if (count >= 1 && count < 5) {
      setCount(count + 1);
    }
  };
  const Decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const renderItem = ({ item }) => (
    <View style={styles.cardContainer} key={item.id}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.foodNameAndOrderID}>
          <Text style={styles.foodName}>{item.firstFoodName}</Text>
          <Text style={styles.orderID}>{'#12345'}</Text>
        </View>
        <View>
          {AddOnsList.map(addons => (
            <View key={addons.id} style={styles.addOnsContainer}>
              <Text>{addons.foodName}</Text>
              <View style={styles.qtyContainer}>
                <TouchableOpacity onPress={() => Decrement(addons.id)}>
                  <Image
                    source={require('../../../assets/icons/delete.png')}
                    style={styles.icons}
                  />
                </TouchableOpacity>
                <Text style={styles.countText}>{count}</Text>
                <TouchableOpacity onPress={() => Increment(addons.id)}>
                  <Image
                    source={require('../../../assets/icons/add.png')}
                    style={styles.icons}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.mainContainer}>
      <Text>OngoingScreen</Text>
      <FlatList
        data={OngoingList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default OngoingScreen;
