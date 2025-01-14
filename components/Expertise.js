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
            <Title title='Expertise' />
            <p>We offer expert solutions in web development, mobile apps, ERP/CRM systems, SEO, and UX/UI design to elevate your digital presence. Our team works closely with you to create customized strategies that drive results and ensure long-term business success.</p>
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
