import { SectionList, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import AppBar from '../../components/AppBar/AppBar';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { CONSTANTS } from '../../utils/constants';
import { NotificationList } from '../../utils/NotificationList';
import NotificationCard from '../../components/NotificationCard/NotificationCard';
const Notification = () => {
  const [search, setSeacrh] = useState('');
  const [filteredData, setFilteredData] = useState(NotificationList);

  const searchNotification = text => {
    setSeacrh(text);

    const filterData = NotificationList.map(section => ({
      ...section,

      data: section.data.filter(notification =>
        notification.title.toLowerCase().includes(text.toLowerCase()),
      ),
    })).filter(section => section.data.length > 0);

    setFilteredData(filterData);
  };
  return (
    <View style={styles.container}>
      <AppBar text={'Notification'} />
      <View style={styles.mainNotificationContainer}>
        <View style={styles.searchBox}>
          <EvilIcons name="search" size={30} color="#BABDC1" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor={CONSTANTS.colors.LIGHT_GRAY_COLOR}
            value={search}
            onChangeText={text => searchNotification(text)}
            multiline={false}
          />
        </View>
        <View style={{ flex: 1 }}>
          <SectionList
            // style={{ flex: 1 }}
            sections={filteredData}
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
