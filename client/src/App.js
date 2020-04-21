import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "./App.css";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/main/Home";
import Dashboard from "./components/main/Dashboard";
import ContestsPage from "./components/main/ContestsPage";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/contest" component={ContestsPage} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
			</Switch>
		</Router>
	);
}

export default App;
