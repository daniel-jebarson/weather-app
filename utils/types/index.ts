import { type } from "os"

export type AutoComplete={

            "id"?: number,
            "name"?: string,
            "region"?: string,
            "country"?: string,
            "lat"?: number,
            "lon"?: number,
            "url"?: string

}


export type Location={
    "name"?: string,
    "region"?: string,
    "country"?: string,
    "lat"?: number,
    "lon"?: number,
    "tz_id"?: string,
}

export type Current={
    "last_updated_epoch"?: number,
    "last_updated"?: string,
"temp_c"?: number,
"temp_f"?: number,
"is_day"?: number,  //1 -true,0 false
"condition":{
    "icon?":string,
    "text?":string,
    "code?":number
},
"pressure_mb"?: number,
"pressure_in"?: number,
"feelslike_c"?: number,
"feelslike_f"?: number,
"vis_km"?: number,
"vis_miles"?: number,

}

export type Sundata={
    "astro":{
        "sunrise"?: string,
        "sunset"?: string
    },
    "day":{
        "avgvis_km?":number,  //visibilty
        "condition":{
            "icon?":string,
            "text?":string,
            "code?":number
        },
        "avgtemp_c"?: number,
        "avgtemp_f"?: number,
    }
}


export type Null={

}

export type Forecast={
    "location"?:Location,
    "forecast"?:{
        "forecastday":[Sundata]
    },
    "current"?:Current
} 



export type Error={
    "code"?: number,
"message"?: string
}


export type SearchData={
    "id": number,
"name": string,
"region": string,
"country": string,
"lat": number,
"lon": number,
"url": string
}


