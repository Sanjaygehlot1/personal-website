import { posts } from "../../blog/posts";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Blogs</h2>

      <div className="grid grid-cols-1 gap-4">

        {posts.map((post) => (
          <div
            key={post.slug}
            onClick={() => navigate(`/blog/${post.slug}`)}
            className="
              min-w-[280px] cursor-pointer
              bg-white/5 border border-white/[0.08]
              rounded-xl p-4
              hover:border-blue-500 transition-all
            "
          >
            <h3 className="text-lg font-semibold mb-2">
              {post.meta.title}
            </h3>

            <p className="text-sm text-gray-400">
              {post.meta.description}
              <span className="text-xs text-gray-500 mt-2 block">
                {post.meta.date}
              </span>
            </p>


          </div>
        ))}

      </div>
    </div>
  );
}