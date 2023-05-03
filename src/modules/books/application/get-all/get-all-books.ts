import type { Book } from '../../domain/book';
import type { BookRepository } from '../../domain/book.repository';

export function getAllBooks(bookRepository: BookRepository): Promise<Book[]> {
  return bookRepository.getAll();
}
