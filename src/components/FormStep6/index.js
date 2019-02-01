import React, { Component } from 'react';
import { Form, Field } from 'formik';
//import MaskedInput from "react-text-mask";
//import Moment from 'moment';
import {
    Button,
    IMG,
    LABEL,
    GroupButton,
    Container,
    Subtitle,
    Title,
    SubtitleValidacao

} from './style';


import add from '../../assets/img/add.png';
import remove from '../../assets/img/remove.png';




class FormStep6 extends Component {
    constructor() {
        super();
        this.state = {
            shareholders: [{ name: '' }],
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

    // handleSubmit = (evt) => {
    //     const { name, shareholders } = this.state;
    //     alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
    // }

    handleAddShareholder = () => {
        this.setState({ shareholders: this.state.shareholders.concat([{ name: '' }]) });
    }

    handleRemoveShareholder = (idx) => () => {
        this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
    }

    render() {
        const {handleNext, handlePrev, handleBlur, Calcular, dismissal_date } = this.props;
        return (
            <Container>
                <Form>
                    <div className="">
                        <Title>Cadastro de novo usuário</Title>
                        <SubtitleValidacao>*campos obrigatório</SubtitleValidacao>

                        <Subtitle>Dados Contratuais</Subtitle>

                        <div className="form-row">
                            <LABEL>Prazo determinado</LABEL>

                            <div className="form-check form-check-inline">
                                <Field name="work_contract.flag_fixed_term" component="input" type="radio" value="S" />
                                <label className="form-check-label" for="inlineRadio1">SIM</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field name="flag_fixed_term" component="input" type="radio" value="N" />
                                <label className="form-check-label" for="inlineRadio1">NÂO</label>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label for="work_contractdata_admissao">Data admissão</label>
                                 <Field name="work_contract.hiring_date" className="form-control"  type="date"  onBlur={(e) => {
                                Calcular(e);
                                handleBlur(e);
                                }} />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="prazo">Prazo</label>
                                <Field name="work_contract.term" className="form-control" onBlur={(e) => {
                                    Calcular(e);
                                    handleBlur(e);
                                }}  />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="data_fim_contrato">Data fim contrato</label>
                                <Field name="work_contract.dismissal_date"  type="date" className="form-control" 
                                 value={dismissal_date}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label for="novo_prazo">Novo prazo</label>
                                <Field name="work_contract.new_end_date" type="date" className="form-control" />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="data_fim">Data fim </label>
                                <Field name="work_contract.new_term"  className="form-control" />
                            </div>


                        </div>

                        <h2>Benefício</h2>

                        {this.state.shareholders.map((shareholder, idx) => (
                            <div>

                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label for="novo_prazo">Tipo de benefício</label>
                                        <Field component='select' name={`tax_benefits[${idx}].code`} id='tipo_beneficio' className="form-control"  >
                                            <option value=''>-</option>
                                            <option value='1'>Tipo 1</option>
                                            <option value='2'>Tipo 2</option>
                                        </Field>
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label for="data_fim">Valor </label>
                                        <Field name={`tax_benefits[${idx}].value`} className="form-control" />
                                    </div>
                                    <IMG onClick={this.handleAddShareholder} src={add} ></IMG>
                                    <IMG onClick={this.handleRemoveShareholder(idx)} src={remove} ></IMG>
                                </div>

                            </div>


                        ))}




                        <GroupButton>

                            <Button secondary onClick={handlePrev}>
                                VOLTAR
                    </Button>

                            <Button primary onClick={handleNext}>
                                VISUALIZAR
                    </Button>


                        </GroupButton>





                    </div>

                </Form >
            </Container>
        )
    }
}

export default FormStep6;