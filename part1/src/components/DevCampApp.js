import React, { Component } from 'react'
import Navigation from './navigation'
import Pagecontent from './page-content'

export default class DevCampApp extends Component {
    render() {
        return(
            <div>
               <h1>Devcamp React Starter</h1>
               <Navigation />
               <Pagecontent />
            </div>
        );
    }
}