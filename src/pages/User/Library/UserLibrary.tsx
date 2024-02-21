import CardAlbums from "../../../components/CardAlbums";
import CardPlaylist from "../../../components/CardPlaylist";
import CardTrack from "../../../components/CardTrack";
import UserPageTitle from "../../../components/UserPageTitle";
import {
  UseUserSavedTrack,
  UseUserSavedPlaylist,
  UseUserSavedAlbums,
} from "../../../hooks/UseUserSaved";

function UserLibrary() {
  const { playlistSave } = UseUserSavedPlaylist();
  const { trackSaved } = UseUserSavedTrack();
  const { savedAlbums } = UseUserSavedAlbums();
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="container mx-2">
        <UserPageTitle title="Library" />
        <div className="flex flex-col mt-10 gap-y-10">
          <CardTrack
            data={trackSaved.map((item) => item.track)}
            title="Track Collection"
          />
          <CardAlbums
            title="Album Collection"
            data={savedAlbums.map((item) => item.album)}
          />
          <CardPlaylist title="Playlist Collection" data={playlistSave} />
        </div>
      </div>
    </div>
  );
}

export default UserLibrary;
