import NoImg from "../assets/MusicIcon/NonImage.png";
import UseUserCreatePlaylist from "../hooks/UseUserCreatePlaylist";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface PropsModalActive {
  visibleModal: boolean;
  setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreatePlaylistModal({
  visibleModal,
  setVisibleModal,
}: PropsModalActive) {
  const { CreatePlaylistMethod, UpdateFields, data } = UseUserCreatePlaylist({
    setVisibleModal,
  });

  const handleCloseNonClickPlaylist = (inner: React.MouseEvent) => {
    const innerId = inner.target as HTMLElement;

    if (innerId.id === "modalCreatePlaylist") {
      setVisibleModal(false);
    }
  };

  return (
    <div
      id="modalCreatePlaylist"
      onClick={handleCloseNonClickPlaylist}
      className={`fixed inset-0 bg-black bg-opacity-55 z-[100] w-full h-full justify-center backdrop-blur-[2px] ${
        visibleModal ? "flex opacity-100 scale-100" : "opacity-0 scale-0 "
      }
      `}
    >
      <div
        className={`w-[90%] h-[275px] max-w-[90%] max-h-[275px] relative overflow-hidden bg-[#E9FAFF] mt-20 rounded-2xl border-[1px]  border-black flex flex-col transition-all duration-500 ease-in-out ${
          visibleModal ? "flex opacity-100" : "opacity-0 -translate-y-[40rem]"
        }`}
      >
        <div className="p-6 w-full h-full flex flex-col justify-between">
          <div className="flex flex-col h-full w-full max-w-full">
            <h1 className="font-krona text-md font-medium pb-2">
              Create Playlist {visibleModal}
            </h1>
            <form
              onSubmit={CreatePlaylistMethod}
              action=""
              className="w-full h-full flex flex-col justify-between"
            >
              <div className="flex gap-x-2">
                <div className="w-[130px] h-[130px] min-w-[130px] min-h-[130px] relative flex justify-center items-center rounded-2xl overflow-hidden">
                  <div className="flex items-center justify-center w-full absolute">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-[100vh] rounded-lg cursor-pointer hover:bg-black hover:bg-opacity-40 hover:backdrop-blur-[2px]"
                    >
                      <div className="opacity-0 flex-col items-center justify-center  hover:opacity-100 flex">
                        <CloudUploadIcon className="text-gray-100" />
                        <p className=" text-sm text-gray-500 dark:text-gray-100 ">
                          <span className="font-semibold">Click to upload</span>{" "}
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={(e) =>
                          UpdateFields({
                            image: e?.target.files ? e?.target.files[0] : null,
                          })
                        }
                      />
                    </label>
                  </div>

                  <img
                    src={data.previewUrl || NoImg}
                    alt="Playlist Create"
                    className="aspect-square rounded-2xl w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-full h-full gap-y-[14px]">
                  <div className="relative w-full h-[21px]">
                    <input
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border-[2px] placeholder-shown:border-black placeholder-shown:border-t-black border focus:border-2 border-t-black focus:border-t-transparent text-[10px] px-3 py-2.5 rounded-[7px] border-black focus:border-black"
                      placeholder=" "
                      required
                      autoFocus
                      type="text"
                      value={data.name}
                      onChange={(e) => UpdateFields({ name: e.target.value })}
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-[10px] text-[0px] peer-focus:text-[9px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Name
                    </label>
                  </div>
                  <div className="relative w-full h-[72px]">
                    <textarea
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border-2 placeholder-shown:border-black placeholder-shown:border-t-black border-2 focus:border-2 border-t-black focus:border-t-transparent text-[10px] px-3 py-2.5 rounded-[7px] border-black focus:border-black"
                      name="Description"
                      id="Description"
                      placeholder=""
                      typeof="text"
                      value={data.description}
                      onChange={(e) =>
                        UpdateFields({ description: e.target.value })
                      }
                    >
                      Description
                    </textarea>
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-[10px] text-[0px] peer-focus:text-[9px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Description
                    </label>
                  </div>
                  <div className="flex w-full gap-x-2 -mt-2">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center p-2 rounded-full cursor-pointer"
                        htmlFor="html"
                      >
                        <input
                          name="type"
                          type="radio"
                          className="before:content[''] peer relative h-[10px] w-[10px] cursor-pointer appearance-none rounded-full bg-[#AAC3CC] text-[#006585] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-5 before:w-5 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#006585] checked:before:bg-[#34545d] hover:before:opacity-10"
                          id="private"
                          value="false"
                          onChange={(e) =>
                            UpdateFields({
                              public: e.target.value === "true" ? true : false,
                            })
                          }
                        />
                        <span className="absolute text-[#006585] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-[10px] w-[10px]"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle
                              data-name="ellipse"
                              cx="8"
                              cy="8"
                              r="8"
                            ></circle>
                          </svg>
                        </span>
                      </label>
                      <label
                        className=" text-black font-semibold cursor-pointer text-[13px] select-none"
                        htmlFor="private"
                      >
                        Private
                      </label>
                    </div>
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center p-2 rounded-full cursor-pointer"
                        htmlFor="react"
                      >
                        <input
                          name="type"
                          type="radio"
                          className="before:content[''] peer relative h-[10px] w-[10px] cursor-pointer appearance-none rounded-full bg-[#AAC3CC] text-[#006585] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-5 before:w-5 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#006585] checked:before:bg-[#34545d] hover:before:opacity-10"
                          id="public"
                          value="true"
                          onChange={(e) =>
                            UpdateFields({
                              public: e.target.value === "true" ? true : false,
                            })
                          }
                          checked={data.public ? true : false}
                        />
                        <span className="absolute text-[#006585] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-[10px] w-[10px]"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle
                              data-name="ellipse"
                              cx="8"
                              cy="8"
                              r="8"
                            ></circle>
                          </svg>
                        </span>
                      </label>
                      <label
                        className=" text-black font-semibold cursor-pointer text-[13px] select-none"
                        htmlFor="public"
                      >
                        Public
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-end gap-x-2">
                <button
                  type="button"
                  onClick={() => setVisibleModal(false)}
                  className="hover:bg-red-400 bg-transparent rounded-full text-[10px] px-4 py-1 font-semibold"
                >
                  Cancle
                </button>{" "}
                <button
                  type="submit"
                  className="bg-[#B1DEEC] rounded-full text-[10px] px-4 py-1 font-semibold"
                >
                  Create
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePlaylistModal;
