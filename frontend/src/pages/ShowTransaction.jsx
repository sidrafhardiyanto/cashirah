import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowTransaction = () => {
  const [transaction, setTransaction] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/transactions/${id}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Transaction</h1>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Id</span>
          <span>{transaction._id}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Title</span>
          <span>{transaction.nominal}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Author</span>
          <span>{transaction.nama}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Publish Year</span>
          <span>{transaction.kategori}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Tanggal Transaksi</span>
          <span>{transaction.tanggal}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Ditambahkan Pada</span>
          <span>{new Date(transaction.createdAt).toString()}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Diedit Pada</span>
          <span>{new Date(transaction.updatedAt).toString()}</span>
        </div>
      </div>
    </div>
  );
};

export default ShowTransaction;
