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

  const getTabIndex = (paperSize:string) => {
    if (paperSize === "a4-a5") {
      console.log("a4-a5 is selected");
      return 0;
    }
    else if (paperSize === "personal") {
      console.log("personal is selected");
      return 1;
    } else {
      // must be pocket
      console.log("pocket is selected");
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

  const handleLayoutChange = (newLayout:string) => {
    console.log("layout changed to ", newLayout);
    setLayout(newLayout);
  }

  return (
    <Box w="50%" border="2px">
      <Tabs defaultIndex={getTabIndex(paper)} onChange={handleTabChange} align="start">
        <TabList>
          <Tab>A4/A5</Tab>
          <Tab>Personal</Tab>
          <Tab>Pocket</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box display="flex" alignItems="left">
              <Box>
                <RadioGroup defaultValue={layout} onChange={handleLayoutChange}>
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
          <RadioGroup defaultValue={layout} onChange={handleLayoutChange}>
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
          <RadioGroup defaultValue={layout} onChange={handleLayoutChange}>
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
