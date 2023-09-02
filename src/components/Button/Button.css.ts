import { style } from "@vanilla-extract/css";

export const button = style({
	fontFamily: "Nunito Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
	fontWeight: 700,
	borderRadius: "3em",
	cursor: "pointer",
	display: "inline-block",
	lineHeight: 1,
	border: "none",
});

export const primaryButton = style({
	color: "white",
	backgroundColor: "#1ea7fd",
});

export const secondaryButton = style({
	color: "#333",
	backgroundColor: "transparent",
	boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
});

export const smallButton = style({
	fontSize: "12px",
	padding: "10px 16px",
});

export const mediumButton = style({
	fontSize: "14px",
	padding: "11px 20px",
});

export const largeButton = style({
	fontSize: "16px",
	padding: "12px 24px",
});
