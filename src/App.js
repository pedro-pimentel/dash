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
				<button onClick={() => window.history.back()}>Voltar</button>
				<Routes>					
					<Route path="users" element={<UsersContainer />} >
						<Route index element={<Users />} />
						<Route path=":id/posts" element={<Posts />} />
						<Route path=":id/posts/new/:postid" element={<NewPost />} />
						<Route path=":id/posts/new" element={<NewPost />} />
					</Route>
				</Routes>		
			</BrowserRouter>
		</div>
	);
}

export default App;
