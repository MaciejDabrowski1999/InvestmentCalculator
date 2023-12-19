import { useState } from 'react'

export default function UserInput() {
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
				[id]: newValue,
			}
		})
	}

	return (
		<section id="user-input">
			<div className="input-group">
				<div>
					<label>Initial investment</label>
					<input
						value={inputsValues.initialInvestment}
						type="number"
						required
						onChange={event => {
							handleChangeValue('initialInvestment', event.target.value)
						}}
					/>
				</div>
				<div>
					<label>Annual investment</label>
					<input
						value={inputsValues.annualInvestment}
						type="number"
						required
						onChange={event => {
							handleChangeValue('annualInvestment', event.target.value)
						}}
					/>
				</div>
			</div>
			<div className="input-group">
				<div>
					<label>Expected return</label>
					<input
						value={inputsValues.expectedReturn}
						type="number"
						required
						onChange={event => {
							handleChangeValue('expectedReturn', event.target.value)
						}}
					/>
				</div>
				<div>
					<label>Duration</label>
					<input
						value={inputsValues.duration}
						type="number"
						required
						onChange={event => {
							handleChangeValue('duration', event.target.value)
						}}
					/>
				</div>
			</div>
		</section>
	)
}
