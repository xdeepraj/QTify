import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

const MuiAccordian = ({ accordianData }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          color: "tertiary.main",
          fontSize: "2.5rem",
          textAlign: "center",
          mb: 2,
        }}
      >
        FAQs
      </Typography>

      {accordianData.data.map((accordian, idx) => {
        const panelId = `panel-${idx}`;
        return (
          <Accordion
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
            sx={{
              backgroundColor: "tertiary.main",
              borderRadius: "10px",
              width: "800px",
              mb: 2,
            }}
            key={accordian.question}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "tertiary.main" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                backgroundColor: "secondary.main",
                color: "tertiary.main",
                border: "1px solid white",
                borderRadius: "10px",
              }}
            >
              <Typography component="span">{accordian.question}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "tertiary.main",
                color: "secondary.main",
                borderRadius: "10px",
              }}
            >
              <Typography>{accordian.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default MuiAccordian;
