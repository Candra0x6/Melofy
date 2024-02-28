import {
  UseCategoryByID,
  UseCategoryPlaylist,
} from "../../../hooks/UseCategory";

import ButtonBack from "../../../components/ButtonBack";
import CardPlaylist from "../../../components/CardPlaylist";

function CategoryDetail() {
  const { categoryPlaylist } = UseCategoryPlaylist();
  const { categoryDetail } = UseCategoryByID();

  return (
    <div className="flex justify-center overflow-hidden relative">
      <div className="container">
        <div className="flex flex-col h-[280px] w-full relative">
          <div className="flex w-full">
            <ButtonBack />
          </div>
          <div className="flex flex-col absolute h-full w-full justify-center items-center">
            <h1 className="text-gray-100 font-poppins font-semibold text-2xl w-full z-20 mb-20 text-center">
              {categoryPlaylist && categoryPlaylist.message}
            </h1>
          </div>
          <div className="flex items-end w-full h-full absolute">
            <div className="bg-gradient-to-t from-[#F7FCFE] via-[#f7fcfe] to-transparent w-[60rem] -mb-10 -mr-5 -ml-4 h-[10rem] blur-md z-10"></div>
          </div>
          <div className="h-full w-full">
            <div className="bg-black bg-opacity-40 backdrop-blur-[2px] w-full h-full absolute"></div>
            <img
              src={
                categoryDetail &&
                categoryDetail.icons[0] &&
                categoryDetail?.icons[0].url
              }
              alt="Artist"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <CardPlaylist
          data={categoryPlaylist?.playlists.items}
          title="Playlist"
        />
      </div>
    </div>
  );
}

export default CategoryDetail;
