import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Peşəkar Yanaşmalar' />
            <p>Biz təqdim etdiyimiz sahələrdə peşəkarıq, peşəkar olduğumuz sahələri də təqdim edirik. Komandamız sizinlə sıx əməkdaşlıq edərək, mükəmməl nəticələr əldə edən və uzunmüddətli biznes uğuru təmin edən özəl strategiyalar yaradır.</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
