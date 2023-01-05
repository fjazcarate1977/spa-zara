export interface PodcastListCardProps {
  image: string;
  title: string;
  author: string;
  id: string;
}

export interface PodcastInfoProps {
  id: string;
  rss: RssProps;
}

interface RssProps {
  title: string;
  description: string;
  image: string;
  items: RssItemProps[];
}

interface RssItemProps {
  title: string;
  itunes_duration: number | string;
  published: number;
}
