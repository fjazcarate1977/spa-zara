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

export interface RssProps {
  card: RssCardProps;
  items: RssItemProps[];
}

export interface RssCardProps {
  title: string;
  description: string;
  image: string;
}

export interface RssItemProps {
  title: string;
  itunes_duration: number | string;
  published: number;
}
