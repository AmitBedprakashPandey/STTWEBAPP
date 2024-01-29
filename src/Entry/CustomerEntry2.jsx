import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus, BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { AllCustomer } from "../redux/Feature/CustomerSlice";
import { AllSupplier } from "../redux/Feature/SupplierSlice";
import { AllProcess } from "../redux/Feature/ProcessSlice";
import { AllTransport } from "../redux/Feature/TransportSlice";
import { AllQuality } from "../redux/Feature/QualitySlice";
import {
  AllCustomerWise,
  CreateCustomerWise,
  DeleteCustomerWise,
  UpdateCustomerWise,
} from "../redux/Feature/CustomerWiseSlice";
import { Link, useNavigate } from "react-router-dom";

const ShowModel = ({ id, close, btn }) => {
  const [customerData, setCustomerData] = useState();
  const [payments, setPayments] = useState([]);

  const [paymentDate, setPaymentDate] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [paymentAmt, setPaymentAmt] = useState("");

  const { CustomerWise } = useSelector((state) => state.CustomerWise);
  const { Customer } = useSelector((state) => state.Customers);
  const { Supplier } = useSelector((state) => state.Supplier);
  const { Quality } = useSelector((state) => state.Quality);
  const { Process } = useSelector((state) => state.Process);
  const { Transport } = useSelector((state) => state.Transport);

  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const dispatch = useDispatch();

  const onChangeHandlerForAll = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (btn === "save") {
      setCustomerData({ ...customerData, date: getTodayDate() });
    }
    if (id) {
      const single = CustomerWise.filter((doc) => doc._id === id);
      setCustomerData(single[0]);
      setPayments(single[0].voucher);
    }
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  }, [CustomerWise, btn, id, customerData]);

  const handleAddPayment = () => {
    const newPayment = {
      paymentDate,
      paymentMode,
      paymentAmt,
    };

    setPayments([...payments, newPayment]);

    if (!customerData.belamt) {
      setCustomerData({
        ...customerData,
        belamt: customerData.billamt - paymentAmt,
      });
    } else {
      setCustomerData({
        ...customerData,
        belamt: customerData.belamt - paymentAmt,
      });
    }
    setPaymentDate("");
    setPaymentMode("");
    setPaymentAmt("");
  };

  const handleRemovePayment = (index) => {
    const newPayments = [...payments];
    newPayments.splice(index, 1);

    var billamt = parseFloat(customerData.billamt); // Convert billamt to a float
    const listamt = parseFloat(payments[index].paymentAmt); // Convert listamt to a float
    var belamt = parseFloat(customerData.belamt); // Convert listamt to a float
    billamt += listamt;
    belamt += listamt;

    if (!customerData.belamt) {
      setCustomerData({ ...customerData, belamt: billamt - listamt });
    } else {
      setCustomerData({ ...customerData, belamt: belamt - paymentAmt });
    }
    setPayments(newPayments);
  };

  const save = () => {
    dispatch(CreateCustomerWise({ ...customerData, voucher: payments })).then(
      () => {
        dispatch(AllCustomerWise());
        close();
      }
    );
  };
  const update = () => {
    dispatch(UpdateCustomerWise({ ...customerData, voucher: payments })).then(
      () => {
        dispatch(AllCustomerWise());
        close();
      }
    );
  };
  return (
    <>
      <div
        class="absolute top-0 left-0 bottom-0 right-0 z-50"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
      ></div>
      <div class="absolute top-24 left-0 right-0 m-auto  w-[700px] bg-white rounded-3xl px-10 py-5 z-50">
        <div class="text-2xl py-3">Customer Wise Entry</div>
        <div class="">
          <div class="">
            <div className="flex gap-3">
              <div class="w-full flex flex-col">
                <label for="input" class="form-labNm capitalize ">
                  Current Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={customerData?.date}
                  onChange={(e) => {
                    onChangeHandlerForAll(e);
                  }}
                  className="p-2.5 border border-slate-500 rounded"
                />
              </div>
            </div>
            {/* Row 1 */}
            <div className="flex gap-3">
              <div class="w-full flex flex-col">
                <label for="input" class="form-labNm capitalize ">
                  Select Customer
                </label>
                <select
                  name="customer"
                  value={customerData?.customer}
                  className="p-2.5 border border-slate-500 rounded"
                  onChange={onChangeHandlerForAll}
                >
                  <option selected disabled>
                    Select Customer
                  </option>
                  {Customer.map((item) => (
                    <option value={item.customer}>{item.customer}</option>
                  ))}
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
                  className="p-2.5 border border-slate-500 rounded"
                >
                  <option selected disabled>
                    Select Supplier
                  </option>
                  {Supplier.map((item) => (
                    <option value={item.supplier}>{item.supplier}</option>
                  ))}
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
                  className="p-2.5 border border-slate-500 rounded"
                >
                  <option selected disabled>
                    Select Process
                  </option>
                  {Process.map((item) => (
                    <option value={item.process}>{item.process}</option>
                  ))}
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
                  className="p-2.5 border border-slate-500 rounded"
                >
                  <option selected disabled>
                    Select Transport
                  </option>
                  {Transport.map((item) => (
                    <option value={item.transport}>{item.transport}</option>
                  ))}
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
                  type="date"
                  id="input"
                  name="billdate"
                  className="p-2.5 border border-slate-500 rounded"
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
                  type="tel"
                  id="input"
                  name="billno"
                  class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
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
                  type="tel"
                  id="input"
                  name="lotno"
                  class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
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
                  name="quality"
                  value={customerData?.quality}
                  onChange={onChangeHandlerForAll}
                  className="p-2.5 border border-slate-500 rounded"
                >
                  <option selected disabled>
                    Select Quality
                  </option>
                  {Quality.map((item) => (
                    <option value={item.quality}>{item.quality}</option>
                  ))}
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
                  type="tel"
                  id="input"
                  name="pcs"
                  class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
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
                  type="tel"
                  id="input"
                  name="meter"
                  class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
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
                  type="tel"
                  id="input"
                  name="rate"
                  class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
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
                  type="tel"
                  id="input"
                  name="billamt"
                  class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
                  required
                  onChange={onChangeHandlerForAll}
                  value={customerData?.billamt}
                />
              </div>
              <div class="w-full">
                <label for="input" class=" capitalize ">
                  Bel. Amt.
                </label>
                <input
                  type="tel"
                  id="input"
                  name="belamt"
                  class="rounded px-3 py-2 border border-slate-500 text-lg w-full placeholder:capitalize"
                  required
                  onChange={onChangeHandlerForAll}
                  value={customerData?.belamt}
                />
              </div>
            </div>
          </div>
          <h1 className="text-3xl underline uppercase py-3">Voucher Entry</h1>
          {/* Voucher Entry */}
          <div className="py-1 flex justify-center gap-3 items-center">
            <div className="flex flex-col">
              <label htmlFor="">Payment Date</label>
              <input
                type="date"
                name="paymentDate"
                className="p-2.5 border border-slate-500 rounded"
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Payment Mode</label>
              <select
                className="rounded px-2 py-3 border border-slate-500 "
                name="paymentMode"
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value)}
              >
                <option selected disabled value={""}>
                  Select Cash / Chaque
                </option>
                <option value={"Cash"}>Cash</option>
                <option value={"Cheque"}>cheque</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Payment Amount</label>
              <input
                name="paymentAmt"
                type="tel"
                className="rounded px-2 py-3 border border-slate-500"
                value={paymentAmt}
                onChange={(e) => setPaymentAmt(e.target.value)}
              />
            </div>
            <div className="pt-5">
              <button
                disabled={
                  !paymentDate || !paymentMode || !paymentAmt ? true : false
                }
                onClick={handleAddPayment}
                className="w-10 h-10 disabled:bg-blue-800 bg-blue-500 flex justify-center items-center cursor-not-allowed rounded-full hover:bg-blue-700 duration-100"
              >
                <BiPlus className="text-white text-3xl" />
              </button>
            </div>
          </div>
          {/* Vouchaer Entry Table */}
          <div className="w-full">
            <table className="w-full">
              <thead className="flex gap-5 bg-slate-400 p-2">
                <th>#</th>
                <th>Payment Date</th>
                <th>Payment Mode</th>
                <th>Payment Amoute</th>
                <th>Action</th>
              </thead>
              <div className="w-full h-[100px] overflow-y-auto overflow-x-hidden">
                {payments?.map((payment, index) => (
                  <tr className="flex gap-6 items-center border border-b-black p-2">
                    <td className=" w-2">{index + 1}</td>
                    <td className="w-24">{payment.paymentDate}</td>
                    <td className="w-28">{payment.paymentMode}</td>
                    <td className="w-32">{payment.paymentAmt}</td>
                    <td>
                      <button
                        className="bg-red-500 w-10 h-10 rounded-full flex justify-center items-center"
                        onClick={() => handleRemovePayment(index)}
                      >
                        <BiMinus className="text-white text-3xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </div>
            </table>
          </div>
          <div class="flex  justify-end gap-3 pt-5">
            <div class="bottom-0 end-0">
              {btn === "save" ? (
                <button
                  class="bg-green-500 hover:bg-green-600 px-10 duration-300 rounded py-3 uppercase"
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
      </div>
    </>
  );
};
export default function CustomerEntry2(params) {
  const [openModel, setOpenModel] = useState(false);
  const dispatch = useDispatch();
  const [typeBtn, setTypeBtn] = useState();
  const [id, setId] = useState();
  useEffect(() => {
    dispatch(AllCustomer());
    dispatch(AllSupplier());
    dispatch(AllProcess());
    dispatch(AllTransport());
    dispatch(AllQuality());
    dispatch(AllCustomerWise());
  }, [dispatch]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);
  const { CustomerWise, loading } = useSelector((state) => state.CustomerWise);

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
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
      {loading && (
        <div
          style={{ backgroundColor: "rgba(2, 2, 2, 0.5)" }}
          className="bg-[`rgb(0,0,0,0.65)`] absolute top-0 bottom-0 right-0 left-0 z-50 flex items-center justify-center"
        >
          <label className="bg-white p-3">Loading...</label>
        </div>
      )}
      {openModel && (
        <ShowModel
          close={() => setOpenModel(!openModel)}
          btn={typeBtn}
          id={id}
        />
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
              className="px-10 py-3 bg-blue-500 hover:bg-blue-600 duration-300 text-white uppercase rounded "
              onClick={() => {
                setOpenModel(true);
                setTypeBtn("save");
                setId();
              }}
            >
              add costomer
            </button>
            <input
              type="tel"
              id="input"
              class="w-96 px-3 py-3 border border-slate-500 rounded"
              autocomplete="off"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex justify-center p-3">
            <table className="">
              <thead className="">
                <tr className="flex items-center gap-3 bg-gray-200 px-3 py-2">
                  <th className="p-1">#</th>
                  <th className="w-40 flex">Customer</th>
                  <th className="w-40 flex">Supplier</th>
                  <th className="w-40 flex">Procces</th>
                  <th className="w-28 flex">Bill Date</th>
                  <th className="w-28 flex capitalize">Bill No.</th>
                  <th className="w-28 flex capitalize">lot No.</th>
                  <th className="w-28 flex capitalize">Quality</th>
                  <th className="w-28 flex capitalize">Pcs</th>
                  <th className="w-28 flex capitalize">Meter's</th>
                  <th className="w-28 flex capitalize">Rate</th>
                  <th className="w-28 flex capitalize">Bill Amt.</th>
                  <th className="w-48 flex capitalize">Action</th>
                </tr>
              </thead>
              <tbody className="">
                {filtered &&
                  filtered?.map((doc, index) => (
                    <tr
                      key={index}
                      className="flex items-center gap-3 py-2 px-3 bg-gray-100"
                    >
                      <td className="p-1 py-3 ">{index + 1}</td>
                      <td className="w-40 text-ellipsis overflow-hidden truncate">
                        {doc.customer}
                      </td>
                      <td className="w-40 text-ellipsis overflow-hidden truncate">
                        {doc.supplier}
                      </td>
                      <td className="w-40 text-ellipsis overflow-hidden truncate">
                        {doc.process}
                      </td>
                      <td className="w-28 text-ellipsis overflow-hidden truncate">
                        {doc.billdate}
                      </td>
                      <td className="w-28 text-ellipsis overflow-hidden truncate">
                        {doc.billno}
                      </td>
                      <td className="w-28 text-ellipsis overflow-hidden truncate">
                        {doc.lotno}
                      </td>
                      <td className="w-28 text-ellipsis overflow-hidden truncate">
                        {doc.quality}
                      </td>
                      <td className="w-28 text-ellipsis overflow-hidden truncate">
                        {doc.pcs}
                      </td>
                      <td className="w-28 text-ellipsis overflow-hidden truncate">
                        {doc.meter}
                      </td>
                      <td className="w-28 text-ellipsis overflow-hidden truncate">
                        {doc.rate}
                      </td>
                      <td className="w-28 text-ellipsis overflow-hidden truncate">
                        {doc.billamt}
                      </td>
                      <td className="">
                        <div className="flex gap-3">
                          <button
                            class="bg-blue-500 text-white p-2 rounded-full text-2xl"
                            onClick={() => {
                              setOpenModel(true);
                              setTypeBtn("update");
                              setId(doc._id);
                            }}
                          >
                            <BiEdit />
                          </button>
                          <button
                            class="bg-red-500 text-white p-2 rounded-full text-2xl"
                            onClick={() => {
                              dispatch(DeleteCustomerWise(doc._id)).then(() => {
                                dispatch(AllCustomerWise());
                              });
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
