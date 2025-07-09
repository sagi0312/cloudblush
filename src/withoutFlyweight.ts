export interface BookWithMetaTraditional {
  title: string;
  author: string;
  isbn: string;
  content: string;
  availability: boolean;
}

export function generateWithoutFlyweight(): string {
  const t0 = performance.now();
  const library: BookWithMetaTraditional[] = [];

  for (let i = 0; i < 100000; i++) {
    library.push({
      title: "Harry Potter and the Order of the Phoenix",
      author: "JK Rowling",
      isbn: "AB123",
      content: "Book content goes here. ".repeat(1000), // 20KB duplicated every time
      availability: Math.random() > 0.5,
    });
  }

  const t1 = performance.now();
  const duration = (t1 - t0).toFixed(2);
  return `❌ Without Flyweight: ${duration} ms | 100000 duplicate objects`;
}
