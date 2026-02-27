import express from "express";
import bookRoutes from "./routes/book.routes.js";
import authorRoutes from "./routes/author.routes.js";
import loanRouters from "./routes/loan.routes.js";

const app = express();

app.use(express.json());

//Health check
function handleHealthCheck(req, res) {
  res.status(200).json({
    status: "ok",
    message: "API en funcionamiento.",
  });
}

app.get("/health", handleHealthCheck);

//Rutas principales
app.use("/books", bookRoutes);
app.use("/author", authorRoutes);
app.use("/loan", loanRouters);



//No se encuentra ruta
function handleNotFound(req, res) {
  res.status(404).json({
    message: "Ruta no encontrada.",
  });
}
app.use(handleNotFound);


app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    error: err.message || "Internal server error"
  });
});

export default app;