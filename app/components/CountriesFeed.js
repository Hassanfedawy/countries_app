
import React from 'react'
import Country from './Country'

function CountriesFeed({data}) {
  return (
    <div className='grid grid-flow-dense gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '> 
      {data.map((country)=>{
        return(
          <Country key={country.numericCode}
                  name={country.name}
                  img={country.flags.svg}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  nativeName={country.nativeName}
                  topLevelDomain={country.topLevelDomain}
                  subregion={country.subregion}
                  lang={country.languages}
                  currency={country.currencies}/>
        )

      })}
    </div>
  )
}

export default CountriesFeed

