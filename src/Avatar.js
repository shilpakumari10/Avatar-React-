import React,{ Component } from 'react';
//import ReactDom from 'react-dom';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

   class Avatar extends Component{
      
      constructor(){
         super();
         this.state = {
            name:"Welcome to the Tech-World"
         }
      }
      nameChange(){
       this.setState({
          name:"Login to Upgrad"
       })
      }


      render(){
         const  avatarlistarray= [
        {
           id:0,
           name:"Shilpa pandey",
           work:"Full Stack Developer"
        },

        {
            id:1,
            name:"Priya Ojha",
            work:"Web developer"
         },

         {
            id:2,
            name:"Kavya Gowda",
            work:"Business analyts"
         },

         {
            id:3,
            name:"Riya Gupta",
            work:"Product Developer"
         }
    ]
     const arrayavatarcard= avatarlistarray.map((avatarcard,i) =>{
          return  <Avatarlist key={i} id={avatarlistarray[i].name}
                   name={avatarlistarray[i].name}  
                   work={avatarlistarray[i].work}/> 
       } )


    return (
        <div className='mainpage' >
            <h1>{this.state.name} </h1>
               {arrayavatarcard}
            <button onClick={()=> this.nameChange()}> Login </button>
        </div>
        )
     }
   }
export default Avatar;