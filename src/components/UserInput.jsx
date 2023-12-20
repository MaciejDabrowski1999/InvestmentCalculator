export default function UserInput({ userInput, inputsValues }) {
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
							userInput('initialInvestment', event.target.value)
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
							userInput('annualInvestment', event.target.value)
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
							userInput('expectedReturn', event.target.value)
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
							userInput('duration', event.target.value)
						}}
					/>
				</div>
			</div>
		</section>
	)
}
