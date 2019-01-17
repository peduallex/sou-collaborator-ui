import React from 'react';
import { Form, Field } from 'formik';
import {
    Button,
    Container,
    GroupButton,
    Title,
    SubtitleValidacao
} from './style';


const FormStep5 = props => {
    const {handleNext, handlePrev } = props;
    return (
        <Container>
        <Form>
            <div className="">
            <Title>Cadastro de novo usuário</Title>
            <SubtitleValidacao>*campos obrigatório</SubtitleValidacao>
                
                    <div className="form-group">
                        <h2>Cadastro para pessoa com deficiência</h2>
                        <div className="form-check">
                            <label>
                            <Field name="flag_visually" component="input" type="checkbox"  />
                            Deficiência visual</label>
                        </div>
                        <div className="form-check">
                            <label>
                            <Field name="flag_hearing" component="input" type="checkbox"  />
                            Deficiência auditiva</label>
                        </div>
                        <div className="form-check">
                            <label>
                            <Field name="flag_physically" component="input" type="checkbox"  />
                                Deficiência física</label>
                        </div>
                        <div className="form-check">
                            <label>
                            <Field name="flag_intellectually" component="input" type="checkbox"  />
                                Deficiência Intelectual</label>
                        </div>
                        <div className="form-check">
                            <label>
                            <Field name="description_other_pwd" component="input" type="checkbox"  />
                            Outros</label>
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group col-md-9">
                            <label for="icd">CID</label>
                            <Field name="icd" className="form-control" />
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

    )
}

export default FormStep5;