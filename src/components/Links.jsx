import Link from "next/link";

const Links = ({ href, text, target }) => {
  return (
    <div className="pt-2">
      <Link
        className="hover:underline decoration-chartreuse-100 underline-offset-8"
        href={href}
        target={target}
      >
        {text}
      </Link>
    </div>
  );
};

export default Links;
