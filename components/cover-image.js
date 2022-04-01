import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={"https:"+url}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  const lnk = "posts/"+slug
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={lnk}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
