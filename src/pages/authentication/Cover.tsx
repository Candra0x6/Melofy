import CoverButton from "../../feature/authentication/components/CoverButton";
import CoverWelcome from "../../feature/authentication/components/CoverWelcome";
function Cover() {
  return (
    <div className="flex justify-center">
      <div className="container mx-2">
        <div className="flex flex-col">
          <CoverWelcome />
          <CoverButton />
        </div>
      </div>
    </div>
  );
}

export default Cover;
