import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import User from '../../../models/User';
import { buscaId } from '../../../service/Service';
import './Perfil.css'
import { UserState } from '../../../store/token/Reducer';
import { Link } from 'react-router-dom';

function Perfil() {

    let history = useNavigate()

    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,    // Faz uma conversão de String para Number
        nomeUsuario: '',
        usuario: '',
        senha: '',
        tipoUsuario:'',
        foto: ''
    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history("/login")
        }
    }, [token])

    // Métedo para pegar os dados de um Usuário especifico pelo ID
    async function findById(id: string) {
        await buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    return (
        <Box className='card-principal'>
            <Box className='card-container-imagem'>
                <img className='card-imagem'
                    src={ user.foto }
                    alt={ user.nomeUsuario } />
            </Box>
            <Box className='card-container-info'>
                <Box>
                    <h1>{ user.nomeUsuario }</h1>
                    <h3>{ user.usuario }</h3>
                    <hr />
                </Box>
            </Box>
            <Link to="/atualizar-perfil">
            <Button className='btn-atualizar'>
                Atualizar Perfil
            </Button>
            </Link>
        </Box>
    )
}

export default Perfil;