import { Box, Grid, Typography, Tab, Tabs, Button } from "@mui/material";
import React, { useState } from "react";
// import Carrossel from "../../componentes/carrossel/Carrossel";
import Sobre from "../../paginas/sobre/Sobre";
import TabHome2 from "./tabHome2/TabHome2.tsx";
import Missao from "../missao/Missao";
import "./Home2.css"
import { Link } from "react-router-dom";
import UserLogin from "../../models/userLogin";
import { addToken } from "../../store/token/Action";
import { UserState } from "../../store/token/Reducer";
import { useSelector } from "react-redux";



function Home2() {
  const [tabIndex, setTabIndex] = useState(0);

  const [value, setValue] = useState("1");
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }



  return (
    <>
      <Grid container direction="row" justifyContent="left" alignItems="left" className='home-t'>
        <Grid alignItems="center" item xs={7} paddingTop={20}>
          <Box paddingX={15}> 
          <Typography
                            variant="h5"
                            gutterBottom
                            component="h5"
                            align="center"
                            style={{
                                color: "#bb91f2",
                                fontWeight: "bold",
                                textShadow: "1px 1px 2px rgba(0, 0, 0, 1)"
                            }}
                        >
                            As mulheres são essenciais para a inovação e a diversidade. Mas ainda enfrentam muitos desafios e barreiras na área. Por isso, é importante apoia-las. Se você quer conhecer algumas histórias, clique aqui.
                        </Typography>
                        
                        <Box paddingBottom={5} display="flex" justifyContent="center">
                        
                        <Link to="/mulheres-inspiradoras2" className="veja-mais">Veja mais</Link>
                    
                    </Box>
          </Box>
          <Grid alignItems="center" item xs={12}></Grid>
          {/* <Carrossel /> */}
          {/* <img
            className="imagemHome"
            src="../../../src/assets/images/home.jpg"
            alt="Imagem"
            style={{ width: "100%", height: "auto" }}
          /> */}
        </Grid>
      </Grid>

      <Box sx={{ width: "100%" }}>
        <TabHome2 />
      </Box>
    </>
  );
}

export default Home2;
