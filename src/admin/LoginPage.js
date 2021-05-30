import React from 'react';
import axios from 'axios';
import AdminHomePage from './AdminHomePage';

class LoginPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            emailId :"",
            password :"",
            loginStatus:false,
            token:""
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(event){
        this.setState({
            emailId:event.target.value
        });
    }

    handlePassword(event){
        this.setState({
            password:event.target.value
        });
    }

    handleSubmit(event){

        axios.get(
            "http://localhost:8080/login",{
                params:{
                    username:this.state.emailId,
                    password:this.state.password
                }
            }
        ).then(
           res=>{
               this.setState({
                loginStatus:res.data,
                token:res.headers.token
               });
           }
        );

        event.preventDefault();
    }

    render(){

        if(!this.state.loginStatus){
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email id:</label>
                        <input type="text" value={this.state.emailId} onChange={this.handleEmail}></input>
        
                        <label>Password:</label>
                        <input type="text" value={this.state.password} onChange={this.handlePassword}></input>
        
                        <input type="submit" value="Login"></input>
                    </form>
                </div>
            ); 
         }else{
             return (
                <div>
                    <AdminHomePage token={this.state.token} username={this.state.emailId}/>
                </div>
            );
         }
       
    }
}

export default LoginPage;