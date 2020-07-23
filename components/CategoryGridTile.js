import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gridItem: {
    flex: 1,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 10,
    elevation: 2,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'openSansBold',
    fontSize: 20,
    textAlign: 'right',
  },
});

const CategoryGridTile = ({ onSelect, item }) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.itemContainer}>
      <TouchableCmp style={styles.gridItem} onPress={onSelect}>
        <View style={{ backgroundColor: item.color, ...styles.container }}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

export default CategoryGridTile;
