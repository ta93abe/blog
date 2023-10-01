import { style } from "@vanilla-extract/css";

export const container = style({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	marginInline: "auto",
	maxWidth: "800px",
	gap: "24px",
});
