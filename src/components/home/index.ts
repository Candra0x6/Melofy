export interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: {
    height: number | null;
    url: string;
    width: number | null;
  }[];
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    url: string;
  };
  primary_color: string | null;
  public: boolean | null;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
    items: {
      added_at: string;
      is_local: boolean;
      primary_color: string | null;
      track: {
        album: NewAlbums;
        artists: {
          href: string;
          id: string;
          name: string;
          type: string;
          uri: string;
        }[];
        name: string;
        popularity: number;
        preview_url: string;
        track: boolean;
        track_number: number;
        type: string;
        uri: string;
      };
    }[];
  };
  type: string;
  uri: string;
}

export interface NewAlbums {
  album_type: string;
  artists: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}
export interface Artis {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: null | string;
    total: number;
  };
  genres: ["pop"];
  href: string;
  id: string;
  images: [
    {
      url: string;
      height: number;
      width: number;
    }
  ];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface CategoryList {
  href: string;
  icons: [
    {
      url: string;
      height: number | null;
      width: number | null;
    }
  ];
  id: string;
  name: string;
}
export interface ArrowSlide {
  onClick: () => void;
}
export interface AxiosErrorResponse {
  response?: {
    data?: {
      error?: {
        message?: string;
        status?: number;
      };
    };
  };
}
