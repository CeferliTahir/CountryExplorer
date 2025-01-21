import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const CustomSkeleton = () => {
  return (
    <>
      <Box>
        <div className="flex flex-col w-[264px] m-auto">
          <Skeleton
            variant="rectangular"
            width="100%"
            height={160}
            sx={{ borderRadius: "5px" }}
          />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </Box>
        </div>
      </Box>
    </>
  );
};

export default CustomSkeleton;
