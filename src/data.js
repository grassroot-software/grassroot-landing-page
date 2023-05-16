import {FaDatabase} from 'react-icons/fa'
import {GiTiedScroll} from 'react-icons/gi'
import {DiRuby} from 'react-icons/di'

export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About Us",
        path: 'https://learn.grassroot.academy/about'
    },
    {
        name: "Register",
        path: '/signup'
    },
    {
        name: "Login",
        path: 'https://learn.grassroot.academy/sign_in'
    },
    {
        name: "Join students on Discord",
        path: '/discord'
    },
]

export const values = [
    {
        id: 1,
        icon: <GiTiedScroll/>,
        title: "Register",
        desc: "Register on the Grassroot platform to get started."
    },
    // {
    //     id: 2,
    //     icon: <GiTiedScroll/>,
    //     title: "1 on 1 Mentorship",
    //     desc: "Get matched with a personal mentor who works in the industry. Connect with our expert educators in real-time with our live chat service. Ask questions and get detailed feedback and reviews. "
    // },
    {
        id: 2,
        icon: <GiTiedScroll/>,
        title: "Build",
        desc: "Build dozens of portfolio-worthy projects along the way, from simple scripts to full programs and deployed systems, preparing you with skills high in demand in the global job market."
    },
    {
        id: 3,
        icon: <GiTiedScroll/>,
        title: "Verified Certificate",
        desc: "By Studying At Grassroot And Completing The Full-Time Program, You Get A Verified Certificate."
    },
   
]

export const programs = [
    {
        id: 1,
        icon: <DiRuby/>,
        title: "RUBY",
    },
    {
        id: 2,
        icon: <FaDatabase/>,
        title: "DATABASES",
    },
    {
        id: 3,
        icon: <GiTiedScroll/>,
        title: "RUBY ON RAILS",
    },
    {
        id: 4,
        icon: <GiTiedScroll/>,
        title: "JAVASCRIPT",
    },
    {
        id: 5,
        icon: <GiTiedScroll/>,
        title: "INTERMEDIATE HTML AND CSS",
    },
    {
        id: 6,
        icon: <GiTiedScroll/>,
        title: "ADVANCED HTML AND CSS",
    },
    {
        id: 7,
        icon: <GiTiedScroll/>,
        title: "NODEJS",
    },
    {
        id: 8,
        icon: <GiTiedScroll/>,
        title: "GETTING HIRED",
    },
]



export const faqs = [
    {
        id: 1,
        question: "What is a typical outcome after completing Grassroot?",
        answer1: "You may choose to work locally (in your town/city or nearby) which for many is limiting in terms of opportunities and potential pay. However, this can be an important step to get some experience before moving to a remote role. If you choose to focus on working remotely for a foreign company, you may significantly increase your potential salary.",
        answer2: "As for students who are already Working professionals before joining Grassroot, The get an opprtunity to upgrade their skills, scale the professional ladder and enter the portals of Management when they apply the technical and analytical skills gained from Grassroot. The value proposition of our platform is that it helps them not only multiply heir earning manifold bt helps them break the ceiling and offers access to opurtunities for growth."
    },
    {
        id: 2,
        question: "Will I get a certificate once I complete Grassroot?",
        answer1: " Yes, we do provide a certificate upon your completion of Grassroot. However, The best employers out there don't care whether or not you have an 'official' degree. What matters to them is that you know how to get the job done. By studying at Grassroot and completing the full-time program, you will have the technical skills, soft skills, tenacity, and determination that many accredited programs at universities can't provide. Additionally, you'll have a large portfolio of documented projects you built during the training to help showcase your skills. A verified certificate shows that you have successfully passed a Grassroot course in the verified track. A verified certificate from Grassroot can provide proof for an employer, school, or other institution that you have successfully completed an online course. When you pass your course, you'll receive your professional certificate. You can share your certificate with friends, employers and others through an easy-to-share link we provide, or in certain cases stack it towards a larger credent "
    },  
    {
        id: 3,
        question: "How Long does the program take?",
        answer1: "The full-time technical curriculum takes 4 to 5 months. However, since the program a 1 on 1 personal mentor who works in the industry will be assigned to you, the journey is certain to be smooth, fun and interactive."
    },
    {
        id: 4,
        question: "What are the payment terms and options?",
        answer1: "Find out about our available payment terms and options here: 'https://grassroot-landing-page.onrender.com/payments'. Eligible candidate can apply for sponsored placements in the program. "
    },
    {
        id: 5,
        question: "Does Grassroot help me find a job?",
        answer1: "Yes, we will do everything we can to help you find a job. However, we can't apply to, interview, or land jobs for you. You will need to do that work yourself. Our help finding you a job starts from day 1. While you start on the technical curriculum to teach you how to code, you will also start learning the professional skills you need to succeed during your job search. By the end of your first month, you will start learning how to network your way to success. Once you finish the main technical curriculum, we will assign you a dedicated career coach who will be there every step of the way: from prepping your resume, portfolio, and online presence to interviewing practice to helping you with salary negotiation.  "
    },
]



export const testimonials = [
    {
        id: 1,
        name: "Anna Lisberg",
        quote: "Before I started The Grassroot Project I had literally ZERO programming experience. After almost exactly a year of working through the program, I was offered a job as a front end web developer. ",
        job: "Retrocube Technologies, Colorado, USA 🇺🇸",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 2,
        name: "Lucas Khune",
        quote: "The curriculum requires hard work and perseverance, but it's worth it. I walked into my first job and felt instantly comfortable with the tools and technologies my employer required.",
        job: " System Analyst At Synthesis Software Technologies . Johannesburg South Africa 🇿🇦",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 3,
        name: "Amber Mulit",
        quote: "The projects in Grassroot were a perfect mix of difficulty, allowing me to gain exposure to different technologies and feel challenged without feeling overwhelmed.",
        job: "Junior Web Engineer At BlueChip Solutions, Nairobi Kenya 🇰🇪",
        avatar: require("./images/avatar2.jpg")
    },
]
