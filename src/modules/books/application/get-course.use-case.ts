import type { Book } from '../domain/book';
import type { BookRepository } from '../domain/book.repository';

export function getBook(bookRepository: BookRepository, id: string): Promise<Book | null> {
  return bookRepository.get(id);
}
