import { useState } from 'react'
import UserInput from './components/UserInput'
import Result from './components/Result'

function App() {
	const [inputsValues, setInputsValues] = useState({
		initialInvestment: 15000,
		annualInvestment: 1500,
		expectedReturn: 6,
		duration: 10,
	})
	const inputIsValid = inputsValues.duration >= 1

	function handleChangeValue(id, newValue) {
		setInputsValues(prevInputsValue => {
			return {
				...prevInputsValue,
				[id]: +newValue,
			}
		})
	}
	return (
		<>
			<UserInput userInput={handleChangeValue} inputsValues={inputsValues} />
			{inputIsValid ? (
				<Result inputs={inputsValues} />
			) : (
				<p className="center">Please enter a duration greater than zero.</p>
			)}
		</>
	)
}

export default App
