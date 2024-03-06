interface IBook {
  title: string;
}

interface IVariation {
  title: string;
  signUpText: string;
  books?: IBook[];
}

export type { IVariation };
