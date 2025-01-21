import { Link, useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import DetailsSkeleton from "../components/DetailsSkeleton";

const Details = () => {
  const params = useParams();
  const fetchCounty = useFetch(`/alpha/${params.id}`);

  return (
    <>
      {fetchCounty.loading ? (
        <DetailsSkeleton />
      ) : (
        <div className="container max-w-[320px] sm:max-w-[1280px] w-[90%] m-auto">
          <div className="flex flex-col gap-10 pt-10 sm:gap-20 sm:pt-20 dark:text-white ">
            <Link
              to="/"
              className="back-button rounded-md py-[10px] dark:text-white dark:hover:bg-[#2B3844] w-[136px] items-center justify-center hover:bg-white flex gap-[10px] text-[#111517] font-abc text-base font-light leading-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="fill-[#111517] dark:fill-white"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
                />
              </svg>
              Back
            </Link>
            {fetchCounty.data?.map((item) => {
              const {
                ccn3,
                flags,
                name,
                population,
                capital,
                languages,
                region,
                subregion,
                tld,
                currencies,
                borders,
              } = item;

              return (
                <div
                  key={ccn3}
                  className="flex flex-col sm:flex-row sm:items-center gap-11 sm:gap-10 sm:justify-between"
                >
                  <div className="details-img max-w-[320px] sm:min-w-[560px] sm:max-w-[660px] sm:h-[401px] sm:rounded-[10px]">
                    <img
                      className="w-full h-full object-cover rounded-[10px]"
                      src={flags.png}
                      alt="Flag"
                    />
                  </div>

                  <div className="flex flex-col gap-8 sm:gap-[70px] sm:w-[600px]">
                    <div className="flex flex-col gap-[23px]  text-[#111517] dark:text-white font-abc">
                      <h1 className="font-extrabold text-[22px] sm:text-[32px]  cursor-default">
                        {name.common}
                      </h1>
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-0 cursor-default dark:text-white text-[#111517] font-abc text-sm sm:text-base leading-8 font-light">
                        <ul>
                          <li>
                            <span className="font-semibold">Native Name: </span>
                            {Object.values(name.nativeName)[0].common}
                          </li>
                          <li>
                            <span className="font-semibold">Population: </span>
                            {population}
                          </li>
                          <li>
                            <span className="font-semibold">Region: </span>
                            {region}
                          </li>
                          <li>
                            <span className="font-semibold">
                              {subregion ? "Sub Region: " : ""}
                            </span>
                            {subregion}
                          </li>
                          <li>
                            <span className="font-semibold">Capital: </span>
                            {capital[0]}
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span className="font-semibold">
                              Top Level Domain:
                            </span>{" "}
                            {tld[0]}
                          </li>
                          <li>
                            <span className="font-semibold">Currencies: </span>
                            {Object.values(currencies)[0].name}
                          </li>
                          <li>
                            <span className="font-semibold">Languages: </span>
                            {Object.values(languages)[0]}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col pb-[62px] sm:pb-0 sm:flex-row gap-4 sm:items-center font-abc dark:text-white text-[#111517]">
                      <h3 className="text-base font-semibold leading-6 text-nowrap cursor-default">
                        {borders ? "Border Countries:" : ""}
                      </h3>
                      <div className="flex flex-wrap gap-[10px]">
                        {borders?.map((border) => (
                          <Link
                            key={border}
                            to={`/details/${border}`}
                            className="border-country py-[5px] px-[27px] rounded-sm hover:bg-white dark:bg-[#202C36] dark:hover:bg-[#2B3844] dark:text-white"
                          >
                            {border}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
