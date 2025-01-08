import { sequence } from "astro:middleware";
import linkTransform from "../middleware/link-transform";

export const onRequest = sequence(linkTransform);
