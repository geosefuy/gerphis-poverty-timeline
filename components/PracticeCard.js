import { Card, Group, Image, Text, useMantineTheme } from "@mantine/core";

import { MapPin } from "tabler-icons-react";

function PracticeCard({ imageUrl, title, location, description }) {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: "auto, 0" }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image
            src={imageUrl}
            height={160}
            alt="PracticeImage"
            withPlaceholder
          />
        </Card.Section>

        <Group
          direction="column"
          spacing="6"
          style={{ marginBottom: 5, marginTop: 20 }}
        >
          {location && (
            <Group spacing={4}>
              <MapPin></MapPin>
              <Text color="dimmed"> {location} </Text>
            </Group>
          )}

          <Text size="xl" weight={700}>
            {" "}
            {title}{" "}
          </Text>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {description}
        </Text>

        {/* <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Book classic tour now
        </Button> */}
      </Card>
    </div>
  );
}

export default PracticeCard;
