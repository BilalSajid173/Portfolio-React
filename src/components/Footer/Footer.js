import Waves from "./Waves";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <>
      <Waves />
      <div className="bg-[#888cea] dark:bg-[#0a0c49] flex flex-wrap justify-center items-center py-10 -mt-[1px]">
        <div className="dark:text-gray-200">
          <a
            href="https://github.com/BilalSajid173"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="large" className="mx-2 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/bilal-sajid-5b1218219/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="large" className="mx-2 text-white" />
          </a>
          <a
            href="https://www.facebook.com/bilal.sajid.71697/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon fontSize="large" className="mx-2 text-white" />
          </a>
          <p className="mt-4">Created By Bilal Sajid ©</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
