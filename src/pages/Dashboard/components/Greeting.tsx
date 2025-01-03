import { Text } from "@chakra-ui/react";

export function Greeting() {
  return (
    <div>
      <Text textStyle={{ base: "2xl", lg: "3xl" }}>
        Welcome,
        <br />
        Dan Perkins
      </Text>
    </div>
  );
}
