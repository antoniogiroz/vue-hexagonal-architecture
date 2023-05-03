import type { Book } from '../../domain/book';
import type { BookRepository } from '../../domain/book.repository';

export function createBook(bookRepository: BookRepository, book: Book): void {
  bookRepository.save(book);
}
