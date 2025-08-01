class BookWithMeta {
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

const bookShop: BookWithMeta[] = [];

export function generateWithoutFlyweight(): string {
  const t0 = performance.now();
  for (let i = 0; i < 100000; i++) {
    const bookWithMeta = new BookWithMeta(
      "Harry Potter - 5th",
      "J.K.Rowling",
      "Huge Content".repeat(1000),
      Math.floor(Math.random() * 200)
    );
    bookShop.push(bookWithMeta);
  }
  const t1 = performance.now();
  const duration = (t1 - t0).toFixed(2);
  return `${duration}ms to create ${bookShop.length} objects`;
}
