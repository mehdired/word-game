import React, { useState } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import Form from '../Form'
import Guess from '../Guess/Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
	const [guessInput, setGuessInput] = useState('')

	const [guesses, setGuesses] = useState([])
	const [win, setWin] = useState(false)
	const loose = guesses.length === NUM_OF_GUESSES_ALLOWED

	return (
		<>
			<div className="guess-results">
				{range(NUM_OF_GUESSES_ALLOWED).map((_, index) => (
					<Guess
						key={`${index}`}
						row={index + 1}
						guess={guesses[index] || []}
						answer={answer}
					/>
				))}
			</div>
			<Form
				guessInput={guessInput}
				setGuessInput={setGuessInput}
				setGuesses={setGuesses}
				answer={answer}
				setWin={setWin}
				isWin={win}
				loose={loose}
			/>
			{win && (
				<div className="happy banner">
					<p>
						<strong>Congratulations!</strong> Got it in
						<strong>{guesses.length} guesses</strong>.
					</p>
				</div>
			)}
			{loose && (
				<div className="sad banner">
					<p>
						Sorry, the correct answer is <strong>LEARN</strong>.
					</p>
				</div>
			)}
		</>
	)
}

export default Game
