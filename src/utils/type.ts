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

type toggleProps = boolean

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
    rate : string
    pictures: string[]
    tags : string[]
    location: string
}

interface RatingProps {
    rating : string
}

interface SliderProps {
    images : string[]
    classname : string
    id: string
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
interface GalleryBtnProps{
    moveSlide: any
    direction: string
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
    ArrNav,
    GalleryBtnProps,
    toggleProps
}