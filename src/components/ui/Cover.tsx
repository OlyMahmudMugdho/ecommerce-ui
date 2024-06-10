import { Box } from "@mui/material"
import Image from "next/image"
import banner from "../../../public/banner.jpg"
import { BrandingWatermarkOutlined } from "@mui/icons-material"

type Props = {}

function Cover({ }: Props) {
    return (
        <Box sx={{ p: 3, width: { sm: "200px", lg: "1200px" } }} alignContent={""} display={"flex"} justifyContent="center">
            <Image alt="banner" src={banner} />
        </Box>
    )
}

export default Cover