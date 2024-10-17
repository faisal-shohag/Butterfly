export default function UpdateDataTable() {
  // Dummy book exchange data
  const bookExchangeData = [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      date: "2024-01-10",
      exchanger: "John Doe",
      status: "Completed",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      date: "2024-02-15",
      exchanger: "Jane Smith",
      status: "Pending",
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      date: "2024-03-20",
      exchanger: "Mike Ross",
      status: "Completed",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      date: "2024-04-25",
      exchanger: "Rachel Zane",
      status: "Completed",
    },
    {
      title: "Educated",
      author: "Tara Westover",
      date: "2024-05-10",
      exchanger: "Harvey Specter",
      status: "Pending",
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      date: "2024-06-18",
      exchanger: "Louis Litt",
      status: "Completed",
    },
    {
      title: "The Power of Habit",
      author: "Charles Duhigg",
      date: "2024-07-05",
      exchanger: "Jessica Pearson",
      status: "Completed",
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      date: "2024-08-10",
      exchanger: "Donna Paulsen",
      status: "Pending",
    },
    {
      title: "Outliers",
      author: "Malcolm Gladwell",
      date: "2024-09-22",
      exchanger: "Katrina Bennett",
      status: "Completed",
    },
    {
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      date: "2024-10-01",
      exchanger: "Robert Zane",
      status: "Pending",
    },
  ];

  return (
    <div className="overflow-x-auto mt-1">
      <table className="min-w-full bg-white border dark:bg-zinc-900 border-gray-200">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-900">
            <th className="py-2 px-4 border">Book Title</th>
            <th className="py-2 px-4 border">Author</th>
            <th className="py-2 px-4 border">Exchange Date</th>
            <th className="py-2 px-4 border">Exchanger Name</th>
            <th className="py-2 px-4 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookExchangeData.map((book, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4 border">{book.title}</td>
              <td className="py-2 px-4 border">{book.author}</td>
              <td className="py-2 px-4 border">{book.date}</td>
              <td className="py-2 px-4 border">{book.exchanger}</td>
              <td
                className={`py-2 px-4 border ${book.status === "Completed" ? "text-green-600" : "text-yellow-600"}`}
              >
                {book.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
