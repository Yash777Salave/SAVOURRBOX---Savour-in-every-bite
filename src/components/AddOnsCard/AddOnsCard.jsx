import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import style from './style';
import AddOnsList from '../../utils/addOnsList';
import { CONSTANTS } from '../../utils/constants';
const AddOnsCard = () => {
  const [isClickedItem, setIsClickedItem] = useState({});
  const Increment = id => {
    setIsClickedItem(prev => ({
      ...prev,
      [id]: true,
    }));
  };
  const Decrement = id => {
    setIsClickedItem(prev => ({
      ...prev,
      [id]: false,
    }));
  };
  const renderItem = ({ item }) => {
    return (
      <View style={{}}>
        <View style={style.mainCardContainer}>
          <Image source={item.image} style={style.images} />
          <View
            style={{
              backgroundColor: CONSTANTS.colors.BLACK_COLOR,
              borderRadius: 15,
            }}
          >
            <Text style={style.foodNameText}>{item.foodName}</Text>
            <View style={style.priceAndPlusContainer}>
              <Text style={style.priceText}>{item.price}</Text>
              {isClickedItem[item.id] ? (
                <View style={style.incrementCount}>
                  <TouchableOpacity onPress={() => Decrement(item.id)}>
                    <Image
                      source={require('../../assets/icons/delete.png')}
                      style={style.Plusicon}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity onPress={() => Increment(item.id)}>
                  <Image source={item.addButton} style={style.Plusicon} />
                </TouchableOpacity>
              )}
              {/* <TouchableOpacity onPress={Increment}>
                <Image source={item.addButton} style={style.Plusicon} />
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={AddOnsList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={{
          //   borderColor: 'red',
          //   borderWidth: 4,
          alignSelf: 'center',
          marginTop: 10,
          //   margin: 10,
        }}
      />
    </View>
  );
};

export default AddOnsCard;
