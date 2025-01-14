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
            <TitleSm title='Veb saytlar' /> <span>.</span>
            <TitleSm title='Mobil tətbiqlər' /> <span>.</span>
            <TitleSm title='İT xidmətləri' /><span>.</span>
            <TitleSm title='Konsultasiya' /><span>.</span>
            <TitleSm title='UX/UI xidmətləri' /><span>.</span>
            <TitleSm title='SEO' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The last digital agency you will ever need' />
            <p>We are the last digital agency you'll ever need, offering innovative solutions tailored to your unique business needs. Our team of experts combines cutting-edge technology with creative strategies to deliver exceptional results.</p>
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
        <Title title='Last news and blogs' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
