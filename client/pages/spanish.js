import { Accordion, Group, Image, Stack, Paper, Text } from "@mantine/core";
import { Chrono } from "react-chrono";
import AccordionLabel from "../components/AccordionLabel";
import EraNavBar from "../components/EraNavBar";
import TimelineContent from "../components/TimelineContent";

function Spanish() {
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
        {/* YEAR */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              src="https://images.unsplash.com/photo-1655386068492-1b252df3791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text>Location</Text>
                  <Text>Years</Text>
                  <Text>Description</Text>
                </Stack>
                {/* <Image
                  width={360}
                  height={360}
                  src="https://images.unsplash.com/photo-1655386068492-1b252df3791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                ></Image> */}
              </Group>
            </Paper>
          </Group>
          <Accordion
            styles={{
              item: { width: "700px" },
              itemOpened: { width: "700px" },
            }}
          >
            <Accordion.Item label={<AccordionLabel location='Luzon and Visayas' social_class='Nativos/Indios'></AccordionLabel>}>
              Pure-blooded Filipinos are considered the lowest class during the Spanish occupation, highlighting the Spanish blood to be a superior race to them.
              These natives are often exploited for land and resources, which allows the Spaniards to stay in power while Filipinos slowly lose all their properties and rights.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Visayas' social_class='Oripun'></AccordionLabel>}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel></AccordionLabel>}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Accordion.Item>
          </Accordion>
        </div>
        {/* YEAR */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              src="https://images.unsplash.com/photo-1655386068492-1b252df3791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            ></Image>
            <Paper shadow="md" p="xl" m={20}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text>Location</Text>
                  <Text>Social Class</Text>
                  <Text>Years</Text>
                </Stack>
                <Image
                  width={360}
                  height={360}
                  src="https://images.unsplash.com/photo-1655386068492-1b252df3791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                ></Image>
              </Group>
            </Paper>
          </Group>
          <Accordion
            styles={{
              item: { width: "700px" },
              itemOpened: { width: "700px" },
            }}
          >
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Alipin sa namamahay'></AccordionLabel>}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Visayas' social_class='Oripun'></AccordionLabel>}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel></AccordionLabel>}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Accordion.Item>
          </Accordion>
        </div>
      </Chrono>
    </div>
  );
}

export default Spanish;
