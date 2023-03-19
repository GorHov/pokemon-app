import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Chip,
} from "@mui/material";
import {
  PokemonCardStyle,
  PokemonName,
  PokemonImage,
  typeColors,
} from "./styles";

function PokemonCard({ pokemon }) {
  const [open, setOpen] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const { name, url } = pokemon.pokemon || pokemon ;
  
  useEffect(() => {
    if (open) {
      const fetchPokemonDetails = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPokemonDetails(data);
      };
      fetchPokemonDetails();
    }
  }, [url, open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PokemonCardStyle onClick={handleOpen}>
        <PokemonName> {name} </PokemonName>{" "}
        <PokemonImage
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            url?.split("/")[6]
          }.png`}
          alt={name}
        />{" "}
      </PokemonCardStyle>{" "}
      {pokemonDetails && (
        <>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle> {name} </DialogTitle>{" "}
            <DialogContent>
              <Card
                sx={{
                  display: "flex",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 150,
                  }}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    url?.split("/")[6]
                  }.png`}
                  alt={name}
                />{" "}
                <CardContent
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <DialogContentText>
                    {" "}
                    {pokemonDetails.stats.map((stat) => (
                      <div key={stat.stat.name}>
                        <strong> {stat.stat.name}: </strong> {stat.base_stat}{" "}
                      </div>
                    ))}{" "}
                  </DialogContentText>{" "}
                </CardContent>{" "}
                {pokemonDetails.types.map((type) => (
                  <Chip
                    key={type.slot}
                    label={type.type.name}
                    style={{
                      backgroundColor: typeColors[type.type.name],
                      color: "white",
                      marginRight: "4px",
                      marginTop: "4px",
                    }}
                  />
                ))}{" "}
              </Card>{" "}
            </DialogContent>{" "}
            <DialogActions>
              <Button onClick={handleClose}> Close </Button>{" "}
            </DialogActions>{" "}
          </Dialog>{" "}
        </>
      )}{" "}
    </>
  );
}

export default PokemonCard;
