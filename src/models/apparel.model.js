const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');


const apparelSchema = mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      trim: true,
    },
    sortOder: {
      type: Number,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
apparelSchema.plugin(toJSON);
apparelSchema.plugin(paginate);


/**
 * @typedef Apparel
 */
const Apparel = mongoose.model('Apparel', apparelSchema);

module.exports = Apparel;
