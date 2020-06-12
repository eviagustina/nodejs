//ini untuk standarisasi respons atau keluaran bentuknya bagaimana

'use strict';

exports.ok = function(values, res) {
  var data = {
      'status': 200,
      'values': values
  };
  res.json(data); //nah data inilah yang akan dikembalikan jadi json
  res.end(); //dipake untuk nutup koneksi ke database setelah data ditampilin ke json.
};