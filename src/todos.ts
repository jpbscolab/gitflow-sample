import { Todo } from './types';

// モック用の固定 ToDo データ(インメモリ)
export const todos: Todo[] = [
  { id: 1, title: 'Azure App Service を作成する', done: true },
  { id: 2, title: 'Node.js アプリをデプロイする', done: false },
  { id: 3, title: 'gitflow のデモを準備する', done: false },
];
