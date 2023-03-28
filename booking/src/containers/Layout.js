import AppartmentTable from "../components/AppartmetsTable";
import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import DateRange from "../components/DateRange";

function Layout () {
  return (
    <Container fixed sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4, flexDirection: 'column'}}>
      <h1 style={{ textAlign: 'center'}}>Booking</h1>
      <Grid2 container spacing={8}>
        <DateRange />
      </Grid2>
      <Grid2 container spacing={12}>
        <Grid2>
          <AppartmentTable />
        </Grid2>
      </Grid2>
    </Container>
  )
};


export default Layout;