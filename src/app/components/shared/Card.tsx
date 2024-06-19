import { POSTER_NO_IMAGE, POSTER_PATH } from "../../constant/constant";

interface CardProps {
    id: number;
    type: string;
    poster_path: string;
}

export default function Card({ id, type, poster_path }: CardProps) {
    return (
        <a href={`/Info/${type}/${id}`} key={id} className="cursor-pointer h-full rounded-sm min-w-36 lg:min-w-56 group">
            <img 
                className="rounded-sm w-full h-full object-cover transition-all duration-200 delay-100 group-hover:grayscale" 
                src={`${poster_path ? `${POSTER_PATH}${poster_path}` : POSTER_NO_IMAGE}`} 
                alt={`Poster for movie ${id}`} 
            />
        </a>
    );
}