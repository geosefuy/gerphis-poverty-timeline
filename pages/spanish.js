import {
  Accordion,
  Group,
  Image,
  Stack,
  Paper,
  Text,
  Title
} from "@mantine/core";
import { Chrono } from "react-chrono";
import AccordionLabel from "../components/AccordionLabel";
import EraNavBar from "../components/EraNavBar";
import PracticeCard from "../components/PracticeCard";

function Spanish() {
  const items = [
    {
      title: "1565",
    },
    {
      title: "1565",
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
        itemWidth={500}
      >
        {/* 1565 */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              //src = https://www.worldhistory.org/uploads/images/12308.jpg
              src= "https://i.imgur.com/wFAM14m.jpg"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text weight={700} size="xl">Conquest under Philip II</Text>
                  <Text color="dimmed">1565</Text>
                  <Text>Miguel López de Legazpi was considered one of the successful circumnavigators that was
                    able to conquer Cebu despite the opposition of the Filipinos. Although King Philip II from Spain
                    declared rule over the Philippines and Legazpi took control of the
                    government, several local government bodies tended to capitalize on
                    Filipinos, particularly on slavery, which was continued until the 18th century.</Text>
                </Stack>
              </Group>
            </Paper>
          </Group>
          <Title ml={20} my={20} order={1}>
            Social Classes
          </Title>
          <Accordion
            styles={{
              item: { width: "1080px" },
              itemOpened: { width: "1080px" },
            }}
          >
            <Accordion.Item label={<AccordionLabel location='Luzon and Visayas' social_class='Nativos/Indios'></AccordionLabel>}>
              Pure-blooded Filipinos are considered the lowest class during the Spanish occupation, highlighting the Spanish blood to be a superior race to them.
              These natives are often exploited for land and resources, which allows the Spaniards to stay in power while Filipinos slowly lose all their properties and rights.
            </Accordion.Item>
          </Accordion>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group align="flex-start" style={{ maxWidth: "1080px" }}>
            <PracticeCard title="Encomienda system" imageUrl ="https://i.imgur.com/k4BBi9d.png" description={"King Philip II enacted the law on June 11 1594 to introduce the encomienda system, wherein the nobles (principalía) were given land grants in favor of local farmers as a virtue of successful conquest of the areas. This resulted in the farmers and workers to be under the noble classes, and be very vulnerable to exploitation, mainly on tribute payments and endless demands from encomenderos."}></PracticeCard>
            <PracticeCard title="Polo y servicio" imageUrl = "https://i.imgur.com/Zdj796v.jpg" description={"This was created by the Spanish colonists to use the natives for public and private infrastructure projects. During this service, all males of ages 16 to 60 years old shall be forced to work in physical labor and construction for 40 days. Initially, all males shall be rewarded with 22.5 real once their service has been completed, but records show how the workers were constantly exploited, an example is the Sumuroy Revolt, where orders from the government were not followed and abused by local authorities. This went on for 250 years from 1648 to 1898 until it was put to a stop by revolts."}></PracticeCard>
          </Group>
        </div>
        {/* 1565 */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              src= "https://i.imgur.com/4eivLsc.jpg"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text weight={700} size="xl">Manila Galleon Trade</Text>
                  <Text color="dimmed">1565</Text>
                  <Text>The Manila-Acapulco galleon trade opened up so many opportunities for Filipinos to export their goods,
                    but at the same time brought upon the concept of capitalism which can further damage the livelihood of lower class workers.
                    This came with the encomienda system in which feudal landlordism was already the default system, making the trade system less effective.</Text>
                </Stack>
              </Group>
            </Paper>
          </Group>
          <Title ml={20} my={20} order={1}>
            Social Classes
          </Title>
          <Accordion
            styles={{
              item: { width: "1080px" },
              itemOpened: { width: "1080px" },
            }}
          >
            <Accordion.Item label={<AccordionLabel location='Luzon and Visayas' social_class='Nativos/Indios'></AccordionLabel>}>
              Pure-blooded Filipinos are considered the lowest class during the Spanish occupation, highlighting the Spanish blood to be a superior race to them.
              These natives are often exploited for land and resources, which allows the Spaniards to stay in power while Filipinos slowly lose all their properties and rights.
            </Accordion.Item>
          </Accordion>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group align="flex-start" style={{ maxWidth: "1080px" }}>
            <PracticeCard title="Encomienda system" imageUrl ="https://i.imgur.com/k4BBi9d.png" description={"King Philip II enacted the law on June 11 1594 to introduce the encomienda system, wherein the nobles (principalía) were given land grants in favor of local farmers as a virtue of successful conquest of the areas. This resulted in the farmers and workers to be under the noble classes, and be very vulnerable to exploitation, mainly on tribute payments and endless demands from encomenderos."}></PracticeCard>
            <PracticeCard title="Polo y servicio" imageUrl = "https://i.imgur.com/Zdj796v.jpg" description={"This was created by the Spanish colonists to use the natives for public and private infrastructure projects. During this service, all males of ages 16 to 60 years old shall be forced to work in physical labor and construction for 40 days. Initially, all males shall be rewarded with 22.5 real once their service has been completed, but records show how the workers were constantly exploited, an example is the Sumuroy Revolt, where orders from the government were not followed and abused by local authorities. This went on for 250 years from 1648 to 1898 until it was put to a stop by revolts."}></PracticeCard>
          </Group>
        </div>
        {/* 1898 */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              src="https://i.imgur.com/hSKBZlR.jpg"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text weight={700} size="xl">Spanish-American War</Text>
                  <Text color="dimmed">1898</Text>
                  <Text>The armed conflict between Spain and the United States has damaged the economy of the Philippines significantly, as well as becoming one of the grounds for their battle. This only led to the Treaty of Paris,
                     which put us instead under the rule of the US instead of Spain, which continues the discrimination and exploitation of our resources, shown in the next era.</Text>
                </Stack>
              </Group>
            </Paper>
          </Group>
          <Title ml={20} my={20} order={1}>
            Social Classes
          </Title>
          <Accordion
            styles={{
              item: { width: "1080px" },
              itemOpened: { width: "1080px" },
            }}
          >
            <Accordion.Item label={<AccordionLabel location='Luzon and Visayas' social_class='Nativos/Indios'></AccordionLabel>}>
              Pure-blooded Filipinos are considered the lowest class during the Spanish occupation, highlighting the Spanish blood to be a superior race to them.
              These natives are often exploited for land and resources, which allows the Spaniards to stay in power while Filipinos slowly lose all their properties and rights.
            </Accordion.Item>
          </Accordion>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group align="flex-start" style={{ maxWidth: "1080px" }}>
            <PracticeCard title="Encomienda system" imageUrl ="https://i.imgur.com/k4BBi9d.png" description={"King Philip II enacted the law on June 11 1594 to introduce the encomienda system, wherein the nobles (principalía) were given land grants in favor of local farmers as a virtue of successful conquest of the areas. This resulted in the farmers and workers to be under the noble classes, and be very vulnerable to exploitation, mainly on tribute payments and endless demands from encomenderos."}></PracticeCard>
            <PracticeCard title="Polo y servicio" imageUrl = "https://i.imgur.com/Zdj796v.jpg" description={"This was created by the Spanish colonists to use the natives for public and private infrastructure projects. During this service, all males of ages 16 to 60 years old shall be forced to work in physical labor and construction for 40 days. Initially, all males shall be rewarded with 22.5 real once their service has been completed, but records show how the workers were constantly exploited, an example is the Sumuroy Revolt, where orders from the government were not followed and abused by local authorities. This went on for 250 years from 1648 to 1898 until it was put to a stop by revolts."}></PracticeCard>
          </Group>
        </div>
      </Chrono>
    </div>
  );
}

export default Spanish;
