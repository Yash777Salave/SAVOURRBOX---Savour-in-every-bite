import { Dimensions, StyleSheet } from 'react-native';
import { CONSTANTS } from '../../utils/constants';
const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  images: {
    height: 195,
    width: width,
  },
  dots: {
    backgroundColor: CONSTANTS.THEME.PRIMARY_COLOR,

    height: 9,
    width: 9,
    borderRadius: 10,
    // margin: 5,
    marginHorizontal: 6,
    marginTop: 10,
    marginBottom: 15,
  },
  activeDots: {
    backgroundColor: CONSTANTS.THEME.SECONDARY_COLOR,
    height: 9,
    width: 9,
    borderRadius: 10,
    // margin: 5,
    marginHorizontal: 6,
    marginTop: 10,
    marginBottom: 15,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
