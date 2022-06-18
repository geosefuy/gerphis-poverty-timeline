import { AppShell, Header, Footer, Group, Text, Button } from "@mantine/core";
import Link from "next/link";

export const ApplicationContainer = ({ children }) => {
  return (
    <AppShell
      styles={{
        main: {
          background: "#FFFFFF",
          width: "100vw",
          paddingLeft: "0px",
          paddingTop: "70px",
        },
      }}
      footer={
        <Footer height={60} p="md">
          <Text size="sm">
            <span>© 2022 YourSite.com - All Rights Reserved.</span>
          </Text>
        </Footer>
      }
      header={
        <Header height={70} p="md" fixed>
          <Group position="apart" spacing="xl" noWrap>
            <Text weight={"bolder"} size="xl">
              Poverty in the Philippines
            </Text>
            <Group>
              <Link href="/">
                <Button component="a" variant="subtle">
                  Home
                </Button>
              </Link>
              <Link href="/about">
                <Button component="a" variant="subtle">
                  About Us
                </Button>
              </Link>
            </Group>
          </Group>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
