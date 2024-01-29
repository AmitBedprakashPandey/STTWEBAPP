import { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function CompanySetup(params) {
  const [inputData, setInputData] = useState();

  const inputHandler = (e) => {
    let value = e.target.value;

    // Handle specific cases for mobile, office, and pincode to accept only numbers
    if (
      e.target.name === "mobile" ||
      e.target.name === "office" ||
      e.target.name === "pincode"
    ) {
      // Use regular expression to allow only numbers
      value = value.replace(/\D/g, "");
    }

    setInputData({ ...inputData, [e.target.name]: value });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  const onSubmit = () => {};
  return (
    <div className="flex justify-center">
      <div className="absolute top-0 bottom-0 z-40 bg-white w-full" />
      <form className="z-50 w-3/12">
        <div className="space-y-0">
          <div className="border-b border-gray-900/10 pb-5">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Company Setup
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Company Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={inputData?.username}
                    onChange={inputHandler}
                    autoComplete="username"
                    className="w-full px-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
                    placeholder="Enter compnay name"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Profile
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  {inputData?.profile ? (
                    <img src={inputData?.profile} alt="Profile Logo" />
                  ) : (
                    <BiUserCircle
                      className="h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                  )}
                  <input
                    type="file"
                    id="profilePhoto"
                    className="hidden"
                    name="profile"
                    value={inputData?.profile}
                    onChange={inputHandler}
                  />
                  <label
                    htmlFor="profilePhoto"
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Company Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={inputData?.email}
                    onChange={inputHandler}
                    autoComplete="email"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="office"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Office number
                </label>
                <div className="mt-2">
                  <input
                    id="office"
                    name="office"
                    type="tel"
                    maxLength={10}
                    value={inputData?.office}
                    onChange={inputHandler}
                    autoComplete="office"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mobile number
                </label>
                <div className="mt-2">
                  <input
                    id="mobile"
                    name="mobile"
                    value={inputData?.mobile}
                    onChange={inputHandler}
                    maxLength={10}
                    type="tel"
                    accept=""
                    autoComplete="mobile"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="address"
                    id="street-address"
                    value={inputData?.address}
                    onChange={inputHandler}
                    autoComplete="street-address"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    value={inputData?.city}
                    onChange={inputHandler}
                    id="city"
                    autoComplete="address-level2"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    value={inputData?.region}
                    onChange={inputHandler}
                    id="region"
                    autoComplete="address-level1"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Pincode
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="pincode"
                    value={inputData?.pincode}
                    onChange={inputHandler}
                    maxLength={6}
                    id="postal-code"
                    autoComplete="postal-code"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSubmit}
            className="rounded-md bg-indigo-600 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
