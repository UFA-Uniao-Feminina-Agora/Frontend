import { Box, Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function Missao() {
    return (
        <>
            <Grid container direction="row" style={{ backgroundColor: "#F4ECF7" }}>
                <Grid item xs={12} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box padding={2}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "#34185c", fontWeight: "bold" }}>Nossa Missão:</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "#34185c", textAlign: 'justify' }}>
                            Uma rede social dedicada ao empoderamento feminino, ao apoio mútuo e ao crescimento profissional.
                            Aqui, você encontrará um espaço acolhedor e inspirador, onde mulheres de todas as áreas podem se
                            conectar, aprender e se desenvolver. Nossa missão é fornecer um ambiente seguro e inclusivo, onde
                            você possa compartilhar suas conquistas, desafios e aspirações. Estamos aqui para encorajá-la a
                            alcançar seus sonhos, independentemente do setor em que deseja atuar.
                        </Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "black", fontWeight: "bold" }}>
                            Junte-se a nós na UFA e faça parte dessa incrível rede social criada especialmente para você, MULHER determinada a conquistar seus objetivos. Juntas, iremos mais longe!
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box padding={2}>
                        <img src="https://img.freepik.com/fotos-gratis/close-up-nas-maos-de-mulheres-abracadas_23-2149190347.jpg?w=740&t=st=1686585939~exp=1686586539~hmac=7f00bc9b2f128e4ab2529608f167b53afef332ff94d76bb6b5b4d76387f91e13" alt="Imagem" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default Missao;