// Curated QR style templates that patch design options in one click.
export interface QRTemplate {
  id: string;
  name: string;
  description: string;
  preview: { fg: string; bg: string; accent?: string };
  patch: {
    foregroundColor: string;
    backgroundColor: string;
    dotStyle: "square" | "rounded" | "dots" | "classy" | "classy-rounded" | "extra-rounded";
    cornerSquareStyle: "square" | "dot" | "extra-rounded";
    cornerDotStyle: "square" | "dot";
    eyeColor: string;
    useEyeColor: boolean;
    gradientType: "none" | "linear" | "radial";
    gradientColor: string;
    gradientRotation: number;
  };
}

export const qrTemplates: QRTemplate[] = [
  {
    id: "classic",
    name: "Classic",
    description: "Timeless square modules",
    preview: { fg: "#000000", bg: "#FFFFFF" },
    patch: {
      foregroundColor: "#000000", backgroundColor: "#FFFFFF",
      dotStyle: "square", cornerSquareStyle: "square", cornerDotStyle: "square",
      eyeColor: "#000000", useEyeColor: false,
      gradientType: "none", gradientColor: "#000000", gradientRotation: 0,
    },
  },
  {
    id: "rounded",
    name: "Soft Rounded",
    description: "Smooth rounded dots & eyes",
    preview: { fg: "#111827", bg: "#FFFFFF" },
    patch: {
      foregroundColor: "#111827", backgroundColor: "#FFFFFF",
      dotStyle: "extra-rounded", cornerSquareStyle: "extra-rounded", cornerDotStyle: "dot",
      eyeColor: "#111827", useEyeColor: false,
      gradientType: "none", gradientColor: "#111827", gradientRotation: 0,
    },
  },
  {
    id: "dots",
    name: "Bubble Dots",
    description: "Pure circular pixels",
    preview: { fg: "#0f172a", bg: "#FFFFFF" },
    patch: {
      foregroundColor: "#0f172a", backgroundColor: "#FFFFFF",
      dotStyle: "dots", cornerSquareStyle: "dot", cornerDotStyle: "dot",
      eyeColor: "#0f172a", useEyeColor: false,
      gradientType: "none", gradientColor: "#0f172a", gradientRotation: 0,
    },
  },
  {
    id: "neon",
    name: "Neon Indigo",
    description: "Gradient indigo glow",
    preview: { fg: "#4f46e5", bg: "#0a0a1a", accent: "#a78bfa" },
    patch: {
      foregroundColor: "#4f46e5", backgroundColor: "#0a0a1a",
      dotStyle: "extra-rounded", cornerSquareStyle: "extra-rounded", cornerDotStyle: "dot",
      eyeColor: "#a78bfa", useEyeColor: true,
      gradientType: "linear", gradientColor: "#a78bfa", gradientRotation: 45,
    },
  },
  {
    id: "sunset",
    name: "Sunset",
    description: "Warm orange to pink",
    preview: { fg: "#f97316", bg: "#FFFFFF", accent: "#ec4899" },
    patch: {
      foregroundColor: "#f97316", backgroundColor: "#FFFFFF",
      dotStyle: "classy-rounded", cornerSquareStyle: "extra-rounded", cornerDotStyle: "dot",
      eyeColor: "#ec4899", useEyeColor: true,
      gradientType: "linear", gradientColor: "#ec4899", gradientRotation: 90,
    },
  },
  {
    id: "ocean",
    name: "Ocean",
    description: "Cool teal radial",
    preview: { fg: "#0ea5e9", bg: "#f0f9ff", accent: "#06b6d4" },
    patch: {
      foregroundColor: "#0ea5e9", backgroundColor: "#f0f9ff",
      dotStyle: "rounded", cornerSquareStyle: "extra-rounded", cornerDotStyle: "dot",
      eyeColor: "#0c4a6e", useEyeColor: true,
      gradientType: "radial", gradientColor: "#06b6d4", gradientRotation: 0,
    },
  },
  {
    id: "forest",
    name: "Forest",
    description: "Deep emerald greens",
    preview: { fg: "#065f46", bg: "#FFFFFF", accent: "#10b981" },
    patch: {
      foregroundColor: "#065f46", backgroundColor: "#FFFFFF",
      dotStyle: "extra-rounded", cornerSquareStyle: "extra-rounded", cornerDotStyle: "dot",
      eyeColor: "#10b981", useEyeColor: true,
      gradientType: "linear", gradientColor: "#10b981", gradientRotation: 135,
    },
  },
  {
    id: "gold",
    name: "Bitcoin Gold",
    description: "Premium black & gold",
    preview: { fg: "#c9a84c", bg: "#0d0d0d", accent: "#f0d78c" },
    patch: {
      foregroundColor: "#c9a84c", backgroundColor: "#0d0d0d",
      dotStyle: "classy", cornerSquareStyle: "extra-rounded", cornerDotStyle: "dot",
      eyeColor: "#f0d78c", useEyeColor: true,
      gradientType: "linear", gradientColor: "#f0d78c", gradientRotation: 45,
    },
  },
  {
    id: "rose",
    name: "Rose",
    description: "Soft pink rounded",
    preview: { fg: "#be185d", bg: "#fdf2f8" },
    patch: {
      foregroundColor: "#be185d", backgroundColor: "#fdf2f8",
      dotStyle: "extra-rounded", cornerSquareStyle: "extra-rounded", cornerDotStyle: "dot",
      eyeColor: "#9d174d", useEyeColor: true,
      gradientType: "linear", gradientColor: "#ec4899", gradientRotation: 0,
    },
  },
  {
    id: "mono",
    name: "Mono Minimal",
    description: "Tiny dotted minimal",
    preview: { fg: "#1f2937", bg: "#FFFFFF" },
    patch: {
      foregroundColor: "#1f2937", backgroundColor: "#FFFFFF",
      dotStyle: "dots", cornerSquareStyle: "extra-rounded", cornerDotStyle: "dot",
      eyeColor: "#1f2937", useEyeColor: false,
      gradientType: "none", gradientColor: "#1f2937", gradientRotation: 0,
    },
  },
];
