const datas = [
    {
      id: 1,
      title: "Avengers",
      Category: 'Action',
      img: require('../Components/Images/the-avengers-superhero-movie-eeotwqkmypkvalg9.jpg'),
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044250/Movievideos/Hollywood%20trailers/ygt8a5jrcujqtsspcuau.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod aperiam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"

    },
    {
      id: 2,
      title: "Deadpool",
      Category: 'Topmov',
      img: require('../Components/Images/Deadpool.jpg'),
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044264/Movievideos/Hollywood%20trailers/mh0tavs1aag1lrgfi9g8.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod aperiam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 3,
      title: "Justice League",
      Category: 'Action',
      img: require('../Components/Images/justice-league2751453.jpg'),
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044257/Movievideos/Hollywood%20trailers/d6hrtfipbjlt5jreaibj.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 4,
      title: "Avengers Endgame",
      Category: 'Topmov',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920084/MovieImages/Hollywood/yqjzembguj6hlq8wgq4b.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044276/Movievideos/Hollywood%20trailers/hv4ofttcectiadfad3qn.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 5,
      title: "Lord of the Rings",
      Category: 'Action',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920080/MovieImages/Hollywood/sx3rh5mrs4vtgjtq1u4t.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044314/Movievideos/Hollywood%20trailers/eepph17y1lo4qjlwg2ep.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 6,
      title: "Wolverine",
      Category: 'Action',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920080/MovieImages/Hollywood/tbufrnxm0zlgomnepei9.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044249/Movievideos/Hollywood%20trailers/ugcmyzfmkbbncbeeii2k.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 7,
      title: "Inception",
      Category: 'Thriller',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920079/MovieImages/Hollywood/c89jdcojznofimkmansx.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044256/Movievideos/Hollywood%20trailers/el0iojftj1rke4zqtl6f.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 8,
      title: "Star wars",
      Category: 'Sci-fi',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920079/MovieImages/Hollywood/fqqra1gjwwkqeqqq9u02.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044269/Movievideos/Hollywood%20trailers/xvms6q00hde2ju6nvuue.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 9,
      title: "Batman",
      Category: 'Thriller',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920079/MovieImages/Hollywood/xwe95n6q7cgbptpccqq4.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044279/Movievideos/Hollywood%20trailers/z6tack9s0n2kwzbxqpia.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 10,
      title: "Avatar",
      Category: 'Sci-fi',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920078/MovieImages/Hollywood/x9lkyhpqc1icy0stmwwv.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044318/Movievideos/Hollywood%20trailers/qkm4d7ouxd75zs9f14sb.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 11,
      title: "Godzilla",
      Category: 'Thriller',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920078/MovieImages/Hollywood/uawa5p5rgd9ies6ldgrg.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044329/Movievideos/Hollywood%20trailers/gtecdjeeisi2dpyfvzym.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 12,
      title: "Thor",
      Category: 'Topmov',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920079/MovieImages/Hollywood/efambb5ne7e3odjzn3yz.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044300/Movievideos/Hollywood%20trailers/wij0htvectuth4ceavpg.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 12,
      title: "Dr Strange",
      Category: 'Topmov',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920079/MovieImages/Hollywood/fe5q1ycscgllt6f5mpfw.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044278/Movievideos/Hollywood%20trailers/hxkz7kkdjqnsendzhszy.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    
  ]

export default datas