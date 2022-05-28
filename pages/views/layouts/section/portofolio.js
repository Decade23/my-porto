const Portofolio = () => {
  const data = [
    {
      label: "",
      shortDesc: "",
      active: true,
    },
  ];
  return (
    <>
      <section id="portofolio" className="">
        <div className="container py-16 mx-auto">
          <h2 className="text-h2">My Porto</h2>
          <div className="mb-5 text-p-about-me">
            let&apos;s build something{" "}
            <span className="font-semibold tracking-widest text-ig">Great</span>{" "}
            <div className="inline-flex text-2xl">🥂</div>
          </div>
          <div className="grid grid-cols-4"></div>
        </div>
      </section>
    </>
  );
};

export default Portofolio;
