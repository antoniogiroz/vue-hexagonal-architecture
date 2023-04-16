import { randText } from '@ngneat/falso';
import { describe, expect, test } from 'vitest';
import { validateBookTitleOrFail } from '@/modules/books/domain/book-title';

describe('Book title validation', () => {
  test('should validate when title has 50 character', () => {
    const title = randText({ charCount: 50 });

    expect(() => validateBookTitleOrFail(title)).not.toThrow();
  });

  test('should validate when title has 1 character', () => {
    const title = randText({ charCount: 1 });

    expect(() => validateBookTitleOrFail(title)).not.toThrow();
  });

  test('should validate when title has 200 characters', () => {
    const title = randText({ charCount: 200 });

    expect(() => validateBookTitleOrFail(title)).not.toThrow();
  });

  test('should fail when title has more than 200 characters', () => {
    const title = randText({ charCount: 201 });

    expect(() => validateBookTitleOrFail(title)).toThrow();
  });

  test('should fail when title is empty', () => {
    const title = '';

    expect(() => validateBookTitleOrFail(title)).toThrow();
  });
});
