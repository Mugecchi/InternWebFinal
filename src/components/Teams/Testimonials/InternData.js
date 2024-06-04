import React from "react";
import Testimonial from "./Testimonial";
import Randy from "./Images/RAN.JPG";
import Migs from "../../InternTeam/InternImages/migs.png";
import Adonis from "./Images/ADO.JPG";
import Ben from "./Images/BEN.JPG";
import Angie from "./Images/ANGIE.JPG";
import Ryan from "./Images/RY.JPG";
import Joan from "./Images/JOAN.JPG";
import Joemar from "./Images/JOMS.JPG";
import Andeng from "./Images/ANDENG.JPG";
import Novelyn from "./Images/NOVE.JPG";
import Frenan from "./Images/FRENAN.JPG";
import Frenalyn from "./Images/FRENALYN.JPG";
import Pat from "./Images/PAT.JPG";
import Isah from "./Images/ISAH.JPG";
import ModalExp from "./Modal";
export default function InternData() {
  const data = [
    {
      LastName: "Maranan",
      FirstName: "Adonis",
      NickName: "Ado",
      Quote: (
        <h3>
          "Kung hindi mo alam edi aralin mo, Lahat ng bagay ay ina aral bago
          gawin, maliban kay GPT 🙂"
        </h3>
      ),
      Course: "BS Computer Science ",
      School: "Isabela State University - Echague Campus",
      Introduction: <h2>Hi I'm Adonis, you can call me ado</h2>,
      Testimony:
        "My name is Adonis A. Maranan, and I am currently a Computer Science Student, student at Isabela State, University. I'm currently has on my On-the-Job Training at Radztech, where I need to spent 486 hours working as a Developer in the dev team.",
      Body: (
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;From the moment I started my OJT at
          Radztech, I was welcomed with open arms and provided with the
          resources and support needed to thrive. Initially, I was eager to
          apply the theoretical knowledge I had gained in school, but my
          experience here exceeded my expectations in every way.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;During my time at Radztech, I gained
          valuable hands-on experience in being a help desk and a developer. One
          of the most significant projects I worked on was Search Bar, Org
          Chart, Flowchart, which not only challenged me but also allowed me to
          contribute meaningfully to the team.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;The mentorship and guidance I received from
          my supervisor sir Celso and Renen, and the entire team were
          invaluable. They were always available to answer my questions, provide
          feedback, and encourage me to take on new challenges. This supportive
          environment helped me build confidence and develop my professional
          skills.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;My OJT experience has profoundly impacted
          my career goals. It has solidified my interest in Software Developing
          and inspired me to pursue further opportunities in this area. I am now
          more confident in my abilities and excited about my future career
          path.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;I am incredibly grateful to Radztech for
          providing me with such a rewarding and enriching experience. I would
          highly recommend this organization to any student seeking a
          comprehensive and impactful OJT opportunity.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;Thank you once again to everyone at
          Radztech for making my OJT experience unforgettable.
          <br />
        </p>
      ),
      src: Adonis,
      CardTitle: "",
      CardContent:
        "My OJT experience has profoundly impacted my career goals. It has solidified my interest in Software Developing and inspired me to pursue further opportunities in this area.",
    },
    {
      LastName: "Yamat",
      FirstName: "Benedick",
      NickName: "Ben",
      Quote: (
        <h3>
          "Life is like a bicycle in able to maintain your balance, you must
          keep moving."
        </h3>
      ),
      Course: "BS Computer Science ",
      School: "Isabela State University - Echague Campus",
      Introduction: (
        <h2>
          Greetings, I'm Ben, I'm here to share my journey during my internship
          at RadzTech.
        </h2>
      ),
      Testimony:
        "My RadzTech internship was a dynamic learning experience where I tackled real-world challenges, bonded with mentors and peers, and left with enhanced skills and confidence for my tech career ahead.",
      Body: (
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;During my time at RadzTech Business
          Solutions as a developer intern, I felt like I was on a thrilling
          rollercoaster of learning and growth. From the moment I stepped
          through the door, I was welcomed into a vibrant community of tech
          enthusiasts where curiosity was celebrated, mistakes were learning
          opportunities, and teamwork was key.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;Each day brought new challenges and
          triumphs as I dove headfirst into projects, often feeling the rush of
          excitement when code finally clicked into place after hours of
          debugging. But what truly made my internship special were the
          people—the mentors who patiently guided me through tough coding
          puzzles, the colleagues who became friends, sharing in both the
          victories and the occasional setbacks.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;Looking back, I realize that my time at
          RadzTech wasn't just about learning technical skills; it was about
          discovering my own strengths, building confidence in my abilities, and
          finding my place in the ever-evolving world of software development.
          It's an experience I'll always cherish as I continue on my journey in
          this fascinating field.
        </p>
      ),
      src: Ben,
      CardTitle: "",
      CardContent:
        "An internship is not just about gaining skills; it's about embracing challenges, diving into the code, and discovering the true artistry of development",
    },
    {
      LastName: "Rivera",
      FirstName: "Jon Carlo Miguel",
      Quote: <h3>"Some complex questions have the simplest answers."</h3>,
      Course: "BS Computer Science ",
      School: "Isabela State University - Cauayan Campus",
      Introduction: (
        <h2>
          Hi I am Jon Carlo Miguel C. Rivera, an aspiring Data Analyst am here
          to tell you a testament of my life during my internship in RadzTech.
        </h2>
      ),
      Testimony:
        "I want to take a moment to reflect on my journey with Radztech over the past few months. It has been an incredible experience, one filled with challenges, growth, and ultimately, immense satisfaction.",
      Body: (
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;Starting as an intern, I was uncertain of
          what to expect. However, from the very first day of orientation, I
          knew I was part of something special. Meeting the leaders of Radztech
          and learning about the company's humble beginnings sparked a sense of
          inspiration within me. It was clear that I was joining a team driven
          by innovation and a commitment to excellence. Throughout my
          internship, I had the opportunity to immerse myself in various
          projects and tasks, each one pushing me to expand my skills and
          knowledge. From designing and developing landing pages to tackling
          complex system functionalities, every assignment brought its own set
          of challenges. However, with the guidance of my mentors and the
          support of my colleagues, I embraced each challenge head-on,
          determined to succeed.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;One particular project stands out in my
          mind—the development of the dynamic table component. It was a task
          that tested my abilities and pushed me to think creatively. Despite
          encountering obstacles along the way, I persevered, seeking advice
          when needed and refining my approach until I achieved the desired
          outcome. The sense of accomplishment upon completing the project was
          indescribable, a testament to the power of dedication and teamwork. Of
          course, no journey is without its hurdles. There were moments of
          frustration and doubt, times when progress seemed elusive. Yet, it was
          during these moments that I witnessed the true strength of our team.
          We supported each other, lending a helping hand and offering words of
          encouragement when needed most. Together, we overcame obstacles that
          once seemed insurmountable, emerging stronger and more resilient than
          before.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;As I reflect on my time at Radztech, I am
          filled with gratitude—for the opportunities afforded to me, for the
          lessons learned, and most importantly, for the friendships forged
          along the way. Each day brought new experiences, new challenges, and
          new reasons to be thankful for being part of such a remarkable team.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;Moving forward, I carry with me the lessons
          and memories from my internship at Radztech. They have shaped me into
          a better professional and a better person, instilling within me a
          sense of confidence and determination to face whatever challenges lie
          ahead.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;Thank you, Radztech, for believing in me,
          for challenging me, and for inspiring me to reach new heights. I am
          proud to have been part of this journey, and I look forward to the
          opportunities that lie ahead for us all.
        </p>
      ),
      src: Migs,
      NickName: "Migz",
      CardContent: (
        <p>
          <span style={{ fontWeight: 700 }}>Dr Seuss once said.</span>{" "}
          <span style={{ fontWeight: 700 }}>
            "Sometimes the questions are complicated and the answers are
            simple."
          </span>
          <br />
          for me it means, when you are having a rough time, take a break and
          look at things on a bigger point of view. then and there you might see
          how you'll breakthrough.
        </p>
      ),
      CardTitle: "",
    },
    {
      LastName: "Antalan",
      FirstName: "Randy Jr.",
      NickName: "Ran",
      Quote: <h2>"Accept the Challenge, Push Yourself to the Limit"</h2>,
      Course: "BS Computer Science ",
      School: "Isabela State University - Echague Campus",
      Introduction: <h1>Hi I'm Ran the Fast talker na kabado</h1>,
      Testimony:
        "As an intern at here at RBS it was an great oportunity to be part of this company. Many things happen when I start my internship here. Intenship help me to boost my self confidence. I am grateful to be part of this company even for a short time the things I learn here will become a big help in my future. Throughout this journey I realize many things that I have many things that I need to fix.",
      Body: (
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;Throughout this OJT, I demonstrated
          exceptional dedication, a strong work ethic, and a keen willingness to
          learn. I quickly adapted to our team and contributed significantly to
          several key projects. Their attention to detail and proactive approach
          were truly impressive. I am confident that i will excel in any future
          endeavors and would highly recommend them for any role they pursue.",
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;The internship offered a holistic
          development experience through regular brainstorming sessions, team
          collaborations, and even weekly bible studies. These activities not
          only enhanced my technical expertise but also improved my way on how
          to work with team, ethical values, and a balanced approach to
          professional life.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;I am grateful for the opportunity to have
          been part of such an innovative and supportive team, and I am
          confident that the skills and insights I have acquired will greatly
          benefit my future career.
          <br /> <br />
          Being part of this little company that is continue growing day by day
          it is my pleasure to give my best to this company even i graduate i
          will neber forget the things that happen to me here. The learnings and
          memories that i experience. "Accept the challenge don’t be afraid to
          make a mistake, mistake will taught you a lesson."
        </p>
      ),
      src: Randy,
      CardTitle: "",
      CardContent: (
        <p>
          "Accept the challenge don’t be afraid to make a mistake, mistake will
          taught you a lesson."
        </p>
      ),
    },
    {
      LastName: "Medrano",
      FirstName: "Ma. Andrea Antonette",
      NickName: "Andeng",
      Quote: "",
      Course: "BS Management Accounting",
      School: "Isabela State University - Echague Campus",
      Introduction: (
        <h2>Cold Mysterious Independent Sweet Soft Girl of Isabela, Andrea.</h2>
      ),
      Testimony:
        "If you want it easy and simple, then Radztech is not for you.",
      Body: (
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;I vividly remember I was taking my taxation
          exam when we were offered to join Radztech Business Solutions. We were
          six. My professor's offer gave me an instant relief from all the
          worries I have been thinking about internships. The only thing that
          was running in my mind while I was taking my exam was I'm going to
          take the opportunity. We were told how the brightest students of the
          class are only accepted and how we learn so much from them. Because I
          have failed academically so many times and this kind of recommendation
          comes once in a while, I decided to give it a go. I tried telling my
          friends. I encouraged them to give it a try. I convinced them this
          internship is something worthwhile even if I had no idea what would
          happen next. Their undecided faces and reluctant responses to me had
          me realize that what was a pressure for them is an opportunity to grow
          and improve professionally for me. I just knew that if it's easy,
          everyone would do it. We were six, I conquered alone. &nbsp; &nbsp;
          &nbsp; &nbsp;It felt lonely until Patricia, Angelina, and Joan joined
          me. It felt really great to know that they were applying too.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;I had my documents prepared for the
          application. But I never knew that it would test my patience as my
          fellow classmates had their documents signed and notarized while the
          four of us were waiting for Radztech.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;Radztech did not disappoint. People at
          Radztech welcomed us warmly. So much it felt like I was a member of
          their family. I just know there's something huge waiting for us that
          day and again, Radztech did not disappoint. The trust they gave to
          everyone of us was implicit. Their confidence in us really empowered
          us to do better than what we really measure our capabilities. There
          were no menial tasks like stapling, punching, and stamping papers.
          There were no fetching coffees and running errands for the employees.
          You can never feel clueless and a complete beginner here. You get to
          experience how they really do their work. Your internship here will
          never be a waste of your time and abilities. You are seen as someone
          who has to unlock your own potentials. And Radztech never failed to
          let us know that they want to be part of our professional growth.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;With Radztech Business Solutions, you can
          never feel indifferent and unwanted. You'll get to personally know
          everyone in the office, you'll get to laugh endlessly, you'll
          definitely have to cry your heart openly.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;That being said, do you have the courage
          and will to go beyond?
        </p>
      ),
      src: Andeng,
      CardTitle: "",
      CardContent:
        "If you want it easy and simple, then Radztech may not be for you.",
    },
    {
      LastName: "Aquino",
      FirstName: "Angelina",
      NickName: "Angie",
      Quote: (
        <h3>
          You can’t skip chapters, that’s not how life works. Some chapters will
          make you cry for weeks. You will read things you don’t want to read,
          you will have moments when you don’t want the pages to end. But you
          have to keep going. Live yours, don’t miss out.
          <br />- Courtney Peppernell, Healing the Heart
        </h3>
      ),
      Course: "BS Management Accounting",
      School: "Isabela State University - Echague Campus",
      Introduction: (
        <h2>
          HI! I am Angie. The tahimik pero nakikinig (wink)” My pleasure to
          share my transformative internship experience with you!
        </h2>
      ),
      Testimony:
        "Because of the tasks that caused us stress. Because of the tasks that gave us headaches. Because of the days when we no longer knew which one to prioritize. Because of the tasks that strained our minds. My heart is beyond grateful to our supervisors for letting us be exposed to and involved in the operations of different industries.",
      Body: (
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;Originally, Echague was my first choice for
          my internship but what are the benefits if I went there? I am so proud
          that I decided to continue my internship here at Radztech. This proves
          that my decision was right all along.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;On top of that, my contributions extended
          beyond daily tasks. This internship experience directly relates to my
          academic and career aspirations. I realized the importance of
          adaptability and efficiency in this field of work. I can attest that I
          gained practical and hands-on experience and reinforced the concepts I
          learned (making them more tangible).
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;Looking ahead, I plan to pursue a career in
          the accounting field. This internship program provided me with a solid
          foundation, and I am eager to continue learning and contributing to
          the field.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;In conclusion, my internship at Radztech
          was transformative. It taught me practical skills and allowed me to
          contribute meaningfully. I am grateful for this opportunity and
          excited about the journey ahead.
        </p>
      ),
      src: Angie,
      CardTitle: "",
      CardContent:
        "I have embraced challenges, learned from feedback, and will continuously improve. On top of that, I am immensely grateful for this opportunity and excited about the journey ahead.",
    },
    {
      LastName: "Medina",
      FirstName: "Frenalyn",
      NickName: "Frenalyn",
      Quote: "",
      Course: "BS Management Accounting",
      School: "Isabela State University - Cauayan Campus",
      Introduction: (
        <h2>Hi! I am Frenalyn, join me in my journey at Radztech!</h2>
      ),
      Testimony:
        "My internship at Radztech Business Solutions was an eye-opening experience. A little back story, i was a little afraid of joining the agency especially when we were told about their selection process. I was thinking of not going and just finding another agency. But then I still tried to attend the recruitment thinking I wouldn't  make it. But thankfully I did try as  I was one of the students who were selected",
      Body: (
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;Jumping on the start of my internship, we
          were oriented about the tasks that we were gonna do. The initial
          orientation left me overwhelmed. The tasks seemed endless and there's
          so much to do. Yet, with each completed task, my confidence grew. The
          initial overwhelm quickly transformed into a thirst for knowledge.
          Because this internship wasn't just me following instructions, it made
          me learn to adapt and at the same time made me grow professionally.
          But what truly set Radztech apart was their company culture. It wasn't
          just a workplace; it felt like a family. The company fostered a
          supportive environment that let me grow and pushed me outside my
          comfort zone in the best way possible.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;My internship at Radztech fully prepared me
          for the demands and dynamics of the corporate world.{" "}
          <span style={{ fontWeight: 800 }}>
            I entered with so much worries, but I left with a wealth of
            knowledge, sharpened skills, and the confidence to thrive in any
            professional setting.
          </span>{" "}
          And I am beyond grateful with Radztech for the experience I'll never
          forget."
          <br /> <br />
        </p>
      ),
      src: Frenalyn,
      CardTitle: "",
      CardContent:
        "I entered with so much worries, but I left with a wealth of knowledge, sharpened skills, and the confidence to thrive in any professional setting",
    },
    {
      LastName: "Batara",
      FirstName: "Joan",
      NickName: "JO",
      Quote: (
        <h3>
          "You’ll never know what’s ahead of you when you limit yourself. Have
          the courage to try and explore."
        </h3>
      ),
      Course: "BS Management Accounting",
      School: "Isabela State University - Echague Campus",
      Introduction: <h2>Bonjour! Set your mind and enjoy reading</h2>,
      Testimony:
        "As someone looking to maximize my OJT experience while being efficient with my time and finances,  I've come up with a decision to gain practical experience in banks, cooperatives and water districts near my location, however I failed to secure spots. The rejections felt endless, but then, a door to a brighter future opened. I was offered and convinced to apply for an internship at Radztech Business Solutions which I’m already familiar with",
      Body: (
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;Radztech is my last option honestly but
          never expected that this option would greatly impact me and my chosen
          career. My internship days at Radztech would definitely be my worth it
          decision as I not only found a company that will enhance my skills and
          gain learnings but also a family that I can count with. A company that
          allowed me to explore an ERP, provide instructions, impart their
          knowledge about Accounting Information Systems, and unleash your
          potential without overwhelming pressure. A family that will make you
          comfortable, allow you to express yourself freely, strengthen your
          morale, provide you home and make you feel cared and secured are just
          some of their ways to show their support to you. When I am assigned to
          a task, it’s as if I am portraying a role as friend, daughter, and
          mostly as an intern but never felt like I'm an outsider. Upon
          observation, the employees create an environment where hierarchical
          positions are not felt, yet respect and formality are always
          maintained. In the midst of work, moments can arise where everyone
          jokes, laughs, and sings together which are the times I will truly
          miss. <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;It was a wonderful experience to be an
          intern in this company for 3 months where I not only refreshed and
          improved my accounting knowledge from school but also gained new
          concepts. They also demonstrate how technology can streamline the
          process of recording, summarizing, and reporting transactions which I
          was intensely captivated by. Throughout my time here, I've been
          continuously impressed by the robustness and sophistication of the
          accounting system employed by Radztech and at the same time the
          customization and automation that it offers. I am glad I chose
          Radztech because it has exposed me to facets of accounting and
          digitalization that I hadn't previously encountered, and I can
          confidently affirm that as we transition into the digital era,
          Radztech is at the forefront, fully embracing the digitalization wave.
          As I move forward on a different path for now, I carry with me the
          lessons and insights gained from this experience. All the knowledge
          imparted by Radztech to me will undoubtedly serve as a solid
          foundation as I step into the realm of business. I sincerely thank
          Radztech for giving me the chance to go beyond traditional education
          and helping me appreciate the power of efficient systems.
        </p>
      ),
      src: Joan,
      CardTitle: "Radztech: Turning my plan Z into an A+ experience",
      CardContent:
        "Facing countless rejections, I found a surprising beacon at Radztech Business Solutions, transforming my last option into a defining experience.",
    },
    {
      LastName: "Sejalvo",
      FirstName: "Novelyn",
      NickName: "Novs",
      Quote: <h3>"Go Beyond Your Limits"</h3>,
      Course: "BS Management Accounting",
      School: "Isabela State University - Cauayan Campus",
      Introduction: (
        <h2>Hi, I’m Novelyn. I hope you find time reading this!</h2>
      ),
      Testimony: (
        <span style={{ fontWeight: 800 }}>
          Reflecting on my internship at Radztech, one word consistently comes
          to mind: TRANSFORMATION
        </span>
      ),
      Body: (
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;Personal and professional growth were my
          key objectives for the internship program, and Radztech provided the
          perfect environment to achieve them.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;Working with the Radztech team has been an
          incredible journey. In just three short months, I've gained a lot of
          lessons, knowledge, and valuable insights. I can say that I've
          experienced tremendous growth. Radztech embodies the motto,{" "}
          <span style={{ fontWeight: 800 }}>'Go Beyond</span>,' by consistently
          pushing me to exceed my own expectations and reach my full potential.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;As my internship journey at Radztech
          concludes, a simple 'thank you' feels inadequate to express my
          profound gratitude. I am incredibly grateful to everyone at Radztech,
          especially the individuals who generously guided and mentored me
          throughout my experience. I will be forever grateful to you, Radztech.
          <br /> <br />
        </p>
      ),
      src: Novelyn,
      CardTitle: "",
      CardContent: (
        <p>
          "Reflecting on my internship at Radztech, one word consistently comes
          to mind: TRANSFORMATION"
        </p>
      ),
    },
    {
      LastName: "Ramel",
      FirstName: "Patricia Fae",
      NickName: "Pat",
      Quote: "",
      Course: "BS Management Accounting",
      School: "Isabela State University - Echague Campus",
      Introduction: (
        <h2>
          Hi! I am Pat, nice to meet you. May you have a glimpse of what happens
          here at Radztech through my testimony. Happy reading!
        </h2>
      ),
      Testimony:
        "A stumbling block or a stepping stone? This is the question I ask myself each time the weight of this internship feels heavier and wrings out my mind until I can't come up with any more useful ideas. I could remember I said in an interview before I started that I wanted an internship experience where I could think and work outside the box. Radztech has definitely made that happen.",
      Body: (
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;My internship experience was a series of
          setbacks, learning opportunities, and moments of redemption. At
          Radztech, I was able to gauge the gap between textbook learning and
          actual accounting practice, especially in today's digitalized world.
          This internship helped bridge that gap, sufficing my inadequate
          application of accounting theories and concepts, through generously
          providing us privileges to freely access first-hand their very own
          accounting information system known as UlapBiz. Moreover, I gradually
          adapted to the new learning environment and developed new
          relationships with my fellow interns and superiors. The first month
          was undeniably challenging as I interacted with people whose values
          and lifestyles differed from mine, causing me to reassess how
          extroverted I could be in this new setting. Initially, some of my
          relationships with them were rough and hesitant. However, as we spent
          more time together, trust and comfort began to build. One activity
          that helped us get to know each other better was the Bible study. It
          served as a bonding tool for us to have shared lives where
          vulnerability was embraced and honesty was heard--pointing us always
          of who God is, what He says He will do, and how He wants us to respond
          amidst the circumstances we were facing.Lastly, I rediscovered myself
          during those hundreds of hours. I learned to listen to my mind and
          body, recognizing a stranger within me—a version of myself I had never
          met or had ignored. I can now identify my ideal workplace, the type of
          work I am passionate about, the character traits and attitudes I need
          to learn and unlearn, my stress triggers, my motivations to get out of
          bed, and the simple joys that help me sleep soundly. <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;This internship was seemingly a stumbling
          block because of the sore setbacks and magnified self-insufficiency.
          Yet each time I stood up, started over, and looked back, I realized
          that this block was actually a stepping stone to advance my accounting
          expertise, matured me in handling relationships, and deepened my
          personal understanding.",
        </p>
      ),
      src: Pat,
      CardTitle: "",
      CardContent:
        "This internship was actually a stepping stone to advanced my accounting expertise, matured me in handling relationships, and deepened my personal understanding",
    },
    {
      LastName: "Medina",
      FirstName: "Frenan",
      NickName: "Frenan",
      Quote: <h3>"Manifest lang nang manifest"</h3>,
      Course: "BS Management Accounting",
      School: "Isabela State University - Cauayan Campus",
      Introduction: <h2>Hi, I’m FreNen, este FRENAN</h2>,
      Testimony:
        "I still vividly remember the day our Professor referred Radztech to me. July 07, 2023. I am offered to host the graduation ceremony of my seniors. The first time I met Radztech. And our professor once told me, Dun kayo sa Radztech, maganda dun. That moment feels surreal. As each company representative ended their speech I once said I can't wait to be part of your team, soon.",
      Body: (
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;It's a dream of mine to be in a company
          that will help me achieve professional and personal growth, and
          through Radztech i am able to do so. I manifested to be part of the
          team. Posted on X (Twitter) " Radztech cutieee " Low and behold,
          Radztech accepted me. Radztech opened so many opportunities for me, I
          was able to meet clients with diverse working ethics and of course I
          was able to be part of a team with much dedication towards excellence
          and quality.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;My stay in Radztech for my internship
          equipped me to be a competent individual. They have seen the potential
          in me and I will forever be grateful for the valuable learnings and
          experiences. My manifestations turned to reality, manifestations
          really work.
        </p>
      ),
      src: Frenan,
      CardTitle: "",
      CardContent: (
        <p>
          I manifested to be part of the team. Posted on X (Twitter) "Radztech
          cutieee" Lo and behold, Radztech accepted me.
        </p>
      ),
    },
    {
      LastName: "Respicio",
      FirstName: "Ryan",
      NickName: "Ry",
      Quote: <h3>"STAPPPppppp"</h3>,
      Course: "BS Management Accounting ",
      School: "Isabela State University - Cauayan Campus",
      Introduction: <h2>Hi, I’m Ry, Nonchalant na OA</h2>,
      Testimony: (
        <>
          "When I received the news that I had been selected as an intern at
          RBS, I initially felt uncertain about joining the program. I doubted
          myself whether I could successfully handle all the tasks they would
          assign to me. But I’m wrong, they made my
          <span style={{ fontWeight: 800 }}> UNCERTAINTIES </span> into
          <span style={{ fontWeight: 800 }}> OPPORTUNITIES </span>
          helping me prepare for the real world of a corporate life."
        </>
      ),
      Body: (
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <span style={{ fontWeight: 800 }}>
            {" "}
            AT RBS, THIS ISN'T YOUR TYPICAL INTERNSHIP.{" "}
          </span>
          I've encountered a diverse range of work that I really enjoyed. Each
          week brings a new surprise task, ensuring that we are not going to do
          repetitive work. This has made me{" "}
          <span style={{ fontWeight: 800 }}> FLEXIBLE AND ADAPTABLE </span> from
          various perspectives.
          <br /> <br />
          &nbsp; &nbsp; &nbsp; &nbsp;Throughout my entire internship program,
          the guidance I received was{" "}
          <span style={{ fontWeight: 800 }}> EXCEPTIONAL. </span> My supervisors
          addressed all my inquiries with thorough{" "}
          <span style={{ fontWeight: 800 }}> GUIDANCE. </span> Their willingness
          to share their expertise made a lasting impact on my{" "}
          <span style={{ fontWeight: 800 }}> DEVELOPMENT </span> that I will
          carry for the rest of my life. But the most important thing I will
          remember is they taught me how to be a{" "}
          <span style={{ fontWeight: 800 }}> GOOD PERSON </span> no matter what
          or where you are.{" "}
          <span style={{ fontWeight: 800 }}>
            {" "}
            MARAMING SALAMAT, MAHAL KONG RBS.{" "}
          </span>
          <br /> <br />
        </p>
      ),
      src: Ryan,
      CardTitle: "",
      CardContent: (
        <p>
          But I’m wrong, they made my{" "}
          <span style={{ fontWeight: 800 }}>
            UNCERTAINTIES into OPPORTUNITIES
          </span>{" "}
          helping me prepare for the real world of a corporate life.
        </p>
      ),
    },
    {
      LastName: "Palting",
      FirstName: "Joemar",
      NickName: "Joms",
      Quote: <h3>Work on your present; OUKOURRRR!</h3>,
      Course: "BS Information Technology ",
      School: "Isabela State University - Cauayan Campus",
      Introduction: <h2>Ang nonchalant lang, Happy Mothers Day Po 🙂</h2>,
      Testimony:
        "When I started looking for an internship, my priority was to find a company where I could gain real-world experience beyond the typical setting",
      Body: (
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;When I discovered Radztech, it immediately
          went to the top of my list for internship applications. I set aside
          all the other offers, even from some of the biggest companies in the
          Philippines, because I believed Radztech would provide me with
          invaluable learning opportunities. Taking the risk to intern at
          Radztech, it turned out to be one of the best decisions I've ever
          made. The experience was instrumental in achieving my dream job of
          becoming a developer. At Radztech, I was challenged by tasks I once
          thought were beyond my capability, but with their support, I found
          myself accomplishing them with confidence. The experience was so
          enriching that it fueled my eagerness to explore and learn even more.
          It’s all about being you and becoming a better version of yourself
          every day until you go beyond your limits.",
        </p>
      ),
      src: Joemar,
      CardTitle: "",
      CardContent: (
        <p>
          "If you're ready to challenge yourself, push your limits, and unlock
          your full potential, consider Radztech.",
        </p>
      ),
    },
    {
      LastName: "Agonoy",
      FirstName: "Isah Janriel",
      NickName: "Isah",
      Quote: <h3>Trueneeessss; Yaaannnnn</h3>,
      Course: "BS Accounting Information System ",
      School: "Isabela State University - Cauayan Campus",
      Introduction: <h2>Hi, I`m Isah,Lutang pero pwede na 😊</h2>,
      Testimony:
        "I still remember it clearly when I decided to go to Radztech. It was a personal choice, a choice that I know I will not regret. I was the only one on our course even though I encouraged everyone to join me, what I am holding on to is what my friends and former interns of RBS said to me. I told to Myself, “Eto na yon, Bahala kana Lord”, and as I stand beyond their door, I am filled with certainty that beyond that lies A VAST DIAGRAM OF OPPORTUNITIES THAT AWAITS, EACH ONE WAITING TO BE EXPLORED AND SEIZED.",
      Body: (
        <p>
          RBS was the best of its class when it comes to internship. I was
          assigned to technical support, where I turn every challenge into a
          valuable learning experience. Every support request case that they
          have assigned to me, every report that I have created, diagrams I have
          constructed, cases that I have been solved, queries that I have
          investigated, all of it enhanced my analytical and problem-solving
          skills and I know it made me the best that I can be. My internship at
          radztech can be said as a learning milestone. I will truly cherish the
          moments that we`ve shared, stressful yet fun experiences, the tears,
          laughter, and lessons that I know I will treasure for the rest of my
          days.
          <br /> <br />
          I can now conclude what my friends and former RBS interns have told
          me,”Maganda don,Hands on sila sainyo ipaparanas talaga nila yung
          corporate practices.” It was truly remarkable, and I am so blessed to
          be part of them, to be a radztech intern. They treat me as a family, a
          friend, and a valuable piece to them. What they have given me was
          undoubtedly gonna be my core foundation as I step up to the new
          journey of new digitalized world. I am eternally grateful, my dear
          Radztech, thank you for all the challenges, knowledge, and insights
          that you`ve given me. I am excited about the possibilities that await
          us all, I`m looking forward to seeing you on top.
          <br /> <br />
        </p>
      ),
      src: Isah,
      CardTitle: "",
      CardContent:
        " I am filled with certainty that beyond that lies A VAST DIAGRAM OF OPPORTUNITIES THAT AWAITS, EACH ONE WAITING TO BE EXPLORED AND SEIZED.",
    },
  ];

  return (
    <div>
      <ModalExp Team={data}>
        <Testimonial Team={data} />
      </ModalExp>
    </div>
  );
}
