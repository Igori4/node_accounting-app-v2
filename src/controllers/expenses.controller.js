'use strict';

const {
  getExpenses,
  getExpensesById,
  creatEexpenses,
  updatEexpenses,
  deletEexpenses,
} = require('../services/expenses.service');
const { isValid } = require('../services/helpers');

function listExpenses(req, res) {
  const expenses = getExpenses(req.query);

  if (expenses) {
    res.json(expenses);
  } else {
    res.status(404).end();
  }
}

function getExpense(req, res) {
  const expense = getExpensesById(req.params.id);

  if (!expense) {
    return res.status(404).end();
  }

  res.json(expense);
}

function createExpense(req, res) {
  const body = req.body ?? {};

  if (!isValid(Object.values(body))) {
    return res.status(400).end();
  }

  const expense = creatEexpenses({ ...body });

  if (expense) {
    res.status(201).json(expense);
  } else {
    res.status(400).end();
  }
}

function handleUpdate(req, res) {
  const expense = updatEexpenses(req.params.id, req.body ?? {});

  if (!expense) {
    return res.status(404).end();
  }

  res.json(expense);
}

function deleteExpense(req, res) {
  const deleted = deletEexpenses(req.params.id);

  if (!deleted) {
    return res.status(404).end();
  }

  res.status(204).end();
}

module.exports = {
  listExpenses,
  getExpense,
  createExpense,
  handleUpdate,
  deleteExpense,
};
