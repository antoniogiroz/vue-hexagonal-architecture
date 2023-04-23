import type { Book } from '../domain/book';
import type { BookRepository } from '../domain/book.repository';

async function save(book: Book): Promise<void> {
  const books = getAllFromLocalStorage();

  books.set(book.id, book);
  localStorage.setItem('books', JSON.stringify(Array.from(books.entries())));
}

async function get(id: string): Promise<Book | null> {
  const books = getAllFromLocalStorage();
  const book = books.get(id);

  if (!book) {
    return await null;
  }

  return await book;
}

async function getAll(): Promise<Book[]> {
  const books = getAllFromLocalStorage();

  return await Array.from(books.values());
}

function getAllFromLocalStorage(): Map<string, Book> {
  const books = localStorage.getItem('books');

  if (books === null) {
    return new Map();
  }

  return new Map(JSON.parse(books) as Iterable<[string, Book]>);
}

export function createLocalStorageBookRepository(): BookRepository {
  return {
    save,
    get,
    getAll,
  };
}
