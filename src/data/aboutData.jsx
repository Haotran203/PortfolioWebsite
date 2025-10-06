const aboutData = {
    title: "About Me",
    subtitle: "Discover my journey, passions, and the story behind my work",
    image: "/src/assets/face.jpg",

    biodata: [
        { label: "Name", value: "Tran Quang Hao", icon: "bx bx-id-card" },
        { label: "Date of Birth", value: "March, 19-2003", icon: "bx bx-calendar" },
        { label: "Address", value: "Ngu Hanh Son, Da Nang City", icon: "bx bx-map" },
        { label: "Email", value: "quanghaotran303@gmail.com", icon: "bx bx-envelope" },
        { label: "Phone", value: "(+84) 396 079 303", icon: "bx bx-phone" },
        { label: "Education", value: "Vietnam - Korea University of ICT", icon: "bx bx-book" },
        { label: "GPA", value: "2.91 / 4.00", icon: "bx bx-award" },
    ],

    resume: {
        label: "Download My Resume",
        href: "/public/TranQuangHao_CV_English.pdf",
        icon: "bx bx-download",
    },

    aboutNarrative: {
        whoAmI: {
            text: `I'm a frontend developer who crafts responsive, interactive, and clean UIs. With a background in Informatics Engineering, I blend design sense with technical logic.`,
            icon: "bx-info-circle"
        },
        approach: {
            text: `I focus on user-centered design, performance, and accessibility   always evolving with modern tech to deliver seamless digital experiences.`,
            icon: "bx-bulb"
        }
    }


};

export default aboutData;
