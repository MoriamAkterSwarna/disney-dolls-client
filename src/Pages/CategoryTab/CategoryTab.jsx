import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Category1 from "./Category1/Category1";
import Category2 from "./Category2/Category2";
import Category3 from "./Category3/Category3";


const CategoryTab = () => {

  
  const [active, setActive] = useState(0);
  const [subCategoryOne, setSubCategoryOne] = useState([]);
  const [subCategoryTwo, setSubCategoryTwo] = useState([]);
  const [subCategoryThree, setSubCategoryThree] = useState([]);

  useEffect(() => {
    fetch(`https://disney-dolls-server-snowy.vercel.app/addToy`)
      .then((res) => res.json())
      .then((data) => {
        const subCategory1 = data.filter(item => item.category === "Frozen Dolls");
        const subCategory2 = data.filter((item) => item.category === "Disney Princess Dolls");
        const subCategory3 = data.filter((item) => item.category === "Villain Dolls");
        setSubCategoryOne(subCategory1);
        setSubCategoryTwo(subCategory2);
        setSubCategoryThree(subCategory3);
        
      });
  }, []);

  const handleSubCategory = (index) => {
    setActive(index);

  };

  return (
    <>
      <h3 className="text-blue-700 text-4xl text-center my-10 font-bold ">
        Shop By Category
      </h3>
      <div className="lg:mx-52 mb-10">


        <Tabs selectedIndex={active} onSelect={handleSubCategory}>
          <TabList className="my-3 lg:mx-20">
            
            <Tab className="btn mb-6 w-64 lg:w-[200px] btn-primary mr-2">Frozen Dolls</Tab>
            <Tab className="btn mb-6 w-64 btn-primary mr-2">Disney Princess Dolls</Tab>
            <Tab className="btn w-64 btn-primary">Villain Dolls</Tab>
          </TabList>

          <TabPanel>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
              subCategoryOne.map(subCate => <Category2 key={subCate._id} subCate={subCate}></Category2>)
            }
            </div>
          </TabPanel>
          

          <TabPanel>
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
            {
              subCategoryTwo.map(subCate => <Category1 key={subCate._id} subCate={subCate}></Category1>)
            }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
              subCategoryThree.map(subCate => <Category3 key={subCate._id} subCate={subCate}></Category3>)
            }
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default CategoryTab;
