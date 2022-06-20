import { Button, Group } from "@mantine/core";
import Link from "next/link";

function EraNavBar() {
    return (
        <Group position="center" my={20}>
            <Link href="/">
                <Button component="a" variant="subtle">
                    Pre-Colonial Era
                </Button>
            </Link>

            <Link href="/spanish">
                <Button component="a" variant="subtle">
                    Spanish Era
                </Button>
            </Link>

            <Link href="/american">
                <Button component="a" variant="subtle">
                    American Era
                </Button></Link>

            <Link href="/japanese">
                <Button component="a" variant="subtle">
                    Japanese Era
                </Button>
            </Link>

            <Link href="/contemporary">
                <Button component="a" variant="subtle">
                    Contemporary Era
                </Button>
            </Link>

        </Group>
    )
}

export default EraNavBar;