import { Accordion, Group, Image, Stack } from "@mantine/core";
import { Chrono } from "react-chrono";
import AccordionLabel from "../components/AccordionLabel";
import EraNavBar from "../components/EraNavBar";
import TimelineContent from "../components/TimelineContent";

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
    <div style={{ width: "100vw" }}>
      <EraNavBar></EraNavBar>
      <Chrono
        items={items}
        mode="HORIZONTAL"
        disableAutoScrollOnClick={true}
        hideControls={true}
        borderLessCards={true}
      >
        <TimelineContent></TimelineContent>
      </Chrono>
    </div>
  );
}

export default Home;
