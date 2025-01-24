import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { RiMenu4Line } from "react-icons/ri"
import DarkMode from "./DarkMode"

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState("light") // Add theme state

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])

  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/' className="logo-link-logo">
              <img style={{ width: 100 }} src={`/images/logo-${theme}.svg`} alt="techub logo" /> {/* Update logo based on theme */}
            </Link>
          </div>
          <nav className={open ? `openMenu openMenu-${theme}` : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              Ana səhifə
            </Link>
            <Link href='/agency' className={activeLink == "/agency" ? "activeLink" : "none"}>
              Haqqımızda
            </Link>
            {/* <Link href='/team' className={activeLink == "/team" ? "activeLink" : "none"}>
              Komanda
            </Link> */}
            <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>
              Xidmətlər
            </Link>
            <Link href='/showcase' className={activeLink == "/showcase" ? "activeLink" : "none"}>
              Nüanslar
            </Link>
            <Link href='/blogs' className={activeLink == "/blogs" ? "activeLink" : "none"}>
              Bloq
            </Link>
            <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>
              Əlaqə
            </Link>
          </nav>
          <div className="header-right-burger-darkmode">
            <DarkMode theme={theme} setTheme={setTheme} /> {/* Pass theme and setTheme as props */}
            <button className="burger-menu-button" onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
