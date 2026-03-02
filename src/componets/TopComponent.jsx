import heroImg from '../assets/student.jpg'

const TopComponent = () => {
	return (
		<div
			className='relative h-[900px] bg-center bg-cover flex items-center justify-center'
			style={{
				backgroundImage: `url(${heroImg})`,
			}}
		>
			{/* Qora gradient overlay - aynan siz bergan kod asosida */}
			<div
				className='absolute inset-0 z-0'
				style={{
					background:
						'linear-gradient(0deg, rgba(14, 18, 27, 0.9) 0%, rgba(14, 18, 27, 0.5) 46.15%, rgba(14, 18, 27, 0) 100%)',
				}}
			></div>

			{/* Text content */}
			<div className='relative z-10 text-center text-white px-4 max-w-5xl'>
				<h1 className='text-[40px] md:text-[60px] font-bold leading-[1.1] tracking-tight'>
					Zamonaviy kasblarni <br />
					o‘rganishni <span className='text-[#00f2ff]'>bugun boshlang</span>
				</h1>

				<p className='mt-6 text-[#BCBCBC] text-[12px] md:text-base max-w-2xl font-normal mx-auto leading-relaxed opacity-80'>
					Zamonaviy platforma asosida ishlab chiqilgan onlayn kurslar{' '}
					<br className='hidden md:block' />
					talabalarga yuqori sifatli ta'lim va qulay o‘qish muhitini taqdim
					etadi.
				</p>
			</div>
		</div>
	)
}

export default TopComponent
