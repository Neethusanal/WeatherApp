import React, { useState } from 'react'
import axios from 'axios'
import {API_URL,options} from './Api'


import {AsyncPaginate} from "react-select-async-paginate"

export const Search = ({onSearchChange}) => {
  const [search ,setSearch]= useState(null)

  const loadOptions = async (inputValue) => {
    try {
        console.log(inputValue);
        const response = await axios(`${API_URL}cities`, options); // Assuming axios is properly imported
        console.log(response.data);
    } catch (error) {
        console.error(error);
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
