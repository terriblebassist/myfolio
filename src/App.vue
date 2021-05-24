<template>
    <div>
        <header class="header bg-gray-800 shadow">
            <div class="container mx-auto px-6 py-4">
                <div class="flex items-center justify-between">
                    <div>
                        <a class="flex items-center text-white hover:text-lightgreen" href="#">
                            <MyLogoComponent class="h-6 w-6 sm:h-6 sm:w-6"></MyLogoComponent>
                            <span class="mx-3 text-sm md:text-base">Abhinav Singh</span>
                        </a>
                    </div>
                    <div class="flex items-center -mx-2">
                        <a
                            class="flex items-center mx-2 text-white hover:text-lightgreen transition duration-500 ease-in-out transform hover:scale-110"
                            href="https://github.com/terriblebassist/resume/releases/latest/download/CV_ABHINAV_SINGH.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg class="h-5 w-5 sm:h-6 sm:w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd">
                                <path
                                    d="M22 0h-20v24h14l6-6v-18zm-6 18h4.36l-4.36 4.385v-4.385zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm-7.059-4.968c-1.147-.265-2.214-.497-1.697-1.473 1.573-2.97.417-4.559-1.244-4.559-1.694 0-2.821 1.65-1.244 4.559.532.982-.575 1.214-1.697 1.473-1.024.237-1.062.745-1.059 1.635l.001.333h7.997l.001-.323c.004-.896-.03-1.407-1.058-1.645zm7.059.968h-4v1h4v-1zm0-2v-1h-4v1h4zm0-4h-4v1h4v-1z"
                                />
                            </svg>
                            <span class="px-2 text-white">Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <section class="bg-white mt-10 home">
            <div class="max-w-2xl px-6 text-center mx-auto py-8">
                <h2 class="text-5xl font-semibold text-gray-800">
                    Hi, I'm
                    <span class="bg-seagreen text-white rounded px-1 animate-pulse">Abhinav</span>
                </h2>
                <p class="text-gray-600 mt-4">Software Developer • Pianist • Bassist • Trekking Enthusiast</p>
                <span class="inline-flex my-4">
                    <a
                        class="text-gray-500 hover:text-seagreen transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        href="https://www.facebook.com/abhinavsingh20111996/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a
                        class="ml-4 text-gray-500 hover:text-seagreen transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        href="https://www.linkedin.com/in/abhinavsingh1996/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            />
                        </svg>
                    </a>
                    <a
                        class="ml-4 text-gray-500 hover:text-seagreen transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        href="https://www.instagram.com/abhinav.singh96/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a class="ml-4 text-gray-500 hover:text-seagreen transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="https://github.com/terriblebassist" target="_blank" rel="noopener noreferrer">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 512 512">
                            <path
                                d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"
                            />
                        </svg>
                    </a>
                </span>
                <div class="flex justify-center h-72 w-72 items-center mx-auto my-6">
                    <img class="object-fill rounded-full" src="./assets/profile.jpeg" />
                </div>
            </div>
        </section>
        <section class="bg-gray-800 pattern py-20 mt-20">
            <div class="max-w-5xl px-6 mx-auto text-center">
                <h2 class="text-2xl text-lightgreen project-t">Projects</h2>
                <div class="flex items-center justify-center mt-10">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
                        <div class="max-w-xs w-full project-l">
                            <div class="flex items-center justify-center h-48 w-72 bg-white border-b-8 border-teal-400 rounded-3xl overflow-hidden">
                                <img class="object-cover h-36" src="./assets/nodeseeker.png" alt="" />
                            </div>
                            <a
                                href="https://nodeseeker.herokuapp.com/playground"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                            >
                                <div class="py-2 px-3 text-center text-sm">
                                    <p class="text-lightgreen">GraphQL/REST API for fetching NAV of mutual funds, written using ExpressJS.</p>
                                    <span class="block text-gray-500 mt-2 hover:text-lightgreen">View Deployment</span>
                                </div>
                            </a>
                        </div>
                        <div class="max-w-xs w-full project-b">
                            <div class="flex items-center justify-center h-48 w-72 bg-white border-b-8 border-teal-400 rounded-3xl overflow-hidden">
                                <img class="object-cover h-36" src="./assets/investscape.png" alt="" />
                            </div>
                            <a
                                href="https://investscape-dash-int.herokuapp.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                            >
                                <div class="py-2 px-3 text-center text-sm">
                                    <p class="text-lightgreen">Dashboard to track mutual fund investments, designed using python dash.</p>
                                    <span class="block text-gray-500 mt-2 hover:text-lightgreen">View Deployment</span>
                                </div>
                            </a>
                        </div>
                        <div class="max-w-xs w-full project-r">
                            <div class="flex items-center justify-center h-48 w-72 bg-white border-b-8 border-teal-400 rounded-3xl overflow-hidden">
                                <img class="object-cover h-36" src="./assets/myfolio.png" alt="" />
                            </div>
                            <a href="#" class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div class="py-2 px-3 text-center text-sm">
                                    <p class="text-lightgreen">Basic portfolio website, designed using Tailwind CSS.</p>
                                    <span class="block text-gray-500 mt-2 hover:text-lightgreen">View Deployment</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-center mt-10">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                        <div class="max-w-xs w-full project-l">
                            <div class="flex items-center justify-center h-48 w-72 bg-white border-b-8 border-teal-400 rounded-3xl overflow-hidden">
                                <img class="object-cover h-36" src="./assets/navseeker.png" alt="" />
                            </div>
                            <a
                                href="https://navseeker-prod.herokuapp.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                            >
                                <div class="py-2 px-3 text-center text-sm">
                                    <p class="text-lightgreen">Spring boot app which fetches latest/historic NAV of a mutual fund.</p>
                                    <span class="block text-gray-500 mt-2 hover:text-lightgreen">View Deployment</span>
                                </div>
                            </a>
                        </div>
                        <div class="max-w-xs w-full project-b">
                            <div class="flex items-center justify-center h-48 w-72 bg-white border-b-8 border-teal-400 rounded-3xl overflow-hidden">
                                <img class="object-cover h-36" src="./assets/latexcv.png" alt="" />
                            </div>
                            <a
                                href="https://github.com/terriblebassist/resume/releases/latest"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                            >
                                <div class="py-2 px-3 text-center text-sm">
                                    <p class="text-lightgreen">LaTeX CV, with releases generated using Github Actions.</p>
                                    <span class="block text-gray-500 mt-2 hover:text-lightgreen">View Deployment</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-center mt-12 project-b">
                    <a class="flex items-center text-white hover:underline hover:text-lightgreen" href="https://github.com/terriblebassist" target="_blank" rel="noopener noreferrer">
                        <span>View Source On Github</span>
                        <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
        <section class="text-gray-600 body-font relative contact-wrapper">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl title-font mb-4 text-gray-900">Contact Me</h1>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" class="flex flex-wrap -m-2">
                        <input type="hidden" name="form-name" value="contact" />
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-seagreen focus:bg-white focus:ring-2 focus:ring-lightgreen text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    required
                                />
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-seagreen focus:bg-white focus:ring-2 focus:ring-lightgreen text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    required
                                />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-seagreen focus:bg-white focus:ring-2 focus:ring-lightgreen h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <button type="submit" class="flex mx-auto text-white bg-seagreen border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded text-lg transition duration-500 ease-in-out transform hover:scale-110">
                                Send
                            </button>
                        </div>
                    </form>
                    <div>
                        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <div class="p-2">
                                <a class="text-seagreen">asingh175@gmail.com</a>
                            </div>
                            <span class="inline-flex">
                                <a
                                    class="text-gray-500 hover:text-seagreen transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                                    href="https://www.facebook.com/abhinavsingh20111996/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a
                                    class="ml-4 text-gray-500 hover:text-seagreen transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                                    href="https://www.linkedin.com/in/abhinavsingh1996/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                        />
                                    </svg>
                                </a>
                                <a
                                    class="ml-4 text-gray-500 hover:text-seagreen transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                                    href="https://www.instagram.com/abhinav.singh96/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a
                                    class="ml-4 text-gray-500 hover:text-seagreen transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                                    href="https://github.com/terriblebassist"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 512 512">
                                        <path
                                            d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"
                                        />
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="bg-white">
            <div class="container mx-auto px-6 py-4">
                <div class="flex justify-center items-center">
                    <div class="text-gray-600">&copy; Abhinav Singh</div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
    import MyLogoComponent from "./components/mylogo.vue";

    export default {
        components: {
            MyLogoComponent,
        },
    };
</script>
