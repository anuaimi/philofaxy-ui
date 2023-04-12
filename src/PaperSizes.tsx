import * as React from 'react'

import { Radio, RadioGroup, Stack } from '@chakra-ui/react'

const paperSizes = [ 
  {name: 'a4-a5', display:'A4/A5'}, 
  {name: 'personal', display:'Personal'}, 
  {name: 'pocket', display: 'Pocket'}];

function PaperSizes() {
  const [value, setValue] = React.useState(paperSizes[0].name);

  return (
    <RadioGroup defaultValue='a4-a5' onChange={setValue} value={value}>
      <Stack ml={4} spacing={4}  direction='row'>
        {paperSizes.map((paperSize) => {
          return (
            <Radio value={paperSize.name}>{paperSize.display}</Radio>
          ) 
        })}
      </Stack>
    </RadioGroup>
  )
}

export default PaperSizes;

