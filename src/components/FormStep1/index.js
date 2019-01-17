import React from 'react';
import { Form, Field } from 'formik';
import MaskedInput from "react-text-mask";

import {
  GroupButton,
  Button,
  Container,
  Title,
  SubtitleValidacao
} from './styles';

const FormStep1 = props => {
  const { errors, touched, countryId, naturalyId, statusesId, ethnicitiesid } = props;
  return (
    <Container>
      <Form>
      

          <Title>Cadastro de novo usuário</Title>
          <SubtitleValidacao>*campos obrigatório</SubtitleValidacao>

          <div className="form-row">
            <div className="col-md-6">
              <label htmlFor="firstName">Nome</label>
              <Field name="name" className="form-control" />
              {errors.name && touched.name ? (
                <div>{errors.name}</div>
              ) : null}
            </div>

            <div className="col-md-6">
              <label htmlFor="lastName">Sobrenome</label>
              <Field name="lastName" className="form-control" />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
            </div>

          </div>

          <div className="form-row">
            <div className="form-group col-md-1">
              <label htmlFor="social_name">Nome Social</label>
              <Field name="assumed_name" className="form-control" />
              {errors.assumed_name && touched.assumed_name ? (
                <div>{errors.assumed_name}</div>
              ) : null}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="inputZip">Data de Nascimento</label>
              <Field name="birth_date"
                id='birth_date'
                placeholder={'Nascimento'}
                className="form-control" type="date" />
            </div>

            <div className="form-group col-md-3">
              <label htmlFor="inputZip">Sexo</label>
              <Field component='select' name='gender' id='gender' className="form-control" >
                <option value=''>-</option>
                <option value='M'>Masculino</option>
                <option value='F'>Femenino</option>
              </Field>
            </div>

            <div className="form-group col-md-3">
              <label htmlFor="inputZip">Naturalidade</label>
              <Field component='select' name='nationality_id' id='nationality_id' className="form-control">
                <option value=''>-</option>
                {naturalyId.map(item =>
                  <option value={item.id}>{item.name}</option>
                )};
            </Field>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputZip">Nacionalidade</label>
              <Field component='select' name='city_id' id='city_id' className="form-control">
                <option value=''>-</option>
                {countryId.map(item =>
                  <option value={item.id}>{item.name}</option>
                )};
            </Field>
            </div>


          </div>


          <div className="form-row">
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">CPF</label>
              <Field name="cpf" render={({ field }) => {
                return <MaskedInput mask={[/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                  {...field}
                  id='cpf'
                  placeholder={'CPF'} className="form-control" />
              }} />
            </div>





            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Raça</label>
              <Field component='select' name='ethnicity_id' id='ethnicity_id' className="form-control">
                <option value=''>-</option>
                {ethnicitiesid.map(item =>
                  <option value={item.id}>{item.name}</option>
                )};
            </Field>
            </div>

            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Estado Civil</label>
              <Field component='select' name='marital_status_id' id='marital_status_id' className="form-control">
                <option value=''>-</option>
                {statusesId.map(item =>
                  <option value={item.id}>{item.name}</option>
                )};
            </Field>
            </div>

            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Tipo de Sangue</label>
              <Field component='select' name='blood_type' id='blood_type' className="form-control">
                <option value=''>-</option>
                <option value='A+'>A+</option>
                <option value='B+'>B+</option>
                <option value='O+'>O+</option>
                <option value='AB+'>AB+</option>
                <option value='A-'>A-</option>
                <option value='B-'>B-</option>
                <option value='O-'>O-</option>
                <option value='AB-'>AB-</option>
              </Field>
            </div>

            <div className="form-group col-md-2">
              <label htmlFor="inputZip">É doador de órgãos?</label>
              <Field component='select' name='organ_donor' id='organ_donor' className="form-control">
                <option value=''>-</option>
                <option value='true'>SIM</option>
                <option value='false'>NÂO</option>
              </Field>
            </div>
          </div>
          <GroupButton>
            <Button primary type="submit">
              Próximo
        </Button>
          </GroupButton>

       
      </Form >
    </Container>
  );
};

export default FormStep1;
