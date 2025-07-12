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

export function generateWithoutFlyweight(): string {
  const t0 = performance.now();
  for (let i = 0; i < 100000; i++) {
    const bookWithMeta = new BookWithMeta(
      "Harry Potter",
      "J.K.Rowling",
      "Large content".repeat(1000),
      2
    );
    library.push(bookWithMeta);
  }
  const t1 = performance.now();
  const duration = (t1 - t0).toFixed(2);

  return `sad! Regular: ${duration} ms | ${library.length} unique Book objects`;
}
