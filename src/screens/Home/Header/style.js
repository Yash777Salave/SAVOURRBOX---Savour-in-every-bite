import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../../utils/constants';
// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     // marginTop: 20,
//     // padding: 10,
//     margin: 15,
//   },
//   bgImage: {
//     height: 25,
//     width: 25,
//   },
//   cartImage: {
//     backgroundColor: 'black',
//     height: 40,
//     width: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 50,
//     position: 'absolute',
//   },
// });

const styles = StyleSheet.create({
  cartContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartImage: {
    width: 35,
    height: 35,
    tintColor: '#000', // Adjust the color of the cart if needed
    borderRadius: 50,
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -7,
    backgroundColor: 'red',
    width: 25,
    height: 25,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default styles;
