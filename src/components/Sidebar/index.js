import React, { Component } from 'react';
//import './estilo.scss'

import Course from '../../assets/img/percursos.svg';
import Collections from '../../assets/img/colecoes.svg';
import Collaboration from '../../assets/img/colaboracao.svg';
import Avaliations from '../../assets/img/avaliacoes.svg';
import Calendar from '../../assets/img/calendario.svg';
import Communication from '../../assets/img/comunicacao.svg';
import AcademicSecretary from '../../assets/img/secretaria-academica.svg';
import { Aside, Actions, Action } from './styles';

class Sidebar extends Component {
    constructor(props) {
        super(props);
     }
    render() {
        return (

            <Aside>
                <Actions>
                    <Action icon={Course}>Percursos</Action>
                    <Action icon={Collections}>Coleções</Action>
                    <Action icon={Collaboration}>Colaboração</Action>
                    <Action icon={Avaliations}>Avaliações</Action>
                    <Action icon={Calendar}>Calendário</Action>
                    <Action icon={Communication}>Comunicação</Action>
                    <Action icon={AcademicSecretary}>Secretaria Acadêmica</Action>
                </Actions>
            </Aside>
        )
    }
}

export default Sidebar;