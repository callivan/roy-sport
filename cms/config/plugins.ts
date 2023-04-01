module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      breakpoints: {
        thumbnail: 250,
        preview: 50,
      },
    },
  },
});
