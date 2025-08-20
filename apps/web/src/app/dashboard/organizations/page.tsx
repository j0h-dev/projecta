import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { client } from "@/utils/orpc";
import { PlusIcon } from "lucide-react";

export default async function Page() {
  const orgs = await client.organization.getUsers();

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Organizations</h2>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Organization
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"></div>
    </div>
  );
}

type OrganizationCardProps = {
  org: Awaited<ReturnType<typeof client.organization.getUsers>>[number];
};
function OrganizationCard({ org }: OrganizationCardProps) {
  return (
    <Card
      key={org.organization.name}
      className="cursor-pointer transition-shadow hover:shadow-md"
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{org.role}</CardTitle>
          <Badge>{org.role}</Badge>
        </div>
      </CardHeader>
      {/*<CardContent>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Members</span>
          <span>{org.members}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Projects</span>
          <span>{org.projects}</span>
        </div>
      </div>
    </CardContent>*/}
    </Card>
  );
}
