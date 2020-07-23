import React from 'react';
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

const MealList = ({navigation, displayedMeals}) => {
  const renderMealItem = ({ item }) => {
    const onSelectMeal = () => navigation.navigate('MealDetail', {item});
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
}

export default MealList;
