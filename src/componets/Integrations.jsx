// Assetlarni import qilish
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.svg'
import icon6 from '../assets/icon6.svg'
import icon7 from '../assets/icon7.svg'
import DustLayer from '../effect/DustLayer'

const Integrations = () => {
	const leftIcons = [
		{ id: 1, src: icon7, alt: 'Stat', top: '15%', left: '10%' },
		{ id: 2, src: icon2, alt: 'Huv', top: '43%', left: '24%' },
		{ id: 3, src: icon3, alt: 'Id', top: '74%', left: '8%' },
	]

	const rightIcons = [
		{ id: 4, src: icon4, alt: 'OneId', top: '15%', right: '10%' },
		{ id: 5, src: icon5, alt: 'Shield', top: '43%', right: '24%' },
		{ id: 6, src: icon6, alt: 'Chat', top: '74%', right: '8%' },
	]

	const lineCount = 10
	const lines = Array.from({ length: lineCount })

	return (
		<div className='relative py-24 bg-[rgba(14,18,27,1)] text-white overflow-hidden px-4'>
{/* TOP GLOW */}
<div
	className='absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none'
	style={{
		background:
			'radial-gradient(ellipse at top, rgba(43,117,204,0.9) 0%, rgba(43,117,204,0.4) 35%, transparent 50%)',
		filter: 'blur(140px)',
		zIndex: 2,
	}}
/>

				<DustLayer count={120} zIndex={1} />

			{/* ================= TITLE ================= */}
			<div className='relative z-10 text-center mb-8'>
				<button
					className='mb-6 px-6 py-2 rounded-full text-white text-xs md:text-sm font-medium border border-white/10 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_30px_rgba(43,117,204,0.6)]'
					style={{
						background: 'linear-gradient(270deg, #0E121B 0%, #2B75CC 100%)',
					}}
				>
					Platforma haqida
				</button>

				<h2 className='text-3xl sm:text-4xl md:text-6xl font-medium leading-tight'>
					Integratsiyalashgan <br />
					<span className='text-[#00e5ff]'>platformalar</span>
				</h2>

				<p className='text-gray-400 max-w-xl mx-auto mt-6 text-sm md:text-lg'>
					Ta'lim jarayonini qulay va samarali qiluvchi integratsiyalar
				</p>
			</div>

			{/* ================= DESKTOP ================= */}
			<div className='hidden md:flex relative z-10 w-full max-w-7xl h-[500px] mx-auto items-center justify-center'>

				{/* SVG Lines */}
				<svg
					className='absolute inset-0 w-full h-full pointer-events-none'
					viewBox='0 0 1000 500'
				>
					<defs>
						<linearGradient id='lineGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
							<stop offset='0%' stopColor='white' stopOpacity='0' />
							<stop offset='40%' stopColor='white' stopOpacity='0.4' />
							<stop offset='60%' stopColor='white' stopOpacity='0.4' />
							<stop offset='100%' stopColor='white' stopOpacity='0' />
						</linearGradient>
					</defs>

					{lines.map((_, i) => {
						const step = (i - lineCount / 2) * 20
						return (
							<path
								key={`l-${i}`}
								d={`M 50 ${250 + step * 2.5} C 250 ${250 + step}, 400 250, 500 250`}
								stroke='url(#lineGrad)'
								strokeWidth='1'
								fill='none'
							/>
						)
					})}

					{lines.map((_, i) => {
						const step = (i - lineCount / 2) * 20
						return (
							<path
								key={`r-${i}`}
								d={`M 950 ${250 + step * 2.5} C 750 ${250 + step}, 600 250, 500 250`}
								stroke='url(#lineGrad)'
								strokeWidth='1'
								fill='none'
							/>
						)
					})}
				</svg>

				{/* Left icons */}
				{leftIcons.map(icon => (
					<div
						key={icon.id}
						className='absolute w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl'
						style={{ top: icon.top, left: icon.left }}
					>
						<img src={icon.src} alt={icon.alt} className='w-10 h-10 object-contain' />
					</div>
				))}

				{/* Center */}
				<div className='relative flex items-center justify-center'>
					<div className='absolute w-[90px] h-[90px] border border-white/40 rounded-2xl'></div>
					<div className='absolute w-[105px] h-[105px] border border-white/20 rounded-2xl'></div>
					<div className='absolute w-[120px] h-[120px] border border-white/10 rounded-2xl'></div>
<div className='w-20 h-20 bg-gradient-to-b from-[rgba(56,160,255,1)] to-[rgba(45,61,153,1)]
rounded-2xl flex items-center justify-center
border border-white/30
shadow-[0_0_40px_rgba(59,130,246,0.6)]'>

						<img src={icon1} alt='' className='w-12 h-12 object-contain' />
					</div>
				</div>

				{/* Right icons */}
				{rightIcons.map(icon => (
					<div
						key={icon.id}
						className='absolute w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl'
						style={{ top: icon.top, right: icon.right }}
					>
						<img src={icon.src} alt={icon.alt} className='w-10 h-10 object-contain' />
					</div>
				))}
			</div>

			{/* ================= MOBILE ================= */}
			<div className='md:hidden relative z-10 max-w-md mx-auto space-y-10'>
				<div className='relative flex items-center justify-center'>
					<div className='absolute w-[70px] h-[70px] border border-white/40 rounded-xl'></div>
					<div className='absolute w-[85px] h-[85px] border border-white/20 rounded-xl'></div>

					<div className='w-16 h-16 bg-gradient-to-b from-[#3b82f6] to-[#1d4ed8] rounded-xl flex items-center justify-center border border-white/30 shadow-2xl'>
						<img src={icon1} alt='' className='w-8 h-8 object-contain' />
					</div>
				</div>

				<div className='grid grid-cols-2 gap-6'>
					{[...leftIcons, ...rightIcons].map(icon => (
						<div
							key={icon.id}
							className='w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg'
						>
							<img src={icon.src} alt={icon.alt} className='w-10 h-10 object-contain' />
						</div>
					))}
				</div>
			</div>

			{/* ================= ANIMATION ================= */}
			<style jsx>{`
				@keyframes dustFloat {
					0% { transform: translateY(0px); opacity: 0.3; }
					50% { transform: translateY(-6px); opacity: 0.6; }
					100% { transform: translateY(0px); opacity: 0.3; }
				}
				.dust {
					animation: dustFloat linear infinite;
				}
			`}</style>

		</div>
	)
}

export default Integrations
