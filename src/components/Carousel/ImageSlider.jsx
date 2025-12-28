import { Dimensions, FlatList, Image, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { sliderImages } from '../../utils/sliderImeges';
import { styles } from './style';

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const width = Dimensions.get('screen').width;
  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <View>
      <Image source={item.image} style={styles.images} />
    </View>
  );

  const renderDotIndicators = () =>
    sliderImages.map((_, index) => (
      <View
        key={index}
        style={index === activeIndex ? styles.activeDots : styles.dots}
      />
    ));

  const handleOnScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(scrollPosition / width);
    setActiveIndex(currentIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!flatListRef.current) return;

      const nextIndex =
        activeIndex === sliderImages.length - 1 ? 0 : activeIndex + 1;

      flatListRef.current.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (_, index) => ({
    length: width,
    offset: width * index,
    index,
  });

  return (
    <View>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={sliderImages}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onScroll={handleOnScroll}
        getItemLayout={getItemLayout}
      />

      <View style={styles.dotsContainer}>{renderDotIndicators()}</View>
    </View>
  );
};

export default ImageSlider;
