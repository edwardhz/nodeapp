const Transaction = require('../models/Transaction');

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user.userId });
    res.json(transactions);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching transactions' });
  }
};

module.exports = { getTransactions };
