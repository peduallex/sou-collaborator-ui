import React, { Component } from 'react'
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