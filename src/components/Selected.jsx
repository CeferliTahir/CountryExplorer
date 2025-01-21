import { useSearchParams } from "react-router";

const Selected = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    const item = e.target.value;
    item ? searchParams.set("region", item) : searchParams.delete("region");
    searchParams.delete("name");
    setSearchParams(searchParams);
  }

  return (
    <div className="custom-select w-[200px] px-3 dark:bg-[#2B3844] rounded-[5px] bg-white">
      <select
        defaultValue={"0"}
        value={searchParams.get("region") || "0"}
        onChange={handleChange}
        className="border-none py-4 w-full outline-none text-xs sm:text-sm dark:text-white dark:bg-[#2B3844]"
      >
        <option value="0" disabled>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Selected;
