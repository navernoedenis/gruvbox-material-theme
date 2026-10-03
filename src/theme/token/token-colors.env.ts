import { type ThemeOptions, type TokenColor } from "../theme.types";

export const createEnvColor = (options: ThemeOptions): TokenColor[] => {
  const { colors, tokens } = options;

  return [
    {
      name: "ENV Keys",
      scope: "variable.key.dotenv",
      settings: {
        foreground: colors.palette[tokens.envColor],
      },
    },
    {
      name: "ENV Green",
      scope: [
        "property.value.dotenv",
        "string.quoted.double.dotenv",
        "string.quoted.single.dotenv",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "ENV White",
      scope: "keyword.operator.assignment.dotenv",
      settings: {
        foreground: colors.palette.fg,
      },
    },
  ];
};
