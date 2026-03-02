import { useState } from 'react'
import verktor from '../assets/Vektor3.png'
import DustLayer from '../effect/DustLayer'

const FAQSection = () => {
	const [openIndex, setOpenIndex] = useState(null)

	const faqData = [
		{
			question: 'What is the AI Scheduling Assistant?',
			answer:
				'The AI Scheduling Assistant is an advanced tool that uses artificial intelligence to manage your appointments, meetings, and schedules effortlessly.',
		},
		{
			question: 'How does the AI Scheduling Assistant work?',
			answer:
				'It analyzes your availability and preferences to suggest the best times for meetings and syncs with your calendars automatically.',
		},
		{
			question: 'Is the AI Scheduling Assistant compatible with my calendar?',
			answer:
				'Yes, our AI Scheduling Assistant seamlessly integrates with popular calendar applications like Google Calendar, Outlook, and Apple Calendar, ensuring your schedules are always in sync.',
		},
		{
			question: 'Can the AI Scheduling Assistant manage tasks as well?',
			answer:
				'Yes, it can prioritize and schedule tasks to maximize productivity.',
		},
		{
			question: 'How secure is my data with the AI Scheduling Assistant?',
			answer:
				'We take your privacy and security seriously. Our AI Scheduling Assistant uses advanced encryption and security protocols to ensure your data is protected at all times.',
		},
		{
			question: 'Can I customize notifications and reminders?',
			answer:
				'Yes, you can fully customize alerts, reminders, and notifications.',
		},
		{
			question: 'How do I start with AI Scheduling?',
			answer: 'Sign up, connect your calendar, and start scheduling instantly.',
		},
		{
			question: 'What are the pricing plans for the AI Scheduling Assistant?',
			answer:
				'We offer flexible plans for individuals, teams, and enterprises.',
		},
	]

	const toggleFAQ = index => {
		setOpenIndex(prev => (prev === index ? null : index))
	}

	return (
		<div
			className='relative overflow-hidden'
			style={{
				background: `
					radial-gradient(38.5% 24.47% at 50% 11.59%, rgba(43, 117, 204, 0.08) 0%, rgba(43, 117, 204, 0) 100%),
					radial-gradient(24.45% 22.45% at 50% 0%, rgba(43, 117, 204, 0.1) 0%, rgba(43, 117, 204, 0) 100%)
				`,
			}}
		>
			{/* Vector background */}
			<div
				className='absolute inset-0 z-0 pointer-events-none bg-center bg-no-repeat'
				style={{
					backgroundImage: `url(${verktor})`,
					backgroundSize: '600px',
					backgroundPosition: 'center 120px',
				}}
			/>

			{/* Particles */}
			<DustLayer count={100} />

			{/* Content */}
			<div className='relative z-10 min-h-screen text-white py-20 px-4 flex flex-col items-center'>
				{/* Header */}
				<div className='text-center mb-16'>
					<div className='mb-4'>
						<span
							className='px-6 py-2 mb-6 rounded-full text-white text-xs md:text-sm font-medium border border-white/10 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_30px_rgba(43,117,204,0.6)]'
							style={{
								background: 'linear-gradient(270deg, #0E121B 0%, #2B75CC 100%)',
							}}
						>
							FAQ
						</span>
					</div>

					<h2 className='text-5xl font-bold mb-4'>
						Ko&apos;p beriladigan{' '}
						<span className='text-[#00e5ff]'>savollar</span>
					</h2>

					<p className='text-[rgba(188,188,188,1)] text-sm max-w-xl mx-auto'>
						Platforma va onlayn kurslar bo‘yicha eng ko‘p beriladigan savollarga
						javoblar
					</p>
				</div>

				{/* Accordion Grid */}
				<div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
					{/* LEFT COLUMN */}
					<div className='flex flex-col gap-4'>
						{faqData
							.filter((_, index) => index % 2 === 0)
							.map((item, index) => {
								const realIndex = index * 2
								const isOpen = openIndex === realIndex
								return (
									<div
										key={realIndex}
										className={`relative rounded-xl overflow-hidden ${
											isOpen
												? 'shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
												: 'hover:shadow-lg'
										}`}
										style={{
											background:
												'linear-gradient(180deg, #0E121B 0%, #181B25 24%)',
											border: '1px solid #2E3455',
										}}
									>
										<button
											onClick={() => toggleFAQ(realIndex)}
											aria-expanded={isOpen}
											className='w-full p-5 flex items-center justify-between gap-4 text-left'
										>
											<span
												className={`text-[15px] font-medium transition-colors ${
													isOpen ? 'text-white' : 'text-gray-300'
												}`}
											>
												{item.question}
											</span>

											<div
												className={`transition-transform duration-300 ${
													isOpen ? 'rotate-180 text-[#4FC3F7]' : 'text-gray-500'
												}`}
											>
												<svg
													className='w-5 h-5'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='2'
														d='M12 6v12M6 12h12'
													/>
												</svg>
											</div>
										</button>

										<div
											className='overflow-hidden transition-all duration-300 ease-in-out'
											style={{
												maxHeight: isOpen ? '500px' : '0px',
												opacity: isOpen ? 1 : 0,
											}}
										>
											<div className='px-5 pb-6 text-gray-400 text-[13px] leading-relaxed border-t border-[#1F2347] pt-4'>
												{item.answer}
											</div>
										</div>
									</div>
								)
							})}
					</div>

					{/* RIGHT COLUMN */}
					<div className='flex flex-col gap-4'>
						{faqData
							.filter((_, index) => index % 2 !== 0)
							.map((item, index) => {
								const realIndex = index * 2 + 1
								const isOpen = openIndex === realIndex
								return (
									<div
										key={realIndex}
										className={`relative rounded-xl overflow-hidden ${
											isOpen
												? 'shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
												: 'hover:shadow-lg'
										}`}
										style={{
											background:
												'linear-gradient(180deg, #0E121B 0%, #181B25 24%)',
											border: '1px solid #2E3455',
										}}
									>
										<button
											onClick={() => toggleFAQ(realIndex)}
											aria-expanded={isOpen}
											className='w-full p-5 flex items-center justify-between gap-4 text-left'
										>
											<span
												className={`text-[15px] font-medium transition-colors ${
													isOpen ? 'text-white' : 'text-gray-300'
												}`}
											>
												{item.question}
											</span>

											<div
												className={`transition-transform duration-300 ${
													isOpen ? 'rotate-180 text-[#4FC3F7]' : 'text-gray-500'
												}`}
											>
												<svg
													className='w-5 h-5'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='2'
														d='M12 6v12M6 12h12'
													/>
												</svg>
											</div>
										</button>

										<div
											className='overflow-hidden transition-all duration-300 ease-in-out'
											style={{
												maxHeight: isOpen ? '500px' : '0px',
												opacity: isOpen ? 1 : 0,
											}}
										>
											<div className='px-5 pb-6 text-gray-400 text-[13px] leading-relaxed border-t border-[#1F2347] pt-4'>
												{item.answer}
											</div>
										</div>
									</div>
								)
							})}
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes dustFloat {
					0% {
						transform: translateY(0px);
						opacity: 0.3;
					}
					50% {
						transform: translateY(-6px);
						opacity: 0.6;
					}
					100% {
						transform: translateY(0px);
						opacity: 0.3;
					}
				}
			`}</style>
		</div>
	)
}

export default FAQSection
