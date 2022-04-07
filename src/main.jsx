import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import './index.css'
import App from './App'
import Films from "./pages/films/films";
import Char from "./pages/char/char";
import Register from "./pages/register/register";

import { GlobalStyle } from './styles/styles'
import Header from './components/header/header'

const rootElement = document.getElementById("root");

ReactDOM.render(

	<>	
		<GlobalStyle />
		<BrowserRouter>
			<Header/>
			<main className='container mx-auto'>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="films" element={<Films />} />
					<Route path="char" element={<Char />} />
					<Route path="register" element={<Register />} />
				</Routes>
				
			</main>
		</BrowserRouter>
	</>,
  rootElement
)
