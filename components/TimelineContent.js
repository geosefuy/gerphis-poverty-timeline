import { Accordion, Group, Image, Paper, Stack, Text } from "@mantine/core";
import AccordionLabel from "./AccordionLabel";

function TimelineContent() {
  return (
    <div>
      <Group position="apart" noWrap mb={40}>
        <Image
          width={360}
          height={480}
          fit="contain"
          src="https://images.unsplash.com/photo-1655386068492-1b252df3791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        ></Image>
        <Accordion
          styles={{
            item: { width: "700px" },
            itemOpened: { width: "700px" },
          }}
        >
          <Accordion.Item label={<AccordionLabel></AccordionLabel>}>
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
          <Accordion.Item label={<AccordionLabel></AccordionLabel>}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Item>
        </Accordion>
      </Group>

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
    </div>
  );
}

export default TimelineContent;
