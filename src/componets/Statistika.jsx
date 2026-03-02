import Kurslar from '../assets/Kurslar.png'
const Statistika = () => {
	return (
		<div className='flex  flex-col  justify-center items-center'>
			<div className=' w-full max-w-[1400px]  h-[945px]'>
				<img src={Kurslar} alt='kurlar rasmi' />
			</div>
			<div className=' bg-[rgba(14,18,27,1)]  w-full flex justify-center '>
				<div
					className='
          bg-[rgba(14,18,27,1)]           
          rounded-2xl
          border border-[rgba(18,14,27,0.2)]
          backdrop-blur-lg                 
          grid
          grid-cols-2
          md:grid-cols-4
          overflow-hidden
          
        '
				>
					{[
						{ number: '200M+', text: 'Platformadagi faollik' },
						{ number: '45 000+', text: "O'quvchilar soni" },
						{ number: '120+', text: 'Mavjud kurslar' },
						{ number: '8 500+', text: 'Muvaffaqiyatli bitiruvchilar' },
					].map((item, i) => (
						<div
							key={i}
							className='
              relative
              flex flex-col
              items-center
              justify-center
              py-5 px-4
              border-b md:border-b-0
              md:border-r
              border-black
              last:border-r-0
              group
            '
						>
							{/* TOP LEFT NEON */}
							<div
								className='absolute top-0 left-0 w-1/6 h-[1px]
              bg-gradient-to-r from-[#2B75CC] via-[#2B75CC]/70 to-black'
							/>

							{/* TOP RIGHT NEON */}
							<div
								className='absolute top-0 right-0 w-1/6 h-[1px]
              bg-gradient-to-l from-[#2B75CC] via-[#2B75CC]/70 to-black'
							/>

							{/* BOTTOM LEFT NEON */}
							<div
								className='absolute bottom-0 left-0 w-1/6 h-[1px]
              bg-gradient-to-r from-[#2B75CC] via-[#2B75CC]/70 to-black'
							/>

							{/* BOTTOM RIGHT NEON */}
							<div
								className='absolute bottom-0 right-0 w-1/6 h-[1px]
              bg-gradient-to-l from-[#2B75CC] via-[#2B75CC]/70 to-black'
							/>

							{/* VERTICAL GLOW */}
							{i !== 3 && (
								<>
									<div
										className='hidden md:block absolute top-0 right-[-1px] w-[1px] h-5
                  bg-gradient-to-b from-[#2B75CC] via-[#2B75CC]/60 to-transparent
                  shadow-[0_0_12px_rgba(43,117,204,0.9)]'
									/>
									<div
										className='hidden md:block absolute bottom-0 right-[-1px] w-[1px] h-6
                  bg-gradient-to-t from-[#2B75CC] via-[#2B75CC]/60 to-transparent
                  shadow-[0_0_12px_rgba(43,117,204,0.9)]'
									/>
								</>
							)}

							{/* NUMBER */}
							<h2
								className='text-5xl md:text-4xl font-medium text-white mb-3 tracking-tight 
              group-hover:text-[#2B75CC] transition duration-300'
							>
								{item.number}
							</h2>

							{/* TEXT */}
							<p className='text-white text-sm text-center font-medium'>
								{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Statistika
