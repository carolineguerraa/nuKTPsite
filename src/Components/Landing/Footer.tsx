const navigation: { name: string; href: string; icon: any }[] = [
  {
    name: "Email",
    href: "mailto:info@ktpnu.com",
    icon: (props: any) => (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
        className="w-5 mt-[1.5px]"
        onClick={() => {
          window.location.href = "mailto:info@ktpnu.com";
        }}
      >
        <path
          fillRule="evenodd"
          d="M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ktpnorthwestern/",
    icon: (props: any) => (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
        onClick={() => {
          window.location.href = "https://www.instagram.com/ktpnorthwestern/";
        }}
      >
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kappa-theta-pi-kappa-chapter-9ab97525b/",
    icon: (props: any) => (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
        className="w-5 mt-[1.5px]"
        onClick={() => {
          window.location.href =
            "https://www.linkedin.com/in/kappa-theta-pi-kappa-chapter-9ab97525b/";
        }}
      >
        <path
          fillRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="bg-indigo-800 w-screen">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 lg:order-3">
          <p className="text-center text-base text-gray-50">Contact Us</p>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-50 transition hover:text-gray-300"
            >
              <span className="sr-only ">{item.name}</span>
              <item.icon className="h-6 w-6"/>
            </a>
          ))}
        </div>
        <div className="mt-8 lg:order-1 lg:mt-0">
          <p className="text-center text-base text-gray-50">
            &copy; 2025 Kappa Theta Pi Kappa Chapter. All Rights Reserved.
          </p>
        </div>
        <div className="lg:order-2 lg:mt-0 mt-8">
          <p className="text-base text-center text-gray-50">
            Website made by{" "}
            <a
              className="text-white underline"
              target="_blank"
              href="https://www.instagram.com/stevenewald/"
            >
              Steve Ewald
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              className="text-white underline"
              href="https://www.instagram.com/al3xisrobles/"
            >
              Alexis Robles
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
