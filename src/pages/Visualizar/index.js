
import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { Title, Subtitle, Row, Col, Data, Item, Datum } from './styles';
import editar from '../../assets/img/editar.jpg';
import { Link } from 'react-router-dom'
import api from '../../services/api';


//const Visualizar = ({ handleSubmit, buttons, values }) => ( 

class Visualizar extends Component {

   async componentWillMount() {
   const countryId = await api.get('countries/1');
    this.setState({
      countryId: countryId.data.data

    });
    //console.log(countryId)
    }
  render() {
    const { handleSubmit, buttons, values } = this.props;
    return (
        <Formik onSubmit={handleSubmit}>
        <Form>
          {console.log(values)}
          <Title>{values.name + " "}</Title>
          <Subtitle>Dados Pessoais
  <Link to={{
              pathname: '/cadastro',
              state: { step: 1 }
            }}><img src={editar} /></Link>
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
                  <Item>
                    Data de nascimento{' '}
                    <Datum>
                      {values.birth_date}
                    </Datum>
                  </Item>
                </Item>
                <Item>
                  Sexo{' '}
                  <Datum>
                    {values.gender === 'F' ? 'Feminino' : 'Masculino'}
                  </Datum>
                </Item>
                {/* <Item>
          Naturalidade <Datum>{values.country_id}</Datum>
        </Item> */}


                <Row>
                  {/* {console.log(countryId)} */}


                  {/* {countryId.map(item =>       
              <Item>{item.name}</Item>
            )} */}

                </Row>



                {/* <Item>
          Nacionalidade <Datum>{personal.nationality.nationality}</Datum>
        </Item>  */}
                {/* <Item>
          CPF{' '}
          <Datum>
            {personal.cpf}
          </Datum>
        </Item> */}
                {/* <Item>
          Raça <Datum>{personal.ethnicity.name}</Datum>
        </Item>
        <Item>
          Estado Civil <Datum>{personal.marital_status.name}</Datum>
        </Item>
        <Item>
          Tipo de Sanguíneo{' '}
          <Datum>{personal.blood_type}</Datum>
        </Item>
        <Item>
          Doador de órgãos?{' '}
          <Datum>{personal.organDonor ? 'Sim' : 'Não'}</Datum>
        </Item> */}
              </Data>
            </Col>
            <Col>
              {/* <Data>
        <Item>
          Logradouro <Datum>{personal.address.street}</Datum>
        </Item>
        <Item>
          Número <Datum>{personal.address.street_number}</Datum>
        </Item>
        <Item>
          CEP{' '}
          <Datum>
            {personal.address.zipcode}
          </Datum>
        </Item>
        <Item>
          Bairro <Datum>{personal.address.neighborhood}</Datum>
        </Item>
        <Item>
          Cidade <Datum>{personal.city.name}</Datum>
        </Item>
        <Item>
          Estado <Datum>{personal.city.state}</Datum>
        </Item>
        <Item>
          Complemento{' '}
          <Datum>
            {personal.address.street_complement || 'Não possui'}
          </Datum>
        </Item>
        <Item>
          Celular{' '}
          <Datum>
            {personal.cellphone}
          </Datum>
        </Item>
        <Item>
          E-mail pessoal <Datum>{personal.emails.email}</Datum>
        </Item>
        <Item>
          E-mail profissional
          <Datum>{personal.professionalEmail}</Datum>
        </Item>
      </Data> */}
            </Col>
          </Row>

          {/* <Subtitle>Dependentes</Subtitle>
  <Link to={{ 
    pathname: '/cadastro', 
    state: { step: 3 } 
  }}><img src={editar}/></Link>
  <Row>
   <Col key={personal.dependents.id}>
   {personal.dependents.map(function(item, i){
            return <Item key={i}>
                Nome              
               <Item>{item.name}</Item>
                Tipo
               <Item> {item.dependent_type.name}</Item> 
                Data de Nascimento
                <Item> {item.birth_date}</Item>
                CPF
                <Item>{item.cpf}</Item>
            </Item>
           })}
    </Col>       
  </Row> */}

          {/* <Subtitle>Filiação</Subtitle>
  <Row>
   <Col key={personal.parentages.id}>
   {personal.parentages.map(function(item, i){
            return <Item key={i}>
                Nome              
               <Item>{item.name}</Item>
                Tipo
               <Item> {item.parentage_type.name}</Item> 
                Data de Nascimento
                <Item> {item.birth_date}</Item>
                Sexo
                <Item>{item.gender}</Item>
            </Item>
           })}
    </Col>       
  </Row> */}
          {/*   
  <Subtitle>Escolaridade</Subtitle>
  <Row>
  <Col key={personal.education.id}>
   {personal.education.map(function(item, i){
            return <Data key={i}>
               <Item>
               Instituição
               <Datum> {item.education_institution}</Datum> 
               </Item>
               <Item>
               Grau
               <Datum> {item.education_level}</Datum> 
               </Item>
               <Item>
               Curso
               <Datum> {item.course}</Datum> 
               </Item>
               <Item>
               Data Inicio
               <Datum> {item.starting_date}</Datum> 
               </Item>
               <Item>
               Data Fim
               <Datum> {item.finishing_date}</Datum> 
               </Item>
               </Data>
           })}
    </Col>       
  </Row>

  <Subtitle>Documentos</Subtitle>
  <Row>
  <Col key={personal.identities.id}>
   {personal.identities.map(function(item, i){
            return <Data key={i}>
               <Item>
               Tipo de Documento
               <Datum> {item.identity_type.name}</Datum> 
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
               <Datum> {item.issuing_entity.name}</Datum> 
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
  </Row> */}
          {/* <Subtitle>Dados Contratuais</Subtitle>
  <Row>
  <Col key={personal.education.id}>
   {personal.education.map(function(item, i){
            return <Data key={i}>
               <Item>
               Prazo determinado
               <Datum> {item.education_institution}</Datum> 
               </Item>
               <Item>
               Data admissão
               <Datum> {item.education_level}</Datum> 
               </Item>
               <Item>
               Prazo
               <Datum> {item.course}</Datum> 
               </Item>
               <Item>
               Data fim contrato
               <Datum> {item.starting_date}</Datum> 
               </Item>
               <Item>
               Novo prazo
               <Datum> {item.finishing_date}</Datum> 
               </Item>
               <Item>
               Data fim
               <Datum> {item.finishing_date}</Datum> 
               </Item>
               </Data>
           })}
    </Col>       
  </Row> */}

          {buttons}
        </Form>
      </Formik>
      //)
    )
  }
}
export default Visualizar