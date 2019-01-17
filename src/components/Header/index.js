import React, { Component } from 'react'

//import './styles.scss';
//import Imagem from '../../assets/img/logo.png';



import { Header, Logo, Actions, Action } from './styles';

import VunespLogo from '../../assets/imgs/logo-univesp.png';

import Notify from '../../assets/imgs/alerta.svg';
import Settings from '../../assets/imgs/config.svg';
import User from '../../assets/imgs/usuario.svg';
import Logout from '../../assets/imgs/sair.svg';

class HeaderC extends Component {
     constructor(props) {
        super(props);
     }

    render() {
        return (
            // <div className="teste">
            //     <div className="logo">
            //         <ul>
            //             <li><a href="#home"><img src={Imagem} title="" alt="" className="logo_titulo" /></a></li>
            //         </ul>
            //     </div>
            //     <div className="icones_head">
            //         <ul>
            //             <li><a href="#home"> <span className="icon-bell-o main_header_user_icons_icon"></span></a></li>
            //             <li><a href="#news"><span className="icon-cog main_header_user_icons_icon"></span></a></li>
            //             <li><a href="#contact"> <span className="icon-user main_header_user_icons_icon"></span></a></li>
            //             <li><a href="#about"><span className="icon-logout main_header_user_icons_icon"></span></a></li>
            //         </ul>
            //     </div>
            // </div>

            <Header>
            <Logo src={VunespLogo} alt="UNIVESP" />
            <Actions>
              <Action icon={Notify}>Notificações</Action>
              <Action icon={Settings}>Configurações</Action>
              <Action icon={User}>Icones</Action>
              <Action icon={Logout}>Sair</Action>
            </Actions>
          </Header>

        )

    }
}

export default HeaderC