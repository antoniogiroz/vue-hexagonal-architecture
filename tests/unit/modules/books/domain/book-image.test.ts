import { randUrl } from '@ngneat/falso';
import { describe, expect, test } from 'vitest';
import { validateBookCoverUrlOrFail } from '@/modules/books/domain/book-image';

describe('Book cover image validation', () => {
  test('should validate when a url is passed', () => {
    const url = randUrl();

    expect(() => validateBookCoverUrlOrFail(url)).not.toThrow();
  });

  test('should validate when a url is passed without protocol', () => {
    const url = 'someurl.com';

    expect(() => validateBookCoverUrlOrFail(url)).not.toThrow();
  });

  test('should fail when the url has not the http or https protocol', () => {
    const url = 'ftp://someurl.com';

    expect(() => validateBookCoverUrlOrFail(url)).toThrow();
  });

  test('should fail when the url is wrong', () => {
    const url = 'some wrong url';

    expect(() => validateBookCoverUrlOrFail(url)).toThrow();
  });

  test('should fail when the url is empty', () => {
    const url = '';

    expect(() => validateBookCoverUrlOrFail(url)).toThrow();
  });
});
