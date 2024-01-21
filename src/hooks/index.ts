export interface Playlists {
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
        album: Albums;
        artists: {
          href: string;
          id: string;
          name: string;
          type: string;
          uri: string;
        }[];
        id: string | null;
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

export interface Track {
  album: Albums;
  artists: {
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
  id: string | null;
  name: string;
  popularity: number;
  preview_url: string;
  track: boolean;
  track_number: number;
  type: string;
  uri: string;
  duration_ms: number;
  explicit: boolean;
  is_local: boolean;
  disx_number: number;
}

export interface Albums {
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
[];

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

export interface SearchResult {
  albums: {
    items: Albums[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
  artists: {
    items: Artis[];
  };
  playlists: {
    items: Playlists[];
  };
  tracks: {
    items: Track[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
  [key: string]:
    | {
        items: any[]; // Adjust the type accordingly
        limit: number;
        next: string | null;
        offset: number;
        previous: string | null;
        total: number;
      }
    | { items: Artis[] }
    | { items: Playlists[] };
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
