import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ReactDOM from 'react-dom'
import App from './App'

const useField = (type) => {
	const [value, setValue] = useState('')

	const onChange = (event) => {
		setValue(event.target.value)
	}

	return {
		type,
		value,
		onChange,
	}
}

const useCountry = (name) => {
	const [country, setCountry] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		const getCountryDetails = async () => {
			try {
				const response = await axios.get(
					`https://restcountries.eu/rest/v2/name/${name}?fullText=true`
				)

				console.log(response)

				setCountry(response.data[0])
			} catch (error) {
				setError(error.response.data.message)
			}
		}

		// Fetch details if name field is submitted
		getCountryDetails()
	}, [name])

	return { country, error }
}

ReactDOM.render(<App />, document.getElementById('root'))

export { useField, useCountry }
