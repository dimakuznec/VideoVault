import React from 'react'
import './language-switcher.css'

interface LanguageSwitcherProps {
	currentLanguage: string
	onLanguageChange: (language: string) => void
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
	currentLanguage,
	onLanguageChange,
}) => {
	return (
		<div className='language-switch'>
			<label htmlFor='language-select' className='language-label'>
				Language:
			</label>
			<select
				id='language-select'
				className='language-select'
				value={currentLanguage}
				onChange={e => onLanguageChange(e.target.value)}
			>
				<option value='en'>English</option>
				<option value='ru'>Русский</option>
				<option value='zh'>中文</option>
			</select>
		</div>
	)
}

export default LanguageSwitcher
