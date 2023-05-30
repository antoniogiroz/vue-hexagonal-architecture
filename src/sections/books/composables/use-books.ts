import { useQuery } from '@tanstack/vue-query';
import { getAllBooks } from '@/modules/books/application/get-all-books.use-case';
import type { BookRepository } from '@/modules/books/domain/book.repository';

export function useBooks() {
  const repository = inject('BookRepository') as BookRepository;

  const { data: books, isLoading } = useQuery(['books'], () => getAllBooks(repository));

  return {
    books,
    isLoading,
  };
}
