import * as React from 'react'

import { Box, RadioGroup, Radio, Tab, Tabs, TabList, TabPanel, TabPanels, VStack} from '@chakra-ui/react'
// import chakraTheme from '@chakra-ui/theme'
import PaperPreview from "./PaperPreview"

import { layoutDetails } from './layoutDetails'

function PlannerLayouts() {
  const [paperSize, ] = React.useState("a4-a5");

  const getIndex = (paperSize:string) => {
    if (paperSize === "a4a-5") {
      console.log("a4");
      return 0;
    }
    else if (paperSize === "personal") {
      console.log("personal");
      return 1;
    } else {
      // must be pocket
      console.log("pocket");
      return 2;
    }
  }

  return (
    <Box w="50%" border="2px">
      <Tabs defaultIndex={getIndex(paperSize)} align="start">
        <TabList>
          <Tab>A4/A5</Tab>
          <Tab>Personal</Tab>
          <Tab>Pocket</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box display="flex" alignItems="left">
              <Box>
                test
                <RadioGroup>
                  <VStack>
                    {layoutDetails['a4-a5'].map((layout) => {
                      return (
                        <Radio key={layout.name.replace(/ /g, '_')} value={layout.name.replace(/ /g, '_')} textAlign="left">{layout.name}</Radio>
                      )
                    })}
                  </VStack>
                </RadioGroup>
              </Box>
            </Box>
            <PaperPreview/>
          </TabPanel>
          <TabPanel>
            <RadioGroup>
              <VStack direction="column">
                {layoutDetails['personal'].map((layout) => {
                  return (
                    <Radio key={layout.name.replace(/ /g, '_')} value={layout.name.replace(/ /g, '_')} textAlign="left">{layout.name}</Radio>
                    )
                })}
              </VStack>
            </RadioGroup>
            <PaperPreview/>
          </TabPanel>
          <TabPanel>
            <RadioGroup>
              <VStack direction="column">
                {layoutDetails['pocket'].map((layout) => {
                  return (
                    <Radio key={layout.name.replace(/ /g, '_')} value={layout.name.replace(/ /g, '_')} textAlign="left">{layout.name}</Radio>
                    )
                })}
              </VStack>
            </RadioGroup>
            <PaperPreview/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default PlannerLayouts;
