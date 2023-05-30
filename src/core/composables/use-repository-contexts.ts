import { createBookLocalStorageRepository } from '../../modules/books/infrastructure/book-local-storage.repository';

export function useRepositoryContexts() {
  provide('BookRepository', createBookLocalStorageRepository());
}
