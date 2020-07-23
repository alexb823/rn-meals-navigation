import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const MealDetailScreen = ({ navigation }) => {
  const meal = navigation.getParam('item');
  // console.log(meal);
  return (
    <View style={styles.screen}>
      <Text>{meal.title}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const meal = navigation.getParam('item');
  return {
    headerTitle: meal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log('added to Fav')}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;
