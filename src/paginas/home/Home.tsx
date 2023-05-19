import { Box, Button, Grid, Typography } from '@mui/material'
import react from 'react'
import Imagem from '/images/testando.svg';
import ImgTemas from '/images/temas.svg';
import Contatos from '/images/contatos.svg';
import "./Home.css";

function Home(){
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center"style={{ backgroundColor:"#151515" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box display="flex" justifyContent="center" paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Encontre oportunidades de crescimento!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button id="button-c" variant="outlined" style={{ color: "black" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                <img src={ImgTemas} alt="logo" width="550px" height="300px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

            <Grid container direction="row-reverse" justifyContent="center" alignItems="center"style={{ backgroundColor: "#69369e" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Ou...</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Veja os nossos temas!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button id="button-p" variant="outlined"style={{ color: "white" }}>Ver Temas</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                <img src={Imagem} alt="logo" width="550px" height="300px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center"style={{ backgroundColor: "#151515" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Saiba mais</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Conheça os criadores!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button id="button-c" variant="outlined"style={{ color: "black" }}>Contatos</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                <img src={Contatos} alt="logo" width="550px" height="300px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>    
        </>
    )
}

export default Home;