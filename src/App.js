import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const UsersContainer = () =>{
	return(
		<>
			<h1>Dashboard</h1>
			<Outlet />
		</>
	)
}

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route />
				</Routes>		
			</BrowserRouter>
		</div>
	);
}

export default App;
