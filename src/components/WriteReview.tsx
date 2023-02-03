import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { xMark } from "../assets";
import { Rating } from "../components";

type WriteReviewProps = {
  guitarTitle: string;
  setShowReview: React.Dispatch<React.SetStateAction<boolean>>;
};

const WriteReview = ({
  guitarTitle,
  setShowReview,
}: WriteReviewProps): JSX.Element => {
  const currentDate = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const [review, setReview] = useState({
    guitar: guitarTitle,
    date: currentDate,
    name: "",
    rating: 0,
    reviewTitle: "",
    reviewBody: "",
    photo: "",
  });
  const { name, reviewTitle, reviewBody } = review;

  const onChange = (e: { target: { id: string; value: string | number } }) => {
    setReview((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const updateParentRating = (rating: number) => {
    setReview((prevState) => ({
      ...prevState,
      rating: rating,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("submit", review);
  };
  return (
    <div className="p-6 md:px-28 bg-[#EAE5DE] text-[#434343]">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between py-4">
          <h2 className="pt-4 text-lg font-bold">Write your review</h2>
          <LazyLoadImage
            src={xMark}
            alt="x mark"
            className="w-6 h-6 cursor-pointer rounded hover:w-7 hover:h-7 "
            onClick={() => setShowReview(false)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2 pl-2" htmlFor="name">
            Your Name
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            id="name"
            type="text"
            placeholder="Name"
            onChange={onChange}
            value={name}
            autoFocus
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2 pl-2">
            Rate This Guitar
          </label>
          <Rating edit={true} onChange={updateParentRating} />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2 pl-2" htmlFor="reviewTitle">
            Review Title
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            id="reviewTitle"
            type="text"
            placeholder="Review Title"
            onChange={onChange}
            value={reviewTitle}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2 pl-2" htmlFor="reviewBody">
            Your Review
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2"
            id="reviewBody"
            rows={4}
            placeholder="Review"
            onChange={onChange}
            value={reviewBody}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2 pl-2" htmlFor="photo">
            Upload Photo
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            id="photo"
            type="file"
            accept="image/*"
            onChange={onChange}
          />
        </div>
        <button
          className="bg-[#AA1F23] text-white rounded-lg p-2 hover:opacity-90 w-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default WriteReview;
