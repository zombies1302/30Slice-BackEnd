const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema(
  {
    Id_Writer: { type: mongoose.Schema.Types.ObjectId, ref: 'login' },
    Id_Categories: { type: mongoose.Schema.Types.ObjectId, ref: 'categories' },
    image: { type: String, require: true },
    Title: { type: String, require: true },
    Content: { type: String, required: true },
    Create_By: { type: String, required: true },
    Is_Delete: { type: Boolean, default: false },
    Views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('news', NewsSchema);
