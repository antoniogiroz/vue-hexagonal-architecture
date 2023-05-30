import type { ReadingStatus } from '../domain/book-reading-status';

export interface BookDto {
  id: string;
  title: string;
  author: string;
  coverImageUrl: string;
  readingStatus: ReadingStatus;
  lastReadAt?: string;
}
