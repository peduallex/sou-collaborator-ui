
import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { Title, Subtitle, Row, Col, Data, Item, Datum,Button,GroupButton } from './styles';
import editar from '../../assets/img/editar.jpg';
import { Link } from 'react-router-dom'
import api from '../../services/api';


//const Visualizar = ({ handleSubmit, buttons, values }) => (

class Visualizar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countryId: [],
      naturalyId: []
    }
  }

  async componentWillMount() {
    const countryId = await api.get('countries');
    const naturalyId = await api.get('nationalities');
    this.setState({
      countryId: countryId.data.data,
      naturalyId: naturalyId.data.data
    });
  }

  render() {
    const { handleSubmit, buttons, values} = this.props;
    return (
      <Formik onSubmit={handleSubmit}>
        <Form>
          {/*{console.log(values)} */}
          <Title>{values.name + " "}</Title>
          <Subtitle>Dados Pessoais
          <Link to={{
              pathname: '/cadastro',
              state: { 
                step: 1,
                values
               }
            }}><img src={editar} />
          </Link>
          </Subtitle>
          <Row>
            <Col>
              <Data>
                <Item>
                  Nome <Datum>{values.name}</Datum>
                </Item>
                <Item>
                  Sobrenome <Datum>{values.last_name}</Datum>
                </Item>
                <Item>
                  Nome Social
                <Datum>{values.assumed_name || 'Não possui'}</Datum>
                </Item>
                <Item>
                 
                    Data de nascimento{' '}
                    <Datum>
                      {values.birth_date}
                    </Datum>
                  </Item>
                
                <Item>
                  Sexo{' '}
                  <Datum>
                    {values.gender === 'F' ? 'Feminino' : 'Masculino'}
                  </Datum>
                </Item>

                {this.state.countryId.map(item => {
                  if (item.id == values.country_id)
                    return <Item> Naturalidade <Datum>{item.name}</Datum></Item>
                })}

                {this.state.naturalyId.map(item => {
                  if (item.id == values.nationality_id)
                    return <Item> Nacionalidade <Datum>{item.name}</Datum></Item>
                })}

                <Item>
                  CPF{' '}
                  <Datum>
                    {values.cpf}
                  </Datum>
                </Item>
                <Item>
                  Raça <Datum>{values.name}</Datum>
                </Item>
                <Item>
                  Estado Civil <Datum>{values.name}</Datum>
                </Item>
                <Item>
                  Tipo de Sanguíneo{' '}
                  <Datum>{values.blood_type}</Datum>
                </Item>
                <Item>
                  Doador de órgãos?{' '}
                  <Datum>{values.organDonor ? 'Sim' : 'Não'}</Datum>
                </Item>
              </Data>
            </Col>
            </Row>
            <Subtitle>Endereço</Subtitle>
            <Link to={{
            pathname: '/cadastro',
            state: 
            { step: 2,
              values 
            }
            }}><img src={editar} /></Link>
            <Row>
            <Col>
              <Data>
                <Item>
                  Logradouro <Datum>{values.address.street}</Datum>
                </Item>
                <Item>
                  Número <Datum>{values.address.street_number}</Datum>
                </Item>
                <Item>
                  CEP{' '}
                  <Datum>
                    {values.address.zipcode}
                  </Datum>
                </Item>
                <Item>
                  Bairro <Datum>{values.address.neighborhood}</Datum>
                </Item>
                <Item>
                  Cidade <Datum>{values.city.name}</Datum>
                </Item>
                <Item>
                  Estado <Datum>{values.city.state}</Datum>
                </Item>
                <Item>
                  Complemento{' '}
                  <Datum>
                    {values.address.street_complement || 'Não possui'}
                  </Datum>
                </Item>
                <Item>
                  Celular{' '}
                  <Datum>
                    {values.cellphone}
                  </Datum>
                </Item>
                <Item>
                  E-mail pessoal <Datum>{values.email.email}</Datum>
                </Item>
                <Item>
                  E-mail profissional
                 <Datum>{values.professionalEmail}</Datum>
                </Item>
              </Data>
            </Col>
          </Row>
          <Subtitle>Dependentes</Subtitle>
          <Link to={{
            pathname: '/cadastro',
            state: 
            { step: 3,
              values 
            }
            }}><img src={editar} /></Link>
          <Row>
            <Col key={values.dependents.id}>
              {values.dependents.map(function (item, i) {
                return <Item key={i}>
                  Nome
               <Item>{item.name}</Item>
                  {/* Tipo
               <Item> {item.dependent_type.name}</Item> */}
                  Data de Nascimento
                <Item> {item.birth_date}</Item>
                  CPF
                <Item>{item.cpf}</Item>
                </Item>
              })}
            </Col>
          </Row>

          <Subtitle>Filiação</Subtitle>
          
          <Row>
            <Col key={values.parentages.id}>
              {values.parentages.map(function (item, i) {
                return <Item key={i}>
                  Nome
               <Item>{item.name}</Item>
                  Tipo
               {/* <Item> {item.parentage_type.name}</Item> */}
                  Data de Nascimento
                <Item> {item.birth_date}</Item>
                  Sexo
                <Item>{item.gender}</Item>
                </Item>
              })}
            </Col>
          </Row>
          <Subtitle>Escolaridade</Subtitle>
          <Link to={{
            pathname: '/cadastro',
            state: 
            { step: 4,
              values 
            }
            }}><img src={editar} /></Link>
          <Row>
            <Col>
              <Data>
                <Item>
                  Instituição
                <Datum> {values.education.education_institution}</Datum>
                </Item>
                <Item>
                  Grau
                <Datum> {values.education.education_level}</Datum>
                </Item>
                <Item>
                  Curso
               <Datum> {values.education.course}</Datum>
                </Item>
                <Item>
                  Data Inicio
                <Datum> {values.education.starting_date}</Datum>
                </Item>
                <Item>
                  Data Fim
                <Datum> {values.education.finishing_date}</Datum>
                </Item>
              </Data>
            </Col>
          </Row>
          <Subtitle>Documentos</Subtitle>
          <Link to={{
            pathname: '/cadastro',
            state: 
            { step: 5,
              values 
            }
            }}><img src={editar} /></Link>
          <Row>
            <Col key={values.identities.id}>
              {values.identities.map(function (item, i) {
                return <Data key={i}>
                  <Item>
                    Tipo de Documento
               {/* <Datum> {item.identity_type.name}</Datum> */}
                  </Item>
                  <Item>
                    Número
               <Datum> {item.number}</Datum>
                  </Item>
                  <Item>
                    Número de série
               <Datum> {item.series_number}</Datum>
                  </Item>
                  <Item>
                    Data emissão
               <Datum> {item.date_issued}</Datum>
                  </Item>
                  <Item>
                    Órgão emissor
               {/* <Datum> {item.issuing_entity.name}</Datum> */}
                  </Item>
                  <Item>
                    UF emissão
               <Datum> {item.state_issued}</Datum>
                  </Item>
                  <Item>
                    Zona
               <Datum> {item.zone}</Datum>
                  </Item>
                  <Item>
                    Seção
               <Datum> {item.section}</Datum>
                  </Item>
                </Data>
              })}
            </Col>
          </Row>
          <Subtitle>Dados Contratuais</Subtitle>
          <Link to={{
            pathname: '/cadastro',
            state: 
            { step: 6,
              values 
            }
            }}><img src={editar} /></Link>
          <Row>
            <Col>
              <Data>
                <Item>
                  Prazo determinado
               <Datum> {values.work_contract.flag_fixed_term}</Datum>
                </Item>
                <Item>
                  Data admissão
               <Datum> {values.work_contract.hiring_date}</Datum>
                </Item>
                <Item>
                  Prazo
               <Datum> {values.work_contract.term}</Datum>
                </Item>
                <Item>
                  Data fim contrato
               <Datum> {values.work_contract.dismissal_date}</Datum>
                </Item>
                <Item>
                  Novo prazo
               <Datum> {values.work_contract.new_end_date}</Datum>
                </Item>
                <Item>
                  Data fim
               <Datum> {values.work_contract.new_term}</Datum>
                </Item>
              </Data>
            </Col>
          </Row>

          {/* <GroupButton>
          <Button primary to="/cadastro" >
            FINALIZAR
           </Button>
        </GroupButton> */}
        {buttons}
        </Form>
      </Formik>
      //)
    )
  }
}
export default Visualizar