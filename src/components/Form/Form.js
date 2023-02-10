import React from 'react'
import { checkGuess } from '../../game-helpers'

function Form({
	guessInput,
	setGuessInput,
	loose,
	setGuesses,
	setWin,
	isWin,
	answer
}) {
	const handleSubmit = (event) => {
		event.preventDefault()
		if (guessInput.length !== 5) {
			alert('it must be 5 letters')
			return
		}

		const guessStatus = checkGuess(guessInput, answer)
		setGuesses((guesses) => [
			...guesses,
			{ id: crypto.randomUUID(), value: guessInput }
		])
		setWin(guessStatus.every((status) => status.status === 'correct'))
		setGuessInput('')
	}

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter Guess:</label>
			{!isWin && !loose && (
				<input
					id="guess-input"
					type="text"
					value={guessInput}
					onChange={({ target }) => {
						setGuessInput(target.value.toUpperCase())
					}}
					minLength="5"
				/>
			)}
		</form>
	)
}

export default Form
