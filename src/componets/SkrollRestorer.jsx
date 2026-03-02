import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollRestorer() {
	const location = useLocation()

	useEffect(() => {
		// Oldingi scroll joyini olish
		const saved = sessionStorage.getItem(location.pathname)
		if (saved) {
			window.scrollTo({ top: parseInt(saved), behavior: 'auto' })
		}

		const handleScroll = () => {
			sessionStorage.setItem(location.pathname, window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [location.pathname])

	return null
}
