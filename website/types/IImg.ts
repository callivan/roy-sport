export interface IImg {
  data: {
    id: string;
    attributes: {
      formats: {
        thumbnail: { url: string };
        preview: { url: string };
      };

      url: string;
    };
  };
}
