import { styled } from "@mui/material/styles";

export const Container = styled("div")({
  padding: "60px 60px",
});

export const PokemonListContainer = styled("div")({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const PaginationContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "20px",
});

export const PokemonCardStyle = styled("div")({
  cursor: "pointer",
  height: "300px",
  backgroundColor: "#f0f0f0",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
  margin: "10px",
  border: "1px solid #ccc",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
});



export const PokemonName = styled("h3")({
  margin: 0,
});

export const PokemonImage = styled("img")({
  height: "200px",
});

export const appBarStyles = {
  position: "static",
};

export const typographyStyles = {
  flexGrow: 1,
};

export const avatarStyles = {
  cursor: "pointer",
};

export const buttonStyles = {
  width: "40px",
  height: "40px",
  backgroundColor: "#3b5998",
  color: "white",
  "&:hover": {
    backgroundColor: "#30487e",
  },
};

export const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};