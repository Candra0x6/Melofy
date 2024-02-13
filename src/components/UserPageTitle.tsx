import ButtonBack from "./ButtonBack";
interface TitleDeclare {
  title: string;
}
function UserPageTitle({ title }: TitleDeclare) {
  return (
    <div className="flex w-full items-center mt-4">
      <ButtonBack />
      <div className="text-center w-full font-semibold tracking-widest">
        <h1 className="text-center">{title}</h1>
      </div>
    </div>
  );
}

export default UserPageTitle;
