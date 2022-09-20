import { useState } from "react"

interface InputProps{
	defaultValue?: string;
}

export const useInput = (initialValue: InputProps) => {
	const [inputValue, setInputValue] = useState<InputProps>(initialValue);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue({defaultValue: e.target.value})
	}

	return [inputValue, handleChange]
}