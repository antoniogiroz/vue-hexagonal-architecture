export type ReadingStatus = 'ToRead' | 'Reading' | 'Read' | 'Abandoned' | 'OnHold';

export interface BookDto {
  id: string;
  title: string;
  author: string;
  coverImageUrl: string;
  readingStatus: ReadingStatus;
  lastReadAt?: string;
}
