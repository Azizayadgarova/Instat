import backgraund from '../assets/Background.png'
import DustLayer from '../effect/DustLayer'

const Education = () => {
	return (
		<div className='relative min-h-[550px] w-full bg-[rgba(14,18,27,1)] flex items-center justify-center overflow-hidden font-sans selection:bg-cyan-500/30'>
			<div
				className='absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40'
				style={{ backgroundImage: `url(${backgraund})` }}
			/>

			<DustLayer />

			<div className='absolute -top-32 left-1/3 w-[700px] h-[450px] bg-blue-500/10 blur-[80px] rounded-full z-[2]' />

			<div className='relative z-10 text-center px-6 mx-auto'>
				<button
					className='mb-4 px-6 py-2 rounded-full text-white text-sm font-medium border border-white/20 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_20px_rgba(43,117,204,0.6)] hover:scale-105'
					style={{
						background: 'linear-gradient(270deg, #0E121B 0%, #2B75CC 100%)',
					}}
				>
					Platforma haqida
				</button>

				<h6 className='text-white font-medium leading-[1.1] text-[clamp(28px,6vw,74px)]'>
					Zamonaviy ta’lim.
					<br />
					<span className='text-[#00E6FC]'>Global imkoniyatlar!</span>
				</h6>

				<p className='mt-6 text-[#BCBCBC] text-[14px] md:text-xl font-light leading-relaxed max-w-2xl mx-auto'>
					Bizning platforma orqali siz IT va zamonaviy kasblarni
					<br className='hidden md:block' />
					mahalliy va xorijiy mutaxassislar bilan onlayn o'rganasiz.
				</p>
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
				.dust {
					animation: dustFloat linear infinite;
				}
			`}</style>
		</div>
	)
}

export default Education

