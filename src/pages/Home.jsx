import Box from "../components/Box";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <>
      <main>
        <div className="container max-w-[1280px] w-[90%] m-auto">
          <SearchBar />
          <Box />
        </div>
      </main>
    </>
  );
};

export default Home;
