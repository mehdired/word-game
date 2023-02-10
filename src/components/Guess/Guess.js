import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess({ row, guess, answer }) {
	const guessStatus = checkGuess(guess?.value, answer)

	return (
		<p className="guess">
			{range(5).map((_, index) => (
				<span
					key={`${row}-${index + 1}`}
					className={`cell ${
						guess.value ? guessStatus[index]?.status : ''
					}`}
				>
					{guess?.value?.[index]}
				</span>
			))}
		</p>
	)
}

export default Guess
