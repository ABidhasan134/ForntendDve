import React from 'react'
import './dataStyle.css'

const Data = (props) => {
    const {country}=props.countryData;
    // const {country}=countryData;
    const{name,flags,region,fifa,capital,area,population}=country;
    console.log(country);
//    const{country}=newdata
//    const{official}=country
// //    const{official}=name
// console(official);
    
//    console.log(newdata);
//     console.log(official);
const handelRemove=(name)=>{
  props.countryName(name);

}
  return (
    <articla >
      <div className='main'>
      <h1>{name.official}</h1>
      <img src={flags.png} alt={name.common} height='150px'width='250px'/>
      <p>Fifa: {fifa}</p>
      <p>Capital: {capital}</p>
      <p>area: {area}</p>
      <p>Population: {population}</p>
      <p>region: {region}</p>
      <button className='btn' onClick={()=>{handelRemove(name.common)}}>
        Remove</button>
      </div>
    </articla>
  )
}

export default Data
