import { Title, TitleSm } from "@/components/common/Title"
import Link from "next/link"
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones } from "react-icons/fi"

const Contact = () => {
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='BİZİMLƏ ƏLAQƏ' /> <br />
            <br />
            <Title title="Gəlin, uğura doğru ilk addımı elə indi ataq!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>+994 70 336 23 22</h3>
                  <span>Əlaqə saxlayın :<br />
                    Həftə içi (I-V) : 09:00 - 20:00<br />
                    Həftə sonu : 11:00 - 18:00</span>
                </div>
                <div className='box'>
                  {/* <IoLocationOutline size={30} className='icons' />
                  <h3>New York</h3>
                  <span>990 Madison Ave, Midtown Manhattan, 2th Floor, NY 10022</span> */}
                </div>
                <div className='box'>
                  {/* <FiHelpCircle size={30} className='icons' />
                  <h3>info@dream-theme.com</h3>
                  <span>Drop us a line anytime!</span> */}
                </div>
                <div className='box'>
                  {/* <BiUserCircle size={30} className='icons' />
                  <h3>hr@dream-theme.com</h3>
                  <span>Career at TecHub</span> */}
                </div>
              </div>
              <ul>
                <Link href='/'>
                  <BsFacebook size={25} />
                </Link>
                <Link href='https://www.instagram.com/techubaz/'>
                  <AiFillInstagram size={25} />
                </Link>
                <Link href='/'>
                  <AiFillLinkedin size={25} />
                </Link>
              </ul>
            </div>
            <div className='right w-70'>
              <p className='desc-p'>Sualınız var? İdeyanız var? Təklifimizi almaq üçün aşağıdakı formu doldurun.</p>

              <form>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Ad və Soyad*</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Əlaqə nömrəsi</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>İstiqamət*</span>
                    <select>
                      <option value="">Web development</option>
                      <option value="">Mobil tətbiqlər</option>
                      <option value="">İT xidmətləri</option>
                      <option value="">Konsultasiya</option>
                      <option value="">UX/UI xidmətləri</option>
                      <option value="">SEO</option>
                    </select>
                  </div>
                </div>
                <div className='inputs'>
                  <span>Proyekt haqqında qısa məlumat*</span>
                  <textarea cols='30' rows='10'></textarea>
                </div>
                <button className='button-primary'>Göndər</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
