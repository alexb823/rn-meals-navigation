import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import DefaultText from './DefaultText';

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'openSansBold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

const MealItem = ({ item, onSelectMeal }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground
            style={styles.bgImage}
            source={{ uri: item.imageUrl }}
          >
            <View style={styles.titleContainer}>
              <Text numberOfLines={1} style={styles.title}>
                {item.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <DefaultText>{item.duration}m</DefaultText>
          <DefaultText>{item.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{item.affordability.toUpperCase()}</DefaultText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;
