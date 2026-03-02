import appstore from '../assets/appstore.png'
import google from '../assets/googleplay.png'
import phone1 from '../assets/iPhone1.svg'
import phone2 from '../assets/iPhone2.png'

const AppPromoSection = () => {
	return (
		<section className='w-full bg-[#0E121B] py-[200px] flex justify-center'>
			<div className='relative w-[90%] mx-[5%]'>
				{/* CARD */}
				<div
					className='relative bg-[#161B26] rounded-3xl 
					px-[130px] py-[120px] overflow-visible'
				>
					{/* LEFT */}
					<div className='flex flex-col max-w-[45%] z-10'>
						<h3 className='font-bold text-white text-[clamp(28px,4vw,48px)] leading-tight'>
							Mobil ilova bilan <br /> yanada qulayroq!
						</h3>

						<p className='text-gray-300 mt-6 text-[clamp(14px,1.2vw,18px)]'>
							Bizning mobil ilovamiz bilan bilim olish yanada oson. <br />
							Hoziroq ilovamizni yuklab oling!
						</p>

						<div className='flex gap-6 mt-10'>
							<img src={google} alt='Google Play' className='h-[48px] w-auto' />
							<img src={appstore} alt='App Store' className='h-[48px] w-auto' />
						</div>
					</div>

					{/* PHONES (OUTSIDE CARD) */}
					<div className='absolute right-[110px] top-[320px] -translate-y-1/2 w-[500px] h-[500px]'>
						{/* Back phone */}
						<img
							src={phone1}
							alt='Phone back'
							className='absolute right-0 bottom-0 w-[310px] top-[-36px]  z-10'
						/>

						{/* Front phone */}
						<img
							src={phone2}
							alt='Phone front'
							className='absolute right-[210px] bottom-0 top-[-123px] w-[380px] z-20'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AppPromoSection
