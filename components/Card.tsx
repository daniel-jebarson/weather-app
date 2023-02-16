import { useState } from "react";

export default function Card() {
      const [show, setShow] = useState(false);
      return (
            <div className="mx-auto p-4 bg-blue-light h-screen flex justify-center">
                  <div className="flex flex-wrap">
                        <div className="w-full   px-2">
                              <div className="bg-black  text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full bg-white dark:bg-gray">
                                    <div className="px-6 py-6 relative">
                                          <div className="flex mb-4 justify-between items-center">
                                                <div>
                                                      <h5 className="mb-0 font-medium text-xl">
                                                            Delhi,IN
                                                      </h5>
                                                      <h6 className="mb-0">
                                                            April 04 2021
                                                      </h6>
                                                      <small>Cloudy</small>
                                                </div>
                                                <div className="text-right">
                                                      <h3 className="font-bold text-4xl mb-0">
                                                            <span>39&deg;</span>
                                                      </h3>
                                                </div>
                                          </div>
                                          <div className="block sm:flex justify-between items-center flex-wrap">
                                                <div className="w-full sm:w-1/2">
                                                      <div className="flex mb-2 justify-between items-center">
                                                            <span>Temp</span>
                                                            <small className="px-2 inline-block">
                                                                  39.11&nbsp;&deg;
                                                            </small>
                                                      </div>
                                                </div>
                                                <div className="w-full sm:w-1/2">
                                                      <div className="flex mb-2 justify-between items-center">
                                                            <span>
                                                                  Feels like
                                                            </span>
                                                            <small className="px-2 inline-block">
                                                                  33.33&nbsp;&deg;
                                                            </small>
                                                      </div>
                                                </div>
                                                <div className="w-full sm:w-1/2">
                                                      <div className="flex mb-2 justify-between items-center">
                                                            <span>
                                                                  Temp min
                                                            </span>
                                                            <small className="px-2 inline-block">
                                                                  24.9&nbsp;&deg;
                                                            </small>
                                                      </div>
                                                </div>
                                                <div className="w-full sm:w-1/2">
                                                      <div className="flex mb-2 justify-between items-center">
                                                            <span>
                                                                  Temp max
                                                            </span>
                                                            <small className="px-2 inline-block">
                                                                  39&nbsp;&deg;
                                                            </small>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="divider table mx-2 text-center bg-transparent whitespace-nowrap">
                                          <span className="inline-block px-3">
                                                <small>Forecast</small>
                                          </span>
                                    </div>
                                    <div className="px-6 py-6 relative">
                                          <div className="text-center justify-between items-center flex">
                                                <div className="text-center mb-0 flex items-center justify-center flex-col">
                                                      <span className="block my-1">
                                                            Sun
                                                      </span>
                                                      <img
                                                            alt="Image"
                                                            src="https://i.imgur.com/ffgW9JQ.png"
                                                            className="block w-8 h-8"
                                                      />
                                                      <span className="block my-1">
                                                            38.3&deg;
                                                      </span>
                                                </div>
                                                <div className="text-center mb-0 flex items-center justify-center flex-col">
                                                      <span className="block my-1">
                                                            Mon
                                                      </span>
                                                      <img
                                                            alt="Image"
                                                            src="https://i.imgur.com/BQbzoKt.png"
                                                            className="block w-8 h-8"
                                                      />
                                                      <span className="block my-1">
                                                            39.9&deg;
                                                      </span>
                                                </div>
                                                <div className="text-center mb-0 flex items-center justify-center flex-col">
                                                      <span className="block my-1">
                                                            Mon
                                                      </span>
                                                      <img
                                                            alt="Image"
                                                            src="https://i.imgur.com/BQbzoKt.png"
                                                            className="block w-8 h-8"
                                                      />
                                                      <span className="block my-1">
                                                            40.1&deg;
                                                      </span>
                                                </div>
                                                <div className="text-center mb-0 flex items-center justify-center flex-col">
                                                      <span className="block my-1">
                                                            Mon
                                                      </span>
                                                      <img
                                                            alt="Image"
                                                            src="https://i.imgur.com/ffgW9JQ.png"
                                                            className="block w-8 h-8"
                                                      />
                                                      <span className="block my-1">
                                                            41.5&deg;
                                                      </span>
                                                </div>
                                                <div className="text-center mb-0 flex items-center justify-center flex-col">
                                                      <span className="block my-1">
                                                            Mon
                                                      </span>
                                                      <img
                                                            alt="Image"
                                                            src="https://i.imgur.com/ffgW9JQ.png"
                                                            className="block w-8 h-8"
                                                      />
                                                      <span className="block my-1">
                                                            40.1&deg;
                                                      </span>
                                                </div>
                                          </div>

                                          {/* lollll */}
                                          {show === true ? (
                                                <div className="text-center justify-between items-center flex">
                                                      <div className="text-center mb-0 flex items-center justify-center flex-col">
                                                            <span className="block my-1">
                                                                  Sun
                                                            </span>
                                                            <img
                                                                  alt="Image"
                                                                  src="https://i.imgur.com/ffgW9JQ.png"
                                                                  className="block w-8 h-8"
                                                            />
                                                            <span className="block my-1">
                                                                  38.3&deg;
                                                            </span>
                                                      </div>
                                                      <div className="text-center mb-0 flex items-center justify-center flex-col">
                                                            <span className="block my-1">
                                                                  Mon
                                                            </span>
                                                            <img
                                                                  alt="Image"
                                                                  src="https://i.imgur.com/BQbzoKt.png"
                                                                  className="block w-8 h-8"
                                                            />
                                                            <span className="block my-1">
                                                                  39.9&deg;
                                                            </span>
                                                      </div>
                                                      <div className="text-center mb-0 flex items-center justify-center flex-col">
                                                            <span className="block my-1">
                                                                  Mon
                                                            </span>
                                                            <img
                                                                  alt="Image"
                                                                  src="https://i.imgur.com/BQbzoKt.png"
                                                                  className="block w-8 h-8"
                                                            />
                                                            <span className="block my-1">
                                                                  40.1&deg;
                                                            </span>
                                                      </div>
                                                      <div className="text-center mb-0 flex items-center justify-center flex-col">
                                                            <span className="block my-1">
                                                                  Mon
                                                            </span>
                                                            <img
                                                                  alt="Image"
                                                                  src="https://i.imgur.com/ffgW9JQ.png"
                                                                  className="block w-8 h-8"
                                                            />
                                                            <span className="block my-1">
                                                                  41.5&deg;
                                                            </span>
                                                      </div>
                                                      <div className="text-center mb-0 flex items-center justify-center flex-col">
                                                            <span className="block my-1">
                                                                  Mon
                                                            </span>
                                                            <img
                                                                  alt="Image"
                                                                  src="https://i.imgur.com/ffgW9JQ.png"
                                                                  className="block w-8 h-8"
                                                            />
                                                            <span className="block my-1">
                                                                  40.1&deg;
                                                            </span>
                                                      </div>
                                                </div>
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
            </div>
      );
}
