import { describe, expect, test } from 'vitest';
import { BookIsbnNotValidError, validateIsbnOrFail } from '@/modules/books/domain/book-isbn';

describe('Book ISBN validation', () => {
  test('should validate when ISBN is valid (10 digits)', () => {
    const isbn = '0-306-40615-2';

    expect(() => validateIsbnOrFail(isbn)).not.toThrow();
  });

  test('should validate when ISBN is valid (13 digits)', () => {
    const isbn = '978-1-56619-909-4';

    expect(() => validateIsbnOrFail(isbn)).not.toThrow();
  });

  test('should validate when ISBN is valid with ISBN prefix', () => {
    const isbn = 'ISBN 978-1-56619-909-4';

    expect(() => validateIsbnOrFail(isbn)).not.toThrow();
  });

  test('should validate when ISBN is valid with ISBN-10 prefix', () => {
    const isbn = 'ISBN-10 0-306-40615-2';

    expect(() => validateIsbnOrFail(isbn)).not.toThrow();
  });

  test('should validate when ISBN is valid with ISBN-10 and colon prefix', () => {
    const isbn = 'ISBN-10: 0-306-40615-2';

    expect(() => validateIsbnOrFail(isbn)).not.toThrow();
  });

  test('should validate when ISBN is valid with ISBN-13 prefix', () => {
    const isbn = 'ISBN-13 978-1-56619-909-4';

    expect(() => validateIsbnOrFail(isbn)).not.toThrow();
  });

  test('should validate when ISBN is valid with ISBN-13 and colon prefix', () => {
    const isbn = 'ISBN-13: 978-1-56619-909-4';

    expect(() => validateIsbnOrFail(isbn)).not.toThrow();
  });

  test('should fail when ISBN has less than 10 digits', () => {
    const isbn = '0-306-406';

    expect(() => validateIsbnOrFail(isbn)).toThrow(BookIsbnNotValidError);
  });

  test('should fail when ISBN has more than 13 digits', () => {
    const isbn = '978-1-56619-909-4567';

    expect(() => validateIsbnOrFail(isbn)).toThrow(BookIsbnNotValidError);
  });

  test('should fail when ISBN has invalid characters', () => {
    const isbn = '978-1-56619-9O9-4';

    expect(() => validateIsbnOrFail(isbn)).toThrow(BookIsbnNotValidError);
  });

  test('should fail when ISBN has invalid format', () => {
    const isbn = '978-1-56619909-4';

    expect(() => validateIsbnOrFail(isbn)).toThrow(BookIsbnNotValidError);
  });

  test('should validate when ISBN is valid (10 digits) with spaces', () => {
    const isbn = '0 306 40615 2';

    expect(() => validateIsbnOrFail(isbn)).not.toThrow();
  });

  test('should validate when ISBN is valid (13 digits) with spaces', () => {
    const isbn = '978 1 56619 909 4';

    expect(() => validateIsbnOrFail(isbn)).not.toThrow();
  });

  test('should validate when ISBN is valid (10 digits) without separators', () => {
    const isbn = '0306406152';

    expect(() => validateIsbnOrFail(isbn)).not.toThrow();
  });

  test('should validate when ISBN is valid (13 digits) without separators', () => {
    const isbn = '9781566199094';

    expect(() => validateIsbnOrFail(isbn)).not.toThrow();
  });
});
