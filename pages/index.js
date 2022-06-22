import {
  Accordion,
  Group,
  Image,
  Stack,
  Paper,
  Text,
  Title,
  Card,
  Badge,
  useMantineTheme,
  Button,
} from "@mantine/core";
import { Chrono } from "react-chrono";
import AccordionLabel from "../components/AccordionLabel";
import EraNavBar from "../components/EraNavBar";
import PracticeCard from "../components/PracticeCard";

function Home() {
  const items = [
    {
      title: "900",
    },
    {
      title: "960",
    },
    {
      title: "1279",
    },
  ];

  return (
    <div>
      <EraNavBar></EraNavBar>
      <Chrono
        items={items}
        mode="HORIZONTAL"
        disableAutoScrollOnClick={true}
        hideControls={true}
        borderLessCards={true}
        itemWidth={520}
      >
        {/* 900 */}
        <div>
          <Title ml={20} mb={20} order={1}>
            Event Details
          </Title>
          <Group position="apart" noWrap mb={40} align="flex-start">
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
          <Title ml={20} my={20} order={1}>
            Social Classes
          </Title>
          <Accordion
            styles={{
              item: { maxWidth: "1080px" },
              itemOpened: { maxWidth: "1080px" },
            }}
          >
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Tagalog"
                  social_class="Alipin sa namamahay"
                ></AccordionLabel>
              }
            >
              They refer to alipin that had their own houses, which were usually
              built on the property of their masters. They were not all slaves
              but often obliged to share a percentage of their earnings or
              harvests with their masters. They were even given the chance to
              attend feasts arranged by their masters once invited.
            </Accordion.Item>
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Tagalog"
                  social_class="Alipin sa gigilid"
                ></AccordionLabel>
              }
            >
              They were unmarried alipin and could marry only with the consent
              of their master. They could not afford to own a house and whose
              existence was completely dependent on the graces of their masters,
              and were often tasked with chores inside the house for the whole
              day.
            </Accordion.Item>
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Visayas"
                  social_class="Oripun / Oripes"
                ></AccordionLabel>
              }
            >
              Visayan counterpart for alipin, where debt was attached to the
              person as a service, and not the person itself.
            </Accordion.Item>
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Visayas"
                  social_class="Tuhay / Mamahay"
                ></AccordionLabel>
              }
            >
              Visayan counterpart for alipin sa gigilid. They treat social
              classes as actual titles, where half-slaves or quarter-slaves
              depending on the class of their parents
            </Accordion.Item>
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Visayas"
                  social_class="Hayohay / Ayuey"
                ></AccordionLabel>
              }
            >
              Visayan counterpart for alipin sa namamahay. They live in the same
              house as their master.
            </Accordion.Item>
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Bicol"
                  social_class="Oripon / Pandowan / Pongka / Salpok"
                ></AccordionLabel>
              }
            >
              Bikol counterpart for alipin. Pandowan is mainly used for
              compositions and poetry, while pongka and salpok served as
              synonyms to the concept.
            </Accordion.Item>
          </Accordion>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group style={{ maxWidth: "1080px" }}>
            <PracticeCard></PracticeCard>
            <PracticeCard></PracticeCard>
            <PracticeCard></PracticeCard>
            <PracticeCard></PracticeCard>
          </Group>
        </div>
        {/* 960 */}
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
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Tagalog"
                  social_class="Alipin sa namamahay"
                ></AccordionLabel>
              }
            >
              They refer to alipin that had their own houses, which were usually
              built on the property of their masters. They were not all slaves
              but often obliged to share a percentage of their earnings or
              harvests with their masters. They were even given the chance to
              attend feasts arranged by their masters once invited.
            </Accordion.Item>
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Tagalog"
                  social_class="Alipin sa gigilid"
                ></AccordionLabel>
              }
            >
              They were unmarried alipin and could marry only with the consent
              of their master. They could not afford to own a house and whose
              existence was completely dependent on the graces of their masters,
              and were often tasked with chores inside the house for the whole
              day.
            </Accordion.Item>
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Visayas"
                  social_class="Oripun / Oripes"
                ></AccordionLabel>
              }
            >
              Visayan counterpart for alipin, where debt was attached to the
              person as a service, and not the person itself.
            </Accordion.Item>
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Visayas"
                  social_class="Tuhay / Mamahay"
                ></AccordionLabel>
              }
            >
              Visayan counterpart for alipin sa gigilid. They treat social
              classes as actual titles, where half-slaves or quarter-slaves
              depending on the class of their parents
            </Accordion.Item>
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Visayas"
                  social_class="Hayohay / Ayuey"
                ></AccordionLabel>
              }
            >
              Visayan counterpart for alipin sa namamahay. They live in the same
              house as their master.
            </Accordion.Item>
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Bicol"
                  social_class="Oripon / Pandowan / Pongka / Salpok"
                ></AccordionLabel>
              }
            >
              Bikol counterpart for alipin. Pandowan is mainly used for
              compositions and poetry, while pongka and salpok served as
              synonyms to the concept.
            </Accordion.Item>
          </Accordion>
        </div>
        {/* 1279 */}
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
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Tagalog"
                  social_class="Alipin sa namamahay"
                ></AccordionLabel>
              }
            >
              They refer to alipin that had their own houses, which were usually
              built on the property of their masters. They were not all slaves
              but often obliged to share a percentage of their earnings or
              harvests with their masters. They were even given the chance to
              attend feasts arranged by their masters once invited.
            </Accordion.Item>
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Tagalog"
                  social_class="Alipin sa gigilid"
                ></AccordionLabel>
              }
            >
              They were unmarried alipin and could marry only with the consent
              of their master. They could not afford to own a house and whose
              existence was completely dependent on the graces of their masters,
              and were often tasked with chores inside the house for the whole
              day.
            </Accordion.Item>
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Visayas"
                  social_class="Oripun / Oripes"
                ></AccordionLabel>
              }
            >
              Visayan counterpart for alipin, where debt was attached to the
              person as a service, and not the person itself.
            </Accordion.Item>
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Visayas"
                  social_class="Tuhay / Mamahay"
                ></AccordionLabel>
              }
            >
              Visayan counterpart for alipin sa gigilid. They treat social
              classes as actual titles, where half-slaves or quarter-slaves
              depending on the class of their parents
            </Accordion.Item>
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Visayas"
                  social_class="Hayohay / Ayuey"
                ></AccordionLabel>
              }
            >
              Visayan counterpart for alipin sa namamahay. They live in the same
              house as their master.
            </Accordion.Item>
            <Accordion.Item
              label={
                <AccordionLabel
                  location="Bicol"
                  social_class="Oripon / Pandowan / Pongka / Salpok"
                ></AccordionLabel>
              }
            >
              Bikol counterpart for alipin. Pandowan is mainly used for
              compositions and poetry, while pongka and salpok served as
              synonyms to the concept.
            </Accordion.Item>
          </Accordion>
        </div>
      </Chrono>
    </div>
  );
}

export default Home;
