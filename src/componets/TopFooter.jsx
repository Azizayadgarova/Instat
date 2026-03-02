
import bagroundImg from '../assets/Background2.png'
import icon1 from '../assets/icon1.png'


const TopFooter = () => {
	return (
		<section className='bg-[#0E121B] py-24 px-[5%] overflow-hidden'>
			<div className=' mx-auto'>
				<div className='relative w-full bg-[rgba(14,18,27,1)] rounded-[20px] overflow-hidden py-20 px-6 text-center'>
					{/* HeroSection dagi background image */}
					<div
						className='absolute inset-0 bg-cover bg-center '
						style={{ backgroundImage: `url(${bagroundImg})` }}
					/>

				

					{/* Content */}
					<div className='relative z-10'>
						{/* BADGE - IntegratedPlatforms dagi markaziy logo bilan bir xil */}
						<div className='flex justify-center mb-8'>
							<div className='relative flex items-center justify-center'>
								{/* Borderlar - IntegratedPlatforms dagi kabi */}
								<div className='absolute w-[90px] h-[90px] border border-white/40 rounded-2xl'></div>
								<div className='absolute w-[105px] h-[105px] border border-white/20 rounded-2xl'></div>
								<div className='absolute w-[120px] h-[120px] border border-white/10 rounded-2xl'></div>

								{/* Asosiy logo - IntegratedPlatforms dagi gradient va shadow bilan */}
								<div
									className='w-20 h-20 bg-gradient-to-b from-[rgba(56,160,255,1)] to-[rgba(45,61,153,1)] 
                    rounded-2xl flex items-center justify-center 
                    border border-white/30 
                    shadow-[0_0_40px_rgba(59,130,246,0.6)]'
								>
									<img
										src={icon1}
										alt=''
										className='w-12 h-12 object-contain'
									/>
								</div>
							</div>
						</div>

						{/* Title */}
						<h2 className='text-white font-medium leading-[1.1] text-6xl mb-6'>
							Savollaringiz bormi? <br />
							<span className='text-[#00E6FC]'>Biz bilan bog‘laning</span>
						</h2>

						{/* Description */}
						<p className='text-[#BCBCBC] text-[14px] sm:text-[17px] leading-relaxed max-w-[800px] mx-auto mb-12'>
							Kurslar, ro'yxatdan o'tish yoki hamkorlik <br /> bo'yicha savollaringiz
							bo'lsa, biz bilan bog'laning.
						</p>

						{/* FORM - HeroSection dan to'liq moslashtirilgan */}
						<div className='relative group mx-auto max-w-[500px]'>
							{/* Snake Border Effect - HeroSection dagi kabi */}
							<div className='absolute -inset-[1.5px] rounded-2xl overflow-hidden'>
								<div
									className='absolute inset-0 animate-[spin_4s_linear_infinite]'
									style={{
										background:
											'conic-gradient(from 0deg, #00E6FC 0deg 90deg, transparent 90deg 180deg, #00E6FC 180deg 270deg, transparent 270deg 360deg)',
									}}
								/>
							</div>

							<form className='relative flex flex-col sm:flex-row items-center w-full p-1.5 rounded-2xl bg-[rgba(255,255,255,0.06)]	 backdrop-blur-2xl gap-3'>
								<input
									type='email'
									placeholder='Pochtangizni qoldiring'
									className='flex-1 w-full px-4 py-3 bg-transparent text-white placeholder:text-gray-400 text-[15px] outline-none rounded-lg sm:rounded-none'
								/>

								<button
									type='submit'
									className='relative z-10 w-full sm:w-auto px-10 py-3 rounded-[16px]
                    bg-gradient-to-b from-[#3E8BE6] to-[#1C5FB4]
                    text-white font-medium text-[15px]
                    shadow-[0_6px_20px_rgba(43,111,196,0.45)]
                    border border-[#6EA8FF]/40
                    transition-all duration-300
                    hover:brightness-110 hover:scale-[1.02]
                    active:scale-95'
								>
									Yuborish
								</button>
							</form>
						</div>
					</div>

					{/* Background Neon Glow */}
					<div className='absolute -bottom-20 -left-20 w-80 h-80 bg-rgba(14,18,27,1)]/10 blur-[120px] rounded-full'></div>
					<div className='absolute -top-20 -right-20 w-80 h-80 bg-[#00E6FC]/5 blur-[120px] rounded-full'></div>
				</div>
			</div>

			{/* Animation styles - HeroSection dan */}
			<style
				dangerouslySetInnerHTML={{
					__html: `
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `,
				}}
			/>
		</section>
	)
}

export default TopFooter
