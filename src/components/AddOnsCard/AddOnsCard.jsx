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
import { useDispatch, useSelector } from 'react-redux';
import { addAddons, removeAddons } from '../../Redux/Slices/addOnsSlice';
const AddOnsCard = () => {
  const dispatch = useDispatch();
  const addOnItem = useSelector(state => state.addOns);
  console.log('item added from Home --- > ', addOnItem);

  const [isClickedItem, setIsClickedItem] = useState({});
  const Increment = item => {
    setIsClickedItem(prev => ({
      ...prev,
      [item?.id]: true,
    }));
    dispatch(addAddons(item));
  };
  const Decrement = item => {
    setIsClickedItem(prev => ({
      ...prev,
      [item?.id]: false,
    }));
    dispatch(removeAddons(item));
  };
  const renderItem = ({ item }) => {
    return (
      <View style={{}}>
        <View style={style.mainCardContainer}>
          <Image source={item?.image} style={style.images} />
          <View
            style={{
              backgroundColor: CONSTANTS.colors.BLACK_COLOR,
              borderRadius: 15,
            }}
          >
            <Text style={style.foodNameText}>{item?.foodName}</Text>
            <View style={style.priceAndPlusContainer}>
              <Text style={style.priceText}>{item?.price}</Text>
              {isClickedItem[item?.id] ? (
                <View style={style.incrementCount}>
                  <TouchableOpacity onPress={() => Decrement(item)}>
                    <Image
                      source={require('../../assets/icons/delete.png')}
                      style={style.Plusicon}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity onPress={() => Increment(item)}>
                  <Image source={item?.addButton} style={style.Plusicon} />
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
        keyExtractor={item => item?.id}
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
