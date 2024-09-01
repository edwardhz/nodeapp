const mongoose = require('mongoose');
// Creamos el schema en Mongo
const TransactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  query: mongoose.Schema.Types.Mixed,
  result: Array,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
