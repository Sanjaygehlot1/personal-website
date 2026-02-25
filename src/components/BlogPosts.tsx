import { useNavigate, useParams } from "react-router-dom";
import { posts } from "../blog/posts";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { mdxComponents } from "./MDXComponents";

const COLORS = ["blue", "emerald", "rose", "amber", "violet", "orange", "black", "red"] as const;

const COLOR_RGB: Record<string, string> = {
  blue:    "59,130,246",
  emerald: "16,185,129",
  rose:    "244,63,94",
  amber:   "245,158,11",
  violet:  "139,92,246",
  orange:  "249,115,22",
};

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
  const rgb = COLOR_RGB[accentColor] ?? COLOR_RGB.blue;
  const tags: string[] = meta.tags ?? (meta.category ? [meta.category] : []);

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
          <span className="text-white/55 truncate max-w-[200px] sm:max-w-xs">
            {meta.title}
          </span>
        </span>
      </div>

      <div className="mx-auto max-w-[720px]">

        <div className="pt-8 pb-6 mb-2">

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.58rem] font-mono tracking-widest uppercase px-2 py-0.5 rounded"
                  style={{
                    color: `rgba(${rgb}, 0.9)`,
                    background: `rgba(${rgb}, 0.08)`,
                    border: `1px solid rgba(${rgb}, 0.2)`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1
            className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-[1.1] mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {meta.title}
          </h1>

          {meta.excerpt && (
            <p
              className="text-[1rem] leading-relaxed mb-5"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Lora', serif" }}
            >
              {meta.excerpt}
            </p>
          )}

          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 text-[0.68rem] font-mono tracking-wide"
            style={{
              borderTop: `1px solid rgba(${rgb}, 0.12)`,
              color: "rgba(255,255,255,0.3)",
            }}
          >
            {meta.author && (
              <span className="flex items-center gap-1.5">
                <User size={11} style={{ color: `rgba(${rgb}, 0.7)` }} />
                <span className="text-white/50">{meta.author}</span>
              </span>
            )}
            {meta.date && (
              <span className="flex items-center gap-1.5">
                <Calendar size={11} style={{ color: `rgba(${rgb}, 0.7)` }} />
                {meta.date}
              </span>
            )}
            {meta.readingTime && (
              <span className="flex items-center gap-1.5">
                <Clock size={11} style={{ color: `rgba(${rgb}, 0.7)` }} />
                {meta.readingTime}
              </span>
            )}
          </div>

          <div
            className="mt-6 h-px w-full"
            style={{
              background: `linear-gradient(90deg, rgba(${rgb},0.5), rgba(${rgb},0.1), transparent)`,
            }}
          />
        </div>

        <div className="blog-content" data-color={accentColor}>
          <Component components={mdxComponents}/>
        </div>

      </div>
    </div>
  );
}