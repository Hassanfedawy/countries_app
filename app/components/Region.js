
const RegionDropdown = ({ setSelectedRegion }) => {
    const handleChange = (event) => {
      const selectedRegion = event.target.value;
      setSelectedRegion(selectedRegion);
    };
  
    return (
      <form>
        <select
          id="region"
          name="region"
          onChange={handleChange}
          className="bg-white px-5 py-4 shadow-md font-semibold text-Light_Mode_Text dark:bg-Dark_Mode_Elements dark:text-white"
        >
          <option value="">Filter a Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    );
  };
  
  export default RegionDropdown;
  
  
  