import Image from "next/image"
import {ThumbUpIcon} from '@heroicons/react/outline'
import { forwardRef } from "react"
import Link from 'next/link'

const Thumbnail = forwardRef(({result}, ref) => {
    const BASE_URL = `https://image.tmdb.org/t/p/original`;
    return (
        <Link href={`/title/${result.id}`} passHref={true} >
        <div ref={ref} className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image alt={`image-${result.id}`} className="rounded-3xl" layout="responsive" src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`} height={1080} width={1920} />
            <div className="p-2">
                <p className="truncate max-w-md">{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_title}</h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.adult ? 'All' : 'Adult'}{" "}
                    {result.release_date}{" "}
                    <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
                </p>
            </div>
        </div>
        </Link>
    )
})

Thumbnail.displayName = 'Thumbnail';

export default Thumbnail
