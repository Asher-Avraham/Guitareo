import { Breadcrumbs, Footer, Header } from "../components";

export default function Electric() {
  return (
    <div className="container flex flex-col relative min-h-screen">
      <Header />
      <div className="p-4 flex-1">
        <div className="flex flex-row justify-between">
          <Breadcrumbs />
        </div>
        <div>
          <h1 className="font-bold text-3xl">Page Under Construction</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
