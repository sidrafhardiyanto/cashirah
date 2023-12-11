import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import TransactionsTable from "../components/home/TransactionsTable";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    axios
      .get("http://localhost:5555/transactions")
      .then((response) => {
        setTransactions(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Transactions List</h1>
        <Link to="/transactions/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      <TransactionsTable transactions={transactions} />
    </div>
  );
};

export default Home;
