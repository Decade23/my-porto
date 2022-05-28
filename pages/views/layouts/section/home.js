// import dedi from "../public/assets/images/dedi.png";

import Button from "../../../components/button";

export default function Home() {
  return (
    <>
      <section id="home">
        <div className="container py-16 mx-auto">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="w-full mb-12 lg:w-1/2">
              <h2 className="text-h2 animate-blur-effect-once">
                Hi 🤗, me...
              </h2>
              <h1 className="text-h1 font-inter">Dedi Fardiyanto</h1>
              <p className="mb-5 font-mono text-p">Programmer & IT Enthusiast</p>
              <p className="mb-10 text-p-sub">
                Don&apos;t Judge Book By It&apos;s Cover.{" "}
                <span className="font-bold tracking-widest">Never!</span>
              </p>
              <Button label="Contact Me" url="#about" css="bg-red-500" />
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2">
              <div className="relative flex-row">
                <img
                  src="/assets/images/dedi.png"
                  alt="Dedi Fardiyanto"
                  className="object-contain w-96 h-96"
                />
                <span className="absolute animate-blob mix-blend-multiply bg-yellow-500 rounded-full blur-xl opacity-75 w-52 h-52 -z-10  left-[15%] top-10"></span>
                <span className="absolute rounded-full opacity-75 animate-blob animation-delay-2s anim mix-blend-multiply bg-rose-400 blur-xl w-52 h-52 -z-10 -right-4 top-10 "></span>
                <span className="absolute translate-y-1/2 rounded-full opacity-75 animate-blob animation-delay-4s mix-blend-multiply blur-xl w-52 h-52 bg-fuchsia-400 -z-10 left-1/2 bottom-16 "></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
