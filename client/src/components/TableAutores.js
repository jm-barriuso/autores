import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { simpleDelete } from "../services/simpleDelete";

const TableAutores = (props) => {
  
  const { autores, getAutores, setAutores} = props
  
  const deleteAutor = async (idAutor) =>{
    
    await simpleDelete(`http://localhost:8000/api/autores/delete/${idAutor}`);
    setAutores(autores.filter(autor => autor._id !==idAutor));
}

  const navigate = useNavigate();

  useEffect(() => {
    getAutores();
  }, []);
  
  return (  
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Autor</th>
            <th>Acciones disponibles</th>
          </tr>
        </thead>
        <tbody>
          {autores?.map((autor)=>{
          return(<tr key = {autor._id} >
            <td>{autor.name}</td>
            <td>
              <Button variant="primary" onClick={()=>navigate(`/edit/${autor._id}`)}>Edit</Button>
              <Button variant="danger" onClick={()=>deleteAutor(autor._id)}>Delete</Button>
            </td>
          </tr>)})}
        </tbody>
      </Table>
    </div>
  );
};

export default TableAutores;
