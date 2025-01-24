import React from "react"
import { Card } from "./common/Card"
import { blogdata } from "@/assets/data/dummydata"
import Link from "next/link"
import { TitleSm } from "./common/Title"

const BlogCard = () => {
  return (
    <>
      <div className='container blog-card grid-2 py'>
        {blogdata.map((item) => (
          <div className='card' key={item.id}>
            <div className='card-img'>
              <img src={item.cover} alt={item.title} />
            </div>
            <div className='card-details'>
              <Link href={`/blogs/${item.slug}`} className='title-link'>
                <TitleSm title={item.title} />
              </Link>
              <div className='flex'>
                <span> {item.category} </span> {item.date && <span> / {item.date}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default BlogCard
