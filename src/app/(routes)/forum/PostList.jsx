"use client"
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Loading from "@/components/common/Loading";
import PostLoading from "./PostLoading";
import PostCard from "./PostCard";

const PostList = ({ user }) => {
  const axiosSecure = useAxiosSecure();
  const LIMIT = 3;

  const fetchPosts = async ({ pageParam = 1 }) => {
    const response = await axiosSecure.get(
      `/allposts/${user?.id}?page=${pageParam}&limit=${LIMIT}`
    );
    return response.data;
  };

  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } =
    useInfiniteQuery("posts", fetchPosts, {
      getNextPageParam: (lastPage) => {
        if (lastPage.currentPage < lastPage.totalPages) {
          return lastPage.currentPage + 1;
        }
        return undefined;
      },
    });

  if (isLoading) return <PostLoading />;
  if (isError) return <div>Error: {error.message}</div>;

  const posts = data?.pages.flatMap((page) => page.posts) || [];

  return (
    <>
      {user && (
        <div className="">
          <InfiniteScroll
            dataLength={posts.length}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<Loading />}
            endMessage={
              <div className="text-center font-bold text-slate-500 max-w-2xl mx-auto">
                No more Post
              </div>
            }
          >
            {posts.map((post) => (
              <PostCard key={post.id} post={post} user={user} axiosSecure={axiosSecure} />
            ))}
          </InfiniteScroll>
        </div>
      )}
    </>
  );
};

export default PostList;