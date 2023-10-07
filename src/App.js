import React from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveDrawer from "./components/ResponsiveDrawer";

import { ThemeProviderWrapper } from "./ThemeContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@mui/icons-material/Home";
import Explore from "./components/Explore";
function App() {
  return (
    <ThemeProviderWrapper>
      <BrowserRouter>
        <CssBaseline />
        <div>
          <Grid container spacing={0}>
            <Grid item xs={1}>
              <ResponsiveDrawer />
            </Grid>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Explore" element={<Explore />} />
            </Routes>
          </Grid>
        </div>
      </BrowserRouter>
    </ThemeProviderWrapper>
  );
}

export default App;
