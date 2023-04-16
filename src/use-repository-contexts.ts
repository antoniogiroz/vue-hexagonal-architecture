import { createLocalStorageBookRepository } from './modules/books/infrastructure/local-storage-book.repository';

export function useRepositoryContexts() {
  provide('BookRepository', createLocalStorageBookRepository());
}
