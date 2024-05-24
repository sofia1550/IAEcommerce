// src/components/Sidebar.tsx
import React, { useState } from "react";
import { List, Grid, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  SidebarContainer,
  SidebarContent,
  StyledTextField,
  StyledButton,
} from "./sidebarStyles/sidebarStyles";
import { useDispatch } from "react-redux";
import { setFilters } from "@/redux/features/sidebar/sidebarSlice";

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minQuantity, setMinQuantity] = useState("");
  const [maxQuantity, setMaxQuantity] = useState("");

  const handleFilter = () => {
    dispatch(
      setFilters({
        name,
        category,
        minPrice: minPrice ? parseFloat(minPrice) : null,
        maxPrice: maxPrice ? parseFloat(maxPrice) : null,
        minQuantity: minQuantity ? parseInt(minQuantity) : null,
        maxQuantity: maxQuantity ? parseInt(maxQuantity) : null,
      })
    );
  };

  return (
    <SidebarContainer>
      <SidebarContent>
        <h2>Filtrar Productos</h2>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledTextField
              label="Nombre"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Categoría"
              variant="outlined"
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              label="Precio Mínimo"
              variant="outlined"
              fullWidth
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              label="Precio Máximo"
              variant="outlined"
              fullWidth
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              label="Cantidad Mínima"
              variant="outlined"
              fullWidth
              type="number"
              value={minQuantity}
              onChange={(e) => setMinQuantity(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              label="Cantidad Máxima"
              variant="outlined"
              fullWidth
              type="number"
              value={maxQuantity}
              onChange={(e) => setMaxQuantity(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <StyledButton
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleFilter}
            >
              Aplicar Filtros
            </StyledButton>
          </Grid>
        </Grid>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
