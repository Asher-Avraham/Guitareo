import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { reverb } from "../assets";
import {
  Breadcrumbs,
  Footer,
  Header,
  ImageGallery,
  Rating,
  ReviewsForGuitar,
  WriteReview,
} from "../components";
import { guitars } from "../data/constants";

export default function AcousticGuitar() {
  const [showReview, setShowReview] = useState<boolean>(false);
  const lastPart = location.href.split("/").pop();

  if (lastPart !== undefined) {
    const titleNew = decodeURIComponent(lastPart);
    const matchingGuitar = guitars.filter(
      (guitar) => guitar.title === titleNew
    );
    const { photo, title, avgRating, amountRatings, description, specs, tags } =
      matchingGuitar[0];

    const reverbURL = `https://reverb.com/marketplace?query=${encodeURIComponent(
      title
    )}&product_type=acoustic-guitars`;

    return (
      <div className="container flex flex-col relative min-h-screen">
        <Header />
        <div className="p-4 md:px-28 bg-[#F6F5F1] text-[#434343]">
          <div className="flex flex-col md:flex-row md:justify-between">
            <Breadcrumbs />
            <div>
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="badge badge-outline mx-1 text-[#AA1F23]"
                >
                  {tag}
                </div>
              ))}{" "}
            </div>
          </div>
          <div className="flex justify-between pt-3 md:pt-0">
            <h1 className="font-semibold text-3xl pt-2 md:pt-0 md:p-2">
              {title}
            </h1>
            <a href={reverbURL} target="_blank" rel="noopener noreferrer">
              <LazyLoadImage
                src={reverb}
                alt="search on reverb"
                className="w-20 pt-0 h-16"
              />
            </a>
          </div>
          <div className="flex pb-4 px-1">
            <Rating edit={false} selectedRating={avgRating} />
            <p className="text-sm m-0.5">{amountRatings} Reviews</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <ImageGallery photos={photo} />
            <div>
              <h3 className="font-semibold pt-4">Description-</h3>
              <p className="max-w-lg pt-2">{description}</p>
            </div>
          </div>
        </div>
        <div className="p-4 md:px-28 bg-[#EAE5DE] text-[#434343]">
          <h2 className="pt-4 font-semibold">Specification-</h2>
          <div className="p-4 pt-0 grid grid-cols-2">
            <div>
              <ul>
                <li>• Body Shape: {specs.bodyShape}</li>
                <li>• Top Wood: {specs.topWood}</li>
                <li>• Back and Sides: {specs.backAndSides}</li>
                <li>• Bracing: {specs.bracing}</li>
                <li>• Neck Wood: {specs.neckWood}</li>
                <li>• Neck Shape: {specs.neckShape}</li>
              </ul>
            </div>
            <div>
              <ul className="pl-3">
                <li>• Radius: {specs.radius}</li>
                <li>• Fingerboard Material: {specs.fingerBoardMaterial}</li>
                <li>• Nut and Saddle Material: {specs.nutSaddleMaterial}</li>
                <li>• Nut Width: {specs.nutWidth}</li>
                <li>• Electronics: {specs.electronics}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-4 pt-8 md:pt-24 bg-[#F6F5F1] text-[#434343] flex items-center justify-center">
          <button
            className="btn btn-wide border-0 bg-[#AA1F23] hover:bg-[#AA1F23] hover:opacity-90"
            onClick={() => setShowReview(true)}
          >
            Write your Review
          </button>
        </div>
        {showReview && (
          <div>
            <WriteReview guitarTitle={title} setShowReview={setShowReview} />
          </div>
        )}
        <div>
          <ReviewsForGuitar title={title} />
        </div>
        <Footer />
      </div>
    );
  } else {
    console.error("URL path does not contain a title for a guitar");
    return <p>404 Error</p>;
  }
}
