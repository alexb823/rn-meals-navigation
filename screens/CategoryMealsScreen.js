import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '90%',
  },
});

const CategoryMealsScreen = ({ navigation }) => {
  const category = navigation.getParam('category');

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(category.id)
  );


  const renderMealItem = ({ item }) => {
    const onSelectMeal = () => navigation.navigate('MealDetail', {item});
    return <MealItem item={item} onSelectMeal={onSelectMeal} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.list}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navData) => {
  const category = navData.navigation.getParam('category');
  return { headerTitle: category.title };
};

export default CategoryMealsScreen;
