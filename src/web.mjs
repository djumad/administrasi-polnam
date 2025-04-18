import express from "express";
import database from "./database/db.mjs";
import "./model/associations.mjs" // ⬅️ WAJIB agar semua relasi aktif
import userController from "./controller/UserController.mjs";

const web = express();
web.use(express.json());
web.use(userController);

// Sinkronisasi tabel hanya setelah model + relasi dimuat
(async () => {
  try {
    await database.sync({ alter: true });
    console.log("✅ Semua tabel berhasil disinkronkan.");
  } catch (error) {
    console.error("❌ Gagal menyinkronkan tabel:", error);
  }
})();

export default web;