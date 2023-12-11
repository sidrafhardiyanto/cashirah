import mongoose from "mongoose";

const transactionSchema = mongoose.Schema(
  {
    nominal: {
      type: Number,
      required: true,
    },
    nama: {
      type: String,
      required: true,
    },
    kategori: {
      type: String,
      required: true,
    },
    tanggal: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Transaction = mongoose.model("Transaction", transactionSchema);
