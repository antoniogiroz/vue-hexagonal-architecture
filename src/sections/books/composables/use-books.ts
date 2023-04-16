import { useQuery } from '@tanstack/vue-query';
import type { BookRepository } from '@/modules/books/domain/book.repository';

export function useBooks() {
  const repository = inject('BookRepository') as BookRepository;

  const { data: books, isLoading } = useQuery(['books'], repository.getAll);

  return {
    books,
    isLoading,
  };
}
