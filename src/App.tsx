import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai' // Импортируем иконку закрытия
import { BsMoonFill } from 'react-icons/bs'
import { FaFire } from 'react-icons/fa6'
import { IoPerson } from 'react-icons/io5'
import { MdSunny } from 'react-icons/md'

import './index.css'

const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme === 'dark') {
			setIsDarkMode(true)
			document.body.classList.add('dark-theme')
		}
	}, [])

	const toggleTheme = () => {
		setIsDarkMode(prevMode => {
			const newMode = !prevMode
			if (newMode) {
				localStorage.setItem('theme', 'dark')
			} else {
				localStorage.setItem('theme', 'light')
			}
			document.body.classList.toggle('dark-theme', newMode)
			return newMode
		})
	}

	const toggleMenu = () => {
		setIsMenuOpen(prevState => !prevState)
	}

	return (
		<div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
			<header className='header'>
				<div className='container header-content'>
					<div className='header-left'>
						<h1 className='logo'>VideoVault</h1>
					</div>
					<button
						id='menu-button'
						className='menu-button'
						aria-label='Menu'
						aria-expanded={isMenuOpen}
						onClick={toggleMenu}
					>
						{isMenuOpen ? (
							<AiOutlineClose />
						) : (
							<span className='menu-icon'></span>
						)}
					</button>
					<nav className={`nav ${isMenuOpen ? 'show' : ''}`} id='nav-menu'>
						<ul className='nav-list'>
							<li>
								<a href='#features' className='nav-link'>
									Features
								</a>
							</li>
							<li>
								<a href='#about' className='nav-link'>
									About
								</a>
							</li>
							<li>
								<a href='#contact' className='nav-link'>
									Contact
								</a>
							</li>
							<div className='settings'>
								<div className='theme-toggle'>
									<button
										id='theme-button'
										className='theme-button'
										onClick={toggleTheme}
									>
										{isDarkMode ? <BsMoonFill /> : <MdSunny />}
									</button>
								</div>
								<div className='language-switch'>
									<label htmlFor='language-select' className='language-label'>
										Language:
									</label>
									<select id='language-select' className='language-select'>
										<option value='en'>English</option>
										<option value='ru'>Русский</option>
										<option value='zh'>中文</option>
									</select>
								</div>
								<div className='counter'>
									<p>
										<FaFire />
										online:{' '}
										<span id='current-visitors' className='visitors-count'>
											0
										</span>
									</p>
									<p>
										<IoPerson />
										visited:{' '}
										<span id='total-visits' className='visits-count'>
											0
										</span>
									</p>
								</div>
							</div>
						</ul>
					</nav>
				</div>
			</header>

			<main className='main-content'>
				<section className='hero'>
					<div className='container'>
						<h2 className='hero-title'>Download 4K Videos Instantly</h2>
						<p className='hero-subtitle'>
							Paste your link below to get started.
						</p>
						<form className='download-form'>
							<input
								type='url'
								placeholder='Enter video URL'
								required
								className='url-input'
							/>
							<select name='quality' className='quality-select'>
								<option value='720p'>720p</option>
								<option value='1080p'>1080p HD</option>
								<option value='1080p'>1440p HD</option>
								<option value='2K'>2K</option>
								<option value='4K'>4K</option>
							</select>
							<button type='submit' className='download-button'>
								Download
							</button>
						</form>
					</div>
				</section>

				<section id='features' className='features'>
					<div className='container'>
						<h3 className='section-title'>Why Choose VideoVault?</h3>
						<ul className='feature-list'>
							<li className='feature-item'>Download videos in 4K quality.</li>
							<li className='feature-item'>Fast and secure processing.</li>
							<li className='feature-item'>Easy-to-use interface.</li>
						</ul>
					</div>
				</section>

				<section id='about' className='about'>
					<div className='container'>
						<h3 className='section-title'>About Us</h3>
						<p className='about-text'>
							VideoVault is your go-to solution for downloading high-quality
							videos from the web.
						</p>
					</div>
				</section>

				<section id='contact' className='contact'>
					<div className='container'>
						<h3 className='section-title'>Contact Us</h3>
						<p className='contact-text'>Email: support@videovault.com</p>
					</div>
				</section>
			</main>

			<footer className='footer'>
				<div className='container'>
					<p className='footer-text'>
						&copy; 2024 VideoVault. All Rights Reserved.
					</p>
				</div>
			</footer>
		</div>
	)
}

export default App
