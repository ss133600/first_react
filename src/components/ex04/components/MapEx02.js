const intro = [
  {
    id: 0,
    name: "sfdvx",
    age: 10,
  },
  {
    id: 1,
    name: "wegweh",
    age: 15,
  },
  {
    id: 2,
    name: "asdkl",
    age: 18,
  },
];

export const MapEx02 = () => {
  return (
    <div>
      {intro.map((a) => (
        <div key={a.id}>
          <h3>소개</h3>
          <h4>이름: {a.name}</h4>
          <h4>나이: {a.age}</h4>
          <hr />
        </div>
      ))}
    </div>
  );
};
