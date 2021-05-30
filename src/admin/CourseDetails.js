import React from 'react';
import axios from 'axios';

class CourseDetails extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            course:{
                name:"",
                description:"",
                fees:0,
                minExp:0,
                maxExp:0
            }          
        }

        this.handleName = this.handleName.bind(this);
        this.handleDesc = this.handleDesc.bind(this);
        this.handleFees = this.handleFees.bind(this);
        this.handleMinExp = this.handleMinExp.bind(this);
        this.handleMaxExp = this.handleMaxExp.bind(this);

        this.addCourse = this.addCourse.bind(this);
    }

    addCourse(event){
    console.log(this.state.course);

        const options = {
           headers:{
            "authorizationToken":"Bearer "+this.props.token
           } 
        };

        axios.post("http://localhost:8080/course/add",this.state.course,options)
        .then(res => console.log(res));

        event.preventDefault();
    }

    handleName(event){

        var course = {...this.state.course};
        course.name = event.target.value;

        this.setState({course});

    }

    handleDesc(event){
        var course = {...this.state.course};
        course.description = event.target.value;

        this.setState({course});
    }

    handleFees(event){
        var course = {...this.state.course};
        course.fees = event.target.value;

        this.setState({course});
    }

    handleMinExp(event){
        var course = {...this.state.course};
        course.minExp = event.target.value;

        this.setState({course});
    }
    
    handleMaxExp(event){
        var course = {...this.state.course};
        course.maxExp = event.target.value;

        this.setState({course});
    } 


    render(){
        return (
            <div style={{margin:'10px',padding:'10px'}}>
                <form style={{border:'solid',width:'40%'}} onSubmit={this.addCourse}>
                    <div style={{border:'solid'}}>
                        <label>Title: </label>
                        <input style={{margin:'5px'}} type="text" value={this.state.course.name} onChange={this.handleName}></input><br/>
                    </div>

                    <div>
                        <label>Description: </label>
                        <input style={{margin:'5px'}} type="text" value={this.state.course.description} onChange={this.handleDesc}></input><br/>
                    </div>

                    <div>
                        <label>Fees: </label>
                        <input style={{margin:'5px'}} type="text" value={this.state.course.fees} onChange={this.handleFees}></input><br/>
                    </div>

                    <div>
                        <label>Minimum experience: </label>
                        <input style={{margin:'5px'}} type="text" value={this.state.course.minExp} onChange={this.handleMinExp}></input><br/>
                    </div>

                    <div>
                        <label>Maximum experience: </label>
                        <input style={{margin:'5px'}} type="text" value={this.state.course.maxExp} onChange={this.handleMaxExp}></input><br/>
                    </div>

                    <input style={{margin:'5px'}} type="submit" value="Add"></input>
                </form>
            </div>   
        );
       
    }
}

export default CourseDetails;