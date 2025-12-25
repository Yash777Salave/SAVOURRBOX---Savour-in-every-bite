import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import style from './style';
import AddOnsList from '../../utils/addOnsList';
import { CONSTANTS } from '../../utils/constants';
const AddOnsCard = () => {
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
              <TouchableOpacity>
                <Image source={item.addButton} style={style.Plusicon} />
              </TouchableOpacity>
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
