import { Container, createStyles, Title, useMantineTheme, ThemeIcon, Text, Image, SimpleGrid } from '@mantine/core';
import Head from 'next/head'
import React from 'react'

const useStyles = createStyles((theme) => ({
    about: {
        paddingTop: theme.spacing.xl * 2, 
        paddingBottom: theme.spacing.xl * 2, 
        minHeight: 650
    },

    aboutTitle: {
        fontWeight: 400, 
        marginBottom: theme.spacing.xl*.5
    },

    gridContainer: {
        paddingTop: 80,
        paddingBottom: 50,
    },

    item: {
        display: 'flex',
    },
    
    itemIcon: {
      padding: theme.spacing.xs,
      marginRight: theme.spacing.md,
    },
    
    itemTitle: {
      marginBottom: theme.spacing.xs / 2,
    },
    
    supTitle: {
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 800,
      fontSize: theme.fontSizes.sm,
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 8],
      letterSpacing: 0.5,
    },
    
    title: {
      lineHeight: 1,
      textAlign: 'center',
      marginTop: theme.spacing.xl,
    },
    
    description: {
      textAlign: 'center',
      marginTop: theme.spacing.xs,
    },
}));

export default function About(){
    const theme = useMantineTheme();
    
    return(
        <div>
            <Head>
                <title>About Us</title>
            </Head>
            <Container size="sm" className='about'>
                <Title align="center">About Us Page</Title>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Container>

            <Container size={700} className='gridContainer'>
                <SimpleGrid cols={3} spacing={75} style={{ marginTop: 50 }}>
                    <div className='item'>
                        <ThemeIcon variant="light" className='itemIcon' size={60} radius="md">
                            <Image src="/logo192.png" />
                        </ThemeIcon>
                        <Text weight={700} size="lg" className='itemTitle'>My Name</Text>
                        <Text color="dimmed">A Short Description Siguro</Text>
                    </div>
                    <div className='item'>
                        <ThemeIcon variant="light" className='itemIcon' size={60} radius="md">
                            <Image src="/logo192.png" />
                        </ThemeIcon>
                        <Text weight={700} size="lg" className='itemTitle'>My Name</Text>
                        <Text color="dimmed">A Short Description Siguro</Text>
                    </div>
                    <div className='item'>
                        <ThemeIcon variant="light" className='itemIcon' size={60} radius="md">
                            <Image src="/logo192.png" />
                        </ThemeIcon>
                        <Text weight={700} size="lg" className='itemTitle'>My Name</Text>
                        <Text color="dimmed">A Short Description Siguro</Text>
                    </div>
                    <div className='item'>
                        <ThemeIcon variant="light" className='itemIcon' size={60} radius="md">
                            <Image src="/logo192.png" />
                        </ThemeIcon>
                        <Text weight={700} size="lg" className='itemTitle'>My Name</Text>
                        <Text color="dimmed">A Short Description Siguro</Text>
                    </div>
                    <div className='item'>
                        <ThemeIcon variant="light" className='itemIcon' size={60} radius="md">
                            <Image src="/logo192.png" />
                        </ThemeIcon>
                        <Text weight={700} size="lg" className='itemTitle'>My Name</Text>
                        <Text color="dimmed">A Short Description Siguro</Text>
                    </div>
                    <div className='item'>
                        <ThemeIcon variant="light" className='itemIcon' size={60} radius="md">
                            <Image src="/logo192.png" />
                        </ThemeIcon>
                        <Text weight={700} size="lg" className='itemTitle'>My Name</Text>
                        <Text color="dimmed">A Short Description Siguro</Text>
                    </div>
                </SimpleGrid>
            </Container>
        </div>
    )
}