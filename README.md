# 🎯 Frontend Design Patterns: Flyweight & Proxy (Performance Demo)

This project demonstrates how to use the **Flyweight** and **Proxy** design patterns to optimize performance and structure in frontend applications. Built with React + TypeScript, it highlights how these patterns can improve performance using clear, measurable examples.

---

## 🧠 Why These Patterns?

### 🔹 Flyweight Pattern
Efficiently shares immutable data across many objects to reduce memory usage. Useful when creating large numbers of similar objects.

> In this demo: We simulate 100,000 books. With Flyweight, we reuse a single `Book` instance to reduce memory load.

### 🔹 Proxy Pattern
Acts as an intermediary to control access or enhance behavior of another function or object. Ideal for caching, logging, lazy loading, etc.

> In this demo: We wrap an expensive operation inside a Proxy to cache its result and save execution time.

---

## 🧪 Demos

### ✅ Flyweight
Creates 100,000 books with 20KB content each.

Without Flyweight: New object every time.

With Flyweight: Reuses the intrinsic parts (book content, title, author).

### ✅ Proxy
Simulates a CPU-heavy operation.

Without Proxy: Operation runs fresh every time.

With Proxy: Caches and reuses result on subsequent calls.

## ⚙️ How to Run

Clone the repo
npm install
npm run dev

## 🙋‍♀️ Author
Anju Karanji
