//
// Iteration 4 | Type aliases
//

type Book ={
    title:string,
    year:number,
    genres:string[],
    rating?:number,
    auther:string,
    numberOfPages?:number
}

type Movie ={
    title:string,
    year:number,
    genres:string[],
    rating?:number,
    director:string,
    durationInMinutes?:number
}
/*enum MusicAlbum {
    "studio Album",
    "Live Album",
    "Soundtrack",
    "Other"
}*/
type Music ={
    title:string;
    year:number;
    genres:string[];
    rating?:number;
    artist:string;
    numberOfTracks?:number;
    durationInMinutes:number;
    MusicAlbum: "studio Album"| "Live Album"|"Soundtrack"|"Other";
  }

  function getYearsSinceRelease(mediaItem:Book | Movie | Music):number{
    const currentYear = new Date().getFullYear();
    return currentYear - mediaItem.year
  }