import db from "../models/index";
const Todo = db.todo;
import Ajv from "ajv";
const ajv = new Ajv();
import { Request, Response } from "express";
import { createInputSchema, updateInputSchema } from "./inputSchema";

export const create = async (req: Request, res: Response) => {
  const createInput: any = {
    title: req.body.title,
    description: req.body.description,
    status: false,
  };

  //Validate request using ajv
  const valid = ajv.validate(createInputSchema, createInput);
  if (!valid) {
    return res.status(422).json({ error: "Please add all required fields" });
  }
  console.log(valid, "validvalid");
  try {
    const todo = await Todo.create(createInput);
    console.log(todo, "todo");
    res.status(200).json({ todo });
  } catch (err) {
    res.status(500).json({
      message: "Error occurred while creating the Todo",
    });
  }
};

export const getAllTodos = async (req: Request, res: Response) => {
  const todos = await Todo.findAll({});
  res.status(200).send(todos);
};

export const getTodo = async (req: Request, res: Response) => {
  let id = req.params.id;
  let todo = await Todo.findOne({ where: { id: id } });
  res.status(200).send(todo);
};

export const update = async (req: Request, res: Response) => {
  const updateInput = {
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  };

  // Validate request using ajv
  const valid = ajv.validate(updateInputSchema, updateInput);
  !valid && res.status(422).json({ error: "Please add all required fields" });

  try {
    const id = req.params.id;
    let todo = await Todo.findOne({ where: { id } });
    if (!todo) {
      return res.status(422).json({ error: "Todo not found" });
    }

    await Todo.update(updateInput, {
      where: { id },
    });
    const updatedTodo = await Todo.findByPk(id);
    res.status(200).json({ updatedTodo });
  } catch (err) {
    res.status(500).json({
      message: "Error occurred while updating the Todo",
    });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  let id = req.params.id;

  try {
    let todo = await Todo.findOne({ where: { id } });
    if (!todo) {
      return res.status(422).json({ error: "Todo not found" });
    }
    await Todo.destroy({ where: { id } });
    res.status(200).json({ deletedTodo: todo });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while deleting the Todo",
    });
  }
};
