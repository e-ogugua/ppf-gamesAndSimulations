'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            PoshPOULE Farms Games & Simulations
          </h1>
          <p className="text-xl text-gray-600">
            Farm-themed games and simulations (C++ showcase)
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Farm Game Demo</h2>
            <p className="text-gray-600 mb-4">Interactive C++ farm simulation</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
              Start Game
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Leaderboard</h2>
            <p className="text-gray-600 mb-4">Top farmers worldwide</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              View Rankings
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
