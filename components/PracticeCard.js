import { Card, Group, Image, Text, useMantineTheme } from "@mantine/core";

function PracticeCard({ imageUrl, title, location, description }) {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image
            src={imageUrl ? imageUrl : "https://via.placeholder.com/150"}
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group
          direction="column"
          spacing="6"
          style={{ marginBottom: 5, marginTop: 20 }}
        >
          <Text weight={500}> {title} </Text>
          <Text weight={500}> {location} </Text>
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
