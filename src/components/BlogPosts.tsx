import { useNavigate, useParams } from "react-router-dom";
import { posts } from "../blog/posts";
import { ArrowLeft } from "lucide-react";

const COLORS = ["blue", "emerald", "rose", "amber", "violet", "orange"] as const;

function getAccentColor(slug: string, metaColor?: string) {
  if (metaColor) return metaColor;
  const sum = slug.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return COLORS[sum % COLORS.length];
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-white/40 font-mono text-sm tracking-widest uppercase">
          // 404 — post not found
        </p>
        <button onClick={() => navigate("/blog")} className="blog-back-btn">
          <ArrowLeft size={14} /> Back to Blog
        </button>
      </div>
    );
  }

  const { Component, meta } = post;
  const accentColor = getAccentColor(slug ?? "", meta.color);

  return (
    <div className="blog-post-root ">

      <div className="blog-post-nav rounded-lg sticky">
        <button onClick={() => navigate("/blog")} className="blog-back-btn">
          <ArrowLeft size={14} />
          Back to Blog
        </button>

        <span className="blog-post-breadcrumb">
          Blog
          <span className="opacity-25 mx-2">/</span>
          <span className="text-white/55 truncate max-w-[200px] sm:max-w-xs">{meta.title}</span>
        </span>
      </div>

      <div className="mx-auto max-w-[720px] px-4 sm:px-6 lg:px-0">
        <div className="blog-content" data-color={accentColor}>
          <Component />
        </div>
      </div>

    </div>
  );
}