import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { AllSupplier } from "../redux/Feature/SupplierSlice";

import { AllCustomer } from "../redux/Feature/CustomerSlice";

const ShowModel = ({ close }) => {
  const [selectedCustomer, setSelectedCustomer] = useState();
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const dispatch = useDispatch();

  const { Customer } = useSelector((state) => state.Customers);

  useEffect(() => {
    dispatch(AllSupplier());
    dispatch(AllCustomer());
  }, [dispatch]);
  const viewBtn = async () => {
    const url = `/printpage?from=${fromDate}&to=${toDate}&customer=${selectedCustomer}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div
        onClick={close}
        class="absolute top-0 left-0 bottom-0 right-0 z-40"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
      ></div>
      <div class="absolute left-0 top-24 right-0 m-auto w-[400px] bg-white rounded-lg p-5 z-50">
        <div className="flex justify-center uppercase py-3">
          <h4>Report Form</h4>
        </div>
        <div class="flex flex-col">
          <label for="input" class="form-labNm capitalize ">
            Select Customer
          </label>
          <select
            name="supplier"
            className="p-2.5 border border-black rounded-lg"
            value={selectedCustomer}
            onChange={(e) => setSelectedCustomer(e.target.value)}
          >
            <option selected disabled>
              Select Customer
            </option>
            {Customer.map((item) => (
              <option value={item.customer}>{item.customer}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label for="input" class="form-labNm text-capitalize ">
            From Date
          </label>
          <input
            type="date"
            className="p-2.5 border border-black rounded-lg"
            name="fromDate"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label for="input" class="form-labNm text-capitalize ">
            To Date
          </label>
          <input
            type="date"
            className="p-2.5 border border-black rounded-lg"
            name="toDate"
            accept="dd/mm/yyyy"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-5 mt-3">
          <button
            className="bg-blue-500 hover:bg-blue-600 duration-300 disabled:cursor-not-allowed px-10 py-3 rounded uppercase text-white disabled:bg-blue-700"
            onClick={viewBtn}
            disabled={selectedCustomer && fromDate && toDate ? false : true}
          >
            view
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 duration-300 px-10 py-3 rounded uppercase text-white"
            onClick={close}
          >
            close
          </button>
        </div>
      </div>
    </>
  );
};
export default function CustomerWiseReport() {
  const [showModel, setShowModel] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModel(true)}
        className="bg-blue-500 hover:bg-blue-600 duration-300 m-5 px-16 py-3 uppercase text-white "
      >
        report
      </button>

      {showModel && <ShowModel close={() => setShowModel(false)} />}
    </>
  );
}
