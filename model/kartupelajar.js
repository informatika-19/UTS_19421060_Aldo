const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kartupelajarSchema = new Schema({
  namalengkap: {
    type: String
  },
  noinduk: {
    type: Number
  },
  namalengkap: {
    type: String
  },
  jeniskelamin: {
    type: String
  },
  agama: {
    type: String
  },
  alamat: {
    type: String
  }

})
module.exports = mongoose.model('kartupelajar', kartupelajarSchema)