import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function Result({ inputs }) {
	const resultData = calculateInvestmentResults(inputs)
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
					return (
						<tr key={yearData.year}>
							<td>{yearData.year}</td>
							<td>{formatter.format(yearData.valueEndOfYear)}</td>
							<td>{formatter.format(yearData.interest)}</td>
							<td></td>
							<td></td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
