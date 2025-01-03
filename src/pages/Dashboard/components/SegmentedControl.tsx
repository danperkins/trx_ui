import { Box, Text } from "@chakra-ui/react";

type SegmentedControlProps<T extends string> = {
  items: T[];
  selectedValue: T;
  onValueSelected: (value: T) => void;
};

/**
 * Ideally we would use the ChakraUI segmented control but it seems fairly
 * complicated to do style overrides so this will fairly basic alternative
 */
export function SegmentedControl<T extends string>(
  props: SegmentedControlProps<T>,
) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      backgroundColor="{colors.sand.200}"
      borderRadius="50px"
      border={{
        base: "2px solid {colors.sand.200}",
        xl: "3px solid {colors.sand.200}",
      }}
    >
      {props.items.map((i) => {
        const isActive = i === props.selectedValue;
        return (
          <Text
            key={i}
            onClick={() => props.onValueSelected(i)}
            cursor="pointer"
            userSelect={"none"}
            padding={{ base: "4px 10px 4px 10px", xl: "4px 8px 4px 8px" }}
            borderRadius="16px"
            textStyle={{ base: "sm", xl: "md" }}
            color={isActive ? undefined : "{colors.charcoal.400}"}
            backgroundColor={isActive ? "white" : undefined}
          >
            {i}
          </Text>
        );
      })}
    </Box>
  );
}
