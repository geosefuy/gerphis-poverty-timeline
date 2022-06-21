import { Accordion, Group, Image, Stack, Paper, Text } from "@mantine/core";
import { Chrono } from "react-chrono";
import AccordionLabel from "../components/AccordionLabel";
import EraNavBar from "../components/EraNavBar";
import TimelineContent from "../components/TimelineContent";

function American() {
  const items = [
    {
      title: "1909",
    },
    {
      title: "1913",
    },
    {
      title: "1934",
    },
    {
      title: "1941",
    },
    {
      title: "1942",
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
        {/* 1909 */}
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
                  <Text>Payne-Aldrich Act</Text>
                  <Text>1906</Text>
                  <Text>Description</Text>

                </Stack>
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
          </Accordion>
        </div>
        {/* 1913 */}
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
                  <Text>Underwood Simmons Tariff Act</Text>
                  <Text>1913</Text>
                  <Text>Description here</Text>
                </Stack>
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
          </Accordion>
        </div>
        {/* 1934 */}
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
                  <Text>Tydings-McDuffie Act</Text>
                  <Text>1934</Text>
                  <Text>Description here</Text>
                </Stack>
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
          </Accordion>
        </div>
        {/* 1941 */}
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
                  <Text>Confiscation of Assets from Japanese</Text>
                  <Text>1941</Text>
                  <Text>Description here</Text>
                </Stack>
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
          </Accordion>
        </div>
        {/* 1942 */}
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
                  <Text>Food Supply Problem in Leyte</Text>
                  <Text>1565</Text>
                  <Text>Description here</Text>


                </Stack>
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
          </Accordion>
        </div>
        {/* 1946 */}
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
                  <Text>Bell Trade Act</Text>
                  <Text>1946</Text>
                  <Text>Description here</Text>
                </Stack>
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
          </Accordion>
        </div>
      </Chrono>
    </div>
  );
}

export default American;
