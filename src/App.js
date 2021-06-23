import React, { useState } from 'react'
import { useField, useCountry } from './index'

import Country from './components/Country'

const App = () => {
	const nameInput = useField('text')
	const [name, setName] = useState('')
	const { country, error } = useCountry(name)

	const fetch = (e) => {
		e.preventDefault()
		setName(nameInput.value)
	}

	return (
		<div>
			<form onSubmit={fetch}>
				<input {...nameInput} />
				<button type='submit'>find</button>
			</form>

			{country && <Country country={country} error={error} />}
		</div>
	)
}

export default App
