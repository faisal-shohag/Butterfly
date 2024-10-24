import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PiBookOpenTextThin,
  PiFileImageThin,
  PiStorefrontThin,
} from "react-icons/pi";

const cardData = [
  {
    id: 1,
    title: "Total Exchanges Books",
    icon: <PiBookOpenTextThin size={24} />,
    totalCounts: 10,
  },
  {
    id: 2,
    title: "Total Posts",
    icon: <PiFileImageThin size={24} />,
    totalCounts: 20,
  },
  {
    id: 3,
    title: "Total Store Books",
    icon: <PiStorefrontThin size={24} />,
    totalCounts: 50,
  },
];

export default function UserTopCards() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
      {cardData.map((item) => (
        <Card key={item.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">{item.title}</CardTitle>
            <div className="h-4 w-4 text-muted-foreground">{item.icon}</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{item.totalCounts}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
