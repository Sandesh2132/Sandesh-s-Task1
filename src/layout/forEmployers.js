
import './foremployers.css';
import check from '../assets/logos/check.svg'
import google_logo from '../assets/logos/google.png'
import amzn_logo from '../assets/logos/amazon.png'
import microsoft_logo from '../assets/logos/MSFT.svg'
import nokia_logo from '../assets/logos/nokia.png'
import spotify_logo from '../assets/logos/spotify.png'
import ico1 from '../assets/logos/ico1.svg'
import ico2 from '../assets/logos/ico2.svg'
import ico3 from '../assets/logos/ico3.svg'
import ico4 from '../assets/logos/ico4.svg'
import ico5 from '../assets/logos/ico5.svg'
import ico6 from '../assets/logos/ico6.svg'

import upload from '../assets/logos/upload.svg'
import signup from '../assets/logos/signup.svg'
import rewards from '../assets/logos/rewards.svg'

import included from '../assets/logos/included.png';
import notIncluded from '../assets/logos/notincluded.png'

import top_section from '../assets/logos/top_section.png'
import back_btn from '../assets/logos/background_btn.png'

import poster from '../assets/images/poster.png'
import { useState } from 'react';


import AMZN from '../assets/logos/AMZ.png';
import MSFT  from '../assets/logos/MSFT.png';
import GGL from '../assets/logos/GGL.png';

import AMAZON_CARD from '../assets/images/amazon_card.png'
import GOOGLE_CARD from '../assets/images/google_card.png'
import MICROSOFT_CARD from '../assets/images/microsoft_card.png'


export const ForEmpoyers=()=>{
    return(
        <div className="for-employees-container">
            <TopSection/>
            <BrandsSection/>
            <BenefitsSection/>
            <OperateInstructionsSection/>
            <PricingSection/>
            <DownloadNowSection/>
            <TestimonialsSection/>
            <InfoSection/>
            <SuccessStoriesSection/>
            <FAQSection/>
            <RequestAuditSection/>
        </div>
    )
}


const TopSection=()=>{
    return(
        <div className="section-top-container for-employees-card">
            <div className='section-top-background'>
                <img className='top-section-img-btn' src={back_btn}></img>
                <img className='top-section-img' src={top_section}></img>
            </div>
            <div className="section-top-content">
                <div className="section-top-content-text">
                    <div>
                        <div className="section-top-content-header1">Power Up your Hiring</div>
                        <div className="section-top-content-header2">with Rework.</div>
                    </div>
                    <div className="section-top-content-header3">Empower your business with cutting-edge A.I. technology, simplified processes, and top-tier talent connections. Rework is your strategic partner in redefining how you hire </div>
                </div>
                <div>
                    <button className="book-a-demo-btn">Book A Demo</button>
                </div>
                <div className="section-top-content-points-container">
                    <div className="section-top-content-point">
                        <img width="16px" height="16px" src={check}></img>
                        <div>No credit Required</div>
                    </div>
                    <div className="section-top-content-point">
                        <img width="16px" height="16px" src={check}></img>
                        <div>Steamlined Recruitment Process</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BrandsSection=()=>{
    return(
        <div className='brands-section-container'>
            <div className='brands-section-heading'>Hire for 1000+ Brands Including</div>
            <div className='brands-section-logos'>
                <img height="26px" src={google_logo}></img>
                <img height="26px" src={amzn_logo}></img>
                <img height="26px" src={nokia_logo}></img>
                <img height="26px" src={spotify_logo}></img>
                <img height="26px" src={microsoft_logo}></img>
                <img height="26px" src={google_logo}></img>
                <img height="26px" src={amzn_logo}></img>
            </div>
        </div>
    )
}

const BenefitsSection=()=>{
    return(
        <div className='benefits-section-container'>
            <div className='benefits-section-heading'><span>Our Amazing Benefits</span> Helpful For Your Hiring</div>
            <div className='benefits-card-holder'>
                <BenefitCard img={ico1} title1={"60%"} title2={"Cost Reduce"} description={"Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"}></BenefitCard>
                <BenefitCard img={ico2} title1={"50% Faster"} title2={"Recruitment by TAT"} description={"Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"}></BenefitCard>
                <BenefitCard img={ico3} title1={"Highly Contextualized"} title2={"Interview"} description={"Al models generate highly contextualized interviews for the candidates based on your Company profile, Job description and Candidate's CV."}></BenefitCard>
                <BenefitCard img={ico4} title1={"Automated"} title2={"Scheduling"} description={"Email & WhatsApp based communication for interview scheduling with automated reminders."}></BenefitCard>
                <BenefitCard img={ico5} title1={"AI generated Interviews"} title2={"On what matters"} description={"0 manual interventions, completely seamless experience for the candidates."}></BenefitCard>
                <BenefitCard img={ico6} title1={"in-built"} title2={"ATS"} description={"To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon."}></BenefitCard>
            </div>
        </div>
    )
}

const BenefitCard=({img,title1,title2,description,index})=>{
    return(
        <div className='benefit-card-container'> 
            <img width={"45px"} src={img}></img>
            <div className='benefit-card-title'>
                <div className='benefit-card-t1'>{title1}</div>
                <div className='benefit-card-t2'>{title2}</div>
            </div>
            <div className='benefit-card-description'>{description}</div>
        </div>
    )
}

const OperateInstructionsSection=()=>{
    return(
        <div className='operate-section-container'>
            <div className='operate-section-title'><span>How Our System</span> Operates</div>
            <div className='operate-section-card-holders'>
                <div className='operate-section-card'>
                    <img width={"64px"} className='operate-section-card-img-top' src={upload}></img>
                    <div className='operate-section-card-content'>
                        <div className='operate-section-card-content-title' >Upload Docuements</div>
                        <div className='operate-section-card-content-desc'>Shortlist the most qualified candidate and upload their details for the top companies</div>
                    </div>
                </div>
                <div className='operate-section-card pink'>
                    <img width={"64px"} className='operate-section-card-img-bottom' src={signup}></img>
                    <div className='operate-section-card-content'>
                        <div className='operate-section-card-content-title' >Sign Up</div>
                        <div className='operate-section-card-content-desc'>Follow the link below to sign up and get access of the current job postings</div>
                    </div>
                </div>
                <div className='operate-section-card'>
                    <img width={"64px"} className='operate-section-card-img-top'  src={rewards}></img>
                    <div className='operate-section-card-content'>
                        <div className='operate-section-card-content-title' >Get Rewards</div>
                        <div className='operate-section-card-content-desc'>As soon as the candidate gets selected you get your benefits</div>
                    </div>
                </div>
            </div>
            <button className='operate-section-get-started'>Get Started</button>
        </div>
    )
}

const PricingSection=()=>{
    const data = [
        {
            duration:"1 month",
            price:"₹199.00/month",
            title:"Suitable for companies with 5-10 openings",
            points:[
                {
                    title:"10 Interview-ready candidates",
                    included:true
                },
                {
                    title:"Unlimited job postings",
                    included:true
                },
                {
                    title:"Receive pre-vetted profiles within 48 hours",
                    included:true
                },
                {
                    title:"Dedicated account manager",
                    included:false
                },
                {
                    title:"Assistance with interview scheduling",
                    included:false
                },
                {
                    title:"Custom reports",
                    included:false
                }
            ]
        },
        {
            duration:"3 months",
            price:"₹149.00/month",
            dark:true,
            title:"Suitable for companies with 5-10 openings",
            recommended:true,
            points:[
                {
                    title:"10 Interview-ready candidates",
                    included:true
                },
                {
                    title:"Unlimited job postings",
                    included:true
                },
                {
                    title:"Receive pre-vetted profiles within 48 hours",
                    included:true
                },
                {
                    title:"Dedicated account manager",
                    included:false
                },
                {
                    title:"Assistance with interview scheduling",
                    included:false
                },
                {
                    title:"Custom reports",
                    included:false
                }
            ]
        },
        {
            duration:"6 months",
            price:"₹169.00/month",
            title:"Suitable for companies with 5-10 openings",
            points:[
                {
                    title:"10 Interview-ready candidates",
                    included:true
                },
                {
                    title:"Unlimited job postings",
                    included:true
                },
                {
                    title:"Receive pre-vetted profiles within 48 hours",
                    included:true
                },
                {
                    title:"Dedicated account manager",
                    included:false
                },
                {
                    title:"Assistance with interview scheduling",
                    included:false
                },
                {
                    title:"Custom reports",
                    included:false
                }
            ]
        }
    ]
    return(
        <div className='price-section-container'>
            <div className='price-section-title'><span>Choose Your Simple,</span> Transparent Pricing</div>
            <div className='price-section-card-container'>
                {data.map(card => {
                    return <PriceCard duration={card.duration} price={card.price} title={card.title} points={card.points} dark={card?.dark} mostPopular={card.recommended}></PriceCard>
                })}
            </div>
            <div>
            <button className='operate-section-get-started'>Book A Demo</button>
            </div>
        </div>
    )

}
const PriceCard=({duration,price,title,points,dark=false,mostPopular=false})=>{
    return(
        <div className={`price-card-container ${dark ? "dark" : ""}`}>
            {mostPopular ? <div className='most-popular'>Most Popular</div>:null}
            <div className={`price-card-top-section`}>
            <div className={`price-card-duration ${dark ? "dark-theme-fonts" : ""}`}>{duration}</div>
            <div className={`price-card-price ${dark ? "dark-theme-fonts" : ""}`}>{price}</div>
            </div>
            <div className={`price-card-benefits`}>
                <div className={`price-card-title ${dark ? "dark-theme-fonts" : ""}`}>{title}</div>
                <div className='price-card-points-list'>
                    {
                        points && points.map(element => {
                            return (
                                <div className={`price-card-points`}>
                                    <img src={element.included ? included : notIncluded}></img>
                                    <div className={`${dark ? "dark-theme-fonts" : ""}`}>{element.title}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <button className={dark ? 'price-card-btn-light' : 'price-card-btn-dark'}>Get Started</button>
        </div>
    )
}

const DownloadNowSection=()=>{
    return(
        <div className='download-section-container'>
            <div className='download-section-content'>
                <div className='download-section-content-typo'>
                    <div className='download-section-header'><span>Discover the Future of</span> Talent Assessment!</div>
                    <div className='download-section-details'>Facing challenges in traditional hiring? Uncover the costs, pitfalls, and the game-changing role of Generative AI in recruitment.</div>
                    <div className='download-section-points'>
                        <div>🔍 Inside this Whitepaper:</div>
                        <ul>
                            <li>Manual vs. Machine-based hiring: Costs & Challenges.</li>
                            <li>The truth about "Interview as a Service."</li>
                            <li>Generative AI: The simple explanation. Optimize Your Hiring Process Today!</li>
                        </ul>
                    </div>
                </div>
                <button className='price-card-btn-dark'>Download Now for Smarter Recruitment</button>
            </div>
            <div className='download-section-poster-container'>
                <img className='download-section-poster' src={poster}></img>
            </div>
        </div>
    )
}

const TestimonialsSection=()=>{
    let data=[
        {
            name:"Theresa Webb",
            company:"HR Manager, Amazon",
            comments:"“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “",
            image:AMZN
        },
        {
            name:"Savannah Nguyen",
            company:"HR Manager, Microsoft",
            comments:"“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “",
            image:MSFT
        },
        {
            name:"Theresa Webb",
            company:"HR Manager, Amazon",
            comments:"“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “",
            image:AMZN
        },
        {
            name:"Ronald Richards",
            company:"HR Manager, Google",
            comments:"“ Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “",
            image:GGL
        },
        {
            name:"Ronald Richards",
            company:"HR Manager, Google",
            comments:"“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “",
            image:GGL
        },
        {
            name:"Ronald Richards",
            company:"HR Manager, Google",
            comments:"“ Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “",
            image:GGL
        }
    ]
    return(
        <div className='section-container left'>
            <div className='testimonials-text'>
                <div className='testimonials-title'><span>Customer</span> Testimonials</div>
                <div className='download-section-details' >What others has say About Us</div>
            </div>
            <div className='testimonials-cards-holder'>
                {
                    data.map(card=>{
                        return <TestimonialCard name={card.name} company={card.company} comments={card.comments} image={card.image}></TestimonialCard>
                    })
                }
            </div>
        </div>
    )
}

const SuccessStoriesSection=()=>{
    let data = [
        {
            title:"Rework has been a great way to make the hiring process easier and faster.",
            details:"“We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “",
            image:AMAZON_CARD
        },
        {
            title:"Rework has been a great way to make the hiring process easier and faster.",
            details:"“We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “",
            image:GOOGLE_CARD
        },
        {
            title:"Rework has been a great way to make the hiring process easier and faster.",
            details:"“We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “",
            image:MICROSOFT_CARD
        }
    ]
    return(
        <div className='section-container'>
            <div className='download-section-header'><span>Success</span> Stories</div>
            <div className='flex-row gap-16 wrap margin-top-60'>
                {
                    data.map(card=>{
                        return <SuccessCard image={card.image} title={card.title} details={card.details} />
                    })
                }
            </div>
        </div>
    )
}

const InfoSection=()=>{
    return(
        <div className='section-container grey-back'>
            <div className='info-section-container'>
            <div className='info-section-highlight'><span>How Rework AI has been a good</span> Hiring platform for Companies</div>
            <div className='info-section-card-holder'>
                <div className='right-line'>
                    <div className='info-card-highlight'>80%</div>
                    <div className='info-card-details'>Reduction in your recruitment TAT with the access to a wider talent pool on the platform</div>
                </div>
                <div className='right-line'>
                    <div className='info-card-highlight'>50%</div>
                    <div className='info-card-details'>Streamline your budgeting and save money while finding the top candidates</div>
                </div>
                <div className="padding-12">
                    <div className='info-card-highlight'>10k</div>
                    <div className='info-card-details'>Certified sourcing partners' expertise</div>
                </div>
            </div>
            </div>
        </div>
    )
}

const TestimonialCard=({name,company,image,comments})=>{
    return(
        <div className='testimonial-card-container'>
            <div className='testimonial-card-comments'>{comments}</div>
            <div className='testimonial-card-details-container'>
                <div className='testimonial-card-image-container'>
                    <img className='testimonial-card-image' src={image}></img>
                </div>
                <div className='testimonial-card-content-container'>
                    <div className='testimonial-card-name'>{name}</div>
                    <div className='testimonial-card-company'>{company}</div>
                </div>
            </div>
        </div>
    )
}

const SuccessCard=({image,title,details})=>{
    return(
        <div className='sucess-card-container'>
            <div>
                <img src={image}></img>
            </div>
            <div className='sucess-card-content'>
                <div className='dark-fonts weight-500'>{title}</div>
                <div className='light-fonts weight-400'>{details}</div>
            </div>
        </div>
    )
}

const FAQSection=()=>{
    return(
        <div className='section-container grey-back'>
            <div className='download-section-header'><span>Frequently asked</span> Questions</div>
            <div className='download-section-details'>We have Compiled the most commonly asked question about our Platform for your information and to enhance your overall experience.</div>
            <div className='accordion-holder'>
                <Accordion/>
                <Accordion/>
                <Accordion/>
                <Accordion/>
                <Accordion/>
                <Accordion/>
                <Accordion/>
            </div>
        </div>
    )
}

const Accordion=()=>{
    const[expanded,setExpanded] = useState(false);
    const toggleExpand = ()=>{
        setExpanded(!expanded)
    }
    return(
        <div className='accordion-container'>
            <div onClick={toggleExpand} className='accordion-heading'>
                <div>How can I Get started with Rework AI?</div>
                <div>+</div>
            </div>
            {
                expanded ? <div>Lorem ipsum dolor sit amet consectetur. Porta velit ultricies feugiat tortor odio. Scelerisque habitant quam pharetra adipiscing id ipsum et lectus malesuada.</div> : null
            }
        </div>
    )
}

const RequestAuditSection=()=>{
    return(
        <div className='request-audit-section-container'>
            <div className='section-top-content-header1'>Optimize Your Hiring Strategy with Rework's Exclusive Hiring Audit</div>
            <div className='request-audit-text'>Discover the strengths and opportunities in your current hiring process. Our comprehensive Hiring Audit evaluates your strategy, identifies areas for improvement, and tailors a roadmap for success. Elevate your recruitment game with data-driven insights - because the right talent deserves the right approach.</div>
            <div className='request-autdit-btn-container'>
                <button className='price-card-btn-dark'>Request Your Free Hiring Audit</button>
            </div>
        </div>
    )
}