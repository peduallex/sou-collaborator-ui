import React from 'react';
import { Form, Field } from 'formik';
import MaskedInput from "react-text-mask";

import './estilo.scss'

import {
    GroupButton,
    Button,
    Container,
    Title,
    SubtitleValidacao
} from './styles';


const FormStep2 = props => {
    const { handleNext, handlePrev, handleCep, endereco } = props;
    return (
        <Container>
            <Form>

                <div className="">

                    <Title>Cadastro de novo usuário</Title>
                    <SubtitleValidacao>*campos obrigatório</SubtitleValidacao>
                    <div className="form-row">

                        <div className="form-group col-md-3">
                            <label htmlFor="inputZip">CEP</label>
                            {/* <Field name="address.zipcode"   className="form-control"  onKeyUp={handleCep} /> */}
                            <Field name="address.zipcode" render={({ field }) => {
                                return <MaskedInput mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                                    {...field}
                                    id='zipcode'
                                    placeholder={'CEP'} className="form-control" onKeyUp={handleCep}/>
                            }} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputZip">Logradouro</label>
                            <Field name="address.street" className="form-control" value={endereco.logradouro} />
                        </div>

                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Número</label>
                            <Field name="address.street_number" className="form-control" />
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="inputZip">Complemento</label>
                            <Field name="address.street_complement" className="form-control" />
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="inputZip">Bairro</label>
                            <Field name="address.neighborhood" className="form-control" value={endereco.bairro} />
                        </div>


                        <div className="form-group col-md-3">
                            <label htmlFor="inputZip">Cidade</label>
                            <Field name="city.name" className="form-control" value={endereco.localidade} />

                        </div>

                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">UF</label>
                            <Field name="city.state" className="form-control" value={endereco.uf} />

                        </div>

                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-13">
                            <label htmlFor="inputZip">Tipo Telefone</label>
                            <Field component="select" name="telephone.telephone_type" id="telephone_type" className="form-control">
                                <option value="">-</option>
                                <option value="Celular">Celular</option>
                                <option value="Residencial">Residencial</option>
                            </Field>
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="inputZip">Telefone</label>
                            {/* <Field name="telephones.telephone" className="form-control" /> */}
                            <Field name="telephone.telephone" render={({ field }) => {
                                return <MaskedInput mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                    {...field}
                                    id='telephone'
                                    placeholder={'Telefone'} className="form-control" onKeyUp={handleCep}/>
                            }} />
                        </div>

                        <div className="form-group col-md-13">
                            <label htmlFor="inputZip">Tipo E-mail</label>
                            <Field component="select" name="email.email_type"  className="form-control">
                                <option value="">-</option>
                                <option value="Pessoal">Pessoal</option>
                                <option value="Comercial">Comercial</option>
                                <option value="Educacional">Educacional</option>
                            </Field>
                        </div>

                        <div className="form-group col-md-04">
                            <label htmlFor="inputZip">E-mail</label>
                               <Field name="email.email" className="form-control" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <label htmlFor="inputZip">Cargo</label>
                            <Field component="select" name="occupation_id" id="cargo" className="form-control">
                                <option value="">-</option>
                                <option value="1">Analista</option>
                                <option value="2">RH</option>
                            </Field>
                        </div>


                        <div className="form-group col-md-5">
                            <label htmlFor="inputZip">Area</label>
                            <Field component="select" name="department_id" id="are" className="form-control">
                                <option value="">-</option>
                                <option value="1">Recursos Humano</option>
                                <option value="2">Administrativo</option>
                            </Field>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <label htmlFor="ctps">Primeiro Emprego CTPS</label>
                            {/* <input type="text" className="form-control" id="first_job_ctps" /> */}
                            <Field name="first_job_ctps"  className="form-control" />
                        </div>

                        <div className="form-group col-md-5">
                            <label htmlFor="servidor">Primeiro Emprego Servidor</label>
                            {/* <input type="text" className="form-control" id="first_job_public" /> */}
                            <Field name="first_job_public" className="form-control" />
                        </div>
                    </div>



                    <GroupButton>
                        <Button secondary onClick={handlePrev}>
                            Voltar
			     </Button>

                        <Button primary onClick={handleNext}>
                            Próxima
				</Button>
                    </GroupButton>

                </div>

            </Form>
        </Container>
    );
};

export default FormStep2;
