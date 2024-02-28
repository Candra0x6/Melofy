export interface FromData {
  name: string;
  description: string;
  public: boolean;
  image: File | null;
  imageBase64: string;
  previewUrl: string;
}

export const INITIAL_DATA: FromData = {
  name: "",
  description: "",
  public: true,
  image: null,
  imageBase64: "",
  previewUrl: "",
};
