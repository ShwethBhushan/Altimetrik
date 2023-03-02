import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Notification = () => {
  return (
    <Container sx={{ mt: 2, mb: 2 }}>
      <Grid container spacing={1}>
        {/* Chart */}
        <h3>NOTIFICATION WELCOMES YOU!</h3>
      </Grid>
    </Container>
  );
};

export default Notification;
