import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AutorForm from '../components/AutorForm';
import { simpleGet } from '../services/simpleGet';
import { simplePut } from '../services/simplePut';

const EditAutor = () => {
    const { idAutor } = useParams();
    const [autor, setAutor] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        getAutor();
    }, []);

    const getAutor = async() => {
        const response = await simpleGet(`http://localhost:8000/api/autores/${idAutor}`);
        setAutor(response.data.autor)
    }

    const updateAutor = async(values) =>{
        const response = await simplePut(`http://localhost:8000/api/autores/update/${idAutor}`,values)
        navigate('/')
    }

    return (
        
        <div>
            <Link to="/">Home</Link>
            <h2>Editar autor</h2>
            <AutorForm name={autor?.name} onSubmitProp={updateAutor} navigate={navigate}/>
        </div>
    );
}

export default EditAutor;
