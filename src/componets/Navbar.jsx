import { memo, useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from '../assets/img.svg'
import menuIcon from '../assets/menyu.svg'

export const NAV_ITEMS = [
  { to: '/', label: 'Onlayn ta’lim' },
  { to: '/raqamli-kutubxona', label: 'Raqamli kutubxona' },
  { to: '/mikro-malumotlar', label: 'Mikro ma’lumotlar' },
  { to: '/elektron-jurnal', label: 'Elektron jurnal' },
]

const DesktopNavItem = memo(({ to, label }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "relative text-cyan-400 after:content-[''] after:absolute after:left-0 after:-bottom-[3px] after:w-full after:h-[2px] after:bg-cyan-400 after:rounded-full after:shadow-[0_0_10px_rgba(34,211,238,0.9)]"
          : 'text-white hover:text-cyan-300 transition-colors duration-300'
      }
    >
      {label}
    </NavLink>
  </li>
))
DesktopNavItem.displayName = 'DesktopNavItem'

const MobileNavItem = memo(({ to, label, onClick }) => (
  <li onClick={onClick}>
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'text-cyan-400 font-semibold'
          : 'text-white hover:text-cyan-300 transition-colors duration-300'
      }
    >
      {label}
    </NavLink>
  </li>
))
MobileNavItem.displayName = 'MobileNavItem'

const Hamburger = memo(({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="xl:hidden flex items-center justify-center w-[40px] h-[40px] rounded-[10px] bg-gradient-to-b from-[#3E8BE6] to-[#2B6FC4] border border-[#5FA2F0] transition-all duration-300 hover:scale-[1.05] active:scale-[0.95]"
    aria-label="Menyuni ochish"
  >
    <img 
      src={menuIcon} 
      alt="Menu ochish" 
      width={20} 
      height={20} 
      loading="lazy" 
      decoding="async" 
    />
  </button>
))
Hamburger.displayName = 'Hamburger'

const CloseButton = memo(({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute top-6 right-6 text-white text-2xl"
    aria-label="Menyuni yopish"
  >
    ✕
  </button>
))
CloseButton.displayName = 'CloseButton'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isOpen ? 'hidden' : ''
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = ''
      }
    }
  }, [isOpen])

  return (
    <>
      <nav className="bg-[rgba(14,18,27,1)] backdrop-blur-[40px] w-full z-50 fixed top-0 left-0">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 xl:px-16 py-4 lg:py-6">
          {/* Logo */}
          <div className="h-[40px] flex-shrink-0">
            <img
              src={logoImg}
              alt="Instat logo"
              width={160}
              height={40}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="h-full w-auto"
            />
          </div>

          {/* Desktop menu */}
          <div className="flex-1 hidden xl:flex justify-center">
            <div className="relative rounded-full p-[1px] bg-gradient-to-b from-white/50 via-white/25 to-transparent">
              <div className="flex items-center px-8 py-3 rounded-full bg-[rgba(14,18,27,1)] backdrop-blur-[10px]">
                <ul className="flex gap-6 2xl:gap-8 text-[14px] 2xl:text-[15px] font-medium text-white">
                  {NAV_ITEMS.map(item => (
                    <DesktopNavItem key={item.to} {...item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3 text-white flex-shrink-0">
            <button
              type="button"
              className="hidden lg:block text-[14px] font-medium hover:text-cyan-300 transition"
            >
              Tizimga kirish
            </button>

            <div className="hidden lg:block h-[22px] w-[1px] bg-white/40" />

            <button
              type="button"
              className="hidden xl:flex items-center gap-3 px-4 py-2 rounded-[10px] bg-gradient-to-b from-[#3E8BE6] to-[#2B6FC4] border border-[#5FA2F0] text-white font-semibold text-[14px] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(62,139,230,0.8)] active:scale-[0.98]"
            >
              <img 
                src={menuIcon} 
                alt="Menu ochish" 
                width={20} 
                height={20} 
                loading="lazy" 
                decoding="async" 
              />
              Menu
            </button>

            <Hamburger onClick={toggleMenu} />
          </div>
        </div>
      </nav>

      {/* Sidebar menu */}
      <div
        className={`fixed top-0 right-0 w-64 sm:w-72 h-screen bg-[rgba(14,18,27,0.98)] backdrop-blur-[30px] shadow-xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        } z-40 flex flex-col justify-center items-center`}
      >
        <CloseButton onClick={closeMenu} />

        <ul className="flex flex-col gap-10 text-white text-[18px] font-medium text-center">
          {NAV_ITEMS.map(item => (
            <MobileNavItem key={item.to} {...item} onClick={closeMenu} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default memo(Navbar)
