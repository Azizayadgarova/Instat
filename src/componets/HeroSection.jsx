import React, { memo } from 'react'
import star from '../assets/Star.svg'
import backgroundImg from '../assets/Vektor.svg'


const HeroSection = () => {
	return (
		<section className='relative w-full min-h-screen bg-[rgba(14,18,27,1)] overflow-hidden pt-[90px]'>
			{/* LCP BACKGROUND IMAGE (REAL FIX) */}
			<img
				src={backgroundImg}
				alt='Background vector pattern'
				width={1920} // real rasm o‘lchamiga yaqin
				height={1080}
				fetchPriority='high'
				loading='eager'
				decoding='async'
				className='absolute inset-0 w-full h-full object-cover object-center -z-0'
			/>
			{/* Overlay */}
			<div className='absolute inset-0 bg-[#0E121B]/60 backdrop-blur-[1px] -z-0' />

			{/* CONTENT */}
			<div className='relative z-10 min-h-[calc(100vh-90px)] flex items-center justify-center px-4 sm:px-6 lg:px-12'>
				<div className='w-full max-w-[1100px] flex flex-col items-center text-center gap-5 sm:gap-6'>
					{/* Badge */}
					<div className='p-[1px] rounded-full bg-gradient-to-r from-[#2B75CC] to-[#0E121B]'>
						<div className='flex gap-2 sm:gap-3 justify-center items-center bg-gradient-to-r from-[#2B75CC] to-[#0E121B] border border-[#2B75CC] py-1.5 sm:py-2 px-4 sm:px-6 rounded-full'>
							<img
								src={star}
								alt='Milliy statistika qo‘mitasi belgisi'
								width={20}
								height={20}
								loading='lazy'
								decoding='async'
								className='w-4 sm:w-5'
							/>
							<p className='text-white text-[12px] sm:text-[14px] whitespace-nowrap'>
								O’zbekiston respublikasi milliy statistika qo’mitasi
							</p>
						</div>
					</div>

					{/* Title */}
					<h1
						className='text-white font-semibold leading-[1.1] 
            text-[clamp(26px,6vw,72px)]'
					>
						Raqamlar gapiradi — biz <br />
						<span className='text-[#00E6FC]'>tahlil qilamiz!</span>
					</h1>

					{/* Description */}
					<p className='text-[#BCBCBC] text-[13px] sm:text-[16px] leading-relaxed max-w-[850px]'>
						Aniq statistika, chuqur tahlil va ishonchli ma’lumotlar orqali
						to‘g‘ri qarorlar qabul qilishingizga yordam beramiz.
					</p>

					{/* FORM */}
					<div className='relative group mt-3 sm:mt-5 w-full max-w-[520px]'>
						{/* Glow border */}
						<div className='absolute -inset-[1.5px] rounded-2xl overflow-hidden'>
							<div
								className='absolute inset-0 animate-[spin_6s_linear_infinite]'
								style={{
									background:
										'conic-gradient(from 0deg, #00E6FC 0deg 90deg, transparent 90deg 180deg, #00E6FC 180deg 270deg, transparent 270deg 360deg)',
								}}
							/>
						</div>

						<form className='relative flex flex-col sm:flex-row items-center w-full p-1.5 rounded-2xl bg-white/10 backdrop-blur-xl gap-2'>
							<input
								type='email'
								placeholder='Pochtangizni qoldiring'
								className='flex-1 w-full px-4 py-3 bg-transparent text-white placeholder:text-gray-400 text-[14px] outline-none rounded-xl sm:rounded-none'
							/>

							<button
								type='submit'
								className='relative z-10 w-full sm:w-auto px-8 sm:px-10 py-3 rounded-xl
                bg-gradient-to-b from-[#3E8BE6] to-[#1C5FB4]
                text-white font-medium text-[14px]
                shadow-[0_6px_20px_rgba(43,111,196,0.45)]
                border border-[#6EA8FF]/40
                transition-all duration-300
                hover:brightness-110 hover:scale-[1.03]
                active:scale-[0.96]'
							>
								Yuborish
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default memo(HeroSection)
