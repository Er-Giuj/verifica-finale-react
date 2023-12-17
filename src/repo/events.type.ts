export  interface ApiTypeEvents {
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
export interface ApiTypeEvent{
  id: string;
  name: string;
  coverImage: string;
  date: string;
  data:string;
  description: {
    long: string;
    short: string;
  };
  dresscode: string;
  price: number;
  includedDrinks: Array<string>;
  tags: Array<string>;
  isAperitivoIncluded: boolean;
  includedDishes:Array<{
    name:string;
    description:string
    allergens: Array<string>
  }>
  slotOrari:Array<string>
}
