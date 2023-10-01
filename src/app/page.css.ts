import { style } from "@vanilla-extract/css";

export const container = style({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	marginInline: "auto",
	maxWidth: "800px",
	padding: "16px",
	gap: "24px",
});
