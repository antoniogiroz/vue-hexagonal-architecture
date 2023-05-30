import type { Id } from '@/core/types/id';
import { validateBookIdOrFail } from './book-id';
import { validateBookCoverUrlOrFail } from './book-image';
import type { ReadingStatus } from './book-reading-status';
import { validateBookTitleOrFail } from './book-title';

export interface Book {
  id: Id;
  title: string;
  author: string;
  coverImageUrl: string;
  readingStatus: ReadingStatus;
  lastReadAt?: Date;
}

export function validateBookOrFail({ id, title, coverImageUrl }: Book): void {
  validateBookIdOrFail(id);
  validateBookTitleOrFail(title);
  validateBookCoverUrlOrFail(coverImageUrl);
}
