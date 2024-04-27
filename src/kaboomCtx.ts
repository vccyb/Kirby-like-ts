import kaboom from "kaboom";
import { scale } from "./constants";

export const k = kaboom({
  width: 256 * scale,
  height: 144 * scale,
  scale,
  letterbox: true, // 缩放，保持宽高比
  global: false, // 只能使用此常量中的kaboom相关函数
});
