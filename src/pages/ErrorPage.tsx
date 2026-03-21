import NavBar from "@/components/NavBar";
import { Box, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError() as Error;

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>
          <h1>Oops!</h1>
        </Heading>
        <text>{isRouteErrorResponse(error) ? "The page does not exist." : "An unexpected error occurred."}</text>
      </Box>
    </>
  );
};
