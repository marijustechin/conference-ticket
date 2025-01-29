import logomark from "/assets/images/logo-mark.svg";
export const Header = () => {
  return (
    <header className="max-w-sm mx-auto flex gap-2 my-5 text-white">
      <img src={logomark} alt="logo-mark" />
      <h3 className="text-xl font-semibold">Programavimo konferencija</h3>
    </header>
  );
};
