import React, { useEffect } from 'react';
import './MulheresInspiradoras2.css';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import Ada from '../../assets/images/ada-lovelace.jpeg';
import Lisa from '../../assets/images/lisa-su.jpeg';
import Heley from '../../assets/images/heley-abreu.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/token/Reducer';
import { toast } from 'react-toastify';


function MulheresInspiradoras2() {


    return (

        <>

        <Grid className='grid-geral-m'>    
            <Grid   justifyContent="center" alignItems="center" className='box-cima'>
                <Grid /*alignItems="center" item xs={6}*/>
                    <Box /*paddingX={20}*/ >
                        <Typography  className='txt' component="h3" align="justify" style={{ color: "black" }}>Augusta Ada Byron King, Condessa de Lovelace, atualmente conhecida como Ada Lovelace, foi uma matemática e escritora inglesa. Hoje é reconhecida principalmente por ter escrito o primeiro algoritmo para ser processado por uma máquina, a máquina analítica de Charles Babbage.</Typography>
                        {/* <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography> */}
                    </Box>
                </Grid>
                <Grid className="img-grid" /*item xs={6}*/ >
                    <img src={Ada} alt="Ada-lovelace" className='img' width={200} height={150}/>
                </Grid>
            </Grid>

            <Grid justifyContent="center" alignItems="center" className="box-cima-d">
                
                <Grid className='img-grid-d'>
                    <img src={Lisa} alt="Lisa Su" width={200} height={150} className='img-d' />
                </Grid>
                
                <Grid>
                    <Box>
                        <Typography className='txt-d' gutterBottom color="textPrimary" component="h3" align="justify" style={{ color: "black" }}>Lisa Su é uma executiva de negócios e engenheira elétrica americana, que é presidente, diretora executiva e presidente da AMD. No início de sua carreira, Su trabalhou na Texas Instruments, IBM e Freescale Semiconductor em cargos de engenharia e gerenciamento.</Typography>
                        {/* <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Ver os nossos temas!</Typography> */}
                    </Box>
                </Grid>
            </Grid>
            <Grid justifyContent="center" alignItems="center" className="box-cima">
                <Grid >
                    <Box  >
                        <Typography className='txt' gutterBottom color="textPrimary" component="h3" align="justify" style={{ color: "black" }}>Heley de Abreu Silva Batista, era professora em Janaúba, no norte de Minas Gerais. Aos 43 anos, cuidava dos alunos como se fossem seus filhos antes de ter o corpo queimado durante a luta travada com o vigia Damião Soares dos Santos, que ateou fogo na creche em que trabalhava. Heley de Abreu lutou contra incendiário e retirou alunos pela janela na cidade do norte mineiro.</Typography>
                        {/* <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Entre em contato com a desenvolvedora!</Typography> */}
                    </Box>
                </Grid>
                <Grid  className="img-grid" >
                    <img src={Heley} alt="Heley Abreu" width={200} height={150} className='img'/>
                </Grid>
                
            </Grid>
        </Grid>    
        </>)

};

export default MulheresInspiradoras2;
