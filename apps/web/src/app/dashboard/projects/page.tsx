import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  AlertCircleIcon,
  CheckCircle2Icon,
  ClockIcon,
  PlusIcon,
} from 'lucide-react'

export default function Page() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {[
          {
            name: 'Mobile App Redesign',
            status: 'In Progress',
            progress: 65,
            dueDate: '2024-02-15',
            team: 'Design Team',
            priority: 'High',
            role: 'Project Manager',
          },
          {
            name: 'API Integration',
            status: 'Planning',
            progress: 25,
            dueDate: '2024-03-01',
            team: 'Development Team',
            priority: 'Medium',
            role: 'Developer',
          },
          {
            name: 'User Research Study',
            status: 'Completed',
            progress: 100,
            dueDate: '2024-01-20',
            team: 'Marketing Team',
            priority: 'Low',
            role: 'Contributor',
          },
          {
            name: 'Security Audit',
            status: 'At Risk',
            progress: 40,
            dueDate: '2024-02-28',
            team: 'QA Team',
            priority: 'High',
            role: 'Reviewer',
          },
        ].map((project) => (
          <Card
            key={project.name}
            className="cursor-pointer transition-shadow hover:shadow-md"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{project.name}</CardTitle>
                <div className="flex items-center space-x-2">
                  {project.status === 'Completed' && (
                    <CheckCircle2Icon className="h-4 w-4 text-green-500" />
                  )}
                  {project.status === 'In Progress' && (
                    <ClockIcon className="h-4 w-4 text-blue-500" />
                  )}
                  {project.status === 'At Risk' && (
                    <AlertCircleIcon className="h-4 w-4 text-red-500" />
                  )}
                  {project.status === 'Planning' && (
                    <ClockIcon className="h-4 w-4 text-yellow-500" />
                  )}
                </div>
              </div>
              <CardDescription>{project.team}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                <div className="flex items-center justify-between">
                  <Badge
                    variant={
                      project.priority === 'High'
                        ? 'destructive'
                        : project.priority === 'Medium'
                          ? 'secondary'
                          : 'outline'
                    }
                  >
                    {project.priority}
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    Due {project.dueDate}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline">{project.role}</Badge>
                  <Badge
                    variant={
                      project.status === 'Completed'
                        ? 'default'
                        : project.status === 'In Progress'
                          ? 'secondary'
                          : project.status === 'At Risk'
                            ? 'destructive'
                            : 'outline'
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
