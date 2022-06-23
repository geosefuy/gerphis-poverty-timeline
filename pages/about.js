import {
  Container,
  createStyles,
  Title,
  useMantineTheme,
  ThemeIcon,
  Text,
  Image,
  SimpleGrid,
} from "@mantine/core";
import Head from "next/head";
import React from "react";

const useStyles = createStyles((theme) => ({
  about: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    minHeight: 650,
  },

  aboutTitle: {
    fontWeight: 400,
    marginBottom: theme.spacing.xl * 0.5,
  },

  gridContainer: {
    paddingTop: 80,
    paddingBottom: 50,
  },

  item: {
    display: "flex",
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: theme.spacing.xs / 2,
  },

  supTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 8],
    letterSpacing: 0.5,
  },

  title: {
    lineHeight: 1,
    textAlign: "center",
    marginTop: theme.spacing.xl,
  },

  description: {
    textAlign: "center",
    marginTop: theme.spacing.xs,
  },
}));

export default function About() {
  const theme = useMantineTheme();

  const profiles = [
    {
      imageUrl: "https://i.imgur.com/IRrNzYt.jpg",
      name: "Antioquia, Anjelo T.",
      description: "BS Computer Science",
    },
    {
      imageUrl: "",
      name: "Estipona, Shaira C.",
      description: "BS Computer Science",
    },
    {
      imageUrl: "https://i.imgur.com/B2QNYNU.jpg",
      name: "Shi, Carlos W.",
      description: "BS Computer Science",
    },
    {
      imageUrl: "",
      name: "Shu Too, Kevin L.",
      description: "BS Computer Science",
    },
    {
      imageUrl: "https://i.imgur.com/Cyt3moB.png",
      name: "Sunpayco, Julian Rafael M.",
      description: "BS Computer Science",
    },
    {
      imageUrl: "https://i.imgur.com/5UkGNCk.png",
      name: "Uy, Geosef Viktor C.",
      description: "BS Computer Science",
    },
  ];

  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <Container size="sm" className="about" my={20}>
        <Title align="center">Meet the Team</Title>
        <p>
          This website was made in partial requirement of the course GERPHIS.
          The content of this website is about the poverty situation in the
          Philippines during various eras and its related issues. Disclaimer: We
          do not own any of the images and information, sources can be found in
          the reference page.
        </p>
      </Container>

      <Container size={700} className="gridContainer" mb={40}>
        <SimpleGrid cols={3} spacing={75} style={{ marginTop: 50 }}>
          {profiles.map((profile, index) => (
            <div className="item" key={index}>
              <ThemeIcon
                variant="light"
                className="itemIcon"
                size={100}
                radius="md"
              >
                <Image src={profile.imageUrl} />
              </ThemeIcon>
              <Text weight={700} size="lg" className="itemTitle">
                {profile.name}
              </Text>
              <Text color="dimmed">{profile.description}</Text>
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}
