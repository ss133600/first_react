// import "../css/styleEx2.css";

const con = [
  {
    id: 0,
    imgUrl:
      "https://cdn.pixabay.com/photo/2023/07/08/04/58/sunset-8113697_640.jpg",
    title: "일몰",
    desc: "일몰바다",
  },
  {
    id: 1,
    imgUrl:
      "https://cdn.pixabay.com/photo/2023/07/01/18/21/water-8100724_640.jpg",
    title: "산",
    desc: "구름 덮인 산",
  },
  {
    id: 2,
    imgUrl:
      "https://cdn.pixabay.com/photo/2023/06/25/12/49/bike-8087239_640.jpg",
    title: "자전거",
    desc: "자전거를 탄 소년",
  },
];

export const ContentEx = () => {
  return (
    <div className="con_wrap">
      {con.map((a) => (
        <div className="con" key={a.id}>
          {console.log(a)}
          <div
            className="bg"
            style={{
              background: `url(${a.imgUrl}) no-repeat center / cover`,
            }}
          />

          <h3>{a.title}</h3>
          <p>{a.desc}</p>
        </div>
      ))}
    </div>
  );
};
