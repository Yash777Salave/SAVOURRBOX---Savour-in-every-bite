import { SectionList, Text, TextInput, View } from 'react-native';
import React from 'react';
import styles from './style';
import AppBar from '../../components/AppBar/AppBar';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { CONSTANTS } from '../../utils/constants';
import { NotificationList } from '../../utils/NotificationList';
import NotificationCard from '../../components/NotificationCard/NotificationCard';
const Notification = () => {
  return (
    <View style={styles.container}>
      <AppBar text={'Notification'} />
      <View style={styles.mainNotificationContainer}>
        <View style={styles.searchBox}>
          <EvilIcons name="search" size={30} color="#BABDC1" />
          <TextInput
            placeholder="Search..."
            placeholderTextColor={CONSTANTS.colors.LIGHT_GRAY_COLOR}
          />
        </View>
        <View style={{ flex: 1 }}>
          <SectionList
            // style={{ flex: 1 }}
            sections={NotificationList}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (
              <View>
                <NotificationCard item={item} />
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
            showsVerticalScrollIndicator={false}
            // contentContainerStyle={{
            //   paddingBottom: 30,
            // }}
          />
        </View>
      </View>
    </View>
  );
};

export default Notification;
