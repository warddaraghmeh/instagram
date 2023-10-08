import React from "react";

import Grid from "@mui/material/Grid";

import Stories from "./Stories";

import Followers from "./Followers ";
import Posts from "./Posts";
function HomePage() {
  return (
    <div>
      <Grid item xs={9}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stories />
          <Posts />
        </div>
      </Grid>
      <Grid item sx={2}>
        <Followers />
      </Grid>
    </div>
  );
}

export default HomePage;
