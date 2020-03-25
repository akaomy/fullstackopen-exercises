import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
import DevCampApp from './components/DevCampApp';
import './index.css';
import { BrowserRouter, Router, Link } from 'react-router-dom';

const App = () => {
    const course = {
        name: 'Half stuck application development',
        parts: [
            {
                name: 'Fundamentials of React',
                exercise: 10
            },
            {
                name: 'Using props to pass data',
                exercise: 7
            },
            {
                name: 'State of component',
                exercise: 14
            }
        ]
    }

    return (
        <div>
            <DevCampApp/>
            <Header course={course.name}/>
            <Content 
                partsName={
                    course.parts.map((item) => 
                    <li key={item.name}>{item.name}: {item.exercise}</li>)
                }
            />
            <Total partsTotal={
                course.parts[0].exercise + course.parts[1].exercise + course.parts[2].exercise
                }/>
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , 
    document.getElementById('root'));
