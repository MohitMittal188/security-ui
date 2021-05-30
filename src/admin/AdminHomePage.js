import axios from 'axios';
import React from 'react';
import CourseDetails from './CourseDetails';
import CourseCard from '../common/CourseCard'

class AdminHomePage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            addCourseToggle:false,
            courses:[]
        }

        this.handleAddCourse = this.handleAddCourse.bind(this);
    }

    componentDidMount(){
        axios.get("http://localhost:8080/courses",{
                        headers:{
                            "authorizationToken":"Bearer "+this.props.token
                        } 
                    }).then(res=>this.setState({
                            courses:res.data
                        }
                    )); 
    }

    handleAddCourse(){
          this.setState({
            addCourseToggle:!this.state.addCourseToggle
          }); 
    }

   render(){
       return (
        <div>
            <div>
                <div style={{display:'inline-block'}}>
                    <h3>Welcome!</h3>
                </div>
                <div style={{display:'inline-block',float:"right",margin:'20px'}}>
                    <button onClick={this.handleAddCourse} type="button">Add Course</button>
                </div>
                <div>
                     {this.state.addCourseToggle?
                            <CourseDetails token={this.props.token} username={this.props.username}/>:
                            null
                    }
                </div>
            </div>
            
            <div style={{backgroundColor:'rgb(243,250,254)',margin:'10px',padding:'10px'}}>
            {
               this.state.courses.map(course => <CourseCard course={course}/>) 
            }    
            </div>
        </div>

       );
   }
    
}

export default AdminHomePage;