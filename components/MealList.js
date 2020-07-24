import React from 'react';
import {useSelector} from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';

import MealItem from '../components/MealItem';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '90%',
  },
});

const MealList = ({ navigation, displayedMeals }) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  const renderMealItem = ({ item }) => {
    const isFavorite = favoriteMeals.some((meal) => meal.id === item?.id);
    const onSelectMeal = () =>
      navigation.navigate('MealDetail', { item, isFavorite });
    return <MealItem item={item} onSelectMeal={onSelectMeal} />;
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        style={styles.list}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealList;
