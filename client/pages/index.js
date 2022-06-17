import { Chrono } from "react-chrono";

function Home() {
  const items = [
    {
      title: "1940",
    },
    {
      title: "1941",
    },
    {
      title: "1942",
    },
    {
      title: "1943",
    },
    {
      title: "1944",
    },
    {
      title: "1945",
    },
    {
      title: "1946",
    },
  ];

  return (
    <div style={{ width: "100vw", height: "600px" }}>
      <Chrono
        items={items}
        mode="HORIZONTAL"
        disableAutoScrollOnClick={true}
        hideControls={true}
      >
        <div>
          <img src="https://randomwordgenerator.com/img/picture-generator/50e9d4414851b10ff3d8992cc12c30771037dbf85254794e732873dc954f_640.jpg" />
          <p>
            Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum.
            Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum.
            Lorem Ipsum. Lorem Ipsum.{" "}
          </p>
        </div>
      </Chrono>
    </div>
  );
}

export default Home;
