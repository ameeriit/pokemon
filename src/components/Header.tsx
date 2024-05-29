import logo from "../../public/assets/icons/siteLogo.png";

export default function Header() {
  const logoUrl = logo.src;

  return (
    <header className="bg-teal-900 py-1">
      <div className="container mx-auto">
        <a href="/">
          <img width={120} src={logoUrl} alt="Pokemon site logo" />
        </a>
      </div>
    </header>
  );
}
