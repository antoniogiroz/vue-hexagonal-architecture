import { describe, expect, test } from 'vitest';
import { render, screen } from '~/unit';
import { createLocalStorageBookRepository } from '@/modules/books/infrastructure/local-storage-book.repository';
import Books from '@/sections/books/views/Books.vue';

const BookRepository = createLocalStorageBookRepository();

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
    BookRepository.save({
      isbn: '1234567890',
      title: 'The Book Title',
      author: 'The Author',
      coverImageUrl: 'https://example.com/image.jpg',
      readingStatus: 'ToRead',
    });

    render(Books, {
      global: {
        provide: {
          BookRepository,
        },
      },
    });

    const heading = await screen.findByRole('heading', { name: /The Book Title/i });

    expect(heading).toBeInTheDocument();
  });
});
