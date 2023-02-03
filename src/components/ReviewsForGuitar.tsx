import { ReviewCard } from ".";
import { reviews } from "../data/constants";

export default function ReviewsForGuitar({ title }: any) {
  const matchingReviews = reviews.filter((review) => review.title === title);
  if (matchingReviews.length === 0) {
    return (
      <div className="bg-[#F6F5F1]">
        <h1 className="text-md font-bold pt-2 pb-12 px-4 md:px-36 text-left text-[#434343]">
          No user reviews found
        </h1>
      </div>
    );
  } else {
    null;
  }
  return (
    <div className="bg-[#F6F5F1]">
      <h1 className="text-xl font-bold pt-2 px-60 text-left text-[#434343]">
        User Reviews:
      </h1>
      <div className="flex flex-col items-center justify-center ">
        {matchingReviews.map((review, index) => (
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
