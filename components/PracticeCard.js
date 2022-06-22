import { Card, Group, Image, Text, useMantineTheme } from "@mantine/core";

function PracticeCard({ imageUrl, title, location, description }) {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src="./image.png" height={160} alt="Norway" />
        </Card.Section>

        <Group
          direction="column"
          spacing="6"
          style={{ marginBottom: 5, marginTop: 20 }}
        >
          <Text weight={500}>Infanticide</Text>
          <Text weight={500}>Pangasinan and Visayas</Text>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
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
