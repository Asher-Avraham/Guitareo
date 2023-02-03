import { ReviewCard } from "../components";
import { reviews } from "../data/constants";

export default function Reviews() {
  return (
    <div className="bg-[#EAE5DE]">
      <h1 className="text-3xl font-bold pt-10 px-20 text-left text-[#434343]">
        Latest Reviews
      </h1>
      <div className="flex flex-col items-center justify-center">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            author={review.author}
            date={review.date}
            photo={review.photo}
            title={review.title}
            userRating={review.userRating}
            review={review.review}
            tags={review.tags}
          />
        ))}
      </div>
    </div>
  );
}
