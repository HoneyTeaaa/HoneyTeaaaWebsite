/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ImageSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ImageSvgIcon(props: ImageSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect width={"10"} height={"10"} rx={"3"} fill={"#050505"}></rect>

      <rect
        x={"1.5"}
        y={"5"}
        width={"3"}
        height={"3"}
        rx={".25"}
        fill={"#fff"}
      ></rect>

      <rect
        x={"5.5"}
        y={"5"}
        width={"3"}
        height={"3"}
        rx={"1.5"}
        fill={"#fff"}
      ></rect>

      <path
        d={
          "M4.654 1.6c.113-.197.17-.295.244-.328a.25.25 0 01.204 0c.074.033.13.131.244.328l1.04 1.8c.113.197.17.295.162.376a.25.25 0 01-.102.176C6.38 4 6.266 4 6.039 4H3.961c-.228 0-.341 0-.407-.048a.25.25 0 01-.102-.176c-.008-.08.049-.18.162-.376l1.04-1.8z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default ImageSvgIcon;
/* prettier-ignore-end */
