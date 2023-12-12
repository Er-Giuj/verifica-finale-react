export default interface ApiType {
  id: string;
  name: string;
  coverImage: string;
  date: string;
  description: {
    short: string;
    long: string;
  };
  dresscode: string;
  price: number;
  includedDrinks: Array<string>;
  tags: Array<string>;
  isAperitivoIncluded: boolean;
}
