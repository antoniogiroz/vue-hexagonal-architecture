import { type Book, validateBookOrFail } from '../domain/book';
import type { BookRepository } from '../domain/book.repository';

export function createBook(bookRepository: BookRepository, book: Book): Promise<void> {
  validateBookOrFail(book);

  return bookRepository.save(book);
}
