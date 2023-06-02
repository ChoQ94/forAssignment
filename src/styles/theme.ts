const deviceSizes = {
  mobile: 375,
  laptop: 1600,
};

const theme = {
  mobile: `screen and (max-width: ${deviceSizes.mobile}px)`,
  laptop: `screen and (max-width: ${deviceSizes.laptop}px)`,
};

// const theme = {
//   device,
// };

export default theme;
