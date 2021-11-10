import * as $ from 'jquery'
import Post from "@models/Post";
import json from './assets/json.json'
import './styles/styles.css'
import './styles/styleLess.less'
import './styles/styleSCSS.scss'
import './babel'
import WebpackLogo from '@/assets/webpack-logo.png'
import xml from './assets/data.xml'
import csv from './assets/data.csv'

import React from "react";
import {render} from "react-dom";

const post = new Post("Webpack Post Title", WebpackLogo)

$('pre').html(post.toString())

const App = () => {
    return (
        <div className='container'>
            <h1>Webpack Course</h1>
            <hr/>
            <div className="logo">

            </div>
            <hr/>
            <pre/>
            <h2>Less</h2>
            <h3>SCSS</h3>
        </div>
    )
}

render(<App/>, document.getElementById('app'))

console.log(json)
console.log(xml)
console.log(csv)