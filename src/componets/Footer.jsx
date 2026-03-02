import lobus from '../assets/globus.svg'
import icon1 from '../assets/icon1.png'
import istat from '../assets/instant.png'
import fotIcon1 from '../assets/fotIcon1.png'
import fotIcon2 from '../assets/fotIcon2.png'
import fotIcon3 from '../assets/fotIcon3.png'


const Footer = () => {
	return (
		<footer className='bg-[#0E121B] text-[#9ca3af] relative overflow-hidden  pb-10 px-8 md:px-24'>
			
			{/* TOP SECTION */}
			<div className='max-w-7xl	 mx-auto flex justify-between sm:grid-cols-4 md:grid-cols-4  relative z-20'>
				
				{/* LOGO */}
				<div className='flex flex-col gap-2'>
					<div className='flex items-center gap-3'>
						<img src={icon1} alt='Logo' className='h-10 w-auto' />
						<span className='text-white font-bold text-lg tracking-wide uppercase'>
							INSTAT
						</span>
					</div>
					<p className='text-[13px] leading-relaxed max-w-[240px] opacity-80'>
						Kadrlar malakasini oshirish va statistik tadqiqotlar instituti
					</p>
				</div>

				{/* SAYTLAR */}
				<div>
					<h4 className='text-white font-semibold mb-6	 text-sm'>Saytlar</h4>
					<ul className='space-y-3 text-[14px]'>
						<li className='hover:text-white transition'>Raqamli kutubxona</li>
						<li className='hover:text-white transition'>Onlayn kurslar</li>
						<li className='hover:text-white transition'>Mikro ma'lumotlar</li>
						<li className='hover:text-white transition'>Elektron jurnal</li>
					</ul>
				</div>

				{/* SUPPORT */}
				<div>
					<h4 className='text-white font-semibold mb-6 text-sm'>
						Qo'llab quvvatlash
					</h4>
					<ul className='space-y-3 text-[14px]'>
						<li className='hover:text-white transition'>FAQ</li>
						<li className='hover:text-white transition'>Biz bilan bog'lanish</li>
					</ul>
				</div>

				{/* LEGAL */}
				<div>
					<h4 className='text-white font-semibold mb-6 text-sm'>Huquqiy</h4>
					<ul className='space-y-3 text-[14px]'>
						<li className='hover:text-white transition'>Maxfiylik siyosati</li>
						<li className='hover:text-white transition'>Xizmat shartlari</li>
						<li className='hover:text-white transition'>Cookie siyosati</li>
					</ul>
				</div>
			</div>

			{/* BACKGROUND CENTER SECTION */}
			<div className='relative  flex justify-center items-end min-h-[200px] md:min-h-[520px]'>
				
				{/* GLOBUS */}
				<img
					src={lobus}
					alt='Globus'
					className='absolute w-[90%] max-w-[900px]  bottom-2'
				/>

				{/* BIG INSTAT TEXT IMAGE (pastga kirib turadi) */}
				<img
					src={istat}
					alt='INSTAT'
					className='absolute w-[100%] md:w-[90%]   -bottom-12 md:-bottom-10'
				/>
			</div>

			{/* BOTTOM SECTION */}
			<div className='max-w-7xl mx-auto border-t bg-[#0E121B] border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-20'>
				
				<p className='text-[13px] text-[rgba(255,255,255,1)] text-center md:text-left'>
					© Instat Inc. Barcha huquqlar himoyalangan.
				</p>

				{/* SOCIAL */}
				<div className='flex gap-3'>
					{[fotIcon1, fotIcon3, fotIcon2].map((icon, i) => (
						<div
							key={i}
							className='w-10 h-10 bg-[#0E121B] rounded-xl flex items-center justify-center border-none hover:opacity-80 transition'
							style={{
								background:
									'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)',
							}}
						>
						<img src={icon} alt={`icon-${i}`} className='w-5 h-5' />
						</div>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer