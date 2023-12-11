import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const TransactionsTable = ({ transactions }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Nama</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Nominal
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Kategori
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Tanggal
          </th>
          <th className="border border-slate-600 rounded-md">CRUD</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={transaction._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {transaction.nama}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {transaction.nominal}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {transaction.kategori}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {transaction.tanggal}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/transactions/details/${transaction._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/transactions/edit/${transaction._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/transactions/delete/${transaction._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
