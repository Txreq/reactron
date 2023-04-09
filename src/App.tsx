import React from "react";

const App: React.FC = () => {
  return (
    <main className="bg-neutral-900 h-screen overflow-hidden grid place-content-center">
      <div className="flex flex-col space-y-8">
        <img
          className="mx-auto h-24 animate-spin-slow"
          draggable={false}
          src={"public/atom.svg"}
        />
        <div className="text-center text-white/80">
          <h1 className="text-5xl font-mono font-bold">reactron</h1>
          <span className="space-x-2">
            <span>edit</span>
            <code className="bg-yellow-500/10 px-1 rounded">src/App.tsx</code>
          </span>
        </div>
      </div>
    </main>
  );
};

export default App;
