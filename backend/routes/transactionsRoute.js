import express from "express";
import { Transaction } from "../models/transactionModel.js";

const router = express.Router();

// Route untuk data transaksi baru
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.nominal ||
      !request.body.nama ||
      !request.body.kategori ||
      !request.body.tanggal
    ) {
      return response.status(400).send({
        message: "Send all required fields: nominal, nama, kategori, tanggal!",
      });
    }
    const newTransaction = {
      nominal: request.body.nominal,
      nama: request.body.nama,
      kategori: request.body.kategori,
      tanggal: request.body.tanggal,
    };

    const transaction = await Transaction.create(newTransaction);

    return response.status(201).send(transaction);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Transactions from database
router.get("/", async (request, response) => {
  try {
    const transactions = await Transaction.find({});

    return response.status(200).json({
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Transaction from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const transaction = await Transaction.findById(id);

    return response.status(200).json(transaction);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Transaction
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.nominal ||
      !request.body.nama ||
      !request.body.kategori ||
      !request.body.tanggal
    ) {
      return response.status(400).send({
        message: "Send all required fields: nominal, nama, kategori",
      });
    }

    const { id } = request.params;

    const result = await Transaction.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Transaction not found" });
    }

    return response
      .status(200)
      .send({ message: "Transaction updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a Transaction
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Transaction.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Transaction not found" });
    }

    return response
      .status(200)
      .send({ message: "Transaction deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
