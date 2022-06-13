import Home from "./views/layouts/section/home";
import About from "./views/layouts/section/about";
import Portofolio from "./views/layouts/section/portofolio";
export default function Index() {
  return (
    <>
      <header className="relative">
        <div className="header">
          <div className="logo">DF</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portofolio">Porto</a></li>
          </ul>
        </div>
      </header>
      <Home />
      <About />
      <Portofolio />
    </>
  );
}
