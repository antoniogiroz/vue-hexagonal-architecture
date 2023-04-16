import { validateBookCoverUrlOrFail } from './book-image';
import { validateIsbnOrFail } from './book-isbn';
import { validateBookTitleOrFail } from './book-title';

export type ReadingStatus = 'ToRead' | 'Reading' | 'Read' | 'Abandoned' | 'OnHold';

export interface Book {
  isbn: string;
  title: string;
  author: string;
  coverImageUrl: string;
  readingStatus: ReadingStatus;
}

export function validateBookOrFail({ isbn, title, coverImageUrl }: Book): void {
  validateIsbnOrFail(isbn);
  validateBookTitleOrFail(title);
  validateBookCoverUrlOrFail(coverImageUrl);
}
