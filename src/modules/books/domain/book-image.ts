export class BookCoverImageUrlNotValidError extends Error {
  constructor(imageUrl: string) {
    super(`Cover image url ${imageUrl} is not valid`);
  }
}

export function isBookCoverImageUrlValid(imageUrl: string): boolean {
  const regexExp = /^(?:https?:\/\/)?(?:[\w]+\.)(?:\.?[\w]{2,})(\/[\w]*)*(\.[\w]+)*/;

  return regexExp.test(imageUrl);
}

export function validateBookCoverUrlOrFail(imageUrl: string): void | never {
  if (!isBookCoverImageUrlValid(imageUrl)) {
    throw new BookCoverImageUrlNotValidError(imageUrl);
  }
}
