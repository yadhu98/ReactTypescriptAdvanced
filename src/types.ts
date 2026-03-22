type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

type CartProducts = {
  productId: Pick<Product, "id">;
  quantity: number;
};

export type Carts = {
  id: number;
  userId: number;
  date: Date;
  products: CartProducts[];
  __v: number;
};

export type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };
