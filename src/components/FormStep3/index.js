import React, { Component } from 'react';
import { Form, Field } from 'formik';
import MaskedInput from "react-text-mask";


import {
    GroupButton,
    Button,
    IMG,
    Container,
    DIV,
    Title,
    Subtitle,
    SubtitleValidacao

} from './style';


import add from '../../assets/img/add.png';
import remove from '../../assets/img/remove.png';


class FormStep3 extends Component {
    constructor() {
        super();
        this.state = {
            shareholders: [{}],
            shareholders2: [{}],
        };
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
        this.setState({
            shareholders: this.state.shareholders.concat([{ name: '' }])
        });
    }

    handleRemoveShareholder = (idx) => () => {
        this.setState({
            shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
        });
    }

    // {}

    handleShareholderNameChange2 = (idxx) => (evt) => {
        const newShareholders2 = this.state.shareholders2.map((shareholder2, sidxx) => {
            if (idxx !== sidxx) return shareholder2;
            return { ...shareholder2, name: evt.target.value };
        });

        this.setState({ shareholders2: newShareholders2 });
    }


    handleAddShareholder2 = () => {
        this.setState({
            shareholders2: this.state.shareholders2.concat([{ name: '' }])
        });
    }

    handleRemoveShareholder2 = (idxx) => () => {
        this.setState({
            shareholders2: this.state.shareholders2.filter((s, sidxx) => idxx !== sidxx)
        });
    }

    render() {

        const { handleNext, handlePrev } = this.props;
        return (

            <Container>
                <Form>

                    <Title>Cadastro de novo usuário</Title>
                    <SubtitleValidacao>*campos obrigatório</SubtitleValidacao>


                    <Subtitle>Dependente</Subtitle>

                    {
                        this.state.shareholders.map((shareholder, idx) => (
                            <div>
                                <div className="form-row">
                                    <div className="form-group col-md-9">
                                        <Field
                                            name={`dependents[${idx}].name`}
                                            placeholder="Nome"
                                            className="form-control"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <label htmlFor="firstName">Tipo Dependente</label>
                                        <Field component='select' name={`dependents[${idx}].dependent_type_id`} className="form-control" >
                                            <option value=''>-</option>
                                            <option value='1'>Filhos</option>
                                            <option value='2'>Companheira (o)</option>
                                        </Field>
                                    </div>

                                    <div className="form-group col-md-3">
                                        <label htmlFor="birthdate_depentende2">Data de Nascimento</label>
                                        <Field name={`dependents[${idx}].birth_date`}
                                            id='birth_date'
                                            placeholder={'Nascimento'} className="form-control" type="date" />
                                    </div>

                                    <div className="form-group col-md-3">
                                        <label htmlFor="cpf_dependente">CPF</label>
                                        <Field name={`dependents[${idx}].cpf`} render={({ field }) => {
                                            return <MaskedInput mask={[/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                                                {...field}
                                                id='cpf'
                                                placeholder={'CPF'} className="form-control" />
                                        }} />
                                    </div>

                                    <IMG onClick={this.handleAddShareholder} src={add} ></IMG>
                                    <IMG onClick={this.handleRemoveShareholder(idx)} src={remove} ></IMG>
                                </div>
                            </div>
                        ))
                    }


                    <Subtitle>Filiação</Subtitle>

                    {this.state.shareholders2.map((shareholder2, idxx) => (
                        <div>
                            <div className="form-row">
                                <div className="form-group col-md-9">
                                    <label htmlFor="name_filiacao">Nome</label>
                                    <Field name={`parentages[${idxx}].name`} className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">

                                <div className="form-group col-md-3">
                                    <label htmlFor="tipo_filiacao">Tipo</label>
                                    <Field component='select' name={`parentages[${idxx}].parentage_type_id`} id='parentage_type_id' className="form-control" >
                                        <option value=''>-</option>
                                        <option value='1'>Tipo 1</option>
                                        <option value='2'>Tipo 2</option>
                                    </Field>
                                </div>

                                <div className="form-group col-md-3">
                                    <label htmlFor="birthdate_depentende2">Data de Nascimento</label>
                                    <Field name={`parentages[${idxx}].birth_date`}
                                        id='birth_date'
                                        placeholder={'Nascimento'} className="form-control" type="date" />
                                </div>

                                <div className="form-group col-md-3">
                                    <label htmlFor="sexo">Sexo</label>
                                    <Field component='select' name={`parentages[${idxx}].gender`} id='gender' className="form-control">
                                        <option value=''>-</option>
                                        <option value='M'>Masculino</option>
                                        <option value='F'>Femenino</option>
                                    </Field>
                                </div>
                                <IMG onClick={this.handleAddShareholder2} src={add} ></IMG>
                                <IMG onClick={this.handleRemoveShareholder2(idxx)} src={remove} ></IMG>
                            </div>

                        </div>

                    ))
                    }

                    <DIV>
                        <GroupButton>
                            <Button secondary onClick={handlePrev}>
                                Voltar
                    </Button>

                            <Button primary onClick={handleNext}>
                                Próxima
                    </Button>
                        </GroupButton>

                    </DIV>
                </Form>
            </Container>

        );

    }

}

export default FormStep3;