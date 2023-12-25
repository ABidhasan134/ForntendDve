import React, { useEffect, useState } from 'react'
import CountryDitels from './countryDitels';
import Search from './search';

const url='https://restcountries.co';

const CountryApp = () => {

        const [isloading,setLoading]=useState(true);
        const [Error,setError]=useState(null);
        const[countris,setCountris]=useState([]);
        const [filters,setFilter]=useState(countris)
    
    //     const fetch= async(url)=>{
    //         setLoading(true);
    //     try{
    //     const respons= await fetch(url);
    //     const data=await respons.json();
    //     setCountris(data);
    //     setLoading(false);
    //     setError(null);
    //     console.log(countris);
    //     }catch(error){
    //         setLoading(false)
    //         setError(error);
    //     }
    // }
        
    // useEffect(()=>{
    //     // fetch(url)
    //     fetch('https://restcountries.com/v3.1/all')
    //     .then(function(respons){
    //         if(respons){
    //             respons.json();
    //             setLoading(true);
    //             setError(null)
    //         }
    //         else{
    //           setError("could not load countries");
    //           console.log(Error);
    //         }
    //     })
    //     .then(function(result){
    //         setCountris(result)
    //         setLoading(false);
    //         setError(null);
    //  }).catch(function (){
    //   console.log(Error);
    //  })
    // },[])    
    useEffect(()=>{
      fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountris(data);
        setFilter(data);
        setLoading(false);
        setError(null);
      })
      .catch((error)=>{
        setError(error);
      })
    },[])
    // console.log(countris);
    // console.log(Error);
    const onRemoveFillter=(name)=>{
      const Desh=filters.filter((country)=>country.name.common!==name)
      setFilter(Desh);
      console.log(name);
    }
    const handelSearch=(searchValue)=>{
        let DashName=searchValue.toLowerCase();
        const newCountry=countris.filter((country)=>{
          const countryName=country.name.common.toLowerCase()
            return countryName.startsWith(DashName);
        })
        setFilter(newCountry);
        
    }
  return (
    <>
      
      <p>Im from country</p>
      <Search onSearch={handelSearch}/>
      {countris && <CountryDitels flag={filters} Removecountry={onRemoveFillter}/>}
    </>
  )
}

export default CountryApp
