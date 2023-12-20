import { useState } from 'react'
import UserInput from './components/UserInput'
import Result from './components/result'

function App() {
	const [inputsValues, setInputsValues] = useState({
		initialInvestment: 15000,
		annualInvestment: 1500,
		expectedReturn: 6,
		duration: 10,
	})

	function handleChangeValue(id, newValue) {
		setInputsValues(prevInputsValue => {
			return {
				...prevInputsValue,
				[id]: +newValue,
			}
		})
		console.log(inputsValues)
	}
	return (
		<>
			<UserInput userInput={handleChangeValue} inputsValues={inputsValues} />
			<Result inputs={inputsValues} />
		</>
	)
}

export default App
