import toast, { Toaster } from "react-hot-toast";
import useFetch from "../hooks/useFetch";
import Country from "./Country";
import CustomSkeleton from "./CustomSkeleton";
import { useSearchParams } from "react-router";
import { useEffect } from "react";

const Box = () => {
  const [searchParams] = useSearchParams();

  function endPoint() {
    const name = searchParams.get("name");
    const region = searchParams.get("region");

    if (name) return `/name/${name}`;
    if (region) return `/region/${region}`;

    return "/all";
  }

  const fetchData = useFetch(endPoint());

  useEffect(() => {
    if (fetchData.error) {
      toast.error(fetchData.error);
    }
  }, [fetchData.error]);

  const loadingArray = Array.from({ length: 20 }, (_, index) => index);

  return (
    <>
      <Toaster />
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-[67px] pb-[65px] sm:pb-[45px]">
          {fetchData.loading
            ? loadingArray.map((_, index) => {
                return (
                  <li key={index}>
                    <CustomSkeleton />
                  </li>
                );
              })
            : fetchData.data?.map(
                ({ flags, capital, region, name, population, cca3 }, index) => {
                  return (
                    <li key={cca3 || index}>
                      <Country
                        id={cca3}
                        flags={flags}
                        capital={capital}
                        region={region}
                        name={name}
                        population={population}
                      />
                    </li>
                  );
                }
              )}
        </ul>
      </div>
    </>
  );
};

export default Box;
