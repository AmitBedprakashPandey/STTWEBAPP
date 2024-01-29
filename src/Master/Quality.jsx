import React, { useEffect, useState } from "react";
import "./master.css";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { BiEdit, BiSave, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  AllQuality,
  DeleteQuality,
  UpdateQuality,
  CreateQuality,
} from "../redux/Feature/QualitySlice";

const ShowModel = ({ close, id }) => {
  const [oldName, setOldName] = useState();
  const dispatch = useDispatch();
  const { Quality, loading } = useSelector((state) => state.Quality);
  useEffect(() => {
    if (id) {
      const single = Quality.filter((doc) => doc._id === id);
      setOldName(single[0]);
    }
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  }, [id, Quality]);
  const onchangeHandler = (e) => {
    setOldName({ ...oldName, [e.target.name]: e.target.value });
  };

  const update = async () => {
    dispatch(UpdateQuality(oldName)).then(() => {
      dispatch(AllQuality());
      close();
    });
  };

  return (
    <>
      {loading && (
        <div
          style={{ backgroundColor: "rgba(2, 2, 2, 0.65)" }}
          className="bg-[`rgb(0,0,0,0.5)`] absolute top-0 bottom-0 right-0 left-0 z-50 flex items-center justify-center"
        >
          <label className="bg-white p-3">Loading...</label>
        </div>
      )}
      <div
        class="absolute top-0 bottom-0 left-0 right-0 z-50 flex justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
      >
        <div class="w-80 bg-white rounded-xl absolute mt-56">
          <div class="text-2xl uppercase flex justify-center py-3">
            <h5>Update</h5>
          </div>
          <div class="card-body p-4">
            <div class="model-boxs">
              <div class="">
                <div class="mt-2  w-full">
                  <input
                    type="text"
                    id="input"
                    name="quality"
                    class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
                    value={oldName?.quality}
                    placeholder="title"
                    onChange={onchangeHandler}
                  />
                </div>
              </div>
              <div class="flex justify-end items-center gap-4 mt-3">
                <button
                  class="bg-blue-500 hover:bg-blue-600 px-10 duration-300 text-white rounded py-3 uppercase"
                  onClick={update}
                >
                  UPDATE
                </button>
                <button
                  class="bg-red-500 hover:bg-red-600 duration-300 text-white rounded px-10 py-3 uppercase"
                  onClick={() => {
                    close();
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

export default function Quality({ close }) {
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [showModel, setShowModel] = useState(false);
  const dispatch = useDispatch();
  const { Quality, loading } = useSelector((state) => state.Quality);

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    if (search.length === 0) {
      setFiltered(Quality);
    } else {
      const filteredData = Quality.filter((item) =>
        item.quality.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(filteredData);
    }
  }, [search, Quality]);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(AllQuality());
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate, dispatch]);
  const save = async () => {
    dispatch(CreateQuality({ quality: name })).then(() => {
      dispatch(AllQuality());
      setName("");
    });
  };
  return (
    <div className="flex justify-center">
      {loading && <Loading />}
      {showModel && <ShowModel close={() => setShowModel(false)} id={id} />}
      <div class="w-full max-w-[600px] bg-white mt-5 rounded-lg">
        <div class="flex gap-2 px-5 py-3">
          <Link to={"/"} className="capitalize hover:font-medium">
            home
          </Link>
          /
          <Link to={"/Quality"} className="capitalize hover:font-medium">
            Quality
          </Link>
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex gap-2 items-center mx-3">
            <div class="flex flex-col relative w w-full">
              <label for="input" class="capitalize ">
                title
              </label>
              <input
                type="text"
                id="input"
                class="rounded px-3 py-2 border border-slate-500 text-lg placeholder:capitalize"
                placeholder="title"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button
              onClick={save}
              disabled={name ? false : true}
              class="bg-green-500 flex items-center disabled:bg-green-800 gap-2 text-white px-3 py-2 text-lg mt-6 rounded uppercase font-medium hover:font-bold"
            >
              <BiSave className="text-2xl" />
              Add
            </button>
          </div>
          <div class="flex items-center mt-3 mx-3">
            <div class="w-full">
              <input
                type="search"
                id="input"
                class="rounded px-3 py-2 border border-slate-500 text-lg w-full"
                placeholder="search"
                required
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div class="mx-3 mt-3 bg-white ">
          <table class="w-full">
            <thead className="border-b border-gray-400">
              <tr class="flex gap-3 items-center py-2 px-3 bg-gray-200">
                <th scope="col" class="capitalize flex">
                  #
                </th>
                <th scope="col" class="capitalize w-56 flex">
                  particular
                </th>
                <th scope="col" class="capitalize flex">
                  action
                </th>
              </tr>
            </thead>
            <div class="overflow-y-auto h-[550px]">
              {filtered &&
                filtered.map((item, index) => (
                  <tr class="flex gap-3 py-3 items-center px-3 border-b border-slate-400 bg-gray-100">
                    <td class="font-bold">{index + 1}</td>
                    <td class="w-56 capitalize font-bold">{item?.quality}</td>
                    <td class="">
                      <div class="flex gap-3">
                        <button
                          onClick={() => {
                            setShowModel(true);
                            setId(item._id);
                          }}
                          class="bg-blue-500 text-white p-2 rounded-full text-2xl"
                        >
                          <BiEdit />
                        </button>
                        <button
                          onClick={() => {
                            dispatch(DeleteQuality(item._id)).then(() => {
                              dispatch(AllQuality());
                            });
                          }}
                          class="bg-red-500 text-white p-2 rounded-full text-2xl"
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
