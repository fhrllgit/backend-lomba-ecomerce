const express = require("express")
const cors = require("cors")
const path = require("path")

const uploadRoutes = require("./routes/uploadRoutes")
const routeProduct = require("./routes/productRoutes")
const routeCategory = require("./routes/categoryRoutes")
const userRoutes = require("./routes/userRoutes")
const adminRoutes = require("./routes/adminRoutes")
const addressRoutes = require("./routes/addressRoutes")
const orderRoutes = require("./routes/orderRouter")
const transactions = require("./routes/transaksiRoutes")
const laporanRoutes = require("./routes/laporanRoutes");

const app = express()
const PORT = process.env.PORT || 3005;


app.use(cors({
  origin: process.env.CORS_ORIGIN || "*",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));


app.use(express.json())
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use("/uploads/tmp", express.static(path.join(__dirname, "uploads/tmp"))); 


app.use("/api/uploads", uploadRoutes)
app.use("/api/products", routeProduct)
app.use("/api/category", routeCategory)
app.use("/api/users", userRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/address", addressRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/transactions", transactions)
app.use("/api/laporan", laporanRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});
