'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, DollarSign, Users, BarChart4, Lightbulb } from 'lucide-react'

const CategoriesPage = () => {
  const categories = [
    {
      id: 'health-wellness',
      name: 'Health & Wellness',
      icon: '🧘‍♀️',
      color: 'bg-green-100 text-green-800',
      description: 'The health and fitness industry was valued at $112.17 billion last year, with continuous growth expected as consumers increasingly prioritize wellbeing.',
      niches: [
        {
          title: 'Specialized Fitness Guides',
          audience: 'Adults 35-65 with specific limitations or goals',
          example: '"Office Warrior: The Desk-Bound Professional\'s 15-Minute Fitness Solution"',
          pricing: '$19-29 (USA), ₹299-999 (India), €15-25 (Europe)',
          usp: 'Exercises require no equipment and can be done discreetly in an office environment'
        },
        {
          title: 'Condition-Specific Nutrition Plans',
          audience: 'Individuals managing chronic health conditions',
          example: '"The PCOS Plate: 30-Day Hormone-Balancing Meal Blueprint"',
          pricing: '$24-39 (USA), ₹499-1499 (India), €19-34 (Europe)',
          usp: 'Includes both vegetarian and non-vegetarian options with region-specific ingredient substitutions'
        },
        {
          title: 'Mental Wellness Toolkits',
          audience: 'Stress-prone professionals and students',
          example: '"The Anxiety Antidote: Practical Tools for Busy Minds"',
          pricing: '$19-34 (USA), ₹399-1299 (India), €17-29 (Europe)',
          usp: 'Techniques categorized by situation (work, public, home) and time available (1, 5, or 15 minutes)'
        }
      ]
    },
    {
      id: 'personal-finance',
      name: 'Personal Finance',
      icon: '💰',
      color: 'bg-yellow-100 text-yellow-800',
      description: 'Financial education products remain in high demand across all regions, with particular growth in specialized niches that address specific financial challenges or goals.',
      niches: [
        {
          title: 'Country-Specific Tax Optimization Guides',
          audience: 'Self-employed professionals and small business owners',
          example: '"The American Freelancer\'s Tax Playbook"',
          pricing: '$39-79 (USA), ₹999-2999 (India), €29-69 (Europe)',
          usp: 'Potential ROI of hundreds or thousands in tax savings'
        },
        {
          title: 'Niche Investment Starter Guides',
          audience: 'Young professionals beginning investment journey',
          example: '"Sustainable Investing Starter Kit"',
          pricing: '$29-59 (USA), ₹799-2499 (India), €24-49 (Europe)',
          usp: 'Focuses on accessible entry points with minimal starting capital requirements'
        },
        {
          title: 'Financial Independence Roadmaps',
          audience: 'FIRE movement enthusiasts and lifestyle optimizers',
          example: '"FIRE in India: The Tech Professional\'s Path to Early Financial Freedom"',
          pricing: '$39-69 (USA), ₹999-2999 (India), €34-59 (Europe)',
          usp: 'Region-specific strategies addressing local economic factors and cultural considerations'
        }
      ]
    },
    {
      id: 'career-development',
      name: 'Career Development',
      icon: '💼',
      color: 'bg-blue-100 text-blue-800',
      description: 'With rapidly changing job markets and increasing career transitions, specialized guides that help professionals navigate specific career challenges show strong demand.',
      niches: [
        {
          title: 'Industry-Specific Resume Templates',
          audience: 'Job seekers and career changers',
          example: '"The Tech Resume Blueprint"',
          pricing: '$19-39 (USA), ₹499-1499 (India), €17-34 (Europe)',
          usp: 'Templates tested against major tech company ATS systems with success rate data'
        },
        {
          title: 'Remote Work Productivity Systems',
          audience: 'Remote workers and digital nomads',
          example: '"The Digital Nomad Productivity Playbook"',
          pricing: '$24-44 (USA), ₹599-1799 (India), €19-39 (Europe)',
          usp: 'Includes specific adaptations for different environments (cafes, co-working spaces, hotels)'
        },
        {
          title: 'Career Transition Roadmaps',
          audience: 'Professionals seeking industry or role changes',
          example: '"Teacher to Tech: The Educator\'s Guide to Breaking Into Technology Careers"',
          pricing: '$29-59 (USA), ₹799-2499 (India), €24-49 (Europe)',
          usp: 'Includes testimonials and case studies from successful career changers'
        }
      ]
    },
    {
      id: 'digital-skills',
      name: 'Digital Skills',
      icon: '💻',
      color: 'bg-purple-100 text-purple-800',
      description: 'As digital transformation accelerates across industries, practical guides that help people develop specific digital skills continue to see strong demand.',
      niches: [
        {
          title: 'Platform-Specific Content Creation Guides',
          audience: 'Content creators and small business marketers',
          example: '"Instagram Reels Mastery"',
          pricing: '$29-49 (USA), ₹799-1999 (India), €24-44 (Europe)',
          usp: 'Includes industry-specific content ideas for 10 different business categories'
        },
        {
          title: 'No-Code App Development Tutorials',
          audience: 'Entrepreneurs and non-technical founders',
          example: '"Launch Your MVP Without Code"',
          pricing: '$39-79 (USA), ₹999-2999 (India), €34-69 (Europe)',
          usp: 'Comparative analysis of when to use each platform based on specific app requirements'
        },
        {
          title: 'AI Tool Implementation Guides',
          audience: 'Professionals seeking productivity enhancements',
          example: '"AI Productivity Accelerator"',
          pricing: '$34-69 (USA), ₹899-2499 (India), €29-59 (Europe)',
          usp: 'Focuses on practical, immediate implementation rather than theoretical applications'
        }
      ]
    },
    {
      id: 'lifestyle-relationships',
      name: 'Lifestyle & Relationships',
      icon: '❤️',
      color: 'bg-pink-100 text-pink-800',
      description: 'Guides that help people navigate personal relationships and lifestyle challenges remain consistently popular, with particular growth in culturally-specific content.',
      niches: [
        {
          title: 'Cultural Dating Guides',
          audience: 'Singles navigating dating apps and cross-cultural relationships',
          example: '"Dating App Success in Europe"',
          pricing: '$19-39 (USA), ₹499-1499 (India), €17-34 (Europe)',
          usp: 'Written specifically for expatriates navigating unfamiliar dating cultures'
        },
        {
          title: 'Communication Frameworks for Couples',
          audience: 'Committed couples seeking relationship improvement',
          example: '"The Conflict Resolution Blueprint"',
          pricing: '$24-44 (USA), ₹599-1799 (India), €19-39 (Europe)',
          usp: 'Includes specific adaptations for different communication styles and relationship dynamics'
        },
        {
          title: 'Relocation Checklists',
          audience: 'Expatriates and domestic migrants',
          example: '"The American Expat\'s Guide to Moving to India"',
          pricing: '$29-59 (USA), ₹799-2499 (India), €24-49 (Europe)',
          usp: 'Combines practical logistics with cultural adaptation strategies'
        }
      ]
    },
    {
      id: 'creative-pursuits',
      name: 'Creative Pursuits',
      icon: '🎨',
      color: 'bg-orange-100 text-orange-800',
      description: 'Specialized creative guides that help hobbyists advance beyond basic techniques show strong demand, particularly as people seek meaningful leisure activities.',
      niches: [
        {
          title: 'Niche Craft Instruction Manuals',
          audience: 'Hobby crafters seeking specialized techniques',
          example: '"Advanced Amigurumi Techniques"',
          pricing: '$19-39 (USA), ₹499-1499 (India), €17-34 (Europe)',
          usp: 'Bridges the gap between basic tutorials and professional-level techniques'
        },
        {
          title: 'Photography Composition Guides',
          audience: 'Amateur photographers seeking professional results',
          example: '"Architectural Photography Composition"',
          pricing: '$24-44 (USA), ₹599-1799 (India), €19-39 (Europe)',
          usp: 'Includes smartphone-specific techniques alongside DSLR/mirrorless approaches'
        },
        {
          title: 'Creative Business Launch Plans',
          audience: 'Artists and creators monetizing their work',
          example: '"The Etsy Shop Launch System"',
          pricing: '$34-69 (USA), ₹899-2499 (India), €29-59 (Europe)',
          usp: 'Includes specific strategies for standing out in saturated categories'
        }
      ]
    },
    {
      id: 'legal-business',
      name: 'Legal & Business',
      icon: '⚖️',
      color: 'bg-indigo-100 text-indigo-800',
      description: 'Affordable legal and business document templates represent a high-value opportunity, as they provide significant cost savings compared to professional services.',
      niches: [
        {
          title: 'Startup Documentation Packages',
          audience: 'First-time founders and small business owners',
          example: '"The Indian Startup Legal Toolkit"',
          pricing: '$49-99 (USA), ₹1499-4999 (India), €39-89 (Europe)',
          usp: 'All templates vetted by legal professionals with startup experience'
        },
        {
          title: 'Intellectual Property Protection Guides',
          audience: 'Creators, inventors, and digital content producers',
          example: '"The Creator\'s IP Protection System"',
          pricing: '$39-79 (USA), ₹999-2999 (India), €34-69 (Europe)',
          usp: 'Practical, accessible approach focused on digital content rather than traditional IP'
        },
        {
          title: 'Freelance Contract Templates',
          audience: 'Independent contractors and service providers',
          example: '"The European Freelancer\'s Contract Kit"',
          pricing: '$39-79 (USA), ₹999-2999 (India), €34-69 (Europe)',
          usp: 'Addresses region-specific regulatory requirements with compliant templates'
        }
      ]
    },
    {
      id: 'specialized-knowledge',
      name: 'Specialized Knowledge',
      icon: '🔍',
      color: 'bg-red-100 text-red-800',
      description: 'Highly specialized guides that address specific challenges in niche areas often face less competition while commanding premium prices.',
      niches: [
        {
          title: 'Pet Training Protocols',
          audience: 'New pet owners and those with behavioral challenges',
          example: '"The Apartment Dog Training System"',
          pricing: '$29-59 (USA), ₹799-2499 (India), €24-49 (Europe)',
          usp: 'Specifically addresses the unique challenges of raising dogs in apartments and urban settings'
        },
        {
          title: 'Home Improvement Project Plans',
          audience: 'DIY enthusiasts and new homeowners',
          example: '"Weekend Bathroom Refresh"',
          pricing: '$24-44 (USA), ₹599-1799 (India), €19-39 (Europe)',
          usp: 'Focus on high-visual-impact changes that don\'t require permits or major construction'
        },
        {
          title: 'Sustainable Living Frameworks',
          audience: 'Environmentally conscious consumers',
          example: '"The Zero-Waste Transition Plan"',
          pricing: '$24-44 (USA), ₹599-1799 (India), €19-39 (Europe)',
          usp: 'Realistic, phased approach that acknowledges constraints of time, budget, and living situations'
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Niche Digital Handbook Categories</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Explore our curated collection of low-competition, high-demand niches for your digital handbook business
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
              <h2 className="text-2xl md:text-3xl font-bold">{activeCategory.name}</h2>
            </div>
            <p className="text-gray-700 text-lg">{activeCategory.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {activeCategory.niches.map((niche, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className={`p-4 ${activeCategory.color}`}>
                  <h3 className="font-bold text-xl">{niche.title}</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Target Audience</p>
                    <p className="text-gray-800">{niche.audience}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Example Product</p>
                    <p className="text-gray-800 font-medium">{niche.example}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Pricing Strategy</p>
                    <p className="text-gray-800">{niche.pricing}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Unique Selling Point</p>
                    <p className="text-gray-800">{niche.usp}</p>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Create Your Digital Handbook?</h2>
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

export default CategoriesPage
