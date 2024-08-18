import { AlertDialog, Button, Flex } from "@radix-ui/themes"
import { ReactNode } from "react"

interface MyAlertInterface {
    Trigger?: ReactNode
    Content?: ReactNode
    title?: string 
    description?: string
    Cancel?: ReactNode
    Action?: ReactNode
}

export const MyAlert = (props: MyAlertInterface) => {
    // const { Trigger, Content, title, description, Cancel, Action, ...rest } = props
    console.log([props])
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>
               <Button color="red">Revoke access</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content maxWidth="450px">
                <AlertDialog.Title>Revoke access</AlertDialog.Title>
                <AlertDialog.Description size="2">
                    Are you sure? This application will no longer be accessible and any
                    existing sessions will be expired.
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                        <Button variant="solid" color="red">
                            Revoke access
                        </Button>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    )
}

export const AlertTrigger = AlertDialog.Trigger
export const AlertContent = AlertDialog.Content
export const AlertTitle = AlertDialog.Title
export const AlertDescription = AlertDialog.Description
export const AlertCancel = AlertDialog.Cancel
export const AlertAction = AlertDialog.Action

export const Alert = AlertDialog.Root