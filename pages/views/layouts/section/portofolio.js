const Portofolio = () => {
  const data = [
    {
      label:"",
      shortDesc:"",
      active:true,
    },
  ];
  return (
    <>
      <section id="portofolio">
        <div className="container py-16 mx-auto">
          <h2 className="text-2xl font-semibold md:text-2xl lg:text-3xl text-fuchsia-600">My Porto</h2>
          <div className="mb-5 text-xs font-semibold sm:text-sm text-slate-600 opacity-95">
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
