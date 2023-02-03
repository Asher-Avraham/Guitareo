import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { Rating } from "../components";
import { GuitarType } from "../data/constants";

type CarouselCardProps = Omit<GuitarType, "specs">;

export default function CarouselCard({
  description,
  photo,
  title,
  avgRating,
  amountRatings,
  tags,
}: CarouselCardProps) {
  const shortDescription =
    description.substring(0, description.substring(0, 150).lastIndexOf(" ")) +
    "...";
  return (
    <div className="card carousel-item rounded-box bg-base-100 shadow-xl max-w-xs md:max-w-sm ">
      <figure>
        <LazyLoadImage
          className="cursor-pointer mt-4 rounded-xl p-5 object-cover"
          src={photo[0]}
          alt="guitar photo"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title link-hover cursor-pointer">
            <Link to={`/acoustic/${title}`}>{title}</Link>
          </h2>
          <div>
            <Rating edit={false} selectedRating={avgRating} />
            <p className="text-center text-sm">{amountRatings} Ratings</p>
          </div>
        </div>
        <Link to={`/acoustic/${title}`} className="cursor-pointer">
          {shortDescription}
        </Link>
        <div className="card-actions justify-end">
          {tags.map((tag: string, index: number) => (
            <div
              key={index.toString()}
              className="badge badge-outline cursor-pointer"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
