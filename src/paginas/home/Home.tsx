import { Box, Grid, Typography, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
// import Carrossel from "../../componentes/carrossel/Carrossel";
import Sobre from "../../paginas/sobre/Sobre";
import TabHome from "./tabhome/TabHome";
import Missao from "../missao/Missao";

function Home() {
  const [tabIndex, setTabIndex] = useState(0);

  const [value, setValue] = useState("1");
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    <>
      <Grid
        container
        style={{ backgroundColor: "#c77dff" }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <img
            className="imagemLogo"
            src="../../../src/assets/images/ufa_logo.roxo.png"
            alt=""
            style={{ width: "94px", height: "80px" }}
          />
        </Grid>
      </Grid>

      <Grid container style={{ marginTop: "2px" }} justifyContent="center">
        <Grid item xs={12} md={8}>
          {/* <Carrossel /> */}
          <img
            className="imagemHome"
            src="../../../src/assets/images/home.jpg"
            alt="Imagem"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>

      <Box sx={{ width: "100%" }}>
        <TabHome />
      </Box>
    </>
  );
}

export default Home;
