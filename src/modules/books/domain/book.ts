import { validateBookIdOrFail } from './book-id';
import { validateBookCoverUrlOrFail } from './book-image';
import { validateBookTitleOrFail } from './book-title';

export type ReadingStatus = 'ToRead' | 'Reading' | 'Read' | 'Abandoned' | 'OnHold';

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImageUrl: string;
  readingStatus: ReadingStatus;
}

export function validateBookOrFail({ id, title, coverImageUrl }: Book): void {
  validateBookIdOrFail(id);
  validateBookTitleOrFail(title);
  validateBookCoverUrlOrFail(coverImageUrl);
}
