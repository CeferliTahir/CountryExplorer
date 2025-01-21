import { Link } from "react-router";

const Country = ({ flags, capital, region, name, population, id }) => {
  return (
    <>
      <Link to={`/details/${id}`}>
        <div className="w-[267px] cursor-pointer information rounded-[5px] m-auto">
          <img
            className="h-[160px] w-full object-cover rounded-t-[5px]"
            src={flags.png}
            alt="SORRY"
          />
          <div className="flex flex-col gap-4 rounded-[5px] text-[#111517] dark:text-white dark:bg-[#2B3844] font-abc bg-white pt-6 px-6 pb-[46px]">
            <h2 className="text-lg font-extrabold leading-[26px]">
              {name.common}
            </h2>
            <div className="flex flex-col gap-2 text-sm leading-4 font-light">
              <p>
                <span className="font-semibold">Population: </span>
                {population}
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                {region}
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                {capital}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Country;
