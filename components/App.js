import Navbar from "./navbar";
import Search from "./search";
import Cards from "./Cards";

const App = () => {
  return (
    <div className="flex flex-col gap-2 pt-2 pb-2 px-2 sm:gap-3 sm:pt-2 sm:pb-4 sm:px-3 md:gap-6 md:pt-4 md:pb-6 md:px-6 lg:gap-8 lg:pt-6 lg:pb-10 lg:px-16 xl:gap-10 xl:pt-8 xl:pb-10 xl:px-20 font-opensans">
      <Navbar />
      <Search />
      <Cards />
    </div>
  );
};

export default App;
