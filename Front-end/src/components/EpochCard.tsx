import { Link } from "react-router-dom";

type Props = {
    id: number;
    title: string;
    text: string;
    img: string;
};

export function EpochCard({ id, title, text, img }: Props) {
    return (
        <Link to={`/epoche-storiche/${id}`}>
            <article className="card_epoche">
                <img src={img} alt={title} loading="lazy"/>
                <div className="card_epoche_text">
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
            </article>
        </Link>
    );
}