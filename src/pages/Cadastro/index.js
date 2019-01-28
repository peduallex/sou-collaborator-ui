import React, { Component } from 'react';
import { Formik } from 'formik';
import FormStep1 from '../../components/FormStep1';
import FormStep2 from '../../components/FormStep2';
import FormStep3 from '../../components/FormStep3';
import FormStep4 from '../../components/FormStep4';
import FormStep5 from '../../components/FormStep5';
import FormStep6 from '../../components/FormStep6';
import api from '../../services/api';
import cep from '../../services/cep';
import moment from 'moment';


class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      edit: false,

      forms: [],
      addresses: [],
      naturalyId: [],
      countryId: [],
      statusesId: [],
      ethnicitiesid: [],
      endereco: {},
      emails: [],
      dependents: [],
      hiring_date: '',
      term: '' ,
      dismissal_date: ''
    };
  }

  async componentWillMount() {
    const { location, history } = this.props

    if (location.state && location.state.step) {
      this.setState({ step: location.state.step, edit: true })
      history.push('/cadastro', {})
    }
    const naturalyId = await api.get('nationalities');
    const countryId = await api.get('countries');
    const statusesId = await api.get('marital-statuses');
    const ethnicitiesid = await api.get('ethnicities');
    this.setState({
      naturalyId: naturalyId.data.data,
      countryId: countryId.data.data,
      statusesId: statusesId.data.data,
      ethnicitiesid: ethnicitiesid.data.data
    });
  };

  handleNext = values => {
    this.setState({ step: this.state.step + 1 });
    console.log(values);
    this.setState({ forms: { ...values } });
  };

  handlePrev = () => {
    this.setState({ step: this.state.step - 1 });
    console.log(this.state.forms);
  };


  handleSubmit = async values => {
    //api.post('employees', this.state.forms);
    // const id = await api.post('employees', this.state.forms)
     //this.props.history.push("/StepSummary/" + id)
     this.props.history.push("/employees", { values })
    //this.props.history.push("/Visualizar")
  };

  Calcular = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      const date = new Date(this.state['work_contract.hiring_date']);
      date.setDate((date.getDate())  +  date.getMonth() + 1 + Number(this.state['work_contract.term']))
      this.setState({ dismissal_date: moment(date).format('YYYY-MM-DD') })
      this.setState({ date: this.state['work_contract.dismissal_date'] })
    });
  };

  handleCep = async ({ target }) => {
    const res = await cep.get(`${target.value}/json`);
    this.setState({ endereco: res.data });
  }
  // getValidationShema = () => {
  //   return Yup.object().shape({
  //     name: Yup.string()
  //       .min(2, 'Too Short!')
  //       .max(50, 'Too Long!')
  //       .required('Required'),
  //     lastName: Yup.string()
  //       .min(2, 'Too Short!')
  //       .max(50, 'Too Long!')
  //       .required('Required'),
  //     assumed_name: Yup.string()
  //       .min(2, 'Too Short!')
  //       .max(50, 'Too Long!')
  //       .required('Required'),
  /*gender: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
  place_of_birth: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
  nationality: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
  raca: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),*/

  //cpf: Yup.int()
  //.email('Invalid email')
  //.required('Required')

  // email: Yup.string()
  //  .email('Invalid email')
  //.required('Required')
  //   });
  // };

  render() {
    let { step } = this.state;
    return step === 1 ? (
      <Formik
        onSubmit={this.handleNext}
        initialValues={{
          name: '',
          last_name: '',
          birth_date: '',
          gender: '',
          flag_on: true,
          cpf: '',
          blood_type: '',
          organ_donor: true,
          assumed_name: '',
          flag_pwd: true,
          flag_visually: true,
          flag_hearing: true,
          flag_physically: true,
          flag_intellectually: true,
          description_other_pwd: "description3",
          first_job_ctps: '',
          first_job_public: '',
          icd: '',
          country_id: '',
          nationality_id: '',
          ethnicity_id: '',
          marital_status_id: '',
          address: {
             neighborhood: '',
             street: '',
             street_number: '',
             street_type: 'eeeee',
             zipcode: '',
             street_complement: '',
             state: 'xx',
             city_id: null
          },
          city: {
            name: '',
            state: '',
            code: '00000'
          },
          telephone: {
            ddd: 'DDD',
            telephone: '',
            telephone_type: '',
            ddi: 'DDI'
          },
          email: {
            email: '',
            email_type: ''
          },
          department_id: '',
          dependents:
            [
              {
                name: '',
                birth_date: '',
                cpf: '',
                employee_id: null,
                dependent_type_id: ''
              }
            ],
          education: {
            course: '',
            education_level: '',
            education_institution: '',
            starting_date: '',
            finishing_date: '',
            employee_id: null
          },
          parentages:
            [
              {
                 name: '',
                 gender: '',
                 birth_date: '',
                 parentage_type_id: ''

              }
            ],
          occupation_id: '',
          identities:
            [
              {
                date_issued: '',
                description: 'xxxx',
                number: '',
                series_number: '',
                state_issued: '',
                zone: '',
                section: '',
                identity_type_id: '',
                issuing_entity_id: ''
              }
            ],
          work_contract: {
            hiring_date: '2005-09-21',
            end_date: '2005-09-21',
            examination_date: '2005-09-21',
            dismissal_date: '2005-09-21',
            flag_fixed_term: 'S',
            term: '10',
            new_end_date: '2005-09-21',
            new_term: '100000',
            contracting_regime_id: '1',
          },
          tax_benefits:
            [
              {
                name: 'zzz',
                code: '1234567890',
                value: '10.10'
              }
            ]

        }
        }

        validationSchema={this.getValidationShema}
        render={props => <FormStep1{...props} naturalyId={this.state.naturalyId} countryId={this.state.countryId} statusesId={this.state.statusesId} ethnicitiesid={this.state.ethnicitiesid}></FormStep1>}
      />
    ) : step === 2 ? (
      <Formik onSubmit={this.handleNext}
        render={props => <FormStep2{...props} handlePrev={this.handlePrev} handleCep={this.handleCep} endereco={this.state.endereco} ></FormStep2>}
      />
    ) : step === 3 ? (
      <Formik onSubmit={this.handleNext}
        render={props => <FormStep3 {...props} handlePrev={this.handlePrev} />} />
    ) : step === 4 ? (
      <Formik onSubmit={this.handleNext}
        render={formikProps => <FormStep4 {...formikProps} handlePrev={this.handlePrev} />} />
    ) : step === 5 ? (
      <Formik onSubmit={this.handleNext}
        render={formikProps => <FormStep5 {...formikProps} handlePrev={this.handlePrev} />} />
    ) : step === 6 ? (
      <Formik onSubmit={this.handleSubmit}
        render={props => <FormStep6 {...props} handlePrev={this.handlePrev} Calcular={this.Calcular} dismissal_date={this.state.dismissal_date} />} />
    ) : (
      ''
  );
  }
}

export default Cadastro;
