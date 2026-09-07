import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
/* import Chip from "@mimport Checkbox from '@mui/material/Checkbox";
 */import Slider from "@mui/material/Slider";


export default function Material() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        {/* <Checkbox {...label} defaultChecked color="secondary" /> */}

       {/*  <Chip label="primary" color="primary" variant="outlined" />
        <Chip label="success" color="success" variant="outlined" /> */}
        <Slider aria-label="Temperature" defaultValue={30} color="secondary" />
      </Stack>
    </>
  );
}
