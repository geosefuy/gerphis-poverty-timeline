import {
  Group,
  Image,
  Stack,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import { Chrono } from "react-chrono";
import EraNavBar from "../components/EraNavBar";
import PracticeCard from "../components/PracticeCard";

function American() {
  const items = [
    {
      title: "1909",
    },
    {
      title: "1913",
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
              src="https://i.imgur.com/y1EhKZf.jpg"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text>Payne-Aldrich Act</Text>
                  <Text>1909</Text>
                  <Text>The first motion towards the Free Trade Policy comes from this act, wherein the US provided free entry of various products and goods except rice, sugar, and tobacco. This allowed Filipinos the opportunity to become dependent on the American market, which puts them under control. This also allows them to manipulate the domestic market in any way they can, and lower class workers do not necessarily have the abilities to protect themselves against abuse from the Americans.</Text>

                </Stack>
              </Group>
            </Paper>
          </Group>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group style={{ maxWidth: "1080px" }}>
            <PracticeCard title="Continuous Feudal Relations" imageUrl="https://i.imgur.com/IzcGNw8.png" description={"The system that was established from the Spanish era has slowly leaked and merged with the systems that were being introduced by the Americans. It became apparent that the workers were not benefiting from the reform, and was mainly targeted towards the rich and educated, with being able to manipulate land ownership and abuse those under them."}></PracticeCard>
            <PracticeCard title="Public school and healthcare systems" imageUrl="https://i.imgur.com/fPxMwpx.jpg" description={"One of the more generally positive practices that were implemented during the American regime was the construction of public schools and hospitals to address the dire need of education and healthcare, especially to the masses. This served as a way for the working class to have an opportunity in obtaining those without spending much. Although there may be neocolonialism that occurs until today, the emergence of these establishments are very beneficial to the public."}></PracticeCard>
          </Group>
        </div>
        {/* 1913 */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              src="https://i.imgur.com/tb30mGW.jpg"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text>Underwood Simmons Tariff Act</Text>
                  <Text>1913</Text>
                  <Text>The Underwood-Simmons Tariff Act further cemented the American market onto the Philippines, allowing total free trade compared to the partial version offered by the Payne-Aldrich Act. Potential investments towards the Philippine industry basically vanished because of this. Less employment opportunities, less possibilities of Philippine businesses, only led to poverty especially to the working class.</Text>
                </Stack>
              </Group>
            </Paper>
          </Group>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group style={{ maxWidth: "1080px" }}>
            <PracticeCard title="Continuous Feudal Relations" imageUrl="https://i.imgur.com/IzcGNw8.png" description={"The system that was established from the Spanish era has slowly leaked and merged with the systems that were being introduced by the Americans. It became apparent that the workers were not benefiting from the reform, and was mainly targeted towards the rich and educated, with being able to manipulate land ownership and abuse those under them."}></PracticeCard>
            <PracticeCard title="Public school and healthcare systems" imageUrl="https://i.imgur.com/fPxMwpx.jpg" description={"One of the more generally positive practices that were implemented during the American regime was the construction of public schools and hospitals to address the dire need of education and healthcare, especially to the masses. This served as a way for the working class to have an opportunity in obtaining those without spending much. Although there may be neocolonialism that occurs until today, the emergence of these establishments are very beneficial to the public."}></PracticeCard>
          </Group>
        </div>
        {/* 1941 */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              src="https://i.imgur.com/j1dHBcq.jpg"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text>Confiscation of Assets from Japanese</Text>
                  <Text>1941</Text>
                  <Text>One of the very first acts committed by the Japanese occupation army was to confiscate enemy assets, including that of Americans and Filipinos. Investments for various establishments and industries including agriculture, mining, and commerce were taken by the occupying power. The sudden confiscation of goods and money resulted in the disruption of the Philippine economy, and it also negatively impacted the output of said industries. The supplies of goods and services, as well as their availability, decreased before they eventually stabilized.</Text>
                </Stack>
              </Group>
            </Paper>
          </Group>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group style={{ maxWidth: "1080px" }}>
            <PracticeCard title="Continuous Feudal Relations" imageUrl="https://i.imgur.com/IzcGNw8.png" description={"The system that was established from the Spanish era has slowly leaked and merged with the systems that were being introduced by the Americans. It became apparent that the workers were not benefiting from the reform, and was mainly targeted towards the rich and educated, with being able to manipulate land ownership and abuse those under them."}></PracticeCard>
            <PracticeCard title="Public school and healthcare systems" imageUrl="https://i.imgur.com/fPxMwpx.jpg" description={"One of the more generally positive practices that were implemented during the American regime was the construction of public schools and hospitals to address the dire need of education and healthcare, especially to the masses. This served as a way for the working class to have an opportunity in obtaining those without spending much. Although there may be neocolonialism that occurs until today, the emergence of these establishments are very beneficial to the public."}></PracticeCard>
          </Group>
        </div>
        {/* 1942 */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              src="https://i.imgur.com/TLkjpXs.jpg"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text>Food Supply Problem in Leyte</Text>
                  <Text>1942-1944</Text>
                  <Text>When the Japanese army invaded Manila, the food storage in Leyte was insufficient
                    to match the needs of the local population, Japanese forces, and American guerilla forces as agricultural
                    efficiency and output was already low beforehand. The National Rice and Corn Corporation (NARIC) and Neighborhood Association (NA)
                    were two groups who tried to combat this but were proven ineffective due to multiple reasons like budget, distrust, and misunderstandings
                    about their purpose. This led to people suffering severe hunger due to lack of food and quickly became the people's main concern and source of
                    anxiety at that time. The Japanese created the Leyte Primary Foodstuffs Association (PRIMFA) to implement a controlled
                    economy by force but failed as it was revealed their true purpose was to serve their military and not the people.
                    Their implemented system of trade made things worse as it made the poor poorer and the rich richer.</Text>
                </Stack>
              </Group>
            </Paper>
          </Group>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group style={{ maxWidth: "1080px" }}>
            <PracticeCard title="Continuous Feudal Relations" imageUrl="https://i.imgur.com/IzcGNw8.png" description={"The system that was established from the Spanish era has slowly leaked and merged with the systems that were being introduced by the Americans. It became apparent that the workers were not benefiting from the reform, and was mainly targeted towards the rich and educated, with being able to manipulate land ownership and abuse those under them."}></PracticeCard>
            <PracticeCard title="Public school and healthcare systems" imageUrl="https://i.imgur.com/fPxMwpx.jpg" description={"One of the more generally positive practices that were implemented during the American regime was the construction of public schools and hospitals to address the dire need of education and healthcare, especially to the masses. This served as a way for the working class to have an opportunity in obtaining those without spending much. Although there may be neocolonialism that occurs until today, the emergence of these establishments are very beneficial to the public."}></PracticeCard>
          </Group>
        </div>
        {/* 1946 */}
        <div>
          <Group position="apart" noWrap mb={40}>
            <Image
              width={360}
              height={480}
              fit="contain"
              src="https://i.imgur.com/fzo2eVJ.jpg"
            ></Image>
            <Paper shadow="md" p="xl" m={20} style={{ width: "700px" }}>
              <Group position="apart" align="flex-start">
                <Stack>
                  <Text>Bell Trade Act</Text>
                  <Text>1946</Text>
                  <Text>The Bell Trade Act of 1946 or the Philippine Trade Act states the trade policies between the Philippines and the
                     United States after the Philippines' independence. Suffering from the devastating effects of the
                      war and the challenges of a falling economy, Manuel Roxas had no choice but to depend on the unfavorable 
                      agreement. One requirement of this act was granting Parity Rights, which gives U.S. 
                      citizens and corporations rights to Philippine natural resources. Later in 1955, the Laurel-Langley Agreement revised the 
                      Bell Trade Act, which permitted U.S. citizens to invest in all economic activities. Only those influential Filipinos who benefited
                       are in favor of this negotiation, while other Filipino citizens suffer from the economic effects of American capitalism.
                    According to Golay (1955), the economic consequences of the Trade Act would induce a high level of American investment in the
                     Philippines, which would hasten its economic development. It would expand extractive industries to provide raw materials for the
                      American companies rather than a more desirable investment in Philippine manufacturing capacity. In addition, the parity rights will 
                      lead to rapid exploitation of the Philippine natural resources that would damage the environment.</Text>
                </Stack>
              </Group>
            </Paper>
          </Group>
          <Title ml={20} my={20} order={1}>
            Practices
          </Title>
          <Group style={{ maxWidth: "1080px" }}>
            <PracticeCard title="Continuous Feudal Relations" imageUrl="https://i.imgur.com/IzcGNw8.png" description={"The system that was established from the Spanish era has slowly leaked and merged with the systems that were being introduced by the Americans. It became apparent that the workers were not benefiting from the reform, and was mainly targeted towards the rich and educated, with being able to manipulate land ownership and abuse those under them."}></PracticeCard>
            <PracticeCard title="Public school and healthcare systems" imageUrl="https://i.imgur.com/fPxMwpx.jpg" description={"One of the more generally positive practices that were implemented during the American regime was the construction of public schools and hospitals to address the dire need of education and healthcare, especially to the masses. This served as a way for the working class to have an opportunity in obtaining those without spending much. Although there may be neocolonialism that occurs until today, the emergence of these establishments are very beneficial to the public."}></PracticeCard>
          </Group>
        </div>
      </Chrono>
    </div>
  );
}

export default American;
