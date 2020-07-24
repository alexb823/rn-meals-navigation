import React from 'react';
import {useSelector} from 'react-redux';

import MealList from '../components/MealList';


const CategoryMealsScreen = ({ navigation }) => {
  const meals = useSelector(state => state.meals.filteredMeals);

  const category = navigation.getParam('category');
  const displayedMeals = meals.filter((meal) =>
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
