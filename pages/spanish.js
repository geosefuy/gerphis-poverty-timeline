import { Accordion, Group, Image, Stack, Paper, Text, Divider } from "@mantine/core";
import { Chrono } from "react-chrono";
import AccordionLabel from "../components/AccordionLabel";
import EraNavBar from "../components/EraNavBar";
import TimelineContent from "../components/TimelineContent";

function Spanish() {
  const items = [
    {
      title: "1565",
    },
    {
      title: "1594",
    },
    {
      title: "1648",
    },
    {
      title: "1898",
    }
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
        {/* 1565 */}
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
                  <Text>Conquest under Philip II</Text>
                  <Text>1565</Text>
                  <Text>Miguel López de Legazpi was considered one of the successful circumnavigators that was
                    able to conquer Cebu despite the opposition of the Filipinos. Although King Philip II from Spain
                    declared rule over the Philippines and Legazpi took control of the
                    government, several local government bodies tended to capitalize on
                    Filipinos, particularly on slavery, which was continued until the 18th century.</Text>
                    <Divider></Divider>
                  <Text>Manila Galleon Trade</Text>
                  <Text>1565</Text>
                  <Text>The Manila-Acapulco galleon trade opened up so many opportunities for Filipinos to export their goods,
                    but at the same time brought upon the concept of capitalism which can further damage the livelihood of lower class workers.
                    This came with the encomienda system in which feudal landlordism was already the default system, making the trade system less effective.</Text>
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
        {/* 1594 */}
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
                  <Text>Encomienda system</Text>
                  <Text>1594</Text>
                  <Text>King Philip II enacted the law on June 11 1594 to introduce the encomienda system,
                    wherein the nobles (principalía) were given land grants in favor of local farmers as a virtue of successful conquest of the areas. This resulted in the farmers and
                    workers to be under the noble classes, and be very vulnerable to exploitation, mainly on tribute payments and endless demands from encomenderos.</Text>
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
        {/* 1648 */}
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
                  <Text>Polo y servicio</Text>
                  <Text>1648</Text>
                  <Text>During this service, all males of ages 16 to 60 years old shall be forced to work in physical labor and construction for 40 days.
                    Initially, all males shall be rewarded with 22.5 real once their service has been completed, but records show how the workers were constantly exploited,
                    an example is the Sumuroy Revolt, where orders from the government were not followed and abused by local authorities.</Text>
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
        {/* 1898 */}
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
                  <Text>Spanish-American War</Text>
                  <Text>1898</Text>
                  <Text>The armed conflict between Spain and the United States has damaged the economy of the Philippines significantly, as well as becoming one of the grounds for their battle. This only led to the Treaty of Paris,
                     which put us instead under the rule of the US instead of Spain, which continues the discrimination and exploitation of our resources, shown in the next era.</Text>
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

export default Spanish;
