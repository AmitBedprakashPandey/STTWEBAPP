import React, { useEffect, useState } from "react";
import "./master.css";
import Loading from "../components/Loading";
import { Link, useNavigate } from "react-router-dom";
import { BiEdit, BiSave, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  AllTransport,
  CreateTransport,
  DeleteTransport,
  UpdateTransport,
} from "../redux/Feature/TransportSlice";

const ShowModel = ({ close, id }) => {
  const [oldName, setOldName] = useState();
  const { Transport } = useSelector((state) => state.Transport);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      const single = Transport?.filter((doc) => doc._id === id);
      setOldName(single[0]);
    }
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  }, [Transport, id]);

  const onchangeHandler = (e) => {
    setOldName({ ...oldName, [e.target.name]: e.target.value });
  };

  const update = async () => {
    console.log(oldName);
    dispatch(UpdateTransport(oldName)).then(() => {
      dispatch(AllTransport());
    });
  };

  return (
    <>
      <div
        class="absolute top-0 bottom-0 left-0 right-0 z-50 flex justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.26)" }}
      >
        <div class="w-80 bg-white rounded-2xl absolute mt-56">
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
                    class="rounded-lg px-3 py-2 border border-black text-lg w-full placeholder:capitalize"
                    name="transport"
                    value={oldName?.transport}
                    placeholder="title"
                    onChange={onchangeHandler}
                  />
                </div>
                <div class="mt-2  w-full">
                  <input
                    type="text"
                    id="input"
                    name="shortname"
                    class="rounded-lg px-3 py-2 border border-black text-lg w-full placeholder:capitalize"
                    placeholder="title"
                    value={oldName?.shortname}
                    onChange={onchangeHandler}
                  />
                </div>
              </div>
              <div class="flex justify-end items-center gap-4 mt-3">
                <button
                  class="bg-blue-500 text-white font-bold rounded-xl px-5 py-3 uppercase"
                  onClick={() => {
                    update();
                    close();
                  }}
                >
                  UPDATE
                </button>
                <button
                  class="bg-red-500 text-white font-bold rounded-xl px-5 py-3 uppercase"
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
export default function Transport() {
  const [formData, setFormData] = useState();
  const [showModel, setShowModel] = useState(false);
  const [id, setId] = useState();
  const dispatch = useDispatch();

  const { Transport, loading } = useSelector((state) => state.Transport);

  const formHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(AllTransport());
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate, dispatch]);

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (search.length === 0) {
      setFiltered(Transport);
    } else {
      const filteredData = Transport?.filter((item) =>
        item.transport.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(filteredData);
    }
  }, [search, Transport]);

  const save = async () => {
    dispatch(CreateTransport(formData)).then(() => {
      setFormData({ ...formData, transport: "", shortname: "" });
      dispatch(AllTransport());
    });
  };

  return (
    <div className=" ">
      {loading && <Loading />}
      {showModel && <ShowModel close={() => setShowModel(false)} id={id} />}
      <div class="bg-white mt-5 flex flex-col justify-center px-5 max-w-3xl mr-auto ml-auto  rounded-xl">
        <div class="flex gap-2 py-3">
          <Link to={"/"} className="capitalize hover:font-medium">
            home
          </Link>
          /
          <Link to={"/Transport"} className="capitalize hover:font-medium">
            Transport
          </Link>
        </div>

        <div class="flex flex-col justify-between">
          <div class="relative w-full">
            <div>
              <label for="input" class="capitalize ">
                title
              </label>
              <input
                type="text"
                id="input"
                name="transport"
                class="w-full rounded px-3 py-2 border border-slate-500 text-lg placeholder:capitalize"
                placeholder="title"
                value={formData?.transport}
                onChange={formHandler}
              />
            </div>
            <div className="flex items-center gap-2 my-2">
              <input
                type="text"
                id="input"
                class="w-full rounded px-3 py-2 border border-slate-500 text-lg placeholder:capitalize"
                placeholder="short title"
                name="shortname"
                value={formData?.shortname}
                onChange={formHandler}
              />
              <button
                onClick={save}
                disabled={formData ? false : true}
                class="bg-green-500 flex items-center gap-2 disabled:bg-green-800 text-white rounded px-3 py-2 text-lg uppercase font-medium hover:font-bold"
              >
                <BiSave className="text-2xl" />
                Add
              </button>
            </div>
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

        <table class="w-full mt-3">
          <thead>
            <tr class="flex bg-gray-200 py-3">
              <th scope="col" class="px-3">
                #
              </th>
              <th scope="col" class="w-56 flex justify-start">
                title
              </th>
              <th scope="col" class="w-48 flex justify-start">
                short title
              </th>
              <th scope="col" class="capitalize flex justify-end px-10">
                action
              </th>
            </tr>
          </thead>

          <tbody>
            <div className="h-[500px] overflow-hidden overflow-y-auto relative">
              {filtered &&
                filtered.map((item, index) => (
                  <tr key={index} class="bg-gray-100 flex py-2 items-center">
                    <td class="px-3">{index + 1}</td>
                    <td class="w-56 flex justify-start font-bold">
                      {item?.transport}
                    </td>
                    <td class="w-56 flex justify-start capitalize font-bold">
                      {item.shortname}
                    </td>
                    <td class="flex justify-end">
                      <div class="flex gap-3  justify-end">
                        <button
                          onClick={() => {
                            setId(item._id);
                            setShowModel(true);
                          }}
                          class="bg-blue-500 text-white p-2 rounded-full text-2xl"
                        >
                          <BiEdit />
                        </button>
                        <button
                          onClick={() => {
                            dispatch(DeleteTransport(item._id)).then(() => {
                              dispatch(AllTransport());
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
