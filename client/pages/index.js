import { Accordion, Group, Image, Stack, Paper, Text } from "@mantine/core";
import { Chrono } from "react-chrono";
import AccordionLabel from "../components/AccordionLabel";
import EraNavBar from "../components/EraNavBar";
import TimelineContent from "../components/TimelineContent";

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
    <div style={{ width: "100vw" }}>
      <EraNavBar></EraNavBar>
      <Chrono
        items={items}
        mode="HORIZONTAL"
        disableAutoScrollOnClick={true}
        hideControls={true}
        borderLessCards={true}
      >
        {/* 900 */}
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
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Maginoo'></AccordionLabel>}>
              They were the noble and highest class of the Tagalog society. Individuals from this class had a respectful title of “Ginoo”.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Panginoon'></AccordionLabel>}>
              They are wealthy maginoo who possessed multiple properties and valuable land. A panginoon was referred to as “poon” which can be translated into English as “milord” and “milady”.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Datu'></AccordionLabel>}>
              They are the ruling class maginoo who had followers over the whole community aside from his immediate family.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Timawa'></AccordionLabel>}>
              They are the privileged intermediate class who were also called freemen. They were free commoners of
              Luzon and Visayas who could possess their own land and were not required to pay a regular tribute to the Maginoo.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Maharlika'></AccordionLabel>}>
              They are coined as the warrior class during the precolonial era. Maharlikas enjoyed the same rights as the Timawa such as being free from paying tributes
              or taxes, however, they were required to provide military service in times of war and serve their datu in a battle.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Alipin sa namamahay'></AccordionLabel>}>
              They refer to alipin that had their own houses, which were usually built on the property of their
              masters. They were not all slaves but often obliged to share a percentage of their earnings
              or harvests with their masters. They were even given the chance to attend feasts arranged by their masters once invited.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Alipin sa gigilid'></AccordionLabel>}>
              They were unmarried alipin and could marry only with the consent of their master.
              They could not afford to own a house and whose existence was
              completely dependent on the graces of their masters, and
              were often tasked with chores inside the house for the whole day.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Visayas' social_class='Oripun / Oripes'></AccordionLabel>}>
              Visayan counterpart for alipin, where debt was attached to the person as a service, and not the person itself.
              The classes were not looked at discriminatively. Rather, the classes were all considered "offsprings of a divine primordial pair, who fled or hid from their father's wrath"
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Visayas' social_class='Tuhay / Mamahay'></AccordionLabel>}>
              Visayan counterpart for alipin sa gigilid.
              They treat social classes as actual titles, where half-slaves or quarter-slaves depending on the class of their parents
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Visayas' social_class='Hayohay / Ayuey'></AccordionLabel>}>
              Visayan counterpart for alipin sa namamahay. They live in the same house as their master.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Visayas' social_class='Bulan'></AccordionLabel>}>
              Half-slave wherein owners divide their time by the month.
              Poverty was based solely on debt against others, and they can work to pay it off in full.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Bicol' social_class='Oripon / Pandowan / Pongka / Salpok'></AccordionLabel>}>
              Bikol counterpart for alipin. Pandowan is mainly used for compositions and poetry, while pongka and salpok served as synonyms to the concept.
            </Accordion.Item>
          </Accordion>
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
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Maginoo'></AccordionLabel>}>
              They were the noble and highest class of the Tagalog society. Individuals from this class had a respectful title of “Ginoo”.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Panginoon'></AccordionLabel>}>
              They are wealthy maginoo who possessed multiple properties and valuable land. A panginoon was referred to as “poon” which can be translated into English as “milord” and “milady”.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Datu'></AccordionLabel>}>
              They are the ruling class maginoo who had followers over the whole community aside from his immediate family.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Timawa'></AccordionLabel>}>
              They are the privileged intermediate class who were also called freemen. They were free commoners of
              Luzon and Visayas who could possess their own land and were not required to pay a regular tribute to the Maginoo.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Maharlika'></AccordionLabel>}>
              They are coined as the warrior class during the precolonial era. Maharlikas enjoyed the same rights as the Timawa such as being free from paying tributes
              or taxes, however, they were required to provide military service in times of war and serve their datu in a battle.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Alipin sa namamahay'></AccordionLabel>}>
              They refer to alipin that had their own houses, which were usually built on the property of their
              masters. They were not all slaves but often obliged to share a percentage of their earnings
              or harvests with their masters. They were even given the chance to attend feasts arranged by their masters once invited.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Alipin sa gigilid'></AccordionLabel>}>
              They were unmarried alipin and could marry only with the consent of their master.
              They could not afford to own a house and whose existence was
              completely dependent on the graces of their masters, and
              were often tasked with chores inside the house for the whole day.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Visayas' social_class='Oripun / Oripes'></AccordionLabel>}>
              Visayan counterpart for alipin, where debt was attached to the person as a service, and not the person itself.
              The classes were not looked at discriminatively. Rather, the classes were all considered "offsprings of a divine primordial pair, who fled or hid from their father's wrath"
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Visayas' social_class='Tuhay / Mamahay'></AccordionLabel>}>
              Visayan counterpart for alipin sa gigilid.
              They treat social classes as actual titles, where half-slaves or quarter-slaves depending on the class of their parents
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Visayas' social_class='Hayohay / Ayuey'></AccordionLabel>}>
              Visayan counterpart for alipin sa namamahay. They live in the same house as their master.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Visayas' social_class='Bulan'></AccordionLabel>}>
              Half-slave wherein owners divide their time by the month.
              Poverty was based solely on debt against others, and they can work to pay it off in full.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Bicol' social_class='Oripon / Pandowan / Pongka / Salpok'></AccordionLabel>}>
              Bikol counterpart for alipin. Pandowan is mainly used for compositions and poetry, while pongka and salpok served as synonyms to the concept.
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
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Maginoo'></AccordionLabel>}>
              They were the noble and highest class of the Tagalog society. Individuals from this class had a respectful title of “Ginoo”.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Panginoon'></AccordionLabel>}>
              They are wealthy maginoo who possessed multiple properties and valuable land. A panginoon was referred to as “poon” which can be translated into English as “milord” and “milady”.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Datu'></AccordionLabel>}>
              They are the ruling class maginoo who had followers over the whole community aside from his immediate family.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Timawa'></AccordionLabel>}>
              They are the privileged intermediate class who were also called freemen. They were free commoners of
              Luzon and Visayas who could possess their own land and were not required to pay a regular tribute to the Maginoo.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Maharlika'></AccordionLabel>}>
              They are coined as the warrior class during the precolonial era. Maharlikas enjoyed the same rights as the Timawa such as being free from paying tributes
              or taxes, however, they were required to provide military service in times of war and serve their datu in a battle.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Alipin sa namamahay'></AccordionLabel>}>
              They refer to alipin that had their own houses, which were usually built on the property of their
              masters. They were not all slaves but often obliged to share a percentage of their earnings
              or harvests with their masters. They were even given the chance to attend feasts arranged by their masters once invited.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Tagalog' social_class='Alipin sa gigilid'></AccordionLabel>}>
              They were unmarried alipin and could marry only with the consent of their master.
              They could not afford to own a house and whose existence was
              completely dependent on the graces of their masters, and
              were often tasked with chores inside the house for the whole day.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Visayas' social_class='Oripun / Oripes'></AccordionLabel>}>
              Visayan counterpart for alipin, where debt was attached to the person as a service, and not the person itself.
              The classes were not looked at discriminatively. Rather, the classes were all considered "offsprings of a divine primordial pair, who fled or hid from their father's wrath"
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Visayas' social_class='Tuhay / Mamahay'></AccordionLabel>}>
              Visayan counterpart for alipin sa gigilid.
              They treat social classes as actual titles, where half-slaves or quarter-slaves depending on the class of their parents
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Visayas' social_class='Hayohay / Ayuey'></AccordionLabel>}>
              Visayan counterpart for alipin sa namamahay. They live in the same house as their master.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Visayas' social_class='Bulan'></AccordionLabel>}>
              Half-slave wherein owners divide their time by the month.
              Poverty was based solely on debt against others, and they can work to pay it off in full.
            </Accordion.Item>
            <Accordion.Item label={<AccordionLabel location='Bicol' social_class='Oripon / Pandowan / Pongka / Salpok'></AccordionLabel>}>
              Bikol counterpart for alipin. Pandowan is mainly used for compositions and poetry, while pongka and salpok served as synonyms to the concept.
            </Accordion.Item>
          </Accordion>
        </div>
      </Chrono>
    </div>
  );
}

export default Home;
