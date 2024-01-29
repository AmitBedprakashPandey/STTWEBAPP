import { useEffect, useState } from "react";
import "./master.css";
import { Link, useNavigate } from "react-router-dom";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  AllProcess,
  DeleteProcess,
  UpdateProcess,
  CreateProcess,
} from "../redux/Feature/ProcessSlice";

const ShowModel = ({ id, close, btn }) => {
  const [formData, setFormData] = useState();
  const { city } = useSelector((state) => state.City);
  const { State } = useSelector((state) => state.State);
  const { Catagory } = useSelector((state) => state.Catagory);
  const { Process } = useSelector((state) => state.Process);
  const dispatch = useDispatch();

  const FormHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };
  useEffect(() => {
    if (id) {
      const single = Process.filter((doc) => doc._id === id);
      setFormData(single[0]);
    }
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  }, [Process, id]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);
  const save = () => {
    dispatch(CreateProcess(formData)).then(() => {
      dispatch(AllProcess());
      close();
    });
  };

  const update = () => {
    dispatch(UpdateProcess(formData)).then(() => {
      dispatch(AllProcess());
      close();
    });
  };

  return (
    <>
      <div
        class="absolute top-0 bottom-0 right-0 left-0 z-50 p-5 flex justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
      />
      <div class="absolute top-0 right-0 left-0 m-auto w-[700px] mt-10 bg-white rounded-2xl p-5 z-50">
        <div class="text-2xl py-3 uppercase">Procces {btn}</div>
        <div class="">
          <div class="">
            <label for="input" class="capitalize ">
              Enter Name
            </label>
            <input
              type="text"
              id="input"
              name="process"
              placeholder="Enter Process name"
              class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
              value={formData?.process}
              onChange={FormHandler}
            />
          </div>

          <div class="">
            <label for="input" class="capitalize ">
              Select Catagory
            </label>

            <select
              name="category"
              value={formData?.category}
              onChange={FormHandler}
              class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
            >
              <option selected disabled>
                Select Catagory
              </option>
              {Catagory.map((item) => (
                <option value={item.catagory}>{item.catagory}</option>
              ))}
            </select>
          </div>

          <div class="">
            <label for="input" class="capitalize ">
              Address
            </label>
            <input
              type="text"
              id="input"
              class="rounded w-full px-3 py-2 border border-slate-500 text-lg placeholder:capitalize"
              placeholder="Enter Address"
              required
              name="address"
              value={formData?.address}
              onChange={FormHandler}
            />
          </div>

          <div class="">
            <label for="input" class="capitalize ">
              State
            </label>
            <select
              name="state"
              value={formData?.state}
              onChange={FormHandler}
              class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
            >
              <option selected disabled>
                Select State
              </option>
              {State.map((item) => (
                <option value={item.state}>{item.state}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-3">
            <div class="w-full">
              <label for="input" class="capitalize ">
                City
              </label>

              <select
                name="city"
                value={formData?.city}
                onChange={FormHandler}
                class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
              >
                <option selected disabled>
                  Select City
                </option>
                {city.map((item) => (
                  <option value={item.city}>{item.city}</option>
                ))}
              </select>
            </div>

            <div class="w-full">
              <label for="input" class="capitalize ">
                Pincode
              </label>
              <input
                type="text"
                max="5"
                id="input"
                class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
                required
                placeholder="pincode"
                name="pincode"
                value={formData?.pincode}
                onChange={FormHandler}
              />
            </div>
          </div>

          <div class="flex gap-3 items-center">
            <div class="">
              <label for="input" class="capitalize ">
                office Number 1
              </label>
              <input
                type="tel"
                id="input"
                class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
                required
                placeholder="Enter office number"
                name="office1"
                value={formData?.office1}
                onChange={FormHandler}
              />
            </div>

            <div class="input-wrapper">
              <label for="input" class="capitalize ">
                office Number 2
              </label>
              <input
                type="tel"
                id="input"
                class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
                required
                placeholder="Enter office number"
                name="office2"
                value={formData?.office2}
                onChange={FormHandler}
              />
            </div>
          </div>

          <div class="flex gap-3 items-center">
            <div class="w-full">
              <label for="input" class="capitalize ">
                mobile number
              </label>
              <input
                type="tel"
                id="input"
                class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
                required
                placeholder="Enter mobile number"
                name="mobile"
                value={formData?.mobile}
                onChange={FormHandler}
              />
            </div>

            <div class="w-full">
              <label for="input" class="capitalize">
                email
              </label>
              <input
                type="text"
                id="input"
                class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
                required
                name="email"
                placeholder="Enter email"
                value={formData?.email}
                onChange={FormHandler}
              />
            </div>
          </div>
          <div class="flex justify-end pt-5 gap-3">
            <div class="">
              {btn === "save" ? (
                <button
                  class="bg-green-500 hover:bg-green-600 duration-300 text-white rounded px-10 py-3 uppercase"
                  onClick={save}
                >
                  save
                </button>
              ) : (
                <button
                  class="bg-blue-500 hover:bg-blue-600 duration-300 text-white rounded px-10 py-3 uppercase"
                  onClick={update}
                >
                  update
                </button>
              )}
            </div>
            <div class="">
              <button
                onClick={close}
                class="bg-red-500 hover:bg-red-600 duration-300 text-white rounded px-10 py-3 uppercase"
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default function Proccess() {
  const [showModel, setShowModel] = useState(false);
  const [typeBtn, setTypeBtn] = useState();
  const [id, setId] = useState();
  const { Process, loading } = useSelector((state) => state.Process);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    dispatch(AllProcess());
  }, [dispatch]);

  useEffect(() => {
    if (search.length === 0) {
      setFiltered(Process);
    } else {
      const filteredData = Process.filter((item) =>
        item.proccess.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(filteredData);
    }
  }, [search, Process]);

  return (
    <>
      {showModel && (
        <ShowModel id={id} close={() => setShowModel(false)} btn={typeBtn} />
      )}
      {loading && (
        <div
          style={{ backgroundColor: "rgba(2, 2, 2, 0.5)" }}
          className="bg-[`rgb(0,0,0,0.5)`] absolute top-0 bottom-0 right-0 left-0 z-50 flex items-center justify-center"
        >
          <label className="bg-white p-3">Loading...</label>
        </div>
      )}
      <div className="flex justify-center bg-white">
        <div>
          <div class="flex gap-2 px-4 py-3 w-full">
            <Link to={"/"} className="capitalize hover:font-medium">
              home
            </Link>
            /
            <Link to={"/Proccess"} className="capitalize hover:font-medium">
              Process
            </Link>
          </div>
          <div className="px-4 py-3 flex justify-between">
            <button
              className="p-3 border-2  bg-blue-500 hover:bg-blue-600 duration-500 text-white  uppercase rounded drop- px-10"
              onClick={() => {
                setShowModel(true);
                setTypeBtn("save");
                setId();
              }}
            >
              add costomer
            </button>
            <div className="">
              <input
                type="text"
                id="input"
                class="w-96 px-3 py-3 border border-slate-500 rounded "
                autocomplete="off"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center p-3">
            <table className="">
              <thead className="">
                <tr className="flex items-center gap-3 bg-gray-300 px-3 py-2">
                  <th scope="col" className="">
                    #
                  </th>
                  <th scope="col" className="w-28 flex">
                    Proccess
                  </th>
                  <th scope="col" className="w-28 flex capitalize">
                    Catagory
                  </th>
                  <th scope="col" className="w-64 flex capitalize">
                    address
                  </th>
                  <th scope="col" className="w-20 flex capitalize">
                    pincode
                  </th>
                  <th scope="col" className="w-28 flex capitalize">
                    city
                  </th>
                  <th scope="col" className="w-36 flex capitalize">
                    State
                  </th>
                  <th scope="col" className="w-36 flex capitalize">
                    office1
                  </th>
                  <th scope="col" className="w-36 flex capitalize">
                    office1
                  </th>
                  <th scope="col" className="w-36 flex capitalize">
                    MobileNo
                  </th>
                  <th scope="col" className="w-36 flex capitalize">
                    email
                  </th>
                  <th scope="col" className="w-36 flex capitalize">
                    action
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {filtered &&
                  filtered.map((doc, index) => (
                    <tr
                      key={index}
                      className="flex items-center gap-3 py-2 px-3 bg-gray-200 border-b border-gray-400"
                    >
                      <td className="">{index + 1}</td>
                      <td className="w-28 text-ellipsis overflow-hidden truncate">
                        {doc.process}
                      </td>
                      <td className="w-28 text-ellipsis overflow-hidden truncate">
                        {doc.category}
                      </td>
                      <td className="w-64 text-ellipsis overflow-hidden truncate">
                        {doc.address}
                      </td>
                      <td className="w-20">{doc.pincode}</td>
                      <td className="w-28 text-ellipsis overflow-hidden truncate">
                        {doc.city}
                      </td>
                      <td className="w-36 text-ellipsis overflow-hidden truncate">
                        {doc.state}
                      </td>
                      <td className="w-36 text-ellipsis overflow-hidden truncate">
                        {doc.office1}
                      </td>
                      <td className="w-36 text-ellipsis overflow-hidden truncate">
                        {doc.office2}
                      </td>
                      <td className="w-36 text-ellipsis overflow-hidden truncate">
                        {doc.mobile}
                      </td>
                      <td className="w-36 text-ellipsis overflow-hidden truncate">
                        {doc.email}
                      </td>
                      <td className=" p-1">
                        <div className="flex gap-5">
                          <button
                            class="bg-blue-500 text-white p-2 rounded-full text-2xl"
                            onClick={() => {
                              setShowModel(true);
                              setTypeBtn("update");
                              setId(doc._id);
                            }}
                          >
                            <BiEdit />
                          </button>
                          <button
                            class="bg-red-500 text-white p-2 rounded-full text-2xl"
                            onClick={() =>
                              dispatch(DeleteProcess(doc._id)).then(() =>
                                dispatch(AllProcess())
                              )
                            }
                          >
                            <BiTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
