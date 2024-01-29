import { useEffect, useState } from "react";
import "./master.css";

import { Link, useNavigate } from "react-router-dom";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  AllCustomer,
  CreateCustomer,
  DeleteCustomer,
  UpdateCustomer,
} from "../redux/Feature/CustomerSlice";

const ShowModel = ({ id, close, btn }) => {
  const [inputData, setInputData] = useState();
  const { Customer } = useSelector((state) => state.Customers);
  const { State } = useSelector((state) => state.State);
  const { city } = useSelector((state) => state.City);
  const { Catagory } = useSelector((state) => state.Catagory);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      const single = Customer.filter((doc) => doc._id === id);
      console.log(single[0]);
      setInputData(single[0]);
    }
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  }, [Customer, id]);

  const onchangeHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const save = () => {
    dispatch(CreateCustomer(inputData)).then(() => {
      dispatch(AllCustomer());
      setInputData("");
      close();
    });
  };

  const update = () => {
    dispatch(UpdateCustomer(inputData)).then(() => {
      dispatch(AllCustomer());
      setInputData("");
      close();
    });
  };
  return (
    <>
      <div
        class="absolute top-0 left-0 bottom-0 right-0 z-50 p-5 flex justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.26)" }}
      >
        <div class="w-[700px] h-[670px] mt-10 relative bg-white rounded p-5">
          <div class="text-2xl py-3 capitalize">Customer {btn}</div>
          <div class="">
            <div class="w-full">
              <label for="input" class=" capitalize ">
                Enter customer Name
              </label>
              <input
                type="text"
                id="input"
                name="customer"
                placeholder="Enter customer name"
                class="rounded px-3 py-2 border border-slate-500  text-lg w-full placeholder:capitalize"
                value={inputData?.customer}
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
                className="p-2.5 border border-slate-500 w-full  rounded"
                value={inputData?.category}
                onChange={onchangeHandler}
              >
                <option selected disabled>
                  Select Category
                </option>
                {Catagory.map((item) => (
                  <option value={item.catagory}>{item.catagory}</option>
                ))}
              </select>
            </div>

            <div class="w-full">
              <label for="input" class=" capitalize ">
                Address
              </label>
              <input
                type="text"
                id="input"
                placeholder="Enter Address"
                class="rounded px-3 py-2 border border-slate-500  text-lg w-full placeholder:capitalize"
                required
                name="address"
                onChange={onchangeHandler}
                value={inputData?.address}
              />
            </div>

            <div class="">
              <label for="input" class="form-labNm capitalize ">
                State
              </label>
              <select
                name="state"
                className="p-2.5 border border-slate-500 w-full  rounded"
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

            <div class="w-full flex justify-between gap-3">
              <div class="w-full">
                <label for="input" class="form-labNm capitalize ">
                  City
                </label>
                <select
                  name="city"
                  className="p-2.5 border border-slate-500 w-full rounded"
                  value={inputData?.city}
                  onChange={onchangeHandler}
                >
                  <option selected disabled>
                    Select City
                  </option>
                  {city.map((item) => (
                    <option value={item.city}>{item.city}</option>
                  ))}
                </select>
              </div>
              <div class="w-full ">
                <label for="input" class=" capitalize ">
                  Pincode
                </label>
                <input
                  type="text"
                  max="5"
                  name="pincode"
                  id="input"
                  class="rounded px-3 py-2 border border-slate-500  text-lg w-full placeholder:capitalize"
                  required
                  placeholder="Enter pincode"
                  onChange={onchangeHandler}
                  value={inputData?.pincode}
                />
              </div>
            </div>

            <div class="flex  item-center gap-3">
              <div class="">
                <label for="input" class=" capitalize ">
                  office Number
                </label>
                <input
                  type="tel"
                  id="input"
                  class="rounded px-3 py-2 border border-slate-500  text-lg w-full placeholder:capitalize"
                  required
                  placeholder="Enter office number"
                  name="office1"
                  value={inputData?.office1}
                  onChange={onchangeHandler}
                />
              </div>

              <div class="">
                <label for="input" class=" capitalize ">
                  office Number
                </label>
                <input
                  type="tel"
                  id="input"
                  class="rounded px-3 py-2 border border-slate-500  text-lg w-full placeholder:capitalize"
                  required
                  placeholder="Enter office number"
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
                  class="rounded px-3 py-2 border border-slate-500  text-lg w-full placeholder:capitalize"
                  required
                  placeholder="Enter mobile number"
                  name="mobile"
                  value={inputData?.mobile}
                  onChange={onchangeHandler}
                />
              </div>

              <div class="w-full">
                <label for="input" class="capitalize">
                  email
                </label>
                <input
                  type="text"
                  id="input"
                  class="rounded px-3 py-2 border border-slate-500  text-lg w-full placeholder:capitalize"
                  required
                  placeholder="Enter email "
                  name="email"
                  value={inputData?.email}
                  onChange={onchangeHandler}
                />
              </div>
            </div>
            <hr />
            <div class="flex  justify-end gap-3 py-5">
              <div class="bottom-0 end-0">
                {btn === "save" ? (
                  <button
                    class="bg-green-500 hover:bg-green-600 px-10 duration-300 text-white  rounded py-3 uppercase"
                    onClick={save}
                  >
                    save
                  </button>
                ) : (
                  <button
                    class="bg-blue-500 hover:bg-blue-600 px-10 duration-300 text-white  rounded py-3 uppercase"
                    onClick={update}
                  >
                    update
                  </button>
                )}
              </div>
              <div class="bottom-0 end-0">
                <button
                  class="bg-red-500 hover:bg-red-600 px-10 duration-300 text-white  rounded py-3 uppercase"
                  onClick={close}
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
export default function Customer() {
  const [showModel, setShowModel] = useState(false);
  const [typeBtn, setTypeBtn] = useState();
  const [id, setId] = useState();
  const { Customer, loading } = useSelector((state) => state.Customers);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(AllCustomer());
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate, dispatch]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    if (search.length === 0) {
      setFiltered(Customer);
    } else {
      const filteredData = Customer.filter((item) =>
        item.customer.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(filteredData);
    }
  }, [search, Customer]);

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
            <Link to={"/Customer"} className="capitalize hover:font-medium">
              Customer
            </Link>
          </div>
          <div className="p-3 flex justify-between">
            <button
              className="p-3 bg-blue-500 hover:bg-blue-600 px-10 duration-300 text-white uppercase rounded "
              onClick={() => {
                setShowModel(true);
                setTypeBtn("save");
              }}
            >
              add costomer
            </button>
            <input
              type="text"
              id="input"
              class="w-96 px-3 py-3 border border-slate-500  rounded "
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
                  <th className="p-1 py-3 ">
                    #
                  </th>
                  <th className="w-28 flex">
                    Customer
                  </th>
                  <th className="w-28 flex capitalize">
                    Catagory
                  </th>
                  <th className="w-64 flex capitalize">
                    address
                  </th>
                  <th className="w-28 flex capitalize">
                    pincode
                  </th>
                  <th className="w-28 flex capitalize">
                    city
                  </th>
                  <th className="w-36 flex capitalize">
                    State
                  </th>
                  <th className="w-36 flex capitalize">
                    officeNo1
                  </th>
                  <th className="w-36 flex capitalize">
                    officeNo1
                  </th>
                  <th className="w-36 flex capitalize">
                    MobileNo
                  </th>
                  <th className="w-36 flex capitalize">
                    email
                  </th>
                  <th className="w-36 flex capitalize">
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
                      <td className="p-1 py-3 ">
                        {index + 1}
                      </td>
                      <td
                       
                        className="w-28 text-ellipsis overflow-hidden truncate"
                      >
                        {doc?.customer}
                      </td>
                      <td
                       
                        className="w-28 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.category}
                      </td>
                      <td
                       
                        className="w-64 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.address}
                      </td>
                      <td
                       
                        className="w-28 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.pincode}
                      </td>
                      <td
                       
                        className="w-28 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.city}
                      </td>
                      <td
                       
                        className="w-36 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.state}
                      </td>
                      <td
                       
                        className="w-36 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.office1}
                      </td>
                      <td
                       
                        className="w-36 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.office2}
                      </td>
                      <td
                       
                        className="w-36 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.mobile}
                      </td>
                      <td
                       
                        className="w-36 text-ellipsis overflow-hidden truncate"
                      >
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
                              dispatch(DeleteCustomer(doc._id)).then(() =>
                                dispatch(AllCustomer())
                              );
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
