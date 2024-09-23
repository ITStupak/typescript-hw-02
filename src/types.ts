export type Image = {
  id: number;
  alt_description: string;
  urls: { small: string; regular: string; [key: string]: any };
  description: string;
  user: { username: string; [key: string]: any };
  [key: string]: any;
};

export type Images = Image[];

export type Photo = {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
}
  
export type ResponseData = {
  results: Photo[];
  total: number;
  total_pages: number;
}

export type ImageCardType = {
  image: Image;
  openModal: (url: string, alt: string) => void;
};

export type ImageGalleryType = {
  images: Images;
  openModal: (url: string, alt: string) => void;
}

export type ImageModalType = {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
};

export type LoadMoreBtnType = {
  onClick: () => void;
  children: any;
  disabled: boolean;
};

export type SearchBarType = {
  onSubmit: (query: string) => void;
  toast: any;
};