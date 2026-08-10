const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeMenu");
const menu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
  menu.classList.remove("translate-x-full");

  overlay.classList.remove("opacity-0", "invisible");
  overlay.classList.add("opacity-100");

  document.body.classList.add("overflow-hidden");
}

function closeMenu() {
  menu.classList.add("translate-x-full");

  overlay.classList.remove("opacity-100");
  overlay.classList.add("opacity-0");

  setTimeout(() => {
    overlay.classList.add("invisible");
  }, 300);

  document.body.classList.remove("overflow-hidden");
}

menuBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const services = [
  {
    title: "Kitchen Backsplash",
    image: "./assets/images/webp/kitchen.webp",
    description:
      "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. ",
    link: "#",
  },

  {
    title: "Custom Showers",
    image: "./assets/images/webp/showers.webp",
    description:
      "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. ",
    link: "#",
  },

  {
    title: "Custom Flooring",
    image: "./assets/images/webp/flooring.webp",
    description:
      "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. ",
    link: "#",
  },

  {
    title: "Large Format Tiling",
    image: "./assets/images/webp/large-tiling.webp",
    description:
      "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. ",
    link: "#",
  },

  {
    title: "Wall Tiling",
    image: "./assets/images/webp/wall-tiling.webp",
    description:
      "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. ",
    link: "#",
  },

  {
    title: "ADA Compliant Showers",
    image: "./assets/images/webp/ada-shower.webp",
    description:
      "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. ",
    link: "#",
  },

  {
    title: "Fireplace Tiling",
    image: "./assets/images/webp/fireplace-tiling.webp",
    description:
      "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. ",
    link: "#",
  },
];

const serviceContainer = document.getElementById("serviceContainer");

serviceContainer.innerHTML = services
  .map(
    (service) => `

<div
class="group w-full max-w-[364px] rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-500 ease-out
hover:-translate-y-2 hover:border-red-100 hover:shadow-[0_18px_45px_rgba(255,0,0,0.12)]">

    <img
        width="316"
        height="246"
        src="${service.image}"
        alt="${service.title}"
        class="w-full rounded-xl object-cover transition duration-700 group-hover:scale-[1.03]">

    <h3
        class="mt-6 max-w-[316px] text-xl lg:text-2xl font-semibold !leading-[159%]">

        ${service.title}

    </h3>

    <p
        class="mt-3 max-w-[316px] text-sm md:text-base text-gray-500 !leading-[163%]">

        ${service.description}

    </p>

    <a
        href="${service.link}"
        class="mt-6 inline-flex items-center gap-2 leading-[163%] font-semibold text-red-500 transition-all duration-300 group-hover:text-red-600">

        Learn more

        <span
        class="transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">

            →

        </span>

    </a>

</div>

`,
  )
  .join("");

const marquee = document.querySelector(".marquee");

marquee.innerHTML += marquee.innerHTML;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".work-card").forEach((card, index) => {
          card.style.transitionDelay = `${index * 150}ms`;

          card.classList.add("show");
        });

        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.25,
  },
);

document.querySelectorAll(".fade-up").forEach((section) => {
  observer.observe(section);
});

document.querySelectorAll(".work-card").forEach((card) => {
  card.classList.add("fade-up");
});

const blogs = [
  {
    title: "Lorem Ipsum Koda Astrobel: Sutaveligen. Rodod Bånera Viliga.",

    image: "./assets/images/webp/kitchen.webp",

    link: "#",
  },

  {
    title: "Lorem Ipsum Koda Astrobel: Sutaveligen. Rodod Bånera Viliga.",

    image: "./assets/images/webp/kitchen.webp",

    link: "#",
  },

  {
    title: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. ",

    image: "./assets/images/webp/kitchen.webp",

    link: "#",
  },
];

const blogContainer = document.getElementById("blogContainer");

blogContainer.innerHTML = blogs
  .map(
    (blog) => `

<div
class="group max-w-[364px] rounded-3xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

    <div class="overflow-hidden rounded-2xl">

        <img
            src="${blog.image}"

            alt="${blog.title}"

            class="h-[246px] w-[316px] object-cover transition duration-500 group-hover:scale-110">

    </div>

    <h3

        class="mt-6 text-2xl font-semibold leading-[159%] text-dark-black">

        ${blog.title}

    </h3>

    <a

        href="${blog.link}"

        class="mt-4 inline-flex items-center gap-2.5 text-md leading-165 font-semibold text-red transition-all duration-300 group-hover:gap-3">

        Learn more

        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2">

            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14m-6-6l6 6-6 6"/>

        </svg>

    </a>

</div>

`,
  )
  .join("");

const faqs = [
  {
    question: "Lörem ipsum koda astrobel: sutaveligen.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum molestiae natus laboriosam, temporibus corporis quidem. Repellendus, consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    question: "Rodod bänera viliga.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque officiis cumque, vero consequatur quibusdam sint. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    question: "Pregigt primasofi dede facebooka: förutom.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloremque quis perspiciatis dicta, suscipit rerum officia tempora.",
  },

  {
    question: "Ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos accusantium ducimus illo veritatis nostrum beatae.",
  },

  {
    question: "Rodod bänera viliga. Pregigt primasofi dede facebooka.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veniam accusantium architecto minus aspernatur temporibus.",
  },
];

const faqContainer = document.getElementById("faqContainer");

faqContainer.innerHTML = faqs
  .map(
    (faq, index) => `

<div class="faq-item mb-6 rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">

    <button
        class="faq-btn flex w-full items-center justify-between px-5 py-[21px] text-left">

        <span
            class="font-medium text-lg text-dark-black leading-165">

            ${faq.question}

        </span>

        <span
            class="icon flex h-6 w-6 items-center justify-center duration-300">

            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM14.06 9.17L10.53 12.7C10.38 12.85 10.19 12.92 10 12.92C9.81 12.92 9.62 12.85 9.47 12.7L5.94 9.17C5.65 8.88 5.65 8.4 5.94 8.11C6.23 7.82 6.71 7.82 7 8.11L10 11.11L13 8.11C13.29 7.82 13.77 7.82 14.06 8.11C14.35 8.4 14.35 8.87 14.06 9.17Z" fill="#FF0000"/>
</svg>


        </span>

    </button>

    <div
        class="faq-content grid grid-rows-[0fr] transition-all duration-500">

        <div class="overflow-hidden">

            <p
                class="px-5 pb-5 pt-0 text-black/60 leading-7">

                ${faq.answer}

            </p>

        </div>

    </div>

</div>

`,
  )
  .join("");

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-btn");

  const content = item.querySelector(".faq-content");

  const icon = item.querySelector(".icon");

  btn.addEventListener("click", () => {
    faqItems.forEach((faq) => {
      if (faq !== item) {
        faq.querySelector(".faq-content").classList.remove("grid-rows-[1fr]");

        faq.querySelector(".faq-content").classList.add("grid-rows-[0fr]");

        faq.querySelector(".icon").classList.remove("rotate-180");
      }
    });

    content.classList.toggle("grid-rows-[1fr]");

    content.classList.toggle("grid-rows-[0fr]");

    if (content.classList.contains("grid-rows-[1fr]")) {
      icon.classList.add("rotate-180");
    } else {
      icon.classList.remove("rotate-180");
    }
  });
});

const locations = [
  { name: "Knoxville" },

  { name: "Sevierville" },

  { name: "Maynardville" },

  { name: "Knoxville" },

  { name: "Sevierville" },

  { name: "Maynardville" },

  { name: "Knoxville" },

  { name: "Sevierville" },

  { name: "Maynardville" },

  { name: "Knoxville" },

  { name: "Sevierville" },

  { name: "Maynardville" },

  { name: "Knoxville" },

  { name: "Sevierville" },

  { name: "Maynardville" },

  { name: "Knoxville" },

  { name: "Sevierville" },

  { name: "Maynardville" },

  { name: "Knoxville" },

  { name: "Sevierville" },
];

const locationContainer = document.getElementById("locationContainer");

locationContainer.innerHTML = locations
  .map(
    (location, index) => `

<div
    class="group flex items-center gap-3
    rounded-2xl bg-white p-6
    shadow-[0_8px_25px_rgba(0,0,0,0.04)]
    transition-all duration-500 ease-out
    hover:-translate-y-2
    hover:scale-[1.02]
    hover:border-red-100
    hover:shadow-[0_18px_40px_rgba(255,0,0,0.14)]

    ${
      index < 18
        ? "lg:col-span-2"
        : index === 18
          ? "lg:col-start-2 lg:col-span-2"
          : "lg:col-start-4 lg:col-span-2"
    }">

    <!-- Icon -->

    <div
        class="flex h-12 w-12 shrink-0 items-center justify-center
        rounded-full bg-red
        transition-all duration-500 ease-out
        group-hover:rotate-[360deg]
        group-hover:scale-110">

   <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.7754 10.5625C24.4629 4.7875 19.4254 2.1875 15.0004 2.1875C15.0004 2.1875 15.0004 2.1875 14.9879 2.1875C10.5754 2.1875 5.52536 4.775 4.21286 10.55C2.75036 17 6.70036 22.4625 10.2754 25.9C11.6004 27.175 13.3004 27.8125 15.0004 27.8125C16.7004 27.8125 18.4004 27.175 19.7129 25.9C23.2879 22.4625 27.2379 17.0125 25.7754 10.5625ZM15.0004 16.825C12.8254 16.825 11.0629 15.0625 11.0629 12.8875C11.0629 10.7125 12.8254 8.95 15.0004 8.95C17.1754 8.95 18.9379 10.7125 18.9379 12.8875C18.9379 15.0625 17.1754 16.825 15.0004 16.825Z" fill="white"/>
</svg>


    </div>


    <!-- Text -->

    <h3
        class="font-semibold
        text-dark-black
        text-2xl
        leading-160
        transition-all duration-300
        group-hover:text-[var(--color-red)]">

        ${location.name}

    </h3>

</div>

`,
  )
  .join("");
