import Link from "next/link"
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>

              <span>
                Sualınız var ? Əlaqə saxlayın : <br /> Həftə içi (I-V) : 09:00 - 20:00 <br /> Həftə sonu : 11:00 - 18:00
              </span>
              <br />
              <br />
              <h3>+994 70 336 23 22</h3>
              <br />
              <button className='button-primary'>Qiymət təklifi al</button>
            </div>
            <ul>
              <h3>Şirkət</h3>
              <li>
                <Link href='/agency'>Haqqımızda</Link>
              </li>
              {/* <li>
                <Link href='/'>Komanda</Link>
              </li> */}
              <li>
                <Link href='/showcase'>Faktlar</Link>
              </li>
              <li>
                <Link href='/blogs'>Bloq</Link>
              </li>
              {/* <li>
                <Link href='/'>Demo design system</Link>
              </li> */}
              <li>
                <Link href='/contact'>Əlaqə</Link>
              </li>
            </ul>
            <ul>
              <h3>Xidmətlər</h3>
              <li>
                <Link href='/'>Veb sayt & Mobil tətbiq</Link>
              </li>
              <li>
                <Link href='/'>İT xidmət & SEO</Link>
              </li>
              <li>
                <Link href='/'>UX/UI</Link>
              </li>
              <li>
                <Link href='/'>Konsultasiya</Link>
              </li>
            </ul>
            <ul>
              <h3>Sosial şəbəkələrdə izləyin</h3>
              <div className='connect'>
                <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.instagram.com/techubaz/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2025 Techub Company</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
