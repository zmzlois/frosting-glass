import { Background } from "@/components/background";
import { Glass } from "@/components/glass";
import { Audio } from "@/components/audio";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: "Glass in the forest",
    description: "Recreating Shuding's glass effect",
    authors: {
      name: "Lois Zhao",
      url: "https://x.com/zmzlois",
    },
    openGraph: {
      title: "Glass in the forest",
      description: "Recreating Shuding's glass effect",
      url: `https://loiszhao.com/glass`,
      images: ["/frosting-glass-cover.jpg"],
    },
    twitter: {
      title: "Glass in the forest",
      description: "Recreating Shuding's glass effect",
      card: "summary_large_image",
      images: ["/frosting-glass-cover.jpg"],
    },
    metadataBase: new URL("https://loiszhao.com"),
  };
}

export default function GlassPage() {
  return (
    <div className="w-screen h-[14000px] block">
      <Background />
      <Glass />
      <Audio />
    </div>
  );
}
