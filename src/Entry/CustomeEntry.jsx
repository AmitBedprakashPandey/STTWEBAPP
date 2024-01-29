import { useEffect, useState } from "react";
import "../Master/master.css";
import { Link, useFetcher } from "react-router-dom";
import { BiEdit, BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateCustomerWise,
  AllCustomerWise,
  UpdateCustomerWise,
  DeleteCustomerWise,
} from "../redux/Feature/CustomerWiseSlice";

const ShowModel = ({ id, close, btn }) => {
  const [customerData, setCustomerData] = useState();
  const dispatch = useDispatch();
  const { Customer } = useSelector((state) => state.Customer);
  const { CustomerWise } = useSelector((state) => state.CustomerWise);
  const { Supplier } = useSelector((state) => state.Supplier);
  const { Quality } = useSelector((state) => state.Quality);
  const { Process } = useSelector((state) => state.Process);
  const { Transport } = useSelector((state) => state.Transport);

  const onChangeHandlerForAll = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
    console.log(customerData);
  };

  useEffect(() => {
  
    if (id) {
      const single = CustomerWise.filter((doc) => doc._id === id);
      setCustomerData(single[0]);
    }
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  }, []);

  const save = () => {
    dispatch(CreateCustomerWise(customerData)).then(()=>{
      dispatch(AllCustomerWise());
      close();
    });
  };

  const update = () => {
    dispatch(UpdateCustomerWise(customerData)).then(()=>{
      dispatch(AllCustomerWise());
      close();
    });
  };

  return (
    <>
      <div
        class="absolute top-0 left-0 bottom-0 right-0 z-40"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.26)" }}
      ></div>
      <div class="absolute left-[33%]   w-[700px] h-auto mt-10 bg-white rounded-2xl p-5 z-50">
        <div class="text-2xl py-3">Customer Wise Entry</div>
        <div class="">
          <div class="">
            {/* Row 1 */}
            <div className="flex gap-3">
              <div class="w-full flex flex-col">
                <label for="input" class="form-labNm capitalize ">
                  Select Customer
                </label>
                <select
                  name="customer"
                  value={customerData?.customer}
                  className="p-2.5 border border-black rounded-lg"
                  onChange={onChangeHandlerForAll}
                >
                  <option selected disabled>
                    Select Customer
                  </option>
           
                </select>
              </div>
              <div class="w-full flex flex-col">
                <label for="input" class="form-labNm capitalize ">
                  Select Suplier
                </label>
                <select
                  onChange={onChangeHandlerForAll}
                  name="supplier"
                  value={customerData?.supplier}
                  className="p-2.5 border border-black rounded-lg"
                >
                  <option selected disabled>
                    Select Supplier
                  </option>
              
                </select>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex gap-3">
              <div class="w-full flex flex-col">
                <label for="input" class="form-labNm capitalize ">
                  Select Procces
                </label>
                <select
                  onChange={onChangeHandlerForAll}
                  name="process"
                  value={customerData?.process}
                  className="p-2.5 border border-black rounded-lg"
                >
                  <option selected disabled>
                    Select Process
                  </option>
             
                </select>
              </div>
              <div class="w-full flex flex-col">
                <label for="input" class="form-labNm capitalize ">
                  Select Transport
                </label>
                <select
                  onChange={onChangeHandlerForAll}
                  name="transport"
                  value={customerData?.transport}
                  className="p-2.5 border border-black rounded-lg"
                >
                  <option selected disabled>
                    Select Transport
                  </option>
                
                </select>
              </div>
            </div>
            {/* Row 3 */}
            <div class="flex gap-3">
              <div class="w-full flex flex-col">
                <label for="input" class=" capitalize ">
                  Bill Date
                </label>
                <input
                  type="text"
                  id="input"
                  name="billdate"
                  class="rounded-lg px-3 py-2 border border-black text-lg w-full placeholder:capitalize"
                  value={customerData?.billdate}
                  required
                  onChange={onChangeHandlerForAll}
                />
              </div>
              <div class="w-full flex flex-col">
                <label for="input" class=" capitalize ">
                  Bill No.
                </label>
                <input
                  type="text"
                  id="input"
                  name="billno"
                  class="rounded-lg px-3 py-2 border border-black text-lg w-full placeholder:capitalize"
                  value={customerData?.billno}
                  required
                  onChange={onChangeHandlerForAll}
                />
              </div>
              <div class="w-full flex flex-col">
                <label for="input" class=" capitalize ">
                  Lot No
                </label>
                <input
                  type="text"
                  id="input"
                  name="lotno"
                  class="rounded-lg px-3 py-2 border border-black text-lg w-full placeholder:capitalize"
                  value={customerData?.lotno}
                  required
                  onChange={onChangeHandlerForAll}
                />
              </div>

              <div class="w-full flex flex-col">
                <label for="input" class="form-labNm capitalize ">
                  Select Quality
                </label>
                <select
                  onChange={onChangeHandlerForAll}
                  name="quality"
                  value={customerData?.quality}
                  className="p-2.5 border border-black rounded-lg"
                >
                  <option selected disabled>
                    Select Quality
                  </option>
              
                </select>
              </div>
            </div>
          </div>
          {/* Row 4 */}
          <div class="">
            <div class="flex gap-3">
              <div class="w-full">
                <label for="input" class=" capitalize ">
                  pcs
                </label>
                <input
                  type="text"
                  id="input"
                  name="pcs"
                  class="rounded-lg px-3 py-2 border border-black text-lg w-full placeholder:capitalize"
                  required
                  onChange={onChangeHandlerForAll}
                  value={customerData?.pcs}
                />
              </div>
              <div class="w-full">
                <label for="input" class=" capitalize ">
                  Meter's
                </label>
                <input
                  type="text"
                  id="input"
                  name="meter"
                  class="rounded-lg px-3 py-2 border border-black text-lg w-full placeholder:capitalize"
                  required
                  onChange={onChangeHandlerForAll}
                  value={customerData?.meter}
                />
              </div>
              <div class="w-full">
                <label for="input" class=" capitalize ">
                  Rate
                </label>
                <input
                  type="text"
                  id="input"
                  name="rate"
                  class="rounded-lg px-3 py-2 border border-black text-lg w-full placeholder:capitalize"
                  required
                  onChange={onChangeHandlerForAll}
                  value={customerData?.rate}
                />
              </div>
              <div class="w-full">
                <label for="input" class=" capitalize ">
                  Bill Amt.
                </label>
                <input
                  type="text"
                  id="input"
                  name="billamt"
                  class="rounded-lg px-3 py-2 border border-black text-lg w-full placeholder:capitalize"
                  required
                  onChange={onChangeHandlerForAll}
                  value={customerData?.billamt}
                />
              </div>
            </div>
          </div>
          <h1 className="text-3xl underline py-3">Voucher Entry</h1>
          {/* Voucher Entry */}
          <div className="py-1 flex justify-between items-center">
            <div className="flex flex-col">
              <label htmlFor="">Payment Date</label>
              <input type="date" className="rounded-xl px-3 -m-20" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Payment Mode</label>
              <select
                name="mode"
                value={customerData?.mode}
                onChange={onChangeHandlerForAll}
                className="rounded-xl px-2 py-3 border border-black "
              >
                <option disabled selected>
                  Select Cash / Chaque
                </option>
                <option value={"Cash"}>Cash</option>
                <option value={"Cheque"}>cheque</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Payment Amount</label>
              <input
                type="text"
                className="rounded-xl px-2 py-3 border border-black"
              />
            </div>
            <div className="pt-5">
              <button className="w-10 h-10 bg-blue-400 flex justify-center items-center rounded-full hover:bg-blue-500 duration-100">
                <BiPlus className="text-white text-3xl" />
              </button>
            </div>
          </div>
          {/* Vouchaer Entry Table */}
          <div className="flex justify-center">
            <table>
              <thead className="flex gap-5 bg-slate-400 p-2">
                <th>#</th>
                <th>Payment Date</th>
                <th>Payment Mode</th>
                <th>Payment Amoute</th>
                <th>Action</th>
              </thead>
              <tbody>
                <tr className="flex gap-6 items-center border border-b-black p-2">
                  <td>1</td>
                  <td>Payment Date</td>
                  <td>Payment Mode</td>
                  <td>Payment Amoute</td>
                  <td>
                    <button className="bg-red-500 w-10 h-10 rounded-full flex justify-center items-center">
                      <BiMinus className="text-white text-3xl" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex  justify-end gap-3 pt-5">
            <div class="bottom-0 end-0">
              {btn == "save" ? (
                <button
                  class="bg-green-500  font-bold rounded-xl px-5 py-3 uppercase"
                  onClick={save}
                >
                  save
                </button>
              ) : (
                <button
                  class="bg-blue-500 text-white font-bold rounded-xl px-5 py-3 uppercase"
                  onClick={update}
                >
                  update
                </button>
              )}
            </div>
            <div class="bottom-0 end-0">
              <button
                class="bg-red-500 text-white font-bold rounded-xl px-5 py-3 uppercase"
                onClick={close}
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
export default function CustomerEntry() {
  const [showModel, setShowModel] = useState(false);
  const [typeBtn, setTypeBtn] = useState();
  const [id, setId] = useState();
  const dispatch = useDispatch();

  const { CustomerWise, loading, error } = useSelector(
    (state) => state.CustomerWise
  );

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    dispatch(AllCustomerWise());

    if (search.length === 0) {
      setFiltered(CustomerWise);
    } else {
      const filteredData = CustomerWise.filter((item) =>
        item.CustomerWise.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(filteredData);
    }
  }, [search, CustomerWise]);

  return (
    <>
      {showModel && (
        <ShowModel close={() => setShowModel(false)} btn={typeBtn} id={id} />
      )}
      <div className="flex justify-center bg-white">
        <div>
          <div class="flex gap-2 px-4 py-3 w-full">
            <Link to={"/"} className="capitalize hover:font-medium">
              home
            </Link>
            /
            <Link to={"/customerwise"} className="capitalize hover:font-medium">
              Customer wise
            </Link>
          </div>
          <div className="p-3 flex justify-between">
            <button
              className="p-3 bg-blue-500 text-white uppercase rounded-2xl "
              onClick={() => {
                {
                  setShowModel(true);
                  setTypeBtn("save");
                  setId();
                }
              }}
            >
              add costomer
            </button>
            <input
              type="text"
              id="input"
              class="w-full px-3 py-3 border border-black rounded-2xl md:w-80"
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
                  <th scope="w-full" className="p-1">
                    #
                  </th>
                  <th scope="w-full" className="w-40 flex">
                    Customer
                  </th>
                  <th scope="w-full" className="w-40 flex">
                    Supplier
                  </th>
                  <th scope="w-full" className="w-40 flex">
                    Procces
                  </th>
                  <th scope="w-full" className="w-28 flex">
                    Bill Date
                  </th>
                  <th scope="w-full" className="w-28 flex capitalize">
                    Bill No.
                  </th>
                  <th scope="w-full" className="w-28 flex capitalize">
                    lot No.
                  </th>
                  <th scope="w-full" className="w-28 flex capitalize">
                    Quality
                  </th>
                  <th scope="w-full" className="w-28 flex capitalize">
                    Pcs
                  </th>
                  <th scope="w-full" className="w-28 flex capitalize">
                    Meter's
                  </th>
                  <th scope="w-full" className="w-28 flex capitalize">
                    Rate
                  </th>
                  <th scope="w-full" className="w-28 flex capitalize">
                    Bill Amt.
                  </th>
                  <th scope="w-full" className="w-48 flex capitalize">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {/* {filtered?.map((doc, index) => (
                    <tr
                      key={index}
                      className="flex items-center gap-3 py-2 px-3 bg-gray-200 border-b border-gray-400"
                    >
                      <td scope="w-full" className="p-1 py-3 ">
                        {index + 1}
                      </td>
                      <td
                        scope="w-full"
                        className="w-40 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.customer}
                      </td>
                      <td
                        scope="w-full"
                        className="w-40 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.supplier}
                      </td>
                      <td
                        scope="w-full"
                        className="w-40 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.process}
                      </td>
                      <td
                        scope="w-full"
                        className="w-28 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.billdate}
                      </td>
                      <td
                        scope="w-full"
                        className="w-28 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.billno}
                      </td>
                      <td
                        scope="w-full"
                        className="w-28 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.lotno}
                      </td>
                      <td
                        scope="w-full"
                        className="w-28 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.quality}
                      </td>
                      <td
                        scope="w-full"
                        className="w-28 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.pcs}
                      </td>
                      <td
                        scope="w-full"
                        className="w-28 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.meter}
                      </td>
                      <td
                        scope="w-full"
                        className="w-28 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.rate}
                      </td>
                      <td
                        scope="w-full"
                        className="w-28 text-ellipsis overflow-hidden truncate"
                      >
                        {doc.billamt}
                      </td>
                      <td scope="w-full" className="">
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
                              dispatch(DeleteCustomerWise(doc._id));
                              dispatch(AllCustomerWise());
                            }}
                          >
                            <BiTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
