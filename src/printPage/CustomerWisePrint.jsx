import { useEffect, useRef } from "react";
import ReactToPrint from "react-to-print";
import "./print.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AllCustomerWise } from "../redux/Feature/CustomerWiseSlice";

export default function CustomerWisePrint() {
  const dispatch = useDispatch();
  const location = useLocation();
  const componentRef = useRef();
  const queryParams = new URLSearchParams(location.search);

  const from = queryParams.get("from");
  const to = queryParams.get("to");
  const customer = queryParams.get("customer");

  const { CustomerWise, loading } = useSelector((state) => state.CustomerWise);

  const filteredArray = CustomerWise.filter((bill) => {
    const billDate = new Date(bill.billdate);
    const fromDateObj = from ? new Date(from) : null;
    const toDateObj = to ? new Date(to) : null;

    const isDateInRange =
      (!fromDateObj || billDate >= fromDateObj) &&
      (!toDateObj || billDate <= toDateObj);
    const isSupplierMatch = !customer || bill.customer === customer;

    return isDateInRange && isSupplierMatch;
  });

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}/${month}/${year}`;

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(AllCustomerWise());
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate, dispatch]);

  return (
    <>
      {/* Add a button to trigger the print */}
      <ReactToPrint
        trigger={() => (
          <button className="m-3 rounded-md text-white hover:bg-blue-600 duration-300 bg-blue-500 px-10 py-3">
            Print
          </button>
        )}
        content={() => componentRef.current}
      />
      {loading && (
        <div
          style={{ backgroundColor: "rgba(2, 2, 2, 0.65)" }}
          className="bg-[`rgb(0,0,0,0.65)`] absolute top-0 bottom-0 right-0 left-0 z-50 flex items-center justify-center"
        >
          <label className="bg-white p-3">Loading...</label>
        </div>
      )}
      <div className="A4Page" ref={componentRef}>
        <div className="py-2">
          <h4 className="flex justify-center uppercase font-bold">
            shree tirupati textiles
          </h4>
          <p className="flex justify-center uppercase font-semibold text-xs underline m-0">
            Customer wise Register
          </p>
          <p className="flex justify-center uppercase font-normal underline ">
            From <b className="px-1 font-bold">{from}</b> To
            <b className="px-1 font-bold">{to}</b>
          </p>
          <div className="flex px-5">
            {/* <p className="pageTxt p-0 m-0">page :</p> */}
            <p className="p-0 m-0 font-bold">Date : {currentDate}</p>
          </div>
        </div>

        <div className="border border-slate-400 border-l-0 border-r-0">
          <tr className="px-5 py-3 flex gap-2 text-xs">
            <th>FY-SR.NO</th>
            <th className="w-10">LOT NO.</th>
            <th className="w-16 flex justify-start">DATE</th>
            <th className="w-10 flex justify-center">BILL NO.</th>
            <th className="w-36  flex justify-start">SUPPLIER</th>
            <th className="w-16 flex justify-start">QUALITY</th>
            <th className="w-10">PCS</th>
            <th className="w-14">METERES</th>
            <th className="w-10">RATE</th>
            <th className="w-20">BILL AMT.</th>
            <th className="w-20">BEL AMT.</th>
          </tr>
        </div>

        <div className="">
          <h6 className="px-5 py-2 underline capitalize font-bold">
            {customer}
          </h6>
          {filteredArray?.map((item, index) => (
            <tr className=" flex px-5 text-sm" key={index}>
              <td className="w-16">
                {date.getFullYear()}
                {"-"}
                {index + 1}
              </td>
              <td className="w-12">{item?.lotno}</td>
              <td className="w-20 flex justify-start">{item?.billdate}</td>
              <td className="w-10">{item.billno}</td>
              <td className="w-40 truncate">{item?.supplier}</td>
              <td className="w-20">{item?.quality}</td>
              <td className="w-10">{item?.pcs}</td>
              <td className="w-16">{item?.meter}</td>
              <td className="w-16">{item?.rate}</td>
              <td className="w-20">
                {item?.billamt}
                {/* {item?.belamt ? item?.belamt : item?.billamt} */}
              </td>
              <td className="w-20">{item?.billamt === 0 ? 0 : item?.belamt}</td>
            </tr>
          ))}
        </div>

        <tr className=" flex px-5 text-sm my-3 border border-slate-400 border-l-0 border-r-0">
          <td className="w-16"></td>
          <td className="w-12"></td>
          <td className="w-20 flex justify-start"></td>
          <td className="w-10"></td>
          <td className="w-40 truncate"></td>
          <td className="w-16 ml-3"></td>
          <td className="w-10 font-bold">
            {filteredArray.reduce(
              (accumulator, current) => accumulator + current.pcs,
              0
            )}
          </td>
          <td className="w-16 font-bold">
            {filteredArray.reduce(
              (accumulator, current) => accumulator + current.meter,
              0
            )}
          </td>
          <td className="w-16"></td>
          <td className="w-20 ml-1 font-bold">
            {filteredArray.reduce(
              (accumulator, current) => accumulator + current.billamt,
              0
            )}
          </td>
          <td className="w-20 ml-1 font-bold">
            {filteredArray.reduce(
              (accumulator, current) => accumulator + current?.belamt,
              0
            )}
          </td>
        </tr>
      </div>
    </>
  );
}
