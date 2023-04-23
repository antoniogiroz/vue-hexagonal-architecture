import type { Book } from './book';

export interface BookRepository {
  save(book: Book): Promise<void>;
  get(id: string): Promise<Book | null>;
  getAll(): Promise<Book[]>;
}
