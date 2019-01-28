import React, { Component } from 'react';
import LoadingScreen from 'react-loading-screen';
import Visualizar from '../Visualizar';
import { Container, GroupButton, Button } from './styles';
import api from '../../services/api';


class StepSummary extends Component {

  state = {  };
  // async componentDidMount() {
  //   const id = this.props.match.params.id
  //   const personal = await api.get('employees/' + id);
  //   this.setState( {personal:personal.data.data});
  //   console.log(personal.data)
  //   }

  componentWillMount() {
    const { location: {state} } = this.props;
    this.setState(state)
  }

  render() {
    return (
      <Container>
          <Visualizar values={this.state.values} /> 
         {/* <Visualizar personal={this.state.personal} /> */}
         {/* <Visualizar values={this.state.personal} />  */}
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
