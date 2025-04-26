'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Users, Target, DollarSign, BarChart4 } from 'lucide-react'

const AudiencePage = () => {
  // Categories and their audience data
  const categories = [
    {
      id: 'health-wellness',
      name: 'Health & Wellness',
      icon: '🧘‍♀️',
      color: 'bg-green-100 text-green-800',
      audiences: [
        {
          niche: 'Specialized Fitness Guides',
          primary: 'Adults 35-65 with specific limitations or goals',
          demographics: 'Working professionals with limited time, seniors, people with mobility issues',
          painPoints: 'Lack of customized fitness solutions for their specific situation',
          psychographics: 'Health-conscious, preventative mindset, willing to invest in wellbeing',
          geographic: 'Urban areas in USA and Europe; growing middle class in Indian metros'
        },
        {
          niche: 'Condition-Specific Nutrition Plans',
          primary: 'Individuals managing chronic health conditions',
          demographics: '30-60 year olds, predominantly female (60-70%), middle to upper income',
          painPoints: 'Overwhelmed by generic advice, need condition-specific guidance',
          psychographics: 'Proactive health managers, research-oriented, willing to follow structured plans',
          geographic: 'High potential in USA (specialized diets trend); growing awareness in urban India'
        },
        {
          niche: 'Mental Wellness Toolkits',
          primary: 'Stress-prone professionals and students',
          demographics: '18-45 year olds, equal gender distribution, education-focused',
          painPoints: 'Seeking practical solutions for anxiety, burnout, and sleep issues',
          psychographics: 'Self-improvement oriented, digitally savvy, privacy-conscious',
          geographic: 'High demand across all regions; particular growth in tech hubs'
        }
      ]
    },
    {
      id: 'personal-finance',
      name: 'Personal Finance',
      icon: '💰',
      color: 'bg-yellow-100 text-yellow-800',
      audiences: [
        {
          niche: 'Country-Specific Tax Optimization Guides',
          primary: 'Self-employed professionals and small business owners',
          demographics: '30-55 year olds, higher income brackets, financially savvy',
          painPoints: 'Complexity of tax codes, fear of overpaying or non-compliance',
          psychographics: 'Detail-oriented, value-seeking, legally compliant',
          geographic: 'High demand in all regions; particularly valuable for cross-border workers'
        },
        {
          niche: 'Niche Investment Starter Guides',
          primary: 'Young professionals beginning investment journey',
          demographics: '25-40 year olds, disposable income, college educated',
          painPoints: 'Overwhelmed by investment options, fear of making mistakes',
          psychographics: 'Future-oriented, moderate risk tolerance, digitally native',
          geographic: 'Strong in USA (investment culture); growing rapidly in urban India'
        },
        {
          niche: 'Financial Independence Roadmaps',
          primary: 'FIRE movement enthusiasts and lifestyle optimizers',
          demographics: '25-45 year olds, higher income professionals, tech/finance backgrounds',
          painPoints: 'Seeking accelerated path to financial freedom, lifestyle design',
          psychographics: 'Independent thinkers, optimization-focused, willing to make short-term sacrifices',
          geographic: 'Established in USA; growing interest in European tech hubs and Indian IT centers'
        }
      ]
    },
    {
      id: 'career-development',
      name: 'Career Development',
      icon: '💼',
      color: 'bg-blue-100 text-blue-800',
      audiences: [
        {
          niche: 'Industry-Specific Resume Templates',
          primary: 'Job seekers and career changers',
          demographics: '22-45 year olds, varied education levels, career-focused',
          painPoints: 'Standing out in competitive job markets, presenting skills effectively',
          psychographics: 'Achievement-oriented, detail-focused, seeking competitive advantage',
          geographic: 'Universal need; particularly valuable for emerging economies in India'
        },
        {
          niche: 'Remote Work Productivity Systems',
          primary: 'Remote workers and digital nomads',
          demographics: '25-45 year olds, knowledge workers, tech-savvy',
          painPoints: 'Maintaining productivity outside traditional office, work-life boundaries',
          psychographics: 'Self-motivated, results-oriented, values flexibility',
          geographic: 'Strong in USA/Europe (established remote work); growing in Indian tech sector'
        },
        {
          niche: 'Career Transition Roadmaps',
          primary: 'Professionals seeking industry or role changes',
          demographics: '30-50 year olds, established career history, seeking renewal',
          painPoints: 'Uncertainty about transferable skills, navigating unfamiliar industries',
          psychographics: 'Growth-minded, risk-tolerant, seeking meaningful work',
          geographic: 'High demand in regions with shifting job markets (automation impacts)'
        }
      ]
    },
    {
      id: 'digital-skills',
      name: 'Digital Skills',
      icon: '💻',
      color: 'bg-purple-100 text-purple-800',
      audiences: [
        {
          niche: 'Platform-Specific Content Creation Guides',
          primary: 'Content creators and small business marketers',
          demographics: '18-40 year olds, creative professionals, social media active',
          painPoints: 'Algorithm changes, platform-specific optimization, standing out',
          psychographics: 'Trend-aware, visually oriented, growth-focused',
          geographic: 'Universal need; platform preferences vary by region'
        },
        {
          niche: 'No-Code App Development Tutorials',
          primary: 'Entrepreneurs and non-technical founders',
          demographics: '25-45 year olds, business-minded, limited technical background',
          painPoints: 'Technical barriers to implementing business ideas, development costs',
          psychographics: 'Solution-oriented, practical innovators, budget-conscious',
          geographic: 'Strong in startup ecosystems; growing in Indian entrepreneurial hubs'
        },
        {
          niche: 'AI Tool Implementation Guides',
          primary: 'Professionals seeking productivity enhancements',
          demographics: '25-50 year olds, knowledge workers, innovation-minded',
          painPoints: 'Overwhelmed by AI options, uncertain about practical applications',
          psychographics: 'Early adopters, efficiency-focused, competitive advantage seekers',
          geographic: 'Strong in tech-forward regions; growing interest across all markets'
        }
      ]
    },
    {
      id: 'lifestyle-relationships',
      name: 'Lifestyle & Relationships',
      icon: '❤️',
      color: 'bg-pink-100 text-pink-800',
      audiences: [
        {
          niche: 'Cultural Dating Guides',
          primary: 'Singles navigating dating apps and cross-cultural relationships',
          demographics: '21-40 year olds, urban dwellers, relationship-seeking',
          painPoints: 'Dating app fatigue, cultural misunderstandings, communication challenges',
          psychographics: 'Connection-oriented, experience-seeking, open-minded',
          geographic: 'Particularly valuable for expatriates and multicultural communities'
        },
        {
          niche: 'Communication Frameworks for Couples',
          primary: 'Committed couples seeking relationship improvement',
          demographics: '25-55 year olds, all relationship stages, conflict-avoidant',
          painPoints: 'Recurring arguments, communication breakdowns, emotional disconnection',
          psychographics: 'Growth-oriented, solution-seeking, commitment-focused',
          geographic: 'Universal need; cultural sensitivity essential for each market'
        },
        {
          niche: 'Relocation Checklists',
          primary: 'Expatriates and domestic migrants',
          demographics: '25-45 year olds, career-motivated movers, internationally mobile',
          painPoints: 'Logistical complexity, cultural adjustment, administrative requirements',
          psychographics: 'Adventure-seeking, detail-oriented, planning-focused',
          geographic: 'High value for cross-border relocations; strong in mobility hubs'
        }
      ]
    },
    {
      id: 'creative-pursuits',
      name: 'Creative Pursuits',
      icon: '🎨',
      color: 'bg-orange-100 text-orange-800',
      audiences: [
        {
          niche: 'Niche Craft Instruction Manuals',
          primary: 'Hobby crafters seeking specialized techniques',
          demographics: '30-65 year olds, predominantly female (70-80%), craft enthusiasts',
          painPoints: 'Plateau in skills, seeking advanced techniques not widely available',
          psychographics: 'Detail-oriented, patient, appreciation for craftsmanship',
          geographic: 'Strong in USA/Europe; growing interest in Indian urban centers'
        },
        {
          niche: 'Photography Composition Guides',
          primary: 'Amateur photographers seeking professional results',
          demographics: '25-60 year olds, visual arts interest, equipment owners',
          painPoints: 'Technical knowledge without artistic direction, inconsistent results',
          psychographics: 'Visually oriented, seeking creative expression, improvement-focused',
          geographic: 'Universal appeal; smartphone photography growing in all markets'
        },
        {
          niche: 'Creative Business Launch Plans',
          primary: 'Artists and creators monetizing their work',
          demographics: '25-45 year olds, skill-based entrepreneurs, passion-driven',
          painPoints: 'Business knowledge gaps, pricing challenges, marketing uncertainty',
          psychographics: 'Independence-seeking, creative identity, business-curious',
          geographic: 'Strong in established creative economies; emerging in India\'s growing creator economy'
        }
      ]
    },
    {
      id: 'legal-business',
      name: 'Legal & Business',
      icon: '⚖️',
      color: 'bg-indigo-100 text-indigo-800',
      audiences: [
        {
          niche: 'Startup Documentation Packages',
          primary: 'First-time founders and small business owners',
          demographics: '25-45 year olds, entrepreneurial, limited legal budget',
          painPoints: 'Legal complexity, compliance concerns, cost of professional services',
          psychographics: 'Risk-aware, detail-oriented, self-reliant',
          geographic: 'High value across all regions; jurisdiction-specific needs'
        },
        {
          niche: 'Intellectual Property Protection Guides',
          primary: 'Creators, inventors, and digital content producers',
          demographics: '25-50 year olds, innovation-focused, value-protective',
          painPoints: 'Uncertainty about rights, fear of idea theft, complex legal systems',
          psychographics: 'Ownership-minded, cautious, seeking practical protection',
          geographic: 'Strong in USA; growing awareness in India\'s creative sectors'
        },
        {
          niche: 'Freelance Contract Templates',
          primary: 'Independent contractors and service providers',
          demographics: '25-45 year olds, self-employed, client relationship-focused',
          painPoints: 'Payment security, scope creep, legal protection without complexity',
          psychographics: 'Professional, boundary-conscious, relationship-oriented',
          geographic: 'Universal need; jurisdiction-specific legal requirements'
        }
      ]
    },
    {
      id: 'specialized-knowledge',
      name: 'Specialized Knowledge',
      icon: '🔍',
      color: 'bg-red-100 text-red-800',
      audiences: [
        {
          niche: 'Pet Training Protocols',
          primary: 'New pet owners and those with behavioral challenges',
          demographics: '25-55 year olds, urban dwellers, treat pets as family',
          painPoints: 'Specific behavioral issues, limited space constraints, time pressure',
          psychographics: 'Nurturing, patient, seeking humane methods',
          geographic: 'Strong in USA/Europe; growing pet ownership in Indian middle class'
        },
        {
          niche: 'Home Improvement Project Plans',
          primary: 'DIY enthusiasts and new homeowners',
          demographics: '30-55 year olds, property owners, hands-on personality',
          painPoints: 'Technical knowledge gaps, tool selection, project planning',
          psychographics: 'Self-reliant, satisfaction from creation, budget-conscious',
          geographic: 'Strong in USA; growing in European urban centers and Indian housing boom areas'
        },
        {
          niche: 'Sustainable Living Frameworks',
          primary: 'Environmentally conscious consumers',
          demographics: '25-45 year olds, educated, urban, values-driven',
          painPoints: 'Overwhelm about where to start, practical implementation challenges',
          psychographics: 'Environmentally responsible, future-focused, community-minded',
          geographic: 'Established in Europe; growing rapidly in USA and urban India'
        }
      ]
    }
  ]

  const [activeCategory, setActiveCategory] = useState(categories[0])

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Audience Targeting Strategies</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Detailed audience profiles for each niche to help you create targeted marketing campaigns and tailored content
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-0 bg-white shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto py-4">
            <div className="flex space-x-4 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory.id === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Category Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div id={activeCategory.id} className="scroll-mt-24">
          <div className={`p-6 rounded-lg mb-8 ${activeCategory.color.split(' ')[0]} bg-opacity-30`}>
            <div className="flex items-center mb-4">
              <div className={`text-4xl mr-4 ${activeCategory.color.split(' ')[1]}`}>{activeCategory.icon}</div>
              <h2 className="text-2xl md:text-3xl font-bold">{activeCategory.name} Audiences</h2>
            </div>
            <p className="text-gray-700 text-lg">
              Understanding your target audience is crucial for creating effective digital handbooks. 
              Below are detailed audience profiles for each niche in the {activeCategory.name.toLowerCase()} category.
            </p>
          </div>

          <div className="space-y-12">
            {activeCategory.audiences.map((audience, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className={`p-4 ${activeCategory.color}`}>
                  <h3 className="font-bold text-xl">{audience.niche}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <Users className="h-5 w-5 mr-2 text-blue-600" />
                          <h4 className="font-semibold text-lg">Primary Audience</h4>
                        </div>
                        <p className="text-gray-800">{audience.primary}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <h4 className="font-semibold text-lg">Demographics</h4>
                        </div>
                        <p className="text-gray-800">{audience.demographics}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-2">
                          <Target className="h-5 w-5 mr-2 text-blue-600" />
                          <h4 className="font-semibold text-lg">Pain Points</h4>
                        </div>
                        <p className="text-gray-800">{audience.painPoints}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          <h4 className="font-semibold text-lg">Psychographics</h4>
                        </div>
                        <p className="text-gray-800">{audience.psychographics}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <h4 className="font-semibold text-lg">Geographic Considerations</h4>
                        </div>
                        <p className="text-gray-800">{audience.geographic}</p>
                      </div>
                      
                      <div className="pt-4">
                        <Link 
                          href={`/categories#${activeCategory.id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                        >
                          View {audience.niche} Business Ideas <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Target Your Perfect Audience?</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Learn how to monetize these niches with our proven pricing strategies and implementation guide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/monetization" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium flex items-center justify-center"
            >
              Monetization Strategies <DollarSign className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/implementation" 
              className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-md font-medium flex items-center justify-center"
            >
              Implementation Guide <BarChart4 className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudiencePage
