import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <Title title='Yeni layihənizə birlikdə başlamaq üçün hazırıq!' /> <br />
          <TitleLogo title='Biznesinizin inkişafında yeni zirvələrə çatdıracağıq!' />
          <a href="/contact" className='button-primary'>Bizə müraciət edin</a>
        </div>
      </section>
    </>
  )
}

export default Banner
