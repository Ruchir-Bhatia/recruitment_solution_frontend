import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-lexend: Lexend;
--font-roboto: Roboto;
--font-poppins: Poppins;
--font-inter: Inter;

/* font sizes */
--font-size-sm: 0.88rem;
--font-size-lg-4: 1.15rem;
--font-size-sm-8: 0.86rem;
--font-size-sm-6: 0.85rem;
--font-size-xs-3: 0.71rem;
--font-size-base-3: 0.96rem;
--font-size-xs-1: 0.69rem;
--font-size-smi-9: 0.81rem;
--font-size-mid-2: 1.08rem;

/* Colors */
--white-color: #fff;
--color-aqua: #00fff0;
--red: #ff5630;
--color-tomato-100: rgba(255, 86, 48, 0.4);
--blue: #377dff;
--natural-color-3: #b2b2b2;
--color-gray-100: #fafbfc;
--color-gray-200: #1c1c1c;
--color-dimgray: #525252;
--color-lavender: #f0edff;
--color-black: #000;
--color-silver: #c4c4c4;
--natural-color: #333;
--secondary1: #9ae0f7;
--secondary: #56ccf2;
--strock: #f0f0f0;
--natural-7: #efefef;
--secendary: #d7f5e7;
--green: #38cb89;
--s-y: #ffca66;
--y: #ffa600;
--natural-color1: #6f767e;

/* Gaps */
--gap-xs: 0.75rem;
--gap-3xs-2: 0.57rem;
--gap-3xs-7: 0.61rem;
--gap-6xs-2: 0.39rem;
--gap-7xs-7: 0.36rem;
--gap-10xs-9: 0.18rem;
--gap-11xs-9: 0.12rem;
--gap-8xs-7: 0.29rem;
--gap-3xs-5: 0.59rem;
--gap-2xs-7: 0.67rem;

/* Paddings */
--padding-xs: 0.75rem;
--padding-10xl: 1.81rem;
--padding-5xl: 1.5rem;
--padding-4xl-2: 1.45rem;
--padding-3xs-7: 0.61rem;
--padding-4xl-4: 1.46rem;
--padding-lgi-4: 1.21rem;
--padding-9xs-8: 0.24rem;
--padding-5xs-7: 0.48rem;
--padding-3xl-8: 1.43rem;
--padding-3xs-5: 0.59rem;
--padding-4xl: 1.44rem;
--padding-lgi-1: 1.19rem;

/* border radiuses */
--br-5xl: 24px;
--br-192xl-3: 211.3px;
--br-107xl-8: 126.8px;
--br-3xs: 10px;
--br-lg-4: 18.4px;
--br-xs-6: 11.6px;
--br-4xs-1: 8.1px;
--br-3xs-6: 9.6px;
--br-11xs-9: 1.9px;
--br-xs-4: 11.4px;
--br-5xs-9: 7.9px;
--br-mid-2: 17.2px;

}
`;
}
