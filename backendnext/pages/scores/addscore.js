import React, { Component } from 'react'

export class AddScore extends Component {
    constructor(props) {
        super(props);
        this.state = {step :1 ,ID_Diem_Sinhvien: "", ID_SV_MH: "",ID_Loaidiem:"",Sodiem:"" ,Ghichu:"" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
      }; 
    
      prevStep = () => {
        const { step } = this.state;
        this.setState({
          step: step - 1
        });
      };
       prevStep = () => {
        const { step } = this.state;
        this.setState({
          step: step - 1
        });
      };
      handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };
    
    
      async handleSubmit(event) {
        event.preventDefault();
         let inputPost = {"username" : this.state.username}
         let res = await Send_Post_RestAPI('http://localhost:3001/login',inputPost)
         let data = await res.json();
         console.log(data)
          let {UserName,Pass,User_ID} = data[0];
          console.log(UserName) 
          console.log(Pass)
          console.log(typeof this.state.username);
          console.log(typeof UserName);
          console.log(typeof Pass);
          console.log(UserName.length)
          console.log(this.state.username.length)
         if( this.state.username === UserName.replace(/\s/g,'') && this.state.password === Pass.replace(/\s/g,'')){
           Router.push('/index')
         }else{
           Router.push('/login')
         }
      }
      render() {
       const {step} = this.state
       const { ID_Diem_Sinhvien, ID_SV_MH, ID_Loaidiem, Sodiem, Ghichu } = this.state; 
       switch(step){
         case 1: return ( 
           console.log('this is step 1')
         )
         case 2: return (
           console.log('this is step 2')
         )
         case 3 : return (
           console.log('this is step 3')
         )
       }  
          
      }
}

export default AddScore
