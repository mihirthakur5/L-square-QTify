import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography } from "@mui/material";

function tabProps(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const GenreTabs = ({
  filters,
  selectedFilterIndex,
  setSelectedFilterIndex,
}) => {
  const handleTabChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  function allyProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <Tabs
        value={selectedFilterIndex}
        onChange={handleTabChange}
        aria-label="genres tabs"
      >
        {filters.map((ele, idx) => (
          <Tab label={ele.label} {...allyProps(idx)} key={idx} />
        ))}
      </Tabs>
    </>
  );
};

export default GenreTabs;

// import React from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

// const GenreTabs = ({ filters, selectedGenre, setSelectedGenre }) => {
//   const handleTabChange = (event, newValue) => {
//     setSelectedGenre(newValue);
//   };

//   return (
//     <Tabs
//       value={selectedGenre}
//       onChange={handleTabChange}
//       aria-label="genres tabs"
//     >
//       {filters.map((filter) => (
//         <Tab key={filter.key} label={filter.label} value={filter.key} />
//       ))}
//     </Tabs>
//   );
// };

// export default GenreTabs;
