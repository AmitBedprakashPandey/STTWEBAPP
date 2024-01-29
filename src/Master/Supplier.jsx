import { useEffect, useState } from "react";
import "./master.css";
import { Link, useNavigate } from "react-router-dom";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  AllSupplier,
  CreateSupplier,
  DeleteSupplier,
  UpdateSupplier,
} from "../redux/Feature/SupplierSlice";

const ShowModel = ({ id, close, btn }) => {
  const [inputData, setInputData] = useState();
  const { Supplier } = useSelector((state) => state.Supplier);
  const { State } = useSelector((state) => state.State);
  const { city } = useSelector((state) => state.City);
  const { Catagory } = useSelector((state) => state.Catagory);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      const single = Supplier.filter((doc) => doc._id === id);
      console.log(single[0]);
      setInputData(single[0]);
    }
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  }, [Supplier, id]);

  const onchangeHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    console.log(inputData);
  };
  const save = () => {
    dispatch(CreateSupplier(inputData)).then(() => {
      dispatch(AllSupplier());
      close();
    });
  };
  const update = () => {
    dispatch(UpdateSupplier(inputData)).then(() => {
      dispatch(AllSupplier());
      close();
    });
  };

  return (
    <>
      <div
        onClick={close}
        class="absolute top-0 left-0 bottom-0 right-0 z-40 p-5 flex justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
      />
      <div class="absolute top-0 right-0 left-0  m-auto w-[700px] mt-14 bg-white rounded-xl p-5 z-50">
        <div class="text-2xl pb-5 uppercase">Supplier {btn}</div>

        <div class="w-full">
          <label for="input" class=" capitalize ">
            Enter Name
          </label>
          <input
            type="text"
            id="input"
            name="supplier"
            placeholder="enter supplier name"
            class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
            value={inputData?.supplier}
            required
            onChange={onchangeHandler}
          />
        </div>

        <div class="w-full">
          <label for="input" class="form-labNm capitalize ">
            Select Catagory
          </label>
          <select
            name="category"
            className="p-2.5 border border-slate-500 rounded w-full"
            value={inputData?.category}
            onChange={onchangeHandler}
          >
            <option selected disabled>
              Select Catagory
            </option>
            {Catagory.map((item) => (
              <option value={item.catagory}>{item.catagory}</option>
            ))}
          </select>
        </div>

        <div class="w-full">
          <label for="input" class=" capitalize ">
            Address 1
          </label>
          <input
            type="text"
            id="input"
            class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
            required
            name="address"
            placeholder="Enter Address"
            onChange={onchangeHandler}
            value={inputData?.address}
          />
        </div>

        <div class="flex flex-col w-full">
          <label for="input" class="form-labNm capitalize ">
            State
          </label>
          <select
            name="state"
            className="p-2.5 border border-slate-500 rounded"
            value={inputData?.state}
            onChange={onchangeHandler}
          >
            <option selected disabled>
              Select State
            </option>
            {State.map((item) => (
              <option value={item.state}>{item.state}</option>
            ))}
          </select>
        </div>

        <div class="flex  item-center gap-3">
          <div class="flex flex-col w-full">
            <label for="input" class="form-labNm capitalize ">
              City
            </label>
            <select
              name="city"
              className="p-2.5 border border-slate-500 rounded"
              value={inputData?.city}
              onChange={onchangeHandler}
            >
              <option selected disabled>
                Select City
              </option>
              {city.map((item) => (
                <option value={item.City}>{item.city}</option>
              ))}
            </select>
          </div>

          <div class="w-full">
            <label for="input" class=" capitalize ">
              Pincode
            </label>
            <input
              type="text"
              max="5"
              name="pincode"
              id="input"
              class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
              required
              onChange={onchangeHandler}
              value={inputData?.pincode}
            />
          </div>
        </div>
        <div class="flex  item-center gap-3">
          <div class="">
            <label for="input" class=" capitalize ">
              office Number 1
            </label>
            <input
              type="tel"
              id="input"
              class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
              required
              name="office1"
              value={inputData?.office1}
              onChange={onchangeHandler}
            />
          </div>

          <div class="">
            <label for="input" class=" capitalize ">
              office Number 2
            </label>
            <input
              type="tel"
              id="input"
              class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
              required
              name="office2"
              value={inputData?.office2}
              onChange={onchangeHandler}
            />
          </div>
        </div>
        <div class="flex  item-center gap-3">
          <div class="w-full">
            <label for="input" class=" capitalize ">
              mobile number
            </label>
            <input
              type="tel"
              id="input"
              class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
              required
              name="mobile"
              value={inputData?.mobile}
              onChange={onchangeHandler}
            />
          </div>

          <div class="w-full">
            <label for="input" class="">
              email
            </label>
            <input
              type="text"
              id="input"
              class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
              required
              name="email"
              value={inputData?.email}
              onChange={onchangeHandler}
            />
          </div>
        </div>

        <div class="flex  justify-end gap-3 pt-5">
          <div class="bottom-0 end-0">
            {btn === "save" ? (
              <button
                class="bg-green-500 hover:bg-green-600 text-white duration-300 rounded px-10 py-3 uppercase"
                onClick={save}
              >
                save
              </button>
            ) : (
              <button
                class="bg-blue-500 hover:bg-blue-600 px-10 duration-300 text-white rounded py-3 uppercase"
                onClick={update}
              >
                update
              </button>
            )}
          </div>
          <div class="bottom-0 end-0">
            <button
              class="bg-red-500 hover:bg-red-600 px-10 duration-300 text-white rounded py-3 uppercase"
              onClick={close}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default function Supplier() {
  const [showModel, setShowModel] = useState(false);
  const [typeBtn, setTypeBtn] = useState();
  const [id, setId] = useState();
  const { Supplier, loading } = useSelector((state) => state.Supplier);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(AllSupplier());
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate, dispatch]);

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    if (search.length === 0) {
      setFiltered(Supplier);
    } else {
      const filteredData = Supplier.filter((item) =>
        item.supplier.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(filteredData);
    }
  }, [search, Supplier]);

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
      {showModel && (
        <ShowModel id={id} close={() => setShowModel(false)} btn={typeBtn} />
      )}
      <div className="flex justify-center bg-white">
        <div>
          <div class="flex gap-2 px-4 py-3 w-full">
            <Link to={"/"} className="capitalize hover:font-medium">
              home
            </Link>
            /
            <Link to={"/supplier"} className="capitalize hover:font-medium">
              Supplier
            </Link>
          </div>
          <div className="p-3 flex justify-between">
            <button
              className="p-3 bg-blue-500 hover:bg-blue-600 px-10 duration-300 text-white uppercase rounded"
              onClick={() => {
                setShowModel(true);
                setTypeBtn("save");
                setId();
              }}
            >
              add costomer
            </button>
            <input
              type="text"
              id="input"
              class="w-96 px-3 py-3 border border-slate-500 rounded md:w-80"
              autocomplete="off"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex justify-center p-3">
            <table className="">
              <thead className="">
                <tr className="flex items-center gap-3 bg-gray-300 px-3 py-2">
                  <th scope="w-full" className="p-1 py-3 ">
                    #
                  </th>
                  <th scope="w-full" className="w-28 flex">
                    Supplier
                  </th>
                  <th scope="w-full" className="w-28 flex capitalize">
                    Catagory
                  </th>
                  <th scope="w-full" className="w-64 flex capitalize">
                    address
                  </th>
                  <th scope="w-full" className="w-28 flex capitalize">
                    pincode
                  </th>
                  <th scope="w-full" className="w-28 flex capitalize">
                    City
                  </th>
                  <th scope="w-full" className="w-36 flex capitalize">
                    State
                  </th>
                  <th scope="w-full" className="w-36 flex capitalize">
                    officeNo1
                  </th>
                  <th scope="w-full" className="w-36 flex capitalize">
                    officeNo1
                  </th>
                  <th scope="w-full" className="w-36 flex capitalize">
                    MobileNo
                  </th>
                  <th scope="w-full" className="w-36 flex capitalize">
                    email
                  </th>
                  <th scope="w-full" className="w-36 flex capitalize">
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
                      <td className="p-1 py-3 ">{index + 1}</td>
                      <td className="w-28 text-ellipsis overflow-hidden truncate">
                        {doc.supplier}
                      </td>
                      <td className="w-28 text-ellipsis overflow-hidden truncate">
                        {doc.category}
                      </td>
                      <td className="w-64 text-ellipsis overflow-hidden truncate">
                        {doc.address}
                      </td>
                      <td className="w-28 text-ellipsis overflow-hidden truncate">
                        {doc.pincode}
                      </td>
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
                      <td className=" p-1 th4">
                        <div className="flex gap-3">
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
                            onClick={() => {
                              dispatch(DeleteSupplier(doc._id));
                              dispatch(AllSupplier());
                            }}
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
