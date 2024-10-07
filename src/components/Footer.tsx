import Twitter from "@/assets/icons/x-social.svg";
import Instagram from "@/assets/icons/insta.svg";
import TikTok from "@/assets/icons/tiktok.svg";
import Youtube from "@/assets/icons/youtube.svg";
export const Footer = () => {
    return (
        <footer className="border-t-2 border-white/20">
            <div className="container flex flex-col gap-y-3 md:gap-y-0 md:flex-row justify-between items-center py-5">
                <p className="text-white/60">© 2024 Your Company, Inc. All rights reserved</p>
                <ul className="flex gap-2 text-white/60">
                    <li>
                        <Twitter />
                    </li>
                    <li>
                        <Instagram />
                    </li>
                    <li>
                        <TikTok />
                    </li>
                    <li>
                        <Youtube />
                    </li>
                </ul>
            </div>
        </footer>
    );
};
