"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';

export default function DetailedPage() {
  const searchParams = useSearchParams();
  const [data, setData] = useState({
    name: '',
    img: '',
    population: '',
    region: '',
    capital: '',
    nativeName: '',
    topLevelDomain: '',
    subregion: '',
    formattedLang: '',
    formattedCurrency: ''
  });

  useEffect(() => {
    const name = searchParams.get('name') || ''; 
    const img = searchParams.get('img') || ''; 
    const population = searchParams.get('population') || ''; 
    const region = searchParams.get('region') || ''; 
    const capital = searchParams.get('capital') || ''; 
    const nativeName = searchParams.get('nativeName') || ''; 
    const topLevelDomain = searchParams.get('topLevelDomain') || ''; 
    const subregion = searchParams.get('subregion') || ''; 
    const lang = searchParams.get('lang') || '[]'; 
    const currency = searchParams.get('currency') || '[]';

    // Parse and format data
    const parsedLang = JSON.parse(lang);
    const parsedCurrency = JSON.parse(currency);
    const formattedLang = parsedLang.map(l => l.name).join(", ");
    const formattedCurrency = parsedCurrency.map(c => c.name).join(", ");

    setData({
      name,
      img,
      population,
      region,
      capital,
      nativeName,
      topLevelDomain,
      subregion,
      formattedLang,
      formattedCurrency
    });
  }, [searchParams]);

  return (
    <div className="flex flex-col dark:bg-Dark_Mode_Background h-screen dark:text-white px-4 sm:px-8 lg:px-16">
      <Link href="/">
        <button className="shadow-md border-2 font-semibold px-8 py-3 mx-auto mt-4 mb-8 block">
          Back
        </button>
      </Link>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
        <Image
          src={data.img}
          alt={`${data.name} Flag`}
          width={450}
          height={200}
          className="w-full max-w-xs lg:max-w-sm"
        />
        <div className="flex flex-col mt-6 lg:mt-0 lg:ml-8">
          <h1 className="font-extrabold text-2xl mb-6 text-center lg:text-left">{data.name}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold">
            <p>
              Native Name: <span className="font-normal">{data.nativeName}</span>
            </p>
            <p>
              Top Level Domain: <span className="font-normal">{data.topLevelDomain}</span>
            </p>
            <p>
              Population: <span className="font-normal">{data.population}</span>
            </p>
            <p>
              Currencies: <span className="font-normal">{data.formattedCurrency}</span>
            </p>
            <p>
              Region: <span className="font-normal">{data.region}</span>
            </p>
            <p>
              Languages: <span className="font-normal">{data.formattedLang}</span>
            </p>
            <p>
              Sub Region: <span className="font-normal">{data.subregion}</span>
            </p>
            <p>
              Capital: <span className="font-normal">{data.capital}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
