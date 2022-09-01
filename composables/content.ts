import { ref, Ref } from 'vue';

export type Content = {
  contentID: number;
  userID: number;
  title: string;
  body: string;
};

// fetchを行う場所
export function fetch(): Ref<Content[]> {
  const contents: Ref<Content[]> = ref<Content[]>([
    {
      contentID: 1,
      userID: 1,
      title: 'test1',
      body: 'testです。',
    },
    {
      contentID: 2,
      userID: 1,
      title: 'test2',
      body: 'test2です。',
    },
    {
      contentID: 3,
      userID: 1,
      title: 'test3',
      body: 'test3です。',
    },
    {
      contentID: 4,
      userID: 2,
      title: 'test4',
      body: 'test4です。',
    },
    {
      contentID: 5,
      userID: 2,
      title: 'test5',
      body: 'test5です。',
    },
  ]);
  return contents;
}

export const useContents = () => {
  const contents = useState<Content[]>('contents', fetch);
  return {
    contents: readonly(contents),
  };
};
