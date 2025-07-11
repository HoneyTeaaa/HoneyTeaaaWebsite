/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pqbSBZb9VG36A9gA4GgWPg
// Component: 8H4yomi_xrWZ

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Navbar from "../../Navbar"; // plasmic-import: tGuDlEY_p2-T/component
import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import Pinboard from "../../Pinboard"; // plasmic-import: VEW3qGmI_rAq/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: pqbSBZb9VG36A9gA4GgWPg/projectcss
import sty from "./PlasmicPortfolio.module.css"; // plasmic-import: 8H4yomi_xrWZ/css

createPlasmicElementProxy;

export type PlasmicPortfolio__VariantMembers = {};
export type PlasmicPortfolio__VariantsArgs = {};
type VariantPropType = keyof PlasmicPortfolio__VariantsArgs;
export const PlasmicPortfolio__VariantProps = new Array<VariantPropType>();

export type PlasmicPortfolio__ArgsType = {};
type ArgPropType = keyof PlasmicPortfolio__ArgsType;
export const PlasmicPortfolio__ArgProps = new Array<ArgPropType>();

export type PlasmicPortfolio__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  reveal?: Flex__<typeof Reveal>;
  columns?: Flex__<"div">;
  column?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  pinboard?: Flex__<typeof Pinboard>;
};

export interface DefaultPortfolioProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPortfolio__RenderFunc(props: {
  variants: PlasmicPortfolio__VariantsArgs;
  args: PlasmicPortfolio__ArgsType;
  overrides: PlasmicPortfolio__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <Reveal
            data-plasmic-name={"reveal"}
            data-plasmic-override={overrides.reveal}
            cascade={false}
            className={classNames("__wab_instance", sty.reveal)}
            triggerOnce={true}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div
                data-plasmic-name={"column"}
                data-plasmic-override={overrides.column}
                className={classNames(projectcss.all, sty.column)}
              >
                <Stack__
                  as={"div"}
                  data-plasmic-name={"freeBox"}
                  data-plasmic-override={overrides.freeBox}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mUxKf
                    )}
                  >
                    {"Portfolio"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tOj5C
                    )}
                  >
                    {
                      "This is my portfolio! My newest work is at the top of the page, the projects get older the farther down you go. All of my finished work can be found here, any unfinished projects I have are archived on my discord as well. "
                    }
                  </div>
                </Stack__>
              </div>
            </Stack__>
            <Pinboard
              data-plasmic-name={"pinboard"}
              data-plasmic-override={overrides.pinboard}
              className={classNames("__wab_instance", sty.pinboard)}
            />
          </Reveal>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "reveal",
    "columns",
    "column",
    "freeBox",
    "pinboard"
  ],
  navbar: ["navbar"],
  reveal: ["reveal", "columns", "column", "freeBox", "pinboard"],
  columns: ["columns", "column", "freeBox"],
  column: ["column", "freeBox"],
  freeBox: ["freeBox"],
  pinboard: ["pinboard"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  reveal: typeof Reveal;
  columns: "div";
  column: "div";
  freeBox: "div";
  pinboard: typeof Pinboard;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPortfolio__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPortfolio__VariantsArgs;
    args?: PlasmicPortfolio__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPortfolio__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPortfolio__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPortfolio__ArgProps,
          internalVariantPropNames: PlasmicPortfolio__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPortfolio__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPortfolio";
  } else {
    func.displayName = `PlasmicPortfolio.${nodeName}`;
  }
  return func;
}

export const PlasmicPortfolio = Object.assign(
  // Top-level PlasmicPortfolio renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    reveal: makeNodeComponent("reveal"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    freeBox: makeNodeComponent("freeBox"),
    pinboard: makeNodeComponent("pinboard"),

    // Metadata about props expected for PlasmicPortfolio
    internalVariantProps: PlasmicPortfolio__VariantProps,
    internalArgProps: PlasmicPortfolio__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPortfolio;
/* prettier-ignore-end */
