class BookWithMeta {
  // Intrinsic variables
  title: string;
  author: string;
  content: string;

  // Extrinsic variables
  shelf: number;

  constructor(title, author, content, shelf) {
    this.title = title;
    this.author = author;
    this.content = content;
    this.shelf = shelf;
  }
}

class Book {
  title: string;
  author: string;
  content: string;

  constructor(title, author, content) {
    this.title = title;
    this.author = author;
    this.content = content;
  }
}

const bookShop: BookWithMeta[] = [];
const bookMap = new Map<string, Book>();

const createBook = (title, author, content) => {
  if (bookMap.has(title)) {
    return bookMap.get(title);
  }
  const newBook = new Book(title, author, content);
  bookMap.set(title, newBook);
  return newBook;
};

export const generateWithFlyweight = (): string => {
  const t0 = performance.now();
  for (let i = 0; i < 100000; i++) {
    const book = createBook(
      "Harry Potter - 5th",
      "J.K.Rowling",
      "Huge Content".repeat(1000)
    );
    const bookWithMeta = new BookWithMeta(
      book?.title,
      book?.author,
      book?.content,
      Math.floor(Math.random() * 200)
    );
    bookShop.push(bookWithMeta);
  }
  const t1 = performance.now();
  const duration = (t1 - t0).toFixed(2);
  return `${duration}ms to create ${bookMap.size} objects`;
};
