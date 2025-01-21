import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const CustomSkeleton = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, my: 5 }}>
        <div className="flex flex-col w-[264px]">
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
