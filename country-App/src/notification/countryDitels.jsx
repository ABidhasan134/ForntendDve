import React from 'react'
import {v4 as uuidv4} from 'uuid';
import Data from './data';
import './dataStyle.css'

const CountryDitels = (props) => {

  return (
    <section className='conten'>
        {props.flag.map((country)=>{
            const countryNew={country,id:uuidv4()}
          return <Data countryData={countryNew} key={countryNew.id}
          countryName={props.Removecountry}/>
        })}
        <h1>Country Details</h1>
        
    </section>
  )
}

export default CountryDitels
