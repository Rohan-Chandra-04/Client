import React, { useState } from 'react';
import './searchbar.css';

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const shops = ['Nandini', 'Amul', 'Nescafe', 'Dmart', 'sMart', 'Mukkastore', 'Nexus', 'Decathlon'];

  const filteredShops = shops.filter((value) => {
    if (searchItem === "") return true;
    return value.toLowerCase().includes(searchItem.toLowerCase());
  });

  return (
    <div className="searchbody">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for shops...."
          onChange={(event) => { setSearchItem(event.target.value) }}
        />
        <div className="search-icon"></div>
      </div>

      <div className='card-display'>
        {filteredShops.length > 0 ? (
          filteredShops.map((value) => (
            <div className="card-container" key={value}>
              <div className="card">
                <img src="https://imgs.search.brave.com/Qp_NuZHvOW85R9zV-vD6nRioxWbi9nb0LVCYyhTq4z4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTIx/ODExNjc5L3Bob3Rv/L2Nsb3NlLXVwLW9m/LWZ1bGwtc2hvcHBp/bmctY2FydC1pbi1n/cm9jZXJ5LXN0b3Jl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz12OVluSTZoRFBC/ekpBX2NBTU9LdTBl/OHEweHhTbGtSN3J1/YTJrZEt1U3gwPQ" alt="Shop Image" />
                <div className="card-content">
                  <div className="shop-name">{value}</div>
                  <div className="product-details">Product details for {value}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="error-message">No matches found</div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

