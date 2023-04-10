import * as React from 'react'

import { Box, RadioGroup, Radio, Stack, Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
// import chakraTheme from '@chakra-ui/theme'

function PaperSizes() {
  return (
    <Box w="50%" border="2px">
      <Tabs>
        <TabList>
          <Tab>A4/A5</Tab>
          <Tab>Personal</Tab>
          <Tab>Pocket</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one</p>
          </TabPanel>
          <TabPanel>
            <p>two</p>
          </TabPanel>
          <TabPanel>
            <RadioGroup>
              <Stack direction="column">
                <Radio value="1">Day Per Page</Radio>
                <Radio value="2">Day on Two Pages</Radio>
                <Radio value="3">Two days per page</Radio>
                <Radio value="4">Two days per page lined</Radio>
              </Stack>
            </RadioGroup>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default PaperSizes;
