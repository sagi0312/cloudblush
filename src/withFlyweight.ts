interface Book {
  title: string;
  author: string;
  isbn: string;
  content: string;
}

export interface BookWithMeta {
  book: Book;
  availability: boolean;
}

const books = new Map<string, Book>();

const createBook = (title: string, author: string, isbn: string): Book => {
  if (books.has(isbn)) return books.get(isbn)!;

  const book: Book = {
    title,
    author,
    isbn,
    content: "Book content goes here. ".repeat(1000),
  };

  books.set(isbn, book);
  return book;
};

export const generateWithFlyweight = (): string => {
  books.clear();
  const t0 = performance.now();
  const library: BookWithMeta[] = [];

  for (let i = 0; i < 100000; i++) {
    library.push({
      book: createBook(
        "Harry Potter and the Order of the Phoenix",
        "JK Rowling",
        "AB123"
      ), // Same book shared
      availability: Math.random() > 0.5,
    });
  }

  const t1 = performance.now();
  const duration = (t1 - t0).toFixed(2);

  return `✅ With Flyweight: ${duration} ms | ${books.size} shared Book object`;
};
