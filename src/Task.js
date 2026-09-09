import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';




export default function Task() {

    const [checked, setChecked] = React.useState(true);

      const handleChange = (event) => {
          console.log("Switch changed to:", event.target.checked);
    setChecked(event.target.checked);
  };
  const id = React.useId();
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel2-content`}
          id={`${id}-panel2-header`}
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Switch
            checked={checked}
            onChange={handleChange}
            slotProps={{ input: { 'aria-label': 'controlled' } }}
            />
        </AccordionDetails>
      </Accordion>
        <div style={{background:"orange", height:checked ? "300px" : "100px"}}>
            <h5>Hello World</h5>
        </div>
    </div>
  );
}
