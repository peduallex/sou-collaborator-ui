import React, { Component } from 'react';
import MaskedInput from "react-text-mask";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const FormStep1 = props => {
    const {
        isSubmitting,
        errors,
        handleChange,
        handleSubmit,
    } = props;


    function validate(values){
      validate = (values) =>{
        const validationSchema = getValidationShema(values)
        try{
          validationSchema.validateSync(values, {abortEarly:false})
          return{}

        }catch (error){
          return getErrosFromValidationError(error)
        }
      }
    }

    function getErrosFromValidationError(validationErr)

    function getValidationShema(values) {
      return Yup.object().shape({
        firstName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        lastName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email')
          .required('Required'),
      });
      
    }
   

    return (
      <div className="main_content_register_user_form">
<Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
           <div className="flex">
                    <div className="flex-2">
                        <label htmlFor="name">Nome</label>
                        <Field name="firstName" />
                        {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
                    </div>
                    <div className="flex-2">
                        <label htmlFor="last_name">Sobrenome</label>
                        <input type="text" name="last_name" id="last_name" placeholder="Sobrenome"   onChange={handleChange}/>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-1">
                        <label htmlFor="social_name">Nome Social</label>
                        <input type="text" name="social_name" id="social_name" placeholder="Nome Social"   onChange={handleChange}/>
                    </div>
                </div>
                <button type="submit" onClick={handleSubmit} className="main_content_form_register_btn">
                        {isSubmitting ? 'Loading' : 'Próximo'}
                    </button>
          
        </Form>
      )}
    </Formik>

        </div>

                )
            }
        
export default FormStep1;