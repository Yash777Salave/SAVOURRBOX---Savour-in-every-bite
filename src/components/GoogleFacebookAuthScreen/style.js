import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../utils/constants';
export const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'center',
  },
  iconsContainer: {
    padding: 10,
    justifyContent: 'center',
    borderRadius: 10,
    width: '35%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    elevation: 6,
    backgroundColor: '#fff',
  },
  //   iconsContainer: {
  //     // borderWidth: 1,
  //     padding: 10,
  //     borderRadius: 10,
  //     width: '40%',
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     gap: 10,

  //     //   // iOS Shadow
  //     //   shadowColor: '#000',
  //     //   shadowOffset: { width: 0, height: 4 },
  //     //   shadowOpacity: 0.25,
  //     //   shadowRadius: 6,
  //     // Android Shadow
  //     elevation: 6,
  //     backgroundColor: '#fff',
  //   },

  icons: {
    height: '100%',
    width: '100%',
  },
  iconsImageContainer: {
    height: 25,
    width: 25,
  },
  iconsTexts: {
    fontSize: CONSTANTS.fontSize.fontSize15,
  },
});
