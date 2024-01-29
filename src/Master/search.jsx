import "./master.css";
import React, { useEffect, useState } from "react";
import { DB } from "../config/db.firebase";
import { collection, getDocs} from "firebase/firestore";
import Select from "react-select";

const cityRef = collection(DB, "City");
const Search = ({ value, onChange, options }) => {
  const [data, setData] = useState([]);  

  
  const getData = async () => {
    const data = await getDocs(cityRef);
    const da = data.docs.map((d) => ({ ...d.data() }));
    setData(da);
  };

  useEffect(() => {
    getData();

  }, []);

  return (
    <Select
      value={value} // The selected value
      onChange={onChange} // Callback to handle value changes
      options={data}
      getOptionValue={(option) => option.city} // Customize field state
      getOptionLabel={(option) => option.city} // Customize field state
    />
  );
};

export default Search;