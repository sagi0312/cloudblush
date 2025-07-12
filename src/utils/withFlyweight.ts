export class BookWithMeta {
  title: string;
  author: string;
  content: string;
  shelf: number;

  constructor(title, author, content, shelf) {
    this.title = title;
    this.author = author;
    this.content = content;
    this.shelf = shelf;
  }
}

const library: BookWithMeta[] = [];

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
      "Happry Potter",
      "J.K.Rowling",
      "Heavy content".repeat(1000)
    );
    const bookWithMeta = new BookWithMeta(
      book?.title,
      book?.author,
      book?.content,
      Math.floor(Math.random() * 200)
    );
    library.push(bookWithMeta);
  }
  const t1 = performance.now();
  const duration = (t1 - t0).toFixed(2);
  return `yay! Flyweight: ${duration} ms | ${bookMap.size} unique Book objects`;
};
