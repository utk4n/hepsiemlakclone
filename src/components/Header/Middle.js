import HepsiEmlakLogo from "../../assets/HeaderIcons/HepsiEmlakLogo";
import SearchIcon from "../../assets/SearchIcon";
import MapIcon from "../../assets/MapIcon";
import ScrollDownArrow from "../../assets/ScrollDownArrow";
import DailyRentIcon from "../../assets/HeaderIcons/DailyRentIcon";
import Projects from "../../assets/HeaderIcons/Projects";
import RentIcon from "../../assets/HeaderIcons/RentIcon";
import SellIcon from "../../assets/HeaderIcons/SellIcon";
import useScroll from "../../hooks/useScroll";
import useSearchQuery from "../../hooks/useSearchQuery";
import useChangableTitle from "../../hooks/useChangableTitle";
import LocationIcon from "../../assets/LocationIcon";
const Middle = () => {
  const { searchCity, setQuery, query } = useSearchQuery();
  const { arrowAnim, arrowAnimCounter } = useChangableTitle();
  console.log(searchCity);
  const { scrollDown } = useScroll();

  return (
    <div className="flex items-center justify-center flex-col mt-10 gap-12">
      <div>
        <HepsiEmlakLogo />
      </div>
      <div
        className={` ${
          !query.length ? "flex" : "hidden"
        } text-white text-4xl font-light w-full items-center justify-center `}
      >
        <div className=" w-40 h-16 flex items-center justify-end font-bold mr-2 ">
          {arrowAnim[arrowAnimCounter]}
        </div>
        <div className="mr-6">
          <p className="text-4xl">ararken hepsiemlak'a bakmak lazım;</p>
        </div>
      </div>
      <div className="relative overflow-hidden -mt-6">
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          className={`w-[633px] h-[46px] border-none px-4 text-lg outline-none placeholder:text-[#4d4d4d] ${
            !!query.length ? "rounded-t-3xl" : "rounded-3xl"
          }`}
          placeholder="Konum, ilan no ya da emlak ofisi adıyla arayın (Örn. 1234-123456)"
        />
        <div className="absolute right-3 top-3 pl-6 bg-white">
          <SearchIcon />
        </div>
        {!!query.length && (
          <div className="bg-white list-none w-[100%] max-h-72 rounded-b-3xl pr-1 overflow-x-hidden ">
            <div className="w-full max-h-72 overflow-x-hidden overflow-y-auto">
              {searchCity.map((city) => (
                <li className="flex gap-3 items-center ml-3 mb-1 first:mt-2 last:mb-2">
                  <LocationIcon />
                  {city.il_adi}
                </li>
              ))}
            </div>
          </div>
        )}
      </div>
      <div
        className={`${
          !query.length ? "flex" : "hidden"
        } w-full justify-center gap-12 -mt-2 `}
      >
        <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
          <SellIcon />
          <p className="font-medium text-white">Satılık</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
          <RentIcon />
          <p className="font-medium text-white">Kiralık</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
          <DailyRentIcon />
          <p className="font-medium text-white">Günlük Kiralık</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
          <Projects />
          <p className="font-medium text-white">Projeler</p>
        </div>
      </div>
      <div
        className={`${!query.length ? "flex" : "hidden"}
      items-center justify-center font-medium w-[156px] h-[40px] gap-1 border-2 rounded-[20px] cursor-pointer`}
      >
        <MapIcon />
        <p className="text-white">Haritada Ara</p>
      </div>
      <div
        onClick={scrollDown}
        className="flex items-center flex-col cursor-pointer h-full mt-10 gap-2 "
      >
        <p className="text-white text-sm font-medium">
          Göz atmak için kaydırın
        </p>
        <div className="animate-bounce flex justify-center">
          <ScrollDownArrow />
        </div>
      </div>
    </div>
  );
};

export default Middle;
