

import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
//import {Link} from "react-router-dom"


export default class ListarPreventas extends Component {
    
    state= {
        preventa: [], 
        preventa2 :[],
       
        
    }

    componentDidMount() {
     
        this.getpreventa();    
    
       }


       getpreventa = async () =>{
         
        const per = await axios.get('http://localhost:8000/api/nintex/');
        const per2 = await axios.get('http://localhost:8000/api/nintex/');

        this.setState({preventa: per.data}); 

        this.setState({preventa2: per.data});

        for(var i=0; i<per.data.length; i++){
            var cont = 0;
        for(var j=0; j<per2.data.length; j++){    

            if(per.data[i].Preventa_o_G_Prod === per2.data[j].Preventa_o_G_Prod){
              cont = cont + 1; 
            }
            }

            if(cont>=2){
                console.log("repetidos:::"+per.data[i].Preventa_o_G_Prod)

                /*
                this.state.preventa.pop(per.data[i].Preventa_o_G_Prod)     
                voy aqui
            this.state.preventa..pop(per.data[i].IDPreventa_o_G_Prod) 
            */

            }
        
        }
        }

       
render() {
        
    return (
        <div className="row">
            {
                this.state.preventa.map(cor => (
                    
                    <div className="col-md-4 p-2" key={cor._id}>
                        
                    <div className="card">
                        
                    <div className="card-header d-flex justify-content-between">
                         
                    
                        <div className="card-header d-flex justify-content-between">
                            
                        <h5><b>Preventa</b>: {cor.Preventa_o_G_Prod} - {cor.IDPreventa_o_G_Prod}</h5>  
                        </div>

                        </div>

                    </div>
                    </div>

                ))
            }
           
        </div>
    )
}
}
