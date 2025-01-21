import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const DetailsSkeleton = () => {
  const array = Array.from({ length: 11 }, (_, index) => index);

  return (
    <>
      <div className="max-w-[1280px] w-[90%] m-auto">
        <div className="flex items-center pt-[200px] justify-between">
          <div>
            <Box>
              <Skeleton
                sx={{
                  bgcolor: "grey.900",
                  borderRadius: "10px",
                }}
                variant="rectangular"
                width="660px"
                height="400px"
              />
            </Box>
          </div>
          <div>
            <Box sx={{ width: 600 }}>
              {array.map(({ _, index }) => {
                return <Skeleton key={index} />;
              })}
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsSkeleton;
