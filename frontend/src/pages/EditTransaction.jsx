import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditTransaction = () => {
  const [nominal, setNominal] = useState("");
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [tanggal, setTanggal] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/transactions/${id}`)
      .then((response) => {
        setNominal(response.data.nominal);
        setNama(response.data.nama);
        setKategori(response.data.kategori);
        setTanggal(response.data.tanggal);
      })
      .catch((error) => {
        alert("An error happened. Please check the console");
        console.log(error);
      });
  }, []);

  const handleEditTransaction = () => {
    const data = {
      nominal,
      nama,
      kategori,
      tanggal,
    };
    axios
      .put(`http://localhost:5555/transactions/${id}`, data)
      .then(() => {
        enqueueSnackbar("Transaksi Telah Diedit", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Transaksi</h1>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Nominal</label>
          <input
            type="number"
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Nama</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Kategori</label>
          <input
            type="text"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Tanggal</label>
          <input
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditTransaction}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditTransaction;
