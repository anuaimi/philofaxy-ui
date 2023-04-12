import * as React from 'react'

import { Box, RadioGroup, Radio, Tabs, TabPanel, TabPanels, VStack} from '@chakra-ui/react'
// import chakraTheme from '@chakra-ui/theme'

import { layoutDetails } from './layoutDetails'

function PlannerLayouts() {

  return (
    <Box w="50%" border="2px">
      <Tabs defaultIndex={1} align="start">
        <TabPanels>
          <TabPanel>
            <RadioGroup>
              <VStack direction="column">
                {layoutDetails['a4-a5'].map((layout) => {
                  return (
                    <Radio value={layout.name.replace(/ /g, '_')} textAlign="left">{layout.name}</Radio>
                  )
                })}
              </VStack>
            </RadioGroup>
          </TabPanel>
          <TabPanel>
            <RadioGroup>
              <VStack direction="column">
                {layoutDetails['personal'].map((layout) => {
                  return (
                    <Radio value="1">{layout.name}</Radio>
                  )
                })}
              </VStack>
            </RadioGroup>
          </TabPanel>
          <TabPanel>
            <RadioGroup>
              <VStack direction="column">
                {layoutDetails['pocket'].map((layout) => {
                  return (
                    <Radio value="1">{layout.name}</Radio>
                  )
                })}
              </VStack>
            </RadioGroup>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default PlannerLayouts;
