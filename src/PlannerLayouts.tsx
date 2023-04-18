import * as React from 'react'

import { Box, RadioGroup, Radio, Stack, Tab, Tabs, TabList, TabPanel, TabPanels} from '@chakra-ui/react'
// import chakraTheme from '@chakra-ui/theme'

import { layoutDetails } from './layoutDetails'

type PlannerLayoutProps = {
  paper: string;
  setPaperSize: React.Dispatch<string>;
  layout: string;
  setLayout: React.Dispatch<string>;
};

function PlannerLayouts({paper, setPaperSize, layout, setLayout}:PlannerLayoutProps) {

  const getIndex = (paperSize:string) => {
    if (paperSize === "a4-a5") {
      return 0;
    }
    else if (paperSize === "personal") {
      return 1;
    } else {
      // must be pocket
      return 2;
    }
  }

  const handleTabChange= (index: number) => {
    if (index === 0) {
      setPaperSize('a4-a5');
      console.log('set paper size to a4-a5');
    } else if (index === 1) {
      setPaperSize('personal');
      console.log('set paper size to personal');
    } else {
      setPaperSize('pocket');
      console.log('set paper size to pocket');
    }
  }

  return (
    <Box w="50%" border="2px">
      <Tabs defaultIndex={getIndex(paper)} onChange={handleTabChange} align="start">
        <TabList>
          <Tab>A4/A5</Tab>
          <Tab>Personal</Tab>
          <Tab>Pocket</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box display="flex" alignItems="left">
              <Box>
                <RadioGroup defaultValue="Day_per_page_original">
                {/* <RadioGroup onChange={setPaperSize} defaultValue="Day_per_page_original"> */}
                  <Stack>
                    {layoutDetails['a4-a5'].map((layout) => {
                      return (
                        <Radio key={layout.name.replace(/ /g, '_')} value={layout.name.replace(/ /g, '_')} textAlign="left">{layout.name}</Radio>
                      )
                    })}
                  </Stack>
                </RadioGroup>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel>
            <RadioGroup defaultValue="Day_per_page_original">
              <Stack>
                {layoutDetails['personal'].map((layout) => {
                  return (
                    <Radio key={layout.name.replace(/ /g, '_')} value={layout.name.replace(/ /g, '_')} textAlign="left">{layout.name}</Radio>
                    )
                })}
              </Stack>
            </RadioGroup>
          </TabPanel>
          <TabPanel>
            <RadioGroup defaultValue="Day_per_page">
              <Stack>
                {layoutDetails['pocket'].map((layout) => {
                  return (
                    <Radio key={layout.name.replace(/ /g, '_')} value={layout.name.replace(/ /g, '_')} textAlign="left">{layout.name}</Radio>
                    )
                })}
              </Stack>
            </RadioGroup>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default PlannerLayouts;
