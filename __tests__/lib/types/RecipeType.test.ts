import type { RecipeType } from '@src/lib/types';

describe('RecipeType', () => {
  it('should have the correct properties', () => {
    const recipe: RecipeType = {
      id: '1',
      nameja: 'カレーライス',
      nameen: 'Curry Rice',
      overview: '美味しいカレーライスの作り方',
      time: '30分',
      ingredients: [
        { name: '米', vol: '2合' },
        { name: '玉ねぎ', vol: '1個' },
        { name: 'にんじん', vol: '1本' },
        { name: '牛肉', vol: '200g' },
        { name: 'カレールー', vol: '1箱' },
      ],
      steps: [
        { row: 1, step: '野菜を切る' },
        { row: 2, step: '肉を炒める' },
        { row: 3, step: 'ルーを溶かす' },
        { row: 4, step: '全てを混ぜて煮込む' },
      ],
      storage: '冷蔵庫で3日間保存可能',
      tips: 'お好みでチーズをトッピングしても美味しいです',
      calories: '1人分あたり500kcal',
      variation: '鶏肉や豚肉を使うとさっぱりした味わいになります',
    };

    expect(recipe.id).toEqual('1');
    expect(recipe.nameja).toEqual('カレーライス');
    expect(recipe.nameen).toEqual('Curry Rice');
    expect(recipe.overview).toEqual('美味しいカレーライスの作り方');
    expect(recipe.time).toEqual('30分');
    expect(recipe.ingredients.length).toEqual(5);
    expect(recipe.steps.length).toEqual(4);
    expect(recipe.storage).toEqual('冷蔵庫で3日間保存可能');
    expect(recipe.tips).toEqual('お好みでチーズをトッピングしても美味しいです');
    expect(recipe.calories).toEqual('1人分あたり500kcal');
    expect(recipe.variation).toEqual('鶏肉や豚肉を使うとさっぱりした味わいになります');
  });
});
