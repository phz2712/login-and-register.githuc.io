import React from 'react';
import './Login.css';
import {TextField } from '@material-ui/core';


class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state={
       warning   : ' ',
       username  : '',
       password  : '',
       warning2  : ' ',
       err1: false,
       err2: false
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
   handleChange(event) 
   {
         
         const target = event.target;
         const value = target.name === 'isGoing' ? target.checked : target.value;
         const name = target.name;
         this.setState({
           [name]: value    });
       
           if(this.state.username===""){
            this.setState({warning: " ", err1:false});
           }
           else if(this.state.username.length>1 ){

              if(this.state.username.length<3||this.state.username.length >9)
              { this.setState({warning: "Higher 2 and lower 9", err1:true});}
              else{
                this.setState({warning: " ",err1:false });
              }
           }
          console.log(this.state.username.length)
            
 
         const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{3,10}$/;
           if(this.state.password===""){
            this.setState({warning2: " ", err2:false})
           }
          else if(!re.test(this.state.password))
             {
               this.setState({warning2: "Have a num,a lower,an upper and special letter", err2:true})
               
             }
             else{
               this.setState({warning2: " ", err2:false})
             }
 
     
   }
   handleSubmit(event) {
     event.preventDefault();
   }

  render(){
    
  return (
    <div>
        <header>
          <div className="container">
          
          </div>
        </header>
        <main>
          <div className="container">
            <div onSubmit={this.handleSubmit} className="login-form">
              <form action method="post">
                <h1>Đăng nhập vào website</h1>
                <div className="input-box">
                  <i />
                  <TextField  className="input-box"
                              error={this.state.err1} 
                              autoFocus={true} type="text" 
                              placeholder="Nhập username" 
                              value={this.state.username} 
                              type='username' name='username' 
                              onChange={this.handleChange} 
                              placeholder='username' 
                              helperText={this.state.warning}/>
                </div>
                <div className="input-box">
                  <i />
                  <TextField  className="input-box" 
                              error={this.state.err2} 
                              type="password" 
                              placeholder="Nhập mật khẩu" 
                              value={this.state.password} 
                              type='password' name='password' 
                              onChange={this.handleChange} 
                              placeholder='password' 
                              helperText={this.state.warning2} />
                </div>
                <div className="btn-box">
                  <button type="submit" onClick={()=>alert("đã đăng nhập")} >
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
        <footer>
          <div className="container">
            
          </div>
        </footer>
      </div>
  );
}
}

export default Login;
