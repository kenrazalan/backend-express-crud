import {
  create,
  deleteTodo,
  getAllTodos,
  getTodo,
  update,
} from "../controllers/todo.controller";

const router = require("express").Router();

router.post("/create", create);
router.get("/allTodos", getAllTodos);
router.get("/:id", getTodo);
router.post("/update/:id", update);
router.delete("/delete/:id", deleteTodo);

export default router;
