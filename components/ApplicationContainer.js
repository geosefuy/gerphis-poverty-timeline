import { AppShell, Header, Footer, Group, Text, Button } from "@mantine/core";
import Link from "next/link";

export const ApplicationContainer = ({ children }) => {
  return (
    <AppShell
      styles={{
        main: {
          width: "100vw",
          padding: "0px",
          paddingTop: "70px",
        },
      }}
      footer={
        <Footer height={60} p="md">
          <Text size="sm">
            <span>© 2022 - All Rights Reserved.</span>
          </Text>
        </Footer>
      }
      header={
        <Header
          height={70}
          p="md"
          fixed
          sx={(theme) => ({
            backgroundColor: theme.fn.darken(theme.colors.indigo[9], 0.2),
          })}
        >
          <Group position="apart" spacing="xl" noWrap>
            <Text weight={"bolder"} size="xl" color="white">
              Poverty in the Philippines
            </Text>
            <Group>
              <Link href="/">
                <Button
                  component="a"
                  variant="subtle"
                  styles={(theme) => ({
                    subtle: {
                      color: "white",
                      "&:hover": {
                        color: theme.colors.indigo,
                      },
                    },
                  })}
                >
                  Home
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  component="a"
                  variant="subtle"
                  styles={(theme) => ({
                    subtle: {
                      color: "white",
                      "&:hover": {
                        color: theme.colors.indigo,
                      },
                    },
                  })}
                >
                  About Us
                </Button>
              </Link>
              <Link href="/references">
                <Button
                  component="a"
                  variant="subtle"
                  styles={(theme) => ({
                    subtle: {
                      color: "white",
                      "&:hover": {
                        color: theme.colors.indigo,
                      },
                    },
                  })}
                >
                  References
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
