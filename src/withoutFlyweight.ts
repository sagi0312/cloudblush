export interface BookWithMetaTraditional {
  title: string;
  author: string;
  isbn: string;
  content: string;
  availability: boolean;
  sales: number;
}

export function generateWithoutFlyweight(): string {
  const t0 = performance.now();
  const bookList: BookWithMetaTraditional[] = [];

  for (let i = 0; i < 100000; i++) {
    bookList.push({
      title: "Harry Potter",
      author: "JK Rowling",
      isbn: "AB123",
      content: "Book content goes here. ".repeat(1000), // 20KB duplicated every time
      availability: Math.random() > 0.5,
      sales: Math.floor(Math.random() * 1000),
    });
  }

  const t1 = performance.now();
  const duration = (t1 - t0).toFixed(2);
  return `❌ Without Flyweight: ${duration} ms | 100000 duplicate objects`;
}
