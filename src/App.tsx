import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsMoonFill } from 'react-icons/bs'
import { FaFire } from 'react-icons/fa6'
import { IoPerson } from 'react-icons/io5'
import { MdSunny } from 'react-icons/md'

import LanguageSwitcher from './components/languageSwitcher/LanguageSwitcher'
import './index.css'

// Define the type for translations
type Translation = {
	features: string
	about: string
	contact: string
	title: string
	subtitle: string
	whyChoose: string
	feature1: string
	feature2: string
	feature3: string
	aboutTitle: string
	aboutText: string
	contactTitle: string
	contactText: string
}

// Dictionary of translations with index signature
const translations: { [key: string]: Translation } = {
	en: {
		features: 'Features',
		about: 'About',
		contact: 'Contact',
		title: 'Download 4K Videos Instantly',
		subtitle: 'Paste your link below to get started.',
		whyChoose: 'Why Choose VideoVault?',
		feature1: 'Download videos in 4K quality.',
		feature2: 'Fast and secure processing.',
		feature3: 'Easy-to-use interface.',
		aboutTitle: 'About Us',
		aboutText:
			'VideoVault is your go-to solution for downloading high-quality videos from the web.',
		contactTitle: 'Contact Us',
		contactText: 'Email: support@videovault.com',
	},
	ru: {
		features: 'Функции',
		about: 'О Нас',
		contact: 'Контакты',
		title: 'Скачивайте 4K Видео Мгновенно',
		subtitle: 'Вставьте свою ссылку ниже, чтобы начать.',
		whyChoose: 'Почему Выбирают VideoVault?',
		feature1: 'Скачивайте видео в качестве 4K.',
		feature2: 'Быстрая и безопасная обработка.',
		feature3: 'Удобный интерфейс.',
		aboutTitle: 'О Нас',
		aboutText:
			'VideoVault - это ваше лучшее решение для скачивания видео высокого качества из интернета.',
		contactTitle: 'Свяжитесь с Нами',
		contactText: 'Email: support@videovault.com',
	},
	zh: {
		features: '功能',
		about: '关于我们',
		contact: '联系我们',
		title: '立即下载4K视频',
		subtitle: '在下面粘贴您的链接以开始。',
		whyChoose: '为什么选择 VideoVault?',
		feature1: '下载4K质量的视频。',
		feature2: '快速安全的处理。',
		feature3: '易于使用的界面。',
		aboutTitle: '关于我们',
		aboutText: 'VideoVault是您从网络下载高质量视频的首选解决方案。',
		contactTitle: '联系我们',
		contactText: 'Email: support@videovault.com',
	},
}

const App: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
	const [language, setLanguage] = useState<string>('en')

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

	const handleLanguageChange = (selectedLanguage: string) => {
		setLanguage(selectedLanguage)
	}

	const t = translations[language]

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
									{t.features}
								</a>
							</li>
							<li>
								<a href='#about' className='nav-link'>
									{t.about}
								</a>
							</li>
							<li>
								<a href='#contact' className='nav-link'>
									{t.contact}
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
								<LanguageSwitcher
									currentLanguage={language}
									onLanguageChange={handleLanguageChange}
								/>
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
						<h2 className='hero-title'>{t.title}</h2>
						<p className='hero-subtitle'>{t.subtitle}</p>
						<form className='download-form'>
							<input
								type='url'
								placeholder={t.subtitle}
								required
								className='url-input'
							/>
							<select name='quality' className='quality-select'>
								<option value='720p'>720p</option>
								<option value='1080p'>1080p HD</option>
								<option value='1440p'>1440p HD</option>
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
						<h3 className='section-title'>{t.whyChoose}</h3>
						<ul className='feature-list'>
							<li className='feature-item'>{t.feature1}</li>
							<li className='feature-item'>{t.feature2}</li>
							<li className='feature-item'>{t.feature3}</li>
						</ul>
					</div>
				</section>

				<section id='about' className='about'>
					<div className='container'>
						<h3 className='section-title'>{t.aboutTitle}</h3>
						<p className='about-text'>{t.aboutText}</p>
					</div>
				</section>

				<section id='contact' className='contact'>
					<div className='container'>
						<h3 className='section-title'>{t.contactTitle}</h3>
						<p className='contact-text'>{t.contactText}</p>
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
