import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/mealsActions';

const initialState = {
  allMeals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

//helper functions
const filterMeals = (state, action) => {
  const {
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  } = action.filterSettings;
  // eslint-disable-next-line complexity
  const filteredMeals = state.allMeals.filter((meal) => {
    if (isGlutenFree && !meal.isGlutenFree) return false;
    if (isVegan && !meal.isVegan) return false;
    if (isVegetarian && !meal.isVegetarian) return false;
    if (isLactoseFree && !meal.isLactoseFree) return false;
    return true;
  });
  return { ...state, filteredMeals };
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      if (state.favoriteMeals.find((meal) => meal.id === action.mealId)) {
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.filter(
            (meal) => meal.id !== action.mealId
          ),
        };
      } else {
        return {
          ...state,
          favoriteMeals: [
            ...state.favoriteMeals,
            state.allMeals.find((meal) => meal.id === action.mealId),
          ],
        };
      }

    case SET_FILTERS:
      const {
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree,
      } = action.filterSettings;
      const filtered = state.allMeals.filter((meal) => {
        if (isGlutenFree && !meal.isGlutenFree) return false;
        if (isVegan && !meal.isVegan) return false;
        if (isVegetarian && !meal.isVegetarian) return false;
        if (isLactoseFree && !meal.isLactoseFree) return false;
        return true;
      });
      return { ...state, filteredMeals: filtered };
    default:
      return state;
  }
};

export default mealsReducer;
