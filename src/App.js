import React, { useState } from 'react';
import bg from './images/bg.png';
import './App.css';
import Main from './Main';

function App() {

  const [switchToggled, setSwitchToggled] = useState(false);
  const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
  }

  return (
    <div className="App">

      <div className={switchToggled ? "dark" : "scene"}>

        <section className="scene">
          <div className="sun" onClick={ToggleSwitch}><h4>Click Me</h4></div>
          <div className="autoName">
            <div className="wrapper">
              <div className="static-txt {switchToggled ? 'dark' : 'scene'}" >I'm </div>
              <ul className="dynamic-txts">
                <li><span>Amey Pandit  </span></li>
                <li><span>a Student  </span></li>
                <li><span>a Web Developer  </span></li>
                <li><span>an UI / UX Designer  </span></li>
              </ul>
            </div>
          </div>
          <div className="bg">

            <img src="https://raw.githubusercontent.com/panditamey/clock-light-dark-js/main/police_car.gif" alt="" className="car1" />
            <img src="https://raw.githubusercontent.com/panditamey/clock-light-dark-js/main/police_car.gif" alt="" className="car2" />

          </div>
        </section>
      </div>

      <section className="about ">
        <div className={switchToggled ? 'aboutDark' : 'aboutLight'}>
          <div className="aboutTitle" >About
          </div>
          <div className="aboutData">
            <p>I'm 18 year old First Year Information Technology Engineering student.</p>
            <p>I love to contribute to open-source projects.</p>
            <p>I love Sketch <i class="fas fa-paint-brush"></i>.</p>
          </div>
        </div>
      </section>

      {/* <section className="skills ">
        <div className={switchToggled ? 'skillDark' : 'skillLight'}>
          <div className="skillTitle" >Some Skills I Have
          </div>
          <p className="skillTitle" ></p>
          <div className="skillData">
            <i class="fab fa-html5"></i>
            <i class="fab fa-css3"></i>
            <i class="fab fa-java"></i>
            <i class="fab fa-js-square"></i>
            <i class="fab fa-react"></i>
          </div>
          <div className="skillData">
          <i class="fab fa-android"></i>
          <i class="fab fa-node"></i>
          <i class="fas fa-database"></i>
          
          </div>
        </div>
      </section> */}
      <div className="resumeTitle"><h1>My Resume</h1></div>
      <Main />

      <div>


          <div className="Footer">
              <h3>Site By Amey.</h3>
          </div>


      </div>



      {/* End Div */}
    </div>
  );
}

export default App;
