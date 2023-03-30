import axios from "axios";
import {
  SET_CURRENT_PAGE,
  SET_ITEMS_PER_PAGE,
  SET_POKEMON_LIST,
  SET_TOTAL_PAGES,
} from "./actionTypes";

let allTypeData = null;
let currentType = null;

export const fetchData =
  (currentPage, itemsPerPage, searchTerm = "", type) =>
  async (dispatch) => {
    try {
      let url;
      if (type) {
        url = `https://pokeapi.co/api/v2/type/${type}`;
      } else {
        url = `https://pokeapi.co/api/v2/pokemon?offset=${
          currentPage * itemsPerPage
        }&limit=${itemsPerPage}`;
      }

      const response = await axios.get(url);
      let payload;

      if (response.data.results) {
        payload = response.data.results;
      } else if (response.data.pokemon) {
        if (type && (currentType !== type || !allTypeData)) {
          allTypeData = response.data.pokemon;
          currentType = type;
        }
        if (type) {
          const filteredData = searchTerm
            ? allTypeData.filter(pokemonData =>
                pokemonData.pokemon.name.includes(searchTerm.toLowerCase())
              )
            : allTypeData;
          const startIndex = currentPage * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
          payload = filteredData.slice(startIndex, endIndex);
        } else {
          payload = response.data.pokemon;
        }
      }

      if (searchTerm && !type) {
        payload = payload.filter(pokemon =>
          pokemon.name.includes(searchTerm.toLowerCase())
        );
      }

      dispatch({
        type: SET_POKEMON_LIST,
        payload,
      });

      dispatch({
        type: SET_TOTAL_PAGES,
        payload: Math.ceil(
          (response.data.count ||
            (type ? allTypeData.length : response.data.pokemon.length)) /
            itemsPerPage
        ),
      });
    } catch (error) {
      console.error(error);
    }
  };

export const handlePageChange = (newPage) => {
  return (dispatch) => {
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: newPage - 1,
    });
  };
};

export const handleItemsPerPageChange = (event) => {
  return (dispatch) => {
    dispatch({
      type: SET_ITEMS_PER_PAGE,
      payload: event.target.value,
    });
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: 0,
    });
  };
};
