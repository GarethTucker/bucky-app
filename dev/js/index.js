import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from "redux";
import allReducers from "./reducers"
import App from './componets/app';

const store = createStore(allReducers,
    { users: [
                {
                    id: 1,
                    first: "Bucky",
                    last: "Roberts",
                    age: 71,
                    description: "Bucky is a React developer and YouTuber",
                    thumbnail: "http://i.imgur.com/7yUvePI.jpg"
                },
                {
                    id: 2,
                    first: "Joby",
                    last: "Wasilenko",
                    age: 27,
                    description: "Joby loves the Packers, cheese, and turtles.",
                    thumbnail: "http://i.imgur.com/52xRlm8.png"
                },
                {
                    id: 3,
                    first: "Madison",
                    last: "Williams",
                    age: 24,
                    description: "Madi likes her dog but it is really annoying.",
                    thumbnail: "http://i.imgur.com/4EMtxHB.png"
                }
        ]
    });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
