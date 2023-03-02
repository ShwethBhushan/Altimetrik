import { Container, Grid } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Container sx={{ mt: 2, mb: 2 }}>
      <Grid container spacing={1}>
        {/* Chart */}
        <h3>HOME WELCOMES YOU!</h3>
      </Grid>
    </Container>
  );
};

export default Home;
