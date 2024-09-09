import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // For routing
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate(); // For navigation
  const [currentImage, setCurrentImage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false); // Defined state for expanded text
  const programRef = useRef(null); // Ref for the scrollable section

  // Replace with your image URLs
  const images = [
    { 
      url: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600', 
      description: 'Take care of your body. It’s the only place you have to live.' 
    },
    { 
        url: 'https://images.pexels.com/photos/4553611/pexels-photo-4553611.jpeg?auto=compress&cs=tinysrgb&w=600', 
        description: 'Take care of your body. It’s the only place you have to live.' 
      },
      { 
        url: 'https://images.pexels.com/photos/3253498/pexels-photo-3253498.jpeg?auto=compress&cs=tinysrgb&w=600', 
        description: 'Take care of your body. It’s the only place you have to live.' 
      },
      { 
        url: 'https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg?auto=compress&cs=tinysrgb&w=600', 
        description: 'Take care of your body. It’s the only place you have to live.' 
      },
    // Add more images if needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleJoinClick = () => {
    navigate('/register'); // Adjust the path to your registration page
  };

  const scrollLeft = () => {
    if (programRef.current) {
      programRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (programRef.current) {
      programRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="bg-gradient-to-r from-green-400 to-blue-400 min-h-screen">
      {/* Image Carousel */}
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
        <img
          src={images[currentImage].url}
          alt={`Carousel ${currentImage + 1}`}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        {/* Overlay Text and Button */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-white bg-black bg-opacity-50">
          <p className="text-lg md:text-3xl font-semibold mb-4 leading-tight">
            “Take care of your <span className="text-red-500">body</span>. It's the only place you have to <span className="text-red-500">live</span>.”
          </p>
          <button
            onClick={handleJoinClick}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition"
          >
            Join With Us
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about" className="py-16 px-4 bg-gray-500">
        
        <div className="flex flex-col md:flex-row items-center justify-center mt-4">
          <div className="w-full md:w-1/2">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/7gH0H4aunJU?si=xHyhDInL4wTI5UGZ"
              title="About Us Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 mt-2 mb-2 md:mt-0 md:pl-8">
          <h2 className="text-top text-3xl mb-2 font-extrabold text-red-400">About Us</h2>
            <p className="mt-6 text-lg text-white">
              Welcome to our gym! We offer the best fitness programs to help you achieve your goals.
              <button onClick={() => setIsExpanded(!isExpanded)} className="text-blue-500 underline ml-2">
                {isExpanded ? 'Show Less' : 'Learn More'}
              </button>
            </p>
            {isExpanded && (
              <div className="mt-4 text-lg text-white">
                <p>
                  Our gym is dedicated to providing top-notch fitness training and wellness programs. We offer a variety of classes and personal training sessions tailored to meet your individual needs. Whether you are looking to build muscle, lose weight, or improve overall fitness, our experienced trainers are here to guide you every step of the way.
                </p>
                <p className="mt-2">
                  Join us today and take the first step towards a healthier, more active lifestyle. With state-of-the-art equipment, a supportive community, and flexible membership options, we are here to help you reach your fitness goals.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="bg-gray-500">
        <h2 className="w-1/2 text-3xl font-extrabold text-red-400">Why Choose Us?</h2>
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white underline">Consultations with Experts</h3>
              <p className="mt-2 text-lg text-white">Our certified trainers offer personalized consultations to help you design a fitness plan that meets your goals and needs.</p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white underline">Best Workout Facilities</h3>
              <p className="mt-2 text-lg text-white">We provide top-notch workout facilities, including the latest equipment and spacious workout areas, ensuring you have the best experience.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/RJ1izzADlzY" // Replace with your video URL
              title="Why Choose Us Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      
{/*program section*/}
<section id="program" className="py-16 px-4 relative h-50 w-50 bg-gray-500">
  <h2 className="py-2 px-6 text-3xl font-bold text-center border-black text-red-600 bg-black">
    Training Program
  </h2>
  <div className="flex items-center mt-8">
    {/* Left Arrow */}
    <button onClick={scrollLeft} className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 focus:outline-none">
      ←
    </button>
    {/* Scrollable Programs */}
    <div
      ref={programRef}
      className="overflow-x-auto whitespace-nowrap flex gap-6 p-4 scrollbar-hide"
    >
      {/* Program 1: Weight Loss */}
      <div className="flex-none w-[300px] md:w-[350px] bg-gray-200 p-6 rounded-lg shadow-lg">
        <div
          className="h-48 bg-cover bg-center mb-4 rounded"
          style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/man-exercising-elliptical-trainer_1295366-16624.jpg?size=626&ext=jpg&ga=GA1.1.292004174.1717405199&semt=ais_hybrid)' }}
        ></div>
        <h3 className="text-xl font-semibold">Weight Loss</h3>
       
      </div>
      {/* Program 2: Strength Training */}
      <div className="flex-none w-[300px] md:w-[350px] bg-gray-200 p-6 rounded-lg shadow-lg">
        <div
          className="h-48 bg-cover bg-center mb-4 rounded"
          style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/man-working-out-gym_23-2148197774.jpg?ga=GA1.1.292004174.1717405199&semt=ais_hybrid)' }}
        ></div>
        <h3 className="text-xl font-semibold">Strength Training</h3>
      
      </div>
      {/* Program 3: Cardio Workouts */}
      <div className="flex-none w-[300px] md:w-[350px] bg-gray-200 p-6 rounded-lg shadow-lg">
        <div
          className="h-48 bg-cover bg-center mb-4 rounded"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg)' }}
        ></div>
        <h3 className="text-xl font-semibold">Cardio Workouts</h3>
       
      </div>
      {/* Program 4: Yoga and Flexibility */}
      <div className="flex-none w-[300px] md:w-[350px] bg-gray-200 p-6 rounded-lg shadow-lg">
        <div
          className="h-48 bg-cover bg-center mb-4 rounded"
          style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/flexible-woman-dancing-floor_1098-22107.jpg?ga=GA1.1.292004174.1717405199&semt=ais_hybrid)' }}
        ></div>
        <h3 className="text-xl font-semibold">Yoga and Flexibility</h3>
       
      </div>
    
      {/* Program 5: Functional Fitness */}
      <div className="flex-none w-[300px] md:w-[350px] bg-gray-200 p-6 rounded-lg shadow-lg">
        <div
          className="h-48 bg-cover bg-center mb-4 rounded"
          style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/fitness-girl-making-exercise_23-2148017432.jpg?ga=GA1.1.292004174.1717405199&semt=ais_hybrid)' }}
        ></div>
        <h3 className="text-xl font-semibold">Functional Fitness</h3>
       
      </div>
    </div>
    {/* Right Arrow */}
    <button onClick={scrollRight} className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 focus:outline-none">
      →
    </button>
  </div>
</section>

    {/* Our Teams Section */}
<section id="training" className="py-16 px-4 bg-gray-500">
  <h2 className="py-2 px-6 text-3xl font-bold text-center border-black text-red-600 bg-black">
   Meet Our Team
  </h2>
  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Team Member Cards */}
    {[
      { title: 'Zumba Coach', image: 'https://img.freepik.com/premium-photo/young-smiling-caucasian-brunette-sportswear-holding-hands-hips-posing_232070-9475.jpg?ga=GA1.1.292004174.1717405199&semt=ais_hybrid' },
      { title: 'Aesthetic Coach', image: 'https://img.freepik.com/free-photo/sports-man-spend-time-morning-gym_1157-28936.jpg?size=626&ext=jpg&ga=GA1.1.292004174.1717405199&semt=ais_hybrid' },
      { title: 'Running Coach', image: 'https://img.freepik.com/free-photo/handsome-guy-gray-sport-suit-is-running-workout-morning-stadium-he-is-listening-music-through-headphones-looking-side_197531-1154.jpg?w=1060&t=st=1681949842~exp=1681950442~hmac=6ce9142e6c6294c84789706ee27e2bf5e995d697ef39d5d0359e4d93873090cc' },
      { title: 'Yoga Coach', image: 'https://www.arhantayoga.org/wp-content/uploads/2023/04/50-hour-Yin-Yoga-Teacher-Training.jpg' },
      { title: 'Fitness Coach', image: 'https://media.istockphoto.com/id/1369509413/photo/shot-of-a-handsome-young-man-taking-a-break-during-his-workout.jpg?b=1&s=170667a&w=0&k=20&c=MC2um7AEeVfi6Omt4i4ygVzO42upQt4jvI32tHgt0OE=' },
      { title: 'CrossFit Coach', image: 'https://images.squarespace-cdn.com/content/v1/56e029a8a3360cb7acc01a85/1559597683736-X5P01AERY92IBMVIRFEA/OwnerCoachBenTyler.jpg?format=1000w' },
    ].map((coach, index) => (
      <div
        key={index}
        className="bg-black p-6 rounded-lg shadow-lg flex flex-col items-center"
      >
        <img
          src={coach.image}
          alt={coach.title}
          className="h-70 w-full object-cover rounded-t-lg mb-4"
        />
        <h3 className="text-xl font-bold text-center text-white">{coach.title}</h3>
      </div>
    ))}
  </div>
  {/* Go Back Button */}
  <div className="mt-8 flex justify-center">
    <button
      onClick={() => navigate(-1)} // Navigate back to the previous page
      className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 transition"
    >
      Go Back
    </button>
  </div>
</section>
{/* Pricing Section */}
<section id="pricing" className="py-16 px-4 bg-gray-400">
  <h2 className="bg-black py-2 px-6 text-red-500 text-3xl font-bold text-center">Pricing</h2>
  <div className="mt-8 flex flex-col md:flex-row items-start justify-center md:space-x-8">
    {/* Pricing Cards */}
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
      <div 
        className="bg-blue-100 p-6 rounded-lg shadow-lg w-full md:w-64 transition transform hover:scale-105 cursor-pointer"
      >
        <h3 className="text-2xl font-bold mb-4">Day Pass</h3>
        <p>Get access for a single day with no commitment. Perfect for those who want to try before committing.</p>
        <p className="mt-4 font-bold text-xl">$10 / day</p>
        <a 
          href="/payment" // Adjust the href to your payment page URL
          className="block mt-4 bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Get Started
        </a>
      </div>
      <div 
        className="bg-green-100 p-6 rounded-lg shadow-lg w-full md:w-64 transition transform hover:scale-105 cursor-pointer"
      >
        <h3 className="text-2xl font-bold mb-4">Month-to-Month Plan</h3>
        <p>Enjoy full access with the flexibility of paying month-to-month. No long-term contracts required.</p>
        <p className="mt-4 font-bold text-xl">$50 / month</p>
        <a 
          href="/payment" // Adjust the href to your payment page URL
          className="block mt-4 bg-green-500 text-white text-center py-2 px-4 rounded-lg hover:bg-green-600"
        >
          Get Started
        </a>
      </div>
    </div>

    {/* Membership Description */}
    <div className="mt-8 md:mt-0 md:w-1/2">
      <h3 className="text-2xl font-bold mb-4 underline">Membership Benefits</h3>
      <p className="text-lg">
        Our memberships provide access to state-of-the-art equipment, group classes, and expert trainers. Whether you’re looking to lose weight, build muscle, or just stay active, we have the perfect plan for you.
      </p>
      <ul className="list-disc mt-4 pl-5 text-lg">
        <li>Access to all gym facilities</li>
        <li>Unlimited group classes</li>
        <li>Personal training discounts</li>
        <li>Free WiFi and refreshments</li>
      </ul>
    </div>
  </div>
</section>


{/* Footer Section */}
<footer className="bg-gray-600  text-white py-10 px-4">
  <div className="container mx-auto flex flex-wrap justify-between">
    {/* Gym Description and Social Links */}
    <div className="w-full md:w-1/3 mb-8 md:mb-0">
      <h2 className="text-2xl text-red-600 font-bold mb-4">GYM</h2>
      <p className="mb-4">
        Join us at the best gym in town! We offer a variety of programs to help you achieve your fitness goals.
      </p>
      <div className="flex space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </div>

    {/* Footer Columns */}
    <div className="w-full md:w-2/3 flex flex-wrap justify-between">
      {/* Healthy Living Column */}
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <h3 className="text-xl font-bold mb-4">Healthy Living</h3>
        <ul>
          <li><a href="#" className="hover:underline">Nutrition Tips</a></li>
          <li><a href="#" className="hover:underline">Wellness Programs</a></li>
          <li><a href="#" className="hover:underline">Healthy Recipes</a></li>
        </ul>
      </div>

      {/* Services Column */}
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <h3 className="text-xl font-bold mb-4">Services</h3>
        <ul>
          <li><a href="#" className="hover:underline">Personal Training</a></li>
          <li><a href="#" className="hover:underline">Group Classes</a></li>
          <li><a href="#" className="hover:underline">Nutrition Counseling</a></li>
        </ul>
      </div>

      {/* Programs Column */}
      <div className="w-full md:w-1/3">
        <h3 className="text-xl font-bold mb-4">Programs</h3>
        <ul>
          <li><a href="#" className="hover:underline">Weight Loss</a></li>
          <li><a href="#" className="hover:underline">Strength Training</a></li>
          <li><a href="#" className="hover:underline">Cardio Workouts</a></li>
        </ul>
      </div>
    </div>
  </div>

  {/* Copyright Notice */}
  <div className="mt-6 text-center">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} All rights reserved.
    </p>
  </div>
</footer>
    </div>
  );
};

export default Home;
