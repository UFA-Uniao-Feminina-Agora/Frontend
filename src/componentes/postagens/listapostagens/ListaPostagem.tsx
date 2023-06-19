import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../service/Service';
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaPostagem.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/token/Reducer';
import User from '../../../models/User';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])

  const userId = useSelector<UserState, UserState['id']>(
    (state) => state.id
  )

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  const [user, setUser] = useState<User>({
    id: +userId,    // Faz uma conversão de String para Number
    nomeUsuario: '',
    usuario: '',
    senha: '',
    tipoUsuario: '',
    foto: ''
  })
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado!", {

        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });

      navigate("/login")

    }
  }, [token])

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])


  return (
    <>

      {
        posts.map(post => (
          <Grid className='grid-posts'>
            <Box m={2} className='box'>
              <Card variant="outlined" className='box-postagem' >
                <CardContent className='box-postagem' >
                  <Typography color="textSecondary" gutterBottom>
                    @{post.usuario?.nomeUsuario}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {post.titulo}
                  </Typography>
                  <Typography className='texto-p'>
                    {post.texto}
                  </Typography>
                  <Typography variant="body2" component="p" className='texto-tema'>
                    {post.tema?.nome}
                  </Typography>
                  <Typography className='data'>
                    Data: {Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'medium' }).format(new Date(post.data))}
                  </Typography>
                </CardContent>
                <CardActions className='box-postagem' >

                  {/* {post.usuario?.id === userId && ( */}
                    <Box display="flex" justifyContent="center" mb={1.5} className='box-postagem'>
                      <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                        <Box mx={1}>
                          <Button variant="contained" className="marginLeft button-atualizar" size='small'>
                            atualizar
                          </Button>
                        </Box>
                      </Link>
                      <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                        <Box mx={1}>
                          <Button className="button-d" variant="contained" size='small'>
                            deletar
                          </Button>
                        </Box>
                      </Link>
                    </Box>
                  {/* )}:null */}
                </CardActions>
              </Card>
            </Box>
          </Grid>
        ))
      }
    </>
  )
}

export default ListaPostagem;