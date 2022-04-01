import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Link href={`/posts/${slug}`}>
      <a> 
        <div className="mb-8 md:mb-2 relative">
          
          <CoverImage title={title} url={coverImage} slug={slug} />
          
          <div className="relative p-3 lg:left-10 md:-top-40  bg-white md:max-w-xl  sm:max-w-md sm:top-0 sm:left-auto sm:right-auto">
            <h3 className="mb-4 text-3xl lg:text-5xl leading-tight">
              
              <a className="hover:underline font-bold tracking-tighter leading-tight">{title}
                <div className="mb-4 mt-4 md:mb-0 text-md text-sm tracking-tighter leading-tight">
                    <Date dateString={date} />
                </div>
              </a>
            </h3>
            <p className="text-xl leading-relaxed mb-4">{excerpt}</p>
            
          </div>

        </div>  
      </a>
    </Link>
  )
}
