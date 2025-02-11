import { Box, Card, Stack, Divider, Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return (
    <Box sx={{ padding: "32px" }}>
      <Card
        sx={{
          maxWidth: 600,
          margin: "auto",
          padding: 2,
          borderRadius: 3,
          boxShadow: 3,
          bgcolor: "var(--white-color)",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ position: "relative", display: "flex", justifyContent: "center", mb: 2 }}
        >
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{
              position: "absolute",
              top: 0,
              right: "16px",
            }}
          />
          <Skeleton variant="text" width="60%" height={28} sx={{ textAlign: "center", mt: 0.5 }} />
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={2}>
          <Skeleton variant="rectangular" height={56} sx={{ borderRadius: 1 }} />
          <Skeleton variant="rectangular" height={100} sx={{ borderRadius: 1 }} />
          <Skeleton variant="rectangular" height={56} sx={{ borderRadius: 1 }} />
          <Skeleton variant="rectangular" height={56} sx={{ borderRadius: 1 }} />
          <Skeleton variant="rectangular" height={56} sx={{ borderRadius: 1 }} />
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack direction="row" spacing={2} justifyContent="space-around" sx={{ mt: 2 }}>
          <Skeleton variant="rectangular" width={100} height={40} sx={{ borderRadius: 2 }} />
          <Skeleton variant="rectangular" width={100} height={40} sx={{ borderRadius: 2 }} />
        </Stack>
      </Card>
    </Box>
  );
};

export default CardSkeleton;
