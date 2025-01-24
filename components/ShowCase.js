import { showcase } from "@/assets/data/dummydata"
import Link from "next/link"
import { Title, TitleSm } from "./common/Title"

const ShowCase = () => {
  return (
    <>
      <section className='showcase'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Maraqlı nüanslar' />
          </div>
          <div className='hero-content grid-3 py'>
            {showcase.map((item) => (
              <div className='card' key={item.id}>
                <div className='card-img'>
                  <img src={item.cover} alt={item.title} />
                </div>
                <div className='card-details'>
                  <Link href={`/showcase/${item.slug}`} className='title-link'>
                    <TitleSm title={item.title} />
                  </Link>
                  <div className='flex'>
                    <span> {item.catgeory} </span> {item.date && <span> / {item.date}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='card links'>

          </div>
        </div>
      </section>
    </>
  )
}

export default ShowCase
