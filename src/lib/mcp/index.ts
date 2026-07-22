import { defineMcp } from "@lovable.dev/mcp-js";
import listPropertiesTool from "./tools/list_properties";

export default defineMcp({
  name: "yanisgauthier-mcp",
  title: "Yanis Gauthier-Sigeris — Real Estate MCP",
  version: "0.1.0",
  instructions:
    "Public tools for Yanis Gauthier-Sigeris, real estate broker in Gatineau / Outaouais (RE/MAX). Use `list_properties` to fetch current and past listings (address, city, price in FR and EN, type, bedrooms, bathrooms, area, status, RE/MAX URL).",
  tools: [listPropertiesTool],
});
