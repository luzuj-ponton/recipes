export interface CardProps {
  photoUrl: string;
  title: string;
  rating: number;
  total: number;
  author?: string;
  id: string;
}

export interface HeartIconTypes {
  $isFilled: boolean;
}

export interface ImageContainerTypes {
  bgImage: string;
}
