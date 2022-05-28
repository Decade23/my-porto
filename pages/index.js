import About from "./views/layouts/section/about";
import Home from "./views/layouts/section/home";
import Portofolio from "./views/layouts/section/portofolio";

export default function Index() {
  return (
    <>
      <Home />
      <About />
      <Portofolio />
    </>
  );
}
