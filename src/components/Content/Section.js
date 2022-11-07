import PropertyItem from "./PropertyItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getPropertyDatas } from "../../redux/propertySlice";

const Section = () => {
  const dispatch = useDispatch();

  const property = useSelector((state) => state.property.list);
 
  useEffect(() => {
    dispatch(getPropertyDatas());
  }, [dispatch]);

  return (
    <section className="w-4/5 mx-auto mt-3" id="section">
      <div>
        <h1 className="text-xl">
          <span className="font-bold">Ankara</span> Şehir Vitrini
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-3">
        {property.map((item, idx) => (
          <PropertyItem key={idx} item={item} />
        ))}
      </div>
      <div className="flex flex-col bg-bannerBackground w-full min-h-[277px] bg-cover bg-no-repeat rounded-[4px] my-20 shadow-lg overflow-hidden px-8">
        
        <div className="w-1/2 mt-3">
        <p className="text-3xl">Hayalindeki Evi</p>
          <p className="text-3xl font-bold">HepsiEmlak Haritası ile Bul</p>
          <p className="text-[#434343] text-sm my-6">
            Hepsiemlak harita uygulaması ile hayalindeki evi bulmak çok kolay.
            Dilediğin konumdaki ilanlara bakabilir veya şu an bulunduğun konuma
            yakın ilanlara ulaşabilirsin.
          </p>
          <button className="font-medium w-[155px] h-12 text-[#e1211b] border-[#e1211b] outline-none border rounded-[4px] hover:bg-[#e1211b] hover:text-white transition-all">Haritada İlan Ara</button>
        </div>
      </div>
    </section>
  );
};

export default Section;
