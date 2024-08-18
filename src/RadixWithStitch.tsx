import { AlertDialog, Code, Flex, Kbd, Text, ThemePanel } from "@radix-ui/themes"
import Button from "./componnents/Button"

export const RadixWithStitch = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', width: '100vw' }}>
            <Flex direction="column" gap="2">
                <Text size="6">The quick brown fox jumps over the lazy dog.</Text>
                <Button>Let's go</Button>
                <Code truncate>
                    import React from 'react'

                    export default function App
                </Code>
                <Kbd> Ctrl + s</Kbd>
            </Flex>

            <ThemePanel />

            <Button size='sm' color='primary'> sm primary </Button>
            <Button size='sm'> sm </Button>
            <Button size='md'> md </Button>
            <Button size='lg'> lg </Button>

            <Button> default </Button>
            <Button outlined> outlined </Button>
            <Button color={{
                '@initial': 'primary',
                '@bp1': 'secondary'
            }}
            > outlined </Button>
            <Button css={{ background: 'red' }}> overriding </Button>
            <Button css={{ background: 'red' }}> overriding </Button>

            <AlertDialog.Root>
                <AlertDialog.Trigger>
                    <Button>Revoke access</Button>
                </AlertDialog.Trigger>
                <AlertDialog.Content maxWidth="450px">
                    <AlertDialog.Title>Revoke access</AlertDialog.Title>
                    <AlertDialog.Description size="2">
                        Are you sure? This application will no longer be accessible and any
                        existing sessions will be expired.
                    </AlertDialog.Description>

                    <Flex gap="3" mt="4" justify="end">
                        <AlertDialog.Cancel>
                            <Button color="primary">
                                Cancel
                            </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                            <Button color="primary">
                                Revoke access
                            </Button>
                        </AlertDialog.Action>
                    </Flex>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </div>
    )
}

export default RadixWithStitch