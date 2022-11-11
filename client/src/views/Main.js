import React, {  useState } from "react";
import { Link } from "react-router-dom";
import TableAutores from "../components/TableAutores";
import { simpleGet } from "../services/simpleGet";

const Main = () => {
  
  const [autores, setAutores] = useState();

  const getAutores = async () =>{
    const response = await simpleGet('http://localhost:8000/api/autores')
    setAutores(response.data.autores)
  }
  
  return (
    <div>
      <Link to="/new">Agrega un autor</Link>
      <TableAutores autores={autores} getAutores={getAutores} setAutores={setAutores}/>
    </div>
  );
};

export default Main;
