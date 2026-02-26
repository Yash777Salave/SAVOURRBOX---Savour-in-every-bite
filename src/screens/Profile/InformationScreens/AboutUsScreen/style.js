import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../../../utils/constants';
export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
    backgroundColor: CONSTANTS.THEME.PRIMARY_COLOR,
    flex: 1,
  },
  cookingIcon: {
    height: 220,
    width: 300,
    // height: 140,
    // width: 120,
    // backgroundColor: 'red',
  },
  subMainContainer: {
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 24,
    // paddingVertical: s16,
    bottom: 15,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    color: '#2C2C2C',
    textAlign: 'justify',
    fontWeight: '400',
  },
});
