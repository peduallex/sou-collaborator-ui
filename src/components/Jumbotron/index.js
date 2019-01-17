//import React, { Component } from 'react'
//import './style.scss'
//import PropTypes from 'prop-types';

//import { Section, Location, Icon, Title, Links, Item, Link } from './styles';

// class HeaderForm extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (

//       <div className="jumbotron jumbotron-fluid">
//         <div className="container">
//           <div className="testex">
//             <span className="icon-newspaper"></span>
//             <span className="span">COLABORADORES</span>
//           </div>

//           <ul>
//             <li><a class="active" href="#home">Autenticação</a></li>
//             <li><a href="#news">Grupos</a></li>
//             <li><a href="#contact">Seleção & Contratação</a></li>
//             <li><a href="#about">Administrativo</a></li>
//             <li><a href="#about">Folha de Pagamento</a></li>
//           </ul>
//         </div>
//       </div>
//         )
//   }
// }

// export default HeaderForm


import React from 'react';
import PropTypes from 'prop-types';

import { Section, Location, Icon, Title, Links, Item, Link } from './styles';

const Jumbotron = ({ icon, title, links }) => (
  <Section>
    <Location>
      <Icon src={icon} />
      <Title>{title}</Title>
    </Location>
    <Links>
      {links.map(item => (
        <Item key={item.name}>
          <Link active={item.active} href={item.url}>
            {item.name}
          </Link>
        </Item>
      ))}
    </Links>
  </Section>
);

Jumbotron.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Jumbotron;
