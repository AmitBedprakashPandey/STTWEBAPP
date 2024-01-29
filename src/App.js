import "./App.css";
import { Route, Routes } from "react-router-dom";
import Quality from "./Master/Quality";
import Navbar from "./components/Navbar";
import City from "./Master/City";
import Catagory from "./Master/Catagory";
import Supplier from "./Master/Supplier";
import Process from "./Master/Process";
import PrintPage from "./printPage/CustomerWisePrint";
import Home from "./Master/Home";
import Transport from "./Master/Transport";
import Customer from "./Master/Customer";
import CustomerWiseReport from "./Report/CustomerWiseReport";
import CustomerEntry from "./Entry/CustomerEntry2";
import VoucherEntry from "./Entry/VoucherEntry";
import LoginForm from "./components/LoginForm";
import CompanySetup from "./components/CompanySetup";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exct path="/login" element={<LoginForm />} />
        <Route exct path="/companysetup" element={<CompanySetup />} />
        <Route exct path="/" element={<Home />} />
        <Route exct path="/quality" element={<Quality />} />
        <Route exct path="/city" element={<City />} />
        <Route exct path="/transport" element={<Transport />} />
        <Route exct path="/process" element={<Process />} />
        <Route exct path="/customer" element={<Customer />} />
        <Route exct path="/supplier" element={<Supplier />} />
        <Route exct path="/catagory" element={<Catagory />} />
        <Route exct path="/customerwise" element={<CustomerEntry />} />
        <Route exct path="/voucherentry" element={<VoucherEntry />} />
        <Route
          exct
          path="/customerwisereport"
          element={<CustomerWiseReport />}
        />
        <Route exct path="/printpage" element={<PrintPage />} />
      </Routes>
    </>
  );
}

export default App;
