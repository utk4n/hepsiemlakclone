import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { getCities } from "../redux/citySlice";
const useSearchQuery = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.city.list);
  const searchCity = useMemo(
    () =>
      cities.filter((city) =>
        city.il_adi.toLowerCase().includes(query.toLowerCase())
      ),
    [query, cities]
  );
  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  return { searchCity, setQuery,query };
};

export default useSearchQuery;
