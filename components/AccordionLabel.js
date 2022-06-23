import { Group, Text } from "@mantine/core";
import { MapPin } from "tabler-icons-react";

function AccordionLabel({ location,  social_class }) {
  return (
    <div>
      <Group spacing={4}>
        <MapPin size="16"></MapPin>
        <Text color="dimmed"> {location} </Text>
      </Group>
      <Text weight={500} size="lg">{social_class}</Text>
    </div>
  );
}

export default AccordionLabel;
