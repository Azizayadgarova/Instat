import ClockIcon from '../assets/Clock.png'
import vektor2 from '../assets/Vektor2.png'
import DustLayer from '../effect/DustLayer'

const courses = [
	{
		id: 1,
		title: 'Milliy hisoblar tizimi',
		image:
			'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=70&auto=format',
		hours: 36,
	},
	{
		id: 2,
		title: 'Statistika (tarmoqlar va sohalar bo‘yicha)',
		image:
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=70&auto=format',
		hours: 576,
	},
	{
		id: 3,
		title: 'Statistika uslubiyoti va amaliyoti',
		image:
			'https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&q=70&auto=format',
		hours: 72,
	},
	{
		id: 4,
		title: 'Uy xo‘jaliklarini tanlama kuzatuvini tashkil etish',
		image:
			'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&q=70&auto=format',
		hours: 48,
	},
	{
		id: 5,
		title: 'Sanoat statistikasi uslubiyoti va amaliyoti',
		image:
			'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=70&auto=format',
		hours: 36,
	},
	{
		id: 6,
		title: 'Investitsiyalar va qurilish statistikasi',
		image:
			'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=800&q=70&auto=format',
		hours: 36,
	},
	{
		id: 7,
		title: 'Xizmatlar sohasi statistikasi',
		image:
			'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=70&auto=format',
		hours: 48,
	},
	{
		id: 8,
		title: 'Tadbirkorlik statistikasi',
		image:
			'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=70&auto=format',
		hours: 36,
	},
	{
		id: 9,
		title: 'Savdo statistikasi',
		image:
			'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&q=70&auto=format',
		hours: 48,
	},
]

const CoursesSection = () => {
	return (
		<section className='relative w-full bg-[#0E121B] flex flex-col items-center justify-center overflow-hidden min-h-screen py-20'>

			{/* Background */}
			<div
				className='absolute inset-0 w-full top-40 h-full bg-no-repeat bg-contain pointer-events-none'
				style={{
					backgroundImage: `url(${vektor2})`,
					backgroundPosition: 'end',
				}}
			/>

			<DustLayer />

			{/* HERO */}
			<div className='relative z-10 text-center px-6 mx-auto max-w-4xl mb-16'>
				<button
					className='mb-6 px-8 py-3 rounded-full text-white text-sm font-medium border border-white/10'
					style={{
						background: 'linear-gradient(270deg, #0E121B 0%, #2B75CC 100%)',
					}}
				>
					Kurslar katalogi
				</button>

				<h1 className='text-white font-bold leading-tight text-[clamp(32px,6vw,60px)] mb-4'>
					Maqsadingizga mos
					<br /> onlayn <span className='text-[#00E6FC]'>kursni tanlang</span>
				</h1>

				<p className='text-[#BCBCBC] text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto'>
					Boshlang‘ichdan professional darajagacha <br />
					bo‘lgan zamonaviy onlayn kurslar
				</p>
			</div>

			{/* GRID */}
			<div className='relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-24 items-center'>
				{courses.map(course => (
					<div
						key={course.id}
						className='group bg-[#161B26] rounded-[22px] p-4 transition-all duration-300 hover:-translate-y-1'
					>
						<div className='aspect-[16/10] mb-4 overflow-hidden rounded-[16px]'>
							<img
								src={course.image}
								alt={course.title}
								loading='lazy'
								className='w-full h-full object-cover'
							/>
						</div>

						<h3 className='text-[#e2e8f0] font-medium text-[15px] leading-tight mb-4'>
							{course.title}
						</h3>

						<div className='flex items-center justify-between'>
							<div className='flex items-center gap-1.5 text-gray-400'>
								<img src={ClockIcon} alt='clock' className='w-4 h-4' />
								<span className='text-sm font-light'>
									{course.hours} soat
								</span>
							</div>

							<div className='text-[#3b82f6] text-xl font-bold'>
								0 UZS
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default CoursesSection