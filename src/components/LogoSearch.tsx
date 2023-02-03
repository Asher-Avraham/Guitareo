import { Link, useNavigate } from "react-router-dom";
import ReactSearchBox from "react-search-box";
import { userCircle } from "../assets";
import { guitars } from "../data/constants";

export default function Header() {
  const data = guitars.map((guitar, index) => {
    return {
      key: index.toString(),
      value: guitar.title,
    };
  });

  const navigate = useNavigate();
  const handleSelect = (record: any) => {
    const encodedValue = encodeURIComponent(record.item.value);
    navigate(`/acoustic/${encodedValue}`, { replace: true });
    window.location.reload(); // this works for now
  };
  const handleChange = (value: string) => {
    const inputValue = value;
  };

  return (
    <div className="navbar flex flex-col md:flex-row py-5 px-2 2xl:px-36 xl:px-24 lg:px-12 md:px-8 sm:px-6 bg-[#AA1F23]">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-3xl text-white">
          Guitareo
        </Link>
      </div>
      <div className="flex-none gap-2 pt-4 sm:pt-0">
        <ReactSearchBox
          placeholder="Search"
          data={data}
          onSelect={(record) => handleSelect(record)}
          onChange={(value) => handleChange(value)}
          leftIcon={<>🔍 </>}
          iconBoxSize="48px"
        />
      </div>
    </div>
  );
}
