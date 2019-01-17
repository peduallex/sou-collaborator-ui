import React, {Component} from 'react';
import { Formik, validateYupSchema } from 'formik';

import api from "../../services/api";

import FormStep1 from '../../components/FormStep1';
import FormStep2 from '../../components/FormStep2';
// import FormStep3 from '../../components/FormStep3';
// import FormStep4 from '../../components/FormStep4';
// import FormStep5 from '../../components/FormStep5';
// import FormStep6 from '../../components/FormStep6';

class Cadastro extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        step: 1,
        forms: {}
    }

    
    handleNext = (values) => {
        validateYupSchema().then(()=>{
        this.setState({ step: this.state.step + 1 })
        this.setState({ forms: {...values, ...this.state.forms} })
        console.log(this.state.forms)
        }
        )
    }

    handlePrev = () => {
        this.setState({ step: this.state.step - 1 })
    }

    handleSubmit = values => {
        api.post("cadastro", this.state.forms)
    }

    // onclick={this.props.handleNext}
    render() {
        let { step } = this.state;
        return (
                step === 1 ?
                <Formik
                onSubmit={this.handleNext}
                render={FormStep1}
              /> :
                step === 2 ?
                <Formik
                onSubmit={this.handleNext}
                render={FormStep2}
              /> : ''
                // step === 3 ?
                //     <FormStep3 handleNext={this.handleNext} handlePrev={this.handlePrev}/> :
                // step === 4 ?
                //     <FormStep4 handleNext={this.handleNext} handlePrev={this.handlePrev}/> :
                // step === 5 ?
                //     <FormStep5 handleNext={this.handleNext} handlePrev={this.handlePrev}/> :
                // step === 6 ?
                //     <FormStep6 handleSubmit={this.handleSubmit} handlePrev={this.handlePrev}/> :
                // ''
        )
    }
}

export default Cadastro;