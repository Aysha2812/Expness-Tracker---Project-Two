const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,

  },
  month: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;