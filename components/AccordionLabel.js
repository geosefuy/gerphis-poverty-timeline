import { Text } from "@mantine/core";

function AccordionLabel({ location, description,social_class }) {
  return (
    <div>
      <Text>{location}</Text>
      <Text>{social_class}</Text>
      <Text size="sm" color="dimmed" weight={400}>
        {description}
      </Text>
    </div>
  );
}

export default AccordionLabel;
