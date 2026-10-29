import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NotificationCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardcontainer}>
        <View
          style={[
            styles.iconContainer,
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
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.message}>{item.message}</Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;
