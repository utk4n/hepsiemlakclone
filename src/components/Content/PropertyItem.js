import React, { useState, useEffect } from "react";
import LikeIcon from "../../assets/LikeIcon";
import ProfilPhoto from "../../assets/ProfilPhoto";
import CallIcon from "../../assets/CallIcon";
import PhoneIcon from "../../assets/PhoneIcon";
import ExitIcon from '../../assets/ExitIcon'
const PropertyItem = ({ item, idx }) => {
  const [investment, setInvestment] = useState(null);
  const [fillIcon, setFillIcon] = useState(false);
  const [showTelBtn, setShowTelBtn] = useState(true);
  useEffect(() => {
    setInvestment(Math.floor(Math.random() * 10) > 5);
  }, []);

  const showTel = () => {
    setShowTelBtn((prev) => !prev);
  };

  return (
    <div
      key={idx}
      className="border p-2 bg-[#e6ffe2] py-2 relative cursor-pointer"
    >
      <div
        onMouseOver={() => setFillIcon(true)}
        onMouseOut={() => setFillIcon(false)}
        className="absolute bg-white text-xs right-4 top-4 text-center rounded-full p-2"
      >
        <LikeIcon fill={`${fillIcon ? "#e1211b" : "#9f9f9f"}`} />
      </div>
      {investment && (
        <p
          key={idx}
          className="absolute bg-red-600 text-xs w-[110px] tracking-wider font-medium text-white left-4 top-4 text-center py-[8px] rounded-[4px]"
        >
          YATIRIMLIK
        </p>
      )}
      <img src={item.img} alt="img" />
      <p className="text-xl font-bold text-[rgb(67,67,67)] mt-2">
        {item.price} <span className="font-normal">TL</span>
      </p>
      <p className="text-sm font-medium text-[rgb(67,67,67)] mb-2">{item.title}</p>
      <p className="text-sm font-medium text-[rgb(67,67,67)]">{item.status}</p>
      <p className="text-sm font-medium text-[rgb(118,118,118)] mt-2">
        {item.city}
      </p>
      <p className="text-sm font-medium text-[rgb(118,118,118)] my-2">
        {item.timestamp}
      </p>
      <div className="flex items-center justify-between gap-2 mt-3 relative">
        {showTelBtn ? (
          <button
            onClick={showTel}
            className="text-[#767676] text-sm font-bold border w-full py-2 px-1 rounded-[4px] hover:bg-red-500 hover:text-white"
          >
            Telefonu Göster
          </button>
        ) : (
          <button
            onClick={showTel}
            className="text-[#767676] text-sm font-bold border w-full py-2 px-1 rounded-[4px] hover:bg-red-500 hover:text-white"
          >
            Telefonu Gizle
          </button>
        )}
        {!showTelBtn && (
          <div className="absolute bottom-12 w-full py-2 bg-white rounded-sm shadow-md">
            <div className="flex items-center gap-3 mt-1 ml-2">
              <div className="absolute right-3 top-3 cursor-pointer font-extrabold stroke-current">
              <ExitIcon />
              </div>
              <div>
                <ProfilPhoto />
              </div>
              <div>
                <p className="text-[#767676] mb-1">İlan Sahibi</p>
                <p>İlan No: {item.advertNumber}</p>
              </div>
            </div>
            <div className="flex flex-col w-full h-full gap-5">
              <div className="flex items-center gap-6 ml-5 border-t mt-4">
                  <CallIcon />
                <p className="text-[#e1211b] font-medium">{item.tel}</p>
              </div>
              <div className="flex items-center gap-6 ml-5 border-t">
                  <PhoneIcon />
                <p className="text-[#e1211b] font-medium">{item.tel}</p>
              </div>
            </div>
          </div>
        )}
        <button className="text-[#767676] text-sm font-bold border w-1/3 py-2 px-1 rounded-[4px] hover:border-red-500 hover:text-red-500">
          Mesaj
        </button>
      </div>
    </div>
  );
};

export default PropertyItem;
