import Axios from "axios";
import { useEffect, useState } from "react";
import { Forecast, Error, Current } from "../../utils/types/index";
import Card from "components/Card";
import { GrLocation } from "react-icons/gr";
import { RiCelsiusLine } from "react-icons/ri";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

export default function Home() {
      const [search, setSearch] = useState("");
      const [data, setData] = useState({});
      const [current, setCurrent] = useState({});
      const [loading, setLoading] = useState(false);
      const [unit, setUnit] = useState("c"); //c for deg c

      //       "id": 1269495,
      // "name": "Lond",
      // "region": "Sudur-Mulasysla",
      // "country": "Iceland",
      // "lat": 64.83,
      // "lon": -13.83,
      // "url": "lond-sudur-mulasysla-iceland"

      useEffect(() => {
            if (localStorage.getItem("unit") === "f") {
                  setUnit("f");
            } else {
                  setUnit("c");
                  localStorage.setItem("unit", "c");
            }
            getCurrentData();
      }, []);

      const getCurrentData = async () => {
            // http://api.weatherapi.com/v1/current.json?key=1add81b5910249f9b32180547231602&q=Asia/Calcutta&aqi=no
            setLoading(true);
            const tem = await Axios.get(
                  `https://api.weatherapi.com/v1/forecast.json`,
                  {
                        params: {
                              key: "1add81b5910249f9b32180547231602",
                              q: Intl.DateTimeFormat().resolvedOptions()
                                    .timeZone,
                              days: 10,
                        },
                        headers: {
                              "Access-Control-Allow-Origin": "*",
                        },
                  }
            )
                  .then((response: { data: Current }) => {
                        setCurrent(response.data);
                        setData(response.data);
                  })
                  .catch((error:Error) => {
                        console.log(error.message);
                        // alert(JSON.stringify(error));
                        toast.error(error.message,   {
                              position: "bottom-center",
                              autoClose: 5000,
                              hideProgressBar:
                                    false,
                              closeOnClick:
                                    true,
                              pauseOnHover:
                                    true,
                              draggable:
                                    true,
                              progress: undefined,
                              theme: "dark",
                        });
                  });
            console.log(current);
            setLoading(false);
      };

      const getPlaceData = async (searchQuery: string) => {
            setLoading(true);
            const tem = await Axios.get(
                  `https://api.weatherapi.com/v1/forecast.json`,
                  {
                        params: {
                              key: "1add81b5910249f9b32180547231602",
                              q: searchQuery,
                              days: 10,
                        },
                        headers: {
                              "Access-Control-Allow-Origin": "*",
                        },
                  }
            )
                  .then(function (response: { data: Forecast }) {
                        setData(response.data);
                        console.log(response.data);
                  })
                  .catch(function (error: Error) {
                        console.error(error.message);
                        // alert(JSON.stringify(error));
                        // error;
                        toast.error(error.message, {
                              position: "bottom-center",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "dark",
                        });
                  });
            setLoading(false);
      };

      return (
            <div>
                  <nav className="bg-blue border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
                        <div className="container flex flex-wrap items-center justify-between mx-auto">
                              <a href="#" className="flex items-center">
                                    <img
                                          src={
                                                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                                          }
                                          className="h-6 mr-3 sm:h-9"
                                          alt="Weather Logo"
                                    />
                                    <span className="self-center text-xl font-semibold whitespace-nowrap ">
                                          Weather App
                                    </span>
                              </a>
                              <div className="flex md:order-2">
                                    <div className="relative  md:block">
                                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg
                                                      className="w-5 h-5 text-gray-500"
                                                      aria-hidden="true"
                                                      fill="currentColor"
                                                      viewBox="0 0 20 20"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                >
                                                      <path
                                                            fill-rule="evenodd"
                                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                            clip-rule="evenodd"
                                                      ></path>
                                                </svg>
                                                <span className="sr-only">
                                                      Search icon
                                                </span>
                                          </div>
                                          <input
                                                onChange={(e) =>
                                                      setSearch(e.target.value)
                                                }
                                                value={search}
                                                onKeyPress={(e) => {
                                                      if (e.key == "Enter") {
                                                            if (search != "") {
                                                                  getPlaceData(
                                                                        search
                                                                  );
                                                                  setSearch("");
                                                            } else {
                                                                  toast.error(
                                                                        "Please enter the city name",
                                                                        {
                                                                              position: "top-right",
                                                                              autoClose: 5000,
                                                                              hideProgressBar:
                                                                                    false,
                                                                              closeOnClick:
                                                                                    true,
                                                                              pauseOnHover:
                                                                                    true,
                                                                              draggable:
                                                                                    true,
                                                                              progress: undefined,
                                                                              theme: "dark",
                                                                        }
                                                                  );
                                                                  // alert();
                                                            }
                                                      }
                                                }}
                                                type="text"
                                                id="search-navbar"
                                                className="block w-full p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Search..."
                                          />
                                    </div>
                              </div>
                              <div
                                    className="items-center  justify-between  flex w-auto order-1"
                                    id="navbar-search"
                              >
                                    <ul className="flex w-fit   p-2   rounded-lg bg-gray-50 flex-row space-x-8  text-sm font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                          <li className="cursor-pointer md:px-10 mt-2">
                                                <GrLocation
                                                      onClick={() =>
                                                            getCurrentData()
                                                      }
                                                      size={"24"}
                                                />
                                          </li>
                                          <li className="cursor-pointer md:px-14 mt-2">
                                                {unit === "f" ? (
                                                      <RiCelsiusLine
                                                            onClick={() => {
                                                                  setUnit("c");
                                                                  localStorage.setItem(
                                                                        "unit",
                                                                        "c"
                                                                  );
                                                            }}
                                                            size={"24"}
                                                      />
                                                ) : (
                                                      <TbTemperatureFahrenheit
                                                            onClick={() => {
                                                                  setUnit("f");
                                                                  localStorage.setItem(
                                                                        "unit",
                                                                        "f"
                                                                  );
                                                            }}
                                                            size={"24"}
                                                      />
                                                )}
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  </nav>
                  <Card data={[data]} />
                  <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                  />
            </div>
      );
}
