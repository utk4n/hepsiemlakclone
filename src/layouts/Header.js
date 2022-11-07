import Top from "../components/Header/Top";
import Middle from "../components/Header/Middle";
const Header = () => {
  return (
    <header className="h-screen bg-gradient-to-b from-[#460000cc] to-[#22020880] relative">
      <div className="absolute top-0 right-0 w-full h-full bg-headerBackground bg-bottom -z-10 bg-cover" />
      <Top />
      <Middle />
    </header>
  );
};

export default Header;
