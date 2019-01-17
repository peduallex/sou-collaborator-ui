 import React, {Component} from 'react'
 import Slider from '../../components/Slider';
 import Buttons from '../../components/Buttons';
 import {Link} from "react-router-dom";

 class Panel extends Component {
     constructor(props) {
         super(props)
     }

    render() {
         return (
             <div className="main_content_panel">
                 <div className="container">
                     <div className="flex flex-auto">
                         <Slider/>
                         <Buttons/>
                         <Link to="/cadastro">Cadastro</Link>
                     </div>
                 </div>
             </div>
         )
     }
 }

 export default Panel