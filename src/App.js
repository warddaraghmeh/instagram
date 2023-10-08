import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./components/Explore";
import HomePage from "./components/HomePage";
import { Grid } from "@mui/material";
import ResponsiveDrawer from "./components/ResponsiveDrawer";

function App() {
  return (
    <Router>
      <Grid container spacing={0}>
        <Grid item xs={1}>
          <ResponsiveDrawer />
        </Grid>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Grid>
    </Router>
  );
}

export default App;
