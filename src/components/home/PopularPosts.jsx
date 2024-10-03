"use server";
import PopularPostCard from "./PopularPostCard";
import Heading from "../common/Heading";
import { MdOutlineHive } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const getPopularPosts = async () => {
  try {
    const popularPosts = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/popular-posts`
    ).then((res) => res.json());
    return popularPosts;
  } catch (error) {
    console.error("Error fetching latest exchange posts:", error);
    throw new Error("Failed to fetch latest exchange posts", error);
  }
};

const PopularPosts = async () => {
  let posts = await getPopularPosts();
  posts = posts ? posts : [];

  return (
    <div className="mb-10 custom-glass rounded-xl">
      <Heading icon={<MdOutlineHive />} title={"Popular from HIVE"} />

      {/* <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"> */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {posts?.map((post) => (
            <CarouselItem
              key={post.id}
              className="md:basis-1/2 basis-10/12 lg:basis-1/3"
            >
              <PopularPostCard post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* </div> */}
    </div>
  );
};

export default PopularPosts;
