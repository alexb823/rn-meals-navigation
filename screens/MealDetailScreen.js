import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../store/actions/mealsActions';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  title: {
    fontFamily: 'openSansBold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = ({ navigation }) => {
  const meal = navigation.getParam('item');
  const isFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((item) => item.id === meal.id)
  );
  const dispatch = useDispatch();

  const handleToggleFav = useCallback(() => {
    dispatch(toggleFavorite(meal.id));
  }, [meal]);

  useEffect(() => {
    navigation.setParams({ handleToggleFav });
  }, [handleToggleFav]);

  useEffect(() => {
    navigation.setParams({ isFavorite });
  }, [isFavorite]);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <View style={styles.details}>
        <DefaultText>{meal.duration}m</DefaultText>
        <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {meal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}

      <Text style={styles.title}>Steps</Text>
      {meal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const meal = navigation.getParam('item');
  const handleToggleFav = navigation.getParam('handleToggleFav');
  const isFavorite = navigation.getParam('isFavorite');
  const favIcon = isFavorite ? 'ios-star' : 'ios-star-outline';

  const headerRight = () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="Favorite" iconName={favIcon} onPress={handleToggleFav} />
    </HeaderButtons>
  );

  return {
    headerTitle: meal.title,
    headerRight,
  };
};

export default MealDetailScreen;
