import React from "react"
import { Title } from "./common/Title"
import { brand } from "@/assets/data/dummydata"

const Brand = () => {
  return (
    <>
      <section className='brand'>
        <div className='container'>
          <div className='heading-title'>
            <Title title="Bəzi tərəfdaşlar" />
          </div>
          <div className='brand-content grid-6 py'>
            {brand.map((item) => (
              <div className='images' key={item.id} style={{ textAlign: 'center' }}>
                <img src={item.cover} alt={item.id} width='100px' height='100px' style={{ borderRadius: "50%", objectFit: 'cover' }} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Brand
