import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { CONSTANTS } from '../../utils/constants';

const NotificationCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardcontainer}>
        <View
          style={[
            styles.iconContainer,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              backgroundColor:
                item.type === 'promotion'
                  ? '#FFF9E6'
                  : item.type === 'cancelled'
                  ? '#FFEFED'
                  : '#E7F9F5',
            },
          ]}
        >
          <MaterialIcons
            name={item.icon}
            size={20}
            color={
              item.type === 'promotion'
                ? '#FFC700'
                : item.type === 'cancelled'
                ? '#FF6347'
                : '#13C296'
            }
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.message}>{item.message}</Text>
        </View>
        <View style={styles.rightInfo}>
          <View style={styles.dotContainer}>
            {item.isRead === false && (
              <Octicons
                name="dot-fill"
                size={18}
                color={CONSTANTS.THEME.PRIMARY_COLOR}
              />
            )}
          </View>
          <View style={styles.dateTimeContainer}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;
