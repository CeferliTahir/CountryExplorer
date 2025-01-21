import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const DetailsSkeleton = () => {
  const array = Array.from({ length: 11 }, (_, index) => index);

  return (
    <>
      <div className="sm:max-w-[1280px] w-[90%] m-auto">
        <div className="flex flex-col sm:flex-row items-center gap-11 sm:gap-0 pt-32 sm:pt-[200px] justify-between">
          <div>
            <Box>
              <div className="sm:w-[660px] w-[320px] h-[229px] sm:h-[400px]">
                <Skeleton
                  sx={{
                    bgcolor: "grey.900",
                    borderRadius: "10px",
                  }}
                  variant="rectangular"
                  width="100%"
                  height="100%"
                />
              </div>
            </Box>
          </div>
          <div>
            <Box>
              <div className="sm:w-[600px] w-[320px]">
                {array.map(({ _, index }) => {
                  return <Skeleton key={index} />;
                })}
              </div>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsSkeleton;
