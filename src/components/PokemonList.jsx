import React, { useEffect, useState } from "react";
import { Box, Grid, MenuItem, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Container, PokemonListContainer, PaginationContainer } from "./styles";
import Pagination from "./Pagination";
import { fetchData, handlePageChange } from "../store/actions";
import PokemonCard from "./PokemonCard";
import ItemsPerPageSelect from "./ItemsPerPageSelect";
import Header from "./Header";
import SearchForm from "./SearchForm";

function PokemonList() {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonList);
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");

  useEffect(() => {
    dispatch(fetchData(currentPage, itemsPerPage, searchTerm, searchType));
  }, [currentPage, itemsPerPage, searchTerm, searchType, dispatch]);

  // const filteredPokemonList = pokemonList.filter((pokemon) => {
  //   return pokemon?.name?.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  const handleSearchInputChange = (event) => {
    const searchTerm = event.target.value.trim();
    setSearchTerm(searchTerm);
    if (searchTerm || searchType) {
      dispatch(fetchData(currentPage, itemsPerPage, searchTerm, searchType));
    } else {
      dispatch(fetchData(currentPage, itemsPerPage));
    }
  };

  const handleTypeSelectChange = (event) => {
    const searchType = event.target.value;
    setSearchType(searchType);
    if (searchTerm || searchType) {
      dispatch(fetchData(currentPage, itemsPerPage, searchTerm, searchType));
    } else {
      dispatch(fetchData(currentPage, itemsPerPage));
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={2} alignItems="center">
          <ItemsPerPageSelect />
          <SearchForm
          searchType={searchType}
          searchTerm={searchTerm}
          handleTypeSelectChange={handleTypeSelectChange}
          handleSearchInputChange={handleSearchInputChange}
        />
        </Grid>
        <PokemonListContainer>
          <Grid container spacing={2}>
            {pokemonList.map((pokemon) => (
              <Grid item xs={12} sm={6} md={4} key={pokemon.name}>
                <PokemonCard pokemon={pokemon} />
              </Grid>
            ))}
          </Grid>
        </PokemonListContainer>
        <PaginationContainer>
          <Pagination
            count={totalPages}
            currentPage={currentPage + 1}
            onPageChange={handlePageChange}
          />
        </PaginationContainer>
      </Container>
    </>
  );
}

export default PokemonList;
