import { Text } from "@mantine/core";

function AccordionLabel({ label, description }) {
  return (
    <div>
      <Text>Location</Text>
      <Text>Social Class</Text>
      <Text>Years</Text>
      <Text>{label}</Text>
      <Text size="sm" color="dimmed" weight={400}>
        {description}
      </Text>
    </div>
  );
}

export default AccordionLabel;
