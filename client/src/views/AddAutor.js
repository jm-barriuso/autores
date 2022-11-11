import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AutorForm from "../components/AutorForm";
import { simplePost } from "../services/simplePost";

const AddAutor = () => {
    
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const crearAutor = async (values) => {
    const response = await simplePost(
        "http://localhost:8000/api/autores/new",
        values
    );
    if(response.data.message === ""){
        navigate("/")
    }else{
        const errorResponse = response.data.errors;
        const errorArray = [];
        for (const key of Object.keys(errorResponse)){
            errorArray.push(errorResponse[key].message);
        }
        setErrors(errorArray);
    }
    };

    return (
    <div>
        <h2>Crear autor</h2>
        <Link to='/'>Home</Link>
        {errors?.map((error,index)=><p key={index}>{error}</p>)}
        <AutorForm name="" onSubmitProp={crearAutor} navigate={navigate}/>
    </div>
    );
};

export default AddAutor;
