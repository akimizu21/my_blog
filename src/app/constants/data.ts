/**
 * data
 */

/**
 * INIT_CATEGORYSの型定義
 */
export interface ContentItem {
  id: number;
  title: string;
  text: string;
  year: number;
  month: number;
  day: number;
}

export interface Contents {
  name: string;
  contents: ContentItem[]; 
}

const d = new Date()

export const INIT_CONTENTS: Contents[] = [
  {
    name: "お金",
    contents: [
      {
        id: 1,
        title: "お金1",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d. getDate(),
      },
      {
        id: 2,
        title: "お金2",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d. getDate(),
      },
      {
        id: 3,
        title: "お金3",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d. getDate(),
      },
    ]
  },
  {
    name: "仕事",
    contents: [
      {
        id: 4,
        title: "仕事1",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d. getDate(),
      },
      {
        id: 5,
        title: "仕事2",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d. getDate(),
      },
      {
        id: 6,
        title: "仕事3",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d. getDate(),
      },
    ]
  },
  {
    name: "暮らし",
    contents: [
      {
        id: 7,
        title: "暮らし1",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d. getDate(),
      },
      {
        id: 8,
        title: "暮らし2",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d. getDate(),
      },
      {
        id: 9,
        title: "暮らし3",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d. getDate(),
      },
    ]
  },
  {
    name: "旅行&グルメ",
    contents: [
      {
        id: 10,
        title: "旅行&グルメ1",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d. getDate(),
      },
      {
        id: 11,
        title: "旅行&グルメ2",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d. getDate(),
      },
      {
        id: 12,
        title: "旅行&グルメ3",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d. getDate(),
      },
    ]
  },
  {
    name: "趣味",
    contents: [
      {
        id: 13,
        title: "趣味1",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d. getDate(),
      },
      {
        id: 14,
        title: "趣味2",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d. getDate(),
      },
      {
        id: 15,
        title: "趣味3",
        text:  "テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト",
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d. getDate(),
      },
    ]
  },
];

// 現在の最大IDを取得
export const INIT_CONTENTS_ID = Math.max(
  ...INIT_CONTENTS.flatMap(category => category.contents.map(content => content.id))
);