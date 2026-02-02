import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../../utils/constants';
export const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1.5,
    width: '90%',
    alignSelf: 'center',
    borderStyle: 'dashed',
    marginVertical: 4,
    backgroundColor: CONSTANTS.colors.WHITE_COLOR,
    borderRadius: 15,
    borderColor: CONSTANTS.colors.LIGHT_GRAY_COLOR_1,
    gap: 10,
    padding: 10,
  },
  image: {
    height: 120,
    width: '100%',
    borderRadius: 10,
  },
  completed: {},
  inCompleted: {},
});
