// src/router.jsx
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'

const OnlineEducation = lazy(() => import('./pages/OnlineEducation'))
const RaqamliKutubxona = lazy(() => import('./pages/RaqamliKutubxona'))
const MikroMalumotlar = lazy(() => import('./pages/MikroMalumotlar'))
const ElektronJurnal = lazy(() => import('./pages/ElektronJurnal'))

const Loader = () => (
	<div className='fixed inset-0 flex items-center justify-center bg-[#0E121B]'>
		<div className='w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin' />
	</div>
)

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />, // ⚡ Suspense faqat lazy sahifalar uchun
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<OnlineEducation />
					</Suspense>
				),
			},
			{
				path: 'raqamli-kutubxona',
				element: (
					<Suspense fallback={<Loader />}>
						<RaqamliKutubxona />
					</Suspense>
				),
			},
			{
				path: 'mikro-malumotlar',
				element: (
					<Suspense fallback={<Loader />}>
						<MikroMalumotlar />
					</Suspense>
				),
			},
			{
				path: 'elektron-jurnal',
				element: (
					<Suspense fallback={<Loader />}>
						<ElektronJurnal />
					</Suspense>
				),
			},
			{
				path: '*',
				element: <div style={{ padding: 40 }}>404 - Sahifa topilmadi</div>,
			},
		],
	},
])
