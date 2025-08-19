const Home = () => {
  const [Sneaker, setSneaker] = useState([]);
  const [filteredSneaker, setFiltedSneaker] = useState([]);
  useEffect(() => {
    //call api getAllSneaker
    const getAllSneaker = async () => {
      try {
        const response = await SneakerService.getAllSneaker();

        if (response.status === 200) {
          setSneaker(response.data);
          setFiltedSneaker(response.data);
        }
      } catch (error) {
        // catch error
        swal.fire({
          title: "Get all Sneaker",
          text: error?.response?.data?.message || error.message,
        });
      }
    };
    getAllSneaker();
  }, []);

  const handleSearch = (keyword) => {
    if (keyword === "") {
      return;
    }
    const Results = Sneaker.filter((Sneaker) => {
      return (
        Sneaker.name.toLowerCase().includes(keyword.toLocaleLowerCase()) ||
        Sneaker.type.toLowerCase().includes(keyword.toLocaleLowerCase())
      );
    });

    setFiltedSneaker(Results);
  };
  return (
    <div className="container mx-auto">
      {/*header*/}
      <div>
        <h1 className="title justify-center text-3xl text-center m-5 p-6">
          Grab Sneaker
        </h1>
      </div>
      {/*SearchBox*/}
      <div className="mb-5 flex justify-center items-center ">
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
      {/*Results*/}
      <Sneaker Sneaker={filteredSneaker} />
    </div>
  );
};

export default Home;
