export class BookIsbnNotValidError extends Error {
  constructor(isbn: string) {
    super(`ISBN ${isbn} is not valid`);
  }
}

export function isIsbnValid(isbn: string): boolean {
  const regexExp =
    /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;

  return regexExp.test(isbn);
}

export function validateIsbnOrFail(isbn: string): void | never {
  if (!isIsbnValid(isbn)) {
    throw new BookIsbnNotValidError(isbn);
  }
}
