import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Haqqımızda' /> <br />
            <br />
            <TitleSm title='Yaradıcılıq, strategiya və texnologiyanın mükəmməl harmoniyası!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='2014-cü ildən texnologiyada fərq yaratmış təcrübəli tərəfdaşınız!' />
              <p className='desc-p'>Biz, müştərilərimizin biznesini onlayn mühitdə irəli aparmaq üçün ixtisaslaşmış 10 ildən artıq təcrübəyə sahib bir xidmət şirkətiyik. Veb dizayn, müasir və funksional saytların hazırlanması, inkişaf etdirilməsi (development), İT xidmətləri, mobil tətbiqlərin yaradılması və biznes konsultasiya sahəsində fərqlənirik. Peşəkar komandamız hər bir layihəni unikal yanaşma ilə həyata keçirir, müştərilərimizin məqsədlərinə ən optimal həllər təqdim edirik. Bizimlə çalışaraq, rəqəmsal dünyada uğurlarınıza daha da yaxınlaşa bilərsiniz!</p>
              <Title title="Uğur üçün birgə addımlayaq!" />
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Təcrübə</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Bitmiş layihə</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Komanda üzvü</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Bizim missiyamız' />
              <br />
              <p className='misson-p'>Bizim missiyamız müştərilərimizin rəqəmsal dünyada həqiqi uğurlar əldə etmələrini təmin etməkdir. Peşəkar komandamız hər bir layihəyə özəlliklə yanaşır və innovativ, yüksək keyfiyyətli həllərlə biznesinizi inkişaf etdirir. Bizimlə çalışaraq, sadəcə xidmətlərdən istifadə etmirsiniz, həm də gələcəyin texnologiyalarına uyğun addımlar atırsınız. Sizin uğurunuz bizim ilham mənbəyimizdir və biz hər zaman sizin yanınızdayıq, rəqəmsal dünyada daha güclü mövqe tutmağınız üçün dəstək olmağa hazırıq!</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
