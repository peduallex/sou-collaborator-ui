import React, {Component} from 'react';
import Imagem from  '../../assets/img/slider.jpg';

class Slider extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="main_content_panel_slider">
                <div className="main_content_panel_slider_header">
                    <span className="icon-map icon-notext"></span><p
                    className="main_content_panel_slider_header_title">PERCURSOS</p>
                    <a href="#">Ver mais</a>
                </div>
                <div className="main_content_panel_slider_img">
                    <img src={Imagem} title="" alt="" />
                </div>
            </div>
        )
    }
}

export default Slider