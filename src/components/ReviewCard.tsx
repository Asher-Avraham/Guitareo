import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { Rating } from "../components";
import { ReviewType } from "../data/constants";

export default function ReviewCard(props: ReviewType) {
  return (
    <div className="card w-10/12 md:w-7/12 my-10 py-6 bg-base-100 shadow-xl">
      <div className="flex justify-between px-6 py-0">
        <p className="italic">{props.author}</p>
        <p>{props.date}</p>
      </div>
      <figure className="px-10 pt-5">
        <LazyLoadImage
          src={props.photo}
          alt="guitar"
          className="rounded-xl w-5/6 md:w-1/2 py-0"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <Link to={`/acoustic/${props.title}`} className="card-title">
            {props.title}
          </Link>
          <Rating edit={false} selectedRating={props.userRating} />
        </div>
        <p>{props.review}</p>
        <div className="card-actions"></div>
      </div>
    </div>
  );
}
