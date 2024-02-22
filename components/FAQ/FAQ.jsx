import Image from "next/image";
import Accordian from "./Accordian";
import faq2 from '@/assets/faq2.jpeg'
import { useState } from "react";

// import bg from "public/assets/landingPage/bg.svg";
// import faqAstro from "public/assets/landingPage/FAQ/faqAstro.svg";

const FAQ = () => {

  const [showAnsNumber, setShowAnsNumber] = useState(-1)
  const handleClick = (id)=>{
    if(id === showAnsNumber){
      setShowAnsNumber(-1);
    }
    else{
      setShowAnsNumber(id);
    }
  }

  const faqs = [
    {
      id: 1,
      q: "What is the purpose of this app?",
      ans: ["To monitor the health and well-being of students, enabling early intervention and improve communication between students, parents, teachers, and medical professionals"]
    },
    {
      id: 2,
      q: "What types of interactive content will be included concerning the student's health?",
      ans: ["Videos and animations: Explaining complex health concepts in an accessible way.Podcasts and audiobooks: Enabling students to learn on their own time and pace.Online quizzes and polls: Assessing understanding and promoting active participation.Collaborative activities: Encouraging students in physical activities and challenges."]
    },
    {
      id: 3,
      q: "How do parents access their child's health information?",
      ans: ["You'll receive a secure login to view your child's health profile, progress reports,and communication from healthcare providers."]
    },
    {
      id: 4,
      q: "How can parents be involved?",
      ans: ["Parent-teacher conferences: Discussing their child's progress in the program.School events and initiatives: Participating in health-related activities and workshops.Supporting healthy habits at home: Reinforcing healthy behaviors learned at school."]
    },
    {
      id: 5,
      q: "What if teachers observe a student experiencing health issues?",
      ans: ["Follow school protocols for emergencies and document your observations in the app for healthcare professionals."]
    },
    {
      id: 6,
      q: "What are the outcomes?",
      ans: ["Equip students with knowledge and skills to make healthy choices about their physical and mental well-being.Foster positive attitudes towards health and encourage lifelong healthy habits.Develop critical thinking skills and problem-solving abilities related to health issues.Promote communication skills through interactive learning activities.Empower students to advocate for their health and the health of others."]
    },
    {
      id: 7,
      q: "How will this address student's health?",
      ans: ["Normalize discussions about health and create a safe space for students to share their experiences.Integrate mindfulness practices and coping mechanisms into daily routines.Provide resources and information through medical practitioners.Train teachers and staff to recognize signs of mental health challenges and offer support."]
    },
    {
      id: 8,
      q: "What are the time and resource requirements for implementation?",
      ans: ["The time and resource requirements will depend on the chosen integration method and the school's resources. The program offers various materials and resources to minimize teacher preparation time, but additional training and support may be needed."]
    },
  ]

  const faqSection = faqs.map((questionObj)=>(
    <Accordian key={questionObj.id} {...questionObj} handleClick={handleClick} showAnsNumber={showAnsNumber}/>
  ))

  return (
    <section className="relative min-h-[80vh] w-full flex justify-center items-center">
      {/* <Image alt="background space image" src={bg} fill className="object-cover z-[-10]" /> */}
      <div className="flex flex-col sm:flex-row gap-10 items-center w-3/4">
        <div className="w-full sm:w-1/2 flex sm:flex-col items-center gap-5 sm:gap-0">
          <div className="w-1/2 sm:w-full">
            <Image src={faq2} alt="healthFAQ" className="pointer-events-none"/>
          </div>
          <div className="">
            <h1 className="text-2xl sm:text-3xl">
              <div>Answers To Some</div>
              <div>Commonly Asked Questions.</div>
            </h1>
          </div>
        </div>
        <div className="w-full sm:w-1/2 h-full flex flex-col gap-2 items-start">
          {faqSection}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
