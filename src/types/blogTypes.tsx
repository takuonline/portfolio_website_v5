interface ImageAssetReference {
  _ref?: string;
  _type: "reference";
}

export interface BlogImage {
  _type: "image";
  asset: ImageAssetReference;
}

interface Author {
  name: string;
  image: BlogImage;
}

interface BlockChild {
  // Assuming a simplified version, replace with actual detailed type if available
  text: string;
}

interface Block {
  _type: "block";
  style: string;
  _key: string;
  children: BlockChild[];
  markDefs: any[]; // Define more specifically if possible
  listItem?: string;
  level?: number;
}

export interface BlogPost {
  created: string;
  updated: string;
  author: Author;
  _id: string;
  name: null | string;
  title: string;
  body: Block[];
  mainImage: BlogImage;
  slug: string;
}
