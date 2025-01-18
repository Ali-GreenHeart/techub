import { showcase } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import { Title } from "./common/Title"

const ShowCase = () => {
  return (
    <>
      <section className='showcase'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Həll edilmişlər ✔' />
          </div>
          <div className='hero-content grid-3 py'>
            {showcase.map((item) => (
              <Card path="cases" data={item} key={item.id} />
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
