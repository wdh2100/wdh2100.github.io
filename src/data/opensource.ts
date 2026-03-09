export interface OpenSourceItem {
  title: string;
  venue: string;
  role: string;
  detail: string;
  skill: string;
  year: string;
  link?: string;
}

export const opensource: OpenSourceItem[] = [
  {
    title: 'mui-datatables',
    venue: 'openSources',
    role: 'Front-end, Maintainer',
    detail: '',
    skill: 'React, Babel, Jest, Rollup',
    year: '2019 ~ 2023',
    link: 'https://github.com/gregnb/mui-datatables',
  },
];
