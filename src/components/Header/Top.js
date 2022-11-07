import { useState } from "react";
import Account from "../../assets/HeaderIcons/Account";
const Top = () => {
  const [freeTooltip, setFreeTooltip] = useState(false);
  const [loginOrRegisterTooltip, setLoginOrRegisterTooltip] = useState(false);

  return (
    <div className="flex justify-end pt-5 pr-5 gap-5">
      <div
        onMouseEnter={() => setLoginOrRegisterTooltip(true)}
        onMouseLeave={() => setLoginOrRegisterTooltip(false)}
        className=" bg-white flex w-32 px-1 rounded-3xl items-center justify-between leading-3 cursor-pointer relative"
      >
        <div className="ml-3 my-0.5">
          <p className="font-medium text-sm text-[#434343]">Giriş Yap</p>
          <p className="pb-0.5">
            <span className="text-[#9f9f9f] text-xs font-normal">veya </span>
            <span className="text-[#e1211b] text-xs font-bold">üye ol</span>
          </p>
        </div>
        <Account />
        {loginOrRegisterTooltip ? (
          <div className="absolute top-12 -left-16 w-[230px] bg-white rounded-md py-4 px-3">
            <div className="absolute top-0 left-[45%] w-4 h-4 bg-white translate-x-1 -translate-y-1 rotate-45"></div>
            <div>
              <button className="bg-red-600 w-full py-3 rounded-md text-white text-center">Üye Girişi Yap</button>
              <p className="text-center my-6 font-bold ">HepsiEmlak'a Üye Ol</p>
              <ul className="flex flex-col gap-6 mt-8 py-2 text-[#767676]">
                <li>Kayıtlı Aramalarım</li>
                <li>Favorilerim</li>
                <li>Mesajlarım</li>
                <li>İlanlarım</li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
      <div
        onMouseEnter={() => setFreeTooltip(true)}
        onMouseLeave={() => setFreeTooltip(false)}
        className="bg-[#e1211b] px-5 flex items-center justify-center rounded-3xl cursor-pointer relative"
      >
        <button className="font-medium text-white">Ücretsiz İlan Ver</button>

        {freeTooltip ? (
          <div className="absolute top-10 text-center bg-white rounded-md leading-5 py-2 border">
            <div className="absolute top-0 left-16 w-4 h-4 bg-white translate-x-1 -translate-y-1 rotate-45"></div>
            <span className="text-[#434343] text-xs font-bold">
              Müşterisini bulana kadar ilanını ücretsiz yayınla.
            </span>
            <br />
            <span className="text-xs">Yineleme ücreti yok!</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Top;
