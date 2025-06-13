export type Exec = {
    name: string;
    title: string;
    src: string;
    alt: string;
    url: string;
    bgColor: string;
}

const teamdata: Exec[] = [
    {
        name: "Troy Leishman",
        title: "President",
        src: "/troy.webp",
        alt: "Troy, President of 3DW",
        url: "www.linkedin.com/in/troyleishman/",
        bgColor: "bg-red-500"
    },
    {
        name: "Emma Zhang",
        title: "VP Events",
        src: "/emma.webp",
        alt: "Emma, VP Events",
        url: "/not-found", // TODO: Find link 
        bgColor: "bg-teal-500"
    },
    {
        name: "Kevin Shang",
        title: "VP Finance",
        src: "/kevin.webp",
        alt: "Kevin, VP Finance",
        url: "www.linkedin.com/in/kevin--shang/",
        bgColor: "bg-purple-500",
    },
    {
        name: "Doris Wang",
        title: "Communications",
        src: "/doris.webp",
        alt: "Doris Wang, Communications",
        url: "www.linkedin.com/in/doris-w-949aa7222/", 
        bgColor: "bg-teal-500",
    },
    {
        name: "Johaan Khan",
        title: "VP Educations",
        src: "/johaan.webp", // TODO: Get image 
        alt: "Johaan Khan, VP Educations",
        url: "www.linkedin.com/in/johaan-khan-3889611a9/",
        bgColor: "bg-purple-500",
    },
    {
        name: "Sabrina Luo",
        title: "VP Marketing",
        src: "/sabrina.webp", // TODO: Get image 
        alt: "Sabrina Luo, VP Marketing",
        url: "www.linkedin.com/in/sabrina-luo861/",
        bgColor: "bg-teal-500",
    },
    {
        name: "Kyler See",
        title: "VP Outreach",
        src: "/kyler.webp", // TODO: Get image 
        alt: "Kyler See, VP Outreach",
        url: "www.linkedin.com/in/kyler-see/?originalSubdomain=ca",
        bgColor: "bg-purple-500", 
    }, 
    {
        name: "Justin",
        title: "VP Projects",
        src: "/justin.webp", // TODO: Double check link 
        alt: "Justin, VP Projects",
        url: "www.linkedin.com/in/zhangjinliu/", 
        bgColor: "bg-purple-500"
    },
];


export default teamdata; 