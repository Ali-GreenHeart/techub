import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <h1 className='hero-title'>Rəqəmsal gələcəyinizi bizimlə qurun</h1>

          <div className='sub-heading'>
            <TitleSm title='Veb proqram təminatı' /> <span>.</span>
            <TitleSm title='Mobil tətbiqlər' /> <span>.</span>
            <TitleSm title='İT xidmətləri' /><span>.</span>
            <TitleSm title='UX/UI dizayn' /><span>.</span>
            <TitleSm title='AI həllər' /><span>.</span>
            <TitleSm title='PM xidmət' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Ən son rəqəmsal agentlik' />
            <p>Biz ən son rəqəmsal agentliyik, biznesinizin unikal tələblərinə uyğun innovativ həllər təklif edirik. Mütəxəssislərdən ibarət komandamız, qabaqcıl texnologiyanı və yaradıcı strategiyaları birləşdirərək mükəmməl nəticələr təqdim edir.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Son xəbərlər və bloglar' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
