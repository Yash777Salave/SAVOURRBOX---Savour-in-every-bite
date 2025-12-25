import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../Header/Header';
import HeadingText from '../../../components/FeaturesHeading/HeadingText';
import HeroCard from '../../../components/HeroCard/HeroCard';
const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Header />
      </View>
      <ScrollView>
        <HeadingText heading={'Today’s Tiffin'} />
        <View>
          <HeroCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    // borderWidth: 1,
    margin: 10,
  },
});
