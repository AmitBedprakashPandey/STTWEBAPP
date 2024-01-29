import React, { useEffect, useState } from "react";
import "./master.css";

import { Link, useNavigate } from "react-router-dom";
import { BiEdit, BiSave, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  AllCity,
  CreateCity,
  DeleteCity,
  UpdateCity,
} from "../redux/Feature/CitySlice";

const ShowModel = ({ id, close }) => {
  const [inputField, setInputField] = useState();
  const { city, loading } = useSelector((state) => state.City);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      const single = city.filter((doc) => doc._id === id);
      setInputField(single[0]);
    }
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  }, [city , id]);
  const onchangeHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  const updateCity = async () => {
    dispatch(UpdateCity(inputField)).then(() => {
      dispatch(AllCity());

      close();
    });
  };

  return (
    <>
      {loading && (
        <div
          style={{ backgroundColor: "rgba(2, 2, 2, 0.5)" }}
          className="bg-[`rgb(0,0,0,0.65)`] absolute top-0 bottom-0 right-0 left-0 z-50 flex items-center justify-center"
        >
          <label className="bg-white p-3">Loading...</label>
        </div>
      )}

      <div
        className="absolute top-0 bottom-0 left-0 right-0 z-40 flex justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
      >
        <div className="w-80 bg-white rounded-xl absolute mt-56">
          <div className="text-2xl uppercase flex justify-center py-3">
            <h5>updateCity</h5>
          </div>
          <div className="card-body p-4">
            <div className="model-boxs">
              <div className="">
                <div className="mt-2  w-full">
                  <input
                    type="text"
                    id="input"
                    name="city"
                    className="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
                    value={inputField?.city}
                    placeholder="title"
                    onChange={onchangeHandler}
                  />
                </div>
              </div>
              <div className="flex justify-end items-center gap-4 mt-3">
                <button
                  className="bg-blue-500 text-white font-bold rounded px-5 py-3 uppercase"
                  onClick={updateCity}
                >
                  update
                </button>
                <button
                  className="bg-red-500 text-white font-bold rounded px-5 py-3 uppercase"
                  onClick={() => {
                    close();
                    setInputField("");
                  }}
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default function City({ close }) {
  const [cityData, setCityData] = useState();
  const [showModel, setShowModel] = useState(false);
  const [id, setId] = useState();
  const dispatch = useDispatch();

  const { city, loading } = useSelector((state) => state.City);

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    dispatch(AllCity());
  }, [navigate,dispatch]);

  useEffect(() => {
    if (search.length === 0) {
      setFiltered(city);
    } else {
      const filteredData = city.filter((item) =>
        item.city.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(filteredData);
    }
  }, [search, city]);

  const CitySave = async () => {
    dispatch(CreateCity({ city: cityData })).then((data) => {
      setCityData("");
      dispatch(AllCity());
    });
  };
  return (
    <div className="py-1 flex md:justify-center w-full">
      {loading && (
        <div
          style={{ backgroundColor: "rgba(2, 2, 2, 0.5)" }}
          className="bg-[`rgb(0,0,0,0.65)`] absolute top-0 bottom-0 right-0 left-0 z-50 flex items-center justify-center"
        >
          <label className="bg-white p-3">Loading...</label>
        </div>
      )}
      {showModel && <ShowModel id={id} close={() => setShowModel(false)} />}

      <div className="w-full md:w-[600px] bg-white mt-5 rounded-xl ">
        <div className="flex gap-2 px-5 py-3">
          <Link to={"/"} className="capitalize hover:font-medium">
            home
          </Link>{" "}
          /
          <Link to={"/city"} className="capitalize hover:font-medium">
            City
          </Link>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex gap-2 items-center mx-3">
            <div className="flex flex-col relative w w-full">
              <label htmlFor="input" className="capitalize ">
                Full name
              </label>
              <input
                type="text"
                id="input"
                name="city"
                className="rounded px-3 py-2 border border-slate-500 text-lg placeholder:capitalize"
                placeholder="title"
                value={cityData}
                onChange={(e) => {
                  setCityData(e.target.value);
                  setSearch("");
                }}
              />
            </div>
            <button
              onClick={CitySave}
              disabled={cityData ? false : true}
              className="bg-green-500 flex items-center gap-2 text-white px-3 py-2 text-lg mt-6 rounded uppercase font-medium hover:font-bold disabled:bg-green-800"
            >
              <BiSave className="text-2xl" />
              Add
            </button>
          </div>
          <div className="flex items-center mt-3 mx-3">
            <div className="w-full">
              <input
                type="text"
                id="input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="rounded px-3 py-2 border border-slate-500 text-lg w-full"
                placeholder="search"
                required
              />
            </div>
          </div>
        </div>
        <div className="mx-3 mt-3 bg-white">
          <table className="w-full">
            <thead className="border-b border-gray-500">
              <tr className="flex gap-3 items-center py-2 px-3 bg-slate-300">
                <th  className="capitalize flex">
                  #
                </th>
                <th  className="capitalize w-56 flex">
                  particular
                </th>
                <th  className="capitalize flex">
                  action
                </th>
              </tr>
            </thead>
            <div className="w-full h-[550px] overflow-y-auto">
              {filtered &&
                filtered.map((item, index) => (
                  <tr
                    key={index}
                    className="w-full flex gap-3 py-3 items-center px-3 border-b border-slate-500"
                  >
                    <td  className="">
                      {index + 1}
                    </td>
                    <td  className="w-56 capitalize font-bold">
                      {item?.city}
                    </td>
                    <td  className="">
                      <div className="flex gap-3">
                        <button
                          onClick={() => {
                            setId(item._id);
                            setShowModel(true);
                          }}
                          className="bg-blue-500 text-white p-2 rounded-full text-2xl"
                        >
                          <BiEdit />
                        </button>
                        <button
                          onClick={() => {
                            dispatch(DeleteCity(item._id)).then(() =>
                              dispatch(AllCity())
                            );
                          }}
                          className="bg-red-500 text-white p-2 rounded-full text-2xl"
                        >
                          <BiTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </div>
          </table>
        </div>
      </div>
    </div>
  );
}
