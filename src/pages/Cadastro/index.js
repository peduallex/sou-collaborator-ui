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


  handleSubmit = values => {
    //api.post('users', this.state.email);
    api.post('employees', this.state.forms);
    console.log(values);
    // api_andresses.post('addresses', this.state.forms.addresses);
    this.props.history.push("/Visualizar")
  };


  // handleClick = () => {
  //   //this.props.onHeaderClick(this.props.values);
  //   this.setState({ forms: { ...values } });
  //   console.log(values);
  // }

  Calcular = event => {
    this.setState({ [event.target.name]: event.target.value });
    const date = new Date(this.state.hiring_date);
    date.setDate((date.getDate())  +  date.getMonth() + 1 + Number(this.state.term))
    this.setState({ dismissal_date: moment(date).format('YYYY-MM-DD') })
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
            street_type: '',
            zipcode: '',
            street_complement: '',
            state: '',
            city_id: null
          },
          city: {
            name: '',
            state: '',
            code: ''
          },
          telephone: {
            ddd: '',
            telephone: '',
            telephone_type: '',
            ddi: ''
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
                description: '',
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
            hiring_date: '',
            end_date: '',
            examination_date: '',
            dismissal_date: '',
            flag_fixed_term: '',
            term: '',
            new_end_date: '',
            new_term: '',
            contracting_regime_id: '',
            address_id: null,
            employee_id: null
          },
          tax_benefits:
            [
              {
                name: '',
                code: '',
                value: ''
              }
            ]

        }
        }

        validationSchema={this.getValidationShema}
        render={props => <FormStep1{...props} naturalyId={this.state.naturalyId} countryId={this.state.countryId} statusesId={this.state.statusesId} ethnicitiesid={this.state.ethnicitiesid}></FormStep1>}
      />
    ) : step === 2 ? (
      <Formik onSubmit={this.handleNext}
        // initialValues={{
        //   addresses: {
        //     neighborhood: "",
        //     street: "",
        //     street_number: "",
        //     street_type: "",
        //     zipcode: "",
        //     street_complement: "",
        //     state: "",
        //     city_id: ""
        //   },
        // }}
        render={props => <FormStep2{...props} handlePrev={this.handlePrev} handleCep={this.handleCep} endereco={this.state.endereco} ></FormStep2>}
      />
    ) : step === 3 ? (
      <Formik onSubmit={this.handleNext}
        //  initialValues={{
        //    dependents: {
        //      name: '1',
        //      dependent_type_id: '1',
        //      birth_date: '1',
        //      cpf: '1',
        //      employee_id: 'null',
        //    },
        //    parentages:
        //     {
        //       name: '1',
        //       gender: '1',
        //       birth_date: '1111-11-11',
        //       parentage_type_id: '1'
        //     }

        //  }}
        render={props => <FormStep3 {...props} handlePrev={this.handlePrev} />} />
    ) : step === 4 ? (
      <Formik onSubmit={this.handleNext}
        // initialValues={{
        //   identities: 
        //     {
        //       date_issued: '1111-11-11',
        //       description: '',
        //       number: '',
        //       series_number: '',
        //       state_issued: '1111-11-11',
        //       zone: '11',
        //       section: '11',
        //       identity_type_id: '1',
        //       issuing_entity_id: '1'
        //     }
        // }}

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
