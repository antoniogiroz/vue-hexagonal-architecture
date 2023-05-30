import { randFullName, randImg, randPastDate, randText, randTextRange, randUuid } from '@ngneat/falso';
import { Factory } from 'fishery';
import type { Book } from '@/modules/books/domain/book';
import type { ReadingStatus } from '@/modules/books/domain/book-reading-status';
import { TITLE_MAX_LENGTH, TITLE_MIN_LENGTH } from '@/modules/books/domain/book-title';

function randBookReadingStatus(): ReadingStatus {
  const readingStatus: ReadingStatus[] = ['ToRead', 'Reading', 'Read', 'Abandoned', 'OnHold'];
  const randomIndex = Math.floor(Math.random() * readingStatus.length);

  return readingStatus[randomIndex];
}

const BookFactory = Factory.define<Book>(() => ({
  id: randUuid(),
  title: randTextRange({ min: TITLE_MIN_LENGTH, max: TITLE_MAX_LENGTH }),
  author: randFullName(),
  coverImageUrl: randImg(),
  readingStatus: randBookReadingStatus(),
  lastReadAt: randPastDate(),
}));

export const BookMother = {
  create: (params?: Partial<Book>): Book => {
    return BookFactory.build(params);
  },
  createList: (length = 5): Book[] => {
    return BookFactory.buildList(length);
  },
  createWithTooShortTitle: (): Book => {
    return BookFactory.build({
      title: '',
    });
  },
  createWithTooLongTitle: (): Book => {
    return BookFactory.build({
      title: randText({ charCount: 201 }),
    });
  },
};
