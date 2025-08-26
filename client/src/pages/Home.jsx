import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sneaker from "../components/Sneaker";
import swal from "sweetalert2";
import SneakerService from "../services/sneaker.service";

const Home = () => {
  const [sneakers, setSneakers] = useState([]);
  const [filteredSneakers, setFilteredSneakers] = useState([]);
  console.log(Sneaker);
  

  useEffect(() => {
    // Call API getAllSneakers
    const getAllSneakers = async () => {
      try {
        const response = await SneakerService.getAllSneakers();

        if (response.status === 200) {
          setSneakers(response.data);
          setFilteredSneakers(response.data);
        }
      } catch (error) {
        swal.fire({
          title: "Get all Sneaker",
          text: error?.response?.data?.message || error.message,
        });
      }
    };

    getAllSneakers();
  }, []);

  const handleSearch = (keyword) => {
    if (!keyword) {
      setFilteredSneakers(sneakers);
      return;
    }

    const results = sneakers.filter((s) => {
      return (
        s.name.toLowerCase().includes(keyword.toLowerCase()) ||
        s.type.toLowerCase().includes(keyword.toLowerCase())
      );
    });

    setFilteredSneakers(results);
  };

  return (
    <div className="container mx-auto">
      {/* Header */}
      <div>
        <h1 className="title justify-center text-3xl text-center m-5 p-6">
          Grab Sneaker
        </h1>
      </div>

      {/* SearchBox */}
      <div className="mb-5 flex justify-center items-center">
        <label className="input flex items-center gap-2 w-3xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search"
            onChange={(e) => handleSearch(e.target.value)}
            name="keyword"
          />
        </label>
      </div>

      {/* Results */}
      <Sneaker sneakers={filteredSneakers} />
    </div>
  );
};

export default Home;
