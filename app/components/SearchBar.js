import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const SearchBar = ({ data, setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [searchTerm, data]);

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-none outline-none shadow-md py-4 px-28 pl-10 rounded-lg w-full dark:bg-Dark_Mode_Elements"
        />
        {/* Search icon placed using absolute positioning */}
        <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
          <FontAwesomeIcon icon={faSearch} size='xl' />
        </span>
      </div>

      {filteredResults.length > 0 && (
        <div className="absolute left-0 right-0 bg-white dark:bg-Dark_Mode_Elements shadow-lg rounded-lg mt-1 z-10">
          <ul className="max-h-60 overflow-y-auto">
            {filteredResults.map((result) => {
              const serializedLang = JSON.stringify(result.languages);
              const serializedCurrency = JSON.stringify(result.currencies);

              return (
                <Link
                  href={{
                    pathname: '/DetailedPage',
                    query: {
                      name: result.name,
                      img: result.flags.svg,
                      population: result.population,
                      region: result.region,
                      capital: result.capital,
                      nativeName: result.nativeName,
                      topLevelDomain: result.topLevelDomain,
                      subregion: result.subregion,
                      lang: serializedLang,
                      currency: serializedCurrency,
                    },
                  }}
                  key={result.id}
                >
                  <li className="py-4 px-4 
                                  border-b 
                                  last:border-none last:rounded-b-md
                                  flex cursor-pointer items-center
                                  hover:bg-Light_Mode_Background text-Light_Mode_Text 
                                   dark:bg-Dark_Mode_Elements dark:text-white">
                    <Image src={result.flags.svg} alt={result.name} width={30} height={50} className="mr-3" />
                    {result.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
