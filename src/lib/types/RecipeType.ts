type RecipeType = {
  id: string;
  nameja: string;
  nameen: string;
  overview: string;
  time: string;
  ingredients: { name: string; vol: string }[];
  steps: { row: number; step: string }[];
  storage: string;
  tips: string;
  calories: string;
  variation: string;
};
export default RecipeType;
