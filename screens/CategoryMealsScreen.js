import React from 'react';

import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';


const CategoryMealsScreen = ({ navigation }) => {
  const category = navigation.getParam('category');
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(category.id)
  );

  return (
    <MealList displayedMeals={displayedMeals} navigation={navigation} />
  );
};

CategoryMealsScreen.navigationOptions = (navData) => {
  const category = navData.navigation.getParam('category');
  return { headerTitle: category.title };
};

export default CategoryMealsScreen;
