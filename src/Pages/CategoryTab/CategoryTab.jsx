import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const CategoryTab = () => {
    return (
        <>
        <h3 className='text-blue-700 text-4xl text-center my-10 font-bold '>Shop By Category</h3>
        <div className='mx-52 mb-10'>
            <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
      <Tab>Title 3</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

        </div>
        </>
    );
};

export default CategoryTab;