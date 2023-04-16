export class BookTitleNotValidError extends Error {
  constructor(title: string) {
    super(`Title "${title}" is not valid`);
  }
}

export const TITLE_MIN_LENGTH = 1;
export const TITLE_MAX_LENGTH = 200;

export function isBookTitleValid(title: string): boolean {
  const trimmedTitle = title.trim().replace(/\s{2,}/g, ' ');

  const allowedCharacters = /^[\w\s.,!?:;'"()&%$#@*+\-—–_]+$/;

  return (
    trimmedTitle.length >= TITLE_MIN_LENGTH &&
    trimmedTitle.length <= TITLE_MAX_LENGTH &&
    allowedCharacters.test(trimmedTitle)
  );
}

export function validateBookTitleOrFail(title: string): void | never {
  if (!isBookTitleValid(title)) {
    throw new BookTitleNotValidError(title);
  }
}
