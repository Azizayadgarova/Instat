import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import star from '../assets/Star.png'
import vector from '../assets/Vektor2.png'
import DustLayer from '../effect/DustLayer'

const testimonials = [
	{
		id: 1,
		name: 'Dilnoza Rahmonova',
		user: '@dilnozrakhmonova13',
		text: "Online va oflayn ta'lim imkoniyatlari juda qulay, darslarni birlashtirib o'qish mumkin.",
		img: 'https://i.pravatar.cc/150?u=1',
		stars: 5,
	},
	{
		id: 2,
		name: 'Jasmin Xolmatova',
		user: '@jasminxolmatova234',
		text: "Universitetda ta'lim sifati yuqori, o'qituvchilar esa doimo talabalarni qo'llab-quvvatlaydi.",
		img: 'https://i.pravatar.cc/150?u=2',
		stars: 5,
	},
	{
		id: 3,
		name: 'Bekzod Ismoilov',
		user: '@bekzodismoilov',
		text: 'Bu universitet menga nafaqat bilim, balki real amaliy tajriba ham berdi.',
		img: 'https://i.pravatar.cc/150?u=3',
		stars: 5,
	},
	{
		id: 4,
		name: 'John Smith',
		user: '@johnsmith345',
		text: 'The university provides modern facilities and excellent learning environment for everyone.',
		img: 'https://i.pravatar.cc/150?u=4',
		stars: 5,
	},
]

const Testimonials = () => {
	const row1Ref = useRef(null)
	const row2Ref = useRef(null)

	const reversed = [...testimonials].reverse()
	const row1 = [...testimonials, ...testimonials]
	const row2 = [...reversed, ...reversed]

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to(row1Ref.current, {
				x: '-1920px',
				duration: 40,
				ease: 'linear',
				repeat: -1,
			})

			gsap.fromTo(
				row2Ref.current,
				{ x: '-1920px' },
				{
					x: '0px',
					duration: 45,
					ease: 'linear',
					repeat: -1,
				},
			)
		})

		return () => ctx.revert()
	}, [])

	return (
		<section className='relative py-24 overflow-hidden min-h-screen flex flex-col items-center bg-[rgba(14,18,27,1)]'>
			<img
				src={vector}
				alt='background vector'
				className='absolute top-0 left-0 w-full h-full object-cover opacity-40 pointer-events-none select-none z-0'
			/>

			{/* Dust */}
			<DustLayer count={120} zIndex={1} />

			<div className='absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none' />

			{/* Header */}
			<div className='relative z-10 text-center mb-20 px-4'>
				<button
					className='mb-6 px-8 py-3 rounded-full text-white text-sm font-medium border border-white/10 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_30px_rgba(43,117,204,0.6)] hover:scale-105'
					style={{
						background: 'linear-gradient(270deg, #0E121B 0%, #2B75CC 100%)',
					}}
				>
					Talabalar fikri
				</button>

				<h2 className='text-white text-4xl md:text-[54px] font-bold leading-tight mb-6 tracking-tight'>
					Biz bilan o‘qigan talabalar <br />
					<span className='text-[#00E6FC]'>nimani deydi?</span>
				</h2>

				<p className='text-gray-400 text-[15px] max-w-xl mx-auto opacity-70'>
					Platformamiz orqali bilim olgan talabalar real natijalari va tajribasi
					bilan o‘rtoqlashadi
				</p>
			</div>

			<div className='relative z-10 flex flex-col gap-8 w-full'>
				<div className='flex overflow-hidden'>
					<div ref={row1Ref} className='flex gap-6'>
						{row1.map((item, i) => (
							<Card key={`row1-${i}`} item={item} />
						))}
					</div>
				</div>

				<div className='flex overflow-hidden'>
					<div ref={row2Ref} className='flex gap-6'>
						{row2.map((item, i) => (
							<Card key={`row2-${i}`} item={item} />
						))}
					</div>
				</div>
			</div>

			<style>{`
        @keyframes dustFloat {
          0% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-6px); opacity: 0.6; }
          100% { transform: translateY(0px); opacity: 0.3; }
        }
      `}</style>
		</section>
	)
}

const Card = ({ item }) => (
	<div
		className='min-w-[350px] md:min-w-[450px] backdrop-blur-xl border border-white/5 rounded-[24px] p-8 shadow-2xl relative overflow-hidden group transition-all duration-300'
		style={{ background: 'linear-gradient(180deg, #161B26 0%, #0E121B 100%)' }}
	>
		<img
			src={vector}
			className='absolute inset-0 w-full h-full z-0 object-cover opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-500'
			alt=''
		/>

		<div className='relative z-10'>
			<div className='flex items-center justify-between mb-6'>
				<div className='flex flex-col'>
					<span className='text-white font-semibold text-[16px]'>
						{item.name}
					</span>
					<span className='text-gray-400 text-[13px]'>{item.user}</span>
				</div>
				<img
					src={item.img}
					className='w-12 h-12 rounded-full border border-blue-500/20 object-cover shadow-lg'
					alt={item.name}
				/>
			</div>

			<p className='text-gray-200 text-[15px] leading-relaxed mb-6 italic'>
				"{item.text}"
			</p>

			<div className='flex gap-1'>
				{[...Array(item.stars)].map((_, i) => (
					<span key={i}>
						<img src={star} alt='' />
					</span>
				))}
			</div>
		</div>
	</div>
)

export default Testimonials
