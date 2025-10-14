import { cn } from "@/lib/utils";
import { version } from "@/package.json";

const Footer = ({ classname }: { classname?: string }) => {
  return (
    <footer
      className={cn(
        classname,
        "text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4",
      )}
    >
      {version} | Star on{" "}
      <a
        href="https://github.com/Jazee6/cloudflare-ai-web"
        target="_blank"
        rel="noopener"
      >
        Github
      </a>
        {" | "}
      <a
        href="https://github.com/DaBaival/cloudflare-ai-web-zh"
        target="_blank"
        rel="noopener"
      >
        汉化
      </a>
    </footer>
  );
};

export default Footer;
