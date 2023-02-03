import { CarouselCard } from "../components";
import { guitars } from "../data/constants";

export default function Carousel() {
  return (
    <div className="carousel carousel-center max-w-full px-16 py-12 md:px-12 md:py-28 space-x-4 bg-[#F6F5F1] rounded-box">
      {guitars.map((card, index) => (
        <CarouselCard
          key={index}
          photo={card.photo}
          title={card.title}
          avgRating={card.avgRating}
          amountRatings={card.amountRatings}
          description={card.description}
          tags={card.tags}
        />
      ))}
    </div>
  );
}
