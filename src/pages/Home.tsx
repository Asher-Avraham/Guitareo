import {
  Carousel,
  EmailList,
  Footer,
  Header,
  Help,
  Hero,
  Reviews,
} from "../components";

function Home() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Carousel />
      <Reviews />
      <Help />
      <EmailList />
      <Footer />
    </div>
  );
}

export default Home;
