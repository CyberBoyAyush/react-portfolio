import React, { useEffect, useState } from 'react'
import Reveal from './Reveal'
import { AiOutlineGithub, AiFillFire } from 'react-icons/ai'
import { BiGitRepoForked, BiGitCommit } from 'react-icons/bi'

const CodingStats = () => {
  const leetcodeUsername = "cyberboyayush"
  const githubUsername = "cyberboyayush"
  const [githubStats, setGithubStats] = useState({
    repos: '...',
    commits: '...',
    streak: '...',
    totalContributions: '...'
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch basic user data
        const userResponse = await fetch(`https://api.github.com/users/${githubUsername}`)
        const userData = await userResponse.json()

        // Fetch contribution stats using GitHub's REST API
        const statsResponse = await fetch(`https://api.github.com/users/${githubUsername}/repos`)
        const repos = await statsResponse.json()
        
        // Calculate total commits (approximate from public repos)
        let totalCommits = 0
        await Promise.all(
          repos.map(async (repo) => {
            const commitResponse = await fetch(`https://api.github.com/repos/${githubUsername}/${repo.name}/commits?per_page=1`)
            const commitData = await commitResponse.json()
            if (Array.isArray(commitData)) {
              totalCommits += repo.size // Using repo size as an approximation
            }
          })
        )

        // Use GitHub's contribution calendar for streak
        const calendarResponse = await fetch(`https://github-contributions-api.deno.dev/${githubUsername}`)
        const calendarData = await calendarResponse.json()
        
        setGithubStats({
          repos: userData.public_repos,
          commits: Math.floor(totalCommits / 100), // Rough estimate
          streak: calendarData?.currentStreak || '0',
          totalContributions: calendarData?.totalContributions || '0'
        })
        setLoading(false)
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
        setLoading(false)
      }
    }

    fetchGitHubStats()
  }, [])

  // Loading skeleton component
  const StatsSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-8 bg-purple-800/20 rounded mb-4"></div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-24 bg-purple-800/20 rounded"></div>
        ))}
      </div>
      <div className="h-40 bg-purple-800/20 rounded mb-4"></div>
      <div className="h-40 bg-purple-800/20 rounded"></div>
    </div>
  )

  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20">
      <Reveal>
        <h2 className='text-4xl font-bold mb-8 justify-center text-center 
                      bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>
          Coding Activity
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* GitHub Stats */}
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 
                       backdrop-blur-sm border border-purple-500/30 rounded-xl p-6
                       hover:shadow-[0_0_25px_rgba(147,51,234,0.3)] 
                       transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-200 mb-6 flex items-center gap-2">
              <AiOutlineGithub className="text-3xl" /> GitHub Stats
            </h3>
            
            {loading ? <StatsSkeleton /> : (
              <>

                {/* Contribution Graph */}
                <div className="space-y-4 mt-6">
                  <img 
                    src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&theme=midnight-purple&bg_color=0D1117&title_color=A78BFA&icon_color=9F7AEA&text_color=FFFFFF`}
                    alt="Github stats"
                    className="w-full rounded-lg"
                  />
                  <img 
                    src={`https://github-readme-streak-stats.herokuapp.com?user=${githubUsername}&theme=midnight-purple&hide_border=true&background=0D1117`}
                    alt="Github streak stats"
                    className="w-full rounded-lg"
                  />
                </div>
              </>
            )}

            <div className="mt-6 flex justify-center">
              <a 
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 
                         text-gray-200 rounded-lg hover:from-purple-700 hover:to-purple-900
                         transform hover:scale-105 hover:-translate-y-1
                         transition-all duration-300 shadow-lg hover:shadow-purple-500/50
                         flex items-center space-x-2">
                <span className='text-white'>View Profile</span>
              </a>
            </div>
          </div>

          {/* LeetCode Stats (unchanged) */}
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 
                        backdrop-blur-sm border border-purple-500/30 rounded-xl p-6
                        hover:shadow-[0_0_25px_rgba(147,51,234,0.3)] 
                        transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">LeetCode Progress</h3>
            <div className="overflow-hidden rounded-lg bg-purple-900/20">
              <img 
                src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Roboto&ext=heatmap`}
                alt="LeetCode stats"
                className="w-full"
              />
            </div>
            <div className="mt-4 flex justify-center">
              <a 
                href={`https://leetcode.com/${leetcodeUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 
                         text-gray-200 rounded-lg hover:from-purple-700 hover:to-purple-900
                         transform hover:scale-105 hover:-translate-y-1
                         transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                View Profile
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default CodingStats
