import React from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteTransaction = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteTransaction = () => {
    axios
      .delete(`http://localhost:5555/transactions/${id}`)
      .then(() => {
        enqueueSnackbar("Transaction Deleted successfully", {
          variant: "success",
        });
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
      <h1 className="text-3xl my-4">Delete Transaksi</h1>
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Yakin transaksinya mau dihapus?</h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteTransaction}
        >
          Ya, Hapus Aja
        </button>
      </div>
    </div>
  );
};

export default DeleteTransaction;
