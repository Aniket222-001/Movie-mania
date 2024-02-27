const datas = [
  {
    id: 1,
    title: "The Boys",
    Category: 'Topmov',
    img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920133/MovieImages/Web%20series/qjvz1lhmmcqphv7oyi7c.jpg',
    video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044403/Movievideos/Web%20series%20trailers/fyesrbwlt2x4jnt2nsl0.mp4',
    desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
    nt. Praesentium vero quod aperiam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
    date: '20-11-2023',
    age:'14+',
    time: "2h 20min"

  },
  {
    id: 2,
    title: "Mirzapur",
    Category: 'Topmov',
    img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920126/MovieImages/Web%20series/pe6p4gfuaekmtzumzysj.jpg',
    video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044388/Movievideos/Web%20series%20trailers/ogasoyvfomwbvqerzh43.mp4',
    desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
    nt. Praesentium vero quod aperiam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
    date: '20-11-2023',
    age:'14+',
    time: "2h 20min"
  },
  {
    id: 3,
    title: "Farzi",
    Category: 'Topmov',
    img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920123/MovieImages/Web%20series/lkxzrzgf7qd02la8kmod.jpg',
    video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044393/Movievideos/Web%20series%20trailers/xvuqfgshq8ini3x3hynd.mp4',
    desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
    nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
    date: '20-11-2023',
    age:'14+',
    time: "2h 20min"
  },
  {
    id: 4,
    title: "Asur",
    Category: 'Topmov',
    img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920122/MovieImages/Web%20series/jwct4agxgxtbc5ptzjcx.jpg',
    video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044376/Movievideos/Web%20series%20trailers/ekfuez7nle2c4r2xo70r.mp4',
    desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
    nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
    date: '20-11-2023',
    age:'14+',
    time: "2h 20min"
  },
  {
    id: 5,
    title: "Aasharam",
    Category: 'Thriller',
    img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920126/MovieImages/Web%20series/hmx7ijfc6ca9oey2gbmo.webp',
    video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044384/Movievideos/Web%20series%20trailers/alcjhjfpu2vusro30fou.mp4',
    desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
    nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
    date: '20-11-2023',
    age:'14+',
    time: "2h 20min"
  },
  {
    id: 6,
    title: "Night Manager",
    Category: 'Thriller',
    img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920124/MovieImages/Web%20series/vs1a0e8ossfxemwmvrod.jpg',
    video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044385/Movievideos/Web%20series%20trailers/t1hgyl1nobdelf1072ld.mp4',
    desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
    nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
    date: '20-11-2023',
    age:'14+',
    time: "2h 20min"
  },
  {
    id: 8,
    title: "Money Heist",
    Category: 'Action',
    img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920124/MovieImages/Web%20series/adgrn7ayolvpyfuakoly.jpg',
    video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044395/Movievideos/Web%20series%20trailers/qszfkou14cxpyyn89twh.mp4',
    desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
    nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
    date: '20-11-2023',
    age:'14+',
    time: "2h 20min"
  },
  {
    id: 9,
    title: "Loki",
    Category: 'Thriller',
    img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920124/MovieImages/Web%20series/t0d9lewdhrrzrkzqpkxp.jpg',
    video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044380/Movievideos/Web%20series%20trailers/ipgbz320794j1gfpd03e.mp4',
    desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
    nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
    date: '20-11-2023',
    age:'14+',
    time: "2h 20min"
  },
  {
    id: 10,
    title: "Aspirants",
    Category: 'Drama',
    img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920122/MovieImages/Web%20series/e5b94qo0s9rbghb0oh6g.jpg',
    video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044416/Movievideos/Web%20series%20trailers/ylps7xjbm0l5wcbecekp.mp4',
    desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
    nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
    date: '20-11-2023',
    age:'14+',
    time: "2h 20min"
  },
  {
    id: 11,
    title: "Scam 1992",
    Category: 'Drama',
    img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920122/MovieImages/Web%20series/gem1n7vphozzdrsikbsz.jpg',
    video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044398/Movievideos/Web%20series%20trailers/iohzlcghqmjqtm0zp1z0.mp4',
    desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
    nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
    date: '20-11-2023',
    age:'14+',
    time: "2h 20min"
  },
  {
    id: 12,
    title: "Family Man",
    Category: 'Drama',
    img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920121/MovieImages/Web%20series/pcgztudqjggpzu3vya8k.jpg',
    video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044415/Movievideos/Web%20series%20trailers/wuouc5uytolavy0fqiff.mp4',
    desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
    nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
    date: '20-11-2023',
    age:'14+',
    time: "2h 20min"
  },
  
]

export default datas