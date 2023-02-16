import Axios from "axios";
import fs from "fs";
import { useEffect, useState } from "react";
import { Forecast, Error, Current } from "../../utils/types/index";

export default function Home() {
      const [search, setSearch] = useState("");
      const [data, setData] = useState({});
      const [current, setCurrent] = useState({});

      const getCurrentData = async () => {
            // http://api.weatherapi.com/v1/current.json?key=1add81b5910249f9b32180547231602&q=Asia/Calcutta&aqi=no
            const tem = await Axios.get(
                  `http://api.weatherapi.com/v1/current.json`,
                  {
                        params: {
                              key: "1add81b5910249f9b32180547231602",
                              q: Intl.DateTimeFormat().resolvedOptions()
                                    .timeZone,
                              aqi: "no",
                        },
                  }
            )
                  .then((response: { data: Current }) => {
                        setCurrent(response.data);
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            console.log(current);
      };

      const getPlaceData = async (searchQuery: string) => {
            const tem = await Axios.get(
                  `http://api.weatherapi.com/v1/forecast.json`,
                  {
                        params: {
                              key: "1add81b5910249f9b32180547231602",
                              q: searchQuery,
                              days: 10,
                        },
                  }
            )
                  .then(function (response: { data: Forecast }) {
                        setData(response.data);
                        console.log(response.data);
                  })
                  .catch(function (error: Error) {
                        console.error(error);
                        // error;
                  });
      };
      return (
            <div>
                  <h1 className="text-3xl font-bold underline">ok</h1>
                  <input
                        onChange={(e) => setSearch(e.target.value)}
                        title="Enter place"
                        placeholder="Enter the place to get Data"
                        type={"search"}
                  />
                  <button onClick={() => getPlaceData(search)}>
                        getPlaceData
                  </button>
                  <button
                        onClick={() => {
                              getCurrentData();
                        }}
                  >
                        GetCurrentData
                  </button>
            </div>
      );
}
