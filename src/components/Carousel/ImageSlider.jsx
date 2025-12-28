import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { sliderImages } from '../../utils/sliderImeges';
import { styles } from './style';
const ImageSlider = () => {
  const width = Dimensions.get('screen').width;
  const renderItem = ({ item }) => {
    return (
      <View>
        <Image source={item.image} style={styles.images} />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={sliderImages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

export default ImageSlider;
