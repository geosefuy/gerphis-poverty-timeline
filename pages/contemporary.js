import { Accordion, Group, Image, Stack, Paper, Text } from "@mantine/core";
import { Chrono } from "react-chrono";
import AccordionLabel from "../components/AccordionLabel";
import EraNavBar from "../components/EraNavBar";
import TimelineContent from "../components/TimelineContent";
import { Divider } from "@mantine/core";

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
              src="https://images.unsplash.com/photo-1655386068492-1b252df3791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
          <Accordion
            styles={{
              item: { width: "700px" },
              itemOpened: { width: "700px" },
            }}
          >
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
        </div>
        {/* 1957 */}
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
                  <Text>“Filipino First” policy</Text>
                  <Text>1957</Text>
                  <Text>The policy was first upheld by the 8th president of the Philippines, Carlos P. Garcia, in an attempt to favor Filipino business relationships over foreign opportunities. They would simply have a priority in dealing with possible agreements, allowing Filipino businessmen to have a control in the country’s industries in its foundation.|
                    Unfortunately, although this policy looked promising for Filipino businessmen, this served to be ineffective for the working class. The rich were the sole beneficiaries for the system, and the income distribution for the middle and working class were unchanged and at times even reduced. In short, this policy was implemented simply for the Filipino elite class and no one else.</Text>

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
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
        </div>
        {/* 1963 */}
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
                  <Text>Failure of Land Reform</Text>
                  <Text>1963</Text>
                  <Text>Former 9th president Diosdado Macapagal failed to conduct land reform to alleviate the farmers’ constant conflict against land ownership and payment towards previously established private lands. Although a 75-hectare retention limit was implemented to help in limiting the ownership between current owners, the current status and financial capabilities of the farmers themselves are considered inadequate to the point that they are unable to buy land from them anymore. The damage caused by the previous bodies of government has made them incapable of buying land with the exception of gaining debts from the landlords themselves.</Text>

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
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
        </div>
        {/* 1969 */}
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
                  <Text>Balance of Payments crisis</Text>
                  <Text>1969</Text>
                  <Text>Because Ferdinand Marcos had led the Philippines as the former 10 president of the Philippines, he wanted to continue his reign further for a second term, although this was still unprecedented ever since Philippine independence. Because of this, Marcos led up to $50 million worth of infrastructure projects to show that there was ongoing progress and another term was needed to complete these projects and further escalate Philippines into an international scale.
                    However, the decision was proven wrong when the government was required to seek a debt rescheduling plan with the International Monetary Fund, and switch from an import-oriented to an export-oriented industrialization, causing the Philippine peso to be devalued against other currencies. This caused our goods to be priced less, which all trickled down from the major businesses to the farmers that work hard to gather these goods.</Text>
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
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
        </div>
        {/* 1972-1986 */}
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
                  <Text>Martial Law</Text>
                  <Text>1972-1986</Text>
                  <Text>A lot of events and practices occurred during the Martial Law, but focusing on the economy and poverty aspects reveal that farmers instead became poorer during the Martial Law, with wages reduced by 30% at the end, prices of goods had more than tripled, and there were 6 out of 10 families by the end of the dictatorial period. Combined with the sheer human rights abuses that the Filipino people experienced and the enforcements that restricted their right to criticize, there was no choice but to endure what was happening.</Text>
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
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
        </div>
        {/* 1997 */}
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
                  <Text>Asian Financial Crisis</Text>
                  <Text>1997</Text>
                  <Text>DESCRIPTION</Text>
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
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
        </div>
        {/* 2009 */}
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
                  <Text>Typhoon Ondoy in Luzon</Text>
                  <Text>2009</Text>
                  <Text>Tropical Storm Ondoy or Typhoon Ketsana caused $1.15 billion in damages and 921 fatalities. It brought  widespread flash flooding in Metro Manila and on the afternoon of September 26, Gilbert Teodoro declared an overall state of calamity and the nearby 25 provinces in Luzon hit by the typhoon, allowing officials to utilize emergency funds for relief and rescue. </Text>
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
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
        </div>
        {/* 2013 */}
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
                  <Text>Typhoon Yolanda in Eastern and Central Visayas</Text>
                  <Text>2013</Text>
                  <Text>The super typhoon affected Eastern Visayas or Region VIII. It was the 3rd poorest region in the Philippines as of 1st semester of 2012. It had a poverty incidence of 45.5 percent of the population. It led to long term vulnerability in the Region and other affected areas, causing poverty, marginalization, and conflict. 44 provinces were affected and more than 6000 people died. 1757 individuals are still missing and 26,136 families affected. It was reported that 1,168,958 destroyed and damaged houses. P15,620,130,890 worth of damage to infrastructure such as roads, bridges, irrigation, flood control, health and school facilities. In addition, there was P15,026,036,681 worth of damage to agriculture.</Text>
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
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
        </div>
        {/* 2020 */}
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
                  <Text>COVID-19 Pandemic</Text>
                  <Text>2020</Text>
                  <Text>The Covid-19 pandemic caused enormous restrictions that severely affected many industries, businesses, and services. Due to this, people lost their jobs with many ending up in poverty. Data reveals that over 26 million Filipinos are now in poverty, estimated to be 23% of the total population.</Text>
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
            <Accordion.Item label={<AccordionLabel location='Luzon, Visayas, and Mindanao' social_class='Informal Settlers'></AccordionLabel>}>
              This is the poor social class stricken with poverty to the point that they have no real homes or jobs. They instead reside in makeshift houses on public or near private property.
              Their homes are often crowded not just due to their size but also due to the fact that they tend to flock together and live with other illegal squatters.
            </Accordion.Item>
          </Accordion>
        </div>
      </Chrono>
    </div>
  );
}

export default Contemporary;
