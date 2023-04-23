import { randText, randUuid } from '@ngneat/falso';
import { describe, expect, test } from 'vitest';
import { validateBookIdOrFail } from '@/modules/books/domain/book-id';

describe('Book id validation', () => {
  test('should validate when the book id is a valid uuid', () => {
    const id = randUuid();

    expect(() => validateBookIdOrFail(id)).not.toThrow();
  });

  test('should fail when the book id is not a valid uuid', () => {
    const id = randText();

    expect(() => validateBookIdOrFail(id)).toThrow();
  });
});
