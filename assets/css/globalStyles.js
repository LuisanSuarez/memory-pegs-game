export const BREAKPOINTS = {
  XS: "576px",
  SM: "768px",
  XL: "1200px"
};

export const SPACING = {
  header: "50px",
  XXS: "2px",
  XS: "4px",
  SM: "10px",
  MD: "20px",
  LG: "30px",
  XL: "40px",
  XXL: "60px",
  XXXL: "100px"
};

export const SIZE = {
  cardWidth: "225px",
  cardHeight: "225px"
};

//mood is fun, relaxed, soothing
export const COLOR = {
  mainColor: "#00a2e8",
  mainColorLightest: "#4fcaff",
  mainColorLighter: "#36c2ff",
  mainColorLight: "#1cbbff",
  mainColorDark: "#007eb5",
  mainColorDarker: "#006d9c",
  mainColorDarkest: "#005b82",

  support1Color: "#ffc40f",
  support1ColorLightest: "#ffdd75",
  support1ColorLighter: "#ffd75c",
  support1ColorLight: "#ffd142",
  support1ColorDark: "#dba500",
  support1ColorDarker: "#c29200",
  support1ColorDarkest: "a87f00",

  support2Color: "#fff540",
  support2ColorLightest: "#fffaa6",
  support2ColorLighter: "#fff98d",
  support2ColorLight: "#fff873",
  support2ColorDark: "#fff20d",
  support2ColorDarker: "#f3e600",
  support2ColorDarkest: "#d9ce00"

  //   baseColor: "rgba(0, 162, 232)",
  //   //h,s,l(132,240,109)
  //   supportOrange: "rgba(255, 196, 15)",
  //   //h,s,l(30, 240, 127)
  //   supportYellow: "rgba(255,245,64)",
  //   //h,s,l(38,240,150)
  //   mainColorLightest: "#ecfaec",
  //   mainColorLighter: "#d7f6d7",
  //   mainColorLight: "#c3f1c2",
  //   mainColorDark: "#249222",
  //   mainColorDarker: "#1a6819",
  //   mainColorDarkest: "#0f3f0f"
};

export const FONT_SIZE = {
  xxH1: `font-size: 36px;
       @media (max-width: ${BREAKPOINTS.SM}) {
         font-size: 28px;
       }
    `,
  xxH2: `font-size: 24px;
     @media (max-width: ${BREAKPOINTS.SM}) {
       font-size: 20px;
     }`,
  xxH3: `{
        fontSize: 36px;
        @media (max-width: ${BREAKPOINTS.SM}) {
        fontSize: 28px;
      }`,
  H3: "36px",
  NORMAL: `font-size: 16px;`
};
