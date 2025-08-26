import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import SneakerService from "../services/sneaker.service";
import { useNavigate } from "react-router";

const Update = () => {
  //1.Get id from URL
  const { id } = useParams();
  const [Sneaker, setSneaker] = useState({
    name: "",
    type: "",
    imageUrl: "",
  });
  const navigate = useNavigate();
  //2.Get Sneaker By ID
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/Sneaker/${id}`)
      .then((res) => {
        //แปลงจาก JSON เป็น String
        return res.json();
      })
      .then((response) => {
        setSneaker(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSneaker({ ...Sneaker, [name]: value }); //clone
  };
  const handleSubmit = async () => {
    if (!id) {
      Swal.fire("Error", "Sneaker ID is missing!", "error");
      return;
    }

    const result = await Swal.fire({
      title: "คุณแน่ใจหรือไม่?",
      text: "คุณต้องการอัปเดตร้านอาหารนี้ใช่ไหม?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "ใช่, อัปเดตเลย!",
      cancelButtonText: "ยกเลิก",
    });

    if (result.isConfirmed) {
      try {
        const response = await SneakerService.updateSneaker(id, Sneaker);
        // Axios จะคืน response.data
        Swal.fire("สำเร็จ!", "ร้านอาหารได้รับการอัปเดต!!!", "success");
        setSneaker({ name: "", type: "", imageUrl: "" });
        navigate("/");
      } catch (error) {
        console.error(error);
        Swal.fire("ล้มเหลว", "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์", "error");
      }
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center ">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">
            Update Sneaker
            <div className="pl-38">
              <a href="/" className="btn btn-active btn-error size-5">
                X
              </a>
            </div>
          </legend>

          <label className="label">Name</label>
          <input
            value={Sneaker.name}
            onChange={handleChange}
            type="text"
            className="input"
            placeholder="Place Name"
            name="name"
          />

          <label className="label">Type</label>
          <input
            value={Sneaker.type}
            onChange={handleChange}
            type="text"
            className="input"
            placeholder="Place Type"
            name="type"
          />
          <label className="label">Img</label>
          <input
            value={Sneaker.imageUrl}
            onChange={handleChange}
            type="text"
            className="input"
            placeholder="Place Url Img"
            name="imageUrl"
          />
          {Sneaker.imageUrl && (
            <div className="flex items-center gap-2 px-8">
              <img className="h-32" src={Sneaker.imageUrl}></img>
            </div>
          )}
          <button onClick={handleSubmit} className="btn btn-soft btn-primary">
            Update
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Update;
