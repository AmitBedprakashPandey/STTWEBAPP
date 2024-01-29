import { configureStore } from "@reduxjs/toolkit";
import CityReducer from "./Feature/CitySlice";
import QualityReducer from "./Feature/QualitySlice";
import CustomerWiseReducer from "./Feature/CustomerWiseSlice";
import ProcessDetails from "./Feature/ProcessSlice";
import TransportDetails from "./Feature/TransportSlice";
import CustomerDetails from "./Feature/CustomerSlice";
import SupplierDetails from "./Feature/SupplierSlice";
import CatagoryDetails from "./Feature/CatagorySlice";
import StateDetail from "./Feature/StateSlice";
import CustomerWisePrint from "./Feature/CustomerWisePrintSlice";
import LoginSlice from "./Feature/LoginSlice";
export const Store = configureStore({
  reducer: {
    City: CityReducer,
    Quality: QualityReducer,
    CustomerWise: CustomerWiseReducer,
    Process: ProcessDetails,
    Transport: TransportDetails,
    Customers: CustomerDetails,
    Supplier: SupplierDetails,
    Catagory: CatagoryDetails,
    State: StateDetail,
    CustomerPrint: CustomerWisePrint,
    auth: LoginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
