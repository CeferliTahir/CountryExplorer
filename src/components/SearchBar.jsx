import Selected from "./Selected";
import { useSearchParams } from "react-router";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = (e) => {
    searchParams.set("name", e.target.value);
    searchParams.delete("region");
    setSearchParams(searchParams);
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 sm:items-center py-12">
        <div className="search flex items-center gap-6 py-[18px] px-4 sm:px-8 bg-white dark:bg-[#2B3844] rounded-[5px] sm:w-[480px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            className="fill-[#848484] dark:fill-white w-4 h-4 sm:w-[18px] sm:h-[18px]"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
            />
          </svg>
          <input
            onChange={handleInputChange}
            value={searchParams.get("name") || ""}
            className="text-[#848484] dark:placeholder:text-white dark:bg-[#2B3844] dark:text-white font-abc text-xs sm:text-sm font-normal leading-5 w-full outline-none"
            type="text"
            placeholder="Search for a country…"
          />
        </div>
        <div>
          <Selected />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
