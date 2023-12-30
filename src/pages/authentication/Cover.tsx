import CoverButton from "../../feature/authentication/components/CoverButton";
import CoverWelcome from "../../feature/authentication/components/CoverWelcome";
function Cover() {
  return (
    <div className="flex justify-center">
      <div className="container mx-2">
        <div className="flex flex-col">
          <CoverWelcome />
          <CoverButton />
          <h1 className="text-sm text-red-500 text-center mt-10">
            * This app is in{" "}
            <span className="font-semibold">development mode</span>
            , if you want to access Sign up first on <br />
            <a
              href="https://developer.spotify.com/"
              className="underline text-blue-500"
            >
              Spotify Developer
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Cover;
