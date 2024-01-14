export interface MenuItem {
  imageUrl: string
  imageDescription: string
  name: string
  price: string
  description: string
}

export interface ReviewCardProps {
  rating: string
  name: string
  imageUrl: string
  review?: string
}
