'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, DollarSign, BarChart4, Tag, Layers, PieChart, RefreshCw } from 'lucide-react'

const MonetizationPage = () => {
  // Tabs for different monetization sections
  const tabs = [
    { id: 'pricing-models', name: 'Pricing Models', icon: <Tag className="h-5 w-5" /> },
    { id: 'niche-strategies', name: 'Niche Strategies', icon: <Layers className="h-5 w-5" /> },
    { id: 'delivery-tactics', name: 'Delivery Tactics', icon: <RefreshCw className="h-5 w-5" /> },
    { id: 'market-considerations', name: 'Market Considerations', icon: <PieChart className="h-5 w-5" /> }
  ]

  const [activeTab, setActiveTab] = useState(tabs[0])

  // Content for each tab
  const tabContent = {
    'pricing-models': {
      title: 'Core Pricing Models',
      description: 'Choose the right pricing model to maximize revenue and customer satisfaction for your digital handbooks.',
      content: [
        {
          title: 'One-Time Purchase Model',
          description: 'Sell PDF guides for a single upfront payment',
          advantages: [
            'Simple to understand for customers',
            'Immediate revenue realization',
            'No ongoing delivery obligations',
            'Lower customer acquisition cost per sale'
          ],
          pricing: [
            'Basic Guides: $7-19',
            'Comprehensive Guides: $19-49',
            'Premium Specialized Guides: $49-99'
          ],
          bestFor: 'Standalone, comprehensive guides that deliver complete solutions'
        },
        {
          title: 'Tiered Pricing Structure',
          description: 'Offer the same content at different price points with varying levels of detail/support',
          advantages: [
            'Captures different customer budget levels',
            'Creates clear value ladder',
            'Increases average order value'
          ],
          pricing: [
            'Basic: Core PDF guide only ($9)',
            'Standard: PDF guide + templates/worksheets ($19)',
            'Premium: PDF guide + templates + video walkthrough ($39)'
          ],
          bestFor: 'Guides that can be naturally expanded with supplementary materials'
        },
        {
          title: 'Subscription Model',
          description: 'Deliver new or updated guides on a regular schedule for a recurring fee',
          advantages: [
            'Predictable recurring revenue',
            'Higher lifetime customer value',
            'Builds ongoing relationship'
          ],
          pricing: [
            'Monthly: $5-15/month',
            'Quarterly: $15-39/quarter',
            'Annual: $49-149/year'
          ],
          bestFor: 'Topics that need regular updates or can be delivered in a series'
        },
        {
          title: 'Bundle Packages',
          description: 'Group related guides together at a discounted price compared to individual purchase',
          advantages: [
            'Increases average order value',
            'Provides more comprehensive solutions',
            'Creates perception of greater value'
          ],
          pricing: [
            '20-40% discount compared to individual guide prices',
            'Topic Bundles: Related guides on a single subject',
            'Audience Bundles: Various guides targeted to a specific demographic',
            'Complete Collections: All guides in a category'
          ],
          bestFor: 'Expanding sales to existing customers and increasing average order value'
        }
      ]
    },
    'niche-strategies': {
      title: 'Niche-Specific Pricing Strategies',
      description: 'Tailored pricing approaches for different niches based on market research and customer expectations.',
      content: [
        {
          title: 'Health & Wellness',
          approach: 'Value-based pricing tied to comparable services',
          strategy: 'Position guides as affordable alternatives to professional services',
          example: 'A specialized fitness guide at $29 vs. $75+ for a single personal training session',
          upsell: 'Companion meal plans, specialized routines, seasonal updates',
          regional: [
            'USA: Higher price points acceptable ($19-49)',
            'India: Lower entry points with tiered options (₹299-1499)',
            'Europe: Mid-range pricing with emphasis on quality (€15-39)'
          ]
        },
        {
          title: 'Personal Finance',
          approach: 'ROI-based pricing reflecting potential financial benefit',
          strategy: 'Emphasize money saved/earned compared to guide cost',
          example: 'Tax optimization guide at $49 that potentially saves $500+ in taxes',
          upsell: 'Calculator tools, spreadsheet templates, annual updates',
          regional: [
            'USA: Premium pricing for specialized tax/investment guides ($39-99)',
            'India: Focus on growing middle class with accessible pricing (₹499-2999)',
            'Europe: Country-specific versions at differentiated price points (€19-59)'
          ]
        },
        {
          title: 'Career Development',
          approach: 'Investment pricing tied to career advancement potential',
          strategy: 'Position as investment in future earnings potential',
          example: 'Interview preparation guide at $39 that helps secure a job with $10K+ higher salary',
          upsell: 'Resume reviews, industry-specific supplements, coaching sessions',
          regional: [
            'USA: Higher pricing for specialized industry guides ($29-79)',
            'India: Competitive pricing for growing professional class (₹799-2499)',
            'Europe: Mid-range pricing with emphasis on regional workplace norms (€25-69)'
          ]
        },
        {
          title: 'Digital Skills',
          approach: 'Competitive pricing against online courses',
          strategy: 'Position as more actionable and concise than video courses',
          example: 'No-code app development guide at $59 vs. $199+ for typical online course',
          upsell: 'Template libraries, tool recommendation guides, case studies',
          regional: [
            'USA: Premium pricing for cutting-edge topics ($39-89)',
            'India: Tech-focused guides at accessible price points (₹999-3999)',
            'Europe: Mid-to-high pricing with emphasis on practical application (€29-79)'
          ]
        }
      ]
    },
    'delivery-tactics': {
      title: 'Delivery and Monetization Tactics',
      description: 'Optimize your delivery process and implement effective monetization tactics to maximize revenue.',
      content: [
        {
          title: 'Email Delivery Optimization',
          sections: [
            {
              subtitle: 'Instant Delivery Automation',
              points: [
                'Use services like SendOwl, Gumroad, or ThriveCart for instant delivery',
                'Set up automated email sequences with download links and instructions',
                'Include backup access methods in case of email delivery issues'
              ]
            },
            {
              subtitle: 'Email Sequence Enhancement',
              points: [
                'Send immediate delivery email with clear download instructions',
                'Follow up 24 hours later with usage tips and implementation guide',
                'Send 3-day follow-up with FAQ and common implementation challenges',
                'Send 7-day follow-up requesting feedback and offering support'
              ]
            }
          ]
        },
        {
          title: 'One-Page Website Optimization',
          sections: [
            {
              subtitle: 'Conversion-Focused Design Elements',
              points: [
                'Clear, benefit-driven headline addressing specific pain point',
                '3-5 bullet points highlighting key guide contents',
                'Preview images showing inside pages/templates',
                'Testimonials/case studies (once obtained from early customers)',
                'Single, prominent call-to-action button',
                'Money-back guarantee to reduce purchase risk',
                'FAQ section addressing common objections'
              ]
            },
            {
              subtitle: 'Payment Processing',
              points: [
                'Integrate with trusted payment processors (Stripe, PayPal)',
                'Offer multiple payment options including local methods for India',
                'Implement one-click upsells after purchase'
              ]
            }
          ]
        },
        {
          title: 'Upsell and Cross-Sell Strategies',
          sections: [
            {
              subtitle: 'Effective Techniques',
              points: [
                'Order Bump: Offer complementary low-cost addition at checkout (e.g., Add specialized templates for $9)',
                'Post-Purchase Upsell: Offer enhanced version immediately after purchase (e.g., Upgrade to video walkthrough for $19)',
                'Cross-Sell Email Sequence: Promote related guides via follow-up emails',
                'Bundle Discount Offers: Provide special pricing on related guide collections'
              ]
            }
          ]
        },
        {
          title: 'Pricing Psychology Tactics',
          sections: [
            {
              subtitle: 'Psychological Pricing Techniques',
              points: [
                'Charm Pricing: Use prices ending in 7 or 9 ($17, $29, $49)',
                'Anchoring: Show original higher price with discount ($49 $29)',
                'Decoy Pricing: Add third option to make middle option more attractive',
                'Urgency Elements: Limited-time discounts or bonus offers',
                'Scarcity Tactics: Limited spots or editions for premium guides',
                'Value Comparisons: Show cost relative to alternatives (e.g., "Less than a coffee a day")',
                'Price Framing: Break down cost to smallest unit ("Just $1.63 per day")'
              ]
            }
          ]
        }
      ]
    },
    'market-considerations': {
      title: 'Market-Specific Monetization Considerations',
      description: 'Adapt your monetization strategy to different regional markets for maximum effectiveness.',
      content: [
        {
          title: 'USA Market',
          sections: [
            {
              subtitle: 'Market Characteristics',
              points: [
                'Pricing Tolerance: Higher price points acceptable for specialized information',
                'Payment Preferences: Credit cards, PayPal, Apple Pay, Google Pay',
                'Monetization Focus: Premium positioning, upsells, subscription options',
                'Tax Considerations: Sales tax varies by state, use automated tax calculation'
              ]
            }
          ]
        },
        {
          title: 'India Market',
          sections: [
            {
              subtitle: 'Market Characteristics',
              points: [
                'Pricing Tolerance: Price sensitivity requires tiered options with lower entry points',
                'Payment Preferences: UPI, local wallets, net banking, credit/debit cards',
                'Monetization Focus: Volume sales, bundling, mobile-friendly delivery',
                'Tax Considerations: GST implementation, TDS for certain transactions'
              ]
            }
          ]
        },
        {
          title: 'European Market',
          sections: [
            {
              subtitle: 'Market Characteristics',
              points: [
                'Pricing Tolerance: Mid-range pricing with emphasis on quality and specificity',
                'Payment Preferences: Credit cards, local payment methods, bank transfers',
                'Monetization Focus: Country-specific adaptations, GDPR-compliant delivery',
                'Tax Considerations: VAT collection and reporting requirements'
              ]
            }
          ]
        },
        {
          title: 'Testing and Optimization Framework',
          sections: [
            {
              subtitle: 'A/B Testing Strategy',
              points: [
                'Elements to Test: Price points, headlines, guide titles, payment plans, guarantee terms',
                'Implementation: Use simple A/B testing tools or manual time-based testing',
                'Measurement: Track conversion rates, average order value, and total revenue'
              ]
            },
            {
              subtitle: 'Customer Feedback Loop',
              points: [
                'Strategy: Systematically collect and implement pricing feedback',
                'Implementation: Post-purchase surveys, non-buyer feedback, competitor monitoring',
                'Optimization: Adjust pricing based on value perception data'
              ]
            },
            {
              subtitle: 'Seasonal Pricing Strategy',
              points: [
                'Promotional Periods: New Year, back to school, pre-tax season, holidays',
                'Implementation: Create themed bundles and limited-time offers',
                'Discount Strategy: Use bonus additions rather than deep discounts'
              ]
            }
          ]
        }
      ]
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Monetization & Pricing Strategies</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Effective pricing models and monetization tactics to maximize revenue from your digital handbook business
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 bg-white shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto py-4">
            <div className="flex space-x-4 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors flex items-center ${
                    activeTab.id === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div id={activeTab.id} className="scroll-mt-24">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{tabContent[activeTab.id].title}</h2>
            <p className="text-gray-700 text-lg mb-6">{tabContent[activeTab.id].description}</p>
            
            {activeTab.id === 'pricing-models' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {tabContent[activeTab.id].content.map((model, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">{model.title}</h3>
                    <p className="text-gray-700 mb-4">{model.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-blue-700 mb-2">Advantages:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {model.advantages.map((advantage, i) => (
                          <li key={i}>{advantage}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-blue-700 mb-2">Pricing Ranges:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {model.pricing.map((price, i) => (
                          <li key={i}>{price}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Best For:</h4>
                      <p className="text-gray-700">{model.bestFor}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab.id === 'niche-strategies' && (
              <div className="space-y-8">
                {tabContent[activeTab.id].content.map((strategy, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">{strategy.title}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-blue-700 mb-1">Pricing Approach:</h4>
                          <p className="text-gray-700">{strategy.approach}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-blue-700 mb-1">Strategy:</h4>
                          <p className="text-gray-700">{strategy.strategy}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-blue-700 mb-1">Example:</h4>
                          <p className="text-gray-700">{strategy.example}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-blue-700 mb-1">Upsell Opportunities:</h4>
                          <p className="text-gray-700">{strategy.upsell}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-blue-700 mb-1">Regional Considerations:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            {strategy.regional.map((region, i) => (
                              <li key={i}>{region}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab.id === 'delivery-tactics' && (
              <div className="space-y-8">
                {tabContent[activeTab.id].content.map((tactic, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-blue-800">{tactic.title}</h3>
                    
                    <div className="space-y-6">
                      {tactic.sections.map((section, i) => (
                        <div key={i}>
                          <h4 className="font-medium text-blue-700 mb-2">{section.subtitle}</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            {section.points.map((point, j) => (
                              <li key={j}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab.id === 'market-considerations' && (
              <div className="space-y-8">
                {tabContent[activeTab.id].content.map((market, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-blue-800">{market.title}</h3>
                    
                    <div className="space-y-6">
                      {market.sections.map((section, i) => (
                        <div key={i}>
                          <h4 className="font-medium text-blue-700 mb-2">{section.subtitle}</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            {section.points.map((point, j) => (
                              <li key={j}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Implement Your Monetization Strategy?</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Learn how to execute your digital handbook business with our comprehensive implementation guide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/implementation" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium flex items-center justify-center"
            >
              Implementation Guide <BarChart4 className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/categories" 
              className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-md font-medium flex items-center justify-center"
            >
              Explore Niches <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonetizationPage
