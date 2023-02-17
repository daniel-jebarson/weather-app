interface Small {
      data: {
            date: string;
            day: {
                  condition: {
                        text: string;
                        icon: string;
                  };
                  avgtemp_c: number;
                  avgtemp_f: number;
            };
      };
}

import type { NextPage } from "next";
import React from "react";
import Image from "next/image";

const SmallGroup: React.FC<Small> = ({ data }) => {
      return (
            <div className="text-center   mb-0 flex items-center justify-center flex-col">
                  <span className="block justify-center  my-1 text-center">
                        {data["day"].condition.text}
                  </span>
                  {/* {data["day"].condition.icon.replace("//", "")} */}
                  <img
                        alt="Image"
                        src={
                              "https://" +
                              data["day"].condition.icon.replace("//", "")
                        }
                        className="block w-8 h-8"
                  />
                  <span className="block my-1">
                        {localStorage.getItem("unit") == "c"
                              ? data["day"].avgtemp_c + "°C"
                              : data["day"].avgtemp_f + "°F"}
                  </span>
            </div>
      );
};

export default SmallGroup;
