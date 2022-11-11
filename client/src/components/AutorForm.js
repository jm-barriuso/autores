import { Field, Formik, Form} from 'formik';
import React from 'react';
import * as Yup from "yup";
import { Button } from "react-bootstrap";

const AutorForm = (props) => {
    
    const { name, onSubmitProp,navigate } = props;

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{
                    name: name,
                }}

                validationSchema={Yup.object().shape({
                    name: Yup.string()
                    .min(3,"El nombre es muy corto")
                    .required("Por favor ingrese el nombre de un producto"),
                })}

                onSubmit={(values,{setSubmitting})=>{
                onSubmitProp(values);
            }}
        >

            {({errors,touched,handleSubmit}) =>{
                return(<div>
                    <Form>
                        <label htmlFor="name">Nombre</label>
                        <Field id="name" type="text" placeholder="nombre del autor" name="name" className="form-control"/>
                        {errors.name && touched.name && <p>{errors.name}</p>}
                        <Button variant="danger" onClick={()=>navigate('/')}>CANCEL</Button>
                        <Button variant="primary" type="submit" disabled={Object.values(errors).length>0 || Object.values(touched).length===0} >SUBMIT</Button>
                    </Form>
                </div>)
            }}
            
            
        </Formik>
        </div>
    );
}

export default AutorForm;

