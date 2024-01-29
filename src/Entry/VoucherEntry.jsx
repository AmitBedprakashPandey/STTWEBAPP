import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { AllCustomer } from "../redux/Feature/CustomerSlice";
import { AllSupplier } from "../redux/Feature/SupplierSlice";
export default function VoucherEntry(params) {
  const [payments, setPayments] = useState([]);
  const [paymentDate, setPaymentDate] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [paymentAmt, setPaymentAmt] = useState("");
  const dispatch = useDispatch();
  const { customers } = useSelector((state) => state.Customers);
  const { Supplier } = useSelector((state) => state.Supplier);
  useEffect(()=>{
dispatch(AllCustomer())
dispatch(AllSupplier())
  },[dispatch])
  const handleAddPayment = () => {
    const newPayment = {
      paymentDate,
      paymentMode,
      paymentAmt,
    };
    setPayments([...payments, newPayment]);
    setPaymentDate("");
    setPaymentMode("");
    setPaymentAmt("");
  };
  const handleRemovePayment = (index) => {
    const newPayments = [...payments];
    newPayments.splice(index, 1);
    setPayments(newPayments);
  };

  const [customerData, setCustomerData] = useState();
  const { quality } = useSelector((state) => state.Quality);
  const { Proccess } = useSelector((state) => state.Process);
  const { transport } = useSelector((state) => state.Transport);

  const onChangeHandlerForAll = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
    console.log(customerData);
  };
var btn
  const update=()=>{}
  const save=()=>{}
  const close=()=>{}







  return (
    <>
      <div className="relative border border-black bg-white w-[600px] p-4">
        <div className="flex gap-3 items-center">
          <div class="w-full flex flex-col">
            <label for="input" class="form-labNm capitalize ">
              Date
            </label>
            <input
              type="text"
              id="input"
              name="billdate"
              placeholder="Date"
              class="rounded-lg px-3 py-2 border border-black text-lg w-full placeholder:capitalize"
              required
            />
          </div>
          <div class="w-full flex flex-col">
            <label for="input" class="form-labNm capitalize ">
              Lot no.
            </label>
            <input
              type="text"
              id="input"
              name="billdate"
              placeholder="Lot no."
              class="rounded-lg px-3 py-2 border border-black text-lg w-full placeholder:capitalize"
              required
            />
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div class="w-full flex flex-col">
            <label for="input" class="form-labNm capitalize ">
              Select customers
            </label>
            <select
              name="transport"
              className="p-2.5 border border-black rounded-lg"
            >
              <option selected disabled>
                Select Transport
              </option>
              {customers.map((doc)=>(
               <option value={doc.customer}>{doc.customer}</option>
              ))}
            </select>
          </div>
          <div class="w-full flex flex-col">
            <label for="input" class="form-labNm capitalize ">
              Select Supplier
            </label>
            <select
              name="transport"
              className="p-2.5 border border-black rounded-lg"
            >
              <option selected disabled>
                Select Supplier
              </option>
              {Supplier.map((doc)=>(
               <option value={doc.supplier}>{doc.supplier}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="relative border border-black bg-white w-[600px] p-4">
        <div className="flex justify-between items-center py-2">
          <h1 className="uppercase font-bold">Voucher Entry</h1>
          <button
            disabled={
              !paymentDate || !paymentMode || !paymentAmt ? true : false
            }
            className=" disabled:bg-red-500 bg-blue-500 rounded-full w-10 h-10 flex justify-center items-center"
            onClick={handleAddPayment}
          >
            <BiPlus className="text-3xl text-white" />
          </button>
        </div>
        <div className=" flex gap-3">
          <div class="w-full flex flex-col">
            <label for="input" class=" capitalize ">
              Payment Date
            </label>
            <input
              type="date"
              id="input"
              name="billdate"
              class="rounded-lg px-3 border border-black text-lg w-full placeholder:capitalize"
              required
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
            />
          </div>
          <div class="w-full flex flex-col">
            <label for="input" class=" capitalize ">
              Payment Mode
            </label>
            <input
              type="text"
              id="input"
              name="billdate"
              class="rounded-lg px-3 py-3 mt-1.5 border border-black text-lg w-full placeholder:capitalize"
              required
              value={paymentMode}
              placeholder="cash and chques etc."
              onChange={(e) => setPaymentMode(e.target.value)}
            />
          </div>
          <div class="w-full flex flex-col">
            <label for="input" class=" capitalize ">
              Payment Amount
            </label>
            <input
              type="text"
              id="input"
              name="billdate"
              class="rounded-lg px-3 py-3 mt-1.5 border border-black text-lg w-full placeholder:capitalize"
              required
              value={paymentAmt}
              placeholder="Amount"
              onChange={(e) => setPaymentAmt(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* <button onClick={handleInsertData}>Insert Data</button> */}

      <div className="p-4">
        <div className="flex justify-between items-center py-2">
          <h3 className="font-bold uppercase">Added Payments</h3>
        </div>
        <table>
          <thead>
            <tr className="flex gap-3 py-2 items-center">
              <th>Payment Date</th>
              <th>Payment Mode</th>
              <th>Payment Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index} className="flex gap-3 items-center">
                <td className="w-28">{payment.paymentDate}</td>
                <td className="w-28">{payment.paymentMode}</td>
                <td className="w-28">{payment.paymentAmt}</td>
                <td className="w-28 px-3">
                  <button
                    type="button"
                    className=" disabled:bg-red-500 bg-blue-500 rounded-full w-8 h-8 flex justify-center items-center"
                    onClick={() => handleRemovePayment(index)}
                  >
                    <BiMinus className="text-3xl text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>





      <>
      <div
        class="absolute top-0 left-0 bottom-0 right-0 z-40"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.26)" }}
      ></div>
      <div class="absolute left-[33%]   w-[700px] h-auto mt-10 bg-white rounded-2xl p-5 z-50">
        <div class="text-2xl py-3">customers Wise Entry</div>
        <div class="">
          <div class="">
            {/* Row 1 */}
            <div className="flex gap-3">
              <div class="w-full flex flex-col">
                <label for="input" class="form-labNm capitalize ">
                  Select customers
                </label>
                <select
                  name="customer"
                  value={customerData?.customer}
                  className="p-2.5 border border-black rounded-lg"
                  onChange={onChangeHandlerForAll}
                >
                  <option selected disabled>
                    Select customers
                  </option>
                  {customers.map((item) => (
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
                  className="p-2.5 border border-black rounded-lg"
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
                  className="p-2.5 border border-black rounded-lg"
                >
                  <option selected disabled>
                    Select Process
                  </option>
                  {Proccess.map((item) => (
                    <option value={item.proccess}>{item.proccess}</option>
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
                  className="p-2.5 border border-black rounded-lg"
                >
                  <option selected disabled>
                    Select Transport
                  </option>
                  {transport.map((item) => (
                    <option value={item.Transport}>{item.Transport}</option>
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
                  {quality.map((item) => (
                    <option value={item.QualityNm}>{item.QualityNm}</option>
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
              {btn === "save" ? (
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
    </>
  );
}
