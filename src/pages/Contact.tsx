import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  MessageCircle,
  Send,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      emailAddress: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const response = await fetch(
        "https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/NewMorningStarEnquiry02",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 123`,
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      console.log("API Response:", result);

      if (!result.error) {
        toast({
          title: "Email sent successfully!",
          description: result.message,
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast({
          title: "Submission Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("Fetch error:", err);
      toast({
        title: "Network Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* -- meta tags starts -- */}
      <Helmet>
        <title>Contact - Adhi Mind Wellness Centre</title>
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-wellness-violet via-wellness-lavender to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Ready to begin your journey toward mental wellness and Personal
              Tranformation? We're here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-wellness-violet mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-wellness-light-purple rounded-2xl border border-wellness-lavender/20">
                    <div className="w-12 h-12 bg-wellness-violet rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-wellness-violet mb-2">
                        Our Location
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        No.32, Shop No.2 (First Floor),
                        <br />
                        GAN Plaza (Near Titan Showroom),
                        <br />
                        Municipal Colony, Medical College Road,
                        <br />
                        Thanjavur, Tamil Nadu - 613005
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-wellness-light-purple rounded-2xl border border-wellness-lavender/20">
                    <div className="w-12 h-12 bg-wellness-violet rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-wellness-violet mb-2">
                        Phone Numbers
                      </h3>
                      <p className="text-gray-700">
                        {/* <strong>Personal:</strong> <a href="tel:+919543347345" className="hover:text-wellness-violet transition-colors">95433 47345</a><br /> */}
                        <strong>Office:</strong>{" "}
                        <a
                          href="tel:+917200175761"
                          className="hover:text-wellness-violet transition-colors"
                        >
                          72001 75761
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-wellness-light-purple rounded-2xl border border-wellness-lavender/20">
                    <div className="w-12 h-12 bg-wellness-violet rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-wellness-violet mb-2">
                        Email Address
                      </h3>
                      <p className="text-gray-700 break-words overflow-hidden">
                        <a
                          href="mailto:adhimindwellnesscentre@gmail.com"
                          className="hover:text-wellness-violet transition-colors break-all"
                        >
                          adhimindwellnesscentre@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-wellness-light-purple rounded-2xl border border-wellness-lavender/20">
                    <div className="w-12 h-12 bg-wellness-violet rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-wellness-violet mb-2">
                        Office Hours
                      </h3>
                      <p className="text-gray-700">
                        <strong>Monday - Saturday:</strong> 10:00 AM - 5:00 PM
                        <br />
                        {/* <strong>Saturday:</strong> 9:00 AM - 2:00 PM<br /> */}
                        <strong>Sunday:</strong> By Appointment Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-wellness-light-purple to-white p-8 rounded-3xl shadow-lg border border-wellness-lavender/20">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-wellness-violet to-wellness-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-wellness-violet mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-600">
                  We'll respond to your inquiry within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border-wellness-lavender/30 focus:border-wellness-violet"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border-wellness-lavender/30 focus:border-wellness-violet"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border-wellness-lavender/30 focus:border-wellness-violet"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message{" "}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full rounded-lg border-wellness-lavender/30 focus:border-wellness-violet resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-wellness-violet hover:bg-wellness-violet/90 text-white py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-wellness-light-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet mb-6">
              Find Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Thanjavur, our centre is easily accessible
              and provides a peaceful environment for your wellness journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-6 rounded-3xl shadow-lg">
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5666138407673!2d79.1084961745171!3d10.767845659352986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab96b59b0e18b%3A0x33c23cbe6aa8aa47!2sGAN%20Plaza!5e0!3m2!1sen!2sin!4v1751345380948!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-violet mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about our services and appointment process
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-wellness-light-purple p-6 rounded-2xl border border-wellness-lavender/20">
              <h3 className="text-lg font-semibold text-wellness-violet mb-2">
                How do I schedule my first appointment?
              </h3>
              <p className="text-gray-700">
                You can contact us via phone, email, or the contact form above.
                We'll schedule a brief consultation to understand your needs and
                match you with the most appropriate service.
              </p>
            </div>

            <div className="bg-wellness-light-purple p-6 rounded-2xl border border-wellness-lavender/20">
              <h3 className="text-lg font-semibold text-wellness-violet mb-2">
                What should I expect in my first session?
              </h3>
              <p className="text-gray-700">
                During your initial consultation, we assess your goals,
                concerns, and medical history to design a personalized care plan
                that addresses your unique needs.
              </p>
            </div>

            <div className="bg-wellness-light-purple p-6 rounded-2xl border border-wellness-lavender/20">
              <h3 className="text-lg font-semibold text-wellness-violet mb-2">
                Do you offer online sessions?
              </h3>
              <p className="text-gray-700">
                Yes, we offer secure online sessions for clients who prefer
                remote consultations or cannot visit our physical location.
                Please inquire when booking your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
