import {
  Accordion,
  Group,
  Image,
  Stack,
  Paper,
  Text,
  Title,
  Divider
} from "@mantine/core";
import { Chrono } from "react-chrono";
import AccordionLabel from "../components/AccordionLabel";
import EraNavBar from "../components/EraNavBar";
import PracticeCard from "../components/PracticeCard";

function Contemporary() {
  const items = [
    {
      title: "1933",
    },
    {
      title: "1957",
    },
    {
      title: "1963",
    },
    {
      title: "1969",
    },
    {
      title: "1972-1986",
    },
    {
      title: "1997",
    },
    {
      title: "2009",
    },
    {
      title: "2013",
    },
    {
      title: "2020",
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
        {/* 1933 */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              src="https://i.imgur.com/WnlhTXw.jpg"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text>Rice Share Tenancy Act</Text>
                  <Text>1933</Text>
                  <Text>The Rice Share Tenancy Act of 1933 was established during the Commonwealth period under
                    the presidency of Manuel L Quezon. It was to regulate the share-tenancy contracts by establishing
                    minimum standards providing for a 50-50 sharing contract where the “tenant's share was exempted from repayment claims of debt to landlords.”
                    But this took effect only in 1946 when the landlord-dominated municipal councils agreed to its implementation (IBON, 1988, as cited in, Macaranas, 2015).</Text>
                  <Divider></Divider>
                  <Text>Section 2 of Act no. 4054 defined Share tenancy Contracts as,
                    "A contract of share of tenancy is one whereby a partnership between a landlord and a tenant is entered into,
                    for a joint pursuit of rice agricultural work with common interest in which both parties divide between
                    them the resulting profits as well as the losses". </Text>
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
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group align="flex-start" style={{ maxWidth: "1080px" }}>
            <PracticeCard title="Mendicancy / Begging" imageUrl="https://i.imgur.com/fwm6yBO.jpg" description="A common practice in the Philippines is mendicancy or begging for food or money. 
            This commonly occurs in busy areas and streets where they are usually located at the sides waiting for incoming pedestrians to hopefully give them money. 
            Some beggars take it a step further in busy streets, wherein they would forcefully clean the windshield of cars in standby and look at the driver hoping that 
            they can get some spare change. Some families even use their infants and toddlers to coerce other people into getting money. Although a Mendicancy Law was enforced in 1978, 
            this practice is still rampant in the various slums areas and are not being monitored at all by the local government units. Beggars simply go on with their daily lives 
            and aim to gather more money because there is currently no possibility at all of rising from their status any longer."></PracticeCard>
            <PracticeCard title="Street Children" imageUrl="https://i.imgur.com/WG5bHxV.jpg" description={"Because of poverty in the Philippines, children from these families have resorted to live along the streets and are deprived of the proper education and healthcare simply because their family cannot afford it. These children instead become parts of syndicates and gangs that create coordinated attempts of robbery and theft along the streets, and even go so far to murder just to be able to sustain themselves and their families."}></PracticeCard>
            <PracticeCard title="Human Trafficking" imageUrl="https://i.imgur.com/MOohVSH.jpg" description={"Exploitation of the poor continues with human trafficking, where they are coerced to conduct illegal activities against their will because of their financial instability. They are forced to conduct these activities because it serves as their only way to earn money fast. Some activities involve forced labor, and prostitution, which despite being illegal in the Philippines, is an industry that is being checked out by poor Filipinos because of the possible outlook that it can bring. "}></PracticeCard>
            <PracticeCard title="Organ Selling" imageUrl="https://i.imgur.com/1QOTMAK.jpg" description={"Organ selling is considered illegal in the Philippines. Despite these restrictions, there are underground markets for selling different organs at various prices. Poverty can make Filipinos reach a point where they must sell a part of their body just to make ends meet. A case is seen in social media that shows many Filipinos willing to donate their kidneys to earn more money, usually for significantly large bills and payments needed such as hospital bills and debts."}></PracticeCard>
          </Group>
        </div>
        {/* 1957 */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              src="https://i.imgur.com/lWaHezC.jpg"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text>“Filipino First” policy</Text>
                  <Text>1957</Text>
                  <Text>The policy was first upheld by the 8th president of the Philippines, Carlos P. Garcia, in an attempt to favor Filipino business relationships over foreign opportunities. They would simply have a priority in dealing with possible agreements, allowing Filipino businessmen to have a control in the country’s industries in its foundation.|
                    Unfortunately, although this policy looked promising for Filipino businessmen, this served to be ineffective for the working class. The rich were the sole beneficiaries for the system, and the income distribution for the middle and working class were unchanged and at times even reduced. In short, this policy was implemented simply for the Filipino elite class and no one else.</Text>

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
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group align="flex-start" style={{ maxWidth: "1080px" }}>
            <PracticeCard title="Mendicancy / Begging" imageUrl="https://i.imgur.com/fwm6yBO.jpg" description="A common practice in the Philippines is mendicancy or begging for food or money. 
            This commonly occurs in busy areas and streets where they are usually located at the sides waiting for incoming pedestrians to hopefully give them money. 
            Some beggars take it a step further in busy streets, wherein they would forcefully clean the windshield of cars in standby and look at the driver hoping that 
            they can get some spare change. Some families even use their infants and toddlers to coerce other people into getting money. Although a Mendicancy Law was enforced in 1978, 
            this practice is still rampant in the various slums areas and are not being monitored at all by the local government units. Beggars simply go on with their daily lives 
            and aim to gather more money because there is currently no possibility at all of rising from their status any longer."></PracticeCard>
            <PracticeCard title="Street Children" imageUrl="https://i.imgur.com/WG5bHxV.jpg" description={"Because of poverty in the Philippines, children from these families have resorted to live along the streets and are deprived of the proper education and healthcare simply because their family cannot afford it. These children instead become parts of syndicates and gangs that create coordinated attempts of robbery and theft along the streets, and even go so far to murder just to be able to sustain themselves and their families."}></PracticeCard>
            <PracticeCard title="Human Trafficking" imageUrl="https://i.imgur.com/MOohVSH.jpg" description={"Exploitation of the poor continues with human trafficking, where they are coerced to conduct illegal activities against their will because of their financial instability. They are forced to conduct these activities because it serves as their only way to earn money fast. Some activities involve forced labor, and prostitution, which despite being illegal in the Philippines, is an industry that is being checked out by poor Filipinos because of the possible outlook that it can bring. "}></PracticeCard>
            <PracticeCard title="Organ Selling" imageUrl="https://i.imgur.com/1QOTMAK.jpg" description={"Organ selling is considered illegal in the Philippines. Despite these restrictions, there are underground markets for selling different organs at various prices. Poverty can make Filipinos reach a point where they must sell a part of their body just to make ends meet. A case is seen in social media that shows many Filipinos willing to donate their kidneys to earn more money, usually for significantly large bills and payments needed such as hospital bills and debts."}></PracticeCard>
          </Group>
        </div>
        {/* 1963 */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              src="https://i.imgur.com/6GXwOoF.jpg"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text>Failure of Land Reform</Text>
                  <Text>1963</Text>
                  <Text>Former 9th president Diosdado Macapagal failed to conduct land reform to alleviate the farmers’ constant conflict against land ownership and payment towards previously established private lands. Although a 75-hectare retention limit was implemented to help in limiting the ownership between current owners, the current status and financial capabilities of the farmers themselves are considered inadequate to the point that they are unable to buy land from them anymore. The damage caused by the previous bodies of government has made them incapable of buying land with the exception of gaining debts from the landlords themselves.</Text>

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
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group align="flex-start" style={{ maxWidth: "1080px" }}>
            <PracticeCard title="Mendicancy / Begging" imageUrl="https://i.imgur.com/fwm6yBO.jpg" description="A common practice in the Philippines is mendicancy or begging for food or money. 
            This commonly occurs in busy areas and streets where they are usually located at the sides waiting for incoming pedestrians to hopefully give them money. 
            Some beggars take it a step further in busy streets, wherein they would forcefully clean the windshield of cars in standby and look at the driver hoping that 
            they can get some spare change. Some families even use their infants and toddlers to coerce other people into getting money. Although a Mendicancy Law was enforced in 1978, 
            this practice is still rampant in the various slums areas and are not being monitored at all by the local government units. Beggars simply go on with their daily lives 
            and aim to gather more money because there is currently no possibility at all of rising from their status any longer."></PracticeCard>
            <PracticeCard title="Street Children" imageUrl="https://i.imgur.com/WG5bHxV.jpg" description={"Because of poverty in the Philippines, children from these families have resorted to live along the streets and are deprived of the proper education and healthcare simply because their family cannot afford it. These children instead become parts of syndicates and gangs that create coordinated attempts of robbery and theft along the streets, and even go so far to murder just to be able to sustain themselves and their families."}></PracticeCard>
            <PracticeCard title="Human Trafficking" imageUrl="https://i.imgur.com/MOohVSH.jpg" description={"Exploitation of the poor continues with human trafficking, where they are coerced to conduct illegal activities against their will because of their financial instability. They are forced to conduct these activities because it serves as their only way to earn money fast. Some activities involve forced labor, and prostitution, which despite being illegal in the Philippines, is an industry that is being checked out by poor Filipinos because of the possible outlook that it can bring. "}></PracticeCard>
            <PracticeCard title="Organ Selling" imageUrl="https://i.imgur.com/1QOTMAK.jpg" description={"Organ selling is considered illegal in the Philippines. Despite these restrictions, there are underground markets for selling different organs at various prices. Poverty can make Filipinos reach a point where they must sell a part of their body just to make ends meet. A case is seen in social media that shows many Filipinos willing to donate their kidneys to earn more money, usually for significantly large bills and payments needed such as hospital bills and debts."}></PracticeCard>
          </Group>
        </div>
        {/* 1969 */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              src="https://i.imgur.com/n9UyxlG.jpg"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text>Balance of Payments crisis</Text>
                  <Text>1969</Text>
                  <Text>Because Ferdinand Marcos had led the Philippines as the former 10 president of the Philippines, he wanted to continue his reign further for a second term, although this was still unprecedented ever since Philippine independence. Because of this, Marcos led up to $50 million worth of infrastructure projects to show that there was ongoing progress and another term was needed to complete these projects and further escalate Philippines into an international scale.
                    However, the decision was proven wrong when the government was required to seek a debt rescheduling plan with the International Monetary Fund, and switch from an import-oriented to an export-oriented industrialization, causing the Philippine peso to be devalued against other currencies. This caused our goods to be priced less, which all trickled down from the major businesses to the farmers that work hard to gather these goods.</Text>
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
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group align="flex-start" style={{ maxWidth: "1080px" }}>
            <PracticeCard title="Mendicancy / Begging" imageUrl="https://i.imgur.com/fwm6yBO.jpg" description="A common practice in the Philippines is mendicancy or begging for food or money. 
            This commonly occurs in busy areas and streets where they are usually located at the sides waiting for incoming pedestrians to hopefully give them money. 
            Some beggars take it a step further in busy streets, wherein they would forcefully clean the windshield of cars in standby and look at the driver hoping that 
            they can get some spare change. Some families even use their infants and toddlers to coerce other people into getting money. Although a Mendicancy Law was enforced in 1978, 
            this practice is still rampant in the various slums areas and are not being monitored at all by the local government units. Beggars simply go on with their daily lives 
            and aim to gather more money because there is currently no possibility at all of rising from their status any longer."></PracticeCard>
            <PracticeCard title="Street Children" imageUrl="https://i.imgur.com/WG5bHxV.jpg" description={"Because of poverty in the Philippines, children from these families have resorted to live along the streets and are deprived of the proper education and healthcare simply because their family cannot afford it. These children instead become parts of syndicates and gangs that create coordinated attempts of robbery and theft along the streets, and even go so far to murder just to be able to sustain themselves and their families."}></PracticeCard>
            <PracticeCard title="Human Trafficking" imageUrl="https://i.imgur.com/MOohVSH.jpg" description={"Exploitation of the poor continues with human trafficking, where they are coerced to conduct illegal activities against their will because of their financial instability. They are forced to conduct these activities because it serves as their only way to earn money fast. Some activities involve forced labor, and prostitution, which despite being illegal in the Philippines, is an industry that is being checked out by poor Filipinos because of the possible outlook that it can bring. "}></PracticeCard>
            <PracticeCard title="Organ Selling" imageUrl="https://i.imgur.com/1QOTMAK.jpg" description={"Organ selling is considered illegal in the Philippines. Despite these restrictions, there are underground markets for selling different organs at various prices. Poverty can make Filipinos reach a point where they must sell a part of their body just to make ends meet. A case is seen in social media that shows many Filipinos willing to donate their kidneys to earn more money, usually for significantly large bills and payments needed such as hospital bills and debts."}></PracticeCard>
          </Group>
        </div>
        {/* 1972-1986 */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              src="https://i.imgur.com/7waZ8mO.jpg"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text>Martial Law</Text>
                  <Text>1972-1986</Text>
                  <Text>A lot of events and practices occurred during the Martial Law, but focusing on the economy and poverty aspects reveal that farmers instead became poorer during the Martial Law, with wages reduced by 30% at the end, prices of goods had more than tripled, and there were 6 out of 10 families by the end of the dictatorial period. Combined with the sheer human rights abuses that the Filipino people experienced and the enforcements that restricted their right to criticize, there was no choice but to endure what was happening.</Text>
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
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group align="flex-start" style={{ maxWidth: "1080px" }}>
            <PracticeCard title="Mendicancy / Begging" imageUrl="https://i.imgur.com/fwm6yBO.jpg" description="A common practice in the Philippines is mendicancy or begging for food or money. 
            This commonly occurs in busy areas and streets where they are usually located at the sides waiting for incoming pedestrians to hopefully give them money. 
            Some beggars take it a step further in busy streets, wherein they would forcefully clean the windshield of cars in standby and look at the driver hoping that 
            they can get some spare change. Some families even use their infants and toddlers to coerce other people into getting money. Although a Mendicancy Law was enforced in 1978, 
            this practice is still rampant in the various slums areas and are not being monitored at all by the local government units. Beggars simply go on with their daily lives 
            and aim to gather more money because there is currently no possibility at all of rising from their status any longer."></PracticeCard>
            <PracticeCard title="Street Children" imageUrl="https://i.imgur.com/WG5bHxV.jpg" description={"Because of poverty in the Philippines, children from these families have resorted to live along the streets and are deprived of the proper education and healthcare simply because their family cannot afford it. These children instead become parts of syndicates and gangs that create coordinated attempts of robbery and theft along the streets, and even go so far to murder just to be able to sustain themselves and their families."}></PracticeCard>
            <PracticeCard title="Human Trafficking" imageUrl="https://i.imgur.com/MOohVSH.jpg" description={"Exploitation of the poor continues with human trafficking, where they are coerced to conduct illegal activities against their will because of their financial instability. They are forced to conduct these activities because it serves as their only way to earn money fast. Some activities involve forced labor, and prostitution, which despite being illegal in the Philippines, is an industry that is being checked out by poor Filipinos because of the possible outlook that it can bring. "}></PracticeCard>
            <PracticeCard title="Organ Selling" imageUrl="https://i.imgur.com/1QOTMAK.jpg" description={"Organ selling is considered illegal in the Philippines. Despite these restrictions, there are underground markets for selling different organs at various prices. Poverty can make Filipinos reach a point where they must sell a part of their body just to make ends meet. A case is seen in social media that shows many Filipinos willing to donate their kidneys to earn more money, usually for significantly large bills and payments needed such as hospital bills and debts."}></PracticeCard>
          </Group>
        </div>
        {/* 1997 */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              src="https://i.imgur.com/4ZIB8PR.gif"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text>Asian Financial Crisis</Text>
                  <Text>1997</Text>
                  <Text>The Asian Financial Crisis affected most of East and Southeast Asia, dropping the values of most currencies significantly and weakening our assets and exchange rates against other countries. This indirectly affected the working class as exporting goods was less beneficial to them, as well as the inflation of prices due to lower exchange rates. Furthermore, with the addition of the ‘jueteng’ scandal by Joseph “Erap” Estrada, the Philippine peso continued to decline, only regaining its value after his impeachment and repair.</Text>
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
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group align="flex-start" style={{ maxWidth: "1080px" }}>
            <PracticeCard title="Mendicancy / Begging" imageUrl="https://i.imgur.com/fwm6yBO.jpg" description="A common practice in the Philippines is mendicancy or begging for food or money. 
            This commonly occurs in busy areas and streets where they are usually located at the sides waiting for incoming pedestrians to hopefully give them money. 
            Some beggars take it a step further in busy streets, wherein they would forcefully clean the windshield of cars in standby and look at the driver hoping that 
            they can get some spare change. Some families even use their infants and toddlers to coerce other people into getting money. Although a Mendicancy Law was enforced in 1978, 
            this practice is still rampant in the various slums areas and are not being monitored at all by the local government units. Beggars simply go on with their daily lives 
            and aim to gather more money because there is currently no possibility at all of rising from their status any longer."></PracticeCard>
            <PracticeCard title="Street Children" imageUrl="https://i.imgur.com/WG5bHxV.jpg" description={"Because of poverty in the Philippines, children from these families have resorted to live along the streets and are deprived of the proper education and healthcare simply because their family cannot afford it. These children instead become parts of syndicates and gangs that create coordinated attempts of robbery and theft along the streets, and even go so far to murder just to be able to sustain themselves and their families."}></PracticeCard>
            <PracticeCard title="Human Trafficking" imageUrl="https://i.imgur.com/MOohVSH.jpg" description={"Exploitation of the poor continues with human trafficking, where they are coerced to conduct illegal activities against their will because of their financial instability. They are forced to conduct these activities because it serves as their only way to earn money fast. Some activities involve forced labor, and prostitution, which despite being illegal in the Philippines, is an industry that is being checked out by poor Filipinos because of the possible outlook that it can bring. "}></PracticeCard>
            <PracticeCard title="Organ Selling" imageUrl="https://i.imgur.com/1QOTMAK.jpg" description={"Organ selling is considered illegal in the Philippines. Despite these restrictions, there are underground markets for selling different organs at various prices. Poverty can make Filipinos reach a point where they must sell a part of their body just to make ends meet. A case is seen in social media that shows many Filipinos willing to donate their kidneys to earn more money, usually for significantly large bills and payments needed such as hospital bills and debts."}></PracticeCard>
          </Group>
        </div>
        {/* 2009 */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              src="https://i.imgur.com/yzRQ1ZZ.jpg"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text>Typhoon Ondoy in Luzon</Text>
                  <Text>2009</Text>
                  <Text>Tropical Storm Ondoy or Typhoon Ketsana caused ₱11 billion in damages and 464 fatalities. It brought  widespread flash flooding in Metro Manila and on the afternoon of September 26, Gilbert Teodoro declared an overall state of calamity and the nearby 25 provinces in Luzon hit by the typhoon, allowing officials to utilize emergency funds for relief and rescue.  </Text>
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
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group align="flex-start" style={{ maxWidth: "1080px" }}>
            <PracticeCard title="Mendicancy / Begging" imageUrl="https://i.imgur.com/fwm6yBO.jpg" description="A common practice in the Philippines is mendicancy or begging for food or money. 
            This commonly occurs in busy areas and streets where they are usually located at the sides waiting for incoming pedestrians to hopefully give them money. 
            Some beggars take it a step further in busy streets, wherein they would forcefully clean the windshield of cars in standby and look at the driver hoping that 
            they can get some spare change. Some families even use their infants and toddlers to coerce other people into getting money. Although a Mendicancy Law was enforced in 1978, 
            this practice is still rampant in the various slums areas and are not being monitored at all by the local government units. Beggars simply go on with their daily lives 
            and aim to gather more money because there is currently no possibility at all of rising from their status any longer."></PracticeCard>
            <PracticeCard title="Street Children" imageUrl="https://i.imgur.com/WG5bHxV.jpg" description={"Because of poverty in the Philippines, children from these families have resorted to live along the streets and are deprived of the proper education and healthcare simply because their family cannot afford it. These children instead become parts of syndicates and gangs that create coordinated attempts of robbery and theft along the streets, and even go so far to murder just to be able to sustain themselves and their families."}></PracticeCard>
            <PracticeCard title="Human Trafficking" imageUrl="https://i.imgur.com/MOohVSH.jpg" description={"Exploitation of the poor continues with human trafficking, where they are coerced to conduct illegal activities against their will because of their financial instability. They are forced to conduct these activities because it serves as their only way to earn money fast. Some activities involve forced labor, and prostitution, which despite being illegal in the Philippines, is an industry that is being checked out by poor Filipinos because of the possible outlook that it can bring. "}></PracticeCard>
            <PracticeCard title="Organ Selling" imageUrl="https://i.imgur.com/1QOTMAK.jpg" description={"Organ selling is considered illegal in the Philippines. Despite these restrictions, there are underground markets for selling different organs at various prices. Poverty can make Filipinos reach a point where they must sell a part of their body just to make ends meet. A case is seen in social media that shows many Filipinos willing to donate their kidneys to earn more money, usually for significantly large bills and payments needed such as hospital bills and debts."}></PracticeCard>
          </Group>
        </div>
        {/* 2013 */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              src="https://i.imgur.com/bnVcz3e.jpg"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text>Typhoon Yolanda in Eastern and Central Visayas</Text>
                  <Text>2013</Text>
                  <Text>The super typhoon affected Eastern Visayas or Region VIII. It was the 3rd poorest region in the Philippines as of 1st semester of 2012. It had a poverty incidence of 45.5 percent of the population. It led to long term vulnerability in the Region and other affected areas, causing poverty, marginalization, and conflict. 44 provinces were affected and around 6000 people died. It was reported that over 1 million houses were destroyed and damaged, amounting to ₱18 billion worth of damage to infrastructure such as roads, bridges, irrigation, flood control, health and school facilities. In addition, there was also ₱17 billion worth of damage to agriculture.</Text>
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
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group align="flex-start" style={{ maxWidth: "1080px" }}>
            <PracticeCard title="Mendicancy / Begging" imageUrl="https://i.imgur.com/fwm6yBO.jpg" description="A common practice in the Philippines is mendicancy or begging for food or money. 
            This commonly occurs in busy areas and streets where they are usually located at the sides waiting for incoming pedestrians to hopefully give them money. 
            Some beggars take it a step further in busy streets, wherein they would forcefully clean the windshield of cars in standby and look at the driver hoping that 
            they can get some spare change. Some families even use their infants and toddlers to coerce other people into getting money. Although a Mendicancy Law was enforced in 1978, 
            this practice is still rampant in the various slums areas and are not being monitored at all by the local government units. Beggars simply go on with their daily lives 
            and aim to gather more money because there is currently no possibility at all of rising from their status any longer."></PracticeCard>
            <PracticeCard title="Street Children" imageUrl="https://i.imgur.com/WG5bHxV.jpg" description={"Because of poverty in the Philippines, children from these families have resorted to live along the streets and are deprived of the proper education and healthcare simply because their family cannot afford it. These children instead become parts of syndicates and gangs that create coordinated attempts of robbery and theft along the streets, and even go so far to murder just to be able to sustain themselves and their families."}></PracticeCard>
            <PracticeCard title="Human Trafficking" imageUrl="https://i.imgur.com/MOohVSH.jpg" description={"Exploitation of the poor continues with human trafficking, where they are coerced to conduct illegal activities against their will because of their financial instability. They are forced to conduct these activities because it serves as their only way to earn money fast. Some activities involve forced labor, and prostitution, which despite being illegal in the Philippines, is an industry that is being checked out by poor Filipinos because of the possible outlook that it can bring. "}></PracticeCard>
            <PracticeCard title="Organ Selling" imageUrl="https://i.imgur.com/1QOTMAK.jpg" description={"Organ selling is considered illegal in the Philippines. Despite these restrictions, there are underground markets for selling different organs at various prices. Poverty can make Filipinos reach a point where they must sell a part of their body just to make ends meet. A case is seen in social media that shows many Filipinos willing to donate their kidneys to earn more money, usually for significantly large bills and payments needed such as hospital bills and debts."}></PracticeCard>
          </Group>
        </div>
        {/* 2020 */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              src="https://i.imgur.com/ozquOtX.jpg"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text>COVID-19 Pandemic</Text>
                  <Text>2020</Text>
                  <Text>The Covid-19 pandemic caused enormous restrictions that severely affected many industries, businesses, and services. Due to this, people lost their jobs with many ending up in poverty. Data reveals that over 26 million Filipinos are now in poverty, estimated to be 23% of the total population.</Text>
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
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group align="flex-start" style={{ maxWidth: "1080px" }}>
            <PracticeCard title="Mendicancy / Begging" imageUrl="https://i.imgur.com/fwm6yBO.jpg" description="A common practice in the Philippines is mendicancy or begging for food or money. 
            This commonly occurs in busy areas and streets where they are usually located at the sides waiting for incoming pedestrians to hopefully give them money. 
            Some beggars take it a step further in busy streets, wherein they would forcefully clean the windshield of cars in standby and look at the driver hoping that 
            they can get some spare change. Some families even use their infants and toddlers to coerce other people into getting money. Although a Mendicancy Law was enforced in 1978, 
            this practice is still rampant in the various slums areas and are not being monitored at all by the local government units. Beggars simply go on with their daily lives 
            and aim to gather more money because there is currently no possibility at all of rising from their status any longer."></PracticeCard>
            <PracticeCard title="Street Children" imageUrl="https://i.imgur.com/WG5bHxV.jpg" description={"Because of poverty in the Philippines, children from these families have resorted to live along the streets and are deprived of the proper education and healthcare simply because their family cannot afford it. These children instead become parts of syndicates and gangs that create coordinated attempts of robbery and theft along the streets, and even go so far to murder just to be able to sustain themselves and their families."}></PracticeCard>
            <PracticeCard title="Human Trafficking" imageUrl="https://i.imgur.com/MOohVSH.jpg" description={"Exploitation of the poor continues with human trafficking, where they are coerced to conduct illegal activities against their will because of their financial instability. They are forced to conduct these activities because it serves as their only way to earn money fast. Some activities involve forced labor, and prostitution, which despite being illegal in the Philippines, is an industry that is being checked out by poor Filipinos because of the possible outlook that it can bring. "}></PracticeCard>
            <PracticeCard title="Organ Selling" imageUrl="https://i.imgur.com/1QOTMAK.jpg" description={"Organ selling is considered illegal in the Philippines. Despite these restrictions, there are underground markets for selling different organs at various prices. Poverty can make Filipinos reach a point where they must sell a part of their body just to make ends meet. A case is seen in social media that shows many Filipinos willing to donate their kidneys to earn more money, usually for significantly large bills and payments needed such as hospital bills and debts."}></PracticeCard>
          </Group>
        </div>
      </Chrono>
    </div>
  );
}

export default Contemporary;
