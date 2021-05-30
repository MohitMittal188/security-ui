import React from 'react';

function CourseCard(props){

    return(
        <div style={{width:'80%',borderRadius:'5px',margin:'5px',height:'150px',backgroundColor:'white'}}>
             <div style={{display:'inline-block',width:'70%',borderRight:'5px solid rgb(243,250,254)',height:'150px',paddingLeft:'10px'}}>
                <h3 border-style="solid">{props.course.name}</h3>
                <h4>{props.course.description}</h4> 
            </div>
            <div style={{margin:'5px',borderRadius:'5px',display:'inline-block',width:'20%',float:'right'}} >
                <h4>Fees: {props.course.fees}</h4>
                <h4>Min Exp: {props.course.minExp}</h4>
                <h4>Max Exp: {props.course.maxExp}</h4>
            </div>
        </div>
    );   
}

export default CourseCard;