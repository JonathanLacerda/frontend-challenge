import { useState, useEffect} from 'react'
import './App.css'

import { GlobalStyle } from './styles/styles'

import api from './services/api';


function App() {

	useEffect(() => {
		api('people/').then((res) => {
			console.log(res);
		});
	},[])

  return (
		<section className='bg-black'>
			<GlobalStyle />
			<div className="flex justify-center">
				<h1 className="font-bold text-2xl text-blue-900">
					React and Tailwind with Vitejs!
				</h1>
			</div>
		</section>
  )
}

export default App
