import React, { useEffect } from 'react';
import './MulheresInspiradoras.css';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import Ada from '../../assets/images/ada-lovelace.jpeg';
import Lisa from '../../assets/images/lisa-su.jpeg';
import Heley from '../../assets/images/heley-abreu.jpg';
import Amelia from '../../assets/images/Amelia Earhart.avif';
import Malala from '../../assets/images/malala Yousafzai.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/token/Reducer';
import { toast } from 'react-toastify';

function MulheresInspiradoras() {


    return (

        <>

            <Grid 
                container
                style={{ backgroundColor: "#996fcf"}}
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item>
                <Link to="/home" className="text-decorator-none">    
                    <img
                        className="imagemLogo"
                        src="https://imgur.com/zxW39qt.png"
                        alt=""
                        style={{ width: "94px", height: "80px" }}
                    />
                </Link>    
                </Grid>
            </Grid>
          
            <Grid   justifyContent="center" alignItems="center" className='box-cima'>
                <Grid /*alignItems="center" item xs={6}*/>
                    <Box /*paddingX={20}*/ >
                        <Typography  className='txt' component="h3" align="justify" style={{ color: "black" }}>Augusta Ada Byron King, Condessa de Lovelace, atualmente conhecida como Ada Lovelace, foi uma matemática e escritora inglesa. Hoje é reconhecida principalmente por ter escrito o primeiro algoritmo para ser processado por uma máquina, a máquina analítica de Charles Babbage.</Typography>
                        {/* <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography> */}
                    </Box>
                </Grid>
                <Grid className="img-grid" /*item xs={6}*/ >
                    <img src='https://imgur.com/rXsbvja.png' alt="Ada-lovelace" className='img'  />
                </Grid>
            </Grid>

            <Grid justifyContent="center" alignItems="center" className="box-cima-d">
                
                <Grid className='img-grid-d'>
                    <img src='https://imgur.com/RN149QM.png' alt="Lisa Su" className='img' />
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
                    <img src='https://imgur.com/Z6ZlRqm.png' alt="Heley Abreu" className='img'/>
                </Grid>
                
            </Grid>   

            <Grid justifyContent="center" alignItems="center" className="box-cima-d">
                
                <Grid className='img-grid-d'>
                    <img src='https://imgur.com/D2182m9.png' alt="Amelia Earhart" className='img' />
                </Grid>
                
                <Grid>
                    <Box>
                        <Typography className='txt-d' gutterBottom color="textPrimary" component="h3" align="justify" style={{ color: "black" }}>Amelia é um símbolo importante no setor de aviação dos Estados Unidos e defensora dos direitos das mulheres! Além de ser a primeira mulher a voar sozinha sobre o Oceano Atlântico, o que a fez receber a condecoração militar “The Distinguished Flying Cross” atribuída a atos heroicos, escreveu livros sobre suas experiências na aviação, que posteriormente ajudou diversas outras mulheres que desejavam pilotar um avião, foi uma verdadeira inspiração!</Typography>
                        {/* <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Ver os nossos temas!</Typography> */}
                    </Box>
                </Grid>
            </Grid>

            <Grid justifyContent="center" alignItems="center" className="box-cima">
                <Grid >
                    <Box  >
                        <Typography className='txt' gutterBottom color="textPrimary" component="h3" align="justify" style={{ color: "black" }}>O nome de Malala passou a ser conhecido mundialmente quando, aos 15 anos, foi baleada por um militante Talibã, por seu ativismo à educação das mulheres e meninas no Paquistão. Um acontecimento muito forte e marcante, para uma menina tão jovem. Aos 17 anos, foi reconhecida por sua luta, se tornando a pessoa mais jovem a ganhar o prêmio Nobel da Paz (2014).</Typography>
                        {/* <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Entre em contato com a desenvolvedora!</Typography> */}
                    </Box>
                </Grid>
                <Grid  className="img-grid" >
                    <img src='https://imgur.com/IOwnLYD.png' alt="Malala Yousafzai" className='img'/>
                </Grid>
            </Grid>    

        </>)

};

export default MulheresInspiradoras;
