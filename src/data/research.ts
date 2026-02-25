import type { Locale } from '@/utils/i18n';

export interface AcademicItem {
  title: string;
  note?: string;
  institution: string;
}

export interface ResearchFocus {
  title: string;
  subtitle: string;
}

export interface Talk {
  title: string;
  venue: string;
  date: string;
  note?: string;
}

export interface Translation {
  title: string;
  subtitle: string;
  year: string;
}

export interface ResearchData {
  pageTitle: string;
  sections: {
    academicCareer: string;
    researchFocus: string;
    talks: string;
    translations: string;
    moreInfo: string;
  };
  moreInfoText: string;
  academicCareer: AcademicItem[];
  researchFocus: ResearchFocus[];
  talks: Talk[];
  translations: Translation[];
}

export const researchData: Record<Locale, ResearchData> = {
  de: {
    pageTitle: 'Forschung',
    sections: {
      academicCareer: 'Akademischer Werdegang',
      researchFocus: 'Forschungsschwerpunkte',
      talks: 'Vorträge',
      translations: 'Wissenschaftliche Übersetzungen',
      moreInfo: 'Weitere Informationen',
    },
    moreInfoText: 'Eine vollständige Übersicht über meine Forschungsaktivitäten:',
    academicCareer: [
      { title: 'Promotion', note: 'fortlaufend', institution: 'Universität Bonn' },
      { title: 'Doctoral Course', note: 'online', institution: 'Universität Tromsø, Norwegen' },
      { title: 'Master of Arts', note: 'ausgezeichnet', institution: 'Universität Bonn' },
      { title: 'Special Research Student', institution: 'Tohoku University, Japan' },
      { title: 'Bachelor of Arts', institution: 'Universität Bonn' },
    ],
    researchFocus: [
      { title: 'Betrachtungen textueller Emotionen im Zuge von Erdbeben in der Tôhoku-Region', subtitle: 'seit 2022' },
      { title: "'Corona-Katastrophe' (korona-ka) während TOKYO2020", subtitle: '2022 · veröffentlicht' },
      { title: 'Konzeptueller Bedeutungswandel am Beispiel von ka', subtitle: '2021 · Masterarbeit' },
      { title: 'Übersetzung von Zeitzeugenberichten der Atombombenüberlebenden Frau Kimura', subtitle: '2019–2020 · NET-GTAS Global Peace & Universität Bonn' },
    ],
    talks: [
      { title: 'On Emotion Expressions in Classical Japanese (bungo)', venue: 'Tohoku University BUNGO-bun project 第10回研究会', date: '2025/02', note: 'Vortrag auf Einladung' },
      { title: 'Reflections on Emotive Traces in Texts', venue: '20th STaPs Augsburg / Budapest / Vienna', date: '2023/02' },
      { title: 'Vernissage zur Plakatausstellung der Atombombenabwürfe auf Hiroshima und Nagasaki', venue: 'Hiroshima-Nagasaki-Project, Universität Bonn', date: '2019/10', note: 'Beitrag auf Einladung' },
    ],
    translations: [
      { title: '"Nachrichten-Erfahrungen zu den Olympischen Spielen: Eine Fallstudie mit 18 Studierenden"', subtitle: 'Shingo Dobashi, Hosei University · JP→DE', year: '2022' },
      { title: 'Zeugenaussagen der Atombombenüberlebenden Frau Hisako Kimura', subtitle: 'NET-GTAS Global Peace & Universität Bonn · JP↔DE', year: '2019' },
      { title: 'Agrarwissenschaftliche Fachtexte zu amacha und ajisai', subtitle: 'Promotionsprojekt, Landwirtschaftliche Fakultät Universität Bonn · JP→DE', year: '2019' },
      { title: '"Tosa Nikki": Übersetzungsanalyse der ersten drei Tage', subtitle: 'unpubliziert', year: '2019' },
      { title: 'Übersetzung aus "Tsūshi no hōhō" (通史の方法)', subtitle: 'Miyachi Masato · unpubliziert', year: '2019' },
    ],
  },
  en: {
    pageTitle: 'Research',
    sections: {
      academicCareer: 'Academic Career',
      researchFocus: 'Research Focus',
      talks: 'Talks',
      translations: 'Academic Translations',
      moreInfo: 'More Information',
    },
    moreInfoText: 'A complete overview of my research activities:',
    academicCareer: [
      { title: 'PhD', note: 'ongoing', institution: 'University of Bonn' },
      { title: 'Doctoral Course', note: 'online', institution: 'UiT The Arctic University of Norway, Tromsø' },
      { title: 'Master of Arts', note: 'with distinction', institution: 'University of Bonn' },
      { title: 'Special Research Student', institution: 'Tohoku University, Japan' },
      { title: 'Bachelor of Arts', institution: 'University of Bonn' },
    ],
    researchFocus: [
      { title: 'Observations on textual emotions in the context of earthquakes in the Tōhoku region', subtitle: 'since 2022' },
      { title: "'Corona Disaster' (korona-ka) during TOKYO2020", subtitle: '2022 · published' },
      { title: 'Conceptual semantic change using the example of ka', subtitle: '2021 · Master thesis' },
      { title: 'Translation of eyewitness accounts of atomic bomb survivor Mrs. Kimura', subtitle: '2019–2020 · NET-GTAS Global Peace & University of Bonn' },
    ],
    talks: [
      { title: 'On Emotion Expressions in Classical Japanese (bungo)', venue: 'Tohoku University BUNGO-bun project 第10回研究会', date: '2025/02', note: 'Invited talk' },
      { title: 'Reflections on Emotive Traces in Texts', venue: '20th STaPs Augsburg / Budapest / Vienna', date: '2023/02' },
      { title: 'Vernissage for the poster exhibition on the atomic bombings of Hiroshima and Nagasaki', venue: 'Hiroshima-Nagasaki-Project, University of Bonn', date: '2019/10', note: 'Invited contribution' },
    ],
    translations: [
      { title: '"News experiences of the Olympic Games: A case study with 18 students"', subtitle: 'Shingo Dobashi, Hosei University · JP→DE', year: '2022' },
      { title: 'Testimonies of atomic bomb survivor Mrs. Hisako Kimura', subtitle: 'NET-GTAS Global Peace & University of Bonn · JP↔DE', year: '2019' },
      { title: 'Agricultural science texts on amacha and ajisai', subtitle: 'PhD project, Faculty of Agriculture, University of Bonn · JP→DE', year: '2019' },
      { title: '"Tosa Nikki": Translation analysis of the first three days', subtitle: 'unpublished', year: '2019' },
      { title: 'Translation from "Tsūshi no hōhō" (通史の方法)', subtitle: 'Miyachi Masato · unpublished', year: '2019' },
    ],
  },
  ja: {
    pageTitle: '研究',
    sections: {
      academicCareer: '学歴',
      researchFocus: '研究テーマ',
      talks: '学会発表',
      translations: '学術翻訳',
      moreInfo: '詳細情報',
    },
    moreInfoText: '研究活動の詳細はこちら:',
    academicCareer: [
      { title: '博士課程', note: '在籍中', institution: 'ボン大学' },
      { title: 'Doctoral Course', note: 'オンライン', institution: 'トロムソ大学（ノルウェー）' },
      { title: '修士号', note: '優秀', institution: 'ボン大学' },
      { title: '特別研究学生', institution: '東北大学' },
      { title: '学士号', institution: 'ボン大学' },
    ],
    researchFocus: [
      { title: '東北地方の地震に関するテキスト上の感情表現の考察', subtitle: '2022年〜' },
      { title: 'TOKYO2020における「コロナ禍」', subtitle: '2022年 · 発表済み' },
      { title: '「禍」を例とした概念的意味変化', subtitle: '2021年 · 修士論文' },
      { title: '原爆被爆者・木村さんの証言翻訳', subtitle: '2019–2020年 · NET-GTAS Global Peace & ボン大学' },
    ],
    talks: [
      { title: 'On Emotion Expressions in Classical Japanese (bungo)', venue: '東北大学 BUNGO-bun project 第10回研究会', date: '2025/02', note: '招待講演' },
      { title: 'Reflections on Emotive Traces in Texts', venue: '20th STaPs Augsburg / Budapest / Vienna', date: '2023/02' },
      { title: '広島・長崎原爆投下ポスター展オープニング', venue: 'Hiroshima-Nagasaki-Project, ボン大学', date: '2019/10', note: '招待発表' },
    ],
    translations: [
      { title: '「オリンピックのニュース体験：18人の学生によるケーススタディ」', subtitle: '土橋臣吾（法政大学）· JP→DE', year: '2022' },
      { title: '原爆被爆者・木村久子さんの証言', subtitle: 'NET-GTAS Global Peace & ボン大学 · JP↔DE', year: '2019' },
      { title: '甘茶と紫陽花に関する農学テキスト', subtitle: 'ボン大学農学部博士プロジェクト · JP→DE', year: '2019' },
      { title: '「土佐日記」：最初の三日間の翻訳分析', subtitle: '未発表', year: '2019' },
      { title: '「通史の方法」からの翻訳', subtitle: '宮地正人 · 未発表', year: '2019' },
    ],
  },
};

export function getResearchData(locale: Locale): ResearchData {
  return researchData[locale];
}
