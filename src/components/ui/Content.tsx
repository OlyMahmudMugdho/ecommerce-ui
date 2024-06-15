import Box from '@mui/material/Box';
import Section, {CardInfo} from "./Section"
import ProductCarouselItem from "./ProductCarouselItem"


const newProducts : CardInfo[] = [
    {
        name: "Black Shirt",
        category: "Fashion",
        image: "https://via.placeholder.com/300",
        description: "Some shirts",
        link: "https://google.com"
    },
    {
        name: "White Shirt",
        category: "Fashion",
        image: "https://via.placeholder.com/300",
        description: "A stylish white shirt",
        link: "http://localhost:3000"
    },
    {
        name: "Red Shirt",
        category: "Fashion",
        image: "https://via.placeholder.com/300",
        description: "A bold red shirt",
        link: "http://localhost:3000"
    },
    {
        name: "Blue Shirt",
        category: "Fashion",
        image: "https://via.placeholder.com/300",
        description: "A cool blue shirt",
        link: "http://localhost:3000"
    },
    {
        name: "Green Shirt",
        category: "Fashion",
        image: "https://via.placeholder.com/300",
        description: "A vibrant green shirt",
        link: "http://localhost:3000"
    }
]


async function fetchData() {
    const response = await fetch("http://localhost:5000/shirts", {cache : "no-store"});
    const data = await response.json();
    return data;
}

export default async function Content() {

    console.log(await fetchData());
    const BnewProducts = await fetchData();

  return (
    <Box className='w-full px-7 py-5' component="section">
      <div className={"sm:hidden md:block "}>
          <Section header={"New Products"} cards={newProducts} />
      </div>
        <div className='flex md:hidden'>
            <ProductCarouselItem header={"New Products"} cards={newProducts} />
        </div>
    </Box>
  );
}
