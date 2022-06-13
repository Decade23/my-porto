import Image from "next/image";
const Portofolio = () => {
  const data = [
    {
      label: "Adira Finance",
      when: "2021 - Now",
      shortDesc: "Fullstack Developer",
      alt: "Adira Finance",
      img: "/assets/images/porto/adira2.png",
      active: true,
    },
    {
      label: "Koki ID",
      when: "2019 - 2021",
      shortDesc: "Fullstack Developer",
      alt: "Koki ID",
      img: "/assets/images/porto/koki.png",
      active: true,
    },
    {
      label: "Ellen May Institute",
      when: "2019",
      shortDesc: "Fullstack Developer",
      alt: "Ellen May Institute",
      img: "/assets/images/porto/emi.png",
      active: true,
    },
    {
      label: "Transvision",
      when: "2015 - 2019",
      shortDesc: "MIS - Management Informatycs System",
      alt: "Transvision",
      img: "/assets/images/porto/transvision2.png",
      active: true,
    },
  ];
  return (
    <>
      <section id="portofolio" className="porto">
        <div className="container py-16 mx-auto">
          <h2 className="text-2xl font-semibold md:text-2xl lg:text-3xl text-fuchsia-600">
            My Porto
          </h2>
          <div className="mb-5 text-xs font-semibold sm:text-sm text-slate-600 opacity-95">
            let&apos;s build something{" "}
            <span className="font-semibold tracking-widest text-ig">Great</span>{" "}
            <div className="inline-flex text-2xl">🥂</div>
          </div>
          <div className="card-group">
            {data.map((v, i) => (
              <div className="card" key={i}>
                <div className="img">
                  <Image layout="fill" alt={v.alt} src={v.img} />
                </div>
                <div className="details">
                  <h2>{v.label}</h2>
                  <h3>{v.shortDesc}</h3>
                  <h5>{v.when}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portofolio;
