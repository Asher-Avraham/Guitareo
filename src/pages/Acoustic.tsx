import { Breadcrumbs, CarouselCard, Footer, Header } from "../components";
import { guitars } from "../data/constants";

export default function Acoustic() {
  return (
    <div className="container flex flex-col relative min-h-screen">
      <Header />
      <div className="py-5 2xl:px-36 xl:px-24">
        <div className="px-4 md:px-0">
          <Breadcrumbs />
        </div>
        <div className="flex flex-col items-center justify-center md:grid md:grid-cols-3 gap-8">
          {guitars.map((card, index) => (
            <div className="col-span-1">
              <CarouselCard
                key={index}
                photo={card.photo}
                title={card.title}
                avgRating={card.avgRating}
                amountRatings={card.amountRatings}
                description={card.description}
                tags={card.tags}
              />
            </div>
          ))}{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
}
