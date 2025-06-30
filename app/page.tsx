"use client";

import * as React from "react";
import { Github, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import MultiSelect from "@/components/ui/multi-select";

const frameworks = [
  { label: "Next.js", value: "nextjs" },
  { label: "React", value: "react" },
  { label: "Vue.js", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Nuxt.js", value: "nuxt" },
  { label: "Remix", value: "remix" },
  { label: "Gatsby", value: "gatsby" },
];

const languages = [
  { label: "JavaScript", value: "javascript" },
  { label: "TypeScript", value: "typescript" },
  { label: "Python", value: "python" },
  { label: "Java", value: "java" },
  { label: "C++", value: "cpp" },
  { label: "Go", value: "go" },
  { label: "Rust", value: "rust" },
  { label: "PHP", value: "php" },
  { label: "Ruby", value: "ruby" },
  { label: "Swift", value: "swift" },
];

const skills = [
  { label: "Frontend Development", value: "frontend" },
  { label: "Backend Development", value: "backend" },
  { label: "Full Stack Development", value: "fullstack" },
  { label: "Mobile Development", value: "mobile" },
  { label: "DevOps", value: "devops" },
  { label: "UI/UX Design", value: "design" },
  { label: "Data Science", value: "datascience" },
  { label: "Machine Learning", value: "ml" },
  { label: "Cloud Computing", value: "cloud" },
  { label: "Cybersecurity", value: "security" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default function MultiSelectShowcase() {
  const [selectedLanguages, setSelectedLanguages] = React.useState<string[]>([
    "javascript",
    "typescript",
  ]);
  const [isLoading, setIsLoading] = React.useState(false);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">MultiSelect Component</h1>
            <p className="text-sm text-muted-foreground">
              A customizable multi-select component for React
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/Chamesss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Interactive Examples</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore different use cases of the MultiSelect component. Select
              multiple options, search through items, and see how it handles
              various scenarios.
            </p>
          </div>

          {/* Examples Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Pre-selected Example */}
            <Card>
              <CardHeader>
                <CardTitle>Programming Languages</CardTitle>
                <CardDescription>
                  Languages you're proficient in (pre-selected)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="languages">Languages</Label>
                  <MultiSelect
                    options={languages}
                    selected={selectedLanguages}
                    onChange={setSelectedLanguages}
                    placeholder="Select languages..."
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  Selected:{" "}
                  {selectedLanguages.length > 0
                    ? selectedLanguages.join(", ")
                    : "None"}
                </div>
              </CardContent>
            </Card>

            {/* Loading State Example */}
            <Card>
              <CardHeader>
                <CardTitle>Loading State</CardTitle>
                <CardDescription>
                  Demonstrates the loading state with skeleton placeholders
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="loading">Loading Example</Label>
                  <MultiSelect
                    options={isLoading ? undefined : frameworks}
                    selected={[]}
                    onChange={() => {}}
                    placeholder="Loading options..."
                    isLoading={isLoading}
                  />
                </div>
                <Button
                  onClick={simulateLoading}
                  disabled={isLoading}
                  size="sm"
                >
                  {isLoading ? "Loading..." : "Simulate Loading"}
                </Button>
              </CardContent>
            </Card>
          </div>

          <Separator />

          {/* Usage Example */}
          <Card>
            <CardHeader>
              <CardTitle>Usage Example</CardTitle>
              <CardDescription>
                Here's how to use the MultiSelect component in your project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`const frameworks = [
  { label: "Next.js", value: "nextjs" },
  { label: "React", value: "react" },
  { label: "Vue.js", value: "vue" }
];

const [selected, setSelected] = useState([]);

<MultiSelect
  options={frameworks}
  selected={selected}
  onChange={setSelected}
  placeholder="Select frameworks..."
/>`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
