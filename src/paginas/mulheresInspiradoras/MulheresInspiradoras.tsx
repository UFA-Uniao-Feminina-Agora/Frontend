import React, { useEffect } from 'react';
import './MulheresInspiradoras.css';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import Ada from '../../assets/images/ada-lovelace.jpeg';
import Lisa from '../../assets/images/lisa-su.jpeg';
import Heley from '../../assets/images/heley-abreu.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/token/Reducer';
import { toast } from 'react-toastify';

function MulheresInspiradoras() {


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
                <Link to="/home2" className="text-decorator-none">    
                    <img
                        className="imagemLogo"
                        src="../../../src/assets/images/ufa_logo.roxo.png"
                        alt=""
                        style={{ width: "94px", height: "80px" }}
                    />
                </Link>    
                </Grid>
            </Grid>
            <Grid  container direction="row" justifyContent="center" alignItems="center" className='box-cima'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography  className='txt' component="h3" align="justify" style={{ color: "black" }}>Augusta Ada Byron King, Condessa de Lovelace, atualmente conhecida como Ada Lovelace, foi uma matemática e escritora inglesa. Hoje é reconhecida principalmente por ter escrito o primeiro algoritmo para ser processado por uma máquina, a máquina analítica de Charles Babbage.</Typography>
                        {/* <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography> */}
                    </Box>
                </Grid>
                <Grid className='img' item xs={6} >
                    <img src={Ada} alt="Ada-lovelace" width='325vh' height='190vh'/>
                </Grid>
            </Grid>

            <Grid container direction="row-reverse" justifyContent="center" alignItems="center" className="box-meio">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography className='txt-lisa' gutterBottom color="textPrimary" component="h3" align="justify" style={{ color: "black" }}>Lisa Su é uma executiva de negócios e engenheira elétrica americana, que é presidente, diretora executiva e presidente da AMD. No início de sua carreira, Su trabalhou na Texas Instruments, IBM e Freescale Semiconductor em cargos de engenharia e gerenciamento.</Typography>
                        {/* <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Ver os nossos temas!</Typography> */}
                    </Box>
                </Grid>
                <Grid className='img-lisa' item xs={6} >
                    <img src={Lisa} alt="Lisa Su" width='325vh' height='200vh' />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" className="box-cima">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography className='txt-heley' gutterBottom color="textPrimary" component="h3" align="justify" style={{ color: "black" }}>Heley de Abreu Silva Batista, era professora em Janaúba, no norte de Minas Gerais. Aos 43 anos, cuidava dos alunos como se fossem seus filhos antes de ter o corpo queimado durante a luta travada com o vigia Damião Soares dos Santos, que ateou fogo na creche em que trabalhava. Heley de Abreu lutou contra incendiário e retirou alunos pela janela na cidade do norte mineiro.</Typography>
                        {/* <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Entre em contato com a desenvolvedora!</Typography> */}
                    </Box>
                </Grid>
                <Grid className='img-heley' item xs={6} >
                    <img src={Heley} alt="Heley Abreu" width='370vh' height='240vh' />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>)

};

export default MulheresInspiradoras;
