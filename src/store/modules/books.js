export default {
  state: {
    books: [
      {
        id: 'a1',
        title: 'Harry Potter and sorcerers stone - 1',
        description: 'Первая глава первой книги о Гарри Поттере',
        imageId: 'cvbcvncn',
        level: ['B2', 'C1'],
        rating: 4,
        ratingsCount: 100,
        youtube_playlist_id: 'ghjghj345345',
        parts: [
          {
            id: 'p1',
            title: 'Chapter 1',
            youtube_id: 'zzxczxc'
          },
          {
            id: 'p2',
            title: 'Chapter 2',
            youtube_id: 'zzxczxc'
          },
          {
            id: 'p3',
            title: 'Chapter 3',
            youtube_id: 'zzxczxc'
          },
          {
            id: 'p4',
            title: 'Chapter 4',
            youtube_id: 'zzxczxc'
          },
        ]
      },
      {
        id: 'a2',
        title: 'Harry Potter and sorcerers stone - 2',
        description: 'Вторая глава первой книги о Гарри Поттере',
        imageId: 'cvbcvncn',
        level: ['B1', 'B2'],
        rating: 3.5,
        ratingsCount: 55,
        youtube_playlist_id: 'ghjghj345345',
        parts: [
          {
            id: 'p1',
            title: 'Chapter 1',
            youtube_id: 'zzxczxc'
          },
          {
            id: 'p2',
            title: 'Chapter 2',
            youtube_id: 'zzxczxc'
          },
          {
            id: 'p3',
            title: 'Chapter 3',
            youtube_id: 'zzxczxc'
          },
          {
            id: 'p4',
            title: 'Chapter 4',
            youtube_id: 'zzxczxc'
          },
        ]
      },
      {
        id: 'a3',
        title: 'Harry Potter and sorcerers stone - 3',
        description: 'Третья глава первой книги о Гарри Поттере',
        imageId: 'cvbcvncn',
        level: ['A2'],
        rating: 2,
        ratingsCount: 80,
        youtube_playlist_id: 'ghjghj345345',
        parts: [
          {
            id: 'p1',
            title: 'Chapter 1',
            youtube_id: 'zzxczxc'
          },
          {
            id: 'p2',
            title: 'Chapter 2',
            youtube_id: 'zzxczxc'
          },
          {
            id: 'p3',
            title: 'Chapter 3',
            youtube_id: 'zzxczxc'
          },
          {
            id: 'p4',
            title: 'Chapter 4',
            youtube_id: 'zzxczxc'
          },
        ]
      }
    ],
    bookParts: [
      {
        bookId: 'b1',
        bookPartId: 'bp1',
        bookTitle: 'Harry Pooter and sorcerers stone',
        partTitle: 'Chapter 1',
        youtube_id: 'u4DUmKFScvU',
        content: [
          {
            sentences: [
              {
                origText: 'English text 1',
                transText: 'Текст на русском языке 1'
              },
              {
                origText: 'English text 2',
                transText: 'Текст на русском языке 2'
              },
              {
                origText: 'English text 3',
                transText: 'Текст на русском языке 3'
              }
            ]
          },
          {
            sentences: [
              {
                origText: 'English text 4',
                transText: 'Текст на русском языке 4'
              },
              {
                origText: 'English text 5',
                transText: 'Текст на русском языке 5'
              },
              {
                origText: 'English text 6',
                transText: 'Текст на русском языке 6'
              }
            ]
          },
          {
            sentences: [
              {
                origText: 'English text 7',
                transText: 'Текст на русском языке 7'
              },
              {
                origText: 'English text 8',
                transText: 'Текст на русском языке 8'
              },
              {
                origText: 'English text 9',
                transText: 'Текст на русском языке 9'
              }
            ]
          },
        ],
        words: [
          {
            origWord: 'Hello 1',
            transWord: 'Привет 1'
          },
          {
            origWord: 'Hello 2',
            transWord: 'Привет 2'
          },
          {
            origWord: 'Hello 3',
            transWord: 'Привет 3'
          },
          {
            origWord: 'Hello 4',
            transWord: 'Привет 4'
          },
          {
            origWord: 'Hello 5',
            transWord: 'Привет 5'
          },
          {
            origWord: 'Hello 6',
            transWord: 'Привет 6'
          },
          {
            origWord: 'Hello 7',
            transWord: 'Привет 7'
          },
          {
            origWord: 'Hello 8',
            transWord: 'Привет 8'
          }
        ]
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
    },
    getParts(state) {
      return state.booksparts
    }
  }
}