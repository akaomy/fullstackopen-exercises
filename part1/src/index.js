import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
import './index.css';

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

ReactDOM.render(<App />, document.getElementById('root'));
