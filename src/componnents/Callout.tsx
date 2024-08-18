import { Callout } from "@radix-ui/themes"
import { ShieldBan } from "lucide-react"

export const MyCallout = () => {
    return (
        <Callout.Root>
            <Callout.Icon>
                <ShieldBan color="red" />
            </Callout.Icon>
            <Callout.Text>
                You will need admin privileges to install and access this application.
            </Callout.Text>
        </Callout.Root>
    )
}
export default MyCallout