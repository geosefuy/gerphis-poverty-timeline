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
      title: "900-1565",
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
            <PracticeCard title="Infanticide" location ="Pangasinan and Visayas" description={"In cases of poverty, the parents may choose to kill the newborn to ensure that the community does not further reduce their already scarce resources. The most common method was to bury the newborn alive or alongside the riverbank. "}></PracticeCard>
            <PracticeCard title="Kabalangay / Horohan" location = "Visayas" description={"The Horohan in Visayas can be taken under the wing of the datu, specializing in lower-echelon military services, either as oarsmen for boats (mangayaw) or warriors (magahat). They can also present themselves as a Kabalangay or a crewman for maintaining their boat."}></PracticeCard>
            <PracticeCard title="Adoption" location = "Philippines" description={"Poverty through the economy and natural disasters can also drive parents to send their children for adoption. The precolonial period dealt with this through informal agreements with relatives or other families willing to take them in. It could also take a formal process (ngamáy) which ensures their care and safety."}></PracticeCard>
            <PracticeCard title="Inheritance" location = "Tagalog and Visayas" description={"Since they treat classes as actual titles, debts incurred by the parents can also be paid by the sons and daughters, depending whether their work is divided by the month (bulan), or when they are the offspring of a Hayohay (gintubo). Favoritism is also a possibility of raising their class to a more favorable status (sibin / ginogatan)."}></PracticeCard>
            <PracticeCard title="Slave of a Slave" location = "Tagalog" description={"Poverty can reach a point where an alipin has his/her own alipin. An alipin sa gigilid of an alipin na namamahay is called bulisik meaning vile, while an alipin sa gigilid of an alipin sa gigilid is called bulislis meaning “lifted skirt”."}></PracticeCard>
            <PracticeCard title="Capture from War / Raids" location = "Biand Visayas" description={"Captives that were obtained from war and raids, which were very rampant during the precolonial era, were often taken in as slaves (bihag / sapod) and marketed in the same way as goods that were sold to the people."}></PracticeCard>
          </Group>
        </div>
      </Chrono>
    </div>
  );
}

export default Home;
