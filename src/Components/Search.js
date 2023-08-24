import React, { useState } from 'react'
import axios from 'axios'
import {API_URL,geoApiOptions} from './Api'


import {AsyncPaginate} from "react-select-async-paginate"

export const Search = ({onSearchChange}) => {
  const [search ,setSearch]= useState(null)

  const loadOptions = async (inputValue) => {
    try {
        console.log(inputValue);
        const response = await axios(`${API_URL}cities?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions);
        console.log(response.data);

        let options = [];

        if (Array.isArray(response.data)) {
            options = response.data.map((city) => ({
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name},${city.countryCode}`
            }));
        } else if (response.data && Array.isArray(response.data.cities)) {
            options = response.data.cities.map((city) => ({
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name},${city.countryCode}`
            }));
        }

        return { options };

    } catch (error) {
        console.error(error);
        return { options: [], message: "No details available" };
    }
};

  const handleonChange=(searchData)=>{
      setSearch(searchData)
      onSearchChange(searchData)
  }
  return (
    <AsyncPaginate
    placeholder ="search for city"
    debounceTimeout={600}
    value={search}
    onChange={handleonChange}
    loadOptions={loadOptions}
    />
  )
}
