import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Brain,
  Heart,
  Users,
  Target,
  Lightbulb,
  Compass,
  Star,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const counsellingServices = [
    {
      title: "Individual Counselling",
      description:
        "Personalized one-on-one sessions focusing on your unique mental health needs, personal growth, and emotional well-being in a safe, confidential environment.",
      icon: Brain,
      features: [
        "Depression & Anxiety Support",
        "Stress Management",
        "Self-Esteem Building",
        "Life Transitions",
      ],
    },
    {
      title: "Relationship Counselling",
      description:
        "Professional guidance for couples and families to improve communication, resolve conflicts, and strengthen emotional bonds for healthier relationships.",
      icon: Heart,
      features: [
        "Couples Therapy",
        "Family Dynamics",
        "Communication Skills",
        "Conflict Resolution",
      ],
    },
    {
      title: "Mental Health Counselling",
      description:
        "Specialized support for various mental health challenges using evidence-based therapeutic approaches tailored to your specific needs and goals.",
      icon: Users,
      features: [
        "CBT & REBT",
        "Trauma-Informed Care",
        "Mood Disorders",
        "Behavioral Patterns",
      ],
    },
    {
      title: "Adolescent Counselling",
      description:
        "Supportive and understanding sessions designed to help teenagers navigate emotional, social, and academic challenges during their formative years. These sessions promote self-awareness, resilience, and positive mental health in a safe, confidential environment.",
      icon: GraduationCap,
      features: [
        "Academic & Peer Pressure",
        "Emotional Regulation & Coping Skills",
        "Identity & Self-Confidence Building",
        "Parent-Child Communication",
        "Behavioral & Social Adjustment",
      ],
      category: "Life Coaching Services", // optional; remove if you don't use categories
    },
    {
      title: "Trauma & Grief Counselling",
      description:
        "Compassionate care for processing traumatic experiences, loss, and grief, helping you navigate the healing journey with professional support.",
      icon: Target,
      features: [
        "PTSD Support",
        "Bereavement Counseling",
        "Trauma Recovery",
        "Emotional Processing",
      ],
    },
  ];

  const coachingServices = [
    {
      title: "Women Empowerment Coaching",
      description:
        "Specialized coaching to help women overcome barriers, build unshakeable confidence, and achieve their personal and professional goals.",
      icon: Star,
      features: [
        "Leadership Development",
        "Career Advancement",
        "Work-Life Balance",
        "Confidence Building",
      ],
    },
    {
      title: "Mindset Coaching",
      description:
        "Transform limiting beliefs and develop a positive, growth-oriented mindset that empowers you to overcome challenges and achieve success.",
      icon: Lightbulb,
      features: [
        "Belief System Change",
        "Positive Psychology",
        "Mental Resilience",
        "Success Mindset",
      ],
    },
    {
      title: "Personal Growth Coaching",
      description:
        "Comprehensive guidance for self-discovery, personal development, and reaching your full potential through structured goal-setting and action plans.",
      icon: Compass,
      features: [
        "Self-Discovery",
        "Skill Development",
        "Life Purpose",
        "Personal Excellence",
      ],
    },
    {
      title: "Goal Setting & Achievement Coaching",
      description:
        "Strategic support to set meaningful, achievable goals and create actionable plans that lead to consistent progress and lasting success.",
      icon: Target,
      features: [
        "SMART Goals",
        "Action Planning",
        "Progress Tracking",
        "Accountability Support",
      ],
    },
    {
      title: "Self-Love Coaching",
      description:
        "Empowering one-on-one sessions designed to help you reconnect with yourself, build confidence, and cultivate a deep sense of self-worth. Learn to embrace your strengths, set healthy boundaries, and create a life rooted in self-compassion and authenticity.",
      icon: Heart, // you can replace this with a heart or lotus icon if you want a more 'wellness' vibe
      features: [
        "Building Self-Confidence & Self-Worth",
        "Overcoming Negative Self-Talk",
        "Developing Healthy Boundaries",
        "Emotional Healing & Inner Peace",
        "Personal Growth & Empowerment",
      ],
    },
  ];

  return (
    <div>
      {/* -- meta tags starts -- */}
      <Helmet>
        <title>Services - Adhi Mind Wellness Centre</title>
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
      <section className="py-12 md:py-20 bg-gradient-to-br from-wellness-light-purple via-white to-wellness-lavender relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wellness-violet mb-5">
              Our Comprehensive Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Professional mental wellness support through therapeutic
              counselling and transformative life coaching
            </p>
          </div>
        </div>
      </section>

      {/* Counselling Services */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-down">
            <h2 className="text-2xl md:text-3xl font-bold text-wellness-violet mb-5">
              Counselling Services
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Professional therapeutic support using evidence-based approaches
              to help you process emotions, overcome challenges, and develop
              healthy coping strategies for lasting mental wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {counsellingServices.map((service, index) => {
              const IconComponent = service.icon;
              const aosDirection = index % 2 === 0 ? "fade-right" : "fade-left";
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-wellness-light-purple p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-wellness-lavender/20 group"
                  data-aos={aosDirection}
                  data-aos-delay={index * 200}
                >
                  <div className="flex items-start space-x-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-wellness-violet mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                        {service.description}
                      </p>
                      <div className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-wellness-violet rounded-full mr-2"></div>
                            <span className="text-xs text-gray-600">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coaching Services */}
      <section className="py-12 md:py-20 bg-wellness-light-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-down">
            <h2 className="text-2xl md:text-3xl font-bold text-wellness-violet mb-5">
              Life Coaching Services
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Empowering coaching programs designed to unlock your potential,
              clarify your goals, and provide the tools and accountability you
              need to create meaningful, lasting change.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {coachingServices.map((service, index) => {
              const IconComponent = service.icon;
              const aosDirection = index % 2 === 0 ? "fade-left" : "fade-right";
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-wellness-lavender/20 group"
                  data-aos={aosDirection}
                  data-aos-delay={index * 200}
                >
                  <div className="flex items-start space-x-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-wellness-lavender to-wellness-violet rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-wellness-violet mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                        {service.description}
                      </p>
                      <div className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-wellness-lavender rounded-full mr-2"></div>
                            <span className="text-xs text-gray-600">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-wellness-violet mb-5">
              Our Process
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              A structured, compassionate approach designed to support your
              unique journey to wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-wellness-violet mb-2">
                Initial Consultation
              </h3>
              <p className="text-gray-600 text-xs">
                Understanding your needs, goals, and creating a safe space for
                open communication.
              </p>
            </div>

            <div
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-wellness-violet mb-2">
                Personalized Plan
              </h3>
              <p className="text-gray-600 text-xs">
                Developing a tailored approach that combines the most effective
                methods for your situation.
              </p>
            </div>

            <div
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-wellness-violet mb-2">
                Active Sessions
              </h3>
              <p className="text-gray-600 text-xs">
                Regular sessions focused on progress, skill-building, and
                emotional processing.
              </p>
            </div>

            <div
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-wellness-violet mb-2">
                Ongoing Support
              </h3>
              <p className="text-gray-600 text-xs">
                Continued guidance and resources to maintain progress and
                prevent setbacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-wellness-violet to-wellness-lavender text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              Take the First Step Toward Transformation
            </h2>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Whether you're seeking counselling for healing or coaching for
              growth, we're here to provide the professional support you need to
              thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-wellness-violet hover:bg-white/90 px-6 py-3 rounded-full font-semibold text-base"
                >
                  Book Your First Session
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/approach">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-wellness-violet hover:bg-white hover:text-wellness-violet px-6 py-3 rounded-full font-semibold text-base"
                >
                  Learn About Our Methods
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
