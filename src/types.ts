export interface CardType {
  id: number;
  label: string;
  title: string;
  price: string | number;
  isHighlighted: boolean;
  stars?: number;
  artist?: string;
  review?: string;
  imageUrl?: string;
  link: string;
}
