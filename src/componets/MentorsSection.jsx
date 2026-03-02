import { useEffect, useRef, useState } from 'react'
import vector from '../assets/Vektor2.png'
import DustLayer from '../effect/DustLayer'

/* ================= DATA ================= */
const mentors = [
	{
		id: 1,
		name: 'James Turner',
		role: 'Senior Frontend Developer',
		exp: '8+ yil tajriba',
		img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
	},
	{
		id: 2,
		name: 'Sarah Connor',
		role: 'UI/UX Designer',
		exp: '5+ yil tajriba',
		img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
	},
	{
		id: 3,
		name: 'Michael Chen',
		role: 'Backend Developer',
		exp: '6+ yil tajriba',
		img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
	},
	{
		id: 4,
		name: 'Elena Rodriguez',
		role: 'Frontend Developer',
		exp: '4+ yil tajriba',
		img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
	},
	{
		id: 5,
		name: 'Alex Rivers',
		role: 'DevOps Engineer',
		exp: '7+ yil tajriba',
		img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
	},
	{
		id: 6,
		name: 'Emma Wilson',
		role: 'Mobile Developer',
		exp: '5+ yil tajriba',
		img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop',
	},
	{
		id: 9,
		name: 'Olivia Brown',
		role: 'Full Stack Developer',
		exp: '5+ yil tajriba',
		img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
	},
	{
		id: 8,
		name: 'Emma Wilson',
		role: 'Mobile Developer',
		exp: '5+ yil tajriba',
		img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop',
	},
	{
		id: 9,
		name: 'Olivia Brown',
		role: 'Full Stack Developer',
		exp: '5+ yil tajriba',
		img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
	},
]

/* ================= COMPONENT ================= */
const MentorsSection = () => {
	const [currentIndex, setCurrentIndex] = useState(3)
	const [isAnimating, setIsAnimating] = useState(false)

	const startX = useRef(0)
	const isDragging = useRef(false)

	/* ===== AUTOPLAY 10s ===== */
	useEffect(() => {
		const interval = setInterval(() => {
			if (isAnimating) return
			setIsAnimating(true)
			setCurrentIndex(prev => (prev + 1) % mentors.length)
			setTimeout(() => setIsAnimating(false), 700)
		}, 10000) // ← 10 soniya
		return () => clearInterval(interval)
	}, [currentIndex, isAnimating])

	/* ===== SWIPE (faqat oldinga) ===== */
	const handleTouchStart = e => {
		startX.current = e.touches[0].clientX
	}

	const handleTouchEnd = e => {
		const diff = startX.current - e.changedTouches[0].clientX
		if (diff > 50 && !isAnimating) {
			setIsAnimating(true)
			setCurrentIndex(prev => (prev + 1) % mentors.length)
			setTimeout(() => setIsAnimating(false), 700)
		}
	}

	const handleMouseDown = e => {
		isDragging.current = true
		startX.current = e.clientX
	}

	const handleMouseUp = e => {
		if (!isDragging.current) return
		isDragging.current = false
		const diff = startX.current - e.clientX
		if (diff > 50 && !isAnimating) {
			setIsAnimating(true)
			setCurrentIndex(prev => (prev + 1) % mentors.length)
			setTimeout(() => setIsAnimating(false), 700)
		}
	}

	const handleMouseLeave = () => {
		isDragging.current = false
	}

	/* ===== 9 ta ko'rinadigan kart (rasmdagi kabi simmetriya) ===== */
	const getVisibleMentors = () => {
		const visible = []
		for (let i = -4; i <= 4; i++) {
			const index = (currentIndex + i + mentors.length) % mentors.length
			visible.push(mentors[index])
		}
		return visible
	}

	const visibleMentors = getVisibleMentors()

	return (
		<section className='relative min-h-screen w-full bg-[rgba(14,18,27,1)] flex flex-col items-center overflow-hidden py-16 md:py-24'>
			<img
				src={vector}
				alt='background'
				className='absolute w-full h-full object-cover opacity-40 pointer-events-none'
			/>
			<DustLayer count={120} zIndex={1} />

			<div className='relative flex flex-col items-center text-center px-4'>
				{/* HEADER */}
				<button
					className='mb-8 px-8 py-3 rounded-full text-white text-base font-medium border border-white/10 backdrop-blur-sm'
					style={{
						background: 'linear-gradient(270deg, #0E121B 0%, #2B75CC 100%)',
					}}
				>
					Mentorlar
				</button>

				<h2 className='text-white font-bold text-[clamp(34px,6vw,60px)] mb-6'>
					Sohasida tajribali mutaxassislar bilan <br />
					<span className='text-[#00E6FC]'>o‘rganing!</span>
				</h2>

				<p className='text-[#BCBCBC] max-w-xl '>
			Bizning platforma orqali siz IT va zamonaviy kasblarni <br />
mahalliy va xorijiy mutaxassislar bilan onlayn o‘rganasiz.
				</p>

				{/* ===== RASMGA YAQIN CAROUSEL ===== */}
				<div
					className='relative w-full h-[520px] md:h-[620px] select-none cursor-grab active:cursor-grabbing'
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}
					onMouseLeave={handleMouseLeave}
				>
					{visibleMentors.map((mentor, idx) => {
						const position = idx - 4 // markaz = 0
						const distance = Math.abs(position)
						const isCenter = distance === 0

						// Rasmda ko'rsatilgandek masofaga qarab o'lcham va shaffoflik
						let scale = 0.5 + (4 - distance) * 0.10 // 0.5 → 1.0
						let opacity = Math.max(0.2, 1 - distance * 0.1)
						let blur = distance * 1.2
						let zIndex = 20 - distance * 4

						// chetdagi kartalar juda kichik va xira
						if (distance >= 4) {
							scale = 0.45
							opacity = 0.15
							blur = 3
						}

						return (
							<div
								key={`${mentor.id}-${idx}`}
								className='absolute left-1/2 top-1/2 px-5 -translate-y-1/2 flex flex-col items-center transition-all duration-700 ease-out'
								style={{
									transform: `translateX(calc(-50% + ${position * 200}px)) scale(${scale})`,
									opacity,
									filter: `blur(${blur}px)`,
									zIndex,
								}}
							>
								<div
									className={`
                    relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden
                    shadow-2xl border 
                     from-gray-900 to-black
                  `}
								style={{
  // MARKAZIY CARD KICHIKROQ
  width: `${isCenter ? '95px' : Math.max(80, 280 - distance * 40)}px`,
  marginTop: isCenter ? '120px' : '0px',
}}
	
								>
									<img
										src={mentor.img}
										alt={mentor.name}
										className='w-full h-full object-cover'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent' />
								</div>

								{isCenter && (
									<div className='mt-8 md:mt-10 text-center'>
										<h4 className='text-white text-2xl md:text-3xl font-bold mb-2'>
											{mentor.name}
										</h4>
										<p className='text-[#00E6FC] text-lg md:text-xl font-medium'>
											{mentor.role}
										</p>
										<p className='text-gray-400 text-base md:text-lg mt-1'>
											{mentor.exp}
										</p>
									</div>
								)}
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default MentorsSection
