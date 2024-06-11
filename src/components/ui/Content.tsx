import Box from '@mui/material/Box';
import Section, {CardInfo} from "./Section"

const newProducts : CardInfo[] = [
    {
        name:  "Black Shirt",
        category: "Fashion",
        image: "https://google.com",
        description : "some shirts",
        link : "http://localhost:3000"
    }
]

export default function Content() {
  return (
    <Box className='w-full px-5' component="section">
      <Section header={"New Products"} cards={newProducts} />
    </Box>
  );
}
