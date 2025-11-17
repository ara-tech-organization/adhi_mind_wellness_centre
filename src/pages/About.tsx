import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Users,
  Award,
  BookOpen,
  Target,
  GraduationCap,
  Heart,
  Lightbulb,
  Globe,
} from "lucide-react";

const About = () => {
  return (
    <div>
      {/* -- meta tags starts -- */}
      <Helmet>
        <title>About - Adhi Mind Wellness Centre</title>
        <meta
          name="description"
          content="Adhi Mind Wellness Centre in Thanjavur offers counselling, life coaching, and mental wellness services for stress, trauma, personal growth, and emotional healing."
        />
        <meta
          name="keywords"
          content="Adhi Mind Wellness Centre, counselling in Thanjavur, life coaching, stress management, trauma healing, mental wellness Tamil Nadu"
        />
        <meta name="author" content="Adhi Mind Wellness Centre" />

        {/* Open Graph (for social media) */}
        <meta
          property="og:title"
          content="Adhi Mind Wellness Centre - Transform Within, Thrive Beyond"
        />
        <meta
          property="og:description"
          content="Discover counselling, life coaching, and emotional healing at Adhi Mind Wellness Centre in Thanjavur."
        />
        <meta
          property="og:image"
          content="https://adhimindwellnesscentre.com/lovable-uploads/18.jpeg"
        />
        <meta property="og:url" content="https://adhimindwellnesscentre.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Adhi Mind Wellness Centre - Mental Wellness in Thanjavur"
        />
        <meta
          name="twitter:description"
          content="Counselling, life coaching & emotional healing in Thanjavur."
        />
        <meta
          name="twitter:image"
          content="https://adhimindwellnesscentre.com/lovable-uploads/18.jpeg"
        />
      </Helmet>
      {/*-- meta tags ends -- */}
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-wellness-violet to-wellness-lavender text-white relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              About
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Guiding you from feeling powerless to embracing your inner
              strength
            </p>
          </div>
        </div>
      </section>

      {/* About Centre Section */}
      {/* Section 1: About Adhi Mind Wellness Centre */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-wellness-light-purple to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-5xl mx-auto text-center space-y-6"
            data-aos="fade-up"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-wellness-violet mb-4">
              About Adhi Mind Wellness Centre
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Welcome to Adhi Mind Wellness Centre, your sanctuary for emotional
              healing, mental wellness, and personal transformation. Our mission
              is to guide you on a journey to inner strength and lasting
              happiness. Whether you’re navigating stress, managing trauma, or
              seeking personal growth, we are here to provide compassionate care
              that helps you thrive in every aspect of life.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              At Adhi Mind Wellness Centre, we believe every individual deserves
              a life filled with purpose, joy, and authentic happiness. Our
              approach blends therapeutic methods with understanding and
              empathy, creating a non-judgmental, safe space for exploration and
              healing. Here, we help you unlock your full potential and discover
              tools that empower you to face life with confidence.
            </p>
            {/* <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              For me, if love could be defined in one word, it would be
              “Kindness.” I have an unwavering belief that kindness holds the
              power to cultivate integrity, harmony, and peace among all human
              beings. True to this belief, I approach my clients with kindness,
              compassion, and empathy — not just as values, but as guiding
              principles in my work.
            </p> */}
          </div>
        </div>
      </section>

      {/* Section 2: About K. Adhilakshmi */}
      <section className="py-20 bg-gradient-to-br from-white to-wellness-light-purple overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left: Text */}
            <div data-aos="fade-right" className="space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet">
                About the Founder <br /> K. Adhilakshmi
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                K. Adhilakshmi is a passionate mental health professional and
                the founder of Adhi Mind Wellness Centre. With a strong academic
                foundation and deep empathy, she guides clients toward emotional
                well-being, clarity, and confidence.
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                She offers support in areas such as individual counselling,
                trauma recovery, relationship healing, and grief processing. Her
                therapeutic approach is rooted in kindness, compassion, and a
                deep respect for each individual’s journey.
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                As a life coach, she is dedicated to fostering personal growth,
                empowering women, and guiding students toward meaningful
                transformation in mindset, self-worth, and life goals.
              </p>
              {/* <p className="text-sm italic text-gray-600">
                “Kindness is the language of healing.”
              </p> */}
            </div>

            {/* Right: Image */}
            <div className="flex justify-center" data-aos="fade-left">
              <img
                src="/lovable-uploads/24.png"
                alt="K. Adhilakshmi"
                className="rounded-2xl h-96 md:h-[25rem] shadow-xl w-full max-w-md h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-wellness-light-purple to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10"
            data-aos="fade-up"
          >
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                src="/lovable-uploads/21.png"
                alt="Founder of Adhi Mind Wellness Centre"
                className="w-full max-w-md md:max-w-lg h-96 md:h-[35rem] rounded-2xl shadow-lg object-cover object-center"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-wellness-violet">
                Founder’s Perspective
              </h2>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                The purpose of starting Adhi Mind Wellness Centre is to support
                fellow human beings in empowering themselves to achieve clarity
                and peace of mind. I have always dreamt of helping people live
                better lives, and this centre is a step toward making that dream
                a reality.
              </p>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                For me, if love could be defined in one word, it would be
                kindness. I hold an unwavering belief that kindness has the
                power to cultivate integrity, harmony, and peace among all human
                beings. True to this belief, I approach my clients with
                kindness, compassion, and empathy — not just as values, but as
                guiding principles in my work.
              </p>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                I am dedicated to guiding individuals toward the right course of
                action that leads to positive transformation.
              </p>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                At Adhi Mind Wellness Centre, I integrate both counselling and
                coaching practices, offering emotional healing and practical
                guidance to help individuals thrive at every stage of their
                personal journey.
              </p>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                At the core of my work is a commitment to holistic well-being —
                mental, emotional, and personal. I firmly believe that nurturing
                others is the true nature of humankind, and I am honoured to
                walk alongside my clients as they rediscover their strength and
                thrive in life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div data-aos="fade-right">
                <h2 className="text-2xl md:text-3xl font-bold text-wellness-violet mb-5">
                  Professional Qualifications
                </h2>
                <div className="space-y-5">
                  <div
                    className="flex items-start space-x-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="w-10 h-10 bg-wellness-lavender rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-wellness-violet" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-wellness-violet mb-1">
                        MBA in Human Resource Management
                      </h3>
                      <p className="text-gray-600 text-sm">Anna University</p>
                    </div>
                  </div>

                  <div
                    className="flex items-start space-x-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="w-10 h-10 bg-wellness-lavender rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-wellness-violet" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-wellness-violet mb-1">
                        MSc in Psychology
                      </h3>
                      <p className="text-gray-600 text-sm">Madras University</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="bg-wellness-light-purple p-6 rounded-3xl"
                data-aos="fade-left"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-5">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-wellness-violet mb-3">
                    Transform Within, Thrive Beyond
                  </h3>
                  <p className="text-base text-gray-700 italic">
                    Our guiding tagline that embodies the journey of personal
                    transformation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20 bg-wellness-light-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div
                className="bg-white p-6 rounded-3xl shadow-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="text-center mb-5">
                  <div className="w-16 h-16 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-wellness-violet">
                    My Mission
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  To guide individuals on a journey from feeling powerless to
                  embracing their inner strength — so they can meet life's
                  challenges with purpose, courage, confidence, clarity, and
                  resilience.
                </p>
              </div>

              <div
                className="bg-white p-6 rounded-3xl shadow-lg"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="text-center mb-5">
                  <div className="w-16 h-16 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-wellness-violet">
                    My Vision
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  To touch as many lives as possible, fostering peace and
                  harmony in the hearts and homes of people everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-wellness-violet mb-5">
              Guiding Principles
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              These fundamental values shape every interaction and guide our
              approach to mental wellness care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div
              className="text-center p-5 bg-wellness-light-purple rounded-3xl hover:shadow-lg transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-wellness-lavender to-wellness-violet rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">💜</span>
              </div>
              <h3 className="text-lg font-bold text-wellness-violet mb-2">
                Purpose
              </h3>
              <p className="text-gray-600 text-xs">
                Living with clear intention and meaningful direction
              </p>
            </div>

            <div
              className="text-center p-5 bg-wellness-light-purple rounded-3xl hover:shadow-lg transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-wellness-lavender to-wellness-violet rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">💪</span>
              </div>
              <h3 className="text-lg font-bold text-wellness-violet mb-2">
                Courage
              </h3>
              <p className="text-gray-600 text-xs">
                Facing challenges with bravery and determination
              </p>
            </div>

            <div
              className="text-center p-5 bg-wellness-light-purple rounded-3xl hover:shadow-lg transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-wellness-lavender to-wellness-violet rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">✨</span>
              </div>
              <h3 className="text-lg font-bold text-wellness-violet mb-2">
                Confidence
              </h3>
              <p className="text-gray-600 text-xs">
                Building unshakeable self-belief and inner strength
              </p>
            </div>

            <div
              className="text-center p-5 bg-wellness-light-purple rounded-3xl hover:shadow-lg transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-wellness-lavender to-wellness-violet rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">🌱</span>
              </div>
              <h3 className="text-lg font-bold text-wellness-violet mb-2">
                Resilience
              </h3>
              <p className="text-gray-600 text-xs">
                Bouncing back stronger from life's challenges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-wellness-light-purple to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="mb-6">
              <img
                src="/lovable-uploads/23.png"
                alt="Growth and transformation"
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg mb-5"
              />
            </div>

            <h2
              className="text-2xl md:text-3xl font-bold text-wellness-violet mb-5"
              data-aos="fade-down"
            >
              My Commitment to You
            </h2>

            <p
              className="text-base text-gray-700 mb-6 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I am committed to guiding individuals toward meaningful
              transformation by helping them:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div
                className="text-left"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-wellness-violet rounded-full mr-3"></div>
                    Discover their purpose
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-wellness-violet rounded-full mr-3"></div>
                    Make clear and confident decisions
                  </li>
                </ul>
              </div>

              <div
                className="text-left"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-wellness-violet rounded-full mr-3"></div>
                    Create lasting and meaningful change
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-wellness-violet rounded-full mr-3"></div>
                    Take goal-aligned, purposeful action
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Philosophy */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-wellness-violet to-wellness-lavender text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-5">
                A Journey of Transformation
              </h2>
            </div>

            <p
              className="text-lg text-white/90 mb-6 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              At Adhi Mind Wellness Centre, we believe that true healing begins
              from within. Every individual possesses an innate capacity for
              growth, resilience, and transformation. My role is to guide you in
              discovering and nurturing this inner strength.
            </p>

            <div
              className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <blockquote className="text-lg font-medium italic leading-relaxed">
                "The journey from feeling powerless to embracing your inner
                strength is not just about overcoming challenges — it's about
                discovering who you truly are and what you're capable of
                achieving."
              </blockquote>
              <div className="mt-4">
                <p className="text-base font-semibold">K. Adhilakshmi</p>
                <p className="text-white/80 text-sm">
                  Founder, Adhi Mind Wellness Centre
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-wellness-violet mb-5">
              Ready to Transform Within and Thrive Beyond?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Begin your journey of personal transformation with compassionate
              guidance and proven methodologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-wellness-violet hover:bg-wellness-violet/90 text-white px-6 py-3 rounded-full font-semibold text-base"
                >
                  Start Your Journey Today
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-wellness-violet text-wellness-violet hover:bg-wellness-violet hover:text-white px-6 py-3 rounded-full font-semibold text-base"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
