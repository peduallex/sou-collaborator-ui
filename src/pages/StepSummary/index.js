import React, { Component } from 'react';
import LoadingScreen from 'react-loading-screen';
import Visualizar from '../Visualizar';
import { Container, GroupButton, Button } from './styles';
import api from '../../services/api';


class StepSummary extends Component {

  state = {
    process: {
      personal: {
        name: '',
        lastName: '',
        last_name:'',
        assumedName: '',
        birthDate: '',
        gender: '',
        countryBirth: '',
        nationality: 'Brasileira',
        race: '',
        marital: '',
        bloodType: '',
        organDonor: '',
        cellphone: '',
        personalEmail: '',
        professionalEmail: '',
        documents: {
          rg: {
            number: '273044576',
            issuer: 'Secretaria de Segurança Pública'
          },
          cpf: '17143053929',
          electoralCard: '',
          certificateReservist: ''
        },
        address: {
          street: 'Rua da Vitória',
          number: '66',
          zip: '07600-100',
          district: 'Anhangabau',
          city: 'São Paulo',
          state: 'SP'
        }
      },
      grantor: {
        cnpj: '12.321.312/3213-21',
        name: 'daswqdsaqdw',
        phone: ['(12) 3213-21321'],
        fax: '',
        zip: '08110100',
        street: 'Rua Jangaba',
        complement: '',
        number: '132',
        city: 'São Paulo',
        federatedState: 'SP'
      },
      responsible: {
        name: 'dwqdwq',
        phone: ['(12) 3123-12321'],
        email: 'dasdsa@dasda.com'
      },
      professor: {
        name: 'saddwqsa',
        phone: ['(21) 3213-12312'],
        email: 'dsadsa@dasdsa.com'
      },
      files: {
        work: {},
        explotation: {},
        activities: {}
      }
    }
  };


  //async componentWillMount() {
    // const personal = await api.get('personal');
    // this.setState([  personal.data.data, 
    // ]);
    //  console.log(personal)



  //};

  async componentDidMount() {
  //  this.toggleLoading();

    const { step, process } =
      JSON.parse(localStorage.getItem('state')) || this.state;
    const resPersonal = await api.get('/personal/1');
    this.setState({
      step: Math.min(step, 2),
     process: {
        ...process  ,
        personal: {
          ...resPersonal.data   
        },
      }
    });
  }

  render() {
    const { process, loading } = this.state;
    return (
      <Container>
        <LoadingScreen
          loading={loading}
          bgColor="#FFF"
          spinnerColor="#ED3B48"
        />
        <Visualizar values={process}initialValues={process} />
        <GroupButton>
          <Button primary to="/internship">
            Voltar
           </Button>
        </GroupButton>
      </Container>
    );
  }
}

export default StepSummary;
