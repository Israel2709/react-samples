import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams,
    Link
} from "react-router-dom";

import Another from './Another'
import Another2 from './Another2'
import Another3 from './Another3'
import Another4 from './Another4'


function Users(){
  
        let { path, url } = useRouteMatch();
        return (
            <div className="row">
                <div className="col-3">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to={`${url}/another`}> Dapibus ac facilisis in </Link>
                        </li>
                        <li className="list-group-item list-group-item-primary">
                            <Link to={`${url}/another2`}> A simple primary list group item </Link>
                        </li>
                        <li className="list-group-item list-group-item-secondary">
                            <Link to={`${url}/another3`}> A simple secondary list group item </Link>
                        </li>
                        <li className="list-group-item list-group-item-success">
                            <Link to={`${url}/another4`}> A simple success list group item </Link>
                        </li>
                    </ul>
                </div>
                
                    <Switch>
                        <Route exact path={path}>
                            <Another />
                        </Route>
                        <Route path={`${path}/another`}>
                            <Another />
                        </Route>
                        <Route path={`${path}/another2`}>
                            <Another2 />
                        </Route>
                        <Route path={`${path}/another3`}>
                            <Another3 />
                        </Route>
                        <Route path={`${path}/another4`}>
                            <Another4 />
                        </Route>
                    </Switch>

            </div>
        )
    
}

export default Users