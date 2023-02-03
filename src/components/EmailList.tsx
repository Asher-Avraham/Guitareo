export default function EmailList() {
  return (
    <div className="bg-[#AA1F23] px-16 py-6 flex flex-col md:flex-row justify-between">
      <div className="py-3">
        <h1 className="text-lg font-bold">Become a Guitareo Insider</h1>
        <p className="text-sm">
          Subscribe now to our Email list and get notified of new guitars
        </p>
      </div>
      <div className="py-3">
        <input
          placeholder="Email"
          className="rounded px-6 h-8 w-50"
          type="email"
        />
        <button className="btn bg-[#434343] justify-center items-center text-md m-2 h-10 w-20 md:ml-4 p-0">
          Sign Up
        </button>
      </div>
    </div>
  );
}
