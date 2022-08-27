import { useState, useEffect } from 'react'
// import Logo from './Logo'

import sneakerspeakerLogo from '../../assets/logo.png'

import {
  MoonIcon,
  SunIcon,
} from '@heroicons/react/outline'
import NavMenus from './NavMenus'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'

const style = {
  wrapper: `bg-[#F1EEE9] w-screen px-[1.2rem] py-[0.8rem] flex`,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-black font-semibold text-2xl hover:text-[#3A3845]`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: `flex items-center justify-end`,
  headerItem: `text-black px-4 font-bold text-[#3A3845] hover:text-black cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-black cursor-pointer`,
}

function Navbar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { systemTheme, theme, setTheme } = useTheme()

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <MoonIcon
          className='h-8 w-8 cursor-pointer text-gray-600 transition-all hover:text-black dark:text-gray-300'
          role='button'
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <SunIcon
          className='h-8 w-8 cursor-pointer text-gray-600 transition-all hover:text-black dark:text-gray-300'
          role='button'
          onClick={() => setTheme('dark')}
        />
      )
    }
  }

  const menus = [
    {
      name: 'Explore',
      href: '/collections',
    },
    {
      name: 'Resources',
      href: '#',
    }
  ]

  return (
    
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image src={sneakerspeakerLogo} height={40} width={40} alt="Logo" />
          <div className={style.logoText}>SNEAKER SPEAKER</div>
        </div>
      </Link>

      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.searchInput}
          placeholder="Search items, collections, and accounts"
        />
      </div>

      <div className={style.headerItems}>
        <Link href="/collections">
          <div className={style.headerItem}> Collections </div>
        </Link>
        <div className={style.headerItem}>
          <NavMenus menus={menus} />
        </div>

        <div className={style.headerIcon}>
          <CgProfile />
        </div>
        <div className={style.headerIcon}>
          <MdOutlineAccountBalanceWallet />
        </div>
        {renderThemeChanger()}
      </div>
    </div>
  )
}

export default Navbar
