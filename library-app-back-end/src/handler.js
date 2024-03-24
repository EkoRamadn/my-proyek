const books = require('./books.js')
// const { nanoid } = require('nanoid'); // Diperlukan untuk menghasilkan ID unik

const addNoteHandler = (request, h) => {
  const { name, author } = request.payload;
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  const id = Math.random(); // Menggunakan nanoid untuk menghasilkan ID unik

  const newNote = {
    name,
    author,
    id,
    createdAt,
    updatedAt,
  };

  books.push(newNote);

  const isSuccess = books.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });
  response.code(500);
  return response;
};

const getAllNotesHandler = (request, h) => { // Menambahkan parameter 'request' dan 'h'
  return h.response({
    status: 'success',
    data: {
      books,
    },
  });
};

module.exports = { addNoteHandler, getAllNotesHandler };
