import Image from 'next/image'
import ImageSlider from './ImageSlider';
import DocsImage02 from '@/public/images/docs-image-02.png'
import Cta from '@/components/cta';


export default function DocumentationContent() {
  return (
    <div className="md:grow">

      <div className="text-lg text-gray-600">
        <h2 className="h2 text-gray-900 mb-4">Study in Australia</h2>
        <p className="mb-8">
        Australia provides a wide array of study opportunities for international students, featuring over <strong className="font-medium text-gray-900">1,100 institutions</strong> and <strong className="font-medium text-gray-900">22,000 courses</strong> to choose from.
      </p>
      <p className="mb-8">
        The Australian education system covers primary, secondary, and tertiary levels, distinguished by the <strong className="font-medium text-gray-900">Australian Qualifications Framework (AQF)</strong>. The AQF is a national policy that defines how different qualifications relate to each other across the education spectrum.
      </p>
      <p className="mb-8">
        International students have the opportunity to study at all education levels in Australia, from primary and secondary school to vocational education and training (VET), English language programs, and higher education, including universities. In Australia, <strong className="font-medium text-gray-900">'tertiary education'</strong> encompasses both higher education (universities) and vocational education and training (VET and TAFE colleges).
      </p>
      <p className="mb-8">
        The <strong className="font-medium text-gray-900">Tertiary Education Quality and Standards Agency (TEQSA)</strong> is responsible for higher education institutions, while the <strong className="font-medium text-gray-900">Australian Skills Quality Authority (ASQA)</strong> oversees VET institutions. These agencies ensure the registration and re-registration of institutions and the accreditation and re-accreditation of courses.
      </p>
      <p className="mb-8">
        Australia’s laws guarantee high-quality education and protection for international students, regardless of the level or duration of study. Key legislation includes the <strong className="font-medium text-gray-900">Education Services for Overseas Students (ESOS) Act 2000</strong> and the <strong className="font-medium text-gray-900">National Code of Practice for Providers of Education and Training to Overseas Students 2007</strong> (National Code), which set consistent national standards for education providers.
      </p>
      <p className="mb-8">
      Ready to explore your study options in Australia? <a href="/pricing" className="font-semibold text-blue-600 hover:underline">Contact us today</a> to speak with an education expert!
      </p>
        <h3 id="installation" className="h3 text-gray-900 mb-4" style={{ scrollMarginTop: '100px' }}>Discover Your Future in Australia: Study Down Under!</h3>
        <p className="mb-8">
        Are you ready to transform your educational journey? <span style={{ color: '#005EB8' }}>Australia is calling!</span> Renowned for its <span style={{ color: '#FF0000' }}>world-class universities</span>, cutting-edge research opportunities, and vibrant student life, Australia offers an unparalleled academic experience. Imagine studying in iconic cities like <span style={{ color: '#005EB8' }}>Sydney, Melbourne, and Brisbane</span>, where innovation meets breathtaking landscapes. Dive into diverse programs tailored to your passions, from <span style={{ color: '#FF0000' }}>engineering and technology</span> to <span style={{ color: '#FF0000' }}>arts and sciences</span>.
      </p>
      <ImageSlider />
        <p className="mb-8">
        Join a <span style={{ color: '#005EB8' }}>multicultural community</span>, make lifelong friends, and explore endless adventure. <span style={{ color: '#FF0000' }}>Scholarships, internships, and global career prospects await you</span>. Experience state-of-the-art facilities, expert faculty, and a supportive learning environment designed to help you succeed. Don't just study—<span style={{ color: '#005EB8' }}>thrive</span>. Your future begins in Australia. Enroll now and make your dream a reality! Whether you're looking to enhance your skills or start a new career path, Australia has the perfect program for you.
      </p>
        <p className="flex items-center text-base px-3 py-4 text-gray-800 bg-blue-100 border border-blue-200 rounded mb-8">
          <svg className="w-4 h-4 fill-current text-blue-500 shrink-0 mr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm2.629 11.618L8 10.236l-2.629 1.382.5-2.927-2.124-2.073 2.939-.427L8 3.528l1.314 2.663 2.939.427-2.126 2.073.502 2.927z" fill="#338CF5" fillRule="nonzero" />
          </svg>
          <span>Check out the opportunity to <a className="text-blue-600 hover:underline" href="/pricing">book your free consultation </a>  now and take the first step towards achieving your goals.</span>
        </p>
        <h3 id="quick" className="h3 text-gray-900 mb-8" style={{ scrollMarginTop: '100px' }}>Consult Global's Comprehensive Study Abroad Guide</h3>
        <h4 className="h4 text-gray-900 mb-4">Step 1: Research Your Options</h4>
        <p className="mb-8">
        Begin by exploring what you want to study, the educational institution you'd like to attend, and the city that fits your lifestyle and budget. Identify the subjects that interest you the most and look at course descriptions, university reviews, and their locations. Create a wish list of your preferences to help narrow down your choices.
        </p>
        <figure className="mb-8">
          <Image className="w-full rounded" src={DocsImage02} width={768} height={390} alt="Docs 02" />
        </figure>
        <h4 className="h4 text-gray-900 mb-4">Step 2: Consult with a Consult Global Advisor</h4>
<p className="mb-8">
  Once you have a clearer idea, schedule a meeting with a Consult Global advisor. Our advisors are highly trained, and many have personal experience as international students. Bring your wish list and course preferences to your appointment. Your advisor will help you navigate all the details to find the best fit for you, your future university, and your chosen field of study.
</p>

<h4 className="h4 text-gray-900 mb-4">Step 3: Submit Your Application</h4>
<p className="mb-8">
  After selecting your course and institution, it's time to apply. Your Consult Global advisor will assist you with the application process, ensuring adherence to the highest legal and ethical standards. They will directly contact your chosen institution to support your application, increasing your chances of acceptance.
</p>
<p className="mb-8">
  If an English proficiency test is required, practice thoroughly. Tests like IELTS require good grammar, spelling, and a wide vocabulary. Even native speakers need to prepare to ensure they meet the required standards.
</p>

<h4 className="h4 text-gray-900 mb-4">Step 4: Accept Your Offer</h4>
<p className="mb-8">
  Once your application is reviewed, you will be notified of the outcome. This process can take several weeks, especially for postgraduate courses. If accepted, you'll receive a letter of offer and an acceptance form. Your advisor will help you review these documents and understand any conditions attached.
</p>
<p className="mb-8">
  If you receive multiple offers, your advisor will assist you in choosing the best option.
</p>

<h4 className="h4 text-gray-900 mb-4">Step 5: Enhance Your English Skills</h4>
<p className="mb-8">
  Improving your English skills is crucial, especially if it's not your first language. Engage with formal English content such as news, talk shows, books, and podcasts. Additionally, familiarize yourself with Australian slang and accents to ease your transition.
</p>

<h4 className="h4 text-gray-900 mb-4">Step 6: Apply for a Student Visa</h4>
<p className="mb-8">
  With your acceptance in hand, the next step is to apply for a student visa. Consult Global will provide you with the necessary information and guidance to navigate this process successfully.
</p>

<h4 className="h4 text-gray-900 mb-4">You're Ready for Your Journey</h4>
<p className="mb-8">
  Congratulations! You're about to embark on an exciting adventure. During this time, your Consult Global advisor will assist you with practical matters such as currency exchange, insurance, SIM cards, and setting up a bank account.
</p>

<h4 className="h4 text-gray-900 mb-4">Experience FastLane with Consult Global</h4>
<p className="mb-8">
  Curious about your eligibility for your dream university? Consult Global's FastLane allows you to receive an in-principle offer in seconds! Enter your preferences and academic details to quickly shortlist matching courses and receive a rapid response from your desired university.
</p>

<h4 className="h4 text-gray-900 mb-4">Study in Australia: Estimated Costs</h4>
<p className="mb-8">
  The cost of studying in Australia varies depending on the institution and study level. Below is an approximate range of costs for various qualifications:
</p>
<ul className="mb-8">
  <li><strong>School:</strong> $7,800 to $30,000</li>
  <li><strong>English Language Studies:</strong> Around $300 per week (depending on course length)</li>
  <li><strong>Vocational Education and Training (Certificates I to IV, Diploma, Advanced Diploma):</strong> $4,000 to $22,000</li>
  <li><strong>Undergraduate Bachelor Degree:</strong> $15,000 to $33,000*</li>
  <li><strong>Postgraduate Master's Degree:</strong> $20,000 to $37,000*</li>
  <li><strong>Doctoral Degree:</strong> $14,000 to $37,000*</li>
</ul>
<p className="mb-8">
  *Excludes high-value courses such as veterinary and medical studies. Please check institution websites for specific costs.
</p>

<p className="mb-8">
  Choose Consult Global for expert guidance and a seamless transition to studying in Australia!
</p>
        <p className="flex items-center text-base px-3 py-4 text-gray-800 bg-blue-100 border border-blue-200 rounded mb-8">
          <svg className="w-4 h-4 fill-current text-blue-500 shrink-0 mr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm2.629 11.618L8 10.236l-2.629 1.382.5-2.927-2.124-2.073 2.939-.427L8 3.528l1.314 2.663 2.939.427-2.126 2.073.502 2.927z" fill="#338CF5" fillRule="nonzero" />
          </svg>
          <span>Book your free <a className="text-blue-600 hover:underline" href="/pricing">Consultation call now!</a></span>
        </p>
        <h3 id="folder" className="h3 text-gray-900 mb-8" style={{ scrollMarginTop: '100px' }}>Unlock Your Future: Scholarships for Students at Australian Universities</h3>
        <p className="mb-8">
        Australian universities offer a variety of scholarships specifically designed for international students, aimed at attracting talented individuals from around the world and supporting their academic pursuits. These scholarships are available across different levels of study, including undergraduate, postgraduate, and research programs. Notable examples include the Australia Awards Scholarships, funded by the Australian government, which provide comprehensive financial support covering tuition fees, living expenses, and return airfare for students from developing countries.
        </p>
        <p className="mb-8">
        Universities such as the University of Sydney, Australian National University, and University of Melbourne offer numerous merit-based scholarships to reward academic excellence, as well as need-based grants to support students facing financial challenges. These institutions recognize the importance of fostering global talent and often have dedicated scholarships for outstanding international students, ensuring that financial constraints do not hinder their educational aspirations.
        </p>
        <p>
        Additionally, many Australian universities provide scholarships tailored to specific fields of study, such as engineering, medicine, and the arts, along with opportunities for students from underrepresented regions. These scholarships not only reduce the financial burden of studying abroad but also enhance the educational and career prospects of international students, contributing to the global diversity and academic richness of Australian universities.
        <br  /></p>
      </div>
      
      <h3 id="consultation" className="h3 text-gray-900 mb-4" style={{ scrollMarginTop: '100px' }}></h3>
      {/* Calling the Cta component */}
      <Cta />
    </div>
  );
}
