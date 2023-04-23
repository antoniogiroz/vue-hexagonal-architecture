export class BookIdNotValidError extends Error {
  constructor(id: string) {
    super(`Book id "${id}" is not valid`);
  }
}

export function isBookIdValid(id: string): boolean {
  const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

  return regexExp.test(id);
}

export function validateBookIdOrFail(id: string): void | never {
  if (!isBookIdValid(id)) {
    throw new BookIdNotValidError(id);
  }
}
