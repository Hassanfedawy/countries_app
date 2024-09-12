
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Country(props) {
  // Serialize the arrays into JSON strings
  const serializedLang = JSON.stringify(props.lang);
  const serializedCurrency = JSON.stringify(props.currency);

  return (
    <Link
      href={{
        pathname: '/DetailedPage',
        query: {
          name: props.name,
          img: props.img,
          population: props.population,
          region: props.region,
          capital: props.capital,
          nativeName: props.nativeName,
          topLevelDomain: props.topLevelDomain,
          subregion: props.subregion,
          lang: serializedLang,
          currency: serializedCurrency,
        },
      }}
    >
      <div className='flex flex-col mx-auto bg-white dark:bg-Dark_Mode_Elements dark:text-white max-w-72 rounded-b-md shadow-lg '>

      <div className='relative w-full' style={{ height: '150px' }}>
          <Image src={props.img} alt={props.name} layout='fill' objectFit='cover' />
        </div>
        <h2 className='text-xl font-extrabold p-4 '>{props.name}</h2>

        <div className='mb-5 p-4'>
          <p className='font-bold text-lg'>Population: <span className='font-normal'>{props.population}</span></p>
          <p className='font-bold text-lg'>Region: <span className='font-normal'>{props.region}</span></p>
          <p className='font-bold text-lg'>Capital: <span className='font-normal whitespace-nowrap'>{props.capital}</span></p>
        </div>

      </div>
    </Link>
  );
}

export default Country;
