interface ItemProps {
    id : string
    title : string
    cover : string
    description : string
    location : string
    equipments : string []
    host : {
      name : string
      picture : string
    }
    pictures : string[]
    rating : string
    tags: string[]
  }
  
type DataProps = ItemProps[]

interface BannerProps {
    image : string
    title : string
}

interface DropdownProps {
    title : string
    content : any
}

interface Cardprops {
    id : string
    cover : string
    title : string
}

interface RatingProps {
    rating : string
}

interface SliderProps {
    images : string[]
}
interface LodgingIndoProps {
    title : string
    location : string
    tags: string[]
    host : {
        name : string
        picture : string
    }
    rating : string
}

type NavProps = {
    label : string
    id : string
    path : string
  }
  type ArrNav = NavProps[]


export type {ItemProps, 
    DataProps, 
    DropdownProps, 
    Cardprops, 
    BannerProps, 
    RatingProps, 
    SliderProps,
    LodgingIndoProps,
    ArrNav
}