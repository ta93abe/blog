import { globalStyle } from "@vanilla-extract/css";

import { vars } from "./vars.css";

globalStyle("*", {
	boxSizing: "border-box",
});

globalStyle("body", {
	fontFamily: `"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif`,
	textRendering: "optimizeSpeed",
	lineHeight: "1.8",
	minHeight: "100dvh",
	color: vars.color.text,
	backgroundColor: vars.color.secondary,
});

globalStyle("a", {
	textDecoration: "none",
	color: vars.color.primary,
});

globalStyle("img", {
	objectFit: "cover",
});
