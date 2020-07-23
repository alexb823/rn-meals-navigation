import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FavoritesScreen = ({ navigation }) => {
  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');

  return <MealList displayedMeals={favMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
