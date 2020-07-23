import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CategoriesScreen = (props) => {
  const { navigation: {navigate} } = props;

  const renderGridItem = ({ item }) => {
    const onSelect = () => navigate('CategoryMeals', { category: item });
    return <CategoryGridTile item={item} onSelect={onSelect} />;
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

export default CategoriesScreen;
