// src/components/Sidebar.tsx
import React, { useState } from "react";
import { Grid, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Slider from "@mui/material/Slider";
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
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [quantityRange, setQuantityRange] = useState<number[]>([0, 100]);

  const handleFilter = () => {
    dispatch(
      setFilters({
        name,
        category,
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
        minQuantity: quantityRange[0],
        maxQuantity: quantityRange[1],
      })
    );
  };

  const handlePriceChange = (event: any, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handleQuantityChange = (event: any, newValue: number | number[]) => {
    setQuantityRange(newValue as number[]);
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
          <Grid item xs={12}>
            <label>Rango de Precio</label>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              marks={[
                { value: 0, label: "$0" },
                { value: 250, label: "$250" },
                { value: 500, label: "$500" },
                { value: 750, label: "$750" },
                { value: 1000, label: "$1000" },
              ]}
            />
          </Grid>vga a hdmi
          <Grid item xs={12}>
            <label>Rango de Cantidad</label>
            <Slider
              value={quantityRange}
              onChange={handleQuantityChange}
              valueLabelDisplay="auto"
              min={0}
              max={100}
              marks={[
                { value: 0, label: "0" },
                { value: 25, label: "25" },
                { value: 50, label: "50" },
                { value: 75, label: "75" },
                { value: 100, label: "100" },
              ]}
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
