import Link from "@/components/Links";
import Image from "next/image";

const githubLink = "https://github.com/SSOSC-SIT";
const linkedinLink = "https://www.linkedin.com/company/ssoscsitmng/ ";
const instagramLink = "https://www.instagram.com/ssosc.sitmng?utm_source=qr&igsh=Z2xuN3kwbnh4b3V3 ";
const whatsAppLink = " https://chat.whatsapp.com/BaG97xk50KQ46u5xsV0SU1 ";
const twitterLink = "https://twitter.com/";
const youtubeLink = "https://www.youtube.com/";
const discordLink = "https://discord.gg/yRt9BadFru";

const communityGuidelines = "https://github.com/SSOSC-SIT";

const Footer = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with Gradient */}
      <div className="bg-gradient-to-br from-[#ff7b01] via-orange-500 to-[#ff7b01] relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        
        <footer className="body-font tracking-wider relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              
              {/* Social Links Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
                <div className="space-y-4">
                  <Link href={githubLink} target="_blank" text="GitHub" className="group" />
                  <Link href={linkedinLink} target="_blank" text="LinkedIn" className="group" />
                  <Link href={instagramLink} target="_blank" text="Instagram" className="group" />
                  <Link href={whatsAppLink} target="_blank" text="WhatsApp" className="group" />
                  <Link href={twitterLink} target="_blank" text="Twitter" className="group" />
                </div>
              </div>
              
              {/* Additional Links Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">More Links</h3>
                <div className="space-y-4">
                  <Link href={youtubeLink} target="_blank" text="Youtube" className="group" />
                  <Link href={discordLink} target="_blank" text="Discord" className="group" />
                  <Link href={communityGuidelines} target="_blank" text="Community Guidelines" className="group" />
                  <Link href="#" target="_blank" text="Donate" className="group" />
                </div>
              </div>
              
              {/* Contact Info Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
                <div className="space-y-4 text-white/90">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>ssosc@sitmng.ac.in</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>+91 9141258312</span>
                  </div>
                </div>
              </div>
              
              {/* Logo and Description Section */}
              <div className="space-y-6">
                <div className="flex justify-center lg:justify-start">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                    <Image
                      src="/SSOSC.LOGO-WHITE.png"
                      alt="SSOSC Logo"
                      width={150}
                      height={140}
                      className="relative transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Srinivas Student Open-Source Community
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Srinivas Institute of Technology, Valachil, Mangalore - 574143
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bottom Divider */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <div className="text-center">
                <p className="text-white/80 text-sm">
                  SSOSC © {new Date().getFullYear()} - Empowering the future of open source
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
