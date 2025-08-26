import api from "./api"
const RESTO_API = import.meta.env.VITE_RESTO_API;


//get all restaurant
const getAllSneakers = async () =>{
    return await api.get(RESTO_API)
    
}
//get restaurant by Id
const getSneakerByID = async (id) => {
  return await api.get(RESTO_API +"/"+ id);
};
//update restaurant by Id
const updateSneaker = async (id,sneaker) => {
  return await api.put(RESTO_API +"/"+ id,sneaker);
};
//add restaurant
const addSneakers = async (sneaker) => {
  return await api.post(RESTO_API, sneaker);
};
//delete restaurant
const deleteSneakers = async (id) => {
  return await api.delete(RESTO_API + "/" + id);
};

const SneakerService ={
    getAllSneakers,
    getSneakerByID,
    updateSneaker,
    addSneakers,
    deleteSneakers
}
export default SneakerService