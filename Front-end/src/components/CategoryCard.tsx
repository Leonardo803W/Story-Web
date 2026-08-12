import { Link } from "react-router-dom";

type Props = {
    id: number;
    title: string;
    text: string;
    img: string;
};

export function CategoryCard({ id, title, text, img }: Props) {
    return (
        <Link  
            className="carousel_card"
            to={`/storie/${id}`}
            key={id}
        >
            <img src = {img}></img>
            <h3>{title}</h3>
            <p>{text}</p>
        </Link>
    );
}