import React from "react";
import { Typography, Avatar, Stack, Box, CardContent, Card, IconButton } from "@mui/material";
import { Environment } from "../environment";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const benefitColors = {
  "1%": "darkcyan",
  "5%": "darkblue",
  "7%": "rebeccapurple",
  "10%": "crimson",
};

const sortKeys = unordered => (
  Object.keys(unordered).sort().reduce((obj, key) => {
    obj[key] = unordered[key];
    return obj;
  }, {})
);

const classifyBenefit = benefitStr => {
  const matches = benefitStr.match(/([^,]+:\s*[\d]+%)/g);
  const result = {};
  if ( matches ) {
    matches.forEach(match => {
      const [key, value] = match.split(":").map(s => s.trim());
      result[value] = result[value] ? result[value] + ", " + key : key;
    });
  };
  return sortKeys(result);
};

const RenderMall = ({ mall }) => (
  <Stack direction="column" justifyContent="center" alignItems="center">
    <img
      src={Environment.iconDict[mall]}
      height="36"
      width="36"
      style={{ marginBottom: 5, borderRadius: 5 }}
      alt={mall}
    />
    <Typography variant="subtitle2">{mall.replace(" ", "")}</Typography>
  </Stack>
);

const RenderBenefit = ({ benefit }) => {
  const classified = classifyBenefit(benefit);
  const discounts = Object.keys(classified);
  if (discounts.length === 0) {
    return <Typography>{"혜택이 없습니다!"}</Typography>
  };
  return (
    <Stack spacing={2}>
      {discounts.map(key =>
        <Stack direction="row" alignItems="center" spacing={1} key={"b" + key}>
          <Avatar sx={{ bgcolor: benefitColors[key], height: 32, width: 32,
            fontSize: 16, fontWeight: 500 }}>{key}</Avatar>
          <Typography>
            {classified[key]}
          </Typography>
        </Stack>
        )}
    </Stack>
  );
};

const ContentCard = ({ element }) => {
  return (
    <Card variant="outlined" sx={{ margin: 1 }}>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "stretch" }}>
        <CardContent sx={{ width: 100, bgcolor: "#eeeeee" }}>
          <RenderMall mall={element["mall"]} />
        </CardContent>
        <CardContent sx={{ flex: 3 }}>
          <RenderBenefit benefit={element["benefit"]} />
        </CardContent>
        <IconButton
          aria-label="바로가기"
          sx={{ width: 30 }}
          onClick={() => window.open(element["link"], '_blank')}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

const DataTable = ({ elements }) => {
  return (
    <div>
    {elements.map(element => <ContentCard element={element} key={element["id"]} />)}
    </div>
  );
};

export default DataTable;
