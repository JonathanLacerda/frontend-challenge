import { useState, useEffect} from 'react'
import './App.css'

import Header from './components/header/header'

import api from './services/api';

function App() {

	useEffect(() => {
		api('people/').then((res) => {
			console.log(res);
		});
	},[])

  return (
	<main className='container mx-auto'>
		{/* <Header /> */}
	</main>
  )
}

export default App
