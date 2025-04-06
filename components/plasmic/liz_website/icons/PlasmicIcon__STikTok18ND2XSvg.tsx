/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type STikTok18ND2XSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function STikTok18ND2XSvgIcon(props: STikTok18ND2XSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"S_TikTok_18_N_D@2x"}
      viewBox={"0 0 36 36"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M27.719 0H8.281A8.281 8.281 0 000 8.281v19.438A8.281 8.281 0 008.281 36h19.438A8.281 8.281 0 0036 27.719V8.281A8.281 8.281 0 0027.719 0zm4.212 11.676v4a12.242 12.242 0 01-7.159-2.3v10.456a9.525 9.525 0 11-8.2-9.38v5.254a4.243 4.243 0 00-1.276-.2 4.326 4.326 0 104.318 4.489l.012-20.625h5.146a7.159 7.159 0 003.261 6 7.1 7.1 0 003.9 1.16z"
        }
      ></path>
    </svg>
  );
}

export default STikTok18ND2XSvgIcon;
/* prettier-ignore-end */
