import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /><br/> <br/>

        <MobiledeviceList /><br/> <br/>
        <Footer />
      </div>
    );
  }
}




class Header extends Component{

  render(){
    return(
      <nav className="navbar navbar-expand-md navbar-custom position-fixed-top bg-secondary">
        <div className="container">
          <h1 >Welcome to Siddagari Mobile Store !</h1>
          </div>
    </nav>
    );
  }
}
class MobiledeviceList extends Component{
    constructor(){
      super();
      this.state={
        mobiledevices:[]
      };
    }
  componentDidMount(){
    fetch('https://mobilestoreapi.azurewebsites.net/api/ver1/mobiledevices/getall')
    .then(res=>res.json())
    .then(res=>{this.setState({
         mobiledevices:res
      });
    }
  )
  .catch(error=>{
    console.log(error)
  })
  }


  render(){
      return (
    <div class="container">
      <div class="row">
       { this.state.mobiledevices.map(function(m,index){
         return(

           <div className="col-md-4">
             <div className="row no-gutters">
                 {/* Phone title */}
                 <div className="container">
                   <h3 className="text-center">{m.ModelName}</h3>
                 </div>
                   {/* Phone title */}

                   {/* Phone Image */}
               <div className="col-md-7">
                   <img className="img-fluid" src={m.Image} />
                 </div>
                     {/* Phone Image */}
                    {/* Phone details */}

             <div className="col-md-5">
               <div className="container no-gutters">
                 <ul className="list-group list-group-flush">
                   <li className="list-group-item"> {m.Price} </li>
                   <li className="list-group-item"> {m.Description}</li>
                 </ul>
               </div>

               </div>
                {/* Phone details */}
             </div>
           </div>


         );
       })
     }
     </div>
        </div>
      );

  }

}

class Footer extends Component{
  render(){
    return(
      <footer className="footer">
        <div>Copyright 2018 Siddagari AB.Vemdalsgatan 51, 162 74, Stockholm </div>
        <div>suresh@siddagari.com</div>
        <div>mobile:0046-72 307 44 39</div>
        </footer>

    );
  }
}
export default App;
