const datas = [
    {
      id: 1,
      title: "Animal",
      Category: 'Topmov',
      img: require('../Components/Images/Animal-HD-WAllpaper-22.jpg'),
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708887355/Movievideos/Bollywoodtrailers/sk06uwezr1vd6b2figta.mp4',
      desc: `A son’s love for his father. Often away due to 
      work the father is unable to comprehend the intensity of his son’s 
      love. Ironically, this fervent love and admiration for his father and family 
      creates conflict between the father and son.'`,
      age:'14+',
      time: "2h 20min"

    },
    {
      id: 2,
      title: "Salaar",
      Category: 'Topmov',
      img: require('../Components/Images/Salaar-2023d207559edd697495.jpg'),
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708885982/Movievideos/Bollywoodtrailers/o6gygnc8ogjcbtgbfesf.mp4',
      desc: `Salaar tells a thrilling story about power struggles and revenge. 
      The main characters are Devaratha, played by Prabhas, and his childhood friend
       Vardharaja Mannar, played by Prithviraj Sukumaran. Prabhas, as Salaar, deals with
        the challenges of his character, guided by a strong sense of purpose.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 3,
      title: "Bahubali",
      Category: 'Topmov',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708866723/MovieImages/Bollywood/Bahubali.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708885934/Movievideos/Bollywoodtrailers/ymtdx0dbdrtpamfhzrto.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 4,
      title: "Agnnepath",
      Category: 'Action',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708866723/MovieImages/Bollywood/Agneepath.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708885948/Movievideos/Bollywoodtrailers/j4b901tn6ugspzgnfmkn.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 5,
      title: "Baiman Love",
      Category: 'Romance',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708866723/MovieImages/Bollywood/baiimanlove.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708885931/Movievideos/Bollywoodtrailers/bibgjtnvuqeh3llfrtm4.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 6,
      title: "Comando 2",
      Category: 'Action',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708866723/MovieImages/Bollywood/Commander2.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708885959/Movievideos/Bollywoodtrailers/gvtoivuqigspqjcbqb6h.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 7,
      title: "Kick",
      Category: 'Topmov',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708866724/MovieImages/Bollywood/lpc0lfsamxcrx163qqfy.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708885985/Movievideos/Bollywoodtrailers/h4sqe1el6pnyjfcj7bkf.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 8,
      title: "Dear zindagi",
      Category: 'Romance',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708866725/MovieImages/Bollywood/wg0lfrmpyg78poh2yc51.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708885926/Movievideos/Bollywoodtrailers/efdkdjxrze7dwrbcqxdx.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 9,
      title: "Raees",
      Category: 'Thriller',
      img: require('../Components/Images/justice-league2751453.jpg'),
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708885972/Movievideos/Bollywoodtrailers/kcelr73d2grgqdehdogl.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 10,
      title: "Satymav jayte",
      Category: 'Comedy',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708866724/MovieImages/Bollywood/lpc0lfsamxcrx163qqfy.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708885965/Movievideos/Bollywoodtrailers/rzgrnjoviyquuomvxcpo.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 11,
      title: "Kaala",
      Category: 'Thriller',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708866724/MovieImages/Bollywood/zevfcx4muckg7owmp10o.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708885984/Movievideos/Bollywoodtrailers/o875hejtrsbbnxlqkwjv.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 12,
      title: "Kashmora",
      Category: 'Action',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708866725/MovieImages/Bollywood/hxyrap2g1ttpfsl8e2se.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708885950/Movievideos/Bollywoodtrailers/xtnghzyn8bcors1skxqk.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 13,
      title: "Ms dhoni",
      Category: 'Comedy',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708866725/MovieImages/Bollywood/adfpcrbxxcgbzwypdp5z.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708885991/Movievideos/Bollywoodtrailers/zarpdyp6w6qmbydjdgad.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 14,
      title: "Kabali",
      Category: 'Comedy',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708866724/MovieImages/Bollywood/pkxafd1jo3baapl6ger3.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708885936/Movievideos/Bollywoodtrailers/byrqsvpdkvngevwpznrr.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 15,
      title: "Raam Leela",
      Category: 'Romance',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708866724/MovieImages/Bollywood/xdr1f6q4cxproe1rcsrk.jpg',
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708885942/Movievideos/Bollywoodtrailers/p2u4akdu1hpowyu08fg0.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
  ]

export default datas