import React, {Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Jumbotron from "../Jumbotron";
import Cadastro from "../../pages/Cadastro";
import StepSummary from "../../pages/StepSummary";
import Main from './styles';
import Avaliations from '../../assets/imgs/avaliacoes.svg';


const links = [
  {
    name: 'Autentificação',
    active: true,
    url: '/authentification'
  },
  
  {
    name: 'Grupos',
    active: false,
    url: '/groups'
  },

  {
    name: 'Seleção & Contratação',
    active: false,
    url: '/selection'
  },
  {
    name: 'Administrativo',

    active: false,
    url: '/administrative'
  },
  {
    name: 'Folha de Pagamento',
    active: false,
    url: '/Payroll'
  },


]
const Content = () => (
  <Fragment>
    <Jumbotron title="COLABORADORES" icon={Avaliations} links={links} />

    <Main>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={({ match: { url } }) => (
              <Fragment>
                {/* <Route exact path='/' component={Panel} /> */}
                <Route path='/cadastro' component={Cadastro} />
                {/* <Route path='/visualizar' component={Visualizar}/> */}
                <Route
                  path={`/employees`}

                  component={StepSummary}
                />
              </Fragment>
            )}
          />
        </Switch>
      </BrowserRouter>

    </Main>
  </Fragment>
);

export default Content;