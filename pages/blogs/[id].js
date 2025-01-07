import { blogdata } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = blogdata.find((post) => post?.id === parseInt(id))

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>

            <br />
            <Title title={post?.title} className='title-bg' />
            <div className='img py'>
              <img src={post?.cover} alt={post?.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='IT (İnformasiya Texnologiyaları) Konsaltinqinin faydaları müasir biznes mühitində əhəmiyyətli təsir göstərir. Aşağıda IT konsaltinq xidmətlərinin əsas faydalarını təqdim edirəm:' />
              <p className='desc-p'>
                1. Strateji Planlaşdırma və Yönləndirmə :
                IT mütəxəssisləri biznes ehtiyaclarınıza uyğun texnologiya strategiyaları təklif edir.
                Resursların daha effektiv istifadəsi üçün prosesləri optimallaşdırır.</p>
              <p className='desc-p'>2. Maliyetlərin Azaldılması  :
                Daha uyğun və sərfəli texnoloji həllər təklif edərək xərclərinizi optimallaşdırır.
                İT infrastrukturunda lazımsız sistemləri aradan qaldırır. </p>
              <p className='desc-p'>3. Yeniliklərin və Texnoloji Trendlərin Tətbiqi :
                Ən yeni texnologiya həllərini tətbiq edir.
                Rəqabətdə üstünlük əldə etməyinizə kömək edir. </p>

            </div>
          </div>
          <Banner />

          <div className='heading-title'>
            <div className='desc'>
              <TitleSm title=' IT Konsaltinqi vasitəsilə İT Layihələrin Uğurla İdarə Edilməsi' />

              <p className='desc-p'>Müasir bizneslərdə texnologiya layihələrinin effektiv idarə olunmasının yollarını izah edir. IT konsaltinq, mütəxəssislərin və strateji rəhbərlik yanaşmalarının tətbiqi ilə layihələrin müvəffəqiyyətli icrasını təmin edir.Aşağıda bu mövzuya dair əsas məqamlar yer alır: </p>
              <p className='desc-p'>1. Layihə İdarəçiliyində IT Konsaltinqin Rolu
                IT konsaltinq şirkətlərə aşağıdakı yollarla dəstək verir:

                Layihə planlaşdırılması və strukturlaşdırılması: Resursların düzgün bölüşdürülməsi, vaxt cədvəlinin hazırlanması və layihə məqsədlərinin müəyyən edilməsi.
                Risklərin qiymətləndirilməsi və idarə edilməsi: IT konsaltinq, potensial problemləri əvvəlcədən müəyyən edərək layihənin uğursuzluq ehtimalını azaldır.
                Tələb olunan texnologiya və alətlərin seçilməsi: İT layihəsi üçün ən uyğun həllərin və platformaların təklif edilməsi.</p>
              <p className='desc-p'>2. Maliyetlərin Optimallaşdırılması
                IT konsaltinq mütəxəssisləri layihə üçün lazımi xərcləri azaltmağa kömək edir:

                Effektiv resurs istifadəsi: Gərəksiz lisenziyalar və alətlərin istifadəsini azaldır.
                Aylıq və illik büdcə planları: Düzgün büdcələmə texnologiyaya sərf olunan maliyyəni optimallaşdırır.</p>
              <p className='desc-p'>  3. Texniki Ekspertiza və Təlim
                IT konsaltinq xidmətləri vasitəsilə şirkətlər daha təcrübəli mütəxəssislərdən istifadə edərək:

                Ekspert tövsiyələri alır: Bu tövsiyələr ilə doğru qərarlar qəbul edilir.
                Komanda üçün təlimlər təşkil olunur: Layihə komandası yeni texnologiyalarla təchiz edilir.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SinglePost
