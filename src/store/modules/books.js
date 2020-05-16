export default {
  state: {
    books: [
      {
        id: 'a1',
        title: 'Harry Potter and philosophical stone - 1',
        description: 'Первая глава первой книги о Гарри Поттере',
        imageId: 'cvbcvncn',
        parts: 7,
        level: ['B2', 'C1'],
        rating: 4,
        ratingsCount: 100,
        youtube_playlist_id: 'ghjghj345345'
      },
      {
        id: 'a2',
        title: 'Harry Potter and philosophical stone - 2',
        description: 'Вторая глава первой книги о Гарри Поттере',
        imageId: 'cvbcvncn',
        parts: 7,
        level: ['B1', 'B2'],
        rating: 3.5,
        ratingsCount: 55,
        youtube_playlist_id: 'ghjghj345345'
      },
      {
        id: 'a3',
        title: 'Harry Potter and philosophical stone - 3',
        description: 'Третья глава первой книги о Гарри Поттере',
        imageId: 'cvbcvncn',
        parts: 7,
        level: ['A2'],
        rating: 2,
        ratingsCount: 80,
        youtube_playlist_id: 'ghjghj345345'
      }
    ]
  },
  mutations: {
    SET_BOOKS(state, payload) {
      state.books = payload
    }
  },
  getters: {
    getBooks(state) {
      return state.books
    }
  }
}