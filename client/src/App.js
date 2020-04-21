import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/main/Home";

// import Dashboard from "./components/main/Dashboard";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
			</Switch>
		</Router>
	);
}

export default App;
