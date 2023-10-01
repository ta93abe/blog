import { vars } from "@/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	color: vars.color.primary,
	maxWidth: "800px",
	gap: "24px",
});

export const date = style({
  opacity: 0.5,
});
