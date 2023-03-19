import axios from "axios";

export const fetchData =
  (currentPage, itemsPerPage, searchTerm = "", type) =>
  async (dispatch) => {
    try {
      let url;
      if (searchTerm && !type) {
        url = `https://pokeapi.co/api/v2/pokemon?offset=${
          currentPage * itemsPerPage
        }&limit=${itemsPerPage}&q=${searchTerm}`;
      } else if (type && !searchTerm) {
        url = `https://pokeapi.co/api/v2/type/${type}?offset=${
          currentPage * itemsPerPage
        }&limit=${itemsPerPage}`;
      } else if (type && searchTerm) {
        url = `https://pokeapi.co/api/v2/type/${type}?offset=${
          currentPage * itemsPerPage
        }&limit=${itemsPerPage}&q=${searchTerm}`;
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
        payload = response.data.pokemon;
      }
      dispatch({
        type: "SET_POKEMON_LIST",
        payload,
      });
      dispatch({
        type: "SET_TOTAL_PAGES",
        payload: Math.ceil(
          (response.data.count || response.data.pokemon.length) / itemsPerPage
        ),
      });
    } catch (error) {
      console.error(error);
    }
  };

export const handlePageChange = (newPage) => {
  return (dispatch) => {
    dispatch({
      type: "SET_CURRENT_PAGE",
      payload: newPage - 1,
    });
  };
};

export const handleItemsPerPageChange = (event) => {
  return (dispatch) => {
    dispatch({
      type: "SET_ITEMS_PER_PAGE",
      payload: event.target.value,
    });
    dispatch({
      type: "SET_CURRENT_PAGE",
      payload: 0,
    });
  };
};
