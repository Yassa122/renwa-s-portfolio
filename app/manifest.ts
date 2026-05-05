import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Renwa Abouelella — Software Engineer",
    short_name: "Renwa",
    description:
      "Backend development, cloud-native systems, and scalable engineering.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdf9f6",
    theme_color: "#9b4d5c",
    icons: [
      {
        src: "/icon",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "/icon",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        type: "image/png",
        sizes: "180x180",
        purpose: "any",
      },
    ],
  };
}
