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

  const [a4a5Layout, setA4a5Layout] = React.useState<string>(layout);
  const [personalLayout, setPersonalLayout] = React.useState<string>("Day_per_page_original");
  const [pocketLayout, setPocketLayout] = React.useState<string>("Day_per_page");

  const getTabIndex = (paperSize:string) => {
    if (paperSize === "a4-a5") {
      // console.log("a4-a5 is selected");
      return 0;
    }
    else if (paperSize === "personal") {
      // console.log("personal is selected");
      return 1;
    } else {
      // must be pocket
      // console.log("pocket is selected");
      return 2;
    }
  }

  const handleTabChange= (index: number) => {
    if (index === 0) {
      setPaperSize('a4-a5');
      setLayout(a4a5Layout);
      // console.log('set paper size to a4-a5');
    } else if (index === 1) {
      setPaperSize('personal');
      setLayout(personalLayout);
      // console.log('set paper size to personal');
    } else {
      setPaperSize('pocket');
      setLayout(pocketLayout);
      // console.log('set paper size to pocket');
    }
  }

  const handleLayoutChange = (newLayout:string) => {
    console.log("layout changed to ", newLayout);
    setLayout(newLayout);
    if (paper === "a4-a5") {
      setA4a5Layout(newLayout);
    } else if (paper === "personal") {
      setPersonalLayout(newLayout);
    } else {
      setPocketLayout(newLayout);
    }
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
                <RadioGroup defaultValue={a4a5Layout} onChange={handleLayoutChange}>
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
          <RadioGroup defaultValue={personalLayout} onChange={handleLayoutChange}>
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
          <RadioGroup defaultValue={pocketLayout} onChange={handleLayoutChange}>
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
