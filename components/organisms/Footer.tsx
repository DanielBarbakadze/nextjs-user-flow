import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full p-16 border-t-1 border-solid border-gray-1">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center"
      >
        <span>Author&nbsp;</span>
        <strong>Daniel Barbakadze</strong>. Created with
        <span className="pl-8">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
