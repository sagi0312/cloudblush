interface Book {
  title: string;
  author: string;
  isbn: string;
  content: string; // This is the heavy data we want to share
}

export interface BookWithMeta {
  book: Book; // Reference to shared flyweight
  availability: boolean;
  sales: number;
}

const books = new Map<string, Book>();

const createBook = (title: string, author: string, isbn: string): Book => {
  if (books.has(isbn)) return books.get(isbn)!;

  const book: Book = {
    title,
    author,
    isbn,
    content: "Book content goes here. ".repeat(1000), // 20KB+ of repeated text
  };

  books.set(isbn, book);
  return book;
};

export const generateWithFlyweight = (): string => {
  books.clear();
  const t0 = performance.now();
  const bookList: BookWithMeta[] = [];

  for (let i = 0; i < 100000; i++) {
    bookList.push({
      book: createBook("Harry Potter", "JK Rowling", "AB123"), // Same book shared
      availability: Math.random() > 0.5,
      sales: Math.floor(Math.random() * 1000),
    });
  }

  const t1 = performance.now();
  const duration = (t1 - t0).toFixed(2);

  return `✅ With Flyweight: ${duration} ms | ${books.size} shared Book object`;
};
