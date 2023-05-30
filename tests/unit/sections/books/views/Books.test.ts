import { describe, expect, test } from 'vitest';
import { render, screen } from '~/unit';
import { BookMother } from '~/unit/modules/books/domain/book.mother';
import { createBookLocalStorageRepository } from '@/modules/books/infrastructure/book-local-storage.repository';
import Books from '@/sections/books/views/Books.vue';

const BookRepository = createBookLocalStorageRepository();

describe('Books.vue', () => {
  test('should render correctly with props', async () => {
    render(Books, {
      global: {
        provide: {
          BookRepository,
        },
      },
    });

    const booksTitle = await screen.findByRole('heading', { name: /Books/i });

    expect(booksTitle).toBeInTheDocument();
  });

  test('should render the list of books', async () => {
    const book = BookMother.create();
    BookRepository.save(book);

    render(Books, {
      global: {
        provide: {
          BookRepository,
        },
      },
    });

    const heading = await screen.findByRole('heading', { name: book.title });

    expect(heading).toBeInTheDocument();
  });
});
