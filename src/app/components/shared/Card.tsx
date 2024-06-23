import Link from "next/link";
import { POSTER_NO_IMAGE, POSTER_PATH } from "../../constant/constant";

interface CardProps {
    id: number;
    type: string;
    poster_path: string;
}

export default function Card({ id, type, poster_path }: CardProps) {
    return (
        <Link href={`/Info/${type}/${id}`} key={id} className="cursor-pointer h-56 lg:h-96 rounded-sm min-w-36 lg:min-w-56 group">
            <img 
                className="rounded-sm w-full h-full object-cover transition-all duration-200 delay-100 group-hover:grayscale" 
                src={`${poster_path ? `${POSTER_PATH}${poster_path}` : POSTER_NO_IMAGE}`} 
                alt={`Poster for movie ${id}`} 
            />
        </Link>
    );
}
