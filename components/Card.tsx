import React, { useState } from "react";
import { Forecast, Sundata } from "utils/types";
import SmallGroup from "./SmallGroup";

interface CardType {
      data: [Forecast];
}

const Card: React.FC<CardType> = ({ data }) => {
      const [show, setShow] = useState(false);

      return (
            <div className="mx-auto p-4 bg-blue-light min-h-screen flex justify-center">
                  {data[0].hasOwnProperty("location") === true ? (
                        <div className="flex flex-wrap">
                              <div className="w-full   px-2">
                                    <div className="bg-black/40 motion-safe:animate-zoomy  text-white relative min-w-0 break-words rounded-xl  overflow-hidden shadow-md mb-4 w-full ">
                                          <div className="px-6 py-6 relative">
                                                <div className="flex mb-4 justify-between items-center">
                                                      <div>
                                                         
                                                            <h5 className="mb-0 font-medium text-xl">
                                                                  {
                                                                        data[0]
                                                                              .location
                                                                              .name
                                                                  }
                                                            </h5>
                                                            <h6 className="mb-0">
                                                                  {
                                                                        data[0]
                                                                              .location
                                                                              .localtime
                                                                  }
                                                            </h6>
                                                            <small>
                                                                  {
                                                                        data[0]
                                                                              .current
                                                                              .condition
                                                                              .text
                                                                  }
                                                            </small>
                                                      </div>
                                                      <div className="text-right">
                                                            <h3 className="font-bold text-4xl mb-0">
                                                                  <span>
                                                                        {localStorage.getItem(
                                                                              "unit"
                                                                        ) ===
                                                                        "c"
                                                                              ? data[0]
                                                                                      .current[
                                                                                      "temp_c"
                                                                                ] +
                                                                                "°C"
                                                                              : data[0]
                                                                                      .current[
                                                                                      "temp_f"
                                                                                ] +
                                                                                "°F"}
                                                                  </span>
                                                            </h3>
                                                      </div>
                                                </div>
                                                <div className="block sm:flex justify-between items-center flex-wrap">
                                                      <div className="w-full sm:w-1/2">
                                                            <div className="flex mb-2 justify-between items-center">
                                                                  <span>
                                                                        Visibility
                                                                  </span>
                                                                  <small className="px-2 inline-block">
                                                                        {data[0]
                                                                              .current[
                                                                              "vis_km"
                                                                        ] +
                                                                              " km"}
                                                                  </small>
                                                            </div>
                                                      </div>
                                                      <div className="w-full sm:w-1/2">
                                                            <div className="flex mb-2 justify-between items-center">
                                                                  <span>
                                                                        Feels
                                                                        like
                                                                  </span>
                                                                  <small className="px-2 inline-block">
                                                                        {localStorage.getItem(
                                                                              "unit"
                                                                        ) ===
                                                                        "c"
                                                                              ? data[0]
                                                                                      .current[
                                                                                      "feelslike_c"
                                                                                ] +
                                                                                "°C"
                                                                              : data[0]
                                                                                      .current[
                                                                                      "feelslike_f"
                                                                                ] +
                                                                                "°F"}
                                                                  </small>
                                                            </div>
                                                      </div>
                                                      <div className="w-full sm:w-1/2">
                                                            <div className="flex mb-2 justify-between items-center">
                                                                  <span>
                                                                        Wind
                                                                  </span>
                                                                  <small className="px-2 inline-block">
                                                                        {data[0]
                                                                              .current[
                                                                              "wind_mph"
                                                                        ] +
                                                                              " mph"}
                                                                  </small>
                                                            </div>
                                                      </div>
                                                      <div className="w-full sm:w-1/2">
                                                            <div className="flex mb-2 justify-between items-center">
                                                                  <span>
                                                                        Pressure
                                                                  </span>
                                                                  <small className="px-2 inline-block">
                                                                        {data[0]
                                                                              .current[
                                                                              "pressure_in"
                                                                        ] +
                                                                              " in"}
                                                                  </small>
                                                            </div>
                                                      </div>
                                                      <div className="w-full sm:w-1/2">
                                                            <div className="flex mb-2 justify-between items-center">
                                                                  <span>
                                                                        Humidity
                                                                  </span>
                                                                  <small className="px-2 inline-block">
                                                                        {
                                                                              data[0]
                                                                                    .current[
                                                                                    "humidity"
                                                                              ]
                                                                        }
                                                                  </small>
                                                            </div>
                                                      </div>
                                                      <div className="w-full sm:w-1/2">
                                                            <div className="flex mb-2 justify-between items-center">
                                                                  <span>
                                                                        Country
                                                                  </span>
                                                                  <small className="px-2 inline-block">
                                                                        {
                                                                              data[0]
                                                                                    .location[
                                                                                    "country"
                                                                              ]
                                                                        }
                                                                  </small>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="divider table mx-2 text-center bg-transparent whitespace-nowrap">
                                                <span className="inline-block px-3">
                                                      <small className="font-bold  text-md">
                                                            Forecast
                                                      </small>
                                                </span>
                                          </div>
                                          <div className="px-6 py-6 relative">
                                                <div className="text-center flex-wrap    sm:gap-3 md:gap-4 lg:gap-7 lg:px-9 lg:py-6    justify-center items-center flex md:grid md:grid-cols-5">
                                                      {data[0].forecast.forecastday.map(
                                                            (
                                                                  v: Sundata,
                                                                  i: number
                                                            ) => {
                                                                  if (i < 5) {
                                                                        return (
                                                                              <div className="flex  flex-wrap sm:p-5 ">
                                                                                    <SmallGroup
                                                                                          data={
                                                                                                v
                                                                                          }
                                                                                    />
                                                                              </div>
                                                                        );
                                                                  } else if (
                                                                        i >=
                                                                              5 &&
                                                                        show ===
                                                                              true
                                                                  ) {
                                                                        return (
                                                                              <div className="flex  flex-wrap sm:p-5 ">
                                                                                    <SmallGroup
                                                                                          data={
                                                                                                v
                                                                                          }
                                                                                    />
                                                                              </div>
                                                                        );
                                                                  }
                                                            }
                                                      )}{" "}
                                                </div>

                                                {/* lollll */}
                                                {show === true ? (
                                                      ""
                                                ) : (
                                                      <button
                                                            onClick={() => {
                                                                  setShow(true);
                                                            }}
                                                            className="cursor-pointer"
                                                      >
                                                            Show More...
                                                      </button>
                                                )}
                                          </div>
                                    </div>
                              </div>
                        </div>
                  ) : (
                        "Loading..."
                  )}
            </div>
      );
};

export default Card;
