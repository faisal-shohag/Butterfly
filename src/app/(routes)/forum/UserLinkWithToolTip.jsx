// "use client";

// import kyInstance from "@/lib/ky";
// import { UserData } from "@/lib/types";
// import { useQuery } from "@tanstack/react-query";
// import { HTTPError } from "ky";
// import Link from "next/link";
// import { PropsWithChildren } from "react";
// import UserTooltip from "./UserTooltip";



// export default function UserLinkWithTooltip({
//   children,
//   username,
// }) {
//   const { data } = useQuery({
//     queryKey: ["user-data", username],
//     queryFn: () =>
//       kyInstance.get(`/api/users/username/${username}`).json(),
//     retry(failureCount, error) {
//       if (error instanceof HTTPError && error.response.status === 404) {
//         return false;
//       }
//       return failureCount < 3;
//     },
//     staleTime: Infinity,
//   });

//   if (!data) {
//     return (
//       <Link
//         href={`/users/${username}`}
//         className="text-primary hover:underline"
//       >
//         {children}
//       </Link>
//     );
//   }

//   return (
//     <UserTooltip user={data}>
//       <Link
//         href={`/users/${username}`}
//         className="text-primary hover:underline"
//       >
//         {children}
//       </Link>
//     </UserTooltip>
//   );
// }