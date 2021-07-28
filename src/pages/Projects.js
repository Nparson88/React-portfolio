import React from 'react';
import crypto from '../images/projecthome.jpg'
import directory from '../images/Directory.jpg'
import tech from '../images/tech1.jpg'
import budget from '../images/budgetTracker.jpg'
import workout from '../images/workout.jpg'
import note from '../images/notetaker1.jpg'
const projects = () => {
    return (

        <div class="card-group">
            <div class="card">
                <a href="https://shielded-beach-49438.herokuapp.com/" >
                    <img class="card-img-top" src={directory} alt="Card cap" />
                </a>
                <div class="card-body bg-dark text-white">
                    <h5 class="card-title">Employee-Directory</h5>
                    <p class="card-text">app that allows you to filter through employees using props in the react framework.</p>
                </div>
            </div>
            <div class="card">
                <a href="https://crypto-trackstar.herokuapp.com/">
                    <img class="card-img-top" src={crypto} alt="Card cap" />
                </a>
                <div class="card-body bg-dark text-white">
                    <h5 class="card-title">Crypto-Trackstar</h5>
                    <p class="card-text">app that allows the user to check latest crypto prices using handlebars framework and SQL backend</p>
                </div>
            </div>
            <div class="card">
                <a href = "https://peaceful-citadel-02461.herokuapp.com/">
                <img class="card-img-top" src={tech} alt="Card  cap" />
                </a>
                <div class="card-body bg-dark text-white">
                    <h5 class="card-title">Tech-blog</h5>
                    <p class="card-text">Tech-blog for users to discuss and post, made in handlebars framework with SQL backend.</p>
                </div>
            </div>
            <div class="card-group">
                <div class="card">
                    <a href ="https://limitless-tundra-26403.herokuapp.com/">
                    <img class="card-img-top" src={budget} alt="Card  cap" />
                    </a>
                    <div class="card-body bg-dark text-white">
                        <h5 class="card-title">Budget-tracker</h5>
                        <p class="card-text">Progressive web app that allows the user to keep track of spending and income</p>
                    </div>
                </div>
                <div class="card">
                    <a href ="https://polar-caverns-82114.herokuapp.com/">
                    <img class="card-img-top" src={workout} alt="Card  cap" />
                    </a>
                    <div class="card-body bg-dark text-white">
                        <h5 class="card-title">Workout-tracker</h5>
                        <p class="card-text">track your most recent workouts using mongodb</p>
                    </div>
                </div>
                <div class="card">
                    <a href = "https://gentle-hamlet-95344.herokuapp.com/">
                    <img class="card-img-top" src={note} alt="Card  cap" />
                    </a>
                    <div class="card-body bg-dark text-white">
                        <h5 class="card-title">Note-taker</h5>
                        <p class="card-text">using express, allow the user to save and delete notes in local storage</p>
                     
                    </div>
                </div>
            </div>
        </div>


    )

}
export default projects