import React from "react";


class Human extends React.Component{

    name;
    job;
    skills = [];

    getJob(job){
        this.job = job;
    }
    
    leaveJob (){
        this.job = "Unemployed";
    }

    learnNewSkill(newSkill){
        this.skills.push(newSkill);
    }

    forgetSkill(skillToRemove){
        
            this.skills = this.skills.filter((skill) =>{return skill !== skillToRemove})
    }
    constructor(){
        super();
        this.name = "name here";
        this.job = "";
    }
   
}

export default Human;