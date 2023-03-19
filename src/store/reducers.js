import {
  SET_CURRENT_PAGE,
  SET_ITEMS_PER_PAGE,
  SET_POKEMON_LIST,
  SET_TOTAL_PAGES,
} from "./actionTypes";

const initialState = {
  pokemonList: [],
  currentPage: 0,
  totalPages: 0,
  itemsPerPage: 10,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };
    case SET_ITEMS_PER_PAGE:
      return {
        ...state,
        itemsPerPage: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
