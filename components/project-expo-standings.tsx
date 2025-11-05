"use client";

import { projectExpoWinners } from "@/data/events";

export function ProjectExpoStandings() {
  const winners = projectExpoWinners.map((winner) => {
    const rank = winner.rank;
    return {
      rank,
      teamName: winner.teamName,
      college: winner.college,
      participants: winner.participants || [],
      gradient: [
        'from-yellow-400 to-yellow-600',
        'from-gray-300 to-gray-500',
        'from-amber-600 to-amber-800',
        'from-blue-500 to-blue-700'
      ][rank - 1],
      iconBg: [
        'bg-gradient-to-br from-yellow-400 to-yellow-600',
        'bg-gradient-to-br from-gray-300 to-gray-500',
        'bg-gradient-to-br from-amber-600 to-amber-800',
        'bg-gradient-to-br from-blue-500 to-blue-700'
      ][rank - 1],
      medal: ['🥇', '🥈', '🥉', '🎖️'][rank - 1]
    };
  });

  return (
    <section id="project-expo-standings" className="mx-auto max-w-7xl px-4 md:px-6 mt-24">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold">PROJECT EXPO STANDINGS</h2>
        <p className="mt-2 text-lg text-muted-foreground">Meet the Winning Teams!</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {winners.map((winner) => (
          <div 
            key={winner.rank}
            className={`relative bg-card rounded-xl border-2 ${
              winner.rank === 1 
                ? 'border-yellow-400/50 shadow-yellow-400/20' 
                : winner.rank === 2
                ? 'border-gray-400/50 shadow-gray-400/20'
                : winner.rank === 3
                ? 'border-amber-600/50 shadow-amber-600/20'
                : 'border-blue-500/50 shadow-blue-500/20'
            } p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
              winner.rank === 1 ? 'lg:scale-105' : ''
            }`}
          >
            {/* Rank Badge */}
            <div className="absolute -top-3 -right-3 flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-border shadow-md">
              <span className="text-2xl">{winner.medal}</span>
            </div>

            {/* Rank Number */}
            <div className={`flex items-center justify-center w-20 h-20 rounded-full ${winner.iconBg} text-white text-3xl font-bold mb-4 mx-auto shadow-lg`}>
              {winner.rank}
            </div>

            {/* Team Name */}
            <h3 className="text-xl font-bold text-center text-foreground mb-2">
              {winner.teamName}
            </h3>

            {/* College Name */}
            <p className="text-center text-sm text-muted-foreground mb-2">
              {winner.college}
            </p>

            {/* Participants */}
            {winner.participants && winner.participants.length > 0 && (
              <div className="mt-3 mb-4">
                <p className="text-xs font-medium text-muted-foreground text-center mb-1">
                  Team Members:
                </p>
                <ul className="text-xs text-muted-foreground text-center space-y-1">
                  {winner.participants.map((participant, idx) => (
                    <li key={idx}>{participant}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Placement Badge */}
            <div className="mt-4 pt-4 border-t border-border">
              <div className={`inline-flex items-center justify-center w-full px-3 py-2 rounded-lg bg-gradient-to-r ${winner.gradient} text-white font-semibold text-sm shadow-md`}>
                {winner.rank === 1 ? '🏆 Champion' : 
                 winner.rank === 2 ? '⭐ Runner-Up' : 
                 winner.rank === 3 ? '🌟 3rd Place' : 
                 '🎯 4th Place'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
