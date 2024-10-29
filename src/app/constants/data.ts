/**
 * data
 */

/**
 * INIT_CATEGORYSの型定義
 */
export interface Contents {
  name: string;
  contents: {
    id: number;
    title: string;
    text: string
  }[]; 
}


export const INIT_CONTENTS: Contents[] = [
  {
    name: "お金",
    contents: [
      {
        id: 1,
        title: "お金1",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
      },
      {
        id: 2,
        title: "お金2",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
      },
      {
        id: 3,
        title: "お金3",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
      },
    ]
  },
  {
    name: "仕事",
    contents: [
      {
        id: 1,
        title: "仕事1",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
      },
      {
        id: 2,
        title: "仕事2",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
      },
      {
        id: 3,
        title: "仕事3",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
      },
    ]
  },
  {
    name: "暮らし",
    contents: [
      {
        id: 1,
        title: "暮らし1",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
      },
      {
        id: 2,
        title: "暮らし2",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
      },
      {
        id: 3,
        title: "暮らし3",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
      },
    ]
  },
  {
    name: "旅行&グルメ",
    contents: [
      {
        id: 1,
        title: "旅行&グルメ1",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
      },
      {
        id: 2,
        title: "旅行&グルメ2",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
      },
      {
        id: 3,
        title: "旅行&グルメ3",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
      },
    ]
  },
  {
    name: "趣味",
    contents: [
      {
        id: 1,
        title: "趣味1",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
      },
      {
        id: 2,
        title: "趣味2",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
      },
      {
        id: 3,
        title: "趣味3",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
      },
    ]
  },
];