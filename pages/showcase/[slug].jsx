import { showcase } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"

const SingleShowCase = () => {
    const router = useRouter()
    const { slug } = router.query
    const post = showcase.find((post) => post?.slug === slug)

    if (!post) {
        return <div>Loading...</div> // Add a loading state or a fallback
    }


    return (
        <>
            <Head>
                <title>{post?.title}</title>
            </Head>
            <section className='post-details bg-top'>
                <div className='container'>
                    <div className='heading-title'>

                        <br />
                        <Title title={post?.title} className='title-bg' />
                        <div className='img py'>
                            <img src={post?.cover} alt={post?.title} width='100%' height='100%' className='round' />
                        </div>
                        <div className='desc'>
                            <p className='desc-p'>{post.description}</p>
                        </div>
                    </div>
                    <Banner />
                </div>
            </section>
        </>
    )
}

export default SingleShowCase
