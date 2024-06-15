import Box from '@mui/material/Box';
import Section, {CardInfo} from "./Section"
import ProductCarouselItem from "./ProductCarouselItem"


const newProducts : CardInfo[] = [
    {
        name:  "Black Shirt",
        category: "Fashion",
        image: "https://www.pixelbyhand.com/wp-content/uploads/2022/06/shirt-ecommerce-product-image-with-white-background.jpg",
        description : "some shirts",
        link : "http://localhost:3000"
    },
    {
        name:  "Black T-shirt",
        category: "Fashion",
        image: "https://www.pixelbyhand.com/wp-content/uploads/2022/06/shirt-ecommerce-product-image-with-white-background.jpg",
        description : "some shirts",
        link : "http://localhost:3000"
    },
    {
        name:  "White T-shirt",
        category: "Fashion",
        image: "https://www.pixelbyhand.com/wp-content/uploads/2022/06/shirt-ecommerce-product-image-with-white-background.jpg",
        description : "some shirts",
        link : "http://localhost:3000"
    }
]

export default function Content() {
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
