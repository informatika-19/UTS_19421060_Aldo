const kartupelajarModel = require('../model/Kartupelajar')
const objectId = require('mongoose').Types.ObjectId

//meng create data baru (create)
exports.create= (data) =>
  new Promise((resolve, reject)=> {
    kartupelajarModel.create(data)
      .then(()=> resolve({
        status : true,
        pesan : 'Berhasil Input Data Baru'
      })).catch(()=> ({
        status : false,
        pesan : 'Gagal Input Data Baru'
      }))
  })
//menampilkan data seluruh (read)
  exports.showAllData = () =>
    new Promise((resolve, reject) => {
        kartupelajarModel.find()
        .then(result => {
          resolve({
            status: true,
            pesan: 'Berhasil Menampilkan Data',
            data: result
          })
        }).catch(() => reject({
            status: false,
            pesan: 'Gagal Menapilkan Data',
            data: []
        }))
    })
// menampilkan data dengan object id (read)
exports.showDataById = (id) =>
    new Promise((resolve, reject) => {
        kartupelajarModel.findOne({
        _id: objectId(id)
    }).then(result => {
      resolve({
        status: true,
        pesan: 'Berhasil Menampilkan Data',
        data: result
      })
    }).catch(() => reject({
      status: false,
      pesan: 'Gagal Menapilkan Data',
      data: null
  }))
})
// update data dengan object id (update)
exports.update = (id, data) => 
  new Promise ((resolve, reject) => {
    kartupelajarModel.updateOne({
      _id: objectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil Mengubah Data'
    })).catch(() => reject({
        status: false,
        pesan: 'Gagal Mengubah Data'
    }))
})
//menghapus data dengan object id (delete)
exports.delete = (id) =>
  new Promise((resolve, reject) => {
    kartupelajarModel.deleteOne({
      _id: objectId(id)
    }).then(() => resolve ({
      status: true,
      pesan : 'Berhasil Menghapus Data'
    })).catch(() => reject({
      status: false,
      pesan: 'Gagal Menghapus Data'
  }))
})
