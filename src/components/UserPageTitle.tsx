import ButtonBack from "./ButtonBack";
interface TitleDeclare {
  title: string;
}
function UserPageTitle({ title }: TitleDeclare) {
  return (
    <>
      <div className="">
        <ButtonBack />
      </div>
      <div className="flex w-full items-start py-4">
        <div className="text-center w-full font-semibold tracking-widest">
          <h1 className="text-center">{title}</h1>
        </div>
      </div>
    </>
  );
}

export default UserPageTitle;
