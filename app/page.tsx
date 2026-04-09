export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">BrightSmiles</h1>
        <p className="max-w-md text-lg text-gray-600">
          Welcome to BrightSmiles. Get started by editing{" "}
          <code className="rounded-sm bg-gray-100 px-2 py-1 font-mono text-sm">
            app/page.tsx
          </code>
        </p>
      </main>
    </div>
  );
}
