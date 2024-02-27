const datas = [
    {
      id: 1,
      title: "Avengers",
      Category: 'Actiovn',
      img: require('../Components/Images/the-avengers-superhero-movie-eeotwqkmypkvalg9.jpg'),
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708621265/Easy_Tawa_Pizza___%E0%A4%A4%E0%A4%B5%E0%A4%BE_%E0%A4%AA%E0%A4%BF%E0%A4%9C%E0%A5%8D%E0%A4%9C%E0%A4%BE_%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A4%BF%E0%A4%AA%E0%A5%80___Pizza_at_home_without_oven_without_yeast___Chef_Ranveer_Brar_bnhksu.mp4',
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
      Category: 'Action',
      img: require('../Components/Images/Deadpool.jpg'),
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708621265/Easy_Tawa_Pizza___%E0%A4%A4%E0%A4%B5%E0%A4%BE_%E0%A4%AA%E0%A4%BF%E0%A4%9C%E0%A5%8D%E0%A4%9C%E0%A4%BE_%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A4%BF%E0%A4%AA%E0%A5%80___Pizza_at_home_without_oven_without_yeast___Chef_Ranveer_Brar_bnhksu.mp4',
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
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1708621265/Easy_Tawa_Pizza___%E0%A4%A4%E0%A4%B5%E0%A4%BE_%E0%A4%AA%E0%A4%BF%E0%A4%9C%E0%A5%8D%E0%A4%9C%E0%A4%BE_%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A4%BF%E0%A4%AA%E0%A5%80___Pizza_at_home_without_oven_without_yeast___Chef_Ranveer_Brar_bnhksu.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    
    {
      id: 5,
      title: "Animal",
      Category: 'comedy',
      img: require('../Components/Images/Animal-HD-WAllpaper-22.jpg'),
      video:'',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
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
      title: "Avengers Endgame",
      Category: 'Topmov',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920084/MovieImages/Hollywood/yqjzembguj6hlq8wgq4b.jpg',
      video:'',
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
      Category: 'Topmov',
      img: 'https://res.cloudinary.com/dkb6cpj99/image/upload/v1708920080/MovieImages/Hollywood/sx3rh5mrs4vtgjtq1u4t.jpg',
      video:'',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    {
      id: 6,
      title: "Deadpool 2",
      Category: 'Upcoming-movie',
      img: require('../Components/Images/Deadpool_2.jpg'),
      video:'https://res.cloudinary.com/dkb6cpj99/video/upload/v1709044312/Movievideos/Hollywood%20trailers/yimmbytzpcau53ggqnbz.mp4',
      desc: `lLorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Nulla laborum officiis numquam aut quod iusto deleniti, ullam molestias rem. Incidunt, si
      nt. Praesentium vero quod apenriam est cupiditate aliquid iusto necessitatibus ullam ea dolore.`,
      date: '20-11-2023',
      age:'14+',
      time: "2h 20min"
    },
    
  ]

export default datas
