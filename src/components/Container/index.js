import React, {Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Jumbotron from "../Jumbotron";
//import Panel from "../../pages/Panel";
import Cadastro from "../../pages/Cadastro";
//import Visualizar from "../../pages/Visualizar";


import StepSummary from "../../pages/StepSummary";

//import SummaryStudent from '../../pages/Student/Summary';

//import '../../pages/Summary/styles.js';

import Main from './styles';
import Avaliations from '../../assets/imgs/avaliacoes.svg';

// class Container extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <Fragment>
//              <Jumbotron></Jumbotron> 
//             <div className="container">
//                 <Router>
//                     <Switch>
//                         <Route exact path='/' component={Panel}/>
//                         <Route path='/cadastro' component={Cadastro}/>
//                         <Route path='/visualizar' component={Visualizar}/>
//                     </Switch>
//                 </Router>
//             </div>
//             </Fragment>
//         )
//     }
// }

//export default Container

const links = [
  {
    name: 'Autentificação',
    active: true,
    url: '/authentification'
  },
  {
    name: 'Seleção & Contratação',
    active: false,
    url: '/selection'
  },
  {
    name: 'administrative',
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
  //     <Fragment>
  //       <Jumbotron title="COLABORADORES" icon={Avaliations} links={links} />
  //       <Main>
  //       <Router>
  //     <Switch>
  //         <Route exact path='/' component={Panel}/>
  //         <Route path='/cadastro' component={Cadastro}/>
  //         <Route path='/visualizar' component={Visualizar}/>
  //     </Switch>
  // </Router>
  //       </Main>
  //     </Fragment>

  <Fragment>
    <Jumbotron title="Apoio ao aluno" icon={Avaliations} links={links} />
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
                  path={`/StepSummary/:id`}
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