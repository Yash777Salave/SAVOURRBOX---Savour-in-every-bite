import { Dimensions, StyleSheet } from 'react-native';
import { CONSTANTS } from '../../utils/constants';
const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  images: {
    height: 195,
    width: width,
  },
});
