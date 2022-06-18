import { Button, Group } from "@mantine/core";

function EraNavBar () {
    return (
        <Group position="center" my={20}>
            <Button variant="subtle">
                Dinosaur Era
            </Button>

            <Button variant="subtle">
                Spanish Era
            </Button>

            <Button variant="subtle">
                Freedom Era
            </Button>

            <Button variant="subtle">
                Space Era
            </Button>
        </Group>
    )
}

export default EraNavBar;