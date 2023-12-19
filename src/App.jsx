import { useState } from 'react'
import UserInput from './components/UserInput'
import Result from './components/result'
import { calculateInvestmentResults } from './util/investment.js'

function App() {
	return (
		<>
			<UserInput />
			<Result />
		</>
	)
}

export default App
