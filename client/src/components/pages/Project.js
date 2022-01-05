import React from "react";
import { CardMedia } from "@material-ui/core";
import peaceAndMindPic from "../../assets/peaceAndMindPic.PNG";
import BudgetTrackerPic from "../../assets/BudgetTrackerPic.PNG";
import dayPlannerPic from "../../assets/dayPlannerPic.PNG";
import fitnessTrackerPic from "../../assets/fitnessTrackerPic.PNG";
import nationalParkLocatorPic from "../../assets/nationalParkLocatorPic.PNG";
import NoteTakerPic from "../../assets/NoteTakerPic.PNG";
import passwordGeneratorPic from "../../assets/passwordGeneratorPic.PNG";
import roboArmDYIPic from "../../assets/roboArmDYIPic.PNG";
import WeatherGuidePic from "../../assets/WeatherGuidePic.PNG";
import silvermanLLCPic from "../../assets/silvermanLLCPic.PNG";
import silvermanAllAroundPic from "../../assets/silvermanAllAroundPic.PNG";
import { Link } from 'react-router-dom';



function Project() {
  return (
    <div class="container">
      <div class="col-sm">
          <h4 class="card-title center"><b>My Projects!</b></h4>
      </div>
      <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back to Portfolio
          </Link>
      <br></br>
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>DIY Remote Claw</b></h5>
              <a href="https://roboarmcontrol.herokuapp.com/"></a>
              <p class="card-text center"><a href="https://roboarmcontrol.herokuapp.com/" className="btn btn-link">DIY Remote Claw</a></p>
              <CardMedia
                component="img"
                title="roboArmDYIPic"
                alt="roboArmDYIPic"
                image={roboArmDYIPic}
              />
                <br></br>
                <li>Summary: DIY Remote Control Arm</li>
                <li>Project work with a Partner</li>
                <li>Tools: HTML, CSS, JavaScript, Bootstrap, Material UI, React Socket Io, Raspberry Pi, VNC</li>
              <br></br>
            </div>
          </div>
        </div>
        <br></br><br></br>
        <br></br>
                <br></br>
                <br></br>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Password Generator</b></h5>
              <p class="card-text center"><a href="https://tylersilverman.github.io/HW-3-Password-Generator/" className="btn btn-link">Password Generator</a></p>
              <CardMedia
                component="img"
                title="passwordGeneratorPic"
                alt="passwordGeneratorPic"
                image={passwordGeneratorPic}
              />
              <br></br>
                <li> Generate a randomized password after a series of prompted questions</li>
                <li>Tools:HTML, CSS, JavaScript, Bootstrap</li>

              <br></br>
              <br></br>
              <br></br>
              <br></br>
                <br></br>
                <br></br>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Fitness Tracker</b></h5>
              <p class="card-text center"><a href="https://tylersilvermanfitnesstrack.herokuapp.com/" className="btn btn-link">Fitness Tracker</a></p>
              <CardMedia
                component="img"
                title="fitnessTrackerPic"
                alt="fitnessTrackerPic"
                image={fitnessTrackerPic}
              />
               <br></br>
                <li>  Summary: Personal Fitness Tracker with saved sessions for data graph upon completion</li>
               <li>Tools: HTML, CSS, JavaScript, Bootstrap </li>
              <br></br>
            </div>
            <br></br> <br></br>
            <br></br> <br></br> <br></br> <br></br> <br></br>
          </div>
        </div>
      </div>
      <br></br>
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>National Park Locator</b></h5>
              <p class="card-text center"><a href="https://tylersilverman.github.io/NationalParkLocator/" className="btn btn-link">National Park Locator</a></p>
              <CardMedia
                component="img"
                title="nationalParkLocatorPic"
                alt="nationalParkLocatorPic"
                image={nationalParkLocatorPic}
              />
                <li> Summary: Search for State and get a list of National Parks in the area. Have the option to save the park as a favorite and then also get information about each park and the local weather around the park</li>
                <li>Tools: HTML, CSS, JavaScript, Bootstrap, API</li> 
              <br></br> 
            </div>
          </div>
        </div>
        <br></br>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Peace and Mind</b></h5>
              <p class="card-text center"><a href="https://peace-mind.herokuapp.com/" className="btn btn-link">Peace and Mind</a></p>
              <CardMedia
                component="img"
                title="peaceAndMindPic"
                alt="peaceAndMindPic"
                image={peaceAndMindPic}
              />
                <li> Group Project worked on both Front and Back End</li>
                <li>Alows you to watch several meditation videos</li>
                <li>Tools:HTML, CSS, JavaScript, Bootstrap, API, React Application</li>
              <br></br>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Day Planner</b></h5>
              <p class="card-text center"><a href="https://tylersilverman.github.io/HW-5-Work-Day-Schedule/" className="btn btn-link">Day Planner</a></p>
              <CardMedia
                component="img"
                title="dayPlannerPic"
                alt="dayPlannerPic"
                image={dayPlannerPic}
              />
                <li> Plan out you day with colors, to indicate present, past and future times</li>
                <li> Add and Delete day planner</li>
                <li>Tools:HTML, CSS, JavaScript, Bootstrap</li>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Budget Calculator</b></h5>
              <p class="card-text center"><a href="https://silvermanprogressivebudget.herokuapp.com/" className="btn btn-link">Budget Calculator</a></p>
              <CardMedia
                component="img"
                title="BudgetTrackerPic"
                alt="BudgetTrackerPic"
                image={BudgetTrackerPic}
              />
                <li> Budget Tracker Transactions</li>
                <li> Add and Delete tranactions with a line graph data</li>
                <li>Tools:HTML, CSS, JavaScript, Bootstrap, MySql</li>
              <br></br>
            </div>
          </div>
        </div>
        <br></br><br></br>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Note Taker</b></h5>
              <p class="card-text center"><a href="https://tylersilverman-notetaker.herokuapp.com/" className="btn btn-link">Note Taker within the local Host</a></p>
              <CardMedia
                component="img"
                title="NoteTakerPic"
                alt="NoteTakerPic"
                image={NoteTakerPic}
              />
                <li>Summary: Application that uses local host to save, delete and add notes</li>
                <li>Tools: HTML, CSS, JavaScript, Bootstrap</li>
              <br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Weather Forecast</b></h5>
              <p class="card-text center"><a href="https://tylersilverman.github.io/HW-6-Weather-Dashboard/" className="btn btn-link">Weather Forecast</a></p>
              <CardMedia
                component="img"
                title="WeatherGuidePic"
                alt="WeatherGuidePic"
                image={WeatherGuidePic}
              />
                <li> Choose City or State for descriptions</li>
                <li> 5-day Forecast Description</li>
                <li>Tools:HTML, CSS, JavaScript, Bootstrap, API</li>
              <br></br><br></br><br></br>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>Silverman All Around</b></h5>
              <p class="card-text center"><a href="https://silvermanallaround.com/" className="btn btn-link">Silverman All Around</a></p>
              <CardMedia
                component="img"
                title="silvermanAllAroundPic"
                alt="silvermanAllAroundPic"
                image={silvermanAllAroundPic}
              />
                <li>Self Employed</li>
                <li>Continue to build customer relationships</li>
                <li>Handyman work, You Name it and I can do it</li>
                <li>Handle tenant-related issues and property maintenance for rental properties</li>
            </div>
          </div>
        </div>
        <br></br>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title center"><b>SilvermanLLC</b></h5>
              <p class="card-text center"><a href="https://silvermanllc.com/" className="btn btn-link">Silverman LLC</a></p>
              <CardMedia
                component="img"
                title="silvermanLLCPic"
                alt="silvermanLLCPic"
                image={silvermanLLCPic}/>
                <li> Self Employed</li>
                <li>Continue to build customer relationships</li>
                <li>Full Stack Web Developer</li>
                <li>Restaurant Consultant</li>
                <li>Teach English as a Second Language</li>
              <br></br><br></br><br></br><br></br>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}
export default Project;