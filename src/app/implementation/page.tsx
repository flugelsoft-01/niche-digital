'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, DollarSign, BarChart4, Laptop, Megaphone, Users, Clock } from 'lucide-react'

const ImplementationPage = () => {
  // Tabs for different implementation sections
  const tabs = [
    { id: 'tech-stack', name: 'Tech Stack', icon: <Laptop className="h-5 w-5" /> },
    { id: 'marketing', name: 'Marketing', icon: <Megaphone className="h-5 w-5" /> },
    { id: 'scaling', name: 'Scaling', icon: <BarChart4 className="h-5 w-5" /> },
    { id: 'timeline', name: 'Timeline', icon: <Clock className="h-5 w-5" /> }
  ]

  const [activeTab, setActiveTab] = useState(tabs[0])

  // Content for each tab
  const tabContent = {
    'tech-stack': {
      title: 'Tech Stack Recommendations',
      description: 'The right tools and technologies to create and deliver your digital handbooks efficiently.',
      content: [
        {
          title: 'Website Creation',
          sections: [
            {
              subtitle: 'Simple One-Page Website Options',
              points: [
                'Carrd.co: Ideal for single-page sites with payment integration ($19/year Pro plan)',
                'Gumroad: All-in-one platform with built-in payment processing and delivery (5% + $0.30 per transaction)',
                'ConvertKit Commerce: Email platform with sales pages (5% transaction fee)',
                'WordPress + Elementor: More customizable option for scaling ($60-100 setup)',
                'Webflow: Design-focused option with powerful capabilities ($16-36/month)'
              ]
            },
            {
              subtitle: 'Key Features to Include',
              points: [
                'Mobile-responsive design (60%+ of purchases may come from mobile)',
                'Fast loading speed (under 3 seconds)',
                'Secure payment processing',
                'Clear call-to-action buttons',
                'Email capture for non-buyers',
                'Testimonial display section (once collected)',
                'FAQ section addressing common objections'
              ]
            }
          ]
        },
        {
          title: 'PDF Creation Tools',
          sections: [
            {
              subtitle: 'Design Software Options',
              points: [
                'Canva Pro: User-friendly with templates ($119.99/year)',
                'Affinity Publisher: One-time purchase alternative to InDesign ($69.99)',
                'Google Slides: Free option with PDF export capability',
                'Microsoft PowerPoint: Familiar interface with good design capabilities',
                'Adobe InDesign: Professional option for complex layouts ($20.99/month)'
              ]
            },
            {
              subtitle: 'PDF Enhancement Tools',
              points: [
                'Smallpdf: Compress, merge, and edit PDFs ($108/year)',
                'PDF Expert: Advanced PDF editing (Mac only, $79.99)',
                'Adobe Acrobat Pro: Industry standard for interactive PDFs ($14.99/month)',
                'Sejda PDF: Free basic PDF editing with paid upgrades'
              ]
            }
          ]
        },
        {
          title: 'Email Delivery Systems',
          sections: [
            {
              subtitle: 'Email Service Providers',
              points: [
                'ConvertKit: Ideal for creators with automation features ($9-25/month)',
                'MailerLite: Affordable option with good deliverability ($10-20/month)',
                'Flodesk: Flat-rate pricing regardless of subscriber count ($38/month)',
                'ActiveCampaign: Advanced automation capabilities ($29-49/month)'
              ]
            },
            {
              subtitle: 'Digital Product Delivery Platforms',
              points: [
                'SendOwl: Specialized in digital product delivery ($15/month)',
                'ThriveCart: One-time payment with affiliate management ($495-690)',
                'Payhip: Low fees with PDF stamping capability (0-5% commission)',
                'Lemonsqueezy: Modern checkout experience (5% + $0.50 per transaction)'
              ]
            }
          ]
        },
        {
          title: 'PDF Creation Best Practices',
          sections: [
            {
              subtitle: 'Design Guidelines',
              points: [
                'Use consistent, readable fonts (11-14pt for body text)',
                'Implement clear hierarchy with headings and subheadings',
                'Include ample white space (1.15-1.5 line spacing)',
                'Create scannable content with bullet points and numbered lists',
                'Use color strategically for emphasis and organization',
                'Include page numbers and a table of contents for guides over 15 pages'
              ]
            },
            {
              subtitle: 'Content Organization',
              points: [
                'Begin with quick wins to build momentum',
                'Place most valuable content in the first third',
                'Use progressive disclosure for complex topics',
                'Include implementation checklists after each section',
                'Add "Next Steps" prompts throughout the document',
                'Conclude with resource lists and further reading'
              ]
            }
          ]
        }
      ]
    },
    'marketing': {
      title: 'Marketing Strategies',
      description: 'Effective approaches to promote your digital handbooks and reach your target audience.',
      content: [
        {
          title: 'Content Marketing Approach',
          sections: [
            {
              subtitle: 'Blog Content Strategy',
              points: [
                'Create 5-10 cornerstone articles addressing main pain points',
                'Develop "teaser" content that demonstrates expertise',
                'Share case studies and success stories',
                'Publish comparison guides (free vs. paid solutions)',
                'Maintain publishing calendar (1-2 posts weekly)'
              ]
            },
            {
              subtitle: 'Social Media Focus',
              points: [
                'Choose 1-2 platforms where target audience is most active',
                'Share visual previews of guide contents',
                'Post testimonials and success stories',
                'Create carousel posts with key takeaways',
                'Develop before/after transformation content'
              ]
            }
          ]
        },
        {
          title: 'Email Marketing Tactics',
          sections: [
            {
              subtitle: 'List Building Strategies',
              points: [
                'Offer free mini-guide related to paid product',
                'Create valuable quiz with results delivered by email',
                'Host webinar with complementary content',
                'Develop free worksheet or template as lead magnet',
                'Implement exit-intent popup with strong offer'
              ]
            },
            {
              subtitle: 'Email Sequence Design',
              points: [
                'Welcome sequence (3-5 emails establishing expertise)',
                'Problem-agitation sequence (3 emails highlighting pain points)',
                'Solution presentation (2-3 emails introducing guide as solution)',
                'Objection handling emails (2 emails addressing common concerns)',
                'Closing sequence with time-limited bonuses (2 emails)'
              ]
            }
          ]
        },
        {
          title: 'Paid Advertising Approach',
          sections: [
            {
              subtitle: 'Platform Selection',
              points: [
                'Facebook/Instagram: Detailed demographic targeting',
                'Google Ads: Target specific search intent',
                'Pinterest: Ideal for visual, aspirational topics',
                'LinkedIn: Best for professional and business topics',
                'YouTube: Effective for demonstration-based topics'
              ]
            },
            {
              subtitle: 'Budget Allocation',
              points: [
                'Start with $10-20/day testing budget',
                'Focus 80% on best-performing audience segments',
                'Allocate 20% to testing new audiences',
                'Calculate maximum customer acquisition cost based on LTV',
                'Implement retargeting to website visitors (typically 3-5x higher conversion)'
              ]
            }
          ]
        },
        {
          title: 'Customer Experience Optimization',
          sections: [
            {
              subtitle: 'Purchase Process',
              points: [
                'Limit form fields to essential information only',
                'Offer multiple payment options',
                'Display security badges and guarantees',
                'Implement one-click upsells',
                'Send immediate purchase confirmation',
                'Redirect to valuable thank you page with next steps'
              ]
            },
            {
              subtitle: 'Delivery Experience',
              points: [
                'Send PDF via both email and download page link',
                'Include clear instructions for saving and using the file',
                'Provide access to any bonus materials',
                'Add personal touch with thank you video or message',
                'Include surprise bonus element not mentioned in sales page'
              ]
            }
          ]
        }
      ]
    },
    'scaling': {
      title: 'Scaling and Expansion',
      description: 'Strategies to grow your digital handbook business beyond the initial product.',
      content: [
        {
          title: 'Product Line Expansion',
          sections: [
            {
              subtitle: 'Horizontal Expansion',
              points: [
                'Create complementary guides addressing related topics',
                'Develop specialized versions for different segments',
                'Offer region-specific adaptations (USA, India, Europe)',
                'Create seasonal or timely variations',
                'Develop "next step" advanced guides'
              ]
            },
            {
              subtitle: 'Format Diversification',
              points: [
                'Transform popular guides into video courses',
                'Create audio versions for on-the-go consumption',
                'Develop companion mobile apps for interactive elements',
                'Offer print-on-demand physical versions',
                'Create software tools that complement guide content'
              ]
            }
          ]
        },
        {
          title: 'Business Operations Scaling',
          sections: [
            {
              subtitle: 'Automation Implementation',
              points: [
                'Set up automated email sequences for all stages',
                'Create standard operating procedures (SOPs) for repetitive tasks',
                'Implement customer service chatbots for common questions',
                'Use scheduling tools for social media content',
                'Develop templates for regular business processes'
              ]
            },
            {
              subtitle: 'Team Expansion Considerations',
              points: [
                'Start with freelancers for specialized tasks (design, editing)',
                'Consider virtual assistant for customer service (5-10 hours/week)',
                'Hire subject matter experts for content expansion',
                'Work with marketing specialist once reaching $3-5K monthly revenue',
                'Maintain lean operation with project-based contractors'
              ]
            }
          ]
        },
        {
          title: 'Financial Management',
          sections: [
            {
              subtitle: 'Revenue Tracking',
              points: [
                'Set up separate business banking account',
                'Implement proper accounting system from day one',
                'Track key metrics (conversion rate, average order value, refund rate)',
                'Monitor customer acquisition cost by channel',
                'Set aside percentage of revenue for taxes and reinvestment'
              ]
            },
            {
              subtitle: 'Reinvestment Strategy',
              points: [
                'Allocate 20-30% of profit to marketing expansion',
                'Invest 15-20% in product improvement and updates',
                'Reserve 10-15% for testing new product ideas',
                'Save 10% for unexpected opportunities or challenges',
                'Consider profit first methodology for sustainable growth'
              ]
            }
          ]
        },
        {
          title: 'Common Pitfalls and Solutions',
          sections: [
            {
              subtitle: 'Content Development Challenges',
              points: [
                'Pitfall: Creating overly general content that doesn\'t solve specific problems',
                'Solution: Focus on narrow, specific pain points with actionable solutions',
                'Pitfall: Perfectionism leading to delayed launch',
                'Solution: Embrace "good enough to ship" mentality with planned improvement cycles',
                'Pitfall: Content that looks unprofessional or poorly designed',
                'Solution: Invest in Canva Pro templates or hire affordable designer from Fiverr/Upwork'
              ]
            },
            {
              subtitle: 'Marketing Obstacles',
              points: [
                'Pitfall: Trying to be on all social platforms simultaneously',
                'Solution: Master one platform where audience is most active before expanding',
                'Pitfall: Ineffective paid advertising due to poor targeting',
                'Solution: Start with retargeting campaigns and expand to lookalike audiences',
                'Pitfall: Low conversion rates on sales page',
                'Solution: Implement A/B testing on headline, price points, and guarantee terms'
              ]
            }
          ]
        }
      ]
    },
    'timeline': {
      title: 'Implementation Timeline',
      description: 'A step-by-step timeline to launch and grow your digital handbook business.',
      content: [
        {
          title: 'Month 1: Foundation Building',
          sections: [
            {
              subtitle: 'Week 1: Research and Validation',
              points: [
                'Research and validate specific niche selection',
                'Identify target audience pain points',
                'Analyze competition and pricing benchmarks',
                'Outline guide content and unique selling points',
                'Determine initial pricing strategy'
              ]
            },
            {
              subtitle: 'Week 2: Content Creation',
              points: [
                'Create first PDF guide draft',
                'Design basic branding (logo, colors, fonts)',
                'Develop supplementary materials (worksheets, templates)',
                'Create preview images for marketing',
                'Finalize PDF with proper formatting and design'
              ]
            },
            {
              subtitle: 'Week 3: Website Setup',
              points: [
                'Select and register domain name',
                'Choose website platform based on needs',
                'Set up one-page website with sales copy',
                'Implement payment processing',
                'Test purchase flow and fix any issues'
              ]
            },
            {
              subtitle: 'Week 4: Delivery System',
              points: [
                'Set up email delivery system',
                'Create automated email sequences',
                'Implement follow-up emails with usage tips',
                'Test delivery system thoroughly',
                'Create customer support process'
              ]
            }
          ]
        },
        {
          title: 'Month 2: Launch and Initial Marketing',
          sections: [
            {
              subtitle: 'Week 1: Content Marketing',
              points: [
                'Develop 3-5 cornerstone blog articles',
                'Create social media profiles on target platforms',
                'Prepare initial social media content calendar',
                'Develop lead magnet for list building',
                'Set up email opt-in forms and sequences'
              ]
            },
            {
              subtitle: 'Week 2: Lead Generation',
              points: [
                'Launch lead magnet to build email list',
                'Begin publishing blog content',
                'Start social media content publishing',
                'Reach out to relevant communities',
                'Implement SEO basics for website'
              ]
            },
            {
              subtitle: 'Week 3: Initial Promotion',
              points: [
                'Announce launch to personal network',
                'Offer early-bird pricing or bonuses',
                'Reach out to complementary businesses',
                'Participate in relevant online communities',
                'Collect initial customer feedback'
              ]
            },
            {
              subtitle: 'Week 4: Paid Marketing Test',
              points: [
                'Set up small test budget for paid advertising',
                'Create and test different ad variations',
                'Implement conversion tracking',
                'Analyze initial results and optimize',
                'Scale successful ad campaigns'
              ]
            }
          ]
        },
        {
          title: 'Month 3: Optimization and Expansion',
          sections: [
            {
              subtitle: 'Week 1: Data Analysis',
              points: [
                'Analyze initial sales data',
                'Review customer feedback and testimonials',
                'Identify conversion bottlenecks',
                'Assess marketing channel effectiveness',
                'Plan improvements based on data'
              ]
            },
            {
              subtitle: 'Week 2: Product Improvement',
              points: [
                'Update guide based on customer feedback',
                'Improve sales page copy and design',
                'Enhance email sequences',
                'Add testimonials to website',
                'Optimize pricing if needed'
              ]
            },
            {
              subtitle: 'Week 3: Marketing Expansion',
              points: [
                'Expand content marketing efforts',
                'Develop partnership and affiliate opportunities',
                'Create case studies from early customers',
                'Implement retargeting campaigns',
                'Explore new marketing channels'
              ]
            },
            {
              subtitle: 'Week 4: Product Expansion',
              points: [
                'Begin development of second complementary guide',
                'Create bundle offerings with existing product',
                'Plan subscription or membership options',
                'Develop upsell and cross-sell strategy',
                'Test new product ideas with audience'
              ]
            }
          ]
        },
        {
          title: 'Month 4-6: Scaling Phase',
          sections: [
            {
              subtitle: 'Key Milestones',
              points: [
                'Implement affiliate program for expanded reach',
                'Develop bundle offerings with established products',
                'Scale successful marketing channels',
                'Create systematic approach to customer testimonial collection',
                'Begin testing new niches or audience segments',
                'Establish standard operating procedures for all business processes',
                'Implement analytics dashboard for business metrics',
                'Develop long-term content calendar',
                'Create customer loyalty and referral programs',
                'Plan for team expansion as needed'
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Implementation Guide</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Step-by-step guidance to execute your digital handbook business from setup to scaling
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
            
            <div className="space-y-10">
              {tabContent[activeTab.id].content.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-6 text-blue-800 pb-2 border-b border-blue-100">{section.title}</h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {section.sections.map((subsection, i) => (
                      <div key={i} className="bg-blue-50 rounded-lg p-6">
                        <h4 className="font-medium text-blue-700 mb-3">{subsection.subtitle}</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          {subsection.points.map((point, j) => (
                            <li key={j}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Metrics and Evaluation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Track these key performance indicators to measure the success of your digital handbook business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Traffic Metrics</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Website visitors (aim for 1,000+ monthly within 3 months)</li>
                <li>Traffic sources (identify top 3 converting channels)</li>
                <li>Time on page (2+ minutes indicates interest)</li>
                <li>Bounce rate (under 65% is good for single-page sites)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Conversion Metrics</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Email opt-in rate (aim for 25-40% on targeted lead magnets)</li>
                <li>Sales page conversion rate (2-5% is healthy for cold traffic)</li>
                <li>Email sequence conversion rate (5-15% from subscribers)</li>
                <li>Upsell acceptance rate (15-30% indicates good offer match)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BarChart4 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Financial Benchmarks</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Break even on initial product creation within 60 days</li>
                <li>Achieve 30%+ profit margin after all expenses</li>
                <li>Reach $1,000 monthly revenue within 6 months</li>
                <li>Maintain customer acquisition cost at 1/3 of customer lifetime value</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Launch Your Digital Handbook Business?</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Explore our niche ideas, audience targeting strategies, and monetization approaches to create your successful business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/categories" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium flex items-center justify-center"
            >
              Explore Niches <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/monetization" 
              className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-md font-medium flex items-center justify-center"
            >
              Monetization Strategies <DollarSign className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImplementationPage
