import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { OngoingList } from '../../../utils/OrderCardList';
const OngoingScreen = () => {
  const renderItem = ({ item }) => (
    <View key={item.id}>
      <Text>{item.id}</Text>
    </View>
  );
  return (
    <View>
      <Text>OngoingScreen</Text>
      <FlatList
        data={OngoingList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default OngoingScreen;

const styles = StyleSheet.create({});
