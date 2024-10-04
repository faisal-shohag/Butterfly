"use client";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import Image from "next/image";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ImageIcon, LoaderIcon, Sparkles } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import CustomRenderer from "@/components/common/CustomRenderer";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookSchema } from "@/lib/validation";
import UserAvatar from "@/components/common/UserAvatar";

const AddBook = () => {
  const axiosSecure = useAxiosSecure();
  const session = useSession();
  const user = session.data?.user;
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(bookSchema), // Use Zod resolver
    defaultValues: {
      title: "",
      author: "",
      isbn: "",
      publishedYear: "",
      publisher: "",
      cover: "",
      description: "",
      genre: "",
      lookingForTitle: "",
      lookingForAuthor: "",
      lookingForCover: "",
      lookingForGenre: "",
      lookingForDescription: "",
    },
  });

  const [previewData, setPreviewData] = useState({});

  const addBookMutation = useMutation(
    (bookData) => axiosSecure.post(`/add_book/${user.id}`, bookData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("all_books");
        toast.success("Book added successfully!", { id: "addBook" });
        setPreviewData({});
      },
    }
  );

  const onSubmit = (data) => {
    console.log()
    const isLookingForFilled =
      data.lookingForTitle &&
      data.lookingForAuthor &&
      data.lookingForCover &&
      data.lookingForGenre &&
      data.lookingForDescription;
    
    toast.loading("Adding book...", { id: "addBook" });
    if(!isLookingForFilled){
      toast.error("Please fill all the fields", { id: "addBook" })
      return 
    }
    const bookData = {
      ...data,
      lookingFor: isLookingForFilled
        ? {
            title: data.lookingForTitle,
            author: data.lookingForAuthor,
            cover: data.lookingForCover,
            genre: data.lookingForGenre,
            description: data.lookingForDescription,
          }
        : null,
    };

    // console.log(bookData)
    addBookMutation.mutate(bookData);
  };

  React.useEffect(() => {
    const subscription = watch((value) => {
      setPreviewData(value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const [loader, setLoader] = useState(false);
  const [coverPhotos, setCoverPhotos] = useState([]);
  const [coverPhotosL, setCoverPhotosL] = useState([]);

  const getCoverPhoto = (type, query) => {
    setLoader(true);
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + query+`&key=AIzaSyCSs17OM5wJkkpB5zX5tUBny1-n_MAyjsk`)
      .then((res) => {
        const data = res.data.items.filter(
          (book) => book.volumeInfo && book.volumeInfo.imageLinks
        );
        if (type === "book") {
          // console.log(res.data.items)

          setCoverPhotos(data);
        } else {
          setCoverPhotosL(data);
        }
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  };

  //   console.log(coverPhotos)
  const [genLoader, setGenLoader] = useState(false);
  const getDescription = (type, text_input) => {
    setGenLoader(true);
    axiosSecure
      .post("/gemini", {
        text_input: `Give me short description about the book ${text_input}`,
      })
      .then((res) => {
        if (type == "book") {
          setValue(
            "description",
            res.data.generatedText.candidates[0].content.parts[0].text
          );
        } else {
          setValue(
            "lookingForDescription",
            res.data.generatedText.candidates[0].content.parts[0].text
          );
        }

        setGenLoader(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong!");
        setGenLoader(false);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>
      <div className="lg:flex lg:space-x-4">
        <div className="lg:w-1/2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 custom-glass rounded-xl p-4"
          >
            <h2 className="text-xl font-semibold">Book Details</h2>
            <Input
              {...register("title", { required: "Title is required" })}
              placeholder="Title"
            />
            {errors.title && (
              <span className="text-red-500">{errors.title.message}</span>
            )}

            <Input {...register("cover")} placeholder="Cover URL" />
            {errors.cover && (
              <span className="text-red-500">{errors.cover.message}</span>
            )}

            {coverPhotos.length > 0 && (
              <div className="flex flex-wrap items-center gap-3">
                {coverPhotos.map((book, index) => {
                  const volumeInfo = book.volumeInfo || {};
                  return (
                    <div
                      onClick={() => {
                        setValue("cover", volumeInfo.imageLinks?.thumbnail ?? "");
                        setValue("title", volumeInfo.title ?? "");
                        setValue("author", volumeInfo.authors?.[0] ?? "");
                        setValue("description", volumeInfo.description ?? "");
                        setValue("genre", volumeInfo.categories?.[0] ?? "");
                        setValue("isbn", volumeInfo.industryIdentifiers?.[0]?.identifier ?? "");
                        setValue("publisher", volumeInfo.publisher ?? "");
                        setValue("publishedYear", volumeInfo.publishedDate ?? "");
                      }}
                      className="cursor-pointer"
                      key={index}
                    >
                      <div>
                        <Image
                        
                          height="100"
                          width="100"
                          alt="cover"
                          src={book.volumeInfo.imageLinks.thumbnail}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {previewData.title && (
              <div onClick={() => getCoverPhoto("book", previewData.title)}>
                <div className="relative inline-block cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-500 to-indigo-500 rounded-lg shadow-2xl"></div>
                  <div className="relative w-full px-3 py-2 bg-white dark:bg-gray-800 rounded-full text-white bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-bold text-sm flex gap-1 items-center">
                    {loader ? (
                      <div className="animate-spin">
                        <LoaderIcon size={13} />
                      </div>
                    ) : (
                      <ImageIcon size={13} />
                    )}{" "}
                    {loader ? "Getting Cover Photo" : "Get Cover Photo"}
                  </div>
                </div>
              </div>
            )}

            <Input
              {...register("author", { required: "Author is required" })}
              placeholder="Author"
            />
            {errors.author && (
              <span className="text-red-500">{errors.author.message}</span>
            )}

            <Input {...register("isbn")} placeholder="ISBN" />
            {errors.isbn && (
              <span className="text-red-500">{errors.isbn.message}</span>
            )}

            <Input
              {...register("publishedYear")}
              placeholder="Published Year"
            />
            {errors.publishedYear && (
              <span className="text-red-500">
                {errors.publishedYear.message}
              </span>
            )}

            <Input {...register("publisher")} placeholder="Publisher" />
            {errors.publisher && (
              <span className="text-red-500">{errors.publisher.message}</span>
            )}

            <Textarea {...register("description")} placeholder="Description" />
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}

            {previewData.title && (
              <div
                className=""
                onClick={() => getDescription("book", previewData.title)}
              >
                <div className="relative inline-block g-card cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 rounded-lg shadow-2xl"></div>
                  <div className="relative w-full px-3 py-2 bg-white dark:bg-gray-800 rounded-full text-white bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-blue-500 font-bold text-sm flex gap-1 items-center">
                    {genLoader ? (
                      <div className="animate-spin">
                        <LoaderIcon size={13} />
                      </div>
                    ) : (
                      <Sparkles size={13} />
                    )}{" "}
                    {genLoader ? "Thinking..." : "AI Description"}
                  </div>
                </div>
              </div>
            )}

            <Select onValueChange={(value) => setValue("genre", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Fiction">Fiction</SelectItem>
                <SelectItem value="Non-Fiction">Non-Fiction</SelectItem>
                <SelectItem value="Mystery">Mystery</SelectItem>
                <SelectItem value="Sci-Fi">Science Fiction</SelectItem>
                <SelectItem value="Adventure">Adventure</SelectItem>
                <SelectItem value="Romance">Romance</SelectItem>
                <SelectItem value="Horror">Horror</SelectItem>
                <SelectItem value="Thriller">Thriller</SelectItem>
                <SelectItem value="Fantasy">Fantasy</SelectItem>
                <SelectItem value="Biography">Biography</SelectItem>
                <SelectItem value="History">History</SelectItem>
                <SelectItem value="Self-Help">Self-Help</SelectItem>
                <SelectItem value="Cooking">Cooking</SelectItem>
                <SelectItem value="Travel">Travel</SelectItem>
                <SelectItem value="Children">Children</SelectItem>
                <SelectItem value="Poetry">Poetry</SelectItem>
                <SelectItem value="Art">Art</SelectItem>
                <SelectItem value="Religion">Religion</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
                <SelectItem value="Health">Health</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Sports">Sports</SelectItem>
                <SelectItem value="Music">Music</SelectItem>
                <SelectItem value="Film">Film</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.genre && (
              <span className="text-red-500">{errors.genre.message}</span>
            )}

            <h2 className="text-xl font-semibold mt-4">Looking For</h2>
            <Input {...register("lookingForTitle")} placeholder="Title" />
            {errors.lookingForTitle && (
              <span className="text-red-500">
                {errors.lookingForTitle.message}
              </span>
            )}
              {coverPhotos.length > 0 && <div className="flex flex-wrap items-center gap-3">
            
            {coverPhotosL.map((book, index) => {
                const volumeInfo = book.volumeInfo || {};
                return (
                  <div
                    onClick={() => {
                      setValue("lookingForTitle", volumeInfo.title ?? "");
                      setValue("lookingForAuthor", volumeInfo.authors?.[0] ?? "");
                      setValue("lookingForDescription", volumeInfo.description ?? "");
                      setValue("lookingForGenre", volumeInfo.categories?.[0] ?? "");
                      setValue("publisher", volumeInfo.publisher ?? "");
                      setValue("publishedYear", volumeInfo.publishedDate ?? "");
                      setValue("lookingForCover", volumeInfo.imageLinks?.thumbnail ?? "");
                    }} className="cursor-pointer" key={index}>
                      <div>
                      <Image  height="100" width="100" alt="cover"
                       src={book.volumeInfo.imageLinks.thumbnail}/>
                      </div>
                </div>
            )})}
            </div>}

{previewData.lookingForTitle &&  <div onClick={() => getCoverPhoto("", previewData.lookingForTitle)}>
        <div className="relative inline-block cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-500 to-indigo-500 rounded-lg shadow-2xl"></div>
          <div className="relative w-full px-3 py-2 bg-white dark:bg-gray-800 rounded-full text-white bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-bold text-sm flex gap-1 items-center">
           {loader ? <div className="animate-spin"><LoaderIcon size={13}/></div> :  <ImageIcon size={13} />} {loader? "Getting Cover Photo": "Get Cover Photo"}
          </div>
        </div></div>}

            <Input {...register("lookingForAuthor")} placeholder="Author" />
            {errors.lookingForAuthor && (
              <span className="text-red-500">
                {errors.lookingForAuthor.message}
              </span>
            )}
            <Input {...register("lookingForCover")} placeholder="Cover URL" />
            {errors.lookingForCover && (
              <span className="text-red-500">
                {errors.lookingForCover.message}
              </span>
            )}

            <Select
              onValueChange={(value) => setValue("lookingForGenre", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Fiction">Fiction</SelectItem>
                <SelectItem value="Non-Fiction">Non-Fiction</SelectItem>
                <SelectItem value="Mystery">Mystery</SelectItem>
                <SelectItem value="Sci-Fi">Science Fiction</SelectItem>
                <SelectItem value="Adventure">Adventure</SelectItem>
                <SelectItem value="Romance">Romance</SelectItem>
                <SelectItem value="Horror">Horror</SelectItem>
                <SelectItem value="Thriller">Thriller</SelectItem>
                <SelectItem value="Fantasy">Fantasy</SelectItem>
                <SelectItem value="Biography">Biography</SelectItem>
                <SelectItem value="History">History</SelectItem>
                <SelectItem value="Self-Help">Self-Help</SelectItem>
                <SelectItem value="Cooking">Cooking</SelectItem>
                <SelectItem value="Travel">Travel</SelectItem>
                <SelectItem value="Children">Children</SelectItem>
                <SelectItem value="Poetry">Poetry</SelectItem>
                <SelectItem value="Art">Art</SelectItem>
                <SelectItem value="Religion">Religion</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
                <SelectItem value="Health">Health</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Sports">Sports</SelectItem>
                <SelectItem value="Music">Music</SelectItem>
                <SelectItem value="Film">Film</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>

            <Textarea
              {...register("lookingForDescription")}
              placeholder="Description"
            />
            {errors.lookingForDescription && (
              <span className="text-red-500">
                {errors.lookingForDescription.message}
              </span>
            )}

            {previewData.lookingForTitle && (
              <div
                className=""
                onClick={() => getDescription("", previewData.lookingForTitle)}
              >
                <div className="relative inline-block g-card cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 rounded-lg shadow-2xl"></div>
                  <div className="relative w-full px-3 py-2 bg-white dark:bg-gray-800 rounded-full text-white bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-blue-500 font-bold text-sm flex gap-1 items-center">
                    {genLoader ? (
                      <div className="animate-spin">
                        <LoaderIcon size={13} />
                      </div>
                    ) : (
                      <Sparkles size={13} />
                    )}{" "}
                    {genLoader ? "Thinking..." : "AI Description"}
                  </div>
                </div>
              </div>
            )}

            <Button
              className="mt-4"
              type="submit"
              disabled={addBookMutation.isLoading}
            >
              {addBookMutation.isLoading ? "Adding..." : "Add Book"}
            </Button>
          </form>

          {addBookMutation.isSuccess && (
            <Alert className="mt-4">
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Your book has been added successfully.
              </AlertDescription>
            </Alert>
          )}

          {addBookMutation.isError && (
            <Alert className="mt-4" variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                There was an error adding your book. Please try again.
              </AlertDescription>
            </Alert>
          )}
        </div>

        <div className="lg:w-1/2 mt-4 lg:mt-0">
          <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
          <div className="custom-glass-2 rounded-lg overflow-hidden">
            <div className=" flex flex-col">
              <div className=" bg-zinc-200 dark:bg-zinc-950 flex justify-center">
                <Image
                  src={
                    previewData.cover ||
                    "https://i.postimg.cc/ZR1MqgSS/image.png"
                  }
                  alt={previewData.title || "Book cover"}
                  width={400}
                  height={450}
                  className="h-full w-full object-contain md:w-48"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {previewData.genre || "Genre"}
                </div>
                <h1 className="mt-1 text-4xl font-bold text-slate-500">
                  {previewData.title || "Book Title"}
                </h1>
                <div className="mt-2 text-gray-600">
                  by {previewData.author || "Author Name"}
                </div>
                <div className="mt-2 text-gray-500">
                  Published by {previewData.publisher || "Publisher"} in{" "}
                  {previewData.publishedYear || "Year"}
                </div>
                <div className="mt-2 text-gray-500">
                  ISBN: {previewData.isbn || "ISBN"}
                </div>
                <div className="mt-4 text-gray-500">
                  {previewData.description ? (
                    <CustomRenderer content={previewData.description} />
                  ) : (
                    "Book description will appear here."
                  )}
                </div>

                <div className="mt-6 custom-glass-2 rounded-xl px-5 py-3">
                  <h2 className="text-2xl font-semibold text-slate-500">
                    The book I want
                  </h2>
                  <div className="mt-4 flex items-center">
                    <Image
                      src={
                        previewData.lookingForCover ||
                        "https://i.postimg.cc/ZR1MqgSS/image.png"
                      }
                      alt={previewData.lookingForTitle || "Desired book cover"}
                      width={100}
                      height={150}
                      className="h-32 w-24 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">
                        {previewData.lookingForTitle || "Desired Book Title"}
                      </h3>
                      <div className="text-gray-600">
                        by {previewData.lookingForAuthor || "Desired Author"}
                      </div>
                      <div className="text-gray-500">
                        {previewData.lookingForGenre || "Desired Genre"}
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        {previewData.lookingForDescription ||
                          "Description of the desired book will appear here."}
                      </div>
                    </div>
                  </div>
                </div>
                {user && (
                  <div className="ml-4">
                    <div className="mt-6">
                      <h2 className="text-2xl font-semibold text-slate-500">
                        Book Owner
                      </h2>
                      <div className="mt-4 flex items-center gap-2">
                        <UserAvatar image={user.image} name={user.name}/>
                        <div>
                          <h3 className="text-lg font-semibold">
                            {user.name || "Your Name"}
                          </h3>
                          <div className="text-gray-600">
                            {user.email || "Your Email"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
