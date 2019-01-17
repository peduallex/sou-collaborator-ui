import React, { Component } from 'react';
import { Form, Field } from 'formik';
import {
    Button,
    IMG,
    GroupButton,
    Container,
    Title,
    Subtitle,
    SubtitleValidacao
} from './style';
import add from '../../assets/img/add.png';
import remove from '../../assets/img/remove.png';

class FormStep4 extends Component {
    constructor() {
        super();
        this.state = {
            shareholders: [{}],
        };
    }

    handleNameChange = (evt) => {
        this.setState({ name: evt.target.value });
    }

    handleShareholderNameChange = (idx) => (evt) => {
        const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
            if (idx !== sidx) return shareholder;
            return { ...shareholder, name: evt.target.value };
        });

        this.setState({ shareholders: newShareholders });
    }

    handleSubmit = (evt) => {
        const { name, shareholders } = this.state;
        alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
    }

    handleAddShareholder = () => {
        this.setState({ shareholders: this.state.shareholders.concat([{ name: '' }]) });
    }

    handleRemoveShareholder = (idx) => () => {
        this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
    }



    render() {
        const { handleNext, handlePrev } = this.props;
        return (
            <Container>
                <Form>
                    <div className="">
                        <Title>Cadastro de novo usuário</Title>
                        <SubtitleValidacao>*campos obrigatório</SubtitleValidacao>

                        <div className="form-row">
                            {/* <div className="form-group col-md-3">
                        <label for="nivel_escolaridade">Escolaridade</label>
                        <Field name="education_level" className="form-control" />
                    </div>  */}

                            <div className="form-group col-md-6">
                                <label for="escolaridade_instituicao">Instituição</label>
                                <Field name="education.education_institution" className="form-control" />
                            </div>

                            <div className="form-group col-md-6">
                                <label for="escolaridade_grau">Grau</label>
                                <Field name="education.education_level" className="form-control" />
                            </div>
                        </div>


                        <div className="form-row">
                            <div className="form-group col-md-1">
                                <label for="escolaridade_curso">Curso</label>
                                <Field name="education.course" className="form-control" />
                            </div>
                        </div>


                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label for="escolaridade_grau">Data Inicio</label>
                                <Field name="education.starting_date" 
                                        id='starting_date'
                                        placeholder={'Data Inicio'} className="form-control" type="date" />
                            </div>

                            <div className="form-group col-md-3">
                                <label for="escolaridade_curso">Data Fim</label>
                                <Field name="education.finishing_date" 
                                        id='finishing_date'
                                        placeholder={'Data Fim'} className="form-control" type="date" />
                            </div>

                        </div>


                        <Subtitle>Documentos</Subtitle>


                        {this.state.shareholders.map((shareholder, idx) => (
                            <div>
                                <div className="form-row">
                                    <div className="form-group col-md-04">
                                        <label htmlFor="tipo_documento">Tipo de documento</label>
                                        <Field component='select' name={`identities.identity_type_id[${idx}]`} id='identity_type_id' className="form-control">
                                            <option value=''>-</option>
                                            <option value="1">Certidão</option>
                                            <option value="2">RG</option>
                                            <option value="3">CPF</option>
                                            <option value="4">Carteira de trabalho</option>
                                            <option value="5">Título de eleitor </option>
                                            <option value="6">CNH</option>
                                        </Field>
                                    </div>
                                    <div className="form-group col-md-04">
                                        <label htmlFor="documento_numero">Número do documento</label>
                                        <Field name={`identities[${idx}].number`} className="form-control" />
                                    </div>
                                    <div className="form-group col-md-04">
                                        <label htmlFor="documento_numero_serie">Número de série</label>
                                        <Field name={`identities[${idx}].series_number`} className="form-control" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-2">
                                        <label htmlFor="documento_data_emissao">Data de emissão</label>
                                        <Field name={`identities[${idx}].date_issued`}
                                                id='date_issued'
                                                placeholder={'Data de emissão'} className="form-control"  type="date"/>
                                    </div>

                                    <div className="form-group col-md-2">
                                        <label htmlFor="identities.orgao_emissor">Orgão emissor</label>
                                        <Field component='select' name={`identities[${idx}].state_issued`} id='id' className="form-control">
                                            <option value=''>-</option>
                                            <option value="SSP">SSP</option>
                                        </Field>
                                    </div>

                                    <div className="form-group col-md-2">
                                        <label htmlFor="documento_emissor_uf">UF emissor</label>
                                        <Field component='select' name={`identities[${idx}].state_issued`} id='state_issued' className="form-control">
                                            <option value=''>-</option>
                                            <option value="">Selecione</option>
                                            <option value="AC">AC</option>
                                            <option value="AL">AL</option>
                                            <option value="AM">AM</option>
                                            <option value="AP">AP</option>
                                            <option value="BA">BA</option>
                                            <option value="CE">CE</option>
                                            <option value="DF">DF</option>
                                            <option value="ES">ES</option>
                                            <option value="GO">GO</option>
                                            <option value="MA">MA</option>
                                            <option value="MG">MG</option>
                                            <option value="MS">MS</option>
                                            <option value="MT">MT</option>
                                            <option value="PA">PA</option>
                                            <option value="PB">PB</option>
                                            <option value="PE">PE</option>
                                            <option value="PI">PI</option>
                                            <option value="PR">PR</option>
                                            <option value="RJ">RJ</option>
                                            <option value="RN">RN</option>
                                            <option value="RS">RS</option>
                                            <option value="RO">RO</option>
                                            <option value="RR">RR</option>
                                            <option value="SC">SC</option>
                                            <option value="SE">SE</option>
                                            <option value="SP">SP</option>
                                            <option value="TO">TO</option>
                                        </Field>
                                    </div>

                                    <div className="form-group col-md-2">
                                        <label htmlFor="documento_zona">Zona</label>
                                        <Field name={`identities[${idx}].zone`} className="form-control" />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="documento_secao">Seção</label>
                                        <Field name={`identities[${idx}].section`} className="form-control" />
                                    </div>

                                    <IMG onClick={this.handleAddShareholder} src={add} ></IMG>
                                    <IMG onClick={this.handleRemoveShareholder(idx)} src={remove} ></IMG>

                                </div>



                            </div>

                        ))}




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
        )
    }
}

export default FormStep4;