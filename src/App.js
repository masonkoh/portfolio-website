import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Thank you for visiting <a
                    href={"https://github.com/masonkoh/react-portfolio-website"} target={"_blank"}>this</a> website
                </p>
                <p>I'm currently focusing on <a href={"http://myvmlab.senecacollege.ca:6471"} target={"_blank"}>TEAM
                    PROJECT</a> with my team. <br/> This website will be reopened before end of Summer 2019.</p>
                <ul>
                    You can find more information about my Team Project
                    <li><a href={"https://github.com/mindspark-sict"} target={"_blank"}>Team Git page</a></li>
                    <li><a href={"https://zenit.senecac.on.ca/~prj666_192a05/"} target={"_blank"}> Team Website</a></li>
                    <li><a href={"https://github.com/masonkoh/PRJ666-website-backup"} target={"_blank"}>Team Project
                        Documentation
                        Backup Git Repo</a>
                    </li>
                </ul>
                {/*<a*/}
                {/*    className="App-link"*/}
                {/*    href="https://reactjs.org"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*>*/}
                {/*    Learn React*/}
                {/*</a>*/}
            </header>
        </div>
    );
}

export default App;
