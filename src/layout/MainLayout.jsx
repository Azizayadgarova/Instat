import { Outlet } from 'react-router-dom'
import Navbar from '../componets/Navbar'

import ScrollRestorer from '../componets/SkrollRestorer'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[rgba(14,18,27,1)]">
      <Navbar/>
<ScrollRestorer/>
      <main id="main-content" className="pt-[100px]">
        <Outlet/>
      </main>
      
    </div>
  )
}