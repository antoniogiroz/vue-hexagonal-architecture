import { describe, expect, test } from 'vitest';
import { validateBookOrFail } from '@/modules/books/domain/book';
import { BookMother } from './book.mother';

describe('Book', () => {
  describe('validateBookOrFail function', () => {
    test('should validate when pass a valid book', () => {
      const book = BookMother.create();

      expect(() => validateBookOrFail(book)).not.toThrow();
    });

    test('should fail when title is too short', () => {
      const book = BookMother.createWithTooShortTitle();

      expect(() => validateBookOrFail(book)).toThrow();
    });

    test('should fail when title is too long', () => {
      const book = BookMother.createWithTooLongTitle();

      expect(() => validateBookOrFail(book)).toThrow();
    });
  });
});
