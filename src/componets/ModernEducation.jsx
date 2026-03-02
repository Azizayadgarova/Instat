import grow2 from '../assets/Glow.png'
import Image1 from '../assets/Image1.png'
import Image2 from '../assets/Image2.png'
import Image3 from '../assets/Image3.png'
import Image4 from '../assets/Image4.png'


const data = [
	{
		desc2: 'Global mentorlar',
		title: (
			<>
				Global tajribaga ega{' '}
				<span className='bg-[linear-gradient(180deg,#00E6FC_0%,#2B75CC_50%)] bg-clip-text text-transparent'>
					mentorlar
				</span>{' '}
			</>
		),
		desc: 'Dunyoning turli davlatlaridan tajribali mutaxassislar bilan zamonaviy kasblarni real tajriba asosida o‘rganing. Barcha darslar amaliy misollar bilan tushuntiriladi.',
		img: Image1,
	},
	{
		desc2: 'Amaliy bilim va real loyihalar',
		title: (
			<>
				Amaliy va natijaga yo‘naltirilgan{' '}
				<span className='bg-[linear-gradient(180deg,#00E6FC_0%,#2B75CC_50%)] bg-clip-text text-transparent'>
					ta’lim
				</span>
			</>
		),
		desc: 'Har bir kurs real loyihalar va amaliy topshiriqlar asosida tuzilgan. Siz faqat nazariya emas, balki ish jarayonida kerak bo‘ladigan ko‘nikmalarni egallaysiz.',
		img: Image2,
	},
	{
		desc2: 'Moslashuvchan o‘rganish formati',
		title: (
			<>
				Moslashuvchan va qulay{' '}
				<span className='bg-[linear-gradient(180deg,#00E6FC_0%,#2B75CC_50%)] bg-clip-text text-transparent'>
					o‘rganish
				</span>
			</>
		),
		desc: 'Platformadan istalgan vaqtda va istalgan qurilmadan foydalanib o‘qish mumkin. Darslar sizning vaqtingiz va sur’atingizga moslashtirilgan.',
		img: Image3,
	},
	{
		desc2: 'Sertifikat va karyera yo‘li',
		title: (
			<>
				Sertifikat va karyera{' '}
				<span className='bg-[linear-gradient(180deg,#00E6FC_0%,#2B75CC_50%)] bg-clip-text text-transparent'>
					imkoniyati
				</span>
			</>
		),
		desc: 'Kurslarni muvaffaqiyatli yakunlagan talabalar sertifikatga ega bo‘lishadi. Bu esa ishga joylashish va professional rivojlanishda katta imkoniyat yaratadi.',
		img: Image4,
	},
]

const ModernEducation = () => {
	return (
		<section className='relative w-full min-h-screen pb-[8%]  bg-[#0E121B] px-4 md:px-28 overflow-hidden'>
			<div className='max-w-7xl mx-auto flex flex-col gap-32 relative z-10'>
				{data.map((item, i) => {
					const reverse = i % 2 !== 0

					return (
						<div
							key={i}
							className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'
						>
							{/* RASM QISMI */}
							<div
								className={`${reverse ? 'md:order-1' : 'md:order-2'} relative group`}
							>
								{/* 1. KATAKLI FON VA ENERGIYA NURLARI KONTEYNERI */}
								<div className='absolute -top-44 left-1/2 -translate-x-1/2 w-[110%] h-64 pointer-events-none z-0'>
									{/* Kataklar (Grid) */}
									<div
										className='absolute inset-0 opacity-20'
										style={{
											backgroundImage: `
                        linear-gradient(to right, #2B75CC 1px, transparent 1px),
                        linear-gradient(to bottom, #2B75CC 1px, transparent 1px)
                      `,
											backgroundSize: '70px 70px',
											maskImage:
												'linear-gradient(to top, rgba(0,0,0,1) 10%, transparent 80%)',
											WebkitMaskImage:
												'linear-gradient(to top, rgba(0,0,0,1) 10%, transparent 80%)',
										}}
									/>
								</div>
								<div className=' '>
									<img
										className='w-[100%] relative top-[41px]'
										src={grow2}
										alt=''
									/>
								</div>

								{/* ASOSIY IMAGE KARTI */}
								<div className='relative z-10 rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-[#0E121B]'>
									<img
										src={item.img}
										alt='Education'
										className='w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-[1.03]'
									/>
									{/* Tasvir ustidagi soya */}
									<div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none' />
								</div>
							</div>

							{/* MATN QISMI */}
							<div
								className={`${reverse ? 'md:order-2' : 'md:order-1'} relative z-20`}
							>
								<span className='inline-block text-[#00E6FC] text-sm px-4 py-2 bg-[#161B26]/60 backdrop-blur-md rounded-full border border-white/10'>
									{item.desc2}
								</span>
								<h3 className='mt-5 text-white text-[32px] md:text-[45px] font-semibold leading-[1.15]'>
									{item.title}
								</h3>
								<p className='mt-5 text-[#BCBCBC] text-sm md:text-lg font-light leading-relaxed opacity-90'>
									{item.desc}
								</p>
							</div>
						</div>
					)
				})}
			</div>

			{/* CSS ANIMATSIYALARI */}
			<style>{`
        @keyframes float-particle {
          0% {
            transform: translate(-50%, 0) scale(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + var(--dir-x)), var(--dir-y)) scale(1);
            opacity: 0;
          }
        }
        .animate-float-particle {
          animation: float-particle linear infinite;
        }
      `}</style>
		</section>
	)
}

export default ModernEducation
