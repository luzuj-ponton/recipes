export interface CardProps {
  photoUrl: string;
  title: string;
  rating: number;
  total: number;
  author?: string;
  id: string;
}

export interface HeartIconProps {
  $isFilled: boolean;
}

export interface ImageContainerProps {
  bgImage: string;
}
