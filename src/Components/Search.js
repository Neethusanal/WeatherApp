import React, { useState } from 'react'


import {API_URL,geoApiOptions} from './Api'


import {AsyncPaginate} from "react-select-async-paginate"

export const Search = ({onSearchChange}) => {
  const [search ,setSearch]= useState(null)

  const loadOptions = (inputValue) => {
    return fetch(
      `${API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
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
