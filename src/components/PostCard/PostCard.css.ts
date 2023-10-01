import { vars } from "@/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	gap: "4px",
});

export const title = style({
	fontSize: vars.font.size["2xl"],
});

export const date = style({
	opacity: 0.5,
	fontSize: vars.font.size.s,
});

export const categoryContainer = style({
	display: "flex",
	gap: "12px",
});

export const category = style({
	backgroundColor: vars.color.primary,
	color: vars.color.secondary,
	borderRadius: "9999px",
	paddingInline: "16px",
	paddingBlock: "4px",
	fontSize: vars.font.size.s,
});
