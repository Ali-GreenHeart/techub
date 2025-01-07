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
            <Title title='Bizim təcrübəmiz ' />
            <p>Peşəkar komandamızla veb dizayn, veb sayt hazırlanması, İT xidmətləri, mobil tətbiqlər
               və konsultasiya sahəsində yüksək keyfiyyətli həllər təqdim edirik. Müasir texnologiyalar
                və yenilikçi yanaşmamızla biznesinizi inkişaf etdirməyə dəstək oluruq. Sizin üçün unikal və 
                effektiv həllər yaradırıq!</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='Ətraflı' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
