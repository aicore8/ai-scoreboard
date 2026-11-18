import { AdminPanel } from "@aicore8/lib/server";
import { readSettings } from "common/board";
import { schema } from "../schema";

export const panel = new AdminPanel(schema);
export const settings = panel.view("settings", readSettings);
