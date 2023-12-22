import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function Result({ inputs }) {
	const resultData = calculateInvestmentResults(inputs)

	const initalInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment

	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment value</th>
					<th>Interest</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{resultData.map(yearData => {
					const totalInterestValue =
						yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initalInvestment

					const totalAmountValue = yearData.valueEndOfYear - totalInterestValue
					return (
						<tr key={yearData.year}>
							<td>{yearData.year}</td>
							<td>{formatter.format(yearData.valueEndOfYear)}</td>
							<td>{formatter.format(yearData.interest)}</td>
							<td>{formatter.format(totalInterestValue)}</td>
							<td>{formatter.format(totalAmountValue)}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
