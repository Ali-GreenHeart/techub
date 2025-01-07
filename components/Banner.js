import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='Yeni layihənizə birlikdə başlamaq üçün hazırıq!' /> <br />
            <TitleLogo title='Biznesinizin inkişafında yeni zirvələrə çatdıracağıq!' />
          </div>
          <div>
            <button className='button-primary'>Bizə müraciət edin</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
