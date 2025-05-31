export interface ImgFlipGetMemesResponse {
  success: boolean;
  data: {
    memes: Meme[];
  };
}
export interface Meme {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}
export interface MemeInfo {
  topText: string;
  bottomText: string;
  imgUrl: string;
}
