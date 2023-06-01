import * as Popover from '@radix-ui/react-popover'
import './styles.css'

export const PopoverDemo = () => {
  return (
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger">More info</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          Some more info...
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
