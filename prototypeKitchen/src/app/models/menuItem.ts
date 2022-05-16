export class MenuItem {
  id: number;
  name: string;
  englishName: string;
  image: string;
  price: number;
  quantity: number;
  calories: number;
  status: string;
  prepTime: string;
  recipeDescription: string;
  ingredients: Ingredients[]; 
  popularityRanking: number;
  mostOftenPairedWith: string;
  dailyOrders: number;
  weeklyOrders: number;
  dailyGross: number;
  weeklyGross: number;
  promotions: Promotion[];
}

export class Ingredients{
  id: number;
  name: string;
  quantity: number;
  units: string;
}

export class Promotion{
  id: number;
  enabled: boolean;
  description: string;
  requirements: string;
  dealType: string;
  discountAmount: number;
  itemsApplicable: number;
  applicableItemName: string;
  limitations: string;
}
