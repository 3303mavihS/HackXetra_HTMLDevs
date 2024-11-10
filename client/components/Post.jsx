import React from "react";
import { Button } from "@/components/ui/button";
const Post = ({ post }) => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg gap-4">
      {post.imageUrl && (
        <div className="">
          <img
            src={`http://localhost:3001${post.imageUrl}`}
            alt={post.title}
            className="rounded-lg max-h-96 w-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder-image.jpg";
            }}
          />
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              onClick={() => handleLike(post.id)}
              disabled={likeInProgress[post.id]}
              className={`flex items-center space-x-2 transition-all duration-200 ${
                likeInProgress[post.id] ? "opacity-50" : ""
              }`}
            >
              <Heart
                className={`transition-all duration-200 ${
                  post.Like?.some((like) => like.userId === parseInt(userId))
                    ? "fill-red-500 stroke-red-500 scale-110"
                    : "scale-100"
                }`}
              />
              <span className="transition-all duration-200">
                {post.Like?.length || 0}
              </span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => toggleComments(post.id)}
              className="flex items-center space-x-2"
            >
              <MessageCircle />
              <span>{post.Comment?.length || 0}</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
