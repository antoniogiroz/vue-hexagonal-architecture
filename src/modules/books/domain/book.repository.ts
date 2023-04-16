import type { Book } from './book';

export interface BookRepository {
  save(book: Book): Promise<void>;
  get(isbn: string): Promise<Book | null>;
  getAll(): Promise<Book[]>;
}
