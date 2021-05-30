import React from 'react';
import axios from 'axios';

class CustomerDetails extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            customer:{}
        }

    }

    componentDidMount(){
        
        console.log(this.props.token);
        console.log(this.props.username);
        
        axios.get(`http://localhost:8080/get/customer?email=${this.props.username}`,{
            headers:{
                'authorizationToken':`Bearer ${this.props.token}`
            }
        }).then(res=>{
            console.log(res)
            this.setState(
                {
                    customer:res.data
                }
            );
        })
        
    }

    render(){
        return (
                <>
                <h1>Welcome!!</h1>
                <h2>{this.state.customer.firstName} {this.state.customer.lastName}</h2>
                </>
            );
    }
}

export default CustomerDetails;