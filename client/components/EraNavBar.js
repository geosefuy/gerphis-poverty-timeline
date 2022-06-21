import { Button, Group } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

function EraNavBar() {
  const router = useRouter();

  return (
    <Group position="center" my={20}>
      <Link href="/">
        <Button
          component="a"
          variant={router.pathname == "/" ? "filled" : "outline"}
        >
          Pre-Colonial Era
        </Button>
      </Link>

      <Link href="/spanish">
        <Button
          component="a"
          variant={router.pathname == "/spanish" ? "filled" : "outline"}
        >
          Spanish Era
        </Button>
      </Link>

      <Link href="/american">
        <Button
          component="a"
          variant={router.pathname == "/american" ? "filled" : "outline"}
        >
          American Era
        </Button>
      </Link>

      <Link href="/japanese">
        <Button
          component="a"
          variant={router.pathname == "/japanese" ? "filled" : "outline"}
        >
          Japanese Era
        </Button>
      </Link>

      <Link href="/contemporary">
        <Button
          component="a"
          variant={router.pathname == "/contemporary" ? "filled" : "outline"}
        >
          Contemporary Era
        </Button>
      </Link>
    </Group>
  );
}

export default EraNavBar;
